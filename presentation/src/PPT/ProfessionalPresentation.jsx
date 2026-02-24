import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Heart, DollarSign, Award, Target, Zap, Shield, Globe2, Printer, X, Activity, Eye, PlayCircle, BarChart, CheckCircle2 } from 'lucide-react';

const ProfessionalPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPrintView, setIsPrintView] = useState(false);

  const slides = [
    // Slide 1: Introduction (Merge Title + Intro)
    {
      type: 'introduction-v2',
      title: 'Real-Time Sign Language to Speech AR Glasses',
      team: 'Team Inno8',
      tagline: 'Breaking Communication Barriers Through Innovation',
      mission: 'To give voice to 63 million Indians who deserve to be heard by building affordable, accessible wearable technology.',
      context: 'A team of Computer Engineering students applying AI/ML, IoT, and embedded systems to solve critical accessibility challenges in partnership with the Gujarat Deaf Association.'
    },

    // Slide 2: Business Overview / Description (Reframe Problem)
    {
      type: 'business-overview',
      title: 'Business Overview: The Communication Gap',
      problem: '63 million deaf Indians face severe isolation. Only 340 certified interpreters exist (1:185,000 ratio).',
      impact: [
        { label: 'Healthcare', value: '67%', desc: 'cannot communicate independently in ERs' },
        { label: 'Education', value: '80%', desc: 'dropout rate due to lack of support' },
        { label: 'Career', value: '74%', desc: 'blocked from leadership roles' }
      ],
      opportunity: 'A massive unaddressed need for independent, real-time communication that doesn\'t rely on scarce human interpreters or occupied hands.',
      whyNow: 'Recent advances in edge AI (MediaPipe/TensorFlow Lite) and low-power hardware (Raspberry Pi Zero) make a highly accurate, affordable wearable possible for the first time.'
    },

    // Slide 3: Strategy (Go-to-Market)
    {
      type: 'strategy',
      title: 'Business Model & Scaling Strategy',
      subtitle: 'Triple-channel Scalable Approach for Mass Impact',
      channels: [
        { phase: 'Phase 1: B2G (Primary)', name: 'ADIP Scheme Integration', desc: 'Govt subsidy provides devices FREE to BPL users. 1.8M beneficiaries served 2014-2020.', icon: '🏛️' },
        { phase: 'Phase 2: B2C', name: 'Direct to Consumer', desc: 'Targeting urban professionals and students via e-commerce and NGO partnerships at ₹15,000 retail.', icon: '👤' },
        { phase: 'Phase 3: B2B', name: 'Corporate CSR', desc: 'Partnering with inclusive employers (Amazon, Lemon Tree) to equip deaf employees.', icon: '🏢' }
      ],
      roadmap: [
        { time: 'Months 1-4', milestone: 'MVP & 500 Sign Model' },
        { time: 'Months 5-6', milestone: 'Field Testing (Surat Civil Hospital)' },
        { time: 'Months 7-8', milestone: 'BIS Certification & Pilot Batch' }
      ]
    },

    // Slide 4: Competitive Analysis & Advantages
    {
      type: 'competitive-analysis',
      title: 'Competitive Analysis & Our Advantages',
      competitors: [
        { name: 'Our AR Glasses', price: '₹15,000 (or Free via ADIP)', feature: 'Real-time ISL to Audio', handsFree: 'Yes', privacy: 'On-device', focus: 'ISL' },
        { name: 'XRAI Glass (UK)', price: '₹40,000+', feature: 'Speech to Text only', handsFree: 'Yes', privacy: 'Cloud-dependent', focus: 'English' },
        { name: 'Smartphone Apps', price: 'Free - ₹5,000', feature: 'Basic Translation', handsFree: 'No', privacy: 'Cloud API', focus: 'ASL/ISL' },
        { name: 'Human Interpreters', price: '₹30K-60K / month', feature: 'Full Translation', handsFree: 'Yes', privacy: 'Third-party present', focus: 'ISL' }
      ],
      advantages: [
        { title: 'Extreme Affordability', desc: '₹15,000 price is a 70-90% reduction vs competitors' },
        { title: 'Highly Scalable', desc: 'Software-first architecture allows rapid replication' },
        { title: 'Truly Hands-Free', desc: 'Allows natural two-handed ISL signing' },
        { title: '100% Private', desc: 'Zero cloud dependency, all processing on-device' }
      ]
    },

    // Slide 5: Market Opportunity
    {
      type: 'market-opportunity',
      title: 'Market Opportunity',
      metrics: [
        { value: '63M', label: 'Total Addressable Market', desc: 'Deaf Indians (WHO Estimate)' },
        { value: '7.06M', label: 'Serviceable Available Market', desc: 'Certified Disability (Census)' },
        { value: '50K', label: 'Serviceable Obtainable Market', desc: 'Early Adopters (Year 1)' }
      ],
      growth: 'Assistive Tech market growing at 12.8% CAGR',
      catalyst: 'Supreme Court recently mandated sign language accessibility as a fundamental right.'
    },

    // Slide 6: Product Description 1
    {
      type: 'product-description',
      title: 'Description of Product: The User Experience',
      tagline: 'A seamless, wearable interpreter bridging the silent gap',
      features: [
        { icon: Users, title: 'Natural Interaction', desc: 'Speaker sees translation on OLED, glasses speak the translation aloud via bone conduction.' },
        { icon: Zap, title: 'Low Latency', desc: 'Under 500ms delay from sign to speech ensures conversation flows naturally.' },
        { icon: Shield, title: 'Privacy First', desc: 'No video is recorded or sent to the cloud. Models run entirely on the glasses.' },
        { icon: Activity, title: 'All-Day Use', desc: 'Lightweight TR-90 frame (~80g) with 6-8 hours of continuous battery life.' }
      ],
      status: 'Currently refining a desktop MVP with 85% accuracy on a 50-sign vocabulary.'
    },

    // Slide 7: Product Description 2
    {
      type: 'product-technical',
      title: 'Description of Product: Technical Architecture',
      hardware: [
        { component: 'Processing', spec: 'Raspberry Pi Zero 2W (Quad-core, 512MB RAM)' },
        { component: 'Vision', spec: 'Pi Camera v2 (8MP, 1080p30)' },
        { component: 'Audio Output', spec: 'Bone Conduction Transducer (200Hz-15kHz)' },
        { component: 'Display', spec: '0.96" OLED (128×64) for visual feedback' }
      ],
      software: [
        { step: '1. Vision Capture', detail: 'Camera captures hand and facial movements at 30 fps' },
        { step: '2. Landmark Extraction', detail: 'MediaPipe Hands identifies 21 3D landmarks per hand' },
        { step: '3. ML Inference', detail: 'TensorFlow Lite CNN-LSTM model classifies the dynamic sign' },
        { step: '4. Output Synthesis', detail: 'Text-to-Speech engine converts classification to audio' }
      ]
    },

    // Slide 8: Market Analysis
    {
      type: 'market-analysis-detailed',
      title: 'Market Acceptance & Analysis',
      segments: [
        { name: 'Market Acceptance', metricLabel: 'Support Rating', size: '85%+', pain: 'Validated through real user trials', intent: 'Strong intent to purchase locally' },
        { name: 'Students & Professionals', metricLabel: 'Combined Size', size: '3.7M', pain: 'Career & education growth blocked', intent: 'Willing to self-fund' },
        { name: 'Healthcare Seekers', metricLabel: 'Affected Users', size: '4M+', pain: 'Misdiagnosis risk in ERs', intent: 'Hospitals seeking compliance' },
        { name: 'Rural Communities', metricLabel: 'Reachable', size: '3.5M', pain: 'Complete isolation, zero interpreters', intent: 'Reached via ADIP Gov schemes' }
      ],
      trend: 'Market Value Creation is Proven: Users gain independence, hospitals gain compliance, and professionals secure career mobility.'
    },

    // Slide 9: Organisation and Team
    {
      type: 'team',
      title: 'Organisation & Team',
      subtitle: 'Passionate Engineers Building for Impact',
      members: [
        {
          name: 'Dwarkesh Ramani',
          role: 'Team Lead & Backend Dev',
          education: 'Computer Engineering',
          skills: ['Python', 'AI/ML', 'System Design']
        },
        {
          name: 'Jenil Gajera',
          role: 'Hardware Lead',
          education: 'Computer Engineering',
          skills: ['Raspberry Pi', 'IoT', 'Electronics']
        },
        {
          name: 'Jenny Patel',
          role: 'Frontend & UI',
          education: 'Computer Engineering',
          skills: ['React', 'UI/UX', 'Web Dev']
        },
        {
          name: 'Akifa Shaikh',
          role: 'Business & Report',
          education: 'Computer Engineering',
          skills: ['Documentation', 'Research', 'Market Analysis']
        },
        {
          name: 'Drashtant Mevada',
          role: 'Business & Report',
          education: 'Computer Engineering',
          skills: ['Documentation', 'Research', 'Market Analysis']
        }
      ],
      advisors: [
        {
          name: 'Prof. Dr. Pariza Kamboj',
          role: 'Faculty Mentor',
          credentials: 'Professor, Computer Engineering Department',
          affiliation: 'Project Guide & Technical Advisor'
        }
      ]
      // teamStrength: 'A multidisciplinary team covering AI, Hardware, UI, and Business.'
    },

    // Slide 10: Financial Analysis
    {
      type: 'financial-analysis',
      title: 'Financial Analysis & Sustainability',
      projections: [
        { year: 'Year 1', units: 100, rev: '₹15L', phase: 'Pilot & Grants' },
        { year: 'Year 2', units: 1000, rev: '₹1.5Cr', phase: 'ADIP Empanelment' },
        { year: 'Year 3', units: 10000, rev: '₹15Cr', phase: 'National Scale' }
      ],
      unitEconomics: [
        { scale: 'Proto (10 units)', cost: '₹22,000' },
        { scale: 'Batch (100 units)', cost: '₹14,800' },
        { scale: 'Scale (10K units)', cost: '₹8,200' }
      ],
      metrics: {
        retailPrice: '₹15,000',
        marginAtScale: '45-55%',
        breakeven: '500 units',
        sustainability: 'Profitable Social Enterprise Model'
      }
    },

    // Slide 11: Funding Request
    {
      type: 'funding-request',
      title: 'Our Ask: Funding Request',
      total: '₹2,00,000',
      purpose: 'To transition from desktop MVP to 5 fully functional wearable prototypes and secure IP.',
      allocation: [
        { category: 'Patent & IP', amount: '₹50,000', percent: 33 },
        { category: 'Hardware (Prototypes)', amount: '₹45,000', percent: 30 },
        { category: 'Testing Equipment', amount: '₹20,000', percent: 13 },
        { category: '3D Printing & Casing', amount: '₹15,000', percent: 10 },
        { category: 'Contingency', amount: '₹20,000', percent: 14 }
      ],
      roi: 'Secures patent, validates hardware with 20+ deaf users, positions for ADIP certification.'
    },

    // Slide 12: Exit
    {
      type: 'exit-strategy',
      title: 'Conclusion & Exit Strategy',
      paths: [
        { name: 'Acquisition by MedTech/Assistive Giants', desc: 'Companies like Cochlear or GN Resound acquiring our ISL dataset and hardware IP to enter the Indian market.' },
        { name: 'Licensing Model', desc: 'Licensing our optimized on-device ISL recognition engine to smartphone manufacturers and smart glass makers (e.g., Meta, Google).' },
        { name: 'Sustainable Social Enterprise', desc: 'Operating profitably while fulfilling a critical social mission, fueled by government ADIP procurements and corporate CSR budgets.' }
      ],
      vision: 'In 5 years, we aim to be the regional standard for the 15M IPSL family (India, Pakistan, Bangladesh), having eliminated the communication barrier for millions.'
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isPrintView) return;
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'Backspace') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPrintView]);

  const renderSlide = (slide) => {
    switch (slide.type) {
      case 'introduction-v2':
        return (
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white h-full flex flex-col p-12">
            <div className="max-w-6xl mx-auto flex flex-col h-full justify-center text-center">
              <div className="text-3xl text-blue-300 font-bold tracking-widest uppercase mb-4">{slide.team}</div>
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-400">
                {slide.title}
              </h1>
              <div className="text-3xl font-light text-blue-200 mb-12">
                {slide.tagline}
              </div>

              <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20 mb-8 max-w-4xl mx-auto">
                <div className="text-sm uppercase tracking-widest text-blue-300 mb-3 font-bold">Our Mission</div>
                <div className="text-3xl font-bold leading-relaxed">{slide.mission}</div>
              </div>

              <div className="text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
                {slide.context}
              </div>
            </div>
          </div>
        );

      case 'business-overview':
        return (
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 h-full p-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-black mb-8 text-gray-900">{slide.title}</h2>

              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-2xl shadow-xl mb-8">
                <div className="text-xl font-bold uppercase tracking-wider mb-2 opacity-80">The Core Problem</div>
                <div className="text-3xl font-black">{slide.problem}</div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {slide.impact.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-red-100 transform hover:-translate-y-1 transition-transform">
                    <div className="text-sm font-bold text-red-500 uppercase tracking-widest mb-2">{item.label}</div>
                    <div className="text-5xl font-black text-gray-900 mb-2">{item.value}</div>
                    <div className="text-gray-600 text-lg">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                  <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-80">The Opportunity</div>
                  <div className="text-xl leading-relaxed">{slide.opportunity}</div>
                </div>
                <div className="bg-emerald-600 text-white p-6 rounded-2xl shadow-lg">
                  <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-80">Why Now?</div>
                  <div className="text-xl leading-relaxed">{slide.whyNow}</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'strategy':
        return (
          <div className="bg-gradient-to-br from-indigo-50 to-white h-full p-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-black mb-4 text-gray-900">{slide.title}</h2>
              <div className="text-2xl text-indigo-600 mb-8 font-medium">{slide.subtitle}</div>

              <div className="grid grid-cols-3 gap-6 mb-10">
                {slide.channels.map((channel, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border-2 border-indigo-100 shadow-xl relative overflow-hidden group hover:border-indigo-400 transition-colors">
                    <div className="absolute top-0 left-0 w-full h-2 bg-indigo-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                    <div className="text-3xl mb-4">{channel.icon}</div>
                    <div className="text-sm font-black text-indigo-500 uppercase tracking-wider mb-2">{channel.phase}</div>
                    <div className="text-2xl font-black text-gray-900 mb-3">{channel.name}</div>
                    <div className="text-gray-600 leading-relaxed text-lg">{channel.desc}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-slate-800 to-indigo-900 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <h3 className="text-2xl font-black mb-6 flex items-center gap-3"><BarChart className="w-8 h-8 text-indigo-400" /> Execution Plan & Roadmap</h3>
                <div className="flex justify-between items-center relative z-10">
                  {slide.roadmap.map((step, i) => (
                    <div key={i} className="flex-1 px-4 relative">
                      {i !== slide.roadmap.length - 1 && <div className="absolute top-4 left-1/2 w-full h-1 bg-white/20"></div>}
                      <div className="w-8 h-8 rounded-full bg-indigo-500 border-4 border-indigo-900 mx-auto mb-4 relative z-10"></div>
                      <div className="text-center">
                        <div className="text-indigo-300 font-bold mb-1">{step.time}</div>
                        <div className="text-lg font-bold leading-tight">{step.milestone}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'competitive-analysis':
        return (
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 h-full p-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-black mb-8 text-gray-900">{slide.title}</h2>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-10 border border-gray-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="p-4 text-lg font-bold">Solution</th>
                      <th className="p-4 text-lg font-bold">Price</th>
                      <th className="p-4 text-lg font-bold">Core Feature</th>
                      <th className="p-4 text-lg font-bold">Hands-Free</th>
                      <th className="p-4 text-lg font-bold">Privacy</th>
                      <th className="p-4 text-lg font-bold">Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slide.competitors.map((comp, i) => (
                      <tr key={i} className={`${i === 0 ? 'bg-indigo-50 border-l-4 border-indigo-600' : 'border-t border-gray-200'} hover:bg-gray-50 transition-colors`}>
                        <td className={`p-4 text-lg ${i === 0 ? 'font-black text-indigo-900' : 'font-medium text-gray-800'}`}>{comp.name}</td>
                        <td className="p-4 text-gray-700">{comp.price}</td>
                        <td className="p-4 text-gray-700">{comp.feature}</td>
                        <td className="p-4">
                          {comp.handsFree === 'Yes' ? <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Yes</span> : <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">No</span>}
                        </td>
                        <td className="p-4 text-gray-700">{comp.privacy}</td>
                        <td className="p-4 font-bold text-gray-700">{comp.focus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-black mb-6 text-indigo-900">Our Strategic Advantages</h3>
              <div className="grid grid-cols-4 gap-4">
                {slide.advantages.map((adv, i) => (
                  <div key={i} className="bg-indigo-600 text-white p-5 rounded-xl text-center shadow-lg relative overflow-hidden">
                    <CheckCircle2 className="w-8 h-8 text-indigo-300 absolute top-4 right-4 opacity-50" />
                    <div className="relative z-10 text-left">
                      <div className="text-xl font-black mb-2">{adv.title}</div>
                      <div className="text-indigo-100 text-sm leading-relaxed">{adv.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'market-opportunity':
        return (
          <div className="bg-white h-full p-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-black mb-12 text-gray-900">{slide.title}</h2>

              <div className="flex gap-6 mb-12 items-end justify-center">
                {slide.metrics.map((metric, i) => {
                  const colors = [
                    'from-blue-600 to-blue-400',
                    'from-indigo-600 to-indigo-400',
                    'from-purple-600 to-purple-400'
                  ];
                  return (
                    <div key={i} className={`flex-1 bg-gradient-to-b ${colors[i]} rounded-2xl p-8 text-white text-center shadow-2xl transform transition-transform hover:scale-105`}>
                      <div className="text-6xl font-black mb-4 tracking-tighter">{metric.value}</div>
                      <div className="text-2xl font-black mb-2">{metric.label}</div>
                      <div className="text-lg opacity-80">{metric.desc}</div>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="bg-green-50 border-l-8 border-green-500 p-8 rounded-r-2xl shadow-md">
                  <div className="flex items-center gap-4 mb-2">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                    <div className="text-sm font-black text-green-600 uppercase tracking-widest">Market Growth</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{slide.growth}</div>
                </div>
                <div className="bg-amber-50 border-l-8 border-amber-500 p-8 rounded-r-2xl shadow-md">
                  <div className="flex items-center gap-4 mb-2">
                    <Award className="w-8 h-8 text-amber-600" />
                    <div className="text-sm font-black text-amber-600 uppercase tracking-widest">Policy Catalyst</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{slide.catalyst}</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'product-description':
        return (
          <div className="bg-gradient-to-br from-blue-50 to-white h-full p-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-black mb-4 text-gray-900">{slide.title}</h2>
              <div className="text-2xl font-medium mb-10 text-blue-600">{slide.tagline}</div>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="grid grid-cols-2 gap-4">
                  {slide.features.map((feature, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-300 transition-colors">
                      <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
                      <h3 className="text-xl font-black mb-2 text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 flex flex-col items-center justify-center bg-gray-900 text-white p-6">
                  {/* Visual Prototype Demo Area */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900 opacity-50"></div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="text-3xl font-black text-blue-400 mb-4">Live Prototype Demo</div>
                    <div className="text-gray-300 mb-6 text-sm">Physical device is ready for demonstration showing real-time ISL to Audio translation.</div>
                    <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.8)] animate-pulse">
                      <PlayCircle className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-xl flex items-center justify-between gap-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <Activity className="w-8 h-8 text-emerald-200" />
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-emerald-200 mb-1">Prototype Status: ACTIVE</div>
                    <div className="text-xl font-bold">{slide.status}</div>
                  </div>
                </div>
                <div className="bg-white text-emerald-900 px-4 py-2 rounded-lg font-black tracking-widest uppercase text-xs">Demo Ready</div>
              </div>
            </div>
          </div>
        );

      case 'product-technical':
        return (
          <div className="bg-white h-full p-12 text-gray-900">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-black mb-10 text-gray-900">{slide.title}</h2>

              <div className="grid grid-cols-2 gap-10">
                {/* Hardware */}
                <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl shadow-xl">
                  <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                    <span className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center">🔧</span>
                    Hardware Architecture
                  </h3>
                  <div className="space-y-4">
                    {slide.hardware.map((hw, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                        <div className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-1">{hw.component}</div>
                        <div className="text-lg font-bold text-gray-900">{hw.spec}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Software ML Pipeline */}
                <div className="bg-purple-50 border border-purple-100 p-8 rounded-3xl shadow-xl">
                  <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                    <span className="bg-purple-600 text-white w-10 h-10 rounded-lg flex items-center justify-center">🧠</span>
                    On-Device AI Pipeline
                  </h3>
                  <div className="space-y-4 relative">
                    <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-purple-300"></div>
                    {slide.software.map((sw, i) => (
                      <div key={i} className="relative pl-10">
                        <div className="absolute left-3 top-2 w-2.5 h-2.5 rounded-full bg-purple-600 shadow-[0_0_10px_rgba(147,51,234,0.4)]"></div>
                        <div className="text-xl font-bold mb-1 text-gray-900">{sw.step}</div>
                        <div className="text-purple-800 leading-relaxed font-medium">{sw.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'market-analysis-detailed':
        return (
          <div className="bg-gray-50 h-full p-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-black mb-10 text-gray-900">{slide.title}</h2>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {slide.segments.map((seg, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md flex items-start gap-4 hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-black text-2xl flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-1">{seg.name}</h3>
                      <div className="text-blue-600 font-bold mb-3">{seg.metricLabel || 'Market Size'}: {seg.size}</div>
                      <div className="space-y-2">
                        <div className="text-sm bg-red-50 text-red-700 p-2 rounded-lg border border-red-100 flex items-start gap-2">
                          <span className="font-bold shrink-0">Pain:</span> {seg.pain}
                        </div>
                        <div className="text-sm bg-green-50 text-green-700 p-2 rounded-lg border border-green-100 flex items-start gap-2">
                          <span className="font-bold shrink-0">Intent:</span> {seg.intent}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-slate-800 text-white p-6 rounded-xl flex items-center justify-center gap-4 shadow-xl">
                <Globe2 className="w-10 h-10 text-blue-400" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-1">Macro Trend</div>
                  <div className="text-lg font-medium">{slide.trend}</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 h-full p-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl font-black mb-4 text-gray-900">{slide.title}</h2>
              <p className="text-2xl text-gray-600 mb-10 font-medium">{slide.subtitle}</p>

              <div className="bg-white p-6 rounded-2xl border border-purple-200 mb-8 shadow-md">
                <h3 className="text-xl font-black mb-4 text-purple-900 uppercase tracking-widest">Faculty Mentor</h3>
                {slide.advisors.map((advisor, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                      {advisor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-2xl font-black text-gray-900">{advisor.name}</div>
                      <div className="text-gray-700 font-medium">{advisor.credentials}</div>
                      <div className="text-sm text-purple-600 font-bold">{advisor.affiliation}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-5 gap-6 mb-8">
                {slide.members.map((member, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-blue-200 shadow-lg text-center transform hover:-translate-y-2 transition-transform">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-black shadow-md">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h4 className="text-xl font-black text-gray-900 mb-1">{member.name}</h4>
                    <div className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-2">{member.role}</div>
                    <div className="text-xs text-gray-500 mb-4">{member.education}</div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.skills.map((skill, j) => (
                        <span key={j} className="text-xs font-bold bg-blue-50 text-blue-700 px-2 py-1 rounded-md border border-blue-100">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center font-bold text-lg text-gray-700 bg-blue-100/50 py-4 rounded-xl">
                {slide.teamStrength}
              </div>
            </div>
          </div>
        );

      case 'financial-analysis':
        return (
          <div className="bg-white h-full p-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-black mb-10 text-gray-900">{slide.title}</h2>

              <div className="grid grid-cols-3 gap-6 mb-10">
                {slide.projections.map((proj, i) => (
                  <div key={i} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200 shadow-md hover:shadow-xl transition-shadow relative overflow-hidden">
                    <div className="text-sm font-black text-green-600 uppercase tracking-widest mb-1">{proj.year}</div>
                    <div className="text-4xl font-black text-gray-900 mb-2">{proj.rev}</div>
                    <div className="text-lg font-bold text-gray-700 mb-4">{proj.units} units</div>
                    <div className="inline-block bg-white text-green-800 text-sm font-bold px-3 py-1 rounded-full border border-green-100">{proj.phase}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
                  <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-blue-900">
                    📉 Unit Economics (Scale)
                  </h3>
                  <div className="space-y-4">
                    {slide.unitEconomics.map((item, i) => (
                      <div key={i} className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
                        <span className="text-lg font-bold text-gray-700">{item.scale}</span>
                        <span className="text-2xl font-black text-blue-600">{item.cost}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-indigo-900 p-8 rounded-2xl text-white shadow-xl flex flex-col justify-center">
                  <h3 className="text-2xl font-black mb-6 text-center text-blue-200">Key Business Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/20 pb-3">
                      <span className="text-lg uppercase tracking-wider text-gray-300 font-bold">Target Retail Price</span>
                      <span className="text-2xl font-black text-white">{slide.metrics.retailPrice}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-3">
                      <span className="text-lg uppercase tracking-wider text-gray-300 font-bold">Estimated Margins</span>
                      <span className="text-2xl font-black text-green-400">{slide.metrics.marginAtScale}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-3">
                      <span className="text-lg uppercase tracking-wider text-gray-300 font-bold">Breakeven Volume</span>
                      <span className="text-2xl font-black text-amber-400">{slide.metrics.breakeven}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-lg uppercase tracking-wider text-gray-300 font-bold text-center w-full">
                        <div className="text-sm text-blue-400 mb-1">Long-Term Sustainability</div>
                        <div className="text-xl text-white">{slide.metrics.sustainability}</div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'funding-request':
        return (
          <div className="bg-gradient-to-br from-indigo-50 to-white h-full p-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-black mb-8 text-gray-900">{slide.title}</h2>

              <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-indigo-200 mb-8 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-2">Total Request</div>
                  <div className="text-6xl font-black text-gray-900 tracking-tighter">{slide.total}</div>
                </div>
                <div className="w-1/2 text-xl font-medium text-gray-700 leading-relaxed border-l-4 border-indigo-500 pl-6">
                  {slide.purpose}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-black mb-6 text-gray-900">Budget Allocation</h3>
                  <div className="space-y-3">
                    {slide.allocation.map((item, i) => (
                      <div key={i} className="flex items-center justify-between group">
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-gray-700">{item.category}</span>
                            <span className="font-black text-indigo-600">{item.amount}</span>
                          </div>
                          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500 rounded-full group-hover:bg-indigo-400 transition-colors" style={{ width: `${item.percent}%` }}></div>
                          </div>
                        </div>
                        <div className="w-16 text-right text-xs font-bold text-gray-400 pt-3">{item.percent}%</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white p-8 rounded-2xl shadow-lg flex flex-col justify-center text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
                  <Target className="w-16 h-16 mx-auto mb-6 text-green-200" />
                  <h3 className="text-2xl font-black mb-4">Milestone ROI</h3>
                  <p className="text-xl font-medium leading-relaxed bg-black/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">{slide.roi}</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'exit-strategy':
        return (
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white h-full p-12">
            <div className="max-w-6xl mx-auto flex flex-col h-full">
              <h2 className="text-5xl font-black mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">{slide.title}</h2>

              <div className="grid grid-cols-3 gap-6 mb-12 flex-1">
                {slide.paths.map((path, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl flex flex-col hover:bg-white/20 transition-all hover:-translate-y-2">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-xl font-black mb-6">
                      {i + 1}
                    </div>
                    <h3 className="text-2xl font-black mb-4 leading-tight">{path.name}</h3>
                    <p className="text-blue-100 text-lg leading-relaxed flex-1">{path.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-600/50 to-purple-600/50 p-8 rounded-2xl border border-blue-400/30 text-center relative overflow-hidden mt-auto">
                <div className="relative z-10">
                  <div className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-3">Long-Term Vision</div>
                  <div className="text-2xl font-bold leading-relaxed">{slide.vision}</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div className="p-12 text-white">Slide type not implemented: {slide.type}</div>;
    }
  };

  if (isPrintView) {
    return (
      <div className="bg-black min-h-screen">
        <style>{`
          @media print {
            .no-print { display: none !important; }
            .print-break { break-after: page; page-break-after: always; }
          }
        `}</style>
        <button
          onClick={() => setIsPrintView(false)}
          className="fixed top-6 right-6 z-50 bg-white p-3 rounded-full shadow-xl hover:bg-gray-100 transition-all no-print"
        >
          <X className="w-6 h-6 text-gray-900" />
        </button>
        <div className="flex flex-col">
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-screen relative print-break overflow-hidden">
              {renderSlide(slide)}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden font-sans">
      {/* Slide Content */}
      <div className="w-full h-full transition-opacity duration-300">
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

          <div className="w-px h-8 bg-white/30 mx-2"></div>

          <button
            onClick={() => setIsPrintView(true)}
            className="bg-white bg-opacity-90 p-4 rounded-full hover:bg-opacity-100 transition-all shadow-2xl"
            title="Print / Save PDF"
          >
            <Printer className="w-6 h-6 text-gray-900" />
          </button>
        </div>
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col gap-2 z-50">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            title={`Slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${i === currentSlide
              ? 'bg-blue-400 scale-125 shadow-[0_0_10px_rgba(96,165,250,0.8)]'
              : 'bg-white bg-opacity-40 hover:bg-opacity-70'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalPresentation;
