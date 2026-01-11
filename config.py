"""
SSIP - Real-Time Sign Language to Speech AR Glasses
Configuration File

This file contains all configuration parameters for the application.
Modify these values to customize behavior without changing code.
"""

# ============================================================================
# CAMERA CONFIGURATION
# ============================================================================

CAMERA_INDEX = 0  # Default camera index (0 = built-in webcam)
CAMERA_WIDTH = 640  # Camera resolution width
CAMERA_HEIGHT = 480  # Camera resolution height
CAMERA_FPS = 30  # Target frames per second

# ============================================================================
# HAND TRACKING CONFIGURATION
# ============================================================================

MAX_HANDS = 2  # Maximum number of hands to detect (1 or 2)
DETECTION_CONFIDENCE = 0.5  # Minimum confidence for hand detection (0.0-1.0)
TRACKING_CONFIDENCE = 0.5  # Minimum confidence for hand tracking (0.0-1.0)
STATIC_IMAGE_MODE = False  # Use static image mode (True for photos, False for video)

# ============================================================================
# GESTURE CLASSIFICATION
# ============================================================================

TEMPLATE_PATH = "models/templates.pkl"  # Path to gesture templates file
CLASSIFICATION_THRESHOLD = 0.82  # Minimum confidence to classify gesture
GESTURE_CAPTURE_DURATION = 2.5  # Duration (seconds) to capture gesture data
COUNTDOWN_DURATION = 3  # Countdown before recording (seconds)

# ============================================================================
# TEXT-TO-SPEECH CONFIGURATION
# ============================================================================

TTS_RATE = 150  # Speech rate (words per minute)
TTS_VOLUME = 0.9  # Volume level (0.0 to 1.0)
TTS_COOLDOWN = 4.0  # Minimum seconds between repeating same phrase
TTS_USE_INDIAN_ACCENT = True  # Prefer Indian/Hindi voice if available

# ============================================================================
# OCR CONFIGURATION
# ============================================================================

OCR_LANGUAGE = 'eng'  # Tesseract language ('eng' for English)
OCR_CONFIDENCE_THRESHOLD = 60  # Minimum confidence for OCR text detection
TESSERACT_CMD = None  # Path to tesseract executable (None for auto-detect)
# On Windows, set to: r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# ============================================================================
# LOGGING CONFIGURATION
# ============================================================================

LOG_LEVEL = "INFO"  # Logging level: DEBUG, INFO, WARNING, ERROR, CRITICAL
LOG_FILE = "logs/app.log"  # Log file path
LOG_TO_CONSOLE = True  # Also print logs to console
LOG_TO_FILE = True  # Write logs to file
LOG_FORMAT = '%(asctime)s - %(name)s - %(levelname)s - %(message)s'

# ============================================================================
# AUTO-LEARNER CONFIGURATION
# ============================================================================

AUTO_LEARN_MIN_TEXT_LENGTH = 2  # Minimum text length to consider as label
AUTO_LEARN_OCR_CONFIDENCE = 60  # Minimum OCR confidence for auto-learning

# ============================================================================
# UI/HUD CONFIGURATION
# ============================================================================

HUD_CORNER_LENGTH = 50  # Length of decorative corner lines
HUD_LINE_THICKNESS = 2  # Thickness of HUD lines
HUD_TEXT_COLOR_SIGNING = (0, 255, 0)  # Green for signing mode
HUD_TEXT_COLOR_READING = (255, 165, 0)  # Orange for reading mode
HUD_TEXT_COLOR_RECORDING = (0, 0, 255)  # Red for recording
HUD_TEXT_COLOR_COUNTDOWN = (0, 255, 255)  # Yellow for countdown

# ============================================================================
# DATA PATHS
# ============================================================================

MODELS_DIR = "models"  # Directory for model files
LOGS_DIR = "logs"  # Directory for log files
DATA_DIR = "data"  # Directory for training data
ALPHABETS_DIR = "Alphabates"  # Directory for alphabet images
