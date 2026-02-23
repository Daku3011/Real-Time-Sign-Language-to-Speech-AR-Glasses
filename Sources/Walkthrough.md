# Complete Prototype Development Process & Component Sourcing Guide for Surat

---

## PHASE-BY-PHASE BUILD PROCESS

---

## **PHASE 0: PRE-DEVELOPMENT PREPARATION (Week 1-2)**

### Step 0.1: Team Formation & Skill Assessment
**Required Team Members:**
- 1 Computer Vision/ML Engineer
- 1 Embedded Systems Developer
- 1 Hardware/Electronics Engineer
- 1 Designer (Mechanical/Industrial)
- 2-3 Deaf Community Liaisons (for testing & feedback)

**Skills Needed:**
- Python programming
- TensorFlow/PyTorch experience
- Raspberry Pi development
- 3D CAD design (Fusion 360/SolidWorks)
- Basic electronics assembly
- Sign language knowledge (or learning)

### Step 0.2: Workspace Setup
**Requirements:**
- Computer with GPU (for model training) - NVIDIA GTX 1060 or better
- Development workstation for embedded programming
- 3D printer access
- Soldering station
- Testing area with good lighting

**In Surat:**
- **Makerspaces:** Check SVNIT FabLab, Surat Startup Hub
- **Co-working Spaces:** IndiQube Surat, 91Springboard
- **College Labs:** If you're student, use college electronics lab

### Step 0.3: Budget Allocation
```
Development Budget Breakdown:
├── Prototype Units (2 units): ₹45,000
├── Development Tools: ₹15,000
├── Data Collection: ₹10,000
├── Testing & Iteration: ₹8,000
├── Miscellaneous: ₹5,000
└── TOTAL: ₹83,000
```

---

## **PHASE 1: DESKTOP MVP (Weeks 3-6) - PROOF OF CONCEPT**

### Goal: Validate gesture recognition works before hardware investment

### Step 1.1: Setup Development Environment

**Software Installation:**
```bash
# Install Python 3.9
sudo apt update
sudo apt install python3.9 python3-pip

# Install required libraries
pip install opencv-python mediapipe tensorflow numpy pandas matplotlib

# Install Jupyter for experimentation
pip install jupyter notebook
```

**Hardware Needed:**
- Any laptop with webcam
- USB webcam (optional, for better quality)

**Where to Buy in Surat:**
- **Laptop Webcam Alternative:** Logitech C270 HD Webcam
  - **Store:** Computer Point, Ring Road
  - **Price:** ₹1,500-₹2,000
  - **Address:** Shop No. 12, Kapodra Complex, Ring Road

### Step 1.2: Data Collection Setup

**Create Data Collection Script:**

```python
import cv2
import mediapipe as mp
import json
import time

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(
    static_image_mode=False,
    max_num_hands=2,
    min_detection_confidence=0.5
)

cap = cv2.VideoCapture(0)
gesture_data = []

print("Press SPACE to record gesture, Q to quit")

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    
    frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = hands.process(frame_rgb)
    
    if results.multi_hand_landmarks:
        for hand_landmarks in results.multi_hand_landmarks:
            landmarks = []
            for landmark in hand_landmarks.landmark:
                landmarks.extend([landmark.x, landmark.y, landmark.z])
            
            # Display on screen
            mp.solutions.drawing_utils.draw_landmarks(
                frame, hand_landmarks, mp_hands.HAND_CONNECTIONS
            )
    
    cv2.imshow('Data Collection', frame)
    
    key = cv2.waitKey(1) & 0xFF
    if key == ord('q'):
        break
    elif key == ord(' '):
        # Save current landmarks
        if results.multi_hand_landmarks:
            print("Gesture recorded!")
            # Save to file

cap.release()
cv2.destroyAllWindows()
```

### Step 1.3: Collect Training Data

**Data Collection Plan:**
1. **Recruit 10-15 signers** from Surat deaf community
   - **Contact:** Gujarat State Deaf Association, Surat Branch
   - **Address:** Contact via Gujarat Rajya Badhir Kalyan Mandal
   - **Phone:** Search "Surat deaf association" on Google Maps

2. **Record 50 common ISL signs**
   - Start with: Hello, Thank you, Help, Yes, No, Hospital, Doctor, Medicine, Food, Water, Bathroom, Family, Friend, Name, Please, Sorry, Good, Bad, Happy, Sad, etc.

3. **10 repetitions per sign per person** = 5,000 samples minimum

**Data Collection Locations in Surat:**
- **Home Studio:** Best lighting control
- **Community Centers:** Better participant access
- **SVNIT Campus:** If you have access

### Step 1.4: Train Initial Model

**Simple CNN-LSTM Model:**

```python
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout

# Model architecture
model = Sequential([
    LSTM(128, return_sequences=True, input_shape=(30, 63)),  # 30 frames, 63 features (21 landmarks × 3 coords)
    Dropout(0.2),
    LSTM(64, return_sequences=False),
    Dropout(0.2),
    Dense(64, activation='relu'),
    Dense(num_classes, activation='softmax')  # num_classes = number of signs
])

model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Train
history = model.fit(
    X_train, y_train,
    validation_data=(X_val, y_val),
    epochs=50,
    batch_size=32
)

# Save model
model.save('isl_gesture_model.h5')
```

**Hardware for Training:**
- **GPU Required:** Rent cloud GPU or use local if available
- **Cloud Options:** Google Colab (Free tier sufficient), Paperspace Gradient
- **Cost:** Free to ₹500/month

### Step 1.5: Test Desktop MVP

**Success Criteria:**
- ✅ 80%+ accuracy on test set
- ✅ Real-time processing (>15 FPS)
- ✅ Recognizes at least 50 signs reliably

**Testing Checklist:**
- Different lighting conditions
- Different backgrounds
- Different signers (not in training set)
- Various signing speeds
- Partial occlusions

---

## **PHASE 2: HARDWARE PROCUREMENT (Weeks 7-8)**

### Complete Component List with Surat Sources

---

### **CATEGORY A: CORE ELECTRONICS**

#### 1. **Raspberry Pi Zero 2 W**
**Specifications:** Quad-core 1GHz, 512MB RAM, WiFi, Bluetooth
**Quantity:** 2 units (1 prototype + 1 backup)
**Price:** ₹1,800 each

