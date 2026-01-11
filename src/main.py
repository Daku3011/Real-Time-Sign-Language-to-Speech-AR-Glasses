import cv2
import numpy as np
from hand_tracker import HandTracker
from gesture_classifier import GestureClassifier, normalize_landmarks
from tts_engine import TTSEngine
from ocr_engine import OCREngine
import time
import threading
import queue

def draw_hud(img, label, confidence, fps, state_info=None, mode="SIGNING"):
    h, w, _ = img.shape
    
    # Mode indicator / Top bar
    cv2.rectangle(img, (0, 0), (w, 40), (20, 20, 20), -1)
    color = (0, 255, 0) # Default Neon Green
    
    if mode == "READING":
        color = (255, 165, 0) # Orange for Reading
    
    if state_info and state_info.get("state") == "RECORDING":
        color = (0, 0, 255) # Red for recording
    elif state_info and state_info.get("state") == "COUNTDOWN":
        color = (0, 255, 255) # Yellow for countdown

    cv2.putText(img, f"MODE: {mode} | FPS: {int(fps)}", (20, 30), 
                cv2.FONT_HERSHEY_SIMPLEX, 0.7, color, 2)
    
    # Futuristic HUD Corners
    length = 50
    t = 2
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
            
    elif mode == "READING":
        # Scanning zone for OCR
        cv2.rectangle(img, (w//4, h//4), (3*w//4, 3*h//4), color, 2)
        cv2.putText(img, "ALIGN TEXT IN BOX & PRESS 't'", (w//2-200, h//4-20), 
                    cv2.FONT_HERSHEY_SIMPLEX, 0.6, color, 2)

def get_label_thread(label_queue):
    label = input("\nEnter gesture label: ")
    label_queue.put(label)

def main():
    cap = cv2.VideoCapture(0)
    tracker = HandTracker() 
    classifier = GestureClassifier()
    tts = TTSEngine(use_indian_accent=True)  # Enable Indian accent
    ocr = OCREngine()
    
    mode = "SIGNING" # SIGNING or READING
    label_queue = queue.Queue()
    state = "IDLE" 
    current_label = ""
    countdown_start = 0
    recording_start = 0
    capture_duration = 2.5
    
    last_spoken = ""
    last_time_spoken = 0
    p_time = 0
    
    print("\n--- SSIP Universal Assistive Device ---")
    print("Commands:")
    print("  'm' - Toggle Mode (Signing / Reading)")
    print("  'r' - Record new Sign (Signing Mode)")
    print("  't' - Read Text in box (Reading Mode)")
    print("  's' - Save all data")
    print("  'l' - List known signs")
    print("  'q' - Quit")

    while True:
        success, img = cap.read()
        if not success: break
            
        c_time = time.time()
        fps = 1 / (c_time - p_time) if p_time else 0
        p_time = c_time
        
        detected_label = "Unknown"
        confidence = 0.0
        state_info = {"state": state}

        if mode == "SIGNING":
            img = tracker.find_hands(img, draw=True)
            landmarks = tracker.get_landmarks_array()
            
            if state == "WAITING_FOR_LABEL":
                try:
                    current_label = label_queue.get_nowait()
                    state = "COUNTDOWN"
                    countdown_start = c_time
                    tts.say(f"Ready for {current_label}")
                except queue.Empty:
                    cv2.putText(img, "ENTER LABEL IN TERMINAL", (w//2-200, h//2), 
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
                    if confidence > 0.82 and detected_label != "Unknown":
                        if detected_label != last_spoken or (c_time - last_time_spoken) > 4:
                            tts.say(detected_label)
                            last_spoken = detected_label
                            last_time_spoken = c_time

        elif mode == "READING":
            # Just HUD box for now, key 't' triggers extraction
            pass

        draw_hud(img, detected_label, confidence, fps, state_info, mode)
        cv2.imshow("SSIP Assistive HUD", img)
        
        h, w, _ = img.shape
        key = cv2.waitKey(1) & 0xFF
        
        if key == ord('q'): break
        elif key == ord('m'):
            mode = "READING" if mode == "SIGNING" else "SIGNING"
            tts.say(f"{mode} mode")
            state = "IDLE"
        elif key == ord('r') and mode == "SIGNING":
            if state == "IDLE":
                state = "WAITING_FOR_LABEL"
                threading.Thread(target=get_label_thread, args=(label_queue,), daemon=True).start()
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
        elif key == ord('s'):
            classifier.save_templates()
            tts.say("Data synced")
        elif key == ord('l'):
            signs = list(classifier.templates.keys())
            print(f"\nKnown Signs: {', '.join(signs) if signs else 'None'}")

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
