import numpy as np
import pickle
import os

class GestureClassifier:
    def __init__(self, template_path="models/templates.pkl"):
        self.template_path = template_path
        self.templates = {}
        self.load_templates()

    def load_templates(self):
        if os.path.exists(self.template_path):
            with open(self.template_path, "rb") as f:
                self.templates = pickle.load(f)
            print(f"Loaded {len(self.templates)} gesture templates.")
        else:
            print("No templates found. Please record some gestures.")

    def save_templates(self):
        os.makedirs(os.path.dirname(self.template_path), exist_ok=True)
        with open(self.template_path, "wb") as f:
            pickle.dump(self.templates, f)
        print("Templates saved successfully.")

    def add_template(self, label, landmarks):
        if label not in self.templates:
            self.templates[label] = []
        self.templates[label].append(landmarks)

    def clear_gesture(self, label):
        if label in self.templates:
            del self.templates[label]
            print(f"Cleared all templates for '{label}'.")
            return True
        return False

    def classify(self, landmarks):
        if not self.templates:
            return "No Templates", 0.0

        min_dist = float('inf')
        best_label = "Unknown"

        # Simple Euclidean distance classifier (can be replaced with KNN or ANN)
        for label, examples in self.templates.items():
            for example in examples:
                dist = np.linalg.norm(landmarks - example)
                if dist < min_dist:
                    min_dist = dist
                    best_label = label

        # Normalize distance into a confidence score (heuristic)
        confidence = max(0, 1 - (min_dist / 2.0)) 
        return best_label, confidence

def normalize_landmarks(landmarks):
    """Normalize landmarks to be scale and position invariant for both hands."""
    # landmarks is a flattened array of [x, y, z] x 42 (concatenated 21 per hand)
    # Shape is expected to be 126 (2 hands * 21 points * 3 coords)
    
    # Reshape to (2, 21, 3)
    try:
        data = landmarks.reshape(2, 21, 3)
    except:
        return landmarks # Fallback for unexpected shapes
        
    normalized_data = []
    for hand in data:
        if np.all(hand == 0): # Zero padding for missing hand
            normalized_data.append(hand)
            continue
            
        # 1. Translate: Center at wrist (landmark 0)
        base_point = hand[0]
        hand = hand - base_point
        
        # 2. Scale: Normalize by max distance in this hand
        max_dist = np.max(np.linalg.norm(hand, axis=1))
        if max_dist > 0:
            hand = hand / max_dist
        normalized_data.append(hand)
            
    return np.array(normalized_data).flatten()
#  Riverside 
