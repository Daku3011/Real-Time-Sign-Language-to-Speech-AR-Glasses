"""Google Gemini Vision AI - Sign Language Interpreter.

Captures video frames and sends them to Google Gemini's multimodal API
to interpret full sign language gestures and sentences.
"""

import time
import threading
import io
import sys
import os
from typing import Optional, List, Callable
from PIL import Image
import numpy as np

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

try:
    from src.logger import setup_logger
    logger = setup_logger(__name__)
except Exception:
    import logging
    logger = logging.getLogger(__name__)

# Will be None if API key is not configured
_genai = None


def _init_gemini(api_key: str) -> bool:
    """Initialize the Gemini API with the given key."""
    global _genai
    try:
        import google.generativeai as genai
        genai.configure(api_key=api_key)
        _genai = genai
        logger.info("Gemini API initialized successfully")
        return True
    except ImportError:
        logger.error("google-generativeai package not installed. Run: pip install google-generativeai")
        return False
    except Exception as e:
        logger.error(f"Failed to initialize Gemini API: {e}")
        return False


class GeminiSignLanguageAI:
    """AI-powered sign language interpreter using Google Gemini Vision.

    Captures a burst of frames from the camera, sends them to Gemini,
    and returns the interpreted text.

    Attributes:
        model_name: Gemini model to use (e.g., 'gemini-2.5-flash')
        max_frames: Number of frames to capture per analysis
        capture_interval: Seconds between each frame capture
    """

    SIGN_LANGUAGE_PROMPT = (
        "You are an expert sign language interpreter. "
        "Analyze these video frames showing a person using sign language. "
        "The images are sequential frames captured over a few seconds. "
        "Identify the hand gestures, finger positions, and movements to determine "
        "what is being signed. Provide ONLY the interpreted text/sentence in English. "
        "If you cannot determine the sign language gesture, respond with 'Could not interpret'. "
        "Be concise - output only the interpreted words or sentence, nothing else."
    )

    def __init__(
        self,
        api_key: Optional[str] = None,
        model_name: str = "gemini-2.5-flash",
        max_frames: int = 5,
        capture_interval: float = 0.4,
        on_result: Optional[Callable[[str], None]] = None,
    ):
        """Initialize the Gemini Sign Language AI.

        Args:
            api_key: Google Gemini API key. If None, reads from GEMINI_API_KEY env var.
            model_name: Gemini model name to use.
            max_frames: Number of frames to capture per analysis burst.
            capture_interval: Seconds between frame captures.
            on_result: Callback fired with the interpreted text.
        """
        self.model_name = model_name
        self.max_frames = max_frames
        self.capture_interval = capture_interval
        self.on_result = on_result

        # State
        self._is_capturing = False
        self._is_processing = False
        self._captured_frames: List[np.ndarray] = []
        self._last_result: str = ""
        self._last_error: str = ""
        self._last_analysis_time: float = 0.0
        self._cooldown: float = 3.0  # Minimum seconds between API calls
        self._initialized = False

        # Load API key
        if api_key is None:
            api_key = os.environ.get("GEMINI_API_KEY", "")

        if not api_key:
            # Try loading from .env file
            try:
                from dotenv import load_dotenv
                env_path = os.path.join(
                    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                    ".env"
                )
                load_dotenv(env_path)
                api_key = os.environ.get("GEMINI_API_KEY", "")
            except ImportError:
                pass

        if api_key:
            self._initialized = _init_gemini(api_key)
            if self._initialized:
                logger.info(f"GeminiSignLanguageAI ready (model={model_name})")
            else:
                logger.error("GeminiSignLanguageAI failed to initialize")
        else:
            logger.warning(
                "No GEMINI_API_KEY found. Set it in .env or as environment variable. "
                "AI mode will not work."
            )

    @property
    def is_available(self) -> bool:
        """Check if the Gemini API is available and initialized."""
        return self._initialized and _genai is not None

    @property
    def is_busy(self) -> bool:
        """Check if currently capturing or processing."""
        return self._is_capturing or self._is_processing

    @property
    def last_result(self) -> str:
        """Get the last interpretation result."""
        return self._last_result

    @property
    def last_error(self) -> str:
        """Get the last error message."""
        return self._last_error

    def start_capture(self):
        """Start capturing frames for analysis.

        Call add_frame() each loop iteration to accumulate frames.
        When enough frames are captured, call analyze() to send to Gemini.
        """
        now = time.time()
        if now - self._last_analysis_time < self._cooldown:
            remaining = self._cooldown - (now - self._last_analysis_time)
            self._last_error = f"Cooldown: wait {remaining:.1f}s"
            logger.debug(f"Capture blocked by cooldown ({remaining:.1f}s remaining)")
            return

        if not self.is_available:
            self._last_error = "Gemini API not configured. Set GEMINI_API_KEY."
            return

        self._captured_frames = []
        self._is_capturing = True
        self._last_error = ""
        logger.info("Frame capture started")

    def add_frame(self, frame: np.ndarray) -> bool:
        """Add a frame during capture.

        Args:
            frame: BGR image from OpenCV (numpy array)

        Returns:
            True if enough frames have been captured (ready to analyze).
        """
        if not self._is_capturing:
            return False

        # Only capture at intervals
        if self._captured_frames:
            # Simple frame-count based capturing
            pass

        self._captured_frames.append(frame.copy())

        if len(self._captured_frames) >= self.max_frames:
            self._is_capturing = False
            logger.info(f"Captured {len(self._captured_frames)} frames")
            return True

        return False

    def analyze(self):
        """Send captured frames to Gemini for interpretation.

        Runs in a background thread to avoid blocking the main loop.
        Results are available via last_result property or on_result callback.
        """
        if not self._captured_frames:
            self._last_error = "No frames captured"
            return

        if not self.is_available:
            self._last_error = "Gemini API not available"
            return

        if self._is_processing:
            self._last_error = "Already processing"
            return

        self._is_processing = True
        frames = list(self._captured_frames)
        self._captured_frames = []

        # Run API call in background thread
        thread = threading.Thread(target=self._analyze_frames, args=(frames,), daemon=True)
        thread.start()

    def _analyze_frames(self, frames: List[np.ndarray]):
        """Background thread: convert frames and call Gemini API."""
        try:
            import cv2

            # Convert OpenCV BGR frames to PIL Images
            pil_images = []
            for frame in frames:
                # Resize for faster upload (max 512px wide)
                h, w = frame.shape[:2]
                if w > 512:
                    scale = 512 / w
                    frame = cv2.resize(frame, (512, int(h * scale)))

                rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                pil_img = Image.fromarray(rgb)
                pil_images.append(pil_img)

            # Build the prompt with images
            model = _genai.GenerativeModel(self.model_name)

            # Create content: prompt + images
            content = [self.SIGN_LANGUAGE_PROMPT] + pil_images

            logger.info(f"Sending {len(pil_images)} frames to Gemini ({self.model_name})...")
            response = model.generate_content(content)

            if response and response.text:
                result = response.text.strip()
                self._last_result = result
                self._last_error = ""
                self._last_analysis_time = time.time()
                logger.info(f"Gemini interpretation: '{result}'")

                if self.on_result:
                    try:
                        self.on_result(result)
                    except Exception as e:
                        logger.error(f"Result callback error: {e}")
            else:
                self._last_error = "Empty response from Gemini"
                logger.warning("Gemini returned empty response")

        except Exception as e:
            self._last_error = f"API Error: {str(e)[:100]}"
            logger.error(f"Gemini API error: {e}")

        finally:
            self._is_processing = False

    def get_status(self) -> dict:
        """Get current status for HUD display.

        Returns:
            Dict with 'state', 'frames_captured', 'result', 'error' keys.
        """
        if self._is_processing:
            state = "ANALYZING"
        elif self._is_capturing:
            state = "CAPTURING"
        elif not self.is_available:
            state = "NO_API_KEY"
        else:
            state = "READY"

        return {
            "state": state,
            "frames_captured": len(self._captured_frames),
            "max_frames": self.max_frames,
            "result": self._last_result,
            "error": self._last_error,
        }
