"""Sentence Assembler - Buffers individual character detections into words and sentences.

Uses timing-based logic to determine word boundaries and sentence completion:
- Characters detected within a short window are grouped into the same word
- A medium pause inserts a space (new word)
- A long pause finalizes the sentence and triggers TTS
"""

import time
import sys
import os
from typing import Optional, Callable, List

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

try:
    from src.logger import setup_logger
    logger = setup_logger(__name__)
except Exception:
    import logging
    logger = logging.getLogger(__name__)


class SentenceAssembler:
    """Assembles individual character detections into words and sentences.
    
    Attributes:
        char_pause_threshold: Max seconds between chars in same word
        word_pause_threshold: Seconds of pause to insert a space
        sentence_pause_threshold: Seconds of pause to finalize sentence
        on_sentence_complete: Callback fired when a sentence is ready
    """

    def __init__(
        self,
        char_pause_threshold: float = 1.0,
        word_pause_threshold: float = 2.0,
        sentence_pause_threshold: float = 3.5,
        on_sentence_complete: Optional[Callable[[str], None]] = None,
    ):
        self.char_pause_threshold = char_pause_threshold
        self.word_pause_threshold = word_pause_threshold
        self.sentence_pause_threshold = sentence_pause_threshold
        self.on_sentence_complete = on_sentence_complete

        # Internal state
        self._current_word: List[str] = []
        self._words: List[str] = []
        self._last_char_time: float = 0.0
        self._last_char: str = ""
        self._duplicate_count: int = 0
        self._duplicate_threshold: int = 3  # Ignore if same char detected N times in a row
        self._sentence_history: List[str] = []
        self._finalized: bool = False

        logger.info("SentenceAssembler initialized")

    def add_character(self, char: str, confidence: float = 1.0) -> Optional[str]:
        """Add a detected character to the buffer.

        Args:
            char: The detected character/sign label
            confidence: Detection confidence (0-1). Ignored below 0.75.

        Returns:
            Completed sentence string if sentence was finalized, else None.
        """
        if not char or char == "Unknown" or char == "No Templates":
            return None
        if confidence < 0.75:
            return None

        now = time.time()
        char = char.upper().strip()

        # --- Duplicate suppression ---
        if char == self._last_char:
            self._duplicate_count += 1
            if self._duplicate_count > self._duplicate_threshold:
                return None  # Suppress repeated same char
        else:
            self._duplicate_count = 0

        # --- Timing-based word/sentence logic ---
        elapsed = now - self._last_char_time if self._last_char_time > 0 else 0

        if self._last_char_time > 0 and elapsed > self.sentence_pause_threshold:
            # Long pause → finalize whatever we have
            completed = self._finalize_sentence()
            # Then start fresh with the new char
            self._current_word = [char]
            self._last_char = char
            self._last_char_time = now
            self._finalized = False
            return completed

        if self._last_char_time > 0 and elapsed > self.word_pause_threshold:
            # Medium pause → commit current word and start new one
            self._commit_word()

        # Add character to current word
        self._current_word.append(char)
        self._last_char = char
        self._last_char_time = now
        self._finalized = False
        return None

    def update(self) -> Optional[str]:
        """Call every frame to check for time-based sentence completion.

        Returns:
            Completed sentence string if sentence was finalized by timeout, else None.
        """
        if self._last_char_time <= 0:
            return None
        if self._finalized:
            return None

        now = time.time()
        elapsed = now - self._last_char_time

        if elapsed > self.sentence_pause_threshold and self._has_content():
            return self._finalize_sentence()

        return None

    def get_current_text(self) -> str:
        """Get the text currently being assembled (for HUD display).

        Returns:
            Current assembled text including in-progress word.
        """
        parts = list(self._words)
        if self._current_word:
            parts.append("".join(self._current_word))
        text = " ".join(parts)
        return text if text else ""

    def get_display_info(self) -> dict:
        """Get display information for the HUD.

        Returns:
            Dict with 'text', 'word_count', 'char_count', 'state' keys.
        """
        text = self.get_current_text()
        state = "IDLE"
        if self._current_word or self._words:
            elapsed = time.time() - self._last_char_time if self._last_char_time > 0 else 0
            if elapsed < self.char_pause_threshold:
                state = "TYPING"
            elif elapsed < self.word_pause_threshold:
                state = "WORD_PAUSE"
            elif elapsed < self.sentence_pause_threshold:
                state = "SENTENCE_PAUSE"
            else:
                state = "IDLE"

        return {
            "text": text,
            "word_count": len(self._words) + (1 if self._current_word else 0),
            "char_count": len(text.replace(" ", "")),
            "state": state,
        }

    def clear(self):
        """Clear all buffered text."""
        self._current_word = []
        self._words = []
        self._last_char_time = 0.0
        self._last_char = ""
        self._duplicate_count = 0
        self._finalized = False
        logger.debug("SentenceAssembler cleared")

    def get_history(self) -> List[str]:
        """Return list of previously completed sentences."""
        return list(self._sentence_history)

    # --- Private helpers ---

    def _commit_word(self):
        """Commit current character buffer as a completed word."""
        if self._current_word:
            word = "".join(self._current_word)
            self._words.append(word)
            self._current_word = []
            logger.debug(f"Word committed: '{word}'")

    def _finalize_sentence(self) -> Optional[str]:
        """Finalize all buffered words into a sentence."""
        self._commit_word()
        if not self._words:
            self._finalized = True
            return None

        sentence = " ".join(self._words)
        self._sentence_history.append(sentence)
        logger.info(f"Sentence finalized: '{sentence}'")

        # Fire callback
        if self.on_sentence_complete:
            try:
                self.on_sentence_complete(sentence)
            except Exception as e:
                logger.error(f"Sentence callback error: {e}")

        # Reset
        self._words = []
        self._current_word = []
        self._finalized = True
        return sentence

    def _has_content(self) -> bool:
        """Check if there is any buffered content."""
        return bool(self._current_word or self._words)
