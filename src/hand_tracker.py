"""Hand tracking module using MediaPipe Hands."""

import cv2
import mediapipe as mp
import time
import numpy as np
from typing import Optional, List, Tuple
import sys
import os

# Add parent directory to path for imports
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from src.logger import setup_logger

logger = setup_logger(__name__)

class HandTracker:
    """MediaPipe-based hand tracker for detecting and tracking hands in video frames.
    
    Attributes:
        mode: Static image mode (True) or video mode (False)
        max_hands: Maximum number of hands to detect (1 or 2)
        detection_con: Minimum confidence for hand detection [0.0, 1.0]
        track_con: Minimum confidence for hand tracking [0.0, 1.0]
    """
    
    def __init__(self, mode: bool = False, max_hands: int = 2, 
                 detection_con: float = 0.5, track_con: float = 0.5):
        """Initialize the hand tracker.
        
        Args:
            mode: Use static image mode if True, video mode if False
            max_hands: Maximum number of hands to detect simultaneously
            detection_con: Minimum detection confidence threshold
            track_con: Minimum tracking confidence threshold
        """
        self.mode = mode
        self.max_hands = max_hands
        self.detection_con = detection_con
        self.track_con = track_con
        self.results = None

        try:
            self.mp_hands = mp.solutions.hands
            self.hands = self.mp_hands.Hands(
                static_image_mode=self.mode,
                max_num_hands=self.max_hands,
                min_detection_confidence=self.detection_con,
                min_tracking_confidence=self.track_con
            )
            self.mp_draw = mp.solutions.drawing_utils
            self.tip_ids = [4, 8, 12, 16, 20]
            logger.info(f"HandTracker initialized (max_hands={max_hands}, detection_con={detection_con})")
        except Exception as e:
            logger.error(f"Failed to initialize HandTracker: {e}")
            raise RuntimeError(f"MediaPipe initialization failed: {e}") from e

    def find_hands(self, img: np.ndarray, draw: bool = True) -> np.ndarray:
        """Detect hands in the given image.
        
        Args:
            img: Input image (BGR format)
            draw: Whether to draw hand landmarks on the image
        
        Returns:
            Image with drawn landmarks if draw=True
        """
        if img is None or img.size == 0:
            logger.warning("Empty or invalid image provided to find_hands")
            return img
        
        try:
            img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
            self.results = self.hands.process(img_rgb)

            if self.results.multi_hand_landmarks:
                for i, hand_lms in enumerate(self.results.multi_hand_landmarks):
                    if draw:
                        self.mp_draw.draw_landmarks(img, hand_lms, self.mp_hands.HAND_CONNECTIONS)
                        
                        # Calculate bounding box
                        h, w, c = img.shape
                        x_min, y_min = w, h
                        x_max, y_max = 0, 0
                        for lm in hand_lms.landmark:
                            cx, cy = int(lm.x * w), int(lm.y * h)
                            if cx < x_min: x_min = cx
                            if cx > x_max: x_max = cx
                            if cy < y_min: y_min = cy
                            if cy > y_max: y_max = cy
                            
                        padding = 20
                        x_min, y_min = max(0, x_min - padding), max(0, y_min - padding)
                        x_max, y_max = min(w, x_max + padding), min(h, y_max + padding)
                        
                        # Draw futuristic bounding box
                        length = 20
                        t = 3
                        color = (0, 255, 255) # Cyan/Yellow aesthetic
                        
                        # Top-left
                        cv2.line(img, (x_min, y_min), (x_min + length, y_min), color, t)
                        cv2.line(img, (x_min, y_min), (x_min, y_min + length), color, t)
                        # Top-right
                        cv2.line(img, (x_max, y_min), (x_max - length, y_min), color, t)
                        cv2.line(img, (x_max, y_min), (x_max, y_min + length), color, t)
                        # Bottom-left
                        cv2.line(img, (x_min, y_max), (x_min + length, y_max), color, t)
                        cv2.line(img, (x_min, y_max), (x_min, y_max - length), color, t)
                        # Bottom-right
                        cv2.line(img, (x_max, y_max), (x_max - length, y_max), color, t)
                        cv2.line(img, (x_max, y_max), (x_max, y_max - length), color, t)
                        
                        # Handedness label
                        if self.results.multi_handedness:
                            handedness_dict = self.results.multi_handedness[i].classification[0]
                            label = handedness_dict.label
                            score = handedness_dict.score
                            text = f"{label} [{score:.2f}]"
                            
                            (text_w, text_h), _ = cv2.getTextSize(text, cv2.FONT_HERSHEY_PLAIN, 1.2, 2)
                            cv2.rectangle(img, (x_min, y_min - 25), (x_min + text_w + 10, y_min), color, cv2.FILLED)
                            cv2.putText(img, text, (x_min + 5, y_min - 5), cv2.FONT_HERSHEY_PLAIN, 1.2, (0, 0, 0), 2)

            return img
        except Exception as e:
            logger.error(f"Error in find_hands: {e}")
            return img

    def find_position(self, img: np.ndarray, hand_no: int = 0, draw: bool = True) -> List[List]:
        """Get landmark positions for a specific hand.
        
        Args:
            img: Input image
            hand_no: Index of the hand (0 or 1)
            draw: Whether to draw circles at landmark positions
        
        Returns:
            List of [id, x, y, z] for each landmark
        """
        lm_list = []
        if self.results and self.results.multi_hand_landmarks:
            if hand_no < len(self.results.multi_hand_landmarks):
                my_hand = self.results.multi_hand_landmarks[hand_no]
                h, w, c = img.shape
                for id, lm in enumerate(my_hand.landmark):
                    cx, cy = int(lm.x * w), int(lm.y * h)
                    lm_list.append([id, cx, cy, lm.z])
                    if draw:
                        cv2.circle(img, (cx, cy), 5, (255, 0, 255), cv2.FILLED)
        return lm_list

    def get_landmarks_array(self) -> Optional[np.ndarray]:
        """Get landmarks for all detected hands as a normalized numpy array.
        
        Returns:
            Flattened array of landmarks [hand1_landmarks, hand2_landmarks]
            where each hand has 63 values (21 landmarks × 3 coords).
            Returns None if no hands detected.
        """
        if not self.results or not self.results.multi_hand_landmarks:
            return None
        
        try:
            all_landmarks = []
            for i, hand_lms in enumerate(self.results.multi_hand_landmarks):
                landmarks = [[lm.x, lm.y, lm.z] for lm in hand_lms.landmark]
                all_landmarks.append(np.array(landmarks).flatten())
            
            # Pad with zeros if only one hand detected
            if len(all_landmarks) == 1:
                all_landmarks.append(np.zeros(63))  # 21 points * 3 coords
            
            return np.array(all_landmarks).flatten()
        except Exception as e:
            logger.error(f"Error getting landmarks array: {e}")
            return None

def main():
    p_time = 0
    cap = cv2.VideoCapture(0)
    tracker = HandTracker()

    print("Starting Hand Tracker... Press 'q' to quit.")

    while True:
        success, img = cap.read()
        if not success:
            break
            
        img = tracker.find_hands(img)
        lm_list = tracker.find_position(img, draw=False)
        
        if len(lm_list) != 0:
            # Example: print the position of the thumb tip (id 4)
            # print(lm_list[4])
            pass

        c_time = time.time()
        fps = 1 / (c_time - p_time)
        p_time = c_time

        cv2.putText(img, f"FPS: {int(fps)}", (10, 70), cv2.FONT_HERSHEY_PLAIN, 3, (255, 0, 255), 3)

        cv2.imshow("Hand Tracker", img)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
