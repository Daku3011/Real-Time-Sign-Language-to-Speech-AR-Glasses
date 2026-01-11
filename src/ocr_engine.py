"""OCR Engine for text extraction using Tesseract."""

import pytesseract
import cv2
import numpy as np
from typing import Optional, List, Tuple
import sys
import os

# Add parent directory to path for imports
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

try:
    from src.logger import setup_logger
    logger = setup_logger(__name__)
except:
    import logging
    logger = logging.getLogger(__name__)

class OCREngine:
    """OCR engine for extracting text from images using Tesseract."""
    
    def __init__(self):
        """Initialize OCR engine."""
        # On Linux, tesseract is usually in the path
        # On Windows: pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
        try:
            # Test if tesseract is available
            version = pytesseract.get_tesseract_version()
            logger.info(f"Tesseract OCR initialized (version: {version})")
        except Exception as e:
            logger.error(f"Tesseract not found or not configured: {e}")
            logger.warning("OCR functionality will not work. Install tesseract-ocr.")

    def extract_text(self, img: np.ndarray, preprocess: bool = True) -> str:
        """Extract text from an image region.
        
        Args:
            img: Input image (BGR format)
            preprocess: Whether to apply preprocessing (default: True)
            
        Returns:
            Extracted text string
        """
        if img is None or img.size == 0:
            logger.warning("Empty image provided to OCR")
            return ""
        
        try:
            if preprocess:
                # Apply multiple preprocessing techniques
                processed = self._preprocess_image(img)
            else:
                processed = img
            
            # Try multiple OCR configurations
            text = self._try_multiple_configs(processed)
            
            if text:
                logger.info(f"OCR extracted text: '{text[:50]}...'")
            else:
                logger.warning("No text detected by OCR")
            
            return text.strip()
            
        except Exception as e:
            logger.error(f"OCR extraction failed: {e}")
            return ""
    
    def _preprocess_image(self, img: np.ndarray) -> np.ndarray:
        """Apply advanced preprocessing for better OCR accuracy.
        
        Args:
            img: Input image
            
        Returns:
            Preprocessed image
        """
        # Convert to grayscale
        if len(img.shape) == 3:
            gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        else:
            gray = img
        
        # Resize if too small (OCR works better on larger images)
        height, width = gray.shape
        if height < 100 or width < 100:
            scale = max(100 / height, 100 / width)
            gray = cv2.resize(gray, None, fx=scale, fy=scale, interpolation=cv2.INTER_CUBIC)
        
        # Apply denoising
        denoised = cv2.fastNlMeansDenoising(gray, None, 10, 7, 21)
        
        # Apply adaptive thresholding (better than simple threshold)
        thresh = cv2.adaptiveThreshold(
            denoised, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, 
            cv2.THRESH_BINARY, 11, 2
        )
        
        # Morphological operations to clean up
        kernel = np.ones((1, 1), np.uint8)
        morph = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel)
        
        return morph
    
    def _try_multiple_configs(self, img: np.ndarray) -> str:
        """Try multiple Tesseract configurations to find text.
        
        Args:
            img: Preprocessed image
            
        Returns:
            Best extracted text
        """
        configs = [
            '--psm 6',  # Assume uniform block of text
            '--psm 7',  # Treat as single text line
            '--psm 11', # Sparse text
            '--psm 3',  # Fully automatic (default)
        ]
        
        best_text = ""
        max_confidence = 0
        
        for config in configs:
            try:
                # Get text with confidence
                data = pytesseract.image_to_data(img, config=config, output_type=pytesseract.Output.DICT)
                
                # Calculate average confidence
                confidences = [int(c) for c in data['conf'] if c != '-1']
                if confidences:
                    avg_conf = sum(confidences) / len(confidences)
                    
                    # Extract text
                    text = pytesseract.image_to_string(img, config=config, lang='eng')
                    
                    # Keep best result
                    if text.strip() and avg_conf > max_confidence:
                        max_confidence = avg_conf
                        best_text = text
            except Exception as e:
                continue
        
        return best_text

    def get_text_regions(self, img: np.ndarray) -> List[Tuple[int, int, int, int]]:
        """Find bounding boxes for text blocks.
        
        Args:
            img: Input image
            
        Returns:
            List of (x, y, w, h) tuples for text regions
        """
        try:
            d = pytesseract.image_to_data(img, output_type=pytesseract.Output.DICT)
            n_boxes = len(d['text'])
            regions = []
            
            for i in range(n_boxes):
                if int(d['conf'][i]) > 60:  # Confidence threshold
                    (x, y, w, h) = (d['left'][i], d['top'][i], d['width'][i], d['height'][i])
                    regions.append((x, y, w, h))
            
            return regions
        except Exception as e:
            logger.error(f"Failed to get text regions: {e}")
            return []


if __name__ == "__main__":
    # Test OCR
    ocr = OCREngine()
    
    # Create test image with text
    test_img = np.ones((200, 400, 3), dtype=np.uint8) * 255
    cv2.putText(test_img, "HELLO WORLD", (50, 100), 
                cv2.FONT_HERSHEY_SIMPLEX, 2, (0, 0, 0), 3)
    
    text = ocr.extract_text(test_img)
    print(f"Detected text: '{text}'")
