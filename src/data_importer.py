import cv2
import os
import glob
from hand_tracker import HandTracker
from gesture_classifier import GestureClassifier, normalize_landmarks

def import_from_folder(label, folder_path, tracker, classifier):
    """Process all images in a folder and add detected hands to the classifier."""
    valid_extensions = ('.jpg', '.jpeg', '.png', '.bmp')
    image_files = []
    for ext in valid_extensions:
        image_files.extend(glob.glob(os.path.join(folder_path, f"*{ext}")))
        image_files.extend(glob.glob(os.path.join(folder_path, f"*{ext.upper()}")))

    if not image_files:
        print(f"No valid images found in {folder_path}")
        return

    print(f"Processing {len(image_files)} images for label '{label}'...")
    success_count = 0

    for img_path in image_files:
        img = cv2.imread(img_path)
        if img is None:
            continue
            
        # find_hands takes care of processing
        tracker.find_hands(img, draw=False)
        landmarks = tracker.get_landmarks_array()
        
        if landmarks is not None:
            norm_landmarks = normalize_landmarks(landmarks)
            classifier.add_template(label, norm_landmarks)
            success_count += 1
        else:
            print(f"  [Warning] No hand detected in: {os.path.basename(img_path)}")

    print(f"Finished! Successfully added {success_count} templates to '{label}'.")

def main():
    tracker = HandTracker(mode=True) # Static image mode = True for better accuracy on photos
    classifier = GestureClassifier()
    
    print("--- Sign Language Image Importer ---")
    label = input("Enter gesture label (e.g., 'Hello'): ")
    folder_path = input("Enter path to image folder: ")
    
    if not os.path.exists(folder_path):
        print("Folder path does not exist.")
        return
        
    import_from_folder(label, folder_path, tracker, classifier)
    
    save = input("Save templates to disk? (y/n): ")
    if save.lower() == 'y':
        classifier.save_templates()

if __name__ == "__main__":
    main()