**Where to Buy in Surat:**
**Option 1: Online (Recommended)**
- **RoboKits India:** robu.in, robocraze.com
- **Delivery Time:** 2-3 days to Surat
- **Advantage:** Original imports, warranty

**Option 2: Local Electronics Markets**
- **Sahara Darwaja Electronics Market**
  - Address: Sahara Darwaja, Near Railway Station
  - Ask for: "Raspberry Pi dealers"
  - Shops: Shiv Electronics, Raj Electronics
  - **Call ahead:** They don't always stock Pi Zero 2 W
  
- **Pal RTO Electronics Market**
  - Address: Near Pal RTO Circle
  - Multiple electronics component shops
  - Better for passive components

**Option 3: Order from Ahmedabad**
- **SP Road Electronics, Ahmedabad** (90km from Surat)
- Day trip to procure if urgent

#### 2. **Raspberry Pi Camera Module v2**
**Specifications:** 8MP Sony IMX219, 1080p30
**Quantity:** 2 units
**Price:** ₹2,200 each

**Where to Buy:**
- **Online:** Same as Pi Zero (RoboKits, Robu.in)
- **Include:** Camera cable for Pi Zero (shorter 15cm cable)
- **Total Cost:** ₹4,400

#### 3. **MicroSD Cards (32GB Class 10)**
**Specifications:** SanDisk/Samsung, Class 10, A1 rated
**Quantity:** 3 cards (2 for Pi + 1 backup)
**Price:** ₹450 each

**Where to Buy in Surat:**
- **Computer Point, Ring Road**
  - Original SanDisk cards
  - Address: Kapodra, Ring Road
  
- **Croma Store, VR Surat**
  - Address: VR Surat Mall, Dumas Road
  - Price: Slightly higher but guaranteed original

- **Amazon/Flipkart**
  - Next-day delivery available in Surat

#### 4. **LiPo Battery 3.7V 2500mAh**
**Specifications:** With protection circuit, JST connector
**Quantity:** 2 units
**Price:** ₹450 each

**Where to Buy in Surat:**
- **Hobby King Resellers (Online)**
  - Best quality, delivery in 3-4 days
  
- **Local RC Hobby Shops:**
  - **Model Craft Surat**
    - Address: Athwa Lines (near Parle Point)
    - Phone: Search "RC hobby shop Surat"
    - Stock LiPo batteries for drones/RC cars
  
- **Electronics Market (Sahara Darwaja)**
  - Ask specifically for "3.7V LiPo with protection"

#### 5. **5V Boost Converter Module**
**Specifications:** Input 3.7V, Output 5V 2A, Micro USB out
**Quantity:** 3 modules (includes testing spares)
**Price:** ₹180 each

**Where to Buy in Surat:**
- **Sahara Darwaja Electronics Market**
  - Ask for "DC-DC boost converter 5V"
  - Shops: Any electronics component shop
  
- **Online Backup:**
  - Robu.in: "MT3608 Boost Converter"
  - Amazon: Search "5V boost converter module"

#### 6. **USB-C Charging Module with Protection**
**Specifications:** TP4056 with protection, USB-C input
**Quantity:** 3 modules
**Price:** ₹220 each

**Where to Buy in Surat:**
- **Sahara Darwaja:** Available at component shops
- **Online:** "TP4056 USB-C charging module" on Amazon/Robu

#### 7. **Battery Capacity Indicator PCB**
**Specifications:** 4-LED battery level indicator
**Quantity:** 2 units
**Price:** ₹150 each

**Where to Buy:**
- **Online Only:** Search "battery level indicator 4 LED"
- Alternative: Use voltage divider + GPIO on Pi (saves cost)

---

### **CATEGORY B: AUDIO SYSTEM**

#### 8. **Bone Conduction Transducer**
**Specifications:** 8Ω impedance, 200Hz-15kHz
**Quantity:** 2 units
**Price:** ₹850 each

**Where to Buy:**
- **Online Specialized:**
  - Amazon: "Bone conduction transducer"
  - AliExpress: Cheaper but 15-20 days delivery
  
- **Local Alternative (if urgent):**
  - Use standard **3.5mm earphone speaker** for prototype
  - Available at any mobile accessories shop in Surat
  - Price: ₹50-₹100
  - **Upgrade to bone conduction later**

#### 9. **Audio Amplifier Module PAM8403**
**Specifications:** 3W stereo amplifier
**Quantity:** 3 modules
**Price:** ₹120 each

**Where to Buy in Surat:**
- **Sahara Darwaja Electronics**
  - Ask for "PAM8403 amplifier module"
  - Alternative: "mini audio amplifier 5V"

---

### **CATEGORY C: DISPLAY SYSTEM**

#### 10. **0.39" OLED Microdisplay Module**
**Specifications:** 1920×1080, HDMI/MIPI input
**Quantity:** 1 unit (expensive, buy only 1)
**Price:** ₹3,200

**Where to Buy:**
- **Online Specialized Only:**
  - Search: "OLED microdisplay 0.39 inch"
  - AliExpress, eBay (international, 20-30 days)
  
- **PROTOTYPE ALTERNATIVE (Phase 2):**
  - **Use 0.96" OLED I2C Display** (128×64)
  - **Price:** ₹250
  - **Available:** Sahara Darwaja, online
  - **Mount:** On frame temple for initial testing
  - **Upgrade:** To microdisplay + waveguide in Phase 3

**Recommended for Prototype: Start with 0.96" OLED**

#### 11. **Waveguide Prism Optics**
**Specifications:** Custom optical component
**Quantity:** 1 unit
**Price:** ₹1,800

**Where to Source:**
- **NOT available locally in Surat**
- **Options:**
  1. **DIY:** Use 45° prism + beam splitter (₹300 from optics shop)
  2. **3D Print + Clear Resin:** Design reflector surface
  3. **Order Custom:** Optics manufacturers in Mumbai/Bengaluru
  4. **Phase 3 Only:** Skip for initial prototype

**Prototype Solution:**
- Mount 0.96" OLED directly visible (no prism needed initially)

#### 12. **Display Driver Board**
**Specifications:** HDMI to MIPI converter (if using microdisplay)
**Quantity:** 1 unit
**Price:** ₹650

**Note:** Not needed if using 0.96" I2C OLED for prototype

---

### **CATEGORY D: MISCELLANEOUS ELECTRONICS**

#### 13. **Tactile Push Buttons**
**Specifications:** 6mm×6mm, momentary switch
**Quantity:** 10 pieces (pack)
**Price:** ₹45 for 10pcs

