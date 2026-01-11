import cv2
import os
import glob
import pytesseract
from hand_tracker import HandTracker
from gesture_classifier import GestureClassifier, normalize_landmarks
import numpy as np

class AutoLearner:
    def __init__(self):
        self.tracker = HandTracker(mode=True) # Optimized for static images
        self.classifier = GestureClassifier()
        
    def process_image(self, img_path):
        """Processes a single image, extracting text labels and landmarks."""
        img = cv2.imread(img_path)
        if img is None:
            return None
            
        h, w, _ = img.shape
        
        # 1. OCR to find potential labels
        # We look for words that might be sign labels (usually uppercase or isolated)
        d = pytesseract.image_to_data(img, output_type=pytesseract.Output.DICT)
        n_boxes = len(d['text'])
        
        found_labels = []
        for i in range(n_boxes):
            text = d['text'][i].strip()
            conf = int(d['conf'][i])
            if conf > 60 and len(text) > 2:
                # Store text and its bounding box
                found_labels.append({
                    "text": text,
                    "box": (d['left'][i], d['top'][i], d['width'][i], d['height'][i])
                })
        
        if not found_labels:
            return "No text found"

        # 2. Hand Detection
        self.tracker.find_hands(img, draw=False)
        if not self.tracker.results.multi_hand_landmarks:
            return "No hands found"
            
        # 3. Association Logic
        # For simplicity, if 1 hand and 1 label found, associate them.
        # If multiple, associate the hand with the nearest text box.
        success_count = 0
        for hand_idx, hand_lms in enumerate(self.tracker.results.multi_hand_landmarks):
            # Find hand centroid
            landmarks = [[lm.x, lm.y] for lm in hand_lms.landmark]
            hand_center_x = np.mean([lm[0] for lm in landmarks]) * w
            hand_center_y = np.mean([lm[1] for lm in landmarks]) * h
            
            # Find nearest label
            min_dist = float('inf')
            best_label = None
            
            for lbl in found_labels:
                lx, ly, lw, lh = lbl["box"]
                lbl_center_x = lx + lw/2
                lbl_center_y = ly + lh/2
                
                dist = np.sqrt((hand_center_x - lbl_center_x)**2 + (hand_center_y - lbl_center_y)**2)
                if dist < min_dist:
                    min_dist = dist
                    best_label = lbl["text"]
            
            if best_label:
                # Extract landmarks for this hand
                # Note: get_landmarks_array needs to be slightly modified to take hand_idx or we do it manually
                # To keep it consistent with our dual-hand system, we should use the full array
                # or simplified for single hand learning.
                
                # Get the 126-length feature vector (padded)
                full_landmarks = self.get_specific_hand_landmarks(hand_idx)
                if full_landmarks is not None:
                    norm_lms = normalize_landmarks(full_landmarks)
                    self.classifier.add_template(best_label, norm_lms)
                    success_count += 1
                    print(f"  [Auto-Learned] '{best_label}' from {os.path.basename(img_path)}")
                    
        return f"Added {success_count} templates"

    def get_specific_hand_landmarks(self, hand_idx):
        """Helper to get 126-length vector where ONLY the requested hand is present."""
        if not self.tracker.results.multi_hand_landmarks:
            return None
            
        hand_lms = self.tracker.results.multi_hand_landmarks[hand_idx]
        landmarks = [[lm.x, lm.y, lm.z] for lm in hand_lms.landmark]
        h1 = np.array(landmarks).flatten()
        h2 = np.zeros(63) # Empty padding
        
        return np.concatenate([h1, h2])

    def learn_from_directory(self, dir_path):
        valid_extensions = ('.jpg', '.jpeg', '.png', '.bmp')
        image_files = []
        for ext in valid_extensions:
            image_files.extend(glob.glob(os.path.join(dir_path, f"**/*{ext}"), recursive=True))

        print(f"Total images found: {len(image_files)}")
        for img_path in image_files:
            res = self.process_image(img_path)
            # print(f"Processing {img_path}: {res}")

        self.classifier.save_templates()
        print("Knowledge base updated and saved.")

if __name__ == "__main__":
    learner = AutoLearner()
    path = input("Enter path to book scans or photos folder: ")
    if os.path.exists(path):
        learner.learn_from_directory(path)
    else:
        print("Path not found.")
