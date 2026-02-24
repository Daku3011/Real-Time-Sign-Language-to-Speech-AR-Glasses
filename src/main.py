import cv2
import numpy as np
from hand_tracker import HandTracker
from gesture_classifier import GestureClassifier, normalize_landmarks
from tts_engine import TTSEngine
from ocr_engine import OCREngine
from sentence_assembler import SentenceAssembler
from gemini_sign_ai import GeminiSignLanguageAI
import time
import threading
import queue
import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import config

MODES = ["SIGNING", "READING", "AI"]


def draw_hud(img, label, confidence, fps, state_info=None, mode="SIGNING",
             sentence_info=None, ai_status=None):
    h, w, _ = img.shape
    
    # Mode indicator / Top bar (Transparent Overlay)
    overlay = img.copy()
    cv2.rectangle(overlay, (0, 0), (w, 50), (15, 15, 15), -1)
    cv2.addWeighted(overlay, 0.85, img, 0.15, 0, img)
    color = (0, 255, 0)  # Default Neon Green
    
    if mode == "READING":
        color = (255, 165, 0)  # Orange for Reading
    elif mode == "AI":
        color = (255, 0, 255)  # Magenta for AI
    
    if state_info and state_info.get("state") == "RECORDING":
        color = (0, 0, 255)
    elif state_info and state_info.get("state") == "COUNTDOWN":
        color = (0, 255, 255)

    cv2.putText(img, f"MODE: {mode} | FPS: {int(fps)}", (20, 35), 
                cv2.FONT_HERSHEY_SIMPLEX, 0.7, color, 2)
    
    # Futuristic HUD Corners
    length = 50
    t = 3
    cv2.line(img, (20, 20), (20 + length, 20), color, t)
    cv2.line(img, (20, 20), (20, 20 + length), color, t)
    cv2.line(img, (w - 20, 20), (w - 20 - length, 20), color, t)
    cv2.line(img, (w - 20, 20), (w - 20, 20 + length), color, t)
    cv2.line(img, (20, h - 20), (20 + length, h - 20), color, t)
    cv2.line(img, (20, h - 20), (20, h - 20 - length), color, t)
    cv2.line(img, (w - 20, h - 20), (w - 20 - length, h - 20), color, t)
    cv2.line(img, (w - 20, h - 20), (w - 20, h - 20 - length), color, t)

    if mode == "SIGNING":
        if state_info:
            state = state_info.get("state")
            if state == "COUNTDOWN":
                cd = state_info.get("countdown", 0)
                cv2.putText(img, f"GET READY: {cd}", (w//2-120, h//2), 
                            cv2.FONT_HERSHEY_SIMPLEX, 2, color, 5)
            elif state == "RECORDING":
                cv2.putText(img, "RECORDING...", (30, h - 60), 
                            cv2.FONT_HERSHEY_SIMPLEX, 0.8, color, 2)
                progress = state_info.get("progress", 0)
                cv2.rectangle(img, (30, h - 50), (w - 30, h - 40), (50, 50, 50), -1)
                cv2.rectangle(img, (30, h - 50), (30 + int((w-60)*progress), h - 40), color, -1)

        if label != "Unknown":
            ts = cv2.getTextSize(label.upper(), cv2.FONT_HERSHEY_SIMPLEX, 1.5, 3)[0]
            tx = (w - ts[0]) // 2
            cv2.putText(img, label.upper(), (tx, h - 100), cv2.FONT_HERSHEY_SIMPLEX, 1.5, (0, 0, 0), 10) 
            cv2.putText(img, label.upper(), (tx, h - 100), cv2.FONT_HERSHEY_SIMPLEX, 1.5, color, 3)
            
            bw = int(200 * confidence)
            cv2.rectangle(img, (w//2 - 100, h - 80), (w//2 + 100, h - 70), (50, 50, 50), -1)
            cv2.rectangle(img, (w//2 - 100, h - 80), (w//2 - 100 + bw, h - 70), color, -1)
            cv2.putText(img, f"{int(confidence*100)}%", (w//2 + 110, h - 70), 
                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 1)

        # --- Sentence assembly text bar ---
        if sentence_info:
            assembled_text = sentence_info.get("text", "")
            sa_state = sentence_info.get("state", "IDLE")
            if assembled_text:
                # Dark background bar for sentence
                overlay_sentence = img.copy()
                cv2.rectangle(overlay_sentence, (10, 60), (w - 10, 110), (20, 20, 20), -1)
                cv2.addWeighted(overlay_sentence, 0.8, img, 0.2, 0, img)
                cv2.rectangle(img, (10, 60), (w - 10, 110), color, 1)
                
                # State indicator dot
                dot_color = (0, 255, 0) if sa_state == "TYPING" else \
                            (0, 255, 255) if sa_state == "WORD_PAUSE" else \
                            (0, 165, 255) if sa_state == "SENTENCE_PAUSE" else (100, 100, 100)
                
                # Pulsing effect for dot
                radius = 6 if int(time.time() * 4) % 2 == 0 else 8
                cv2.circle(img, (30, 85), radius, dot_color, -1)
                
                # Text
                display_text = assembled_text[-50:]  # Last 50 chars
                cv2.putText(img, display_text, (50, 92),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.75, (255, 255, 255), 2)
            
    elif mode == "READING":
        # Scanning zone for OCR
        cv2.rectangle(img, (w//4, h//4), (3*w//4, 3*h//4), color, 2)
        # Scanline animation
        scan_y = h//4 + int((h//2) * ((time.time() * 0.5) % 1.0))
        cv2.line(img, (w//4, scan_y), (3*w//4, scan_y), (0, 255, 0), 2)
        
        cv2.putText(img, "ALIGN TEXT IN BOX & PRESS 't'", (w//2-200, h//4-20), 
                    cv2.FONT_HERSHEY_SIMPLEX, 0.6, color, 2)

    elif mode == "AI":
        # AI mode HUD
        if ai_status:
            ai_state = ai_status.get("state", "READY")
            result = ai_status.get("result", "")
            error = ai_status.get("error", "")
            frames_captured = ai_status.get("frames_captured", 0)
            max_frames = ai_status.get("max_frames", 5)

            if ai_state == "NO_API_KEY":
                cv2.putText(img, "NO GEMINI API KEY", (w//2 - 180, h//2 - 20),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 0, 255), 2)
                cv2.putText(img, "Set GEMINI_API_KEY in .env", (w//2 - 180, h//2 + 20),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.6, (150, 150, 150), 1)
            elif ai_state == "CAPTURING":
                cv2.putText(img, "CAPTURING FRAMES...", (w//2 - 150, h//2),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.9, color, 2)
                # Progress bar
                prog = frames_captured / max_frames if max_frames else 0
                cv2.rectangle(img, (w//4, h//2 + 20), (3*w//4, h//2 + 35), (50, 50, 50), -1)
                cv2.rectangle(img, (w//4, h//2 + 20), (w//4 + int((w//2) * prog), h//2 + 35), color, -1)
            elif ai_state == "ANALYZING":
                # Pulsing dots animation
                dots = "." * (int(time.time() * 3) % 4)
                cv2.putText(img, f"AI ANALYZING{dots}", (w//2 - 140, h//2),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.9, color, 2)
            else:  # READY
                cv2.putText(img, "Press 'a' to CAPTURE & ANALYZE", (w//2 - 220, h//2),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.7, color, 2)

            # Show last result
            if result:
                overlay_ai = img.copy()
                cv2.rectangle(overlay_ai, (10, h - 110), (w - 10, h - 50), (20, 20, 20), -1)
                cv2.addWeighted(overlay_ai, 0.85, img, 0.15, 0, img)
                cv2.rectangle(img, (10, h - 110), (w - 10, h - 50), color, 1)
                cv2.putText(img, "AI:", (20, h - 80), cv2.FONT_HERSHEY_SIMPLEX, 0.6, color, 2)
                display_result = result[:60]
                cv2.putText(img, display_result, (60, h - 80),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 255), 2)
                if len(result) > 60:
                    cv2.putText(img, result[60:120], (20, h - 58),
                                cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1)

            # Show error
            if error:
                cv2.putText(img, error[:60], (20, h - 40),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 1)

def get_label_thread(label_queue):
    label = input("\nEnter gesture label: ")
    label_queue.put(label)

def main():
    cap = cv2.VideoCapture(0)
    tracker = HandTracker() 
    classifier = GestureClassifier()
    tts = TTSEngine(use_indian_accent=True)
    ocr = OCREngine()

    # --- Sentence Assembler (Layer 1) ---
    def on_sentence_complete(sentence):
        print(f"\n[SENTENCE]: {sentence}")
        tts.say(sentence)

    assembler = SentenceAssembler(
        char_pause_threshold=config.SENTENCE_CHAR_PAUSE,
        word_pause_threshold=config.SENTENCE_WORD_PAUSE,
        sentence_pause_threshold=config.SENTENCE_FINALIZE_PAUSE,
        on_sentence_complete=on_sentence_complete,
    )

    # --- Gemini AI (Layer 2) ---
    def on_ai_result(text):
        print(f"\n[AI RESULT]: {text}")
        tts.say(text)

    gemini_ai = GeminiSignLanguageAI(
        api_key=config.GEMINI_API_KEY if config.GEMINI_API_KEY else None,
        model_name=config.GEMINI_MODEL,
        max_frames=config.GEMINI_MAX_FRAMES,
        capture_interval=config.GEMINI_CAPTURE_INTERVAL,
        on_result=on_ai_result,
    )
    
    mode_index = 0
    mode = MODES[mode_index]
    label_queue = queue.Queue()
    state = "IDLE" 
    current_label = ""
    countdown_start = 0
    recording_start = 0
    capture_duration = config.GESTURE_CAPTURE_DURATION
    
    last_spoken = ""
    last_time_spoken = 0
    p_time = 0
    ai_capture_frame_timer = 0
    
    print("\n--- SSIP Universal Assistive Device ---")
    print("Commands:")
    print("  'm' - Cycle Mode (Signing → Reading → AI)")
    print("  'r' - Record new Sign (Signing Mode)")
    print("  't' - Read Text in box (Reading Mode)")
    print("  'a' - Capture & Analyze with AI (AI Mode)")
    print("  'c' - Clear sentence buffer (Signing Mode)")
    print("  's' - Save all data")
    print("  'l' - List known signs")
    print("  'q' - Quit")
    if gemini_ai.is_available:
        print("  ✓ Gemini AI is ready")
    else:
        print("  ✗ Gemini AI unavailable (set GEMINI_API_KEY in .env)")

    while True:
        success, img = cap.read()
        if not success: break
            
        c_time = time.time()
        fps = 1 / (c_time - p_time) if p_time else 0
        p_time = c_time
        
        detected_label = "Unknown"
        confidence = 0.0
        state_info = {"state": state}
        sentence_info = None
        ai_status = None

        if mode == "SIGNING":
            img = tracker.find_hands(img, draw=True)
            landmarks = tracker.get_landmarks_array()
            
            if state == "WAITING_FOR_LABEL":
                h_img, w_img, _ = img.shape
                try:
                    current_label = label_queue.get_nowait()
                    state = "COUNTDOWN"
                    countdown_start = c_time
                    tts.say(f"Ready for {current_label}")
                except queue.Empty:
                    cv2.putText(img, "ENTER LABEL IN TERMINAL", (w_img//2-200, h_img//2), 
                                cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 165, 255), 2)

            elif state == "COUNTDOWN":
                elap = c_time - countdown_start
                state_info["countdown"] = 3 - int(elap)
                if elap >= 3:
                    state = "RECORDING"
                    recording_start = c_time
                    tts.say("Recording")
            
            elif state == "RECORDING":
                elap = c_time - recording_start
                state_info["progress"] = min(1.0, elap / capture_duration)
                if landmarks is not None:
                    classifier.add_template(current_label, normalize_landmarks(landmarks))
                if elap >= capture_duration:
                    state = "IDLE"
                    tts.say(f"Saved {current_label}")

            elif state == "IDLE":
                if landmarks is not None:
                    norm_lms = normalize_landmarks(landmarks)
                    detected_label, confidence = classifier.classify(norm_lms)
                    if confidence > config.CLASSIFICATION_THRESHOLD and detected_label != "Unknown":
                        # Feed to sentence assembler instead of speaking single chars
                        completed = assembler.add_character(detected_label, confidence)
                        if completed:
                            print(f"\n[SENTENCE SPOKEN]: {completed}")
                        # Update last spoken tracking
                        last_spoken = detected_label
                        last_time_spoken = c_time

            # Check for sentence timeout
            timeout_sentence = assembler.update()
            if timeout_sentence:
                print(f"\n[SENTENCE SPOKEN]: {timeout_sentence}")

            sentence_info = assembler.get_display_info()

        elif mode == "READING":
            # Just HUD box for now, key 't' triggers extraction
            pass

        elif mode == "AI":
            img = tracker.find_hands(img, draw=True)
            # If capturing, add frames at intervals
            if gemini_ai._is_capturing:
                if c_time - ai_capture_frame_timer >= config.GEMINI_CAPTURE_INTERVAL:
                    ready = gemini_ai.add_frame(img)
                    ai_capture_frame_timer = c_time
                    if ready:
                        gemini_ai.analyze()
            ai_status = gemini_ai.get_status()

        draw_hud(img, detected_label, confidence, fps, state_info, mode,
                 sentence_info=sentence_info, ai_status=ai_status)
        cv2.imshow("SSIP Assistive HUD", img)
        
        h, w, _ = img.shape
        key = cv2.waitKey(1) & 0xFF
        
        if key == ord('q'): break
        elif key == ord('m'):
            mode_index = (mode_index + 1) % len(MODES)
            mode = MODES[mode_index]
            tts.say(f"{mode} mode")
            state = "IDLE"
            if mode == "SIGNING":
                assembler.clear()
        elif key == ord('r') and mode == "SIGNING":
            if state == "IDLE":
                state = "WAITING_FOR_LABEL"
                threading.Thread(target=get_label_thread, args=(label_queue,), daemon=True).start()
        elif key == ord('c') and mode == "SIGNING":
            assembler.clear()
            tts.say("Buffer cleared")
        elif key == ord('t') and mode == "READING":
            roi = img[h//4:3*h//4, w//4:3*w//4]
            tts.say("Scanning")
            try:
                text = ocr.extract_text(roi)
                if text:
                    print(f"\n[TEXT READ]: {text}")
                    tts.say(text)
                else:
                    tts.say("No text found")
            except Exception as e:
                print(f"OCR Error: {e}")
                tts.say("OCR error. Check tesseract installation.")
        elif key == ord('a') and mode == "AI":
            if not gemini_ai.is_busy:
                gemini_ai.start_capture()
                ai_capture_frame_timer = c_time
                tts.say("Capturing")
        elif key == ord('s'):
            classifier.save_templates()
            tts.say("Data synced")
        elif key == ord('l'):
            signs = list(classifier.templates.keys())
            print(f"\nKnown Signs: {', '.join(signs) if signs else 'None'}")
            history = assembler.get_history()
            if history:
                print(f"Sentence History: {history[-5:]}")

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
