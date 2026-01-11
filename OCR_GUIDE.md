# OCR Troubleshooting Guide

## "No text found" Error - Solutions

### Quick Fixes:

**1. Ensure Good Text Visibility:**

- Text should be **large** and **clear**
- High contrast (black text on white background works best)
- Good lighting - no shadows or glare
- Hold text steady, no motion blur

**2. Optimal Text Position:**

- Fill the green box with text
- Text should be horizontal (not tilted)
- Try to get only text in the frame (minimal background)

**3. Test OCR Setup:**

```bash
# Test if tesseract works
tesseract --version

# Test OCR directly
python3 src/ocr_engine.py
```

### Step-by-Step Testing:

**1. Simple Test:**

- Print "HELLO WORLD" in large, bold font on white paper
- Press `m` to switch to Reading mode
- Align text in the green box
- Press `t` to scan

**2. If Still Not Working:**

Check logs:

```bash
cat logs/app.log | grep OCR
```

**3. Common Issues:**

| Issue          | Solution                              |
| -------------- | ------------------------------------- |
| Text too small | Make text larger, camera will zoom in |
| Poor lighting  | Add more light, avoid shadows         |
| Text tilted    | Hold paper horizontal                 |
| Handwriting    | OCR works best with printed text      |
| Reflections    | Remove glare from glossy paper        |

### Advanced Tips:

**For Better Accuracy:**

1. Use high-contrast text (black on white)
2. Sans-serif fonts work better than serif
3. Font size 24pt or larger recommended
4. Clean, crisp text (no artifacts)

**Camera Tips:**

- Hold camera steady (2-3 seconds)
- Distance: 15-30 cm from text
- Ensure camera focus is sharp

### What Changed:

**New OCR Features:**

- ✅ Advanced image preprocessing (denoising, adaptive threshold)
- ✅ Multiple OCR configurations tried automatically
- ✅ Better handling of small/large text
- ✅ Morphological operations for noise reduction
- ✅ Detailed logging for debugging

### Test Examples:

**Good for OCR:**

- Printed books
- Computer screens
- Large printed signs
- Typed documents

**Challenging for OCR:**

- Handwritten notes
- Very small text (< 12pt)
- Cursive writing
- Low contrast text
- Blurry images

### Still Having Issues?

1. Check tesseract installation:

   ```bash
   tesseract --list-langs
   ```

   Should show: eng (English)

2. Update config.py:

   ```python
   OCR_CONFIDENCE_THRESHOLD = 40  # Lower for more lenient detection
   ```

3. Check camera resolution:
   ```python
   CAMERA_WIDTH = 1280  # Higher resolution
   CAMERA_HEIGHT = 720
   ```

### Example Usage:

```
1. Run: python3 src/main.py
2. Press 'm' → "READING mode"
3. Show text to camera (fill green box)
4. Wait for focus
5. Press 't' → OCR will scan
6. Listen for text-to-speech output
```

**Pro Tip:** For best results, use a printed page with large, clear text for your first test!
