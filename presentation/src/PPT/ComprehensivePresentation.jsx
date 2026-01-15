import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Eye, Heart, Users, Target, Lightbulb, Cpu, Mic, Battery, 
  DollarSign, Calendar, CheckCircle, TrendingUp, Award, Globe, Shield, Zap, 
  AlertCircle, MapPin, Building, GraduationCap, Store, Phone, 
  Search, MessageSquare, Info, Send, Activity, Briefcase, Rocket
} from 'lucide-react';

const ComprehensivePresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    setExpandedCard(null);
  }, [currentSlide]);

  const slides = [
    // Slide 1: Title
    {
      type: 'title',
      title: 'Real-Time Sign Language to Speech AR Glasses',
      subtitle: 'Assistive Vision: Empowering 18 Million Indians',
      tagline: 'Breaking Communication Barriers Through Innovation',
      content: [
        'SSIP Innovation Project 2026',
        'Team: Inno8',
        // 'Institution: SCET, Surat',
        // 'Location: Surat, Gujarat'
      ],
      icon: Eye
    },

    // Slide 2: The Human Story
    {
      type: 'story',
      title: 'Imagine This Moment...',
      stories: [
        {
          scenario: '🏥 Emergency Room',
          description: "A deaf person in pain cannot explain symptoms. Nurses don't understand sign language. Critical minutes pass.",
          impact: 'Health risk, delayed treatment, frustration'
        },
        {
          scenario: '🏪 Job Interview',
          description: 'A qualified candidate uses sign language. No interpreter available. Opportunity lost before it begins.',
          impact: 'Employment discrimination, lost potential'
        },
        {
          scenario: '🏫 Classroom',
          description: "A student wants to ask a question. Teacher doesn't know ISL. The question stays unasked.",
          impact: 'Educational inequality, isolation'
        },
        {
          scenario: 'Police Station',
          description: 'A witness saw a crime. Cannot communicate what happened. Justice delayed.',
          impact: 'Legal barriers, safety concerns'
        }
      ],
      message: 'These are not hypotheticals. This is daily reality for 18 million Indians.'
    },

    // Slide 3: The Problem - Deep Dive
    {
      type: 'problem-deep',
      title: 'The Communication Crisis',
      globalStats: {
        world: '430 million people with disabling hearing loss (WHO)',
        india: '18+ million hearing/speech impaired individuals',
        growth: 'Expected to reach 700 million globally by 2050'
      },
      barriers: [
        {
          category: 'Social Barrier',
          stat: '<1%',
          description: 'of Indian population understands ISL',
          consequence: 'Complete isolation in most social situations'
        },
        {
          category: 'Economic Barrier',
          stat: '₹2,000-5,000',
          description: 'per hour for professional interpreters',
          consequence: 'Unaffordable for 95% of the community'
        },
        {
          category: 'Geographic Barrier',
          stat: '80%',
          description: 'of interpreters concentrated in metros',
          consequence: 'Rural areas completely underserved'
        },
        {
          category: 'Emergency Barrier',
          stat: '0',
          description: 'immediate interpretation available',
          consequence: 'Life-threatening situations mishandled'
        }
      ],
      legalContext: 'Rights of Persons with Disabilities Act 2016 mandates communication access, but implementation gaps remain huge'
    },

    // Slide 4: Why Current Solutions Fail
    {
      type: 'solution-gaps',
      title: "Why Current Solutions Don't Work",
      solutions: [
        {
          solution: 'Human Interpreters',
          problems: [
            'Cost: ₹2,000-5,000/hour',
            'Availability: Only in major cities',
            'Wait time: Not on-demand',
            'Privacy: Third party in conversations'
          ],
          verdict: '❌ Not scalable or affordable'
        },
        {
          solution: 'Smartphone Apps',
          problems: [
            'Requires holding phone while signing',
            'Occupies both hands needed for ISL',
            'Breaks natural communication flow',
            'Awkward in professional settings'
          ],
          verdict: '❌ Impractical for real conversations'
        },
        {
          solution: 'Smart Gloves',
          problems: [
            'Sensors on hands restrict movement',
            'Must wear equipment to communicate',
            'Limited to finger-spelling',
            'Uncomfortable for daily wear'
          ],
          verdict: '❌ Disrupts natural signing'
        },
        {
          solution: 'Video Relay Services',
          problems: [
            'Requires stable high-speed internet',
            'Not available in most locations',
            'Latency issues',
            'Still needs remote interpreter'
          ],
          verdict: '❌ Infrastructure dependent'
        }
      ],
      gap: 'There is NO affordable, hands-free, portable solution for real-time ISL translation in India'
    },

    // Slide 5: Existing Projects - Detailed Analysis
    {
      type: 'competitive-detailed',
      title: "What Others Have Tried (And Why They're Not Enough)",
      competitors: [
        {
          name: 'XRAI Glass (UK)',
          launch: '2022',
          tech: 'Speech-to-text AR glasses',
          price: '₹40,000',
          limitations: [
            'ONE-WAY: Only helps deaf people understand speech',
            'Does NOT translate sign language to speech',
            'Expensive for Indian market',
            'ASL-focused, no ISL support',
            'Requires continuous smartphone connection',
            'Subscription model for advanced features'
          ],
          verdict: 'Wrong direction - solves opposite problem',
          moreInfo: 'While XRAI Glass provides excellent captioning for speech, it completely ignores the expression side of communication (Signing). Our device bridges the gap where the user speaks through their signs.'
        },
        {
          name: 'SignGlass (Penn State, 2025)',
          launch: 'September 2025',
          tech: 'ASL recognition with 3 cameras',
          price: 'Research only',
          limitations: [
            'Academic prototype, not commercialized',
            'ASL-only (American Sign Language)',
            'No ISL dataset or support',
            'Cost not disclosed - likely expensive',
            'Heavy dual-frame design (85g+)',
            'Limited 1-hour battery life'
          ],
          verdict: 'Proves feasibility but unavailable to users',
          moreInfo: 'SignGlass uses a multi-camera setup that is power-intensive and heavy. Our optimization uses a single Pi camera with high-efficiency Landmark extraction, making it wearable for whole days.'
        },
        {
          name: 'Google AR Prototype (2022)',
          launch: 'Demo 2022',
          tech: 'Real-time translation + ASL detection',
          price: 'Never released',
          limitations: [
            'Just a concept demo',
            'Never made commercially available',
            'No follow-up or product launch',
            'Killed like many Google projects',
            'Focused on high-end AR hardware (>$1000)',
            'Cloud-dependent for translation'
          ],
          verdict: 'Vaporware - proved concept but abandoned',
          moreInfo: 'Google demonstrated this 4 years ago but never solved the cost or privacy issues. We are solving for India today using affordable, offline hardware that respects user privacy.'
        },
        {
          name: 'UCLA Smart Glove (2020)',
          launch: '2020',
          tech: 'Flex sensors on glove',
          price: 'Research prototype',
          limitations: [
            'Must wear gloves to communicate',
            'Only recognizes finger-spelling',
            'Not hands-free',
            'Impractical for daily use',
            'Sensors degrade with sweat and use',
            'Lacks spatial recognition for complex ISL'
          ],
          verdict: 'Intrusive solution - not natural signing',
          moreInfo: 'Gloves are the most common failed approach because sign language is not just about fingers; it is about hands moving in space. Cameras (Vision) are the only natural way to track ISL.'
        }
      ],
      summary: '40+ research projects exist globally, but ZERO affordable commercial products for ISL users'
    },

    // Slide 6: Our Solution - The Breakthrough
    {
      type: 'our-solution',
      title: 'Our Solution: The Complete Package',
      hero: 'The FIRST affordable, hands-free, ISL-focused AR solution in the world',
      coreFeatures: [
        {
          icon: Eye,
          title: 'Truly Hands-Free',
          description: 'Wearable AR glasses. Both hands completely free for natural ISL signing.',
          impact: 'Natural communication restored'
        },
        {
          icon: Cpu,
          title: 'Real-Time AI Recognition',
          description: 'MediaPipe + TensorFlow Lite process 500+ ISL signs in under 500ms end-to-end.',
          impact: 'Conversation-pace translation'
        },
        {
          icon: Shield,
          title: 'Privacy-First Design',
          description: 'All processing on-device. No video upload. No cloud dependency.',
          impact: 'Complete privacy assured'
        },
        {
          icon: Zap,
          title: 'Works Anywhere',
          description: 'Fully offline capable. No internet needed. Works in remote areas.',
          impact: '100% reliability everywhere'
        },
        {
          icon: Globe,
          title: 'ISL Native',
          description: 'Designed FOR Indian Sign Language FROM the start.',
          impact: 'Culturally appropriate for India'
        },
        {
          icon: DollarSign,
          title: 'Radically Affordable',
          description: '₹15,000 target vs ₹50K-₹2L for imports. 70-90% cost reduction.',
          impact: 'Accessible to middle-income families'
        }
      ]
    },

    // Slide 7: Why Our Project is Different
    {
      type: 'differentiation',
      title: 'Why Our Project is Fundamentally Different',
      differences: [
        { aspect: 'Problem Definition', others: 'Focus on understanding speech', ours: 'Focus on EXPRESSING thoughts', impact: 'Solves the correct direction' },
        { aspect: 'Language', others: 'ASL (American Sign Language)', ours: 'ISL (Indian Sign Language)', impact: 'Actually useful for 18M Indians' },
        { aspect: 'Form Factor', others: 'Smartphone/Gloves', ours: 'AR Glasses', impact: 'Hands-free, natural signing' },
        { aspect: 'Connectivity', others: 'WiFi/4G Cloud Processing', ours: '100% Offline', impact: 'Reliable in rural areas' }
      ]
    },

    // Slide 8: Why We're Making This
    {
      type: 'motivation',
      title: "Why We're Building This",
      personalStory: "During our research in Surat, we met families where parents couldn't talk to their own children without writing everything down. We saw talented individuals denied jobs because of a communication barrier. We visited the Surat School for the Deaf and realized that while the students were brilliant, the world outside was silent for them. This is not just a technology gap; it's a gap in human connection that we must fill. This project is dedicated to every student who has a dream but lacks the voice to share it. This is not acceptable in 2026.",
      reasons: [
        { icon: Heart, title: 'Social Justice', description: 'Communication is a fundamental human right. Without it, education, employment, and social participation are restricted by 90%.' },
        { icon: Target, title: 'Massive Unmet Need', description: 'Zero affordable solutions exist currently for ISL-to-Speech. 18 million Indians are waiting for a tool that understands their native language.' },
        { icon: Lightbulb, title: 'Technology is Ready', description: 'MediaPipe + TFLite enables edge AI today. Moore\'s Law has finally made the sensor and compute cost fit into a common man\'s budget.' },
        { icon: DollarSign, title: 'Indian Innovation', description: 'Indian problems need Indian solutions. We cannot wait for Western tech giants to prioritize ISL. We must build our own infrastructure of inclusion.' }
      ]
    },

    // Slide 9: Who This Helps - Primary Users
    {
      type: 'beneficiaries-primary',
      title: 'Primary Beneficiaries',
      users: [
        { segment: 'Deaf Community', size: '18+ Million', needs: ['Independece', 'Access', 'Equality'] },
        { segment: 'Speech-Impaired', size: '5+ Million', needs: ['Communication Path', 'Dignity'] },
        { segment: 'Families/Parents', size: '2+ Million', needs: ['Bonding', 'Education Support'] }
      ]
    },

    // Slide 10: Who This Helps - Secondary Users
    {
      type: 'beneficiaries-secondary',
      title: 'Institutional Beneficiaries',
      institutions: [
        { icon: Activity, sector: 'Healthcare', benefit: 'Accurate symptom reporting' },
        { icon: GraduationCap, sector: 'Education', benefit: 'Inclusive classrooms' },
        { icon: Building, sector: 'Govt Offices', benefit: 'Citizen service access' },
        { icon: Store, sector: 'Retail', benefit: 'Independent shopping' }
      ]
    },

    // Slide 11: Real-World Use Cases
    {
      type: 'use-cases',
      title: 'Real-World Use Cases',
      scenarios: [
        { location: '🏥 Hospitals', useCase: 'Explaining symptoms accurately' },
        { location: '🏫 Schools', useCase: 'Participating in discussions' },
        { location: '💼 Workplace', useCase: 'Meetings and interviews' },
        { location: '🏪 Markets', useCase: 'Daily errands and shopping' }
      ]
    },

    // Slide 12: Technical Deep Dive
    {
      type: 'tech-pipeline',
      title: 'Technical Pipeline',
      steps: [
        { num: 1, stage: 'Vision Capture', tech: 'Pi Camera 8MP', description: '640x480 @ 30FPS tracking area' },
        { num: 2, stage: 'Hand Tracking', tech: 'MediaPipe Hands', description: '21 landmarks per hand extracted' },
        { num: 3, stage: 'ML Recognition', tech: 'CNN-LSTM TFLite', description: 'Temporal gesture classification' },
        { num: 4, stage: 'Speech Output', tech: 'Offline TTS', description: 'Bone conduction audio output' }
      ]
    },

    // Slide 13: Component Tiers
    {
      type: 'component-tiers',
      title: 'Component Selection Strategy',
      tiers: [
        { name: 'GOOD (Basic)', price: '₹12,850', usage: 'Learning/MVP' },
        { name: 'BEST (SSIP)', price: '₹22,755', usage: 'Professional Prototype', recommended: true },
        { name: 'PERFECT (Scale)', price: '₹45,850', usage: 'Commercial Quality' }
      ]
    },

    /* Sourcing Slide Removed */

    // Slide 15: Timeline
    {
      type: 'detailed-timeline',
      title: 'Development Roadmap',
      phases: [
        { phase: 'Phase 1-2', task: 'Data Collection & Desktop MVP', weeks: 'Weeks 1-6' },
        { phase: 'Phase 3-4', task: 'Hardware Assembly & Integration', weeks: 'Weeks 7-12' },
        { phase: 'Phase 5-6', task: 'Mechanical Fab & Initial Testing', weeks: 'Weeks 13-15' },
        { phase: 'Phase 7-9', task: 'Field Testing & Documentation', weeks: 'Weeks 16-20' }
      ]
    },

    // Slide 16: Success Factors
    {
      type: 'success-factors',
      title: 'Why We Will Succeed',
      factors: [
        'Right problem definition (ISL-to-Speech)',
        'Proven tech stack (MediaPipe/TFLite)',
        'Deaf community involvement',
        'Radical affordability'
      ]
    },

    // Slide 17: Risk Mitigation
    {
      type: 'risk-mitigation',
      title: 'Risks & Mitigations',
      risks: [
        { risk: 'Accuracy In the Wild', solution: 'Diverse dataset & augmentation' },
        { risk: 'Hardware Heat', solution: 'Active thermal management' },
        { risk: 'Battery Life', solution: 'Dynamic power scaling' }
      ]
    },

    // Slide 18: Impact Metrics
    {
      type: 'impact-metrics',
      title: 'Social Impact Targets',
      targets: [
        { level: 'Short Term', metric: '500+ Signs recognized' },
        { level: 'Mid Term', metric: '10 Pilot deployments' },
        { level: 'Long Term', metric: '100,000+ Distributed units' }
      ]
    },

    // Slide 19: Business Model
    {
      type: 'business-model',
      title: 'Path to Sustainability',
      models: [
        'Social Enterprise (Section 8)',
        'Govt Partnership (ADIP Scheme)',
        'Tiered Cross-Subsidy Model'
      ]
    },

    // Slide 20: SSIP Ask
    {
      type: 'ssip-ask',
      title: 'The Ask from SSIP',
      financial: 'Total: ₹83,000 (Components, Collection, Tools)',
      nonFinancial: ['Fab Lab access', 'Expert Mentorship', 'Community connections']
    },

    // Slide 21: Thank You
    {
      type: 'thankyou',
      title: 'Thank You',
      subtitle: 'Questions?',
      tagline: 'Building for inclusion, one gesture at a time.'
    }
  ];

  /* ---------------- NAVIGATION ---------------- */
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

  /* ---------------- RENDER HELPERS ---------------- */
  const GlassCard = ({ children, className = "" }) => (
    <div className={`bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-2xl shadow-xl ${className}`}>
      {children}
    </div>
  );

  const SlideTitle = ({ children, color = "white" }) => (
    <h2 className={`text-4xl md:text-5xl font-extrabold mb-8 text-${color} tracking-tight`}>{children}</h2>
  );

  /* ---------------- RENDER SLIDE ---------------- */
  const renderSlide = (slide) => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 text-white p-12 overflow-auto relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
            </div>
            {slide.icon && <slide.icon className="w-24 h-24 mb-8 text-blue-300 animate-pulse" />}
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-center leading-tight">{slide.title}</h1>
            <h2 className="text-2xl md:text-3xl mb-4 opacity-90 font-light">{slide.subtitle}</h2>
            <div className="h-1 w-32 bg-blue-400 mb-8 rounded-full" />
            <p className="text-xl md:text-2xl mb-12 italic font-medium text-pink-200">{slide.tagline}</p>
            <div className="grid grid-cols-2 gap-8 text-center max-w-2xl">
              {slide.content.map((line, i) => (
                <div key={i} className="text-lg bg-white bg-opacity-10 px-4 py-2 rounded-lg border border-white border-opacity-20">{line}</div>
              ))}
            </div>
          </div>
        );

      case 'story':
        return (
          <div className="p-12 bg-gradient-to-br from-orange-50 to-rose-100 h-full flex flex-col overflow-auto">
            <SlideTitle color="gray-900">{slide.title}</SlideTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
              {slide.stories.map((s, i) => (
                <GlassCard key={i} className="p-10 bg-white bg-opacity-60 border-2 border-rose-200 hover:shadow-2xl transition-all">
                  <h3 className="text-4xl font-black mb-6 text-rose-600 flex items-center">
                    {s.scenario}
                  </h3>
                  <p className="text-2xl text-gray-700 mb-6 leading-relaxed font-medium">{s.description}</p>
                  <div className="inline-block px-6 py-3 bg-rose-100 text-rose-700 rounded-full text-lg font-black uppercase tracking-wider">
                    💔 {s.impact}
                  </div>
                </GlassCard>
              ))}
            </div>
            <div className="mt-8 bg-rose-600 text-white p-8 rounded-3xl shadow-2xl text-4xl font-black text-center animate-bounce border-4 border-rose-400">
              {slide.message}
            </div>
          </div>
        );

      case 'problem-deep':
        return (
          <div className="p-12 bg-gray-900 text-white h-full flex flex-col">
            <SlideTitle>{slide.title}</SlideTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-8 bg-red-900 bg-opacity-40 rounded-3xl border-2 border-red-500 shadow-lg shadow-red-500/20">
                <p className="text-base uppercase tracking-widest text-red-300 mb-2 font-bold">India</p>
                <p className="text-6xl font-black">{slide.globalStats.india}</p>
              </div>
              <div className="p-8 bg-blue-900 bg-opacity-40 rounded-3xl border-2 border-blue-500 shadow-lg shadow-blue-500/20">
                <p className="text-base uppercase tracking-widest text-blue-300 mb-2 font-bold">World</p>
                <p className="text-6xl font-black">{slide.globalStats.world}</p>
              </div>
              <div className="p-8 bg-purple-900 bg-opacity-40 rounded-3xl border-2 border-purple-500 shadow-lg shadow-purple-500/20">
                <p className="text-base uppercase tracking-widest text-purple-300 mb-2 font-bold">Growth</p>
                <p className="text-6xl font-black">{slide.globalStats.growth}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1 mt-8">
              {slide.barriers.map((b, i) => (
                <div 
                  key={i} 
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                  className={`relative cursor-pointer transition-all duration-700 group overflow-hidden rounded-[3rem] border-4 ${expandedCard === i ? 'col-span-2 row-span-2 z-50 scale-105 border-white shadow-2xl' : 'hover:scale-105 border-gray-700 hover:border-red-500 hover:shadow-2xl'}`}
                >
                  <div className={`h-full p-10 flex flex-col ${expandedCard === i ? 'bg-red-600 overflow-y-auto scrollbar-hide' : 'bg-gray-800'}`}>
                    <div className="flex justify-between items-start mb-6">
                      <p className={`text-sm uppercase tracking-[0.3em] font-black ${expandedCard === i ? 'text-red-100' : 'text-gray-500'}`}>{b.category}</p>
                      <Search size={24} className={`${expandedCard === i ? 'text-white animate-pulse' : 'text-gray-600 opacity-50'}`} />
                    </div>
                    
                    <div className="flex-1">
                      <p className={`text-7xl font-black mb-4 tracking-tighter transition-all ${expandedCard === i ? 'text-white' : 'text-red-500'}`}>{b.stat}</p>
                      <p className={`text-2xl font-bold mb-6 leading-tight transition-all ${expandedCard === i ? 'text-red-50' : 'text-gray-300'}`}>{b.description}</p>
                      
                      {expandedCard === i && (
                        <div className="mt-8 p-8 bg-black bg-opacity-20 rounded-3xl border border-white border-opacity-10 animate-fade-in shadow-inner">
                          <p className="text-xl font-black mb-4 uppercase tracking-[0.2em] text-red-200 bg-red-800 bg-opacity-50 px-4 py-2 rounded-full inline-block">Systemic Consequence:</p>
                          <p className="text-2xl leading-relaxed italic font-medium">"{b.consequence}"</p>
                        </div>
                      )}
                    </div>
                    
                    <div className={`mt-auto pt-6 border-t border-white border-opacity-10 flex items-center justify-between text-base font-black uppercase tracking-widest ${expandedCard === i ? 'text-white' : 'text-red-400 group-hover:text-red-300'}`}>
                      <span>{expandedCard === i ? 'Click to close' : 'Click to analyze →'}</span>
                      {expandedCard !== i && <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center animate-bounce group-hover:bg-red-500 group-hover:border-red-500 group-hover:text-white transition-all">↓</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-indigo-600 text-white p-8 rounded-[2.5rem] flex items-center gap-8 border-b-8 border-indigo-800 shadow-2xl transform hover:-translate-y-2 transition-transform">
              <div className="w-20 h-20 bg-white bg-opacity-10 rounded-3xl flex items-center justify-center">
                <Info size={48} className="animate-pulse" />
              </div>
              <p className="text-2xl font-bold leading-snug">{slide.legalContext}</p>
            </div>
          </div>
        );

      case 'our-solution':
        return (
          <div className="p-12 bg-gradient-to-br from-indigo-50 to-blue-100 h-full flex flex-col overflow-auto">
            <SlideTitle color="gray-900 text-center">{slide.title}</SlideTitle>
            <div className="bg-indigo-600 text-white py-4 px-8 rounded-full self-center mb-12 text-xl font-bold shadow-lg">
              {slide.hero}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
              {slide.coreFeatures.map((f, i) => (
                <GlassCard key={i} className="p-6 bg-white flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                    <f.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-indigo-900">{f.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{f.description}</p>
                  <div className="mt-auto text-indigo-600 font-bold text-xs uppercase tracking-widest">{f.impact}</div>
                </GlassCard>
              ))}
            </div>
          </div>
        );

/* tech-pipeline moved below */

      case 'detailed-timeline':
        return (
          <div className="p-12 bg-indigo-900 text-white h-full flex flex-col">
            <SlideTitle>{slide.title}</SlideTitle>
            <div className="grid grid-cols-1 gap-4 flex-1">
              {slide.phases.map((p, i) => (
                <div key={i} className="flex items-center gap-6 bg-white bg-opacity-5 p-6 rounded-2xl border border-white border-opacity-10">
                  <div className="w-32 text-indigo-300 font-black text-xl">{p.phase}</div>
                  <div className="h-12 w-px bg-white bg-opacity-20" />
                  <div className="flex-1 text-2xl font-bold">{p.task}</div>
                  <div className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                    {p.weeks}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'solution-gaps':
        return (
          <div className="p-12 bg-gray-50 h-full flex flex-col overflow-auto">
            <SlideTitle color="gray-900">{slide.title}</SlideTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
              {slide.solutions.map((s, j) => (
                <div 
                  key={j} 
                  onClick={() => setExpandedCard(expandedCard === j ? null : j)}
                  className={`group relative cursor-pointer transition-all duration-500 overflow-hidden rounded-[2.5rem] ${expandedCard === j ? 'col-span-2 shadow-2xl scale-105 z-50' : 'hover:scale-105'}`}
                >
                  <div className={`h-full p-10 border-l-8 flex flex-col transition-all ${expandedCard === j ? 'bg-red-600 border-white text-white overflow-y-auto scrollbar-hide' : 'bg-white border-red-500 shadow-xl'}`}>
                    <h3 className={`font-black mb-6 italic tracking-tight uppercase transition-all ${expandedCard === j ? 'text-4xl text-white' : 'text-3xl text-red-600'}`}>
                      {s.solution}
                    </h3>
                    <div className="flex-1">
                      <ul className="space-y-4 mb-8">
                        {s.problems.map((p, k) => (
                          <li key={k} className={`flex items-start gap-4 text-xl font-medium transition-all ${expandedCard === j ? 'text-red-50' : 'text-gray-700'}`}>
                            <AlertCircle className={`w-6 h-6 mt-1 flex-shrink-0 transition-all ${expandedCard === j ? 'text-white' : 'text-red-400'}`} />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {expandedCard === j && (
                        <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-2xl border border-white border-opacity-20 animate-fade-in mb-8">
                          <p className="text-2xl font-black mb-2 uppercase tracking-tight text-white">Market Reality:</p>
                          <p className="text-xl leading-relaxed italic opacity-90 text-red-50">
                            This solution remains a major barrier in the Indian context due to extreme costs and cultural disconnection.
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className={`mt-auto pt-6 border-t-2 font-black text-2xl uppercase tracking-tighter transition-all ${expandedCard === j ? 'text-white border-white border-opacity-20' : 'text-red-700 border-gray-100'}`}>
                      {s.verdict}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 bg-gray-900 text-white rounded-[2.5rem] text-center text-3xl font-black border-t-8 border-blue-500 shadow-2xl">
              {slide.gap}
            </div>
          </div>
        );

      case 'competitive-detailed':
        return (
          <div className="p-12 bg-slate-900 text-white h-full flex flex-col overflow-auto">
            <SlideTitle>{slide.title}</SlideTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
              {slide.competitors.map((c, i) => (
                <div 
                  key={i} 
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                  className={`p-10 rounded-[2.5rem] border-2 flex flex-col cursor-pointer transition-all duration-500 overflow-hidden ${expandedCard === i ? 'col-span-2 bg-slate-700 border-blue-400 scale-105 z-50' : 'bg-slate-800 border-slate-700 hover:border-slate-500 hover:scale-105'}`}
                >
                  <div className={`h-full flex flex-col ${expandedCard === i ? 'overflow-y-auto scrollbar-hide' : ''}`}>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className={`font-black text-blue-400 leading-tight ${expandedCard === i ? 'text-6xl' : 'text-4xl'}`}>{c.name}</h3>
                        <p className="text-sm text-slate-400 uppercase tracking-widest leading-none mt-2 font-black">{c.tech}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-black bg-slate-700 px-6 py-2 rounded-full border border-slate-600">{c.price}</span>
                        <p className="text-xs text-slate-500 mt-2 uppercase leading-none font-bold">{c.launch}</p>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className={`space-y-4 mb-6 ${expandedCard === i ? 'grid grid-cols-2 gap-8' : ''}`}>
                        <div className="space-y-3">
                          <p className="text-xs font-black uppercase tracking-widest text-red-400 mb-2">Critical Failures:</p>
                          {c.limitations.map((l, j) => (
                            <div key={j} className="flex items-start gap-3 text-lg text-slate-300 font-medium">
                              <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0 shadow-lg shadow-red-500/50" />
                              <span>{l}</span>
                            </div>
                          ))}
                        </div>
                        {expandedCard === i && (
                          <div className="p-8 bg-blue-900 bg-opacity-30 rounded-3xl border border-blue-500 border-opacity-30 animate-fade-in flex flex-col justify-center">
                            <p className="text-sm font-black uppercase tracking-widest text-blue-400 mb-4 italic leading-none">Why we win:</p>
                            <p className="text-2xl font-bold text-blue-50 leading-relaxed italic">"{c.moreInfo}"</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className={`mt-auto pt-6 border-t border-slate-700 font-black tracking-tight ${expandedCard === i ? 'text-4xl text-red-400' : 'text-xl text-red-500'}`}>
                      Verdict: {c.verdict}
                    </div>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black mt-4 opacity-50">
                    {expandedCard === i ? 'Click to minimize' : 'Click to expand for deep-dive →'}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center text-slate-400 text-base font-black uppercase tracking-[0.4em] animate-pulse">
              {slide.summary}
            </div>
          </div>
        );

      case 'differentiation':
        return (
          <div className="p-12 bg-white h-full flex flex-col overflow-auto">
            <SlideTitle color="indigo-900">{slide.title}</SlideTitle>
            <div className="flex-1 border rounded-3xl overflow-hidden shadow-2xl">
              <table className="w-full h-full border-collapse">
                <thead>
                  <tr className="bg-indigo-900 text-white">
                    <th className="p-6 text-left uppercase tracking-widest text-sm">Aspect</th>
                    <th className="p-6 text-left uppercase tracking-widest text-sm bg-indigo-800">Existing Solutions</th>
                    <th className="p-6 text-left uppercase tracking-widest text-sm bg-blue-600">Our Project</th>
                    <th className="p-6 text-left uppercase tracking-widest text-sm">Our Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {slide.differences.map((d, i) => (
                    <tr key={i} className="hover:bg-blue-50 transition-colors">
                      <td className="p-6 font-black text-gray-900">{d.aspect}</td>
                      <td className="p-6 text-gray-400 italic line-through">{d.others}</td>
                      <td className="p-6 font-bold text-blue-600 bg-blue-50">{d.ours}</td>
                      <td className="p-6 font-bold text-indigo-900">{d.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'motivation':
        return (
          <div className="p-12 bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900 text-white h-full flex flex-col overflow-auto">
            <SlideTitle>{slide.title}</SlideTitle>
            <div className="mb-12 p-12 bg-white bg-opacity-5 rounded-[2.5rem] border-2 border-white border-opacity-10 shadow-inner italic text-4xl font-light leading-snug text-blue-100 relative group overflow-hidden">
              <span className="absolute -top-10 -left-4 text-[15rem] text-white opacity-10 font-serif">"</span>
              <div className="relative z-10 transition-all duration-500 group-hover:px-4">
                {slide.personalStory}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 flex-1">
              {slide.reasons.map((r, i) => (
                <GlassCard 
                  key={i} 
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                  className={`p-10 text-center flex flex-col items-center cursor-pointer transition-all duration-500 overflow-hidden ${expandedCard === i ? 'bg-indigo-600 scale-110 z-50' : 'hover:bg-white hover:bg-opacity-20'}`}
                >
                  <div className={`h-full flex flex-col items-center ${expandedCard === i ? 'overflow-y-auto scrollbar-hide' : ''}`}>
                    <div className="w-20 h-20 bg-blue-500 rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/20 group-hover:rotate-12 transition-transform">
                      <r.icon size={40} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-black mb-6 text-white tracking-tighter uppercase">{r.title}</h3>
                    <p className={`leading-relaxed font-bold transition-all ${expandedCard === i ? 'text-2xl text-white' : 'text-lg text-blue-200'}`}>{r.description}</p>
                    
                    {expandedCard === i && (
                      <div className="mt-8 pt-8 border-t border-white border-opacity-20 animate-fade-in text-base font-black uppercase tracking-widest text-yellow-400">
                        Vision Rooted in Surat
                      </div>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        );

      case 'beneficiaries-primary':
        return (
          <div className="p-12 bg-white h-full flex flex-col overflow-auto">
            <SlideTitle color="gray-900">{slide.title}</SlideTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 flex-1 pt-12">
              {slide.users.map((u, i) => (
                <div 
                  key={i} 
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                  className={`group relative cursor-pointer transition-all duration-500 overflow-hidden ${expandedCard === i ? 'scale-110 z-50' : 'hover:-translate-y-4'}`}
                >
                  <div className={`absolute inset-0 rounded-[3rem] translate-x-3 translate-y-3 transition-transform ${expandedCard === i ? 'bg-pink-600' : 'bg-indigo-600'}`} />
                  <div className={`relative h-full border-4 p-12 rounded-[3rem] flex flex-col transition-colors ${expandedCard === i ? 'bg-indigo-900 border-white text-white overflow-y-auto scrollbar-hide' : 'bg-white border-indigo-600'}`}>
                    <span className={`text-xl font-black uppercase tracking-widest mb-4 ${expandedCard === i ? 'text-indigo-300' : 'text-indigo-600'}`}>{u.size} Users</span>
                    <h3 className={`font-black mb-10 leading-none ${expandedCard === i ? 'text-6xl text-white' : 'text-5xl text-gray-900'}`}>{u.segment}</h3>
                    
                    <div className="flex-1">
                      <div className="space-y-6">
                        {u.needs.map((n, j) => (
                          <div key={j} className={`flex items-center gap-4 text-2xl font-black tracking-tight ${expandedCard === i ? 'text-white' : 'text-gray-700'}`}>
                            <CheckCircle className={`w-8 h-8 ${expandedCard === i ? 'text-indigo-400' : 'text-indigo-600'}`} />
                            {n}
                          </div>
                        ))}
                      </div>
                      
                      {expandedCard === i && (
                        <div className="mt-12 p-6 bg-white bg-opacity-10 rounded-2xl border border-white border-opacity-20 animate-fade-in">
                          <p className="text-lg font-bold leading-relaxed italic text-white">"Providing these users with real-time expression tools is our core mission."</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'beneficiaries-secondary':
        return (
          <div className="p-12 bg-gray-50 h-full flex flex-col overflow-auto">
            <SlideTitle color="gray-900 text-center">{slide.title}</SlideTitle>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 flex-1 mt-12 pb-12">
              {slide.institutions.map((inst, i) => (
                <GlassCard 
                  key={i} 
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                  className={`p-10 bg-white flex flex-col items-center text-center group cursor-pointer transition-all duration-500 rounded-[3rem] overflow-hidden ${expandedCard === i ? 'scale-110 shadow-indigo-200 shadow-2xl z-50 bg-indigo-50 border-indigo-400 border-2' : 'hover:-translate-y-4 hover:shadow-2xl'}`}
                >
                  <div className={`h-full flex flex-col items-center ${expandedCard === i ? 'overflow-y-auto scrollbar-hide' : ''}`}>
                    <div className={`w-24 h-24 text-white rounded-[2rem] flex items-center justify-center mb-10 shadow-xl transition-all ${expandedCard === i ? 'bg-pink-600 scale-125' : 'bg-indigo-600 rotate-3 group-hover:rotate-0'}`}>
                      <inst.icon size={50} />
                    </div>
                    <h3 className={`font-black mb-6 leading-none transition-all ${expandedCard === i ? 'text-5xl text-indigo-900' : 'text-3xl text-gray-900'}`}>{inst.sector}</h3>
                    <p className={`font-black uppercase tracking-tighter transition-all ${expandedCard === i ? 'text-3xl text-pink-600' : 'text-xl text-indigo-600'}`}>{inst.benefit}</p>
                    
                    {expandedCard === i && (
                      <div className="mt-8 p-6 bg-indigo-600 text-white rounded-3xl animate-fade-in text-lg font-bold italic">
                        "Bridging the communication gap in {inst.sector} saves lives and empowers citizens."
                      </div>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        );

      case 'use-cases':
        return (
          <div className="p-12 bg-indigo-600 text-white h-full flex flex-col overflow-auto">
            <SlideTitle>{slide.title}</SlideTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex-1 pt-12 pb-12">
              {slide.scenarios.map((sc, i) => (
                <div 
                  key={i} 
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                  className={`flex items-center gap-10 bg-white bg-opacity-10 p-12 rounded-[3.5rem] border-2 border-white border-opacity-20 cursor-pointer transition-all duration-500 overflow-hidden ${expandedCard === i ? 'col-span-2 scale-105 bg-opacity-30 border-opacity-100 z-50 shadow-2xl' : 'hover:bg-opacity-20 hover:scale-105'}`}
                >
                  <div className={`h-full w-full flex items-center gap-10 ${expandedCard === i ? 'overflow-y-auto scrollbar-hide' : ''}`}>
                    <div className={`transition-all duration-500 ${expandedCard === i ? 'text-9xl' : 'text-7xl group-hover:scale-125'}`}>{sc.location.split(' ')[0]}</div>
                    <div className="flex-1">
                      <h3 className={`font-black mb-4 transition-all ${expandedCard === i ? 'text-6xl' : 'text-4xl'}`}>{sc.location.split(' ')[1]}</h3>
                      <p className={`font-light text-blue-100 italic transition-all ${expandedCard === i ? 'text-3xl' : 'text-2xl'}`}>{sc.useCase}</p>
                      
                      {expandedCard === i && (
                        <div className="mt-8 pt-8 border-t border-white border-opacity-30 animate-fade-in">
                          <p className="text-xl font-bold italic leading-relaxed">
                            Whether it's a routine checkup or an emergency, our AR glasses ensure that the voice of the patient is heard clearly and instantly.
                          </p>
                        </div>
                      )}
                    </div>
                    <div className={`ml-auto font-black uppercase tracking-widest text-xs transition-opacity ${expandedCard === i ? 'opacity-100' : 'opacity-30'}`}>
                      {expandedCard === i ? 'Minimize' : 'Expand →'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'component-tiers':
        return (
          <div className="p-12 bg-white h-full flex flex-col overflow-auto">
            <SlideTitle color="gray-900">{slide.title}</SlideTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1 mt-8">
              {slide.tiers.map((t, i) => (
                <div key={i} className={`relative p-10 rounded-3xl border-2 flex flex-col ${t.recommended ? 'border-indigo-600 bg-indigo-50 shadow-2xl scale-105 z-10' : 'border-gray-200 bg-white shadow-lg'}`}>
                  {t.recommended && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">Recommended</div>}
                  <h3 className="text-2xl font-black mb-2 text-gray-900">{t.name}</h3>
                  <div className="text-4xl font-black text-indigo-600 mb-6">{t.price}</div>
                  <div className="h-px bg-gray-200 w-full mb-6" />
                  <p className="text-gray-600 font-medium mb-8 leading-relaxed italic">"{t.usage}"</p>
                  <button className={`mt-auto w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all ${t.recommended ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
                    Select Tier
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'tech-pipeline':
        return (
          <div className="p-12 bg-white h-full flex flex-col overflow-auto">
            <SlideTitle color="indigo-900">{slide.title}</SlideTitle>
            <div className="flex-1 flex flex-col justify-between pt-8 pb-8">
              {slide.steps.map((s, i) => (
                <div 
                  key={i} 
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                  className={`flex items-center gap-10 group cursor-pointer transition-all duration-500 overflow-hidden ${expandedCard === i ? 'bg-indigo-50 p-8 rounded-[2rem] border-2 border-indigo-200' : 'hover:translate-x-4'}`}
                >
                  <div className={`h-full w-full flex items-center gap-10 ${expandedCard === i ? 'overflow-y-auto scrollbar-hide' : ''}`}>
                    <div className={`w-24 h-24 text-white rounded-3xl flex items-center justify-center font-black transition-all ${expandedCard === i ? 'bg-indigo-800 text-6xl shadow-2xl' : 'bg-indigo-600 text-4xl group-hover:scale-110 shadow-lg'}`}>
                      {s.num}
                    </div>
                    <div className="flex-1 border-b border-indigo-50 pb-6 group-last:border-none">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className={`font-black text-gray-900 transition-all ${expandedCard === i ? 'text-5xl' : 'text-3xl'}`}>{s.stage}</h3>
                        <span className={`font-black font-mono text-indigo-600 bg-indigo-50 px-6 py-2 rounded-full transition-all ${expandedCard === i ? 'text-2xl' : 'text-base shadow-sm'}`}>{s.tech}</span>
                      </div>
                      <p className={`text-gray-600 font-medium transition-all ${expandedCard === i ? 'text-2xl mt-4 leading-relaxed' : 'text-xl'}`}>{s.description}</p>
                      
                      {expandedCard === i && (
                        <div className="mt-6 p-6 bg-white rounded-2xl border border-indigo-100 animate-fade-in shadow-inner">
                          <p className="text-lg font-black text-indigo-800 uppercase tracking-widest mb-2">Technical Insight:</p>
                          <p className="text-xl italic text-gray-500">"Using lightweight models optimized for the Pi 5 ensuring &lt;500ms latency for a natural conversation pace."</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'success-factors':
        return (
          <div className="p-12 bg-indigo-900 text-white h-full flex flex-col">
            <SlideTitle>{slide.title}</SlideTitle>
            <div className="grid grid-cols-2 gap-10 flex-1 mt-12 pb-12">
              {slide.factors.map((f, i) => (
                <div 
                  key={i} 
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                  className={`flex items-center gap-10 p-12 rounded-[3.5rem] border-2 cursor-pointer transition-all duration-500 ${expandedCard === i ? 'bg-white text-indigo-900 scale-105 z-50 shadow-2xl overflow-hidden' : 'bg-white bg-opacity-5 border-white border-opacity-10 hover:bg-opacity-10'}`}
                >
                  <div className={`h-full w-full flex items-center gap-10 ${expandedCard === i ? 'overflow-y-auto scrollbar-hide' : ''}`}>
                    <div className={`w-28 h-28 bg-blue-500 rounded-[2rem] flex items-center justify-center text-7xl shadow-2xl transition-all ${expandedCard === i ? 'scale-110 rotate-12' : ''}`}>
                      ✨
                    </div>
                    <div className="flex-1">
                      <div className={`font-black tracking-tight leading-tight transition-all mb-4 ${expandedCard === i ? 'text-5xl uppercase' : 'text-3xl'}`}>{f}</div>
                      {expandedCard === i && (
                        <div className="pt-6 border-t border-indigo-100 animate-fade-in">
                          <p className="text-xl font-bold italic text-indigo-600">
                            "This key factor ensures our project remains sustainable, scalable, and deeply impactful for the community in Surat."
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'risk-mitigation':
        return (
          <div className="p-12 bg-white h-full flex flex-col overflow-auto">
            <SlideTitle color="gray-900">{slide.title}</SlideTitle>
            <div className="grid grid-cols-2 gap-10 flex-1 mt-12 pb-12">
              {slide.risks.map((risk, i) => (
                <div 
                  key={i} 
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                  className={`flex items-stretch gap-0 rounded-[3rem] overflow-hidden border-4 shadow-2xl cursor-pointer transition-all duration-500 ${expandedCard === i ? 'scale-105 z-50 border-indigo-600' : 'hover:border-indigo-400'}`}
                >
                  <div className={`h-full w-full flex items-stretch transition-all ${expandedCard === i ? 'overflow-y-auto scrollbar-hide' : ''}`}>
                    <div className={`p-12 flex flex-col justify-center border-r-4 w-1/3 transition-colors ${expandedCard === i ? 'bg-red-600 text-white' : 'bg-red-50'}`}>
                      <div className={`text-base font-black uppercase tracking-widest mb-4 ${expandedCard === i ? 'text-red-100' : 'text-red-500'}`}>The Risk</div>
                      <div className="text-3xl font-black leading-tight">{risk.risk}</div>
                    </div>
                    <div className={`p-12 flex flex-col justify-center flex-1 transition-colors ${expandedCard === i ? 'bg-indigo-900 text-white' : 'bg-green-50'}`}>
                      <div className={`text-base font-black uppercase tracking-widest mb-4 ${expandedCard === i ? 'text-indigo-300' : 'text-green-500'}`}>Our Mitigation</div>
                      <div className={`font-bold flex items-start gap-6 transition-all ${expandedCard === i ? 'text-3xl' : 'text-2xl text-gray-800'}`}>
                        <Shield className={`flex-shrink-0 w-10 h-10 ${expandedCard === i ? 'text-indigo-400' : 'text-green-600'}`} />
                        <div>
                          {risk.solution}
                          {expandedCard === i && (
                            <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-2xl border border-white border-opacity-20 animate-fade-in text-lg font-medium italic">
                              "By prioritizing {risk.solution.toLowerCase()} in our Phase 4 engineering, we eliminate this barrier to adoption."
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'impact-metrics':
        return (
          <div className="p-12 bg-gray-900 text-white h-full flex flex-col">
            <SlideTitle>{slide.title}</SlideTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 flex-1 mt-12 pb-12">
              {slide.targets.map((t, i) => (
                <div 
                  key={i} 
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                  className={`flex flex-col p-12 rounded-[3.5rem] border-4 cursor-pointer relative overflow-hidden transition-all duration-500 ${expandedCard === i ? 'bg-blue-900 border-white scale-110 z-50' : 'bg-gray-800 border-gray-700 hover:border-blue-500 shadow-xl'}`}
                >
                  <div className={`h-full flex flex-col ${expandedCard === i ? 'overflow-y-auto scrollbar-hide' : ''}`}>
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                      <TrendingUp size={160} />
                    </div>
                    <p className={`font-black uppercase tracking-[0.3em] text-sm mb-6 ${expandedCard === i ? 'text-blue-300' : 'text-blue-400'}`}>{t.level}</p>
                    <p className={`font-black mb-8 tracking-tighter leading-none transition-all ${expandedCard === i ? 'text-7xl text-white' : 'text-5xl'}`}>{t.metric}</p>
                    
                    {expandedCard === i && (
                      <div className="mt-auto p-6 bg-white bg-opacity-10 rounded-3xl animate-fade-in">
                        <p className="text-xl font-bold tracking-tight italic">
                          Baseline established from pilot data in Surat, aiming for 98% accuracy in quiet environments.
                        </p>
                      </div>
                    )}
                    
                    <div className={`h-2 w-full mt-auto rounded-full origin-left transition-all duration-1000 ${expandedCard === i ? 'bg-yellow-400 scale-x-100' : 'bg-blue-500 scale-x-50'}`} />
                  </div>
                </div>  
              ))}
            </div>
          </div>
        );

      case 'business-model':
        return (
          <div className="p-12 bg-white h-full flex flex-col overflow-auto">
            <SlideTitle color="gray-900">{slide.title}</SlideTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 flex-1 mt-12 pb-12">
              {slide.models.map((m, i) => (
                <div 
                  key={i} 
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                  className={`flex flex-col justify-center items-center p-12 border-4 rounded-[4rem] text-center cursor-pointer transition-all duration-700 overflow-hidden ${expandedCard === i ? 'bg-indigo-600 border-indigo-900 text-white scale-110 z-50 shadow-2xl shadow-indigo-400' : 'bg-indigo-50 border-indigo-100 hover:bg-indigo-100 shadow-lg'}`}
                >
                  <div className={`h-full flex flex-col justify-center items-center ${expandedCard === i ? 'overflow-y-auto scrollbar-hide' : ''}`}>
                    <div className={`w-28 h-28 rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl transition-all ${expandedCard === i ? 'bg-white text-indigo-600 scale-125 rotate-12' : 'bg-indigo-600 text-white'}`}>
                      <Briefcase size={48} />
                    </div>
                    <p className={`font-black leading-tight tracking-tighter transition-all ${expandedCard === i ? 'text-5xl' : 'text-3xl'}`}>{m}</p>
                    
                    {expandedCard === i && (
                      <div className="mt-8 pt-8 border-t border-white border-opacity-20 animate-fade-in">
                        <p className="text-xl font-bold italic opacity-90">
                          "Leveraging existing government subsidies to ensure that cost is never a barrier to communication."
                        </p>
                      </div>
                    )}
                    
                    <div className={`mt-10 text-sm font-black uppercase tracking-[0.3em] transition-opacity ${expandedCard === i ? 'opacity-100 text-indigo-200' : 'opacity-0'}`}>
                      Scalable Strategy
                    </div>
                  </div>
                </div>  
              ))}
            </div>
          </div>
        );

      case 'ssip-ask':
        return (
          <div className="p-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white h-full flex flex-col overflow-auto">
            <SlideTitle>{slide.title}</SlideTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-1 mt-8">
              <div className="bg-white bg-opacity-10 p-12 rounded-[3rem] border border-white border-opacity-20 flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-indigo-600 font-black text-2xl">₹</div>
                  <h3 className="text-3xl font-black">Financial Support</h3>
                </div>
                <div className="text-6xl font-black text-blue-300 mb-8 tracking-tighter">
                  {slide.financial.includes(': ') ? slide.financial.split(': ')[1] : slide.financial}
                </div>
                <p className="text-blue-100 text-lg opacity-60 mt-auto italic">Directly used for hardware R&D and data collection in the Surat community.</p>
              </div>
              <div className="bg-white bg-opacity-5 p-12 rounded-[3rem] border border-white border-opacity-10 space-y-8">
                <h3 className="text-3xl font-black flex items-center gap-4 mb-4">
                  <Zap className="text-yellow-400" />
                  Non-Financial Support
                </h3>
                {slide.nonFinancial.map((item, i) => (
                  <div key={i} className="flex items-center gap-6 text-2xl font-bold">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'thankyou':
        return (
          <div className="flex flex-col items-center justify-center h-full bg-indigo-600 text-white p-12 text-center overflow-auto">
            <Send className="w-20 h-20 mb-12 text-blue-300 animate-bounce" />
            <h1 className="text-8xl font-black mb-6 tracking-tighter">{slide.title}</h1>
            <h2 className="text-4xl font-light mb-12 text-blue-200">{slide.subtitle}</h2>
            <div className="h-1 w-64 bg-white bg-opacity-20 mb-12" />
            <p className="text-2xl font-medium tracking-widest uppercase text-blue-100">{slide.tagline}</p>
          </div>
        );

      default:
        return (
          <div className="p-12 bg-gray-50 h-full overflow-auto flex flex-col">
            <SlideTitle color="gray-900">{slide.title}</SlideTitle>
            <div className="grid grid-cols-2 gap-8 flex-1">
              <GlassCard className="p-8 bg-white overflow-auto col-span-2">
                <pre className="text-indigo-600 font-mono text-lg whitespace-pre-wrap">
                  {JSON.stringify(slide, null, 2)}
                </pre>
              </GlassCard>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gray-100 font-sans select-none overflow-hidden">
      {/* ProgressBar */}
      <div className="w-full h-2 bg-gray-200">
        <div 
          className="h-full bg-indigo-600 transition-all duration-500 ease-out" 
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      <div className="flex-1 relative overflow-hidden">
        {renderSlide(slides[currentSlide])}
      </div>

      {/* Navigation Footer */}
      <div className="h-20 bg-white border-t border-gray-200 flex items-center justify-between px-12 shadow-2xl z-50">
        <div className="flex items-center gap-6">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-3 rounded-full hover:bg-indigo-50 disabled:opacity-30 disabled:hover:bg-transparent text-indigo-600 transition-all active:scale-90"
          >
            <ChevronLeft size={32} />
          </button>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest font-black text-gray-400">Slide</span>
            <span className="text-xl font-black text-indigo-600 leading-none">
              {String(currentSlide + 1).padStart(2, '0')}<span className="text-gray-300 mx-1">/</span>{slides.length}
            </span>
          </div>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-3 rounded-full hover:bg-indigo-50 disabled:opacity-30 disabled:hover:bg-transparent text-indigo-600 transition-all active:scale-90"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4 text-xs font-bold text-gray-400">
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded shadow-sm">Space</kbd>
            <span>Next</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded shadow-sm">← Back</kbd>
            <span>Previous</span>
          </div>
        </div>

        <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] truncate max-w-xs">
          {slides[currentSlide].title}
        </h3>
      </div>
    </div>
  );
};

export default ComprehensivePresentation;
