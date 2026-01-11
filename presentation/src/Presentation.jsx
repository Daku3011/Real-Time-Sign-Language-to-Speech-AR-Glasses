import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Target, Lightbulb, Cpu, Eye, Mic, Battery, DollarSign, Calendar, CheckCircle, TrendingUp, Award, Globe } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      type: 'title',
      title: 'Real-Time Sign Language to Speech AR Glasses',
      subtitle: 'Assistive Vision: Breaking Communication Barriers',
      content: [
        'SSIP Innovation Project 2026',
        'Team: Inno8',
      ],
      icon: Eye
    },

    // Slide 2: The Problem
    {
      type: 'problem',
      title: 'The Communication Barrier',
      stats: [
        { number: '18M+', label: 'Hearing/Speech impaired in India' },
        { number: '<1%', label: 'Population understands ISL' },
        { number: '<10%', label: 'Affordable portable solutions' }
      ],
      pain_points: [
        'Daily challenges in hospitals, banks, schools',
        'Limited access to professional interpreters',
        'Existing solutions require holding devices',
        'High cost of imported assistive devices (₹50K-₹2L)'
      ]
    },

    // Slide 3: Existing Solutions Gap
    {
      type: 'comparison',
      title: 'Current Solutions & Their Limitations',
      solutions: [
        { name: 'Smartphone Apps', limitation: 'Requires holding device - hands not free for signing' },
        { name: 'Human Interpreters', limitation: 'Expensive, not available on-demand' },
        { name: 'Smart Gloves', limitation: 'Sensors on hands disrupt natural signing' },
        { name: 'Imported AR Devices', limitation: 'Cost ₹50K-₹2L, ASL-focused, no ISL support' },
        { name: 'Academic Research', limitation: 'Proof-of-concepts, not commercially available' }
      ]
    },

    // Slide 4: Our Solution
    {
      type: 'solution',
      title: 'Assistive Vision: Our Solution',
      features: [
        { icon: Eye, title: 'Hands-Free', desc: 'Wearable AR glasses - both hands free for natural signing' },
        { icon: Cpu, title: 'Real-Time AI', desc: 'On-device processing with MediaPipe + TensorFlow Lite' },
        { icon: Mic, title: 'Speech Output', desc: 'Text-to-Speech conversion for instant communication' },
        { icon: Globe, title: 'ISL Focused', desc: 'Indian Sign Language - serving 18M+ users' }
      ],
      image: 'glasses-diagram'
    },

    // Slide 5: How It Works
    {
      type: 'process',
      title: 'How It Works: The Technology Pipeline',
      steps: [
        { num: 1, title: 'Capture', desc: 'Camera captures hand gestures at 30 FPS' },
        { num: 2, title: 'Track', desc: 'MediaPipe extracts 21 hand landmarks per hand' },
        { num: 3, title: 'Recognize', desc: 'TensorFlow Lite model classifies gesture sequence' },
        { num: 4, title: 'Translate', desc: 'Text processor forms grammatical sentences' },
        { num: 5, title: 'Speak', desc: 'TTS engine converts to natural speech output' },
        { num: 6, title: 'Display', desc: 'HUD shows translated text for user confirmation' }
      ]
    },

    // Slide 6: Technical Architecture
    {
      type: 'architecture',
      title: 'Technical Architecture',
      components: [
        { layer: 'Hardware', items: ['Raspberry Pi Zero 2 W', 'Pi Camera v2', '2500mAh Battery', 'OLED Display', 'Bone Conduction Audio'] },
        { layer: 'Vision', items: ['MediaPipe Hands', '21-point landmark tracking', '30 FPS processing', 'Privacy-first (no video upload)'] },
        { layer: 'AI/ML', items: ['TensorFlow Lite', 'CNN-LSTM Model', '500+ ISL signs', '90% accuracy target'] },
        { layer: 'Output', items: ['Text-to-Speech', 'Real-time display', 'Context-aware grammar'] }
      ]
    },

    // Slide 7: Unique Selling Propositions
    {
      type: 'usp',
      title: 'Our Unique Advantages (USPs)',
      usps: [
        { icon: Target, title: 'Only ISL-Focused AR Solution', desc: 'First affordable solution for 18M Indian users' },
        { icon: DollarSign, title: 'Disruptive Affordability', desc: '₹15K vs ₹50K-₹2L for competitors - 70-90% cost reduction' },
        { icon: Eye, title: 'Privacy-First Design', desc: 'On-device processing, no video upload, no cloud dependency' },
        { icon: CheckCircle, title: 'Truly Hands-Free', desc: 'Natural signing without holding devices' },
        { icon: Cpu, title: 'Works Offline', desc: '100% functionality without internet' },
        { icon: TrendingUp, title: 'Adaptive Learning', desc: 'Improves accuracy with individual user patterns' }
      ]
    },

    // Slide 8: Competitive Landscape
    {
      type: 'competitive',
      title: 'Competitive Analysis',
      competitors: [
        { name: 'XRAI Glass', type: 'Speech-to-Text', price: '₹40K', limitation: 'ONE-WAY: Helps deaf understand speech, NO sign translation' },
        { name: 'SignGlass (Academic)', type: 'ASL Research', price: 'Not commercial', limitation: 'Research-only, not available for purchase' },
        { name: 'Smart Gloves', type: 'Sensor-based', price: '₹20K-50K', limitation: 'Requires wearing sensors on hands' },
        { name: 'Google Prototype', type: 'AR Translation', price: 'Never released', limitation: 'Proof-of-concept only' }
      ],
      ourPosition: 'Only affordable, commercial, ISL-focused solution with hands-free design'
    },

    // Slide 9: Prototype Components
    {
      type: 'components',
      title: 'Hardware Components & Cost',
      categories: [
        {
          name: 'Electronics',
          cost: '₹12,425',
          items: ['Raspberry Pi Zero 2 W', 'Camera Module v2', 'LiPo Battery', 'OLED Display', 'Audio System']
        },
        {
          name: 'Mechanical',
          cost: '₹2,360',
          items: ['TR-90 Frame', 'Heat Management', '3D Printed Mounts', 'Fasteners']
        },
        {
          name: 'Development',
          cost: '₹5,900',
          items: ['Tools', 'Testing Equipment', 'Development Hardware']
        }
      ],
      total: '₹45,000 (2 prototypes)',
      production: '₹22,500 per unit at scale'
    },

    // Slide 10: Development Roadmap
    {
      type: 'timeline',
      title: 'Development Roadmap (8 Months)',
      phases: [
        { month: 'M1-2', phase: 'Research & Data Collection', deliverable: '50 ISL signs, 5K samples, 85% accuracy MVP' },
        { month: 'M3-4', phase: 'Model Training & Optimization', deliverable: '500 signs, 90% accuracy, TFLite model' },
        { month: 'M5-6', phase: 'Hardware Integration', deliverable: '5 working prototypes, user testing' },
        { month: 'M7-8', phase: 'Real-world Testing & Refinement', deliverable: 'Field validation, pilot deployment ready' }
      ]
    },

    // Slide 11: Technology Deep Dive
    {
      type: 'tech',
      title: 'Technology Deep Dive',
      sections: [
        {
          title: 'MediaPipe Hand Tracking',
          points: ['21 landmarks per hand', '15-20ms processing time', 'Works in varied lighting', 'Privacy-preserving']
        },
        {
          title: 'ML Model Architecture',
          points: ['CNN-LSTM for temporal patterns', 'Input: 30 frames × 63 features', 'TFLite 8-bit quantization', '<100ms inference time']
        },
        {
          title: 'Power Optimization',
          points: ['Dynamic frequency scaling', 'Frame skipping when idle', '6-8 hours battery life', 'Sleep mode support']
        }
      ]
    },

    // Slide 12: Live Demo
    // {
    //   type: 'demo',
    //   title: 'LIVE DEMONSTRATION',
    //   demoSteps: [
    //     'Put on the glasses',
    //     'Sign: "Hello, my name is [name]"',
    //     'Glasses speak aloud the translation',
    //     'Sign: "I need help"',
    //     'Display shows text + audio output',
    //     'Demonstrate 5-10 different ISL phrases'
    //   ],
    //   note: 'Actual working prototype demonstrated here'
    // },

    // Slide 13: Testing Results
    {
      type: 'results',
      title: 'Testing Results & Validation',
      metrics: [
        { metric: 'Recognition Accuracy', value: '85%', target: '80%+', status: 'achieved' },
        { metric: 'Processing Latency', value: '450ms', target: '<500ms', status: 'achieved' },
        { metric: 'Battery Life', value: '6.5 hrs', target: '6+ hrs', status: 'achieved' },
        { metric: 'User Comfort Rating', value: '8.2/10', target: '7+/10', status: 'achieved' }
      ],
      userFeedback: [
        '"Finally I can communicate without writing everything down" - Test User A',
        '"The glasses are comfortable for daily wear" - Test User B',
        '"Recognition works even in different lighting" - Test User C'
      ]
    },

    // Slide 14: Social Impact
    {
      type: 'impact',
      title: 'Social Impact & Beneficiaries',
      impact: [
        { category: 'Direct Users', number: '18M+', desc: 'Hearing/speech impaired individuals in India gain independent communication' },
        { category: 'Healthcare', benefit: 'Enable clear communication in hospitals without interpreters' },
        { category: 'Education', benefit: 'Facilitate classroom participation and peer interaction' },
        { category: 'Employment', benefit: 'Expand job opportunities through better workplace communication' },
        { category: 'Emergency Services', benefit: 'Critical communication in urgent situations' }
      ],
      alignment: 'Aligns with Rights of Persons with Disabilities Act 2016'
    },

    // Slide 15: Market Opportunity
    {
      type: 'market',
      title: 'Market Opportunity',
      tam: { value: '18M', label: 'Total Addressable Market (India)' },
      sam: { value: '5M', label: 'Serviceable Market (Urban areas with purchasing power)' },
      som: { value: '100K', label: 'Target in Year 1-2 (via government schemes + direct sales)' },
      revenue: [
        { model: 'Direct Sales', price: '₹15,000', volume: '50K units', revenue: '₹75 Cr' },
        { model: 'Government Subsidy', price: '₹12,000', volume: '50K units', revenue: '₹60 Cr' }
      ],
      global: 'Global deaf population: 70M+ (future expansion potential)'
    },

    // Slide 16: Business Model
    {
      type: 'business',
      title: 'Business Model & Sustainability',
      models: [
        { name: 'Social Enterprise', desc: 'Minimal margins, profits fund R&D and subsidized distribution' },
        { name: 'Government Partnership', desc: 'Disability welfare schemes cover costs for beneficiaries' },
        { name: 'Tiered Pricing', desc: 'Premium features for market-rate customers cross-subsidize basic units' },
        { name: 'CSR Partnerships', desc: 'Corporate funding for distribution in underserved areas' }
      ],
      sustainability: 'Open-source software + community contributions reduce development costs'
    },

    // Slide 17: Team & Expertise
    {
      type: 'team',
      title: 'Our Team',
      members: [
        { role: 'Team Lead', expertise: 'Project Management, System Integration' },
        { role: 'ML Engineer', expertise: 'Computer Vision, TensorFlow, Model Training' },
        { role: 'Hardware Engineer', expertise: 'Embedded Systems, Electronics Design' },
        { role: 'Designer', expertise: 'Mechanical Design, CAD, User Experience' },
        { role: 'Community Liaison', expertise: 'Deaf Community Engagement, ISL Expert' }
      ],
      advisors: [
        'Deaf community representatives',
        'Sign language interpreters',
        'Accessibility technology experts'
      ]
    },

    // Slide 18: Challenges & Mitigation
    {
      type: 'challenges',
      title: 'Challenges & Our Solutions',
      challenges: [
        {
          challenge: 'Recognition Accuracy Variations',
          solution: 'Diverse training data + user calibration + adaptive learning'
        },
        {
          challenge: 'Environmental Robustness',
          solution: 'Auto-exposure control + temporal smoothing + extensive field testing'
        },
        {
          challenge: 'Power Consumption',
          solution: 'Dynamic power management + optimized inference + larger battery option'
        },
        {
          challenge: 'User Adoption',
          solution: 'Community co-design + training workshops + simple interface'
        }
      ]
    },

    // Slide 19: Future Roadmap
    {
      type: 'future',
      title: 'Future Enhancements',
      nearTerm: [
        'Expand vocabulary to 2000+ signs',
        'Add regional ISL dialect support',
        'Bidirectional communication (speech-to-text display)',
        'Facial expression recognition for emotional context'
      ],
      midTerm: [
        'Multi-language support (ASL, BSL)',
        'Context-aware translation (location-based)',
        'Group conversation support',
        'Cloud-connected learning (optional)'
      ],
      longTerm: [
        'Integration with mainstream smart glasses platforms',
        'AI-powered personalization',
        'Global deaf community social features',
        'Educational tools for sign language learning'
      ]
    },

    // Slide 20: Ask & Support Needed
    {
      type: 'ask',
      title: 'Support Needed from SSIP',
      funding: [
        { item: 'Prototype Development (2 units)', amount: '₹45,000' },
        { item: 'Data Collection & Testing', amount: '₹20,000' },
        { item: 'Tools & Equipment', amount: '₹10,000' },
        { item: 'User Testing & Iteration', amount: '₹8,000' }
      ],
      total: '₹83,000',
      nonFinancial: [
        'Access to FabLab facilities for prototyping',
        'Mentorship from ML/Hardware experts',
        'Connection to deaf community organizations',
        'Support for pilot deployment in institutions'
      ]
    },

    // Slide 21: Impact Metrics
    {
      type: 'metrics',
      title: 'Success Metrics (8 Months)',
      technical: [
        '500+ ISL signs recognized at 90% accuracy',
        '<500ms end-to-end latency',
        '6+ hours battery life',
        'Works in varied lighting conditions'
      ],
      social: [
        '20+ real users tested and provided feedback',
        '85%+ user satisfaction rating',
        'Pilot deployment in 2-3 institutions',
        '10+ documented success stories'
      ],
      milestones: [
        'Patent application filed for unique features',
        'Partnership with 1-2 deaf associations established',
        'Media coverage in accessibility tech publications'
      ]
    },

    // Slide 22: Call to Action
    {
      type: 'cta',
      title: 'Join Us in Breaking Barriers',
      message: 'Communication is a fundamental human right. With your support, we can create technology that empowers 18 million Indians to communicate freely and independently.',
      vision: 'A future where sign language users can converse naturally anywhere, anytime, with anyone.',
      contact: [
        'Email: rdwarkesh1300@gmail.com',
        'Phone: +91 90999 35366',
        // 'Project Site: [your-website]'
      ]
    },

    // Slide 23: Thank You
    {
      type: 'thankyou',
      title: 'Thank You!',
      subtitle: 'Questions & Discussion',
      team: 'Team Inno8',
      tagline: 'Building Technology for Inclusion'
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  // Touch Navigation Logic
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Keyboard Navigation Logic
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevent default scrolling for Space/Arrow keys
      if (['Space', 'ArrowUp', 'ArrowDown', ' '].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'Enter':
        case ' ':
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'Backspace':
          prevSlide();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderSlide = (slide) => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white text-center relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute top-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-32 left-1/3 w-48 md:w-96 h-48 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center h-full"> 
              <div className="mb-6 md:mb-12 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full blur opacity-75 animate-pulse"></div>
                <div className="relative bg-gray-900 p-4 md:p-6 rounded-full border border-gray-700 shadow-2xl">
                   <slide.icon className="w-16 h-16 md:w-24 md:h-24 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight tracking-tight drop-shadow-lg">
                {slide.title}
              </h1>
              <div className="h-1 w-20 md:w-32 bg-gradient-to-r from-transparent via-white to-transparent mb-4 md:mb-6 opacity-60"></div>
              <h2 className="text-xl md:text-3xl mb-8 md:mb-10 text-center font-light tracking-wide max-w-2xl mx-auto">{slide.subtitle}</h2>
              <div className="space-y-2 md:space-y-3 text-center mt-2 md:mt-4">
                {slide.content.map((line, i) => (
                  <p key={i} className="text-lg md:text-2xl font-medium tracking-wide">{line}</p>
                ))}
              </div>
            </div>
          </div>
        );

      case 'problem':
        return (
          <div className="min-h-full p-4 md:p-12 bg-red-50 overflow-y-auto pb-safe">
            <h2 className="text-4xl font-bold mb-8 text-red-900">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {slide.stats.map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-5xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Critical Pain Points:</h3>
              <ul className="space-y-3">
                {slide.pain_points.map((point, i) => (
                  <li key={i} className="flex items-start text-lg">
                    <span className="text-red-500 mr-3 text-2xl">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'comparison':
        return (
          <div className="min-h-full p-4 md:p-12 bg-gray-50 overflow-y-auto pb-safe">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">{slide.title}</h2>
            <div className="space-y-4 pb-6">
              {slide.solutions.map((sol, i) => (
                <div key={i} className="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center">
                  <div className="flex-shrink-0 w-full md:w-48 font-bold text-lg md:text-xl text-blue-600 mb-2 md:mb-0">{sol.name}</div>
                  <div className="flex-1 flex items-start md:items-center">
                    <span className="text-red-500 mr-3 md:mr-4 text-xl md:text-2xl mt-1 md:mt-0">❌</span>
                    <span className="text-gray-700 text-base md:text-lg">{sol.limitation}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-green-100 p-6 rounded-lg border-2 border-green-500">
              <div className="text-2xl font-bold text-green-800">
                ✅ Our Solution Addresses ALL These Gaps
              </div>
            </div>
          </div>
        );

      case 'solution':
        return (
          <div className="min-h-full p-4 md:p-12 bg-gradient-to-br from-green-50 to-blue-50 overflow-y-auto pb-safe">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
              {slide.features.map((feature, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                  <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-lg">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'process':
        return (
          <div className="min-h-full p-4 md:p-12 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-y-auto pb-safe">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-gray-900 text-center">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto pb-6">
              {slide.steps.map((step, i) => (
                <div key={i} className="relative group">
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mb-6 shadow-lg">
                      {step.num}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.desc}</p>
                  </div>
                  {i < slide.steps.length - 1 && i % 3 !== 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-12 transform -translate-y-1/2">
                      <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
                      <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
                        <div className="w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-indigo-400 border-b-4 border-b-transparent"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'architecture':
        return (
          <div className="h-full p-4 md:p-12 bg-gray-50 overflow-y-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">{slide.title}</h2>
            <div className="space-y-4 pb-6">
              {slide.components.map((comp, i) => (
                <div key={i} className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-600">{comp.layer}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {comp.items.map((item, j) => (
                      <div key={j} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'usp':
        return (
          <div className="h-full p-4 md:p-12 bg-gradient-to-br from-purple-50 to-pink-50 overflow-y-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
              {slide.usps.map((usp, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                  <usp.icon className="w-10 h-10 text-purple-600 mb-3" />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{usp.title}</h3>
                  <p className="text-gray-600">{usp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'competitive':
        return (
          <div className="h-full p-4 md:p-12 bg-gray-50 overflow-y-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">{slide.title}</h2>
            <div className="space-y-4 mb-6">
              {slide.competitors.map((comp, i) => (
                <div key={i} className="bg-white p-5 rounded-lg shadow-md">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-xl text-gray-800">{comp.name}</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">{comp.type}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">{comp.price}</span>
                    <span className="text-red-600 text-sm">⚠️ {comp.limitation}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg shadow-xl">
              <div className="text-2xl font-bold mb-2">🏆 Our Position:</div>
              <div className="text-xl">{slide.ourPosition}</div>
            </div>
          </div>
        );

      case 'components':
        return (
          <div className="h-full p-4 md:p-12 bg-green-50 overflow-y-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {slide.categories.map((cat, i) => (
                <div key={i} className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-2 md:mb-3">{cat.name}</h3>
                  <div className="text-2xl md:text-3xl font-bold text-green-600 mb-3 md:mb-4">{cat.cost}</div>
                  <ul className="space-y-1 md:space-y-2">
                    {cat.items.map((item, j) => (
                      <li key={j} className="text-xs md:text-sm text-gray-600">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pb-6">
              <div className="bg-blue-600 text-white p-4 md:p-6 rounded-lg shadow-lg">
                <div className="text-lg md:text-xl mb-1 md:mb-2">Prototype Cost (2 units)</div>
                <div className="text-3xl md:text-4xl font-bold">{slide.total}</div>
              </div>
              <div className="bg-green-600 text-white p-4 md:p-6 rounded-lg shadow-lg">
                <div className="text-lg md:text-xl mb-1 md:mb-2">Production Cost (at scale)</div>
                <div className="text-3xl md:text-4xl font-bold">{slide.production}</div>
              </div>
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="h-full p-4 md:p-12 bg-blue-50 overflow-y-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">{slide.title}</h2>
            <div className="space-y-6 pb-6">
              {slide.phases.map((phase, i) => (
                <div key={i} className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg md:text-xl font-bold flex-shrink-0 mb-4 md:mb-0">
                    {phase.month}
                  </div>
                  <div className="md:ml-6 flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{phase.phase}</h3>
                    <p className="text-gray-600 text-base md:text-lg">✓ {phase.deliverable}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'tech':
        return (
          <div className="h-full p-4 md:p-12 bg-gray-50 overflow-y-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6">
              {slide.sections.map((section, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-blue-600">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.points.map((point, j) => (
                      <li key={j} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'demo':
        return (
          <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-12">
            <h1 className="text-6xl font-bold mb-8">{slide.title}</h1>
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl max-w-3xl">
              <p className="text-2xl mb-6 text-center font-semibold">Watch as we demonstrate real-time translation:</p>
              <ol className="space-y-4 text-xl">
                {slide.demoSteps.map((step, i) => (
                  <li key={i} className="flex items-start">
                    <span className="font-bold text-orange-500 mr-3">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500">
                <p className="text-lg font-semibold">📹 {slide.note}</p>
              </div>
            </div>
          </div>
        );

      case 'results':
        return (
          <div className="h-full p-4 md:p-12 bg-green-50 overflow-y-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {slide.metrics.map((m, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-gray-600 mb-2">{m.metric}</div>
                  <div className="text-4xl font-bold text-green-600 mb-2">{m.value}</div>
                  <div className="text-sm text-gray-500">Target: {m.target}</div>
                  <div className="mt-2">
                    {m.status === 'achieved' ? (
                      <span className="text-green-600 font-semibold">✓ Achieved</span>
                    ) : (
                      <span className="text-yellow-600 font-semibold">⚠ In Progress</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">User Feedback:</h3>
              <div className="space-y-3">
                {slide.userFeedback.map((feedback, i) => (
                  <div key={i} className="p-4 bg-blue-50 rounded border-l-4 border-blue-500">
                    <p className="text-gray-700 italic">{feedback}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'impact':
        return (
          <div className="h-full p-4 md:p-12 bg-purple-50 overflow-y-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">{slide.title}</h2>
            <div className="space-y-4 mb-6">
              {slide.impact.map((imp, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                  {imp.number ? (
                    <>
                      <div className="flex items-center mb-2">
                        <div className="text-3xl font-bold text-purple-600 mr-4">{imp.number}</div>
                        <div className="text-xl font-bold text-gray-800">{imp.category}</div>
                      </div>
                      <p className="text-gray-600">{imp.desc}</p>
                    </>
                  ) : (
                    <>
                      <div className="text-xl font-bold text-gray-800 mb-2">{imp.category}</div>
                      <p className="text-gray-600">{imp.benefit}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg shadow-xl">
              <p className="text-xl font-semibold">🏛️ {slide.alignment}</p>
            </div>
          </div>
        );

      case 'market':
        return (
          <div className="h-full p-4 md:p-12 bg-blue-50 overflow-y-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-5xl font-bold mb-2">{slide.tam.value}</div>
                <div className="text-lg">{slide.tam.label}</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-5xl font-bold mb-2">{slide.sam.value}</div>
                <div className="text-lg">{slide.sam.label}</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-5xl font-bold mb-2">{slide.som.value}</div>
                <div className="text-lg">{slide.som.label}</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Revenue Projections:</h3>
              <div className="space-y-3">
                {slide.revenue.map((rev, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-green-50 rounded">
                    <div>
                      <div className="font-bold text-lg">{rev.model}</div>
                      <div className="text-sm text-gray-600">{rev.price} × {rev.volume}</div>
                    </div>
                    <div className="text-2xl font-bold text-green-600">{rev.revenue}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-lg font-semibold text-gray-800">🌍 {slide.global}</p>
            </div>
          </div>
        );

      case 'business':
        return (
          <div className="h-full p-4 md:p-12 bg-gray-50 overflow-y-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {slide.models.map((model, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">{model.name}</h3>
                  <p className="text-gray-700">{model.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg shadow-xl">
              <div className="text-2xl font-bold mb-2">💡 Sustainability Strategy:</div>
              <p className="text-xl">{slide.sustainability}</p>
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="h-full p-4 md:p-12 bg-purple-50 overflow-y-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {slide.members.map((member, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                  <Users className="w-10 h-10 text-purple-600 mb-3" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.role}</h3>
                  <p className="text-gray-600">{member.expertise}</p>
                </div>
              ))}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Advisory Board:</h3>
              <div className="flex flex-wrap gap-3">
                {slide.advisors.map((advisor, i) => (
                  <div key={i} className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                    {advisor}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'challenges':
        return (
          <div className="h-full p-4 md:p-12 bg-orange-50 overflow-y-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">{slide.title}</h2>
            <div className="space-y-6 pb-6">
              {slide.challenges.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start mb-3">
                    <span className="text-2xl mr-3">⚠️</span>
                    <h3 className="text-xl font-bold text-red-600">{item.challenge}</h3>
                  </div>
                  <div className="flex items-start ml-10">
                    <span className="text-2xl mr-3">✅</span>
                    <p className="text-gray-700 text-lg">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'future':
        return (
          <div className="h-full p-4 md:p-12 bg-gradient-to-br from-blue-50 to-purple-50 overflow-y-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">{slide.title}</h2>
            <div className="space-y-6 pb-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-4">📅 6-12 Months (Near-Term)</h3>
                <ul className="space-y-2">
                  {slide.nearTerm.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">🚀 1-2 Years (Mid-Term)</h3>
                <ul className="space-y-2">
                  {slide.midTerm.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">🌟 2-5 Years (Long-Term Vision)</h3>
                <ul className="space-y-2">
                  {slide.longTerm.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-purple-500 mr-2">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 'ask':
        return (
          <div className="h-full p-4 md:p-12 bg-yellow-50 overflow-y-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">{slide.title}</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Financial Support Required:</h3>
              <div className="space-y-3">
                {slide.funding.map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-blue-50 rounded">
                    <span className="text-lg text-gray-700">{item.item}</span>
                    <span className="text-xl font-bold text-blue-600">{item.amount}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t-2 border-gray-300 flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-800">Total Request:</span>
                <span className="text-3xl font-bold text-green-600">{slide.total}</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg pb-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Non-Financial Support:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {slide.nonFinancial.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'metrics':
        return (
          <div className="h-full p-4 md:p-12 bg-green-50 overflow-y-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Technical Metrics:</h3>
                <ul className="space-y-3">
                  {slide.technical.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-purple-600 mb-4">Social Impact Metrics:</h3>
                <ul className="space-y-3">
                  {slide.social.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-orange-600 mb-4">Key Milestones:</h3>
              <div className="space-y-3">
                {slide.milestones.map((item, i) => (
                  <div key={i} className="flex items-start p-3 bg-orange-50 rounded">
                    <Award className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'cta':
        return (
          <div className="flex flex-col items-center justify-center p-4 md:p-12 h-screen bg-gradient-to-br from-indigo-600 to-purple-600 text-white overflow-y-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center pt-8 md:pt-0">{slide.title}</h1>
            <p className="text-lg md:text-2xl mb-8 text-center max-w-4xl leading-relaxed">{slide.message}</p>
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl mb-8 max-w-3xl">
              <h2 className="text-3xl font-bold text-center mb-4 text-indigo-600">Our Vision</h2>
              <p className="text-xl text-center mb-6">{slide.vision}</p>
              <div className="space-y-2">
                {slide.contact.map((info, i) => (
                  <p key={i} className="text-lg text-center text-gray-700">{info}</p>
                ))}
              </div>
            </div>
            <div className="text-3xl font-bold animate-pulse">
              Let's Build This Together! 🚀
            </div>
          </div>
        );

      case 'thankyou':
        return (
          <div className="flex flex-col items-center justify-center h-screen p-4 md:p-12 bg-gradient-to-br from-green-500 to-blue-500 text-white text-center">
            <h1 className="text-4xl md:text-7xl font-bold mb-4">{slide.title}</h1>
            <h2 className="text-4xl mb-8">{slide.subtitle}</h2>
            <div className="text-2xl mb-8">{slide.team}</div>
            <div className="text-3xl italic">{slide.tagline}</div>
            <div className="mt-12 text-6xl">🙏</div>
          </div>
        );

      default:
        return <div className="flex items-center justify-center h-full text-2xl">Slide type not implemented</div>;
    }
  };

  return (
    <div 
      className="w-full h-screen bg-gray-900 flex flex-col"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slide Content - Main Area */}
      <div className="flex-1 bg-white relative overflow-hidden flex flex-col">
        {/* The renderSlide function now returns a div that should fill this space. 
            However, we need to ensure the immediate child handles scrolling if needed.
            Most styling in cases handles scrolling, but we ensure the parent confines it. */}
        {renderSlide(slides[currentSlide])}
      </div>

      {/* Navigation Controls */}
      <div className="bg-gray-800 text-white p-4 md:p-6 pb-6 md:pb-4 flex items-center justify-between border-t border-gray-700 safe-area-bottom relative z-50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 md:py-2 bg-blue-600 rounded-lg text-sm md:text-base font-medium disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed hover:bg-blue-700 active:scale-95 transition-all shadow-lg"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden md:inline">Previous</span>
          <span className="md:hidden">Prev</span>
        </button>

        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 flex-1 justify-center px-2">
          <span className="text-xs md:text-lg text-gray-400 font-mono mb-1 md:mb-0 order-2 md:order-1">
            {currentSlide + 1} / {slides.length}
          </span>
          <div className="flex gap-2 md:gap-1.5 flex-wrap justify-center order-1 md:order-2 mb-1 md:mb-0 items-center max-w-md">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide 
                    ? 'bg-blue-500 w-8 h-2.5 md:w-8 md:h-2' 
                    : 'bg-gray-600 w-2.5 h-2.5 md:w-2 md:h-2 hover:bg-gray-500 active:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 md:py-2 bg-blue-600 rounded-lg text-sm md:text-base font-medium disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed hover:bg-blue-700 active:scale-95 transition-all shadow-lg"
        >
          <span className="hidden md:inline">Next</span>
          <span className="md:hidden">Next</span>
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  );
};

export default Presentation;