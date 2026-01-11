import pyttsx3
import threading
import queue

class TTSEngine:
    def __init__(self):
        self.engine = pyttsx3.init()
        self.engine.setProperty('rate', 150)  # Speed of speech
        self.engine.setProperty('volume', 0.9) # Volume (0.0 to 1.0)
        
        self.speech_queue = queue.Queue()
        self.stop_thread = False
        self.thread = threading.Thread(target=self._process_queue, daemon=True)
        self.thread.start()

    def _process_queue(self):
        while not self.stop_thread:
            try:
                text = self.speech_queue.get(timeout=0.1)
                self.engine.say(text)
                self.engine.runAndWait()
                self.speech_queue.task_done()
            except queue.Empty:
                continue

    def say(self, text):
        """Add text to the speech queue."""
        # Avoid repeating the same word immediately
        if self.speech_queue.empty():
            self.speech_queue.put(text)

    def stop(self):
        self.stop_thread = True
        self.thread.join()

if __name__ == "__main__":
    tts = TTSEngine()
    tts.say("Hello, setting up the SSIP project.")
    import time
    time.sleep(2)
