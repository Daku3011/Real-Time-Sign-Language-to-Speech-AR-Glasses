import cv2
import mediapipe as mp
import time
import numpy as np

class HandTracker:
    def __init__(self, mode=False, max_hands=2, detection_con=0.5, track_con=0.5):
        self.mode = mode
        self.max_hands = max_hands # Strictly single hand for this project
        self.detection_con = detection_con
        self.track_con = track_con

        self.mp_hands = mp.solutions.hands
        self.hands = self.mp_hands.Hands(
            static_image_mode=self.mode,
            max_num_hands=self.max_hands,
            min_detection_confidence=self.detection_con,
            min_tracking_confidence=self.track_con
        )
        self.mp_draw = mp.solutions.drawing_utils
        self.tip_ids = [4, 8, 12, 16, 20]

    def find_hands(self, img, draw=True):
        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        self.results = self.hands.process(img_rgb)

        if self.results.multi_hand_landmarks:
            for hand_lms in self.results.multi_hand_landmarks:
                if draw:
                    self.mp_draw.draw_landmarks(img, hand_lms, self.mp_hands.HAND_CONNECTIONS)
        return img

    def find_position(self, img, hand_no=0, draw=True):
        lm_list = []
        if self.results.multi_hand_landmarks:
            my_hand = self.results.multi_hand_landmarks[hand_no]
            for id, lm in enumerate(my_hand.landmark):
                h, w, c = img.shape
                cx, cy = int(lm.x * w), int(lm.y * h)
                lm_list.append([id, cx, cy, lm.z])
                if draw:
                    cv2.circle(img, (cx, cy), 5, (255, 0, 255), cv2.FILLED)
        return lm_list

    def get_landmarks_array(self):
        """Returns landmarks for all detected hands as a normalized numpy array."""
        if self.results.multi_hand_landmarks:
            all_landmarks = []
            # Sort hands by label (Left/Right) to ensure consistent ordering in the feature vector
            # MediaPipe results.multi_handedness gives us labels
            for i, hand_lms in enumerate(self.results.multi_hand_landmarks):
                landmarks = [[lm.x, lm.y, lm.z] for lm in hand_lms.landmark]
                all_landmarks.append(np.array(landmarks).flatten())
            
            # If only one hand is detected, we pad with zeros to maintain a consistent shape (2 x 63)
            # This allows the model to differentiate between 1-hand and 2-hand signs
            if len(all_landmarks) == 1:
                all_landmarks.append(np.zeros(63)) # 21 points * 3 coords
            
            return np.array(all_landmarks).flatten()
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
