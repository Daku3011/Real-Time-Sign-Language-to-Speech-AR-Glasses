import pytesseract
import cv2
import numpy as np

class OCREngine:
    def __init__(self):
        # On Linux, tesseract is usually in the path. 
        # On Windows, you'd need: pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
        pass

    def extract_text(self, img):
        """Extract text from an image region."""
        # Preprocessing: Convert to grayscale
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        
        # Thresholding to get black and white (binary) image
        _, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
        
        # Optional: Denoising
        # thresh = cv2.medianBlur(thresh, 3)

        # Extraction
        text = pytesseract.image_to_string(thresh, lang='eng')
        return text.strip()

    def get_text_regions(self, img):
        """Find bounding boxes for text blocks (useful for HUD)."""
        d = pytesseract.image_to_data(img, output_type=pytesseract.Output.DICT)
        n_boxes = len(d['text'])
        regions = []
        for i in range(n_boxes):
            if int(d['conf'][i]) > 60: # Confidence threshold
                (x, y, w, h) = (d['left'][i], d['top'][i], d['width'][i], d['height'][i])
                regions.append((x, y, w, h))
        return regions
