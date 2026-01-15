import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Heart, DollarSign, Award, Target, Zap, Shield, Globe2 } from 'lucide-react';

const ProfessionalPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      type: 'title',
      title: 'Real-Time Sign Language to Speech',
      subtitle: 'AR Glasses',
      tagline: 'Breaking Communication Barriers Through Innovation',
      team: 'Team Inno8',
      submissionDate: '15th January 2026',
      institution: 'SSIP Grant Application'
    },

    // Slide 2: Introduction - Who We Are
    {
      type: 'introduction',
      title: 'Introduction: Who We Are',
      context: 'A team of engineering students passionate about solving India\'s most critical accessibility challenge',
      background: [
        {
          aspect: 'Academic Foundation',
          detail: 'Computer Engineering students eager to apply AI/ML, IoT, and embedded systems knowledge to real-world problems'
        },
        {
          aspect: 'Learning & Growth',
          detail: 'Building our first major assistive technology project, combining coursework with hands-on innovation'
        },
        {
          aspect: 'Future Community Engagement',
          detail: 'Planning to partner with Gujarat Deaf Association for user feedback, testing, and real-world validation'
        },
        {
          aspect: 'Why This Problem?',
          detail: 'Motivated to create technology that transforms lives - giving voice to 7 million Indians who deserve to be heard'
        }
      ],
      mission: 'To learn, build, and deliver affordable assistive technology that eliminates communication barriers for India\'s deaf community'
    },

    // Slide 3: Problem Statement - Newspaper Style
    {
      type: 'newspaper-problem',
      masthead: 'THE SILENT TIMES',
      edition: 'Special Investigation Edition',
      date: 'January 15, 2026',
      headline: "INDIA'S 63 MILLION SILENCED",
      subheadline: 'A Nation Fails Its Deaf Citizens',
      leadStory: {
        title: 'DECLARED DEAD WHILE ALIVE',
        location: 'Jhunjhunu, Rajasthan',
        content: 'Rohitash Kumar, 25, was declared dead by doctors because he did not respond to verbal commands. He woke up on his funeral pyre moments before cremation. Three doctors suspended.',
        pullQuote: '"He couldn\'t hear them. They couldn\'t see him."'
      },
      articles: [
        {
          category: 'HEALTHCARE',
          title: 'ER Communication Failure',
          stat: '67%',
          content: 'of deaf patients cannot communicate independently in emergency rooms',
          source: 'Boston University, 2020'
        },
        {
          category: 'PANDEMIC',
          title: 'Mask Crisis',
          stat: '90%',
          content: 'struggled when lip reading became impossible with masked public servants',
          source: 'University of Essex'
        },
        {
          category: 'EMPLOYMENT',
          title: 'Career Ceiling',
          stat: '74%',
          content: 'believe they will NEVER achieve leadership roles due to communication barriers',
          source: 'NAD India Survey'
        },
        {
          category: 'SAFETY',
          title: '3 Boys Killed on Tracks',
          stat: 'FATAL',
          content: 'Train horn went unheard. Vandalur, TN (Oct 2024)',
          source: 'Times of India'
        }
      ],
      breakingNews: 'BREAKING: Only 340 certified ISL interpreters for 63 MILLION deaf Indians • 1:185,000 ratio • 95% hospitals lack support • Supreme Court declares accessibility a Fundamental Right',
      stats: [
        { value: '63M', label: 'Deaf Indians (WHO)' },
        { value: '340', label: 'Interpreters' },
        { value: '1:185K', label: 'Ratio Gap' },
        { value: '95%', label: 'Hospitals Fail' }
      ]
    },

    // Slide 4: Solution
    {
      type: 'solution',
      title: 'Our Solution: Wearable AR Glasses',
      tagline: 'Hands-Free • Real-Time • Privacy-First • ISL-Focused',
      features: [
        { icon: Users, title: 'Truly Hands-Free', desc: 'Both hands free for natural two-handed ISL signing' },
        { icon: Zap, title: 'Real-Time (<500ms)', desc: 'ISL → Speech instantly, MediaPipe 95.7% accuracy' },
        { icon: Shield, title: '100% Private', desc: 'On-device AI, zero cloud dependency, no video upload' },
        { icon: Globe2, title: 'ISL-First Product', desc: 'First wearable for 15M IPSL users (India/Pakistan/Bangladesh)' }
      ],
      prototype: {
        components: [
          { name: 'Processing', spec: 'Raspberry Pi Zero 2W (Quad-core 1GHz, 512MB RAM)' },
          { name: 'Vision', spec: 'Pi Camera v2 (8MP Sony IMX219, 1080p30)' },
          { name: 'Audio', spec: 'Bone Conduction Transducer (200Hz-15kHz)' },
          { name: 'Display', spec: '0.96" OLED (128×64, I2C SSD1306)' },
          { name: 'Power', spec: '2500mAh LiPo (6-8 hrs runtime)' },
          { name: 'Frame', spec: 'TR-90 Optical Frame + 3D Printed Mounts' }
        ],
        aiStack: ['MediaPipe Hands (21 landmarks)', 'TensorFlow Lite CNN-LSTM', '500+ ISL signs vocabulary', 'On-device inference <100ms']
      },
      specs: 'Weight: ~80g | Battery: 6-8hrs | Charging: USB-C | Target Accuracy: 90%+'
    },

    // Slide 5: Market Analysis
    {
      type: 'market-infographic',
      title: 'Massive Untapped Market',
      marketData: {
        TAM: { value: '63M', label: 'Total Addressable Market (WHO Estimate)', details: 'Total Sufferers' },
        SAM: { value: '7.06M', label: 'Serviceable Available Market (Census)', details: 'Certified Disability' },
        SOM: { value: '50K', label: 'Serviceable Obtainable Market (Year 1)', details: 'Early Adopters' }
      },
      targetSegments: [
        { segment: 'Students (5-25 yrs)', size: '2.5M', pain: '80% dropout rate, mainstream education inaccessible', priority: 'High' },
        { segment: 'Working Professionals', size: '1.2M', pain: '74% blocked from leadership, job interviews fail', priority: 'High' },
        { segment: 'Healthcare Seekers', size: '4M+', pain: '67% cannot communicate in ERs, misdiagnosis risk', priority: 'Critical' },
        { segment: 'Rural Communities', size: '3.5M', pain: 'ZERO interpreter access, complete isolation', priority: 'Medium' }
      ],
      competitors: [
        { name: 'XRAI Glass (UK)', price: '₹40,000', limitation: 'Speech-to-text only, no ISL' },
        { name: 'Human Interpreters', price: '₹30-60K/mo', limitation: '1:185,000 ratio, unavailable' },
        { name: 'Smartphone Apps', price: 'Free-₹5K', limitation: 'Hands occupied, limited signs' }
      ],
      govSupport: 'Only 340 certified ISL interpreters for 63M deaf Indians',
      cagr: '12.8%'
    },

    // Slide 6: Business Model - Enhanced
    {
      type: 'business-model',
      title: 'Revenue Model & Go-to-Market',
      streams: [
        {
          name: 'B2G: ADIP Scheme',
          icon: '🏛️',
          percentage: 60,
          desc: '100% govt subsidy for BPL users',
          highlight: '₹15,000 device = FREE for users',
          detail: '1.8M beneficiaries served 2014-2020',
          cta: 'Primary Channel'
        },
        {
          name: 'B2C: Direct Sales',
          icon: '👤',
          percentage: 30,
          desc: 'Urban professionals, self-funded',
          highlight: 'Fixed retail: ₹15,000',
          detail: 'E-commerce + NGO partnerships',
          cta: 'Growth Channel'
        },
        {
          name: 'B2B: Corporate CSR',
          icon: '🏢',
          percentage: 10,
          desc: 'Companies hiring deaf employees',
          highlight: '95% cheaper than interpreters',
          detail: 'Amazon, KFC, Lemon Tree model',
          cta: 'High Margin'
        }
      ],
      salesPlan: {
        year1: { units: 100, revenue: '₹15L', strategy: 'Pilot in Gujarat hospitals + deaf associations' },
        year2: { units: 1000, revenue: '₹1.5Cr', strategy: 'ADIP empanelment + 5 state expansion' },
        year3: { units: 10000, revenue: '₹15Cr', strategy: 'National scale + B2B partnerships' }
      },
      costBreakdown: [
        { scale: '10 units', cost: '₹22,000', source: 'Prototype (current)' },
        { scale: '100 units', cost: '₹14,800', source: 'Small batch' },
        { scale: '1,000 units', cost: '₹10,500', source: 'Manufacturing' },
        { scale: '10,000 units', cost: '₹8,200', source: 'Mass production' }
      ],
      metrics: {
        breakeven: '500 units',
        margin: '45-55%',
        year3Revenue: '₹15 Cr'
      },
      competitorCost: '₹30,000-60,000/month for human interpreters'
    },

    // Slide 7: Execution Plan - Enhanced Roadmap with Resources
    {
      type: 'timeline',
      title: 'Execution Roadmap',
      subtitle: 'From Prototype to Market in 8 Months',
      phases: [
        { 
          time: 'M1-M2', 
          phase: 'Dataset Collection',
          task: 'ISL Dataset + Desktop MVP',
          details: ['5,000 samples from 50 signers', '50 signs vocabulary', '85% accuracy baseline'],
          icon: '📊',
          status: 'In Progress'
        },
        { 
          time: 'M3-M4', 
          phase: 'Model Optimization',
          task: 'Scale to 500 Signs',
          details: ['TensorFlow Lite optimization', '90% accuracy target', 'Raspberry Pi integration'],
          icon: '🧠',
          status: 'Planned'
        },
        { 
          time: 'M5-M6', 
          phase: 'Hardware Prototype',
          task: 'Field Testing at Surat Civil Hospital',
          details: ['5 working wearable units', '20+ deaf user trials', 'Iterate based on feedback'],
          icon: '🔬',
          status: 'Planned'
        },
        { 
          time: 'M7-M8', 
          phase: 'Certification & Launch',
          task: 'ADIP Certification + Manufacturing',
          details: ['BIS certification', '100 unit pilot batch', 'Gujarat Deaf Association partnership'],
          icon: '🚀',
          status: 'Goal'
        }
      ],
      resources: {
        hardware: [
          { item: 'Raspberry Pi Zero 2W', qty: 2, cost: '₹3,600', source: 'Robu.in' },
          { item: 'Pi Camera v2', qty: 2, cost: '₹4,400', source: 'Robu.in' },
          { item: 'Bone Conduction Transducer', qty: 2, cost: '₹1,700', source: 'Amazon' },
          { item: '0.96" OLED Display', qty: 2, cost: '₹500', source: 'Sahara Darwaja' },
          { item: 'LiPo Battery 2500mAh', qty: 2, cost: '₹900', source: 'Amazon' },
          { item: 'TR-90 Optical Frame', qty: 2, cost: '₹1,200', source: 'Ghod Dod Road' }
        ],
        tools: [
          { item: 'Soldering Station 60W', cost: '₹600' },
          { item: 'Digital Multimeter', cost: '₹600' },
          { item: '3D Printing (all parts)', cost: '₹350' },
          { item: 'Wiring & Connectors', cost: '₹800' }
        ],
        totalBudget: '₹22,755 (BEST Tier for 2 prototypes)'
      },
      deliverables: [
        'Patent application filed',
        'BIS certification initiated',
        '100 pre-orders secured',
        'Open-source dataset released'
      ]
    },

    // Slide 8: Team
    {
      type: 'team',
      title: 'Team Inno8',
      subtitle: 'Passionate Engineers Building for Impact',
      members: [
        {
          name: 'Dwarkesh Ramani',
          role: 'Team Lead & Backend Dev',
          education: 'Computer Engineering',
          photo: '/team/dwarkesh.webp',
          skills: ['Python', 'AI/ML', 'System Design']
        },
        {
          name: 'Jenil Gajera',
          role: 'Hardware Lead',
          education: 'Computer Engineering',
          photo: '/team/jenil.webp',
          skills: ['Raspberry Pi', 'IoT', 'Electronics']
        },
        {
          name: 'Jenny Patel',
          role: 'Frontend & UI',
          education: 'Computer Engineering',
          photo: '/team/jenny.webp',
          skills: ['React', 'UI/UX', 'Web Dev']
        },
        {
          name: 'Drashtant Mevada',
          role: 'Design & 3D Modeling',
          education: 'Computer Engineering',
          photo: '/team/drashtant.webp',
          skills: ['CAD', '3D Printing', 'Product Design']
        },
        {
          name: 'Akifa Sheikh',
          role: 'Business & Report',
          education: 'Computer Engineering',
          photo: '/team/akifa.webp',
          skills: ['Documentation', 'Research', 'Market Analysis']
        }
      ],
      advisors: [
        {
          name: 'Prof. Pariza Kamboj',
          role: 'Faculty Mentor',
          credentials: 'Professor, Computer Engineering Department',
          affiliation: 'Project Guide & Technical Advisor', 
          image: '/faculty-photo.webp'
        }
      ],
      teamStrength: '5 engineers with complementary skills covering AI, Hardware, UI, Design & Business'
    },

     // Slide 9: The Ask
    {
      type: 'ask',
      title: 'Funding Request: ₹83,000',
      amount: '₹83,000',
      equity: 'SSIP Grant Application',
      useOfFunds: [
        { percent: 27, category: 'Hardware Prototypes', detail: 'RPi Zero 2W, Cameras, Displays (2 Units)', amount: '₹22,410' },
        { percent: 18, category: 'Testing Equipment', detail: 'Multimeters, Soldering Station, Logic Analyzer', amount: '₹14,940' },
        { percent: 12, category: '3D Printing & Casing', detail: 'Filament, Resin, Prototyping Service', amount: '₹9,960' },
        { percent: 24, category: 'User Testing', detail: 'Hospital Field Visits, 20+ User Trials', amount: '₹19,920' },
        { percent: 19, category: 'Contingency & Misc', detail: 'Cables, Connectors, Unexpected Costs', amount: '₹15,770' }
      ],
      whyWeNeedSupport: [
        'Self-funded students with limited resources',
        'Hardware prototyping requires significant upfront investment',
        'User testing requires travel and coordination costs',
        'Quality components needed for reliable demo'
      ],
      howWeWillUse: [
        'Build 2 working prototype units for demo',
        'Conduct 20+ user trials at Surat Civil Hospital',
        'File provisional patent application',
        'Present at SSIP showcase event'
      ],
      terms: [
        'Funds used exclusively for project development',
        'Quarterly progress reports submitted',
        'All IP remains with student team',
        'Open-source ISL dataset released to community'
      ],
      commitment: 'We commit to delivering a working prototype within 8 months and open-sourcing our ISL dataset to benefit the entire deaf community.'
    },

    // Slide 10: Conclusion
    {
      type: 'conclusion',
      title: 'Transforming Lives, Building the Future',
      keyPoints: [
        {
          icon: Heart,
          point: 'The Problem',
          summary: '7M Indians isolated, 67% can\'t access healthcare, 74% career-blocked'
        },
        {
          icon: Zap,
          point: 'Our Solution',
          summary: 'Affordable AR glasses, ISL-first, hands-free, privacy-protected'
        },
        {
          icon: TrendingUp,
          point: 'Market Opportunity',
          summary: '₹27,000 Cr addressable market, ZERO competition, govt-backed'
        },
        {
          icon: Target,
          point: 'Execution Ready',
          summary: '8-month roadmap, proven tech, community partnerships'
        }
      ],
      impact: {
        immediate: '10,000 users + 40,000 families = 50,000 lives transformed',
        financial: '₹530 Cr societal cost savings + sustainable business model',
        longTerm: 'Standard govt assistive device reaching 15M IPSL users across South Asia'
      },
      value: 'We\'re not just building a product—we\'re giving 18 million Indians a voice',
      vision: '3 years: 10K devices | 5 years: Regional standard | 10 years: Communication barriers eliminated'
    },

    // Slide 11: Q&A Preparation (Backup)
    {
      type: 'qna',
      title: 'Anticipated Questions',
      questions: [
        {
          q: 'How accurate is your system?',
          a: 'Currently 85% on desktop MVP (100 signs). Targeting 90% for 500 signs on wearable. Academic benchmark (SignGlass): 83% BLEU1 with similar approach.'
        },
        {
          q: 'What about privacy concerns?',
          a: '100% on-device processing. Zero video transmission. Only skeletal landmarks extracted, not images. Users have full control—no cloud, no data upload.'
        },
        {
          q: 'Why not smartphone apps?',
          a: 'Hands must be free for natural signing. Holding phone makes two-handed ISL signs impossible and interrupts communication flow.'
        },
        {
          q: 'How will you handle ISL dialects?',
          a: 'Training on Mumbai variety (highest prestige). Adaptive learning handles regional variations. Phase 2 expansion to Kolkata, Chennai dialects.'
        },
        {
          q: 'Manufacturing scalability?',
          a: 'Starting with 100-unit pilot using Surat local suppliers. Partnering with electronics manufacturers. Cost drops 64% at 10K scale (₹22K→₹8.2K).'
        },
        {
          q: 'Regulatory compliance?',
          a: 'Communication aid (NOT medical device). BIS certification + EMC testing required. Timeline includes 3-6 month certification process.'
        },
        {
          q: 'What if the user is in low light?',
          a: 'Pi Camera v2 performs well in varied lighting. Future versions will include IR illumination for low-light scenarios.'
        },
        {
          q: 'Battery life concerns?',
          a: '6-8 hours with 2500mAh LiPo. Hot-swappable battery design planned. USB-C fast charging (2 hours full charge).'
        }
      ],
      keyPinpoints: [
        '₹15,000 price point aligns with ADIP scheme (100% govt subsidy)',
        'First ISL-focused wearable in India - ZERO competitors',
        '8-month realistic timeline with clear milestones',
        'Team has complementary skills: AI, Hardware, UI, Design, Business',
        'Community partnership with Gujarat Deaf Association planned',
        'Open-source dataset benefits entire deaf community'
      ]
    },

    // Slide 12: Closing - Thank You
    {
      type: 'vision',
      quote: '"Communication is a fundamental human right" — UN Convention on Rights of Persons with Disabilities',
      vision: {
        now: '8 months: Working prototypes tested by 20+ Gujarat deaf community members',
        year3: '10,000 devices across India | ₹15 Cr revenue | 50,000 lives improved',
        year5: '15M IPSL family served (India, Pakistan, Bangladesh, Nepal, Sri Lanka)'
      },
      callToAction: 'Join us in making history. Together, let\'s give voice to 18 million Indians and build an inclusive India where no one is silenced.',
      contact: {
        email: 'rdwarkesh1300@gmail.com',
        phone: '+91 90999 35366'
      }
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'Backspace') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderSlide = (slide) => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white h-full flex flex-col items-center justify-center p-12">
            <div className="max-w-5xl text-center">
              <div className="text-6xl md:text-8xl font-black mb-6 leading-tight">
                {slide.title}
              </div>
              <div className="text-3xl md:text-5xl font-light mb-8 text-blue-200">
                {slide.subtitle}
              </div>
              <div className="h-1 w-32 bg-blue-400 mx-auto mb-8"></div>
              <div className="text-2xl font-medium text-blue-100 mb-12">
                {slide.tagline}
              </div>
              <div className="text-4xl font-black text-white mb-3">
                {slide.team}
              </div>
              <div className="text-xl text-blue-300 mb-2">
                {slide.submissionDate}
              </div>
              <div className="text-lg text-blue-400">
                {slide.institution}
              </div>
            </div>
          </div>
        );

      case 'introduction':
        return (
          <div className="bg-gradient-to-br from-indigo-50 to-white h-full p-12 overflow-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl font-black mb-6 text-gray-900">{slide.title}</h2>
              <div className="text-2xl text-indigo-600 mb-12 font-medium">{slide.context}</div>
              
              <div className="grid grid-cols-2 gap-6 mb-12">
                {slide.background.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-indigo-100">
                    <div className="text-sm uppercase tracking-widest text-indigo-600 font-bold mb-2">{item.aspect}</div>
                    <div className="text-lg text-gray-700">{item.detail}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center">
                <div className="text-sm uppercase tracking-widest mb-3">Our Mission</div>
                <div className="text-3xl font-black">{slide.mission}</div>
              </div>
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 h-full p-8 overflow-auto">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl font-black mb-3 text-gray-900">{slide.title}</h2>
              {slide.subtitle && <p className="text-xl text-gray-600 mb-6">{slide.subtitle}</p>}
              
              {/* Faculty Mentor */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-5 rounded-2xl border-2 border-purple-200 mb-6 shadow-lg">
                <h3 className="text-2xl font-black mb-4 text-purple-900">Faculty Mentor</h3>
                {slide.advisors.map((advisor, i) => (
                  <div key={i} className="flex items-center gap-5 bg-white p-4 rounded-xl">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-3xl font-black shadow-lg">
                      {advisor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="text-2xl font-black text-purple-900">{advisor.name}</div>
                      <div className="text-lg text-gray-700">{advisor.credentials}</div>
                      <div className="text-sm text-purple-600 font-medium">{advisor.affiliation}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Student Team Members - 5 column grid */}
              <h3 className="text-2xl font-black mb-4 text-blue-900">Student Team</h3>
              <div className="grid grid-cols-5 gap-4 mb-6">
                {slide.members.map((member, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border-2 border-blue-200 shadow-lg text-center hover:shadow-xl transition-shadow">
                    {/* Photo Placeholder with Initials */}
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl font-black shadow-md">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h4 className="text-xl font-black text-blue-900 mb-1">{member.name}</h4>
                    <div className="text-base font-bold text-indigo-600 mb-2">{member.role}</div>
                    <div className="text-sm text-gray-500 mb-2">B.Tech {member.education}</div>
                    {/* Skills Tags */}
                    {member.skills && (
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.skills.map((skill, j) => (
                          <span key={j} className="text-sm bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{skill}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'conclusion':
        return (
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 h-full p-12 overflow-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl font-black mb-12 text-gray-900">{slide.title}</h2>
              
              {/* Key Points */}
              <div className="grid grid-cols-4 gap-6 mb-12">
                {slide.keyPoints.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-xl text-center border-2 border-gray-200">
                    <item.icon className="w-16 h-16 mx-auto mb-4 text-indigo-600" />
                    <h3 className="text-xl font-black mb-3">{item.point}</h3>
                    <p className="text-sm text-gray-700">{item.summary}</p>
                  </div>
                ))}
              </div>

              {/* Impact Summary */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="text-sm uppercase text-blue-600 font-bold mb-2">Immediate Impact</div>
                  <div className="text-lg font-bold">{slide.impact.immediate}</div>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                  <div className="text-sm uppercase text-green-600 font-bold mb-2">Financial Impact</div>
                  <div className="text-lg font-bold">{slide.impact.financial}</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
                  <div className="text-sm uppercase text-purple-600 font-bold mb-2">Long-term Vision</div>
                  <div className="text-lg font-bold">{slide.impact.longTerm}</div>
                </div>
              </div>

              {/* Value Proposition */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center mb-6">
                <div className="text-4xl font-black mb-4">{slide.value}</div>
                <div className="text-xl">{slide.vision}</div>
              </div>
            </div>
          </div>
        );

      case 'qna':
        return (
          <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 h-full p-8 overflow-auto text-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-black mb-2 text-center">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
                  {slide.title}
                </span>
              </h2>
              <p className="text-lg text-indigo-300 text-center mb-8">Be prepared to answer these common questions ⚡</p>
              
              {/* Question Cards - Unique Flipcard Style */}
              <div className="grid grid-cols-2 gap-5 mb-8">
                {slide.questions.slice(0, 8).map((item, i) => (
                  <div key={i} className="group relative bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20 hover:border-yellow-400/50 transition-all hover:scale-[1.02] hover:shadow-xl">
                    {/* Question Number Badge */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-slate-900 font-black text-lg shadow-lg">
                      {i + 1}
                    </div>
                    
                    <div className="text-xl font-black mb-3 text-white pl-6">{item.q}</div>
                    <div className="text-base text-indigo-200 pl-6 border-l-4 border-green-400">
                      {item.a}
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Pinpoints - Now a striking call-to-action section */}
              {slide.keyPinpoints && (
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl transform rotate-1"></div>
                  <div className="relative bg-gradient-to-r from-green-600 to-emerald-700 p-6 rounded-2xl shadow-2xl">
                    <h3 className="text-2xl font-black mb-5 text-center flex items-center justify-center gap-3">
                      <span className="text-3xl">💡</span>
                      Key Strengths to Highlight
                      <span className="text-3xl">🎯</span>
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      {slide.keyPinpoints.map((point, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white/20 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                          <span className="text-2xl">✅</span>
                          <span className="text-base font-medium">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'newspaper-problem':
        return (
          <div className="bg-amber-50 h-full overflow-auto" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d4a574\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}>
            <div className="max-w-6xl mx-auto p-6">
              {/* Newspaper Masthead */}
              <div className="text-center border-b-2 border-gray-800 pb-2 mb-2">
                <div className="text-xs uppercase tracking-[0.5em] text-gray-600 mb-1">{slide.edition}</div>
                <div className="text-6xl font-black font-serif tracking-tight text-gray-900" style={{fontFamily: 'Georgia, Times, serif'}}>
                  {slide.masthead}
                </div>
                <div className="flex justify-between items-center mt-2 text-xs text-gray-600 border-t border-gray-400 pt-2">
                  <span>Est. 2026</span>
                  <span className="font-bold">{slide.date}</span>
                  <span>Vol. 1, No. 1</span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="text-center py-4 border-b-4 border-double border-gray-800 mb-4">
                <h1 className="text-5xl font-black font-serif text-gray-900 leading-tight" style={{fontFamily: 'Georgia, Times, serif'}}>
                  {slide.headline}
                </h1>
                <p className="text-xl text-gray-700 mt-2 font-serif italic">{slide.subheadline}</p>
              </div>

              {/* Lead Story */}
              <div className="bg-red-50 border-l-8 border-red-600 p-4 mb-4 shadow-md">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">Leading Story</div>
                    <h2 className="text-2xl font-black font-serif text-gray-900 mb-1">{slide.leadStory.title}</h2>
                    <div className="text-sm text-gray-600 mb-2 italic">{slide.leadStory.location}</div>
                    <p className="text-base text-gray-800 leading-relaxed">{slide.leadStory.content}</p>
                  </div>
                  <div className="w-48 flex-shrink-0 bg-gray-900 text-white p-4 flex items-center justify-center">
                    <p className="text-lg font-serif italic text-center">{slide.leadStory.pullQuote}</p>
                  </div>
                </div>
              </div>

              {/* Article Cards Grid */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                {slide.articles.map((article, i) => (
                  <div key={i} className="bg-white p-3 border border-gray-300 shadow-sm">
                    <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">{article.category}</div>
                    <div className="text-base font-bold font-serif text-gray-900 mb-2">{article.title}</div>
                    <div className="text-4xl font-black text-red-600 mb-1">{article.stat}</div>
                    <p className="text-xs text-gray-700 mb-2 leading-relaxed">{article.content}</p>
                    <div className="text-xs text-gray-500 italic border-t border-gray-200 pt-1">Source: {article.source}</div>
                  </div>
                ))}
              </div>

              {/* Breaking News Ticker */}
              <div className="bg-red-700 text-white p-3 flex items-center gap-4 shadow-lg">
                <div className="bg-white text-red-700 font-black text-sm px-3 py-1 flex-shrink-0 animate-pulse">BREAKING</div>
                <div className="text-sm font-medium overflow-hidden whitespace-nowrap">
                  <span className="inline-block">{slide.breakingNews}</span>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="grid grid-cols-4 gap-4 mt-4 bg-gray-900 text-white p-4 rounded-lg">
                {slide.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-black text-amber-400">{stat.value}</div>
                    <div className="text-xs uppercase tracking-wider text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'market-infographic':
        return (
          <div className="bg-white h-full p-8 overflow-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-black mb-6 text-gray-900">{slide.title}</h2>
              
              {/* TAM SAM SOM Horizontal */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl p-5 text-white text-center shadow-lg">
                  <div className="text-5xl font-black mb-1">{slide.marketData.TAM.value}</div>
                  <div className="text-xl font-bold">TAM</div>
                  <div className="text-sm opacity-80">{slide.marketData.TAM.label}</div>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-xl p-5 text-white text-center shadow-lg">
                  <div className="text-5xl font-black mb-1">{slide.marketData.SAM.value}</div>
                  <div className="text-xl font-bold">SAM</div>
                  <div className="text-sm opacity-80">{slide.marketData.SAM.label}</div>
                </div>
                <div className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl p-5 text-white text-center shadow-lg">
                  <div className="text-5xl font-black mb-1">{slide.marketData.SOM.value}</div>
                  <div className="text-xl font-bold">SOM</div>
                  <div className="text-sm opacity-80">{slide.marketData.SOM.label}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Target Segments */}
                {slide.targetSegments && (
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-xl border-2 border-indigo-200">
                    <h3 className="text-xl font-black mb-3 text-indigo-900">🎯 Target Market Segments</h3>
                    <div className="space-y-2">
                      {slide.targetSegments.map((seg, i) => (
                        <div key={i} className="bg-white p-2 rounded-lg border border-indigo-100">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-base">{seg.segment}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                              seg.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                              seg.priority === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                            }`}>{seg.priority}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-indigo-600 font-bold">{seg.size} people</span>
                            <span className="text-gray-500 italic">{seg.pain}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Competitors */}
                {slide.competitors && (
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-xl border-2 border-red-200">
                    <h3 className="text-xl font-black mb-3 text-red-900">⚔️ Competition Analysis</h3>
                    <div className="space-y-2">
                      {slide.competitors.map((comp, i) => (
                        <div key={i} className="bg-white p-2 rounded-lg border border-red-100">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-base">{comp.name}</span>
                            <span className="text-red-600 font-bold text-base">{comp.price}</span>
                          </div>
                          <div className="text-sm text-gray-500">{comp.limitation}</div>
                        </div>
                      ))}
                      <div className="bg-green-100 p-2 rounded-lg border-2 border-green-500">
                        <div className="flex justify-between items-center">
                          <span className="font-black text-green-800">OUR SOLUTION</span>
                          <span className="font-black text-green-600">₹15,000</span>
                        </div>
                        <div className="text-sm text-green-700 font-bold">ISL-focused, On-device AI, 100% Private</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Stats */}
              <div className="bg-gray-900 text-white p-5 rounded-xl text-center text-lg">
                <span className="text-amber-400 font-bold">{slide.govSupport}</span>
                <span className="mx-4 opacity-50">|</span>
                <span>Market growing at <span className="text-green-400 font-bold">{slide.cagr} CAGR</span></span>
              </div>
            </div>
          </div>
        );

      case 'solution':
        return (
          <div className="bg-gradient-to-br from-blue-50 to-white h-full p-8 overflow-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-black mb-3 text-gray-900">{slide.title}</h2>
              <div className="text-2xl font-medium mb-6 text-blue-600">{slide.tagline}</div>
              
              {/* Features Grid */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                {slide.features.map((feature, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl shadow-lg border-2 border-gray-100 hover:border-blue-300 transition-all">
                    <feature.icon className="w-12 h-12 text-blue-600 mb-3" />
                    <h3 className="text-xl font-black mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-base text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* Prototype Blueprint Section */}
              {slide.prototype && (
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* Hardware Components */}
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-5 rounded-xl">
                    <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                      🔧 Hardware Blueprint
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {slide.prototype.components.map((comp, i) => (
                        <div key={i} className="bg-white/10 p-3 rounded-lg">
                          <div className="text-sm text-blue-300 uppercase tracking-wider">{comp.name}</div>
                          <div className="text-base font-bold">{comp.spec}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Stack */}
                  <div className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white p-5 rounded-xl">
                    <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                      🧠 AI Stack
                    </h3>
                    <div className="space-y-3">
                      {slide.prototype.aiStack.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white/10 p-3 rounded-lg">
                          <span className="text-green-400 text-lg">✓</span>
                          <span className="text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Specs Bar */}
              <div className="bg-gray-900 text-white p-5 rounded-xl text-center">
                <div className="text-sm uppercase tracking-widest mb-1 text-gray-400">Technical Specs</div>
                <div className="text-xl font-bold">{slide.specs}</div>
              </div>
            </div>
          </div>
        );

      case 'competitive-table':
        return (
          <div className="bg-white h-full p-12 overflow-auto">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-6xl font-black mb-12 text-gray-900">{slide.title}</h2>
              
              <table className="w-full mb-8">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="p-4 text-left text-lg font-bold">Product</th>
                    <th className="p-4 text-left text-lg font-bold">Price</th>
                    <th className="p-4 text-left text-lg font-bold">Language</th>
                    <th className="p-4 text-left text-lg font-bold">ISL Support</th>
                    <th className="p-4 text-left text-lg font-bold">Direction</th>
                  </tr>
                </thead>
                <tbody>
                  {slide.competitors.map((comp, i) => (
                    <tr key={i} className={`${i === slide.competitors.length - 1 ? 'bg-green-50 font-bold' : 'hover:bg-gray-50'} border-b-2 border-gray-200`}>
                      <td className="p-4 text-lg">{comp.name}</td>
                      <td className="p-4 text-lg">{comp.price}</td>
                      <td className="p-4 text-lg">{comp.language}</td>
                      <td className="p-4 text-lg">{comp.signLang}</td>
                      <td className="p-4 text-lg">{comp.direction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="grid grid-cols-5 gap-4">
                {slide.advantages.map((adv, i) => (
                  <div key={i} className="bg-green-600 text-white p-4 rounded-xl text-center">
                    <div className="text-lg font-bold">✓ {adv}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'impact-stats':
        return (
          <div className="bg-gradient-to-br from-purple-50 to-white h-full p-12 overflow-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl font-black mb-4 text-gray-900">{slide.title}</h2>
              <div className="text-2xl mb-12 text-purple-600">{slide.subtitle}</div>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                {slide.impactMetrics.map((impact, i) => (
                  <div key={i} className={`bg-${impact.color}-50 border-l-8 border-${impact.color}-600 p-8 rounded-r-2xl`}>
                    <div className="flex items-center gap-4 mb-4">
                      <impact.icon className={`w-12 h-12 text-${impact.color}-600`} />
                      <h3 className="text-3xl font-black">{impact.metric}</h3>
                    </div>
                    <div className="text-xl font-bold text-gray-700 mb-2">{impact.before}</div>
                    <div className="text-3xl font-black text-green-600">{impact.after}</div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-600 text-white p-8 rounded-2xl text-center">
                <div className="text-4xl font-black">{slide.beneficiaries}</div>
              </div>
            </div>
          </div>
        );

      case 'tech-simple':
        return (
          <div className="bg-gray-50 h-full p-12 overflow-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl font-black mb-12 text-gray-900">{slide.title}</h2>
              
              <div className="space-y-6 mb-12">
                {slide.stack.map((layer, i) => (
                  <div key={i} className="flex items-center gap-8">
                    <div className="w-48 text-right">
                      <div className="text-sm uppercase tracking-widest text-gray-500 font-bold">{layer.layer}</div>
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200">
                      <div className="text-2xl font-black mb-2">{layer.tech}</div>
                      <div className="text-gray-600">✓ {layer.validation}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
                <div className="text-sm uppercase tracking-widest mb-2">Our Innovation</div>
                <div className="text-3xl font-black">{slide.approach}</div>
              </div>
            </div>
          </div>
        );

      case 'business-model':
        return (
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 h-full p-8 overflow-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-black mb-3 text-gray-900">{slide.title}</h2>
              <p className="text-xl text-gray-600 mb-6">Triple-channel approach to sustainable growth</p>
              
              {/* Revenue Streams with Percentage Bars */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {slide.streams.map((stream, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{stream.icon}</span>
                      <h3 className="text-xl font-black text-gray-900">{stream.name}</h3>
                    </div>
                    <p className="text-base text-gray-600 mb-3">{stream.desc}</p>
                    
                    {/* Percentage Bar */}
                    <div className="mb-3">
                      <div className="flex justify-between text-base mb-1">
                        <span className="font-bold text-blue-700">{stream.percentage}% of units</span>
                        <span className="text-gray-500">{stream.cta}</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all"
                          style={{width: `${stream.percentage}%`}}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-2">
                      <div className="text-base font-bold text-green-700">{stream.highlight}</div>
                    </div>
                    <div className="text-sm text-gray-500">{stream.detail}</div>
                  </div>
                ))}
              </div>

              {/* Sales Plan - NEW */}
              {slide.salesPlan && (
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border-2 border-amber-300 mb-4">
                  <h3 className="text-lg font-black mb-3 text-amber-900">📈 3-Year Sales Plan</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-3 rounded-lg border border-amber-200 text-center">
                      <div className="text-xs text-amber-600 font-bold uppercase">Year 1</div>
                      <div className="text-2xl font-black text-gray-900">{slide.salesPlan.year1.units}</div>
                      <div className="text-sm text-green-600 font-bold">{slide.salesPlan.year1.revenue}</div>
                      <div className="text-xs text-gray-500 mt-1">{slide.salesPlan.year1.strategy}</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-amber-200 text-center">
                      <div className="text-xs text-amber-600 font-bold uppercase">Year 2</div>
                      <div className="text-2xl font-black text-gray-900">{slide.salesPlan.year2.units}</div>
                      <div className="text-sm text-green-600 font-bold">{slide.salesPlan.year2.revenue}</div>
                      <div className="text-xs text-gray-500 mt-1">{slide.salesPlan.year2.strategy}</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-amber-200 text-center">
                      <div className="text-xs text-amber-600 font-bold uppercase">Year 3</div>
                      <div className="text-2xl font-black text-gray-900">{slide.salesPlan.year3.units}</div>
                      <div className="text-sm text-green-600 font-bold">{slide.salesPlan.year3.revenue}</div>
                      <div className="text-xs text-gray-500 mt-1">{slide.salesPlan.year3.strategy}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Cost Breakdown Table */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow">
                  <h3 className="text-base font-black mb-2 text-gray-900 flex items-center gap-2">
                    📉 Economies of Scale
                  </h3>
                  <div className="space-y-1">
                    {slide.costBreakdown.map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-0">
                        <span className="text-sm text-gray-700">{item.scale}</span>
                        <span className="text-base font-black text-blue-600">{item.cost}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-4 rounded-xl text-white shadow">
                  <h3 className="text-base font-black mb-3 flex items-center gap-2">
                    📊 Key Metrics
                  </h3>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-2xl font-black">{slide.metrics.breakeven}</div>
                      <div className="text-xs uppercase tracking-wider opacity-80">Break-even</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black">{slide.metrics.margin}</div>
                      <div className="text-xs uppercase tracking-wider opacity-80">Margin</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black">{slide.metrics.year3Revenue}</div>
                      <div className="text-xs uppercase tracking-wider opacity-80">Year 3</div>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/20 text-center">
                    <div className="text-xs opacity-80">vs. Human Interpreters</div>
                    <div className="text-sm font-bold">{slide.competitorCost}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 h-full p-8 overflow-auto text-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-black mb-3">{slide.title}</h2>
              <p className="text-xl text-indigo-300 mb-6">{slide.subtitle}</p>
              
              <div className="grid grid-cols-2 gap-6">
                {/* Left: Vertical Mindmap Timeline */}
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-indigo-500 to-amber-500 rounded-full"></div>
                  
                  <div className="space-y-4">
                    {slide.phases.map((phase, i) => (
                      <div key={i} className="relative flex gap-4">
                        {/* Node Circle */}
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl z-10 shadow-lg flex-shrink-0
                          ${phase.status === 'In Progress' ? 'bg-green-500 ring-4 ring-green-300/50 animate-pulse' : 
                            phase.status === 'Goal' ? 'bg-amber-500' : 'bg-indigo-500'}`}>
                          {phase.icon}
                        </div>
                        
                        {/* Content Card */}
                        <div className={`flex-1 bg-white/10 backdrop-blur-sm p-3 rounded-xl border-l-4
                          ${phase.status === 'In Progress' ? 'border-green-500' : 
                            phase.status === 'Goal' ? 'border-amber-500' : 'border-indigo-400'}`}>
                          
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full
                              ${phase.status === 'In Progress' ? 'bg-green-500' : 
                                phase.status === 'Goal' ? 'bg-amber-500' : 'bg-indigo-500/50'}`}>{phase.status}</span>
                            <span className="text-sm font-bold text-indigo-300">{phase.time}</span>
                          </div>
                          
                          <h3 className="text-lg font-black mb-1">{phase.phase}</h3>
                          <p className="text-sm text-indigo-200 mb-2">{phase.task}</p>
                          
                          <div className="flex flex-wrap gap-1">
                            {phase.details.map((detail, j) => (
                              <span key={j} className="text-xs bg-white/10 px-2 py-0.5 rounded-full">✓ {detail}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Resources & Deliverables */}
                <div className="space-y-4">
                  {/* Resources Section */}
                  {slide.resources && (
                    <>
                      <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                        <h3 className="text-lg font-black mb-3 flex items-center gap-2">🔧 Hardware Resources</h3>
                        <div className="space-y-2">
                          {slide.resources.hardware.map((item, i) => (
                            <div key={i} className="flex justify-between items-center text-sm bg-white/5 p-2 rounded-lg">
                              <span>{item.item} ×{item.qty}</span>
                              <span className="text-green-400 font-bold">{item.cost}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                        <h3 className="text-lg font-black mb-3 flex items-center gap-2">🛠️ Tools & Equipment</h3>
                        <div className="space-y-2">
                          {slide.resources.tools.map((item, i) => (
                            <div key={i} className="flex justify-between items-center text-sm bg-white/5 p-2 rounded-lg">
                              <span>{item.item}</span>
                              <span className="text-green-400 font-bold">{item.cost}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-white/10 flex justify-between font-black">
                          <span>Total Budget</span>
                          <span className="text-green-400">{slide.resources.totalBudget}</span>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Deliverables */}
                  <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-4 rounded-xl border border-green-500/30">
                    <h3 className="text-lg font-black mb-3">🎯 Deliverables by Month 8</h3>
                    <div className="space-y-2">
                      {slide.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white/5 p-2 rounded-lg">
                          <span className="text-green-400 text-lg">✓</span>
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'government-fit':
        return (
          <div className="bg-white h-full p-12 overflow-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl font-black mb-12 text-gray-900">{slide.title}</h2>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-300">
                  <h3 className="text-3xl font-black mb-4 text-blue-900">{slide.adipScheme.name}</h3>
                  <div className="space-y-3 text-lg">
                    <p><strong>Coverage:</strong> {slide.adipScheme.coverage}</p>
                    <p><strong>Eligibility:</strong> {slide.adipScheme.eligibility}</p>
                    <p><strong>Reach:</strong> {slide.adipScheme.reach}</p>
                  </div>
                  <div className="mt-6 bg-green-600 text-white p-4 rounded-xl text-center">
                    <div className="text-2xl font-black">{slide.adipScheme.perfectFit}</div>
                  </div>
                </div>

                <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-300">
                  <h3 className="text-3xl font-black mb-4 text-orange-900">{slide.accessibleIndia.campaign}</h3>
                  <p className="text-xl mb-4"><strong>Biggest Gap:</strong></p>
                  <p className="text-2xl font-bold text-red-600 mb-4">{slide.accessibleIndia.biggestGap}</p>
                  <div className="bg-blue-600 text-white p-4 rounded-xl text-center">
                    <div className="text-2xl font-black">{slide.accessibleIndia.ourRole}</div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
                <div className="text-sm uppercase tracking-widest text-purple-600 font-bold mb-2">Funding Roadmap</div>
                <div className="text-2xl font-black">{slide.additionalFunding}</div>
              </div>
            </div>
          </div>
        );

      case 'metrics':
        return (
          <div className="bg-gray-50 h-full p-12 overflow-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl font-black mb-12 text-gray-900">{slide.title}</h2>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-black mb-6 text-blue-600">Technical KPIs</h3>
                  <div className="space-y-4">
                    {slide.technical.map((kpi, i) => (
                      <div key={i} className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-xl font-black">{kpi.metric}</div>
                          <div className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold">{kpi.timeline}</div>
                        </div>
                        <div className="flex gap-4">
                          <div className="text-gray-600">Current: <span className="font-bold">{kpi.current}</span></div>
                          <div className="text-green-600">Target: <span className="font-bold">{kpi.target}</span></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-black mb-6 text-purple-600">Social KPIs</h3>
                  <div className="space-y-4">
                    {slide.social.map((kpi, i) => (
                      <div key={i} className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200">
                        <div className="text-xl font-black mb-2">{kpi.metric}</div>
                        <div className="text-3xl font-black text-purple-600 mb-2">{kpi.target}</div>
                        <div className="text-gray-600 text-sm">{kpi.method}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'ask':
        return (
          <div className="bg-gradient-to-br from-green-50 to-white h-full p-8 overflow-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-black mb-6 text-gray-900">{slide.title}</h2>
              
              <div className="grid grid-cols-2 gap-6">
                {/* Left Column: Budget Breakdown */}
                <div className="bg-white p-6 rounded-2xl shadow-xl border-4 border-green-500">
                  <h3 className="text-2xl font-black mb-4 text-green-700">💰 Budget Allocation</h3>
                  <div className="space-y-3">
                    {slide.useOfFunds.map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                        <div className="flex-1">
                          <div className="text-base font-bold text-gray-800">{item.category}</div>
                          <div className="text-sm text-gray-500">{item.detail}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-black text-green-600">{item.amount}</div>
                          <div className="text-sm text-gray-400">{item.percent}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t-4 border-green-400 mt-4 pt-4 flex justify-between items-center">
                    <div className="text-2xl font-black">TOTAL</div>
                    <div className="text-4xl font-black text-green-600">{slide.amount}</div>
                  </div>
                </div>

                {/* Right Column: Why & How */}
                <div className="space-y-4">
                  {/* Why We Need Support */}
                  {slide.whyWeNeedSupport && (
                    <div className="bg-amber-50 p-5 rounded-xl border-2 border-amber-400">
                      <h3 className="text-lg font-black mb-3 text-amber-800">❓ Why We Need Support</h3>
                      <ul className="text-sm space-y-2">
                        {slide.whyWeNeedSupport.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-amber-600 text-lg">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* How We Will Use */}
                  {slide.howWeWillUse && (
                    <div className="bg-blue-50 p-5 rounded-xl border-2 border-blue-400">
                      <h3 className="text-lg font-black mb-3 text-blue-800">🎯 How We Will Use Funds</h3>
                      <ul className="text-sm space-y-2">
                        {slide.howWeWillUse.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-green-500 text-lg">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Terms */}
                  {slide.terms && (
                    <div className="bg-purple-50 p-5 rounded-xl border-2 border-purple-400">
                      <h3 className="text-lg font-black mb-3 text-purple-800">📋 Terms & Commitment</h3>
                      <ul className="text-sm space-y-2">
                        {slide.terms.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-purple-600 text-lg">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Commitment Statement */}
              {slide.commitment && (
                <div className="mt-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-5 rounded-2xl text-center shadow-xl">
                  <div className="text-lg font-bold">{slide.commitment}</div>
                </div>
              )}
            </div>
          </div>
        );

      case 'vision':
        return (
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white h-full flex flex-col items-center justify-center p-12">
            <div className="max-w-5xl text-center">
              <div className="text-5xl md:text-6xl font-light mb-12 italic leading-tight">
                {slide.quote}
              </div>

              <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="bg-white bg-opacity-10 p-6 rounded-2xl backdrop-blur-md">
                  <div className="text-sm uppercase tracking-widest text-blue-300 mb-2">8 Months</div>
                  <div className="text-lg md:text-xl font-bold">{slide.vision.now}</div>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-2xl backdrop-blur-md">
                  <div className="text-sm uppercase tracking-widest text-green-300 mb-2">Year 3</div>
                  <div className="text-lg md:text-xl font-bold">{slide.vision.year3}</div>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-2xl backdrop-blur-md">
                  <div className="text-sm uppercase tracking-widest text-purple-300 mb-2">Year 5+</div>
                  <div className="text-lg md:text-xl font-bold">{slide.vision.year5}</div>
                </div>
              </div>

              <div className="text-3xl md:text-4xl font-black mb-12 leading-tight">
                {slide.callToAction}
              </div>

              <div className="bg-white bg-opacity-10 p-6 rounded-2xl backdrop-blur-md inline-block mb-8">
                <div className="text-sm uppercase tracking-widest text-blue-300 mb-4">Contact Us</div>
                <div className="space-y-3 text-xl">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-blue-300">📧</span>
                    <span className="font-medium">{slide.contact.email}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-green-300">📞</span>
                    <span className="font-medium">{slide.contact.phone}</span>
                  </div>
                </div>
              </div>

              <div className="h-1 w-32 bg-blue-400 mx-auto mb-6"></div>
              
              <div className="text-3xl font-light">
                Thank You
              </div>
            </div>
          </div>
        );

      default:
        return <div className="p-12">Slide type not implemented</div>;
    }
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Slide Content */}
      <div className="w-full h-full">
        {renderSlide(slides[currentSlide])}
      </div>

      {/* Navigation Controls - Show on Hover */}
      <div className="group absolute bottom-0 left-0 right-0 h-32 flex items-center justify-center z-50">
        <div className="flex items-center justify-center gap-4 px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="bg-white bg-opacity-90 p-4 rounded-full hover:bg-opacity-100 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-2xl"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          <div className="bg-white bg-opacity-90 px-6 py-3 rounded-full shadow-2xl">
            <span className="text-gray-900 font-bold text-lg">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="bg-white bg-opacity-90 p-4 rounded-full hover:bg-opacity-100 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-2xl"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>
        </div>
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col gap-2 z-50">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-40 hover:bg-opacity-70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalPresentation;