**Where to Buy in Surat:**
- **Sahara Darwaja:** Any electronics component shop
- **Pack includes:** Usually 10-20 switches

#### 14. **LED Indicators (3mm or 5mm)**
**Specifications:** Red, Green, Blue LEDs
**Quantity:** Pack of 20 (mixed colors)
**Price:** ₹30

**Where to Buy in Surat:**
- **Sahara Darwaja**
- **Any electronics shop**

#### 15. **Resistors Pack (1/4W)**
**Specifications:** 220Ω, 330Ω, 1kΩ, 10kΩ
**Quantity:** 1 pack (50 pieces mixed)
**Price:** ₹50

**Where to Buy in Surat:**
- **Sahara Darwaja**

#### 16. **Jumper Wires & Connectors Kit**
**Specifications:** Male-Male, Male-Female, Female-Female
**Quantity:** 1 kit (120 pieces)
**Price:** ₹200

**Where to Buy in Surat:**
- **Sahara Darwaja**
- **Online:** Amazon "jumper wire kit"

#### 17. **Thermal Interface Material**
**Specifications:** Thermal paste + thermal pads
**Quantity:** 1 tube + 1 sheet
**Price:** ₹80 total

**Where to Buy in Surat:**
- **Computer Hardware Shops (Ring Road area)**
- Ask for "thermal paste" (Arctic MX-4 or similar)

---

### **CATEGORY E: MECHANICAL COMPONENTS**

#### 18. **TR-90 Eyeglass Frame Base**
**Specifications:** Blank temple arms, removable lenses
**Quantity:** 2 frames
**Price:** ₹600 each

**Where to Buy in Surat:**
- **Ghod Dod Road Optical Market**
  - Address: Ghod Dod Road (major optical district)
  - Ask for: "Blank optical frame" or "TR-90 frame without lenses"
  - Multiple wholesale optical shops
  - **Tip:** Explain you need frame for project, ask for reject/basic frame
  
- **VIP Road Optical Shops**
  - Several optical shops, ask for cheap blank frames

**Alternative:**
- Buy cheap reading glasses (₹150-₹300) from street vendors
- Remove lenses, modify temples

#### 19. **Adjustable Nose Pads (Silicone)**
**Specifications:** Stick-on or screw-type
**Quantity:** 3 pairs
**Price:** ₹150 total

**Where to Buy in Surat:**
- **Same optical shops (Ghod Dod Road)**
- Usually sold as accessory

#### 20. **Silicone Temple Tip Covers**
**Specifications:** Anti-slip rubber tips
**Quantity:** 4 pieces
**Price:** ₹80

**Where to Buy in Surat:**
- **Optical shops**
- **Alternative:** Use heat-shrink tubing from electronics shop

---

### **CATEGORY F: 3D PRINTING & FABRICATION**

#### 21. **3D Printing Services (For Custom Brackets)**

**What to Print:**
- Camera mount bracket
- Battery enclosure
- Display mount
- Internal wire management clips
- Heat sink mounts

**Where to Get in Surat:**

**Option 1: Local 3D Printing Services**
- **IndiaMart Search:** "3D printing service Surat"
- **Expected Cost:** ₹200-₹500 for all parts
- **Contact:**
  - **Prototype Designers, Surat**
  - **3D Innovation Lab** (if available near you)

**Option 2: College FabLabs**
- **SVNIT FabLab** (if you have access)
  - Free or minimal cost for students
  - Requires CAD files in STL format

**Option 3: Maker Spaces**
- **Surat Startup Hub** (may have 3D printer access)
- **Co-working spaces** with maker facilities

