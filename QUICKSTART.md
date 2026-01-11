# SSIP - Real-Time Sign Language to Speech AR Glasses

## Quick Start Guide

### Prerequisites

- Python 3.8 or higher
- Webcam
- Linux/Mac/Windows

### Installation

1. **Clone or navigate to the project:**

```bash
cd /mnt/Dwarkesh/SSIP
```

2. **Install dependencies:**

```bash
pip install -r requirements.txt
```

3. **Install system dependencies (if needed):**

**For OCR (Tesseract):**

```bash
# Ubuntu/Debian
sudo apt-get install tesseract-ocr

# macOS
brew install tesseract

# Windows
# Download from: https://github.com/UB-Mannheim/tesseract/wiki
```

**For TTS (pyttsx3):**

```bash
# Ubuntu/Debian
sudo apt-get install espeak

# Already works on macOS and Windows
```

### Running the Application

**Main Application:**

```bash
python3 src/main.py
```

**Test Components Individually:**

```bash
# Test hand tracking only
python3 src/hand_tracker.py

# Import gesture data from images
python3 src/data_importer.py

# Auto-learn from books/diagrams
python3 src/auto_learner.py
```

### First Time Setup

When you first run the application, there won't be any gesture templates. You have two options:

**Option 1: Record gestures manually (Recommended for testing)**

1. Run `python3 src/main.py`
2. Press `r` to start recording
3. Enter label (e.g., "hello") in terminal
4. Wait for countdown
5. Perform gesture during recording
6. Press `s` to save

**Option 2: Import from images**

1. Organize images in folders by gesture name
2. Run `python3 src/data_importer.py`
3. Enter gesture label
4. Enter folder path
5. Save when done

### Keyboard Controls

**In Main Application:**

- `m` - Toggle between Signing and Reading modes
- `r` - Record new gesture (Signing mode)
- `t` - Read text in box (Reading mode)
- `s` - Save all gesture data
- `l` - List known gestures
- `q` - Quit application

### Configuration

Edit `config.py` to customize:

- Camera settings (index, resolution)
- Detection thresholds
- TTS voice settings
- File paths
- Logging preferences

### Troubleshooting

**Camera not working:**

- Check camera index in `config.py` (try 0, 1, or 2)
- Ensure camera permissions are granted
- Test with: `python3 src/hand_tracker.py`

**"No hands detected":**

- Ensure good lighting
- Check camera is not blocked
- Adjust `DETECTION_CONFIDENCE` in `config.py`

**Gesture not recognized:**

- Record more examples (10+ per gesture)
- Ensure consistent signing
- Check confidence threshold in `config.py`

**OCR not working:**

- Install tesseract: `sudo apt-get install tesseract-ocr`
- Check `TESSERACT_CMD` path in `config.py`

**TTS not working:**

- Install espeak: `sudo apt-get install espeak`
- Check system audio settings

### Logs

Application logs are saved to: `logs/app.log`

View logs:

```bash
# Real-time monitoring
tail -f logs/app.log

# View all logs
cat logs/app.log
```

### Data Files

- **Gesture templates:** `models/templates.pkl`
- **Alphabet images:** `Alphabates/`
- **Logs:** `logs/app.log`

### Need Help?

1. Check logs: `logs/app.log`
2. Review configuration: `config.py`
3. Test components individually
4. Check GitHub issues (if applicable)

### Project Structure

```
SSIP/
├── src/
│   ├── main.py              # Main application
│   ├── hand_tracker.py      # MediaPipe hand tracking
│   ├── gesture_classifier.py # Gesture recognition
│   ├── tts_engine.py        # Text-to-speech
│   ├── ocr_engine.py        # OCR for reading
│   ├── auto_learner.py      # Auto-learn from images
│   └── data_importer.py     # Import gesture data
├── models/
│   └── templates.pkl        # Saved gestures
├── config.py                # Configuration
├── requirements.txt         # Dependencies
└── README.md               # Full documentation
```
