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
      team: 'Team Inno8'
    },

    // Slide 2: Introduction - Who We Are
    {
      type: 'introduction',
      title: 'Introduction: Who We Are',
      context: 'A team of engineering students united by a mission to solve India\'s most critical accessibility challenge',
      background: [
        {
          aspect: 'Academic Foundation',
          detail: 'Computer Science & Electronics students with expertise in AI/ML, IoT, and embedded systems'
        },
        {
          aspect: 'Practical Experience',
          detail: '3+ years of hands-on projects in computer vision, speech processing, and hardware prototyping'
        },
        {
          aspect: 'Community Connection',
          detail: 'Direct engagement with Gujarat Deaf Association to understand real user needs and pain points'
        },
        {
          aspect: 'Why This Problem?',
          detail: 'Witnessed firsthand how 7 million Indians struggle daily without a voice in a hearing world'
        }
      ],
      mission: 'To eliminate communication barriers for India\'s deaf community through affordable, accessible technology'
    },

    // Slide 3: Problem Statement
    {
      type: 'newspaper-problem',
      headline: 'The Silent Crisis',
      subheadline: '7.06 Million Indians Can\'t Communicate Independently',
      stories: [
        {
          title: 'Emergency Room Crisis',
          stat: '67%',
          detail: 'Cannot communicate independently in ER',
          quote: '"I suffered two weeks with pneumonia while taking the wrong medication" — Boston University Study, 2018'
        },
        {
          title: 'COVID-19 Mask Catastrophe',
          stat: '90%',
          detail: 'Struggled when masks hid lips',
          quote: '"What are deaf people supposed to do when lips can no longer be read?" — Prof. Kevin Garrison'
        },
        {
          title: 'Career Barriers',
          stat: '74%',
          detail: 'Believe they\'ll NEVER achieve leadership',
          quote: '"Communication is the #1 barrier to employment" — NAD India, 2024'
        }
      ],
      bottomLine: 'Interpreter Crisis: Only 500 certified interpreters for 7 million people (1:14,000 ratio vs USA 1:33)'
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
      specs: 'Raspberry Pi Zero 2W • MediaPipe Hands • TFLite CNN-LSTM • 500+ signs • 90% target accuracy • 6-8hr battery'
    },

    // Slide 5: Market Analysis
    {
      type: 'market-infographic',
      title: 'Massive Untapped Market',
      marketData: {
        TAM: { value: '₹27,000 Cr', label: '18M users × ₹15,000 (WHO estimate)'},
        SAM: { value: '₹7,500 Cr', label: '5M urban users ages 18-60' },
        SOM: { value: '₹15 Cr', label: '10,000 units Year 1-3' }
      },
      competitorGap: 'ZERO commercial ISL-focused wearable solutions exist globally',
      govSupport: 'ADIP Scheme: 100% coverage up to ₹15,000 | 1.8M beneficiaries 2014-2020'
    },

    // Slide 6: Business Model
    {
      type: 'business-model',
      title: 'Sustainable Business Model',
      streams: [
        {
          name: 'ADIP Scheme (Primary)',
          desc: '100% govt subsidy for users earning ≤₹22,500/month',
          revenue: '60% of units (high volume)',
          margin: '1.8M beneficiaries 2014-2020, ₹235 Cr annual budget'
        },
        {
          name: 'Direct B2C Sales',
          desc: 'Urban professionals, working deaf individuals',
          revenue: '30% of units',
          margin: 'Standard retail, ₹15,000 fixed price'
        },
        {
          name: 'CSR Partnerships',
          desc: 'Amazon/KFC model: Companies hiring deaf staff',
          revenue: '10% of units (B2B)',
          margin: '95% cheaper than full-time interpreters (₹30K-60K/month)'
        }
      ],
      pricing: 'Cost: ₹22K (10 units) → ₹14.8K (100) → ₹10.5K (1000) → ₹8.2K (10K) | Retail: Fixed ₹15,000',
      sustainability: 'Break-even: 500 units | Year 1: 100 units | Year 2: 1,000 | Year 3: 10,000 (₹15 Cr revenue, 45-55% margin)'
    },

    // Slide 7: Execution Plan
    {
      type: 'timeline',
      title: '8-Month Roadmap to Market',
      phases: [
        { month: 'M1-2', milestone: 'Dataset + Desktop MVP', goal: '50 ISL signs, 85% accuracy, 5,000 samples from 50 signers' },
        { month: 'M3-4', milestone: 'Model Scaling', goal: '500 signs vocabulary, 90% accuracy target, TFLite optimization' },
        { month: 'M5-6', milestone: 'Hardware Prototype', goal: '5 working wearable units, component sourcing Surat' },
        { month: 'M7-8', milestone: 'User Testing', goal: '20+ deaf participants, 2-week real-world trials, iterate based on feedback' }
      ],
      deliverables: 'Deliverables: BIS certification started • Patent filed • 100 pre-orders • Gujarat Deaf Association partnership'
    },

    // Slide 8: Team
    {
      type: 'team',
      title: 'Our Team: Multidisciplinary Expertise',
      members: [
        {
          name: 'Dwarkesh Ramani',
          role: 'Project Lead & AI/ML Engineer',
          qualification: 'B.Tech Computer Engineering',
          skills: 'TensorFlow, MediaPipe, Computer Vision, Python'
        },
        {
          name: 'Jenil Gajera',
          role: 'Hardware & Embedded Systems',
          qualification: 'B.Tech Electronics Engineering',
          skills: 'Raspberry Pi, IoT, Circuit Design, PCB Development'
        },
        {
          name: 'Jenny Patel',
          role: 'Software Development & Integration',
          qualification: 'B.Tech Computer Science',
          skills: 'React, Python, API Development, System Architecture'
        },
        {
          name: 'Drashant Mevada',
          role: 'Design & User Research',
          qualification: 'B.Tech Computer Engineering',
          skills: '3D Modeling, CAD, UX Research, Prototyping'
        },
        {
          name: 'Akifa',
          role: 'Business Development & Strategy',
          qualification: 'B.Tech Computer Engineering',
          skills: 'Market Research, Partnership Development, Financial Modeling'
        }
      ],
      advisors: [
        {
          name: 'Prof. Pariza Kamboze',
          role: 'Faculty Mentor',
          credentials: 'Assistant Professor, Computer Engineering Department',
          affiliation: 'Project Guide & Technical Advisor'
        }
      ],
      strength: 'Passionate student team with multidisciplinary skills working on real-world assistive technology'
    },

    // Slide 9: The Ask
    {
      type: 'ask',
      title: 'The Ask: ₹83,000 Seed Funding',
      breakdown: [
        { item: 'Prototype Development (2 units)', amount: '₹45,000', detail: 'Pi Zero 2W, cameras, power system, audio, display hardware' },
        { item: 'Testing Equipment & Tools', amount: '₹10,000', detail: 'Multimeter, soldering station, measurement tools' },
        { item: '3D Printing & Fabrication', amount: '₹8,000', detail: 'Frame components, mounts, enclosures' },
        { item: 'User Testing & Iteration', amount: '₹8,000', detail: 'Real-world testing with deaf community members' },
        { item: 'Development Accessories', amount: '₹12,000', detail: 'Monitor, keyboard, cables, SD cards, power supplies' }
      ],
      total: '₹83,000',
      nonFinancial: ['College FabLab access', 'Industry mentorship (AI/ML, AR)', 'Gujarat Deaf Association partnership', 'Pilot institution connections'],
      commitment: 'Monthly progress reports • Milestone-based deliverables • Open-source dataset contribution • Community-driven development'
    },

    // Slide 10: Conclusion - Impact & Vision
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
        }
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
              <div className="text-xl text-blue-300">
                {slide.team}
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
          <div className="bg-white h-full p-12 overflow-auto">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-6xl font-black mb-12 text-gray-900">{slide.title}</h2>
              
              {/* Faculty Mentor - Show First */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-200 mb-12 shadow-xl">
                <h3 className="text-3xl font-black mb-6 text-purple-900">Faculty Mentor</h3>
                {slide.advisors.map((advisor, i) => (
                  <div key={i} className="flex items-center gap-6 bg-white p-6 rounded-xl">
                    {/* Faculty Photo */}
                    <div className="flex-shrink-0">
                      <img 
                        src="/faculty-photo.webp" 
                        alt={advisor.name}
                        className="w-40 h-40 rounded-full object-cover border-4 border-purple-300 shadow-lg"
                      />
                    </div>
                    {/* Faculty Info */}
                    <div className="flex-1">
                      <div className="text-3xl font-black mb-2 text-purple-900">{advisor.name}</div>
                      <div className="text-xl font-bold text-purple-600 mb-2">{advisor.role}</div>
                      <div className="text-lg text-gray-700 mb-1">{advisor.credentials}</div>
                      <div className="text-md text-gray-600">{advisor.affiliation}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Student Team Members - Show After Mentor */}
              <h3 className="text-3xl font-black mb-6 text-blue-900">Student Team</h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {slide.members.map((member, i) => (
                  <div key={i} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-200 shadow-lg">
                    <h3 className="text-2xl font-black mb-2 text-blue-900">{member.name}</h3>
                    <div className="text-lg font-bold text-indigo-600 mb-3">{member.role}</div>
                    <div className="space-y-2 text-sm">
                      <div><strong>Education:</strong> {member.qualification}</div>
                      <div><strong>Skills:</strong> {member.skills}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Team Strength */}
              <div className="bg-green-600 text-white p-6 rounded-2xl text-center">
                <div className="text-2xl font-black">{slide.strength}</div>
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
          <div className="bg-gray-50 h-full p-12 overflow-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl font-black mb-12 text-gray-900">{slide.title}</h2>
              
              <div className="space-y-6">
                {slide.questions.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-indigo-600">
                    <div className="text-2xl font-black mb-3 text-indigo-900">Q: {item.q}</div>
                    <div className="text-lg text-gray-700 pl-6">
                      <strong className="text-green-600">A:</strong> {item.a}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 p-6 rounded-xl border-2 border-blue-200 text-center">
                <div className="text-lg font-bold text-blue-900">This slide is for your preparation. Use during Q&A session if questions arise.</div>
              </div>
            </div>
          </div>
        );

      case 'newspaper-problem':
        return (
          <div className="bg-stone-50 h-full p-12 overflow-auto">
            <div className="max-w-7xl mx-auto">
              {/* Newspaper Header */}
              <div className="border-b-4 border-black pb-4 mb-8">
                <div className="text-7xl font-black font-serif text-center mb-2">
                  {slide.headline}
                </div>
                <div className="text-2xl text-center text-gray-700 font-serif italic">
                  {slide.subheadline}
                </div>
              </div>

              {/* Three Column Layout (Newspaper Style) */}
              <div className="grid grid-cols-3 gap-8 mb-8">
                {slide.stories.map((story, i) => (
                  <div key={i} className="border-r border-gray-300 pr-8 last:border-r-0">
                    <div className="text-3xl font-black font-serif mb-2">{story.title}</div>
                    <div className="bg-black text-white text-7xl font-black text-center py-4 mb-4">
                      {story.stat}
                    </div>
                    <div className="text-xl font-bold mb-3 text-gray-800">{story.detail}</div>
                    <div className="border-l-4 border-gray-400 pl-4 text-base italic text-gray-700 leading-relaxed">
                      {story.quote}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Breaking News Banner */}
              <div className="bg-red-600 text-white p-6 text-center">
                <div className="text-xs uppercase tracking-widest font-bold mb-1">Breaking</div>
                <div className="text-2xl font-black">{slide.bottomLine}</div>
              </div>
            </div>
          </div>
        );

      case 'market-infographic':
        return (
          <div className="bg-white h-full p-12 overflow-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl font-black mb-12 text-gray-900">{slide.title}</h2>
              
              {/* TAM SAM SOM Visual */}
              <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-full h-48 bg-blue-600 rounded-3xl flex items-center justify-center mb-4">
                    <div className="text-white">
                      <div className="text-5xl font-black mb-2">{slide.marketData.TAM.value}</div>
                      <div className="text-lg">TAM</div>
                    </div>
                  </div>
                  <div className="text-gray-700">{slide.marketData.TAM.label}</div>
                </div>
                <div className="text-center">
                  <div className="w-full h-40 bg-green-600 rounded-3xl flex items-center justify-center mb-4 mt-8">
                    <div className="text-white">
                      <div className="text-5xl font-black mb-2">{slide.marketData.SAM.value}</div>
                      <div className="text-lg">SAM</div>
                    </div>
                  </div>
                  <div className="text-gray-700">{slide.marketData.SAM.label}</div>
                </div>
                <div className="text-center">
                  <div className="w-full h-32 bg-orange-600 rounded-3xl flex items-center justify-center mb-4 mt-16">
                    <div className="text-white">
                      <div className="text-4xl font-black mb-2">{slide.marketData.SOM.value}</div>
                      <div className="text-base">SOM</div>
                    </div>
                  </div>
                  <div className="text-gray-700">{slide.marketData.SOM.label}</div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-8 border-red-600 p-6">
                  <div className="text-sm uppercase tracking-widest text-red-600 font-bold mb-2">Market Gap</div>
                  <div className="text-3xl font-black text-gray-900">{slide.competitorGap}</div>
                </div>
                <div className="bg-green-50 border-l-8 border-green-600 p-6">
                  <div className="text-sm uppercase tracking-widest text-green-600 font-bold mb-2">Government Support</div>
                  <div className="text-3xl font-black text-gray-900">{slide.govSupport}</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'solution':
        return (
          <div className="bg-gradient-to-br from-blue-50 to-white h-full p-12 overflow-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl font-black mb-4 text-gray-900">{slide.title}</h2>
              <div className="text-3xl font-light mb-12 text-blue-600">{slide.tagline}</div>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                {slide.features.map((feature, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-200">
                    <feature.icon className="w-16 h-16 text-blue-600 mb-4" />
                    <h3 className="text-3xl font-black mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-xl text-gray-700">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-900 text-white p-8 rounded-2xl text-center">
                <div className="text-sm uppercase tracking-widest mb-2">Technical Specifications</div>
                <div className="text-2xl font-bold">{slide.specs}</div>
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
          <div className="bg-white h-full p-12 overflow-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl font-black mb-12 text-gray-900">{slide.title}</h2>
              
              <div className="grid grid-cols-3 gap-6 mb-12">
                {slide.streams.map((stream, i) => (
                  <div key={i} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-200">
                    <h3 className="text-2xl font-black mb-3">{stream.name}</h3>
                    <p className="text-gray-700 mb-4">{stream.desc}</p>
                    <div className="text-4xl font-black text-blue-600 mb-2">{stream.revenue}</div>
                    <div className="text-sm text-gray-600">{stream.margin}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                  <div className="text-sm uppercase tracking-widest text-green-600 font-bold mb-2">Pricing Strategy</div>
                  <div className="text-xl font-bold">{slide.pricing}</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
                  <div className="text-sm uppercase tracking-widest text-purple-600 font-bold mb-2">Growth Plan</div>
                  <div className="text-xl font-bold">{slide.sustainability}</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="bg-gradient-to-br from-indigo-50 to-white h-full p-12 overflow-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl font-black mb-12 text-gray-900">{slide.title}</h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-32 top-0 bottom-0 w-1 bg-indigo-600"></div>
                
                <div className="space-y-12">
                  {slide.phases.map((phase, i) => (
                    <div key={i} className="flex items-start gap-8">
                      <div className="w-24 text-right">
                        <div className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full font-black text-lg">
                          {phase.month}
                        </div>
                      </div>
                      <div className="flex-1 bg-white p-6 rounded-xl shadow-lg border-2 border-indigo-200 relative">
                        <div className="absolute -left-4 top-8 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white"></div>
                        <h3 className="text-3xl font-black mb-2">{phase.milestone}</h3>
                        <p className="text-xl text-gray-700">{phase.goal}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-xl text-center">
                <div className="text-2xl font-black">{slide.deliverables}</div>
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
          <div className="bg-gradient-to-br from-green-50 to-white h-full p-12 overflow-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl font-black mb-12 text-gray-900">{slide.title}</h2>
              
              <div className="bg-white p-8 rounded-2xl shadow-2xl border-4 border-green-600 mb-8">
                <div className="space-y-4 mb-6">
                  {slide.breakdown.map((item, i) => (
                    <div key={i} className="flex justify-between items-start p-4 bg-gray-50 rounded-xl">
                      <div className="flex-1">
                        <div className="text-xl font-bold mb-1">{item.item}</div>
                        {item.detail && <div className="text-sm text-gray-600">{item.detail}</div>}
                      </div>
                      <div className="text-2xl font-black text-green-600 ml-4">{item.amount}</div>
                    </div>
                  ))}
                </div>
                <div className="border-t-4 border-gray-300 pt-4">
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-black uppercase">Total Budget</div>
                    <div className="text-5xl font-black text-green-600">{slide.total}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">Non-Financial Support</div>
                  <ul className="space-y-2">
                    {slide.nonFinancial.map((item, i) => (
                      <li key={i} className="text-lg">✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
                  <div className="text-sm uppercase tracking-widest text-purple-600 font-bold mb-3">Our Commitment</div>
                  <div className="text-xl font-bold">{slide.commitment}</div>
                </div>
              </div>
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