**3D Printing Material:**
- **PLA filament** (sufficient for prototype)
- **Cost:** ₹400/kg (you'll use ~200g = ₹80)

**Where to Buy Filament in Surat (if DIY):**
- **Online:** Amazon, Think3D.in (delivered in 2-3 days)

#### 22. **Copper Heat Spreader**
**Specifications:** 0.5mm thick copper sheet, cut to size
**Quantity:** 1 sheet (5cm×5cm)
**Price:** ₹90

**Where to Buy in Surat:**
- **Hardware shops (Sahara Darwaja area)**
- Ask for "copper sheet" or "copper shim"
- **Alternative:** Salvage from old electronics

#### 23. **Aluminum Heat Sink (Custom Cut)**
**Specifications:** Flat aluminum bar, 145mm×10mm×3mm
**Quantity:** 2 pieces
**Price:** ₹150 total

**Where to Buy in Surat:**
- **Metal Hardware Shops**
  - **Bombay Market** (near railway station)
  - Ask for "aluminum flat bar"
- **Alternative:** Salvage from old electronics/computers

#### 24. **Thermal Pads (Adhesive)**
**Specifications:** 1mm thick, thermally conductive
**Quantity:** 1 sheet
**Price:** ₹60

**Where to Buy in Surat:**
- **Computer hardware shops (Ring Road)**
- **Online:** Amazon "thermal pad adhesive"

---

### **CATEGORY G: FASTENERS & ASSEMBLY**

#### 25. **Screws, Standoffs, Nuts Kit**
**Specifications:** M2, M2.5, M3 screws, nylon standoffs
**Quantity:** 1 assortment kit
**Price:** ₹100

**Where to Buy in Surat:**
- **Hardware shops (Sahara Darwaja)**
- **Online:** "M2 M3 screw assortment kit"

#### 26. **Adhesives**
- **Cyanoacrylate (Super Glue):** ₹40
- **Hot Glue Gun + Sticks:** ₹150
- **Double-sided foam tape:** ₹50

**Where to Buy in Surat:**
- **Stationary shops (Nanpura, Ghod Dod Road)**
- **Hardware shops**

---

### **CATEGORY H: DEVELOPMENT & TESTING EQUIPMENT**

#### 27. **USB Keyboard + Mouse (for Pi setup)**
**Quantity:** 1 combo
**Price:** ₹800

**Where to Buy in Surat:**
- **Computer Point (Ring Road)**
- **Croma, VR Surat Mall**

#### 28. **Mini HDMI to HDMI Cable**
**Specifications:** For Raspberry Pi Zero
**Quantity:** 1 cable
**Price:** ₹250

**Where to Buy in Surat:**
- **Electronics shops (Sahara Darwaja)**
- **Computer accessories shops**

#### 29. **Monitor (for development)**
**Option:** Use existing TV/monitor
**If buying:** ₹3,500 for basic 19" LED monitor

**Where to Buy in Surat:**
- **Computer shops (Ring Road area)**

#### 30. **5V 3A Power Supply (for Pi)**
**Specifications:** Micro USB, 5V 3A
**Quantity:** 2 units
**Price:** ₹400 each

**Where to Buy in Surat:**
- **Mobile accessories shops** (anywhere)
- Ensure it's 3A minimum for Pi Zero 2 W

#### 31. **Digital Multimeter**
**Specifications:** Basic voltage/current/resistance measurement
**Quantity:** 1 unit
**Price:** ₹400-₹800

**Where to Buy in Surat:**
- **Electronics shops (Sahara Darwaja)**
- **Hardware stores**

#### 32. **Soldering Iron Kit**
**Specifications:** 25W-40W, with solder wire, flux
**Quantity:** 1 kit
**Price:** ₹600

**Where to Buy in Surat:**
- **Electronics shops (Sahara Darwaja)**
- Ask for "soldering kit for electronics"

#### 33. **Helping Hands (PCB Holder)**
**Specifications:** Clamps with magnifying glass
**Quantity:** 1 unit
**Price:** ₹300

**Where to Buy in Surat:**
- **Electronics hobby shops**
- **Online:** Amazon "helping hands soldering"

---

## **CONSOLIDATED COMPONENT LIST WITH COSTS**

### **ELECTRONICS (₹16,625)**
| Component | Qty | Unit Price | Total |
|-----------|-----|------------|-------|
| Raspberry Pi Zero 2 W | 2 | ₹1,800 | ₹3,600 |
| Camera Module v2 | 2 | ₹2,200 | ₹4,400 |
| MicroSD 32GB | 3 | ₹450 | ₹1,350 |
| LiPo Battery 2500mAh | 2 | ₹450 | ₹900 |
| Boost Converter | 3 | ₹180 | ₹540 |
| USB-C Charging Module | 3 | ₹220 | ₹660 |
| Battery Indicator | 2 | ₹150 | ₹300 |
| Bone Conduction Transducer | 2 | ₹850 | ₹1,700 |
| PAM8403 Amplifier | 3 | ₹120 | ₹360 |
| 0.96" OLED Display (prototype) | 2 | ₹250 | ₹500 |
| Tactile Switches | 1 pack | ₹45 | ₹45 |
| LEDs | 1 pack | ₹30 | ₹30 |
| Resistors Kit | 1 | ₹50 | ₹50 |
| Jumper Wires Kit | 1 | ₹200 | ₹200 |
| Thermal Paste & Pads | 1 | ₹80 | ₹80 |
| Mini HDMI Cable | 1 | ₹250 | ₹250 |
| Power Supplies 5V 3A | 2 | ₹400 | ₹800 |
| Miscellaneous Wires | - | - | ₹400 |

### **MECHANICAL (₹1,860)**
| Component | Qty | Unit Price | Total |
|-----------|-----|------------|-------|
| TR-90 Eyeglass Frames | 2 | ₹600 | ₹1,200 |
| Nose Pads | 3 pairs | ₹50 | ₹150 |
| Temple Tips | 4 | ₹20 | ₹80 |
| Copper Heat Spreader | 1 | ₹90 | ₹90 |
| Aluminum Heat Sink | 2 | ₹75 | ₹150 |
| 3D Printing (all parts) | - | - | ₹500 |
| Screws/Fasteners Kit | 1 | ₹100 | ₹100 |
| Adhesives (glue, tape) | - | - | ₹240 |

### **TOOLS & TESTING (₹3,100)**
| Component | Qty | Unit Price | Total |
|-----------|-----|------------|-------|
| USB Keyboard + Mouse | 1 | ₹800 | ₹800 |
| Digital Multimeter | 1 | ₹600 | ₹600 |
| Soldering Iron Kit | 1 | ₹600 | ₹600 |
| Helping Hands | 1 | ₹300 | ₹300 |
| Webcam (data collection) | 1 | ₹1,500 | ₹1,500 |
| Miscellaneous Tools | - | - | ₹300 |

### **TOTAL PHASE 2 COST: ₹21,585**
*(For 2 prototype units + development tools)*

---

## **SURAT-SPECIFIC SHOPPING MAP**

### **One-Day Shopping Route**

**Morning (9 AM - 12 PM): Electronics**
1. **Start:** Sahara Darwaja Electronics Market
   - Buy: All electronic modules, resistors, wires, LEDs, switches
   - Budget: ₹2,000
   - Time: 2 hours (compare prices across 3-4 shops)

2. **Computer Point, Ring Road**
   - Buy: Keyboard, mouse, cables, SD cards
   - Budget: ₹2,500
   - Time: 30 mins

**Lunch Break (12 PM - 1 PM)**

**Afternoon (1 PM - 4 PM): Mechanical & Tools**
3. **Ghod Dod Road Optical Market**
   - Buy: Eyeglass frames, nose pads
   - Budget: ₹1,500
   - Time: 1 hour

4. **Hardware Shops (Bombay Market area)**
   - Buy: Aluminum, copper sheets, screws, adhesives
   - Budget: ₹600
   - Time: 1 hour

5. **Hobby/Electronics Specialty Shops**
   - Buy: Soldering equipment, multimeter
   - Budget: ₹1,500
   - Time: 45 mins

**Online Orders (Place on Day 1):**
- Raspberry Pi Zero 2 W (2 units)
- Camera Modules (2 units)
- LiPo Batteries
- Bone Conduction Transducers
- Any missing components

**Expected Delivery:** 3-5 days

---

## **PHASE 3: ELECTRONICS ASSEMBLY (Weeks 9-10)**

### Step 3.1: Breadboard Prototyping

**Goal:** Test all connections before soldering

**Setup Power System:**
```
Battery → USB-C Charging Module → Boost Converter → Raspberry Pi
                                                  ↓
                                              (measure 5V with multimeter)
```

**Test Checklist:**
- ✅ Battery charges properly
- ✅ Boost converter outputs stable 5V
- ✅ Raspberry Pi boots successfully
- ✅ No excessive heat generation

### Step 3.2: Camera Integration

**Physical Connection:**
1. Connect camera ribbon cable to Pi Zero camera port
2. Enable camera in raspi-config:
```bash
sudo raspi-config
# Navigate to: Interface Options → Camera → Enable
```

**Test Camera:**
```bash
raspistill -o test.jpg
# Should capture image
```

**Python Test:**
```python
import cv2
cap = cv2.VideoCapture(0)
ret, frame = cap.read()
if ret:
    cv2.imwrite('test_opencv.jpg', frame)
    print("Camera working!")
cap.release()
```

### Step 3.3: Audio System Assembly

**Wiring:**
```
Raspberry Pi GPIO:
  - GPIO 18 (PWM) → PAM8403 Input Left
  - GPIO 13 (PWM) → PAM8403 Input Right (or tie to GPIO 18 for mono)
  - Ground → PAM8403 Ground

PAM8403 Output → Bone Conduction Transducer
```

**Test Audio:**
```bash
# Install audio libraries
sudo apt-get install python3-pygame

# Test with beep
speaker-test -t wav -c 2
```

### Step 3.4: Display Integration

**For 0.96" OLED I2C Display:**

**Wiring:**
```
Raspberry Pi → OLED Display
  - GPIO 2 (SDA) → SDA
  - GPIO 3 (SCL) → SCL
  - 3.3V → VCC
  - GND → GND
```

**Test Display:**
```bash
# Install libraries
sudo apt-get install python3-pil
pip3 install adafruit-circuitpython-ssd1306

# Test script
python3 test_display.py
```

```python
import board
import busio
from PIL import Image, ImageDraw, ImageFont
import adafruit_ssd1306

i2c = busio.I2C(board.SCL, board.SDA)
oled = adafruit_ssd1306.SSD1306_I2C(128, 64, i2c)

oled.fill(0)
oled.show()

image = Image.new("1", (oled.width, oled.height))
draw = ImageDraw.Draw(image)
draw.text((0, 0), "Hello ISL!", fill=255)

oled.image(image)
oled.show()
```

### Step 3.5: Button & LED Integration

**Wiring:**
```
Button 1 (Power/Mode) → GPIO 17 + 10kΩ pull-down
Button 2 (Volume Up) → GPIO 27 + 10kΩ pull-down
Button 3 (Volume Down) → GPIO 22 + 10kΩ pull-down

LED Red (Power) → GPIO 23 + 220Ω resistor
LED Green (Active) → GPIO 24 + 220Ω resistor
LED Blue (Status) → GPIO 25 + 220Ω resistor
```

**Test Buttons:**
```python
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(17, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

while True:
    if GPIO.input(17):
        print("Button pressed!")
    time.sleep(0.1)
```

### Step 3.6: Battery Monitoring

**Voltage Divider Circuit:**
```
Battery + → 10kΩ resistor → GPIO 4 (ADC) → 10kΩ resistor → Ground
                           ↑
                    (measure voltage here)
```

**Note:** Pi Zero doesn't have built-in ADC, need external:
- **Use:** MCP3008 ADC module (₹200)
- **Or:** Software-only: Use voltage indicator LEDs visually

---

## **PHASE 4: SOFTWARE INTEGRATION (Weeks 11-12)**

### Step 4.1: Setup Raspberry Pi OS

**Install Raspberry Pi OS Lite:**
```bash
# Download Raspberry Pi Imager
# Flash "Raspberry Pi OS Lite (64-bit)" to SD card
# Enable SSH before first boot (create empty file named 'ssh' in boot partition)
```

**First Boot Configuration:**
```bash
# SSH into Pi (or use keyboard/monitor)
ssh pi@raspberrypi.local
# Default password: raspberry

# Update system
sudo apt update && sudo apt upgrade -y

# Install required packages
sudo apt install -y python3-pip python3-opencv python3-numpy git

# Install Python libraries
pip3 install mediapipe tensorflow-lite picamera2
```

### Step 4.2: Optimize TensorFlow Lite Model

**Convert Model to TFLite:**
```python
import tensorflow as tf

# Load trained model
model = tf.keras.models.load_model('isl_gesture_model.h5')

# Convert to TFLite
converter = tf.lite.TFLiteConverter.from_keras_model(model)
converter.optimizations = [tf.lite.Optimize.DEFAULT]
tflite_model = converter.convert()

# Save
with open('isl_model.tflite', 'wb') as f:
    f.write(tflite_model)
```

**Test on Pi:**
```python
import numpy as np
import tensorflow as tf

# Load TFLite model
interpreter = tf.lite.Interpreter(model_path="isl_model.tflite")
interpreter.allocate_tensors()

input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

# Test inference speed
import time
test_input = np.random.randn(1, 30, 63).astype(np.float32)

start = time.time()
interpreter.set_tensor(input_details[0]['index'], test_input)
interpreter.invoke()
output = interpreter.get_tensor(output_details[0]['index'])
end = time.time()

print(f"Inference time: {(end-start)*1000:.2f}ms")
# Target: <100ms
```

### Step 4.3: Integrate TTS Engine

**Install pyttsx3 (offline TTS):**
```bash
pip3 install pyttsx3
sudo apt-get install espeak
```

**Test TTS:**
```python
import pyttsx3

engine = pyttsx3.init()
engine.setProperty('rate', 150)
engine.setProperty('volume', 0.9)

engine.say("Hello, this is a test")
engine.runAndWait()
```

**Alternative (Better Quality): gTTS with caching**
```bash
pip3 install gtts playsound
```

### Step 4.4: Build Main Application

**Create Project Structure:**
```
/home/pi/isl_glasses/
├── main.py                 # Main application
├── camera_handler.py       # Camera capture
├── gesture_recognizer.py   # MediaPipe + Model
├── text_processor.py       # Grammar & context
├── audio_handler.py        # TTS output
├── display_handler.py      # OLED display
├── button_handler.py       # Input controls
├── models/
│   └── isl_model.tflite
├── config.py               # Settings
└── utils.py                # Helper functions
```

**Main Application Loop (main.py):**
```python
import cv2
import mediapipe as mp
import tensorflow as tf
import pyttsx3
from gesture_recognizer import GestureRecognizer
from text_processor import TextProcessor
from audio_handler import AudioHandler
from display_handler import DisplayHandler
import threading

class ISLGlasses:
    def __init__(self):
        self.gesture_recognizer = GestureRecognizer('models/isl_model.tflite')
        self.text_processor = TextProcessor()
        self.audio_handler = AudioHandler()
        self.display_handler = DisplayHandler()
        self.running = False
        
    def start(self):
        self.running = True
        
        # Start camera capture thread
        camera_thread = threading.Thread(target=self.camera_loop)
        camera_thread.start()
        
        # Start processing thread
        processing_thread = threading.Thread(target=self.processing_loop)
        processing_thread.start()
        
    def camera_loop(self):
        cap = cv2.VideoCapture(0)
        
        while self.running:
            ret, frame = cap.read()
            if ret:
                # Add frame to processing queue
                self.gesture_recognizer.add_frame(frame)
                
        cap.release()
        
    def processing_loop(self):
        while self.running:
            # Get recognized gesture
            gesture = self.gesture_recognizer.get_gesture()
            
            if gesture:
                # Process into sentence
                text = self.text_processor.add_gesture(gesture)
                
                if text:
                    # Display on OLED
                    self.display_handler.show_text(text)
                    
                    # Convert to speech
                    self.audio_handler.speak(text)

if __name__ == "__main__":
    app = ISLGlasses()
    app.start()
```

**Gesture Recognizer Module (gesture_recognizer.py):**
```python
import mediapipe as mp
import tensorflow as tf
import numpy as np
from collections import deque

class GestureRecognizer:
    def __init__(self, model_path):
        # Initialize MediaPipe
        self.mp_hands = mp.solutions.hands
        self.hands = self.mp_hands.Hands(
            static_image_mode=False,
            max_num_hands=2,
            min_detection_confidence=0.5
        )
        
        # Load TFLite model
        self.interpreter = tf.lite.Interpreter(model_path=model_path)
        self.interpreter.allocate_tensors()
        self.input_details = self.interpreter.get_input_details()
        self.output_details = self.interpreter.get_output_details()
        
        # Frame buffer (30 frames = 1 second at 30fps)
        self.frame_buffer = deque(maxlen=30)
        
        # Gesture vocabulary
        self.gestures = ['hello', 'thank_you', 'help', 'yes', 'no', ...]  # Load from config
        
    def add_frame(self, frame):
        # Process frame with MediaPipe
        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = self.hands.process(frame_rgb)
        
        if results.multi_hand_landmarks:
            landmarks = self._extract_landmarks(results.multi_hand_landmarks)
            self.frame_buffer.append(landmarks)
        else:
            # No hands detected
            self.frame_buffer.append(np.zeros(63))  # Placeholder
            
    def get_gesture(self):
        if len(self.frame_buffer) < 30:
            return None
            
        # Prepare input
        input_data = np.array(list(self.frame_buffer)).reshape(1, 30, 63).astype(np.float32)
        
        # Run inference
        self.interpreter.set_tensor(self.input_details[0]['index'], input_data)
        self.interpreter.invoke()
        output = self.interpreter.get_tensor(self.output_details[0]['index'])
        
        # Get prediction
        predicted_class = np.argmax(output[0])
        confidence = output[0][predicted_class]
        
        if confidence > 0.85:  # Confidence threshold
            return self.gestures[predicted_class]
        
        return None
        
    def _extract_landmarks(self, hand_landmarks):
        landmarks = []
        for hand in hand_landmarks:
            for landmark in hand.landmark:
                landmarks.extend([landmark.x, landmark.y, landmark.z])
        
        # Pad if only one hand detected
        while len(landmarks) < 63:
            landmarks.append(0.0)
            
        return np.array(landmarks[:63])
```

### Step 4.5: Auto-Start on Boot

**Create systemd service:**
```bash
sudo nano /etc/systemd/system/isl-glasses.service
```

```ini
[Unit]
Description=ISL Glasses Service
After=network.target

[Service]
Type=simple
User=pi
WorkingDirectory=/home/pi/isl_glasses
ExecStart=/usr/bin/python3 /home/pi/isl_glasses/main.py
Restart=always

[Install]
WantedBy=multi-user.target
```

**Enable service:**
```bash
sudo systemctl daemon-reload
sudo systemctl enable isl-glasses.service
sudo systemctl start isl-glasses.service
```

---

## **PHASE 5: MECHANICAL ASSEMBLY (Weeks 13-14)**

### Step 5.1: Design 3D Printable Parts

**Required CAD Files (Design in Fusion 360 or Tinkercad):**

1. **Camera Mount Bracket**
   - Clips onto bridge of eyeglass frame
   - Adjustable angle (±15°)
   - Dimensions: 30mm×20mm×15mm

2. **Battery Enclosure**
   - Houses LiPo battery + charging module
   - Clip attachment for belt/pocket
   - Dimensions: 70mm×50mm×20mm
   - Include ventilation holes

3. **Display Mount**
   - Holds 0.96" OLED
   - Magnetic attachment to frame
   - Adjustable position

4. **Electronics Housing (Temple Integration)**
   - Fits Raspberry Pi Zero 2 W
   - Includes ventilation slots
   - Wire routing channels
   - Dimensions: 145mm×12mm×8mm (temple size)

**Design Tips:**
- Use 2mm wall thickness minimum
- Add snap-fit features for easy assembly
- Include screw boss reinforcements
- Design for PLA printing (no supports needed)

### Step 5.2: Print Parts

**Export STL Files:**
- Export each part as separate STL
- Check dimensions in slicer software

**Printing Settings:**
- **Layer Height:** 0.2mm
- **Infill:** 20-30%
- **Print Speed:** 50mm/s
- **Support:** Minimize (design to avoid)
- **Material:** PLA (easiest)

**Print Time Estimate:**
- All parts: 8-12 hours total
- Can print overnight

**Where to Print (Surat):**
- Upload STL files to printing service
- Collect next day
- Cost: ₹200-₹500 total

### Step 5.3: Modify Eyeglass Frame

**Tools Needed:**
- Small screwdriver set
- Hobby knife
- Sandpaper (fine grit)
- Drill with small bits (1mm, 2mm)

**Modifications:**
1. **Temple Arms:**
   - Remove original temple tips
   - Drill mounting holes for electronics housing (mark carefully!)
   - Test-fit Pi Zero before drilling

2. **Bridge Area:**
   - Clean surface for camera mount
   - Test camera field of view
   - Mark optimal position (adjustable +/- 5mm)

3. **Nose Pads:**
   - Replace with adjustable silicone pads
   - Ensure proper weight distribution

### Step 5.4: Assemble Electronics into Frame

**Assembly Order:**

**1. Prepare Temple Arms:**
```
Left Temple:
- Insert battery
- Secure charging module
- Route wires through channel

Right Temple:
- Install Raspberry Pi Zero
- Attach heat spreader (thermal paste)
- Connect heat sink to temple surface
- Secure with screws
```

**2. Mount Camera:**
- Attach camera to 3D printed bracket
- Connect ribbon cable to Pi
- Mount bracket to frame bridge
- Test angle, adjust if needed

**3. Install Display:**
- Connect OLED to Pi via I2C
- Mount display holder to frame
- Position for comfortable viewing (edge of field)

**4. Wire Audio System:**
- Solder PAM8403 connections
- Connect bone conduction transducer
- Secure to temple arm
- Route wires neatly

**5. Install Controls:**
- Mount 3 tactile buttons on right temple
  - Top: Power/Mode
  - Middle: Volume Up
  - Bottom: Volume Down
- Connect to GPIO pins
- Add LED indicators (solder resistors)

**6. Power Connections:**
- Connect battery to charging module
- Boost converter to Pi power input
- Double-check polarity (CRITICAL!)
- Insulate all connections with heat shrink

**7. Cable Management:**
- Use zip ties or adhesive clips
- Keep wires away from heat sources
- Ensure no strain on connections
- Secure loose wires with hot glue

### Step 5.5: Weight Distribution & Comfort Testing

**Balance Check:**
- Wear prototype for 5 minutes
- Note pressure points
- Adjust nose pad position
- Redistribute weight if one side heavier

**Target Weight:** 65-80 grams total (similar to sunglasses)

**If Too Heavy:**
- Use smaller battery (1800mAh instead of 2500mAh)
- Remove non-essential components
- Consider external battery pack (connected via wire)

---

## **PHASE 6: INITIAL TESTING (Week 15)**

### Step 6.1: Power & Boot Test

**Test Sequence:**
1. Charge battery fully (use charging module LED indicator)
2. Power on device
3. Measure battery voltage (should be 3.7V-4.2V)
4. Verify Pi boots (watch for LEDs)
5. Check SSH connection
6. Verify software auto-starts

**Monitoring:**
```bash
# Check CPU temperature
vcgencmd measure_temp

# Check process running
ps aux | grep python

# Monitor logs
journalctl -u isl-glasses.service -f
```

### Step 6.2: Component Functionality Test

**Checklist:**
- ✅ Camera captures frames
- ✅ MediaPipe detects hands
- ✅ Model runs inference
- ✅ Display shows text
- ✅ Audio outputs speech
- ✅ Buttons respond
- ✅ LEDs indicate status
- ✅ Battery lasts >4 hours

**Performance Benchmarks:**
- **FPS:** Target 15-20 fps
- **Inference Time:** <100ms per gesture
- **End-to-End Latency:** <500ms (gesture → speech)

### Step 6.3: Indoor Testing (Controlled Environment)

**Test Scenarios:**
1. **Static Hand Poses:** Test individual signs
2. **Dynamic Gestures:** Test motion-based signs
3. **Two-Hand Signs:** Verify both hands tracked
4. **Lighting Variations:** Bright, normal, dim
5. **Background Clutter:** Various backgrounds

**Test Protocol:**
- 10 repetitions of 10 different signs
- Record accuracy per sign
- Note failure modes
- Document lighting conditions

**Expected Results (Phase 6):**
- Accuracy: 70-80% (initial)
- False positives: <10%
- System stability: No crashes in 30-minute session

### Step 6.4: User Comfort Assessment

**Recruit 3-5 Testers:**
- Ideally sign language users
- Various head sizes
- Wear for 15-30 minutes

**Assessment Criteria:**
- Comfort rating (1-10 scale)
- Pressure points identified
- Field of view obstruction
- Display readability
- Audio clarity
- Overall wearability

**Collect Feedback:**
- Too heavy? (adjust weight)
- Slipping? (adjust nose pads)
- Display hard to see? (reposition)
- Audio too quiet/loud? (adjust volume)

---

## **PHASE 7: OUTDOOR & REAL-WORLD TESTING (Week 16)**

### Step 7.1: Environmental Testing

**Test Locations in Surat:**
1. **Bright Sunlight:** Dumas Beach (morning)
2. **Indoor Mall:** VR Surat (afternoon)
3. **Street Market:** Chowk Bazaar (varying light)
4. **Office/Classroom:** Indoor controlled
5. **Moving Vehicle:** Test while in auto-rickshaw (stability)

**Evaluation:**
- Does camera handle bright light?
- Display visible in sunlight?
- Recognition accuracy in each environment
- Battery drain rate

### Step 7.2: Real Conversation Testing

**Scenario Testing:**
1. **Medical Appointment Simulation:**
   - Signer: "I have headache"
   - Expected: Glasses say "I have headache"

2. **Shopping Interaction:**
   - Signer: "How much cost?"
   - Expected: Clear audio output

3. **Emergency Situation:**
   - Signer: "Help needed"
   - Expected: Fast, accurate translation

**Recruit:**
- 3-5 sign language users
- 3-5 non-signers (conversation partners)
- Record conversations (with consent)

**Metrics:**
- Conversation success rate
- Time per exchange
- User satisfaction
- Misunderstandings

### Step 7.3: Battery Life Testing

**Protocol:**
- Full charge
- Continuous use with signing
- Record time until shutdown

**Expected:** 4-6 hours with 2500mAh battery

**If Insufficient:**
- Implement power saving (reduce FPS when idle)
- Use larger battery (3000-4000mAh)
- Optimize code (reduce CPU usage)

### Step 7.4: Failure Mode Analysis

**Document All Failures:**
- Sign not recognized
- Wrong sign recognized
- No hands detected when visible
- False positives
- System crashes
- Audio glitches
- Display issues

**For Each Failure:**
- Record conditions (lighting, speed, background)
- Capture video (if possible)
- Note user feedback
- Identify root cause
- Plan fix

---

## **PHASE 8: ITERATION & REFINEMENT (Weeks 17-18)**

### Step 8.1: Address Critical Issues

**Based on Testing, Fix:**
1. **Recognition Accuracy:**
   - Collect more training data for problematic signs
   - Retrain model
   - Adjust confidence thresholds

2. **Hardware Issues:**
   - Improve mounting (if camera shifts)
   - Better wire management
   - Weight redistribution
   - Thermal improvements (if overheating)

3. **Software Bugs:**
   - Fix crashes
   - Improve error handling
   - Optimize performance

### Step 8.2: Enhance User Experience

**Improvements:**
- Add on-screen instructions for first-time users
- Implement calibration mode (user performs 5 signs to calibrate)
- Add battery level indicator on display
- Improve TTS voice quality/speed
- Add haptic feedback (vibration motor - ₹80)

### Step 8.3: Build Second Prototype

**Incorporate Learnings:**
- Improved mechanical design
- Better component placement
- Cleaner assembly
- Professional finish

**Aim for:**
- Better aesthetics
- Improved durability
- Easier maintenance
- User-friendly controls

---

## **PHASE 9: DOCUMENTATION & DEMO PREPARATION (Week 19-20)**

### Step 9.1: Technical Documentation

**Create Documents:**
1. **User Manual** (with pictures)
   - How to wear
   - How to charge
   - How to use buttons
   - Troubleshooting guide

2. **Assembly Guide**
   - Step-by-step with photos
   - Component list
   - Wiring diagrams
   - Software installation

3. **Developer Documentation**
   - Code architecture
   - API documentation
   - How to add new signs
   - Model training guide

### Step 9.2: Create Demo Video

**Video Sections:**
1. **Problem Introduction** (30 sec)
2. **Solution Overview** (45 sec)
3. **Live Demonstration** (2 min)
4. **User Testimonials** (1 min)
5. **Impact & Future** (30 sec)

**Production:**
- Use smartphone camera (good enough)
- Record in well-lit area
- Include captions
- Edit with free software (DaVinci Resolve)

**Shooting Locations in Surat:**
- SVNIT campus (if accessible)
- Clean indoor space
- Outdoor demonstration

### Step 9.3: Prepare Presentation

**SSIP Pitch Deck (15-20 slides):**
1. Title & Team
2. Problem Statement (with statistics)
3. Existing Solutions (comparison table)
4. Our Solution (with photos)
5. Technical Approach
6. Unique Features (USPs)
7. Prototype Demonstration
8. Testing Results (data, graphs)
9. User Feedback
10. Cost Analysis
11. Market Opportunity
12. Social Impact
13. Roadmap
14. Team Qualifications
15. Ask (funding, support needed)

### Step 9.4: Practice Demonstration

**Demo Script:**
1. **Intro** (30 sec): Hi, I'm [name], presenting ISL Glasses
2. **Problem** (1 min): Show statistics, explain barrier
3. **Solution** (1 min): Show device, explain how it works
4. **Live Demo** (3 min): 
   - Put on glasses
   - Sign "Hello, my name is [name]"
   - Glasses speak it aloud
   - Sign 5-10 different phrases
   - Show display to audience
5. **Impact** (1 min): Explain who benefits, scalability
6. **Q&A** (remaining time)

**Practice:**
- Rehearse 10+ times
- Time yourself
- Get feedback from team
- Prepare answers to likely questions

---

## **TIMELINE SUMMARY**

| Week | Phase | Key Deliverables |
|------|-------|------------------|
| 1-2 | Phase 0 | Team formed, workspace ready, budget allocated |
| 3-6 | Phase 1 | Desktop MVP, 80% accuracy, 50 signs recognized |
| 7-8 | Phase 2 | All components procured |
| 9-10 | Phase 3 | Electronics assembled, all systems functional |
| 11-12 | Phase 4 | Software integrated, auto-boot working |
| 13-14 | Phase 5 | Mechanical assembly complete, wearable prototype |
| 15 | Phase 6 | Initial testing, bugs identified |
| 16 | Phase 7 | Real-world testing, user feedback collected |
| 17-18 | Phase 8 | Issues fixed, second prototype built |
| 19-20 | Phase 9 | Documentation complete, demo ready |

**Total Duration: 20 weeks (~5 months)**

---

## **TROUBLESHOOTING GUIDE**

### Common Issues & Solutions

**Issue 1: Pi Won't Boot**
- Check power supply (must be 5V 3A)
- Verify SD card properly flashed
- Check LED indicators on Pi

**Issue 2: Camera Not Detected**
- Re-seat ribbon cable
- Enable camera in raspi-config
- Check `raspistill -o test.jpg`

**Issue 3: Poor Recognition Accuracy**
- Retrain model with more data
- Adjust lighting (camera exposure)
- Clean camera lens
- Check hand is in frame

**Issue 4: Audio Not Working**
- Check amplifier connections
- Test with speaker-test command
- Verify GPIO PWM pins correct
- Check volume settings

**Issue 5: Overheating**
- Improve airflow (add ventilation)
- Check heat sink properly attached
- Reduce processor load (lower FPS)
- Add cooling fan if necessary

**Issue 6: Battery Drains Too Fast**
- Implement sleep mode when idle
- Reduce screen brightness
- Lower camera resolution
- Use larger battery

**Issue 7: Display Not Showing Text**
- Check I2C connection
- Run i2cdetect to find address
- Verify library installed correctly
- Test with simple display script

---

## **SAFETY PRECAUTIONS**

**Electrical Safety:**
- ⚠️ Never short battery terminals
- ⚠️ Always check polarity before connecting
- ⚠️ Use proper fuse/protection circuits
- ⚠️ Keep water away from electronics

**Soldering Safety:**
- Work in ventilated area
- Use fume extractor or fan
- Wear safety glasses
- Don't touch hot iron tip

**Battery Safety:**
- Never puncture LiPo battery
- Charge on fireproof surface
- Don't overcharge (use protection circuit)
- Dispose properly if damaged

**User Safety:**
- Ensure no sharp edges on frame
- Test thoroughly before user trials
- Get proper consent for testing
- Have first aid kit available

---

## **KEY CONTACTS IN SURAT**

**Deaf Community:**
- Gujarat State Deaf Association, Surat Branch
- Special education schools

**Technical Support:**
- SVNIT FabLab (if accessible)
- Surat Startup Hub mentors

**Component Sourcing:**
- Sahara Darwaja Electronics
- Computer Point, Ring Road
- Ghod Dod Road Optical Market

**3D Printing:**
- Search "3D printing service Surat" on Google
- IndiaMart local suppliers

---

## **SUCCESS CRITERIA**

**By End of Phase 9, You Should Have:**
- ✅ 2 working prototypes
- ✅ 50+ ISL signs recognized at 80%+ accuracy
- ✅ 4+ hours battery life
- ✅ <500ms end-to-end latency
- ✅ Comfortable wearable form factor
- ✅ Complete documentation
- ✅ Demo video
- ✅ 10+ user testimonials
- ✅ SSIP presentation ready

---