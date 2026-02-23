# 🎤 SSIP Round 2 Presentation Script

## Real-Time Sign Language to Speech AR Glasses - Team Inno8

**Target Audience: Investors & Review Panel (Business Plan Presentation)**
**Total Time: ~15 minutes**
**Total Slides: 12**

---

# 👥 Team Introductions (To be used during Q&A or Slide 9)

### 1. Dwarkesh Ramani - Team Lead & Backend Dev
> "I'm Dwarkesh, serving as the Team Lead and Backend Developer. My focus is on Python, AI/ML models, and the core system architecture. I ensure our gesture recognition achieves our target accuracy."

### 2. Jenil Gajera - Hardware Lead
> "I'm Jenil, the Hardware Lead. I handle the Raspberry Pi integration, camera, display, and audio output, ensuring the wearable is compact, power-efficient, and runs models locally."

### 3. Jenny Patel - Frontend & UI
> "I'm Jenny, handling UI/UX Design and Frontend. I ensure the device provides intuitive visual feedback and design accessible interfaces for both deaf users and hearing companions."

### 4. Akifa Shaikh - Business & Report
> "I'm Akifa, managing Business Development. I handle market research, competitor benchmarking, financial projections, and strategic partnerships like the ADIP scheme."

### 5. Drashtant Mevada - Business & Report
> "I'm Drashtant, also managing Business Development and Reporting. I work alongside Akifa on market analysis, documenting our competitive advantages, and structuring our business execution plan."

---

# 📋 Slide-by-Slide Master Script

## PART 1: The Opportunity (2 mins)
**Presenter: Dwarkesh Ramani (Team Lead)**

### Slide 1: Introduction (1 min)
> "Good morning, respected investor panel. We are Team Inno8, and today we present our Real-Time Sign Language to Speech AR Glasses. 
> 
> Simply put, we are building affordable, wearable tech to break the communication barrier for the deaf community. Our mission is to give a voice back to the 63 million Indians who deserve to be heard, blending embedded systems and edge AI."

### Slide 2: Business Overview (1 min)
> "To understand our business, you must understand the gap. Today, 63 million deaf Indians face profound isolation because there are only 340 certified interpreters in the country—a staggering 1 to 185,000 ratio.
> 
> The impact is tragic: 67% can't communicate independently in emergency rooms, and 74% are blocked from career advancement due to communication barriers. The opportunity here is a massive unaddressed need for independent, real-time communication. The 'Why Now?' is that recent leaps in edge AI, like MediaPipe and lightweight hardware, finally make an accurate, affordable, offline wearable possible."

---

## PART 2: Strategy & Competitive Edge (4 mins)
**Presenter: Akifa Shaikh (Business Lead)**

### Slide 3: Strategy & Go-To-Market (2 mins)
> "Our market entry relies on a triple-channel strategy.
> 
> **Phase 1 (Primary)** is B2G via the ADIP Scheme. The government subsidizes assistive tech up to 100% for BPL users. By securing empanelment, our device becomes free for the end user, while guaranteeing us high volume.
> **Phase 2** is B2C Direct Sales, focusing on urban professionals and students willing to self-fund a ₹15,000 device for career and academic growth.
> **Phase 3** is B2B Corporate CSR, selling to inclusive employers like Amazon or Lemon Tree Hotels to equip their hearing-impaired workforce.
> 
> Our immediate roadmap focuses on scaling to 500 signs and executing field trials over the next 6 months to achieve BIS certification."

### Slide 4: Competitive Analysis & Advantages (2 mins)
> "When comparing alternatives, our positioning is clear. Smart apps are cheap but occupy both hands, ruining natural sign language. Human interpreters are ideal but cost ₹30,000+ monthly and are rarely available. Competitor devices like XRAI Glass cost upwards of ₹40,000 and primarily focus on English speech-to-text, ignoring sign language entirely.
> 
> Our advantages are: we are **truly hands-free**, processing is **100% private** natively on-device, we have a deep cultural fit being **ISL-first**, and our unit economics allow pricing that perfectly fits within ADIP government subsidies."

---

## PART 5: Market Potential (1 min)
**Presenter: Akifa Shaikh (Business Lead)**

### Slide 5: Market Opportunity (1 min)
> "This equates to a massive market. From the 63M total addressable market, census data shows 7 million with certified disabilities. Our primary Year 1 target is 50,000 early adopters.
> 
> The assistive tech market is growing incredibly fast at nearly 13% CAGR, accelerated by strong tailwinds: the Supreme Court has recently mandated sign language accessibility as a fundamental right across institutions. We are riding this wave of policy-driven adoption."

---

## PART 4: The Product & Tech (3 mins)
**Presenters: Jenny & Jenil**

### Slide 6: Product Description - User Experience (1.5 mins - Jenny)
> "How does it work for the user? The experience is built on natural interaction. The user puts on the glasses and signs. The camera sees it, the AI decodes it, and the glasses literally speak the translation aloud via a bone-conduction audio transducer.
> 
> It provides low latency under 500 milliseconds for natural conversation flow. It is entirely private—no cloud dependence, no massive API bills, and no video uploads. At 80 grams, our 3D-printed TR-90 frame ensures all-day comfort with up to 8 hours of battery."

