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
        """Classify a gesture based on landmark data.
        
        Args:
            landmarks: Numpy array of landmark coordinates
            
        Returns:
            tuple: (label, confidence) - best matching label and confidence score
        """
        if not self.templates:
            return "No Templates", 0.0

        # Normalize incoming landmarks to 126 dimensions (2 hands x 21 points x 3 coords)
        landmarks = self._normalize_shape(landmarks)
        
        min_dist = float('inf')
        best_label = "Unknown"

        # Compare with all template examples
        for label, examples in self.templates.items():
            for example in examples:
                # Normalize template to same shape
                example_norm = self._normalize_shape(example)
                
                # Calculate distance
                dist = np.linalg.norm(landmarks - example_norm)
                if dist < min_dist:
                    min_dist = dist
                    best_label = label

        # Normalize distance into a confidence score (heuristic)
        confidence = max(0, 1 - (min_dist / 2.0)) 
        return best_label, confidence
    
    def _normalize_shape(self, landmarks):
        """Ensure landmarks are always 126 dimensions (2 hands).
        
        Args:
            landmarks: Input landmarks of any shape
            
        Returns:
            np.ndarray: Normalized to 126 dimensions
        """
        shape = landmarks.shape[0]
        
        # Already correct shape
        if shape == 126:
            return landmarks
        
        # Single hand (63 dims) - pad with zeros for second hand
        elif shape == 63:
            return np.concatenate([landmarks, np.zeros(63)])
        
        # More than 126 dims - take only first 126
        elif shape > 126:
            return landmarks[:126]
        
        # Less than 63 dims - pad to 126
        else:
            padding = np.zeros(126 - shape)
            return np.concatenate([landmarks, padding])

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
