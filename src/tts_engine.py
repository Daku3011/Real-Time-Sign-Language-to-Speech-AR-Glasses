"""Text-to-Speech Engine with Indian accent support."""

import pyttsx3
import threading
import queue
from typing import Optional
import sys
import os

# Add parent directory to path for imports
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

try:
    from src.logger import setup_logger
    logger = setup_logger(__name__)
except:
    import logging
    logger = logging.getLogger(__name__)

class TTSEngine:
    """Text-to-Speech engine with configurable voices and accents."""
    
    def __init__(self, rate: int = 150, volume: float = 0.9, use_indian_accent: bool = True):
        """Initialize TTS engine.
        
        Args:
            rate: Speech rate (words per minute)
            volume: Volume level (0.0 to 1.0)
            use_indian_accent: Whether to prefer Indian accent if available
        """
        try:
            self.engine = pyttsx3.init()
            
            # Set voice (try to get Indian accent)
            if use_indian_accent:
                self._set_indian_voice()
            
            # Set speech properties
            self.engine.setProperty('rate', rate)
            self.engine.setProperty('volume', volume)
            
            # Get current voice info
            voice = self.engine.getProperty('voice')
            current_rate = self.engine.getProperty('rate')
            logger.info(f"TTS initialized - Voice: {voice}, Rate: {current_rate}")
            
            # Thread-safe speech queue
            self.speech_queue = queue.Queue()
            self.stop_thread = False
            self.thread = threading.Thread(target=self._process_queue, daemon=True)
            self.thread.start()
            
        except Exception as e:
            logger.error(f"Failed to initialize TTS engine: {e}")
            raise

    def _set_indian_voice(self):
        """Try to set an Indian English voice if available."""
        voices = self.engine.getProperty('voices')
        
        # Priority order for Indian voices
        indian_keywords = [
            'hindi', 'indian', 'india', 'en-in', 'en_in',
            'nayan', 'veena', 'ravi'  # Common Indian voice names
        ]
        
        selected_voice = None
        
        # First pass: Look for Indian English voices
        for voice in voices:
            voice_lower = voice.name.lower()
            languages = str(voice.languages).lower() if hasattr(voice, 'languages') else ''
            
            for keyword in indian_keywords:
                if keyword in voice_lower or keyword in languages:
                    selected_voice = voice.id
                    logger.info(f"Selected Indian voice: {voice.name}")
                    break
            if selected_voice:
                break
        
        # Second pass: Look for any English voice that sounds natural
        if not selected_voice:
            for voice in voices:
                if 'english' in voice.name.lower():
                    selected_voice = voice.id
                    logger.info(f"Selected English voice: {voice.name}")
                    break
        
        # Set the selected voice
        if selected_voice:
            self.engine.setProperty('voice', selected_voice)
        else:
            logger.warning("No Indian voice found, using default")
            # List available voices for debugging
            logger.info(f"Available voices: {[v.name for v in voices]}")

    def _process_queue(self):
        """Process speech queue in background thread."""
        while not self.stop_thread:
            try:
                text = self.speech_queue.get(timeout=0.1)
                
                # Clean and process text for better pronunciation
                processed_text = self._preprocess_text(text)
                
                self.engine.say(processed_text)
                self.engine.runAndWait()
                self.speech_queue.task_done()
            except queue.Empty:
                continue
            except Exception as e:
                logger.error(f"Error in TTS processing: {e}")

    def _preprocess_text(self, text: str) -> str:
        """Preprocess text for better Indian accent pronunciation.
        
        Args:
            text: Input text
            
        Returns:
            Processed text
        """
        # Remove excessive whitespace
        text = ' '.join(text.split())
        
        # Add slight pauses for better clarity (comma = pause)
        # This helps with Indian accent comprehension
        text = text.replace('.', '. ')
        text = text.replace(',', ', ')
        
        # Common OCR errors to fix
        replacements = {
            '|': 'I',  # Common OCR mistake
            '0': 'O',  # When in text context (not numbers)
        }
        
        # Apply replacements cautiously
        for old, new in replacements.items():
            if not text.replace(old, '').isdigit():  # Don't replace if it's a number
                text = text.replace(old, new)
        
        return text

    def say(self, text: str):
        """Add text to the speech queue.
        
        Args:
            text: Text to speak
        """
        if not text or not text.strip():
            return
        
        # Avoid repeating if queue already has this text
        if self.speech_queue.empty():
            self.speech_queue.put(text)
            logger.debug(f"Queued for TTS: '{text[:50]}...'")

    def set_rate(self, rate: int):
        """Change speech rate.
        
        Args:
            rate: New speech rate (words per minute)
        """
        self.engine.setProperty('rate', rate)
        logger.info(f"TTS rate changed to: {rate}")

    def set_volume(self, volume: float):
        """Change volume.
        
        Args:
            volume: New volume (0.0 to 1.0)
        """
        self.engine.setProperty('volume', volume)
        logger.info(f"TTS volume changed to: {volume}")

    def list_voices(self):
        """List all available voices."""
        voices = self.engine.getProperty('voices')
        print("\nAvailable TTS Voices:")
        for i, voice in enumerate(voices):
            print(f"{i}: {voice.name}")
            if hasattr(voice, 'languages'):
                print(f"   Languages: {voice.languages}")
            print(f"   ID: {voice.id}")

    def stop(self):
        """Stop the TTS engine."""
        self.stop_thread = True
        self.thread.join()
        logger.info("TTS engine stopped")


if __name__ == "__main__":
    print("Testing TTS Engine with Indian accent...")
    tts = TTSEngine(use_indian_accent=True)
    
    # List available voices
    tts.list_voices()
    
    # Test speech
    test_texts = [
        "Hello, I am speaking with Indian accent.",
        "This is a test of the text to speech engine.",
        "नमस्ते, मैं हिंदी में बोल रहा हूं।"  # Hindi test
    ]
    
    for text in test_texts:
        print(f"\nSpeaking: {text}")
        tts.say(text)
    
    import time
    time.sleep(10)  # Wait for speech to complete