### Slide 7: Technical Architecture (1.5 mins - Jenil)
> "Under the hood, our technical architecture hinges on extreme efficiency. Hardware-wise, we process on a Raspberry Pi Zero 2W, capturing via a Pi Camera v2 and outputting through an OLED and bone-conduction transducer.
> 
> The AI pipeline starts with 30-frames-per-second capture. We use MediaPipe to track 21 3D landmarks per hand. These coordinates feed into our custom TensorFlow Lite CNN-LSTM model, which classifies the temporal dynamics of the sign, immediately pushing the string to a text-to-speech synthesizer. We are achieving 85% accuracy on our 50-sign MVP."

---

## PART 5: Market Deep Dive (2 mins)
**Presenter: Akifa Shaikh (Business Lead)**

### Slide 8: Market Analysis & Segmentation (2 mins)
> "Looking closer at our target segments, the pain points dictate our outreach.
> 
> The 2.5 million student segment suffers from inaccessible general education; their parents are actively seeking educational aids. The 1.2 million working professionals face career gridlock; they represent our highest-intent self-pay segment.
> 
> Meanwhile, the 4 million healthcare seekers face misdiagnosis risks. We plan to sell directly to hospitals seeking compliance with the new disability mandates. Finally, the rural segment, where the isolation is total, is exactly who we reach through the ADIP scheme."

---

## PART 6: Team (1 min)
**Presenter: Jenny Patel**

### Slide 9: Organisation & Team (1 min)
> "Executing this requires a specialized team. Dwarkesh drives AI and backend architecture. Jenil engineers the IoT hardware integration. I handle frontend and holistic UX design. Akifa and Drashtant drive our comprehensive business model, market research, and certification strategy. 
> 
> We are actively mentored by Prof. Pariza Kamboj, ensuring high technical rigor. As a multidisciplinary group, we have the exact mix of AI, hardware, and business skills required to take this from prototype to market."

---

## PART 7: Financials & Ask (3 mins)
**Presenters: Dwarkesh & Jenny**

### Slide 10: Financial Analysis (1.5 mins - Dwarkesh)
> "Financially, our model scales aggressively. Unit economics start at ₹22,000 per unit for our initial 10 prototypes. However, scaling to a 10,000-unit mass production run drops our cost to ₹8,200.
> 
> At a retail and ADIP reimbursement price of ₹15,000, we achieve a healthy 45-55% margin at scale. We break even at just 500 units. Our 3-year projection takes us safely from ₹15 Lakh in pilot revenue to a ₹15 Crore run-rate as we secure ADIP empanelment and hit national scale."

### Slide 11: Funding Request (1.5 mins - Jenny)
> "To reach that first milestone, we are requesting an SSIP Grant of ₹1,50,000. 
> 
> This provides the runway to transition from the desktop MVP to 5 robust, wearable hardware prototypes. 33% goes immediately to securing our IP and filing patents. 30% funds the Raspberry Pi, camera, and display hardware. The rest goes to testing equipment and 3D resin casting. The immediate ROI on this ₹1.5 Lakh is a patent, validation from 20+ deaf users, and positioning for state govt procurement."

---

## PART 8: Conclusion (1 min)
**Presenter: Dwarkesh Ramani**

### Slide 12: Exit Strategy (1 min)
> "Finally, as investors, how do you realize value? We foresee three exit pathways.
> 
> First, acquisition by MedTech giants like Cochlear wanting our ISL intellectual property to enter India. Second, licensing our hyper-efficient on-device ISL engine to smartphone and smartglass OEMs like Meta. Or third, operating as a sustainable, highly-profitable social enterprise fueled by government CSR and ADA compliance.
> 
> In 5 years, this will be the regional standard for the 15 million ISL users across South Asia. We invite you to be part of the technology that breaks the silence. Thank you."

---

# ⏱️ Quick Reference: Timing Strategy (15 Mins Total)

| Slide | Topic | Presenter | Time |
|---|---|---|---|
| 1 | Introduction | Dwarkesh | 1 min |
| 2 | Business Overview | Dwarkesh | 1 min |
| 3 | Strategy | Akifa | 2 min |
| 4 | Competitive Analysis | Akifa | 2 min |
| 5 | Market Opportunity | Akifa | 1 min |
| 6 | Product Overview (UX) | Jenny | 1.5 min |
| 7 | Product Deep Dive (Tech Specs) | Jenil | 1.5 min |
| 8 | Target Segments & Regulatory Drivers | Akifa | 2 min |
| 9 | Org. & Team | Jenny | 1 min |
| 10 | Financial Analysis | Dwarkesh | 1.5 min |
| 11 | Funding Request | Jenny | 0.5 min |
| 12 | Exit | Dwarkesh | 1 min |
