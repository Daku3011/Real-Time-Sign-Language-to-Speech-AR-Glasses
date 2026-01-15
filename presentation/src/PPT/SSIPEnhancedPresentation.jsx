import React, { useState, useEffect } from 'react';
import { 
  Heart, TrendingDown, AlertTriangle, Globe, Users, 
  Award, Shield, Building, Briefcase, MessageCircle,
  ChevronLeft, ChevronRight, Activity, Map
} from 'lucide-react';

const SSIPEnhancedPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    setExpandedCard(null);
  }, [currentSlide]);

  const slides = [
    // Slide 1: Title
    {
      type: 'title-enhanced',
      title: 'Real-Time Sign Language to Speech AR Glasses',
      subtitle: 'Assistive Vision: Empowering 18 Million Indians',
      tagline: 'Breaking Communication Barriers Through Innovation',
      content: [
        'SSIP Innovation Project 2026',
        'Team: Inno8',
      ],
      stats: {
        users: '18M+ Indians',
        market: '₹27,000 Cr',
        savings: '₹530 Cr/year societal impact'
      }
    },

    // Slide 2: Disability Statistics in India
    {
      type: 'disability-stats',
      title: 'Disability Statistics in India',
      subtitle: 'Understanding the Magnitude of the Challenge',
      censusData: {
        year: '2011',
        totalDisabled: '2.68 crore (26.8 million)',
        hearingImpaired: '5.07 million (50.7 lakh)',
        speechImpaired: '1.99 million (19.9 lakh)',
        combined: '7.06 million total'
      },
      gujaratData: {
        state: 'Gujarat',
        totalDisabled: '15.4 lakh',
        suratDistrict: '80,000-1,00,000 (estimated)'
      },
      updatedEstimates: {
        title: 'WHO + Research Estimates',
        total: '18 million (including underreported)',
        reason: 'Census underreporting + WHO adjustment factor of 2.5x',
        growth: '~2.5% annually'
      },
      urbanRural: [
        { type: 'Rural', percentage: '69%', count: '1.85 crore', barrier: 'Face MORE barriers' },
        { type: 'Urban', percentage: '31%', count: '83 lakh', barrier: 'Better access but still limited' }
      ]
    },

    // Slide 3: COVID-19 Impact
    {
      type: 'covid-impact',
      title: 'The Pandemic Made Everything Worse',
      subtitle: 'COVID-19 Revealed the Fragility of Communication Access',
      stats: [
        { 
          percentage: '90%', 
          label: 'Struggled with masks', 
          description: 'Masks hide facial expressions and lip-reading, cutting 50% of sign language communication',
          impact: 'Deaf individuals had to REMOVE masks to communicate, increasing COVID exposure risk'
        },
        { 
          percentage: '76%', 
          label: 'Missed critical information', 
          description: '76% could not access COVID-19 health information during the pandemic',
          impact: '4.6x higher odds of difficulty accessing information vs hearing population'
        },
        { 
          percentage: '25%', 
          label: 'Drop in comprehension', 
          description: 'Listening comprehension dropped 25% with masked speakers for lip-readers',
          impact: 'Emergency briefings lacked sign language interpreters'
        },
        { 
          percentage: '70%', 
          label: 'Felt isolated', 
          description: 'Felt isolated and deprived of timely pandemic information',
          impact: 'Exacerbated helplessness, fear, and anxiety in deaf community'
        }
      ],
      testimonials: [
        '"Those masks are so hard to hear through! I avoid public spaces now"',
        '"What the hell are the deaf and hard-of-hearing supposed to do in a world where lips can no longer be read?"',
        '"People assume you can hear them when you can\'t. I understand why we all must wear a mask... but it certainly adds to the struggles"'
      ],
      solution: 'AR Glasses would have solved this: No need for lip-reading, instant translation visible on HUD regardless of masks'
    },

    // Slide 2: Healthcare Communication Crisis
    {
      type: 'healthcare-crisis',
      title: 'Healthcare Communication Barriers',
      subtitle: 'Life-Threatening Gaps in Medical Communication',
      emergencyStats: {
        independent: { value: '28.8%', label: 'Can communicate independently in ER' },
        needFamily: { value: '71.2%', label: 'Required family member assistance' },
        recognized: { value: '22.58%', label: 'Physicians recognized barrier' }
      },
      realCases: [
        {
          title: 'Pneumonia Misdiagnosis',
          story: 'Deaf patient misdiagnosed, took wrong medication for 2 weeks, had to go to hospital for emergency antibiotic IV',
          quote: '"I suffered two weeks with pneumonia while taking the wrong medication"',
          source: 'Boston University School of Public Health, 2018'
        },
        {
          title: 'ER Communication Breakdown',
          story: 'Deaf parents couldn\'t understand physician about their son in ER',
          quote: '"We needed to speak with the physician about our son... but we did not understand; we could not read his lips, it was hard!!!"',
          source: 'Academic Emergency Medicine, 2024'
        },
        {
          title: 'Autonomy Violation',
          story: 'ER physicians called patient\'s PARENTS instead of communicating directly',
          quote: '"I\'m married, right? Why do physicians call my parents? Am I a little boy?"',
          source: 'PMC Communication Barriers Study, 2024'
        }
      ],
      healthImpact: [
        { issue: 'Cardiovascular disease', risk: '1.5x higher risk' },
        { issue: 'Misdiagnosis', risk: '2.5x higher rate' },
        { issue: 'Incorrect medication', risk: '33% experience this' },
        { issue: 'Medical errors', risk: 'Avoided doctor visits: 30%' }
      ]
    },

    // Slide 3: Employment Barriers
    {
      type: 'employment-barriers',
      title: 'The Glass Ceiling for Deaf Professionals',
      subtitle: 'Communication Barriers Block Career Advancement',
      stats: [
        {
          metric: '74%',
          title: 'Believe they\'ll NEVER achieve leadership',
          detail: 'Deaf employees with visible disabilities feel permanent career limitations',
          source: 'Coqual Report 2017, India'
        },
        {
          metric: '25-30%',
          title: 'Employment rate',
          detail: 'Compared to 55% for general population - massive employment gap',
          source: 'NAD India, Disability Employment Survey 2022'
        },
        {
          metric: '30-40%',
          title: 'Lower salary',
          detail: 'Compared to hearing peers in same roles and qualifications',
          source: 'Employment Studies, Multiple Sources'
        },
        {
          metric: '5%',
          title: 'Private sector employment',
          detail: 'Only 5% of deaf individuals employed in private companies',
          source: 'News4Deaf, 2024'
        }
      ],
      workplaceBarriers: [
        {
          barrier: 'Communication #1 Issue',
          description: 'No common sign language across India (22 official spoken languages)',
          impact: 'Constant miscommunication in workplace'
        },
        {
          barrier: 'Social Stigma',
          description: '"The opposite of deaf isn\'t hearing, it\'s NORMAL" - Michele Friedner, 2024',
          impact: 'Deafness viewed as "needs to be cured" not accommodated'
        },
        {
          barrier: 'Lack of Accommodations',
          description: '47% receive NO adequate support at work',
          impact: '1 in 4 faced JOB DISCRIMINATION'
        }
      ],
      corporateSuccess: [
        {
          company: 'Amazon India',
          action: 'Hired sign language interpreters for workplace',
          result: 'Harmonious work environment for deaf employees',
          cost: '₹30,000-₹60,000/month per employee',
          yourAdvantage: 'Our device: ₹15,000 one-time = 24-48x cheaper annually'
        },
        {
          company: 'KFC India',
          action: '200+ deaf/mute workers across outlets during COVID',
          result: 'Custom menu cards, writing pads, no-miscommunication protocols',
          cost: 'Ongoing operational overhead',
          yourAdvantage: 'AR glasses eliminate need for writing pads'
        }
      ]
    },

    // Slide 4: Regional ISL Dialects
    {
      type: 'isl-dialects',
      title: 'ISL is Not One Language',
      subtitle: 'Regional Variations Require Adaptive Learning',
      dialects: [
        {
          city: 'Mumbai (Bombay)',
          characteristics: 'Most prestigious variety, highest intelligibility',
          similarity: 'Baseline 100%',
          strategy: 'Primary training dataset'
        },
        {
          city: 'Delhi',
          characteristics: 'Standard variety (government promoted)',
          similarity: 'High similarity to Mumbai',
          strategy: 'Secondary priority'
        },
        {
          city: 'Hyderabad & Chennai',
          characteristics: 'Closely related cluster',
          similarity: '62-71% cognacy with Mumbai',
          strategy: 'Phase 2 expansion'
        },
        {
          city: 'Kolkata (Calcutta)',
          characteristics: 'Most distinct dialect, least similar',
          similarity: 'Lowest similarity',
          strategy: 'Phase 3 adaptation'
        }
      ],
      islContext: {
        family: 'Indo-Pakistani Sign Language (IPSL)',
        regions: 'India, Pakistan, Bangladesh, Nepal, Sri Lanka',
        totalSigners: '15 million (most-used sign language globally!)',
        worldRank: '149th most spoken language worldwide',
        grammarSimilarity: 'Nearly identical across regions',
        vocabularyVariation: '62-71% between cities'
      },
      aslComparison: [
        { feature: 'Hand Usage', ASL: 'Mostly ONE-handed', ISL: 'Mostly TWO-handed', impact: 'Different recognition models needed' },
        { feature: 'Speed', ASL: 'Faster, fluid', ISL: 'Slower, deliberate', impact: 'Different temporal analysis' },
        { feature: 'Dictionary', ASL: '10,000+ signs', ISL: '10,000 terms (2024)', impact: 'Comparable vocabulary size' },
        { feature: 'Commercial Products', ASL: 'Multiple (XRAI, SignGlass)', ISL: 'ZERO', impact: 'We are FIRST!' }
      ],
      ourAdvantage: 'Adaptive learning system that trains on Mumbai ISL first, then expands to regional dialects in phases'
    },

    // Slide 5: Mental Health Crisis
    {
      type: 'mental-health',
      title: 'The Hidden Mental Health Crisis',
      subtitle: 'Isolation and Depression in the Deaf Community',
      comparison: [
        { 
          issue: 'Depression', 
          deafRate: '40-50%', 
          generalRate: '20%', 
          multiplier: '2-2.5x HIGHER',
          description: 'Chronic isolation leads to severe depression'
        },
        { 
          issue: 'Anxiety Disorders', 
          deafRate: '35-45%', 
          generalRate: '18%', 
          multiplier: '2x HIGHER',
          description: 'Constant communication stress causes anxiety'
        },
        { 
          issue: 'Social Isolation', 
          deafRate: '65%', 
          generalRate: '~25%', 
          multiplier: '2.6x HIGHER',
          description: 'Reported feeling isolated from society'
        },
        { 
          issue: '"Dinner Table Syndrome"', 
          deafRate: '80%', 
          generalRate: 'N/A', 
          multiplier: 'Near Universal',
          description: 'Family talks around them, unable to participate'
        }
      ],
      testimonials: [
        {
          quote: '"When Deaf individuals are unable to receive the same timely and relevant information that hearing individuals can, it exacerbates their sense of helplessness, fear, and anxiety"',
          source: 'My Deaf Therapy, Mental Health Study 2025'
        },
        {
          quote: '"Every doctor visit is a struggle. I can\'t explain my symptoms. I\'ve been misdiagnosed three times. A device that speaks for me would literally save my life."',
          source: 'Real User Need (Template for testimonials)'
        }
      ],
      ourImpact: 'By enabling independent communication, we directly address the root cause of isolation and mental health crisis'
    },

    // Slide 6: Interpreter Shortage
    {
      type: 'interpreter-crisis',
      title: 'The Interpreter Crisis',
      subtitle: 'India vs The World - A Shocking Comparison',
      globalComparison: [
        { country: 'USA', deaf: '500,000', interpreters: '15,000+', ratio: '1:33', status: '✅' },
        { country: 'UK', deaf: '151,000', interpreters: '1,500+', ratio: '1:100', status: '✅' },
        { country: 'Australia', deaf: '30,000', interpreters: '1,200', ratio: '1:25', status: '✅' },
        { country: 'Japan', deaf: '360,000', interpreters: '3,600', ratio: '1:100', status: '✅' },
        { country: 'INDIA', deaf: '7 million', interpreters: '500', ratio: '1:14,000', status: '❌' }
      ],
      shockingStat: 'India is 424x WORSE than USA in interpreter availability!',
      costAnalysis: {
        interpreter: {
          hourly: '₹500-₹2,000',
          daily: '₹4,000-₹12,000',
          monthly: '₹30,000-₹60,000',
          yearly: '₹3,60,000-₹7,20,000',
          availability: 'Very Limited - 80% in metros only'
        },
        yourDevice: {
          cost: '₹15,000',
          frequency: 'One-time',
          savings: '24-48x cheaper than 1 year interpreter',
          availability: '100% - works anywhere, anytime'
        }
      }
    },

    // Slide 7: Government Alignment & Funding
    {
      type: 'government-funding',
      title: 'Perfect Alignment with Government Schemes',
      subtitle: 'ADIP Scheme + Accessible India Campaign',
      adipScheme: {
        name: 'ADIP - Assistance to Disabled Persons',
        operational: 'Since 1981 (43 years)',
        eligibility: 'Minimum 40% disability, Income ≤ ₹22,500/month',
        assistance: '100% coverage for devices up to ₹15,000',
        beneficiaries: '1.8 million people (2014-2020)',
        budget: '₹1,080 crore (7 years)',
        gujaratUtilization: '75-80% (Very Good implementation)'
      },
      perfectFit: [
        'Our device price: ₹15,000 = EXACTLY at ADIP limit',
        '100% government funding for eligible users',
        'Gujarat has strong ADIP implementation infrastructure',
        'Potential to reach millions through government programs'
      ],
      accessibleIndia: {
        launched: 'December 3, 2015',
        target: '50 cities by 2025',
        gaps: {
          publicBuildings: '35-40% achieved',
          transportation: '25-30% achieved',
          communication: '<10% achieved ⚠️',
          ict: '20-25% achieved'
        },
        biggestGap: 'Communication accessibility - Our project addresses THE MOST CRITICAL GAP!'
      },
      funding: [
        { source: 'SSIP Gujarat', amount: '₹5 lakh', status: 'Current Request' },
        { source: 'ADIP Scheme', amount: 'Per-unit subsidy', status: 'Market Access' },
        { source: 'NIDHI-PRAYAS', amount: '₹10 lakh', status: 'Future Option' },
        { source: 'Startup India Seed', amount: '₹20 lakh', status: 'Scale-up Phase' }
      ]
    },

    // Slide 8: Market Opportunity & Impact
    {
      type: 'market-impact',
      title: 'Massive Market, Massive Impact',
      subtitle: 'Social Impact + Commercial Sustainability',
      marketSize: {
        TAM: { 
          population: '18 million users', 
          price: '₹15,000', 
          value: '₹27,000 crore',
          note: 'Total Addressable Market'
        },
        SAM: { 
          population: '5 million (Urban, 18-60)', 
          price: '₹15,000', 
          value: '₹7,500 crore',
          note: 'Serviceable Addressable Market'
        },
        SOM: { 
          population: '10,000 units (Year 1-3)', 
          price: '₹15,000', 
          value: '₹15 crore',
          note: 'Serviceable Obtainable Market'
        }
      },
      socialImpact: [
        { metric: 'Users (Year 3)', value: '10,000', detail: 'Direct beneficiaries' },
        { metric: 'Family members', value: '40,000', detail: '4 per user average' },
        { metric: 'Healthcare interactions', value: '120,000/year', detail: '10 per user annually' },
        { metric: 'Employment increase', value: '+15-20%', detail: 'Job opportunities' },
        { metric: 'School enrollment', value: '+10-15%', detail: 'Deaf students in mainstream' }
      ],
      costSavings: {
        perUser: [
          { category: 'Interpreters', savings: '₹3,60,000/year' },
          { category: 'Medical errors', savings: '₹50,000/year' },
          { category: 'Lost productivity', savings: '₹1,20,000/year' },
          { category: 'TOTAL', savings: '₹5,30,000/year' }
        ],
        societalTotal: 'For 10,000 users: ₹530 crore/year in societal cost savings'
      },
      sdgAlignment: [
        { sdg: 'SDG 3', goal: 'Good Health & Well-being', impact: 'Better healthcare access' },
        { sdg: 'SDG 4', goal: 'Quality Education', impact: 'Educational accessibility' },
        { sdg: 'SDG 10', goal: 'Reduced Inequalities', impact: 'Equal communication opportunities' }
      ]
    },

    // Slide 9: CSR & Enterprise Opportunity
    {
      type: 'corporate-csr',
      title: 'Corporate Social Responsibility Opportunity',
      subtitle: 'CSR Compliance + Diverse Hiring Made Easy',
      csrRequirement: {
        law: 'Companies earning certain profit MUST donate % to social sectors',
        sectors: 'Education, Healthcare, Marginalized Communities',
        opportunity: 'Our device helps meet CSR obligations'
      },
      valueProposition: [
        {
          benefit: 'Meet CSR Obligations',
          description: 'Legal requirement becomes social impact',
          icon: Award
        },
        {
          benefit: 'Improve Workplace Accessibility',
          description: 'Enable deaf employees to communicate naturally',
          icon: Building
        },
        {
          benefit: 'Hire Diverse Talent',
          description: 'Access 18M potential employees previously excluded',
          icon: Users
        },
        {
          benefit: 'Cost-Effective Alternative',
          description: '95% cheaper than full-time interpreters',
          icon: TrendingDown
        }
      ],
      successStories: [
        {
          company: 'Amazon India',
          approach: 'Sign language interpreters in workplace',
          cost: '₹30,000-₹60,000/month per employee',
          outcome: 'Harmonious work environment'
        },
        {
          company: 'KFC India',
          approach: '200+ deaf/mute workers, custom communication tools',
          cost: 'Ongoing operational overhead',
          outcome: 'No miscommunication protocols established'
        }
      ],
      ourSolution: 'One-time ₹15,000 device replaces monthly interpreter costs, scaling accessibility to entire workforce'
    },

    // Slide 10: Technology Readiness
    {
      type: 'tech-readiness',
      title: 'Technology is Ready NOW',
      subtitle: 'Proven Components, Validated Approach',
      techValidation: [
        {
          component: 'MediaPipe Hands',
          performance: '95.7% palm detection accuracy',
          validation: 'Google Research, 2020',
          detail: '21 landmarks per hand, 30 FPS on mobile'
        },
        {
          component: 'TensorFlow Lite',
          performance: '10-30ms inference on mobile',
          validation: 'TensorFlow Benchmarks',
          detail: 'MobileNet v2, <100ms target achievable'
        },
        {
          component: 'SignGlass (Academic)',
          performance: '83% BLEU1 score, 16.98% WER',
          validation: 'Penn State University, 2025',
          detail: 'Proves feasibility of wearable ASL recognition'
        },
        {
          component: 'Raspberry Pi Ecosystem',
          performance: '50M+ units sold worldwide',
          validation: 'Raspberry Pi Foundation',
          detail: 'Used in 1,000+ assistive tech projects'
        }
      ],
      ourApproach: [
        'Single Pi camera + MediaPipe (lightweight vs SignGlass 3-camera setup)',
        'On-device TFLite model (privacy-first, offline capable)',
        'Target: 500+ ISL signs, 85%+ accuracy, <500ms latency',
        '6-8 hours battery (vs SignGlass 1-hour)'
      ],
      competitiveAdvantage: 'We optimize for AFFORDABILITY and BATTERY LIFE without compromising accuracy'
    },

    // Slide 11: Legal Cases & Discrimination
    {
      type: 'legal-cases',
      title: 'Legal Battles for Communication Rights',
      subtitle: 'Landmark Cases Highlighting the Need for Solutions',
      landmarkCases: [
        {
          case: 'RPwD Act 2016',
          description: 'Rights of Persons with Disabilities Act',
          impact: 'Made communication accessibility a LEGAL RIGHT in India',
          quote: '"Barrier-free and conducive environment including access to transportation, physical environment, information and communications including appropriate technologies and systems"',
          relevance: 'Our device directly fulfills this legal mandate'
        },
        {
          case: 'NAD India Advocacy',
          description: 'National Association of the Deaf',
          impact: 'Pushed for ISL recognition as official language',
          quote: '"Without proper communication access, rights remain on paper only"',
          relevance: 'Filling the implementation gap'
        },
        {
          case: 'Supreme Court Rulings',
          description: 'Multiple accessibility directives',
          impact: 'Courts mandating accessibility in public services',
          quote: '"Technology must be leveraged to ensure equal participation"',
          relevance: 'Technology-driven compliance solution'
        }
      ],
      discriminationStats: {
        title: 'Real Discrimination Data',
        stats: [
          { issue: 'Job Discrimination', percentage: '25%', detail: '1 in 4 faced discrimination at work' },
          { issue: 'Healthcare Denied', percentage: '30%', detail: 'Avoided doctor due to communication barriers' },
          { issue: 'Education Dropout', percentage: '40%', detail: 'Deaf students out of school' },
          { issue: 'Social Exclusion', percentage: '65%', detail: 'Feel isolated from society' }
        ]
      }
    },

    // Slide 12: ISL Statistics & Resources
    {
      type: 'isl-stats',
      title: 'Indian Sign Language: Deep Dive',
      subtitle: 'Resources, Recognition, and Reality',
      islrtcData: {
        name: 'Indian Sign Language Research & Training Centre',
        established: 'Under AYJNIHH (Ali Yavar Jung National Institute)',
        achievements: [
          '6,000+ standardized ISL signs documented',
          '10,000 total vocabulary (as of 2024)',
          'Published ISL dictionaries and learning materials',
          'Training programs for interpreters and teachers'
        ],
        limitation: 'Only ~500 certified interpreters vs 18M users'
      },
      worldComparison: {
        title: 'ISL in Global Context',
        points: [
          '15 million signers globally (IPSL family)',
          '149th most-used language worldwide',
          'More speakers than many spoken languages',
          'Yet almost NO commercial technology support'
        ]
      },
      recognitionStatus: {
        official: 'NOT an official language of India (yet)',
        advocacy: 'NAD India pushing for recognition',
        practical: 'Used by 18M Indians daily',
        gap: 'Legal recognition lag creating accessibility barriers'
      },
      ourContribution: [
        'First commercial ISL recognition product',
        'Will generate largest ISL dataset through usage',
        'Can contribute to standardization efforts',
        'Practical tool accelerating ISL adoption'
      ]
    },

    // Slide 13: Education Impact
    {
      type: 'education-impact',
      title: 'Education: The Foundation of Opportunity',
      subtitle: 'Breaking Barriers in Learning',
      currentCrisis: {
        outOfSchool: '40%',
        detail: '40% of deaf children are out of school in India',
        reason: 'Communication barriers with teachers and peers'
      },
      literacyGap: {
        deafLiteracy: '52%',
        generalLiteracy: '74%',
        gap: '22 percentage points',
        impact: 'Limits employment and life opportunities'
      },
      classroomChallenges: [
        {
          challenge: 'No ISL-trained Teachers',
          stat: '<5% of schools',
          impact: 'Deaf students cannot understand curriculum'
        },
        {
          challenge: 'Peer Isolation',
          stat: '80%',
          impact: 'Cannot participate in group discussions'
        },
        {
          challenge: 'Exam Accessibility',
          stat: 'Limited',
          impact: 'Cannot demonstrate true knowledge'
        },
        {
          challenge: 'Career Counseling',
          stat: 'Nonexistent',
          impact: 'Unaware of opportunities'
        }
      ],
      ourSolution: {
        title: 'How AR Glasses Help Education',
        benefits: [
          'Real-time lecture transcription for self-study',
          'Enable participation in class discussions',
          'Communication with teachers during office hours',
          'Peer group project collaboration',
          'Access to online educational content'
        ],
        projection: '+10-15% increase in mainstream school enrollment with device access'
      }
    },

    // Slide 14: Manufacturing & Scaling Plan
    {
      type: 'manufacturing-scaling',
      title: 'From Prototype to Production',
      subtitle: 'Scaling with Economies of Scale',
      prototypeCost: {
        stage: 'Prototype (Current)',
        quantity: '2 units',
        costPerUnit: '₹22,500',
        totalCost: '₹45,000',
        breakdown: 'Electronics: ₹12,425 | Mechanical: ₹2,360 | Dev: ₹5,900'
      },
      scalingPlan: [
        {
          stage: 'Pilot Batch',
          quantity: '100 units',
          costPerUnit: '₹18,000',
          reduction: '20% reduction',
          timeline: 'Month 6-8',
          volume: 'Bulk component purchasing begins'
        },
        {
          stage: 'Small Scale',
          quantity: '1,000 units',
          costPerUnit: '₹15,000',
          reduction: '33% reduction',
          timeline: 'Year 1',
          volume: 'Contract manufacturing, negotiated rates'
        },
        {
          stage: 'Medium Scale',
          quantity: '10,000 units',
          costPerUnit: '₹12,000',
          reduction: '47% reduction',
          timeline: 'Year 2-3',
          volume: 'Dedicated production line, optimized PCB design'
        },
        {
          stage: 'Large Scale',
          quantity: '100,000+ units',
          costPerUnit: '₹8,000-₹10,000',
          reduction: '56-64% reduction',
          timeline: 'Year 4+',
          volume: 'Fully automated assembly, custom chip ASICs'
        }
      ],
      manufacturingPartners: {
        electronics: 'PCB assembly houses in Bangalore/Chennai',
        mechanicals: '3D printing → injection molding transition',
        assembly: 'Contract manufacturers with experience in wearables',
        testing: 'In-house quality control + user testing'
      },
      priceStrategy: 'Maintain ₹15,000 retail, increasing margins fund R&D and subsidized distribution'
    },

    // Slide 15: Regulatory & Certification Pathway
    {
      type: 'regulatory-pathway',
      title: 'Regulatory Pathway: Clear and Achievable',
      subtitle: 'NOT a Medical Device - Communication Aid',
      classification: {
        category: 'Communication Aid / Assistive Technology',
        notMedical: 'NOT classified as medical device',
        regulator: 'No CDSCO/drug controller approval needed',
        reason: 'Does not diagnose, treat, or cure any medical condition'
      },
      requiredCertifications: [
        {
          cert: 'BIS Certification',
          authority: 'Bureau of Indian Standards',
          standard: 'IS 13252 (Electronics) + Relevant IT equipment standards',
          timeline: '3-6 months',
          cost: '₹50,000-₹1,00,000',
          mandatory: 'YES - for electronics sold in India'
        },
        {
          cert: 'CE Marking (for export)',
          authority: 'European Standards',
          standard: 'EN standards for consumer electronics',
          timeline: '4-6 months',
          cost: '₹2,00,000-₹3,00,000',
          mandatory: 'For EU market'
        },
        {
          cert: 'FCC (for US export)',
          authority: 'Federal Communications Commission',
          standard: 'Electromagnetic compatibility',
          timeline: '3-4 months',
          cost: '₹3,00,000-₹5,00,000',
          mandatory: 'For US market'
        }
      ],
      complianceAreas: [
        'Electrical safety (short circuit, overheating protection)',
        'EMI/EMC (electromagnetic interference)',
        'Battery safety (lithium-ion certifications)',
        'Data privacy (since device processes video locally)',
        'Accessibility standards compliance (WCAG, RPwD Act)'
      ],
      timeline: 'BIS certification in parallel with pilot production ~6 months',
      advantage: 'Much simpler than medical device pathway (which can take 2-3 years)'
    },

    // Slide 16: Alternative Funding Sources
    {
      type: 'funding-alternatives',
      title: 'Multiple Funding Pathways',
      subtitle: 'Beyond SSIP: Scaling Capital',
      currentAsk: {
        source: 'SSIP Gujarat',
        amount: '₹5 lakh',
        purpose: 'Prototype development + initial testing',
        stage: 'Current Request'
      },
      governmentSchemes: [
        {
          scheme: 'NIDHI-PRAYAS',
          authority: 'DST (Department of Science & Technology)',
          amount: '₹10 lakh',
          criteria: 'Proof-of-concept to prototype',
          timeline: 'Year 1',
          fit: 'EXCELLENT - we match criteria perfectly'
        },
        {
          scheme: 'Startup India Seed Fund',
          authority: 'DPIIT (Ministry of Commerce)',
          amount: '₹20 lakh (grant) + ₹50 lakh (debt)',
          criteria: 'Early-stage startups with social impact',
          timeline: 'Year 1-2',
           fit: 'GOOD - after SSIP proof of concept'
        },
        {
          scheme: 'Atal Innovation Mission',
          authority: 'NITI Aayog',
          amount: '₹15-30 lakh',
          criteria: 'Innovation with social impact',
          timeline: 'Year 1-2',
          fit: 'GOOD - assistive tech focus'
        }
      ],
      privateFunding: [
        {
          source: 'Social Impact VCs',
          examples: 'Unitus Ventures, Aavishkaar Capital',
          amount: '₹50 lakh - ₹2 crore',
          stage: 'After pilot deployment success',
          equity: 'Yes - typically 10-20%'
        },
        {
          source: 'CSR Partnerships',
          examples: 'Corporate CSR budgets (TCS, Infosys, Amazon)',
          amount: '₹20-50 lakh (grants)',
          stage: 'Pilot programs, distribution partnerships',
          equity: 'No - pure CSR'
        },
        {
          source: 'Crowdfunding',
          platform: 'Ketto, Milaap (disability focus)',
          amount: '₹10-30 lakh',
          stage: 'For community pilot programs',
          equity: 'No'
        }
      ],
      fundingRoadmap: 'SSIP (₹5L) → NIDHI (₹10L) → Startup India (₹20L) → Impact VC (₹1-2Cr) = ₹1.35-2.35 Cr over 2-3 years'
    },

    // Slide 17: Detailed Competitive Landscape
    {
      type: 'competitive-detailed',
      title: 'Competitive Landscape: We Are First in ISL',
      subtitle: 'Comprehensive Market Analysis',
      competitors: [
        {
          name: 'XRAI Glass',
          type: 'Speech-to-Text AR',
          price: '£399 (~₹40,000)',
          language: 'English only',
          direction: 'ONE-WAY: Speech → Text (for deaf to understand hearing)',
          signLanguage: 'NO sign language translation',
          availability: 'UK/EU only',
          limitation: 'Does NOT help deaf communicate their thoughts'
        },
        {
          name: 'SignGlass (Penn State)',
          type: 'Academic Research',
          price: 'Not commercial',
           language: 'ASL only',
          direction: 'TWO-WAY: ASL ↔ Text',
          specs: 'WER 16.98%, BLEU1 83%, 3 cameras',
          availability: 'Research prototype only',
          limitation: 'Never released publicly, very expensive (3 cameras), 1-hour battery'
        },
        {
          name: 'Smart Gloves (Various)',
          type: 'Sensor-based',
          price: '₹20,000-₹50,000',
          makers: 'BrightSign Glove, SignAloud',
          direction: 'Sign → Text',
          limitation: 'Requires wearing sensors on BOTH hands, disrupts natural signing, NOT hands-free'
        },
        {
          name: 'Google AR Prototype',
          type: 'Concept',
          shown: 'Google I/O 2022',
          language: 'Speech-to-text transcription',
          availability: 'NEVER RELEASED',
          limitation: 'Proof-of-concept only, no sign language'
        },
        {
          name: 'Meta Ray-Ban Smart Glasses',
          type: 'Consumer AR',
          price: '$299 (~₹25,000)',
          features: 'Camera, audio, AI assistant',
          signLanguage: 'ZERO sign language features',
          limitation: 'General-purpose, not for accessibility'
        }
      ],
      ourPosition: {
        title: 'Our Unique Position',
        advantages: [
          '🏆 ONLY ISL-focused solution globally',
          '💰 70-90% cheaper than competitors',
          '🙌 Truly hands-free (no gloves/sensors)',
          '🔒 Privacy-first (on-device processing)',
          '🇮🇳 Made for India, by Indians',
          '⚡ 6-8 hour battery (vs 1 hour for academic prototypes)',
          '📱 Offline capable (no internet needed)'
        ]
      },
      marketGap: 'NO commercial product exists for 18 million ISL users. We are filling a MASSIVE market gap.'
    },

    // Slide 18: Success Metrics & KPIs
    {
      type: 'success-metrics',
      title: 'Success Metrics: How We Measure Impact',
      subtitle: 'Technical Excellence + Social Impact',
      technicalKPIs: [
        {
          metric: 'Sign Recognition Accuracy',
          target: '90%',
          current: '85% (prototype)',
          measurement: 'Correct classification on test dataset',
          timeline: 'Month 4'
        },
        {
          metric: 'End-to-End Latency',
          target: '<500ms',
          current: '~650ms (prototype)',
          measurement: 'Sign completion → audio output',
          timeline: 'Month 5'
        },
        {
          metric: 'Vocabulary Size',
          target: '500+ signs',
          current: '50 signs (MVP)',
          measurement: 'Unique ISL signs recognized',
          timeline: 'Month 4'
        },
        {
          metric: 'Battery Life',
          target: '6+ hours',
          current: '6.5 hours',
          measurement: 'Continuous active use',
          timeline: 'Achieved ✓'
        },
        {
          metric: 'False Positive Rate',
          target: '<10%',
          current: '~15%',
          measurement: 'Incorrect gesture classifications',
          timeline: 'Month 5'
        }
      ],
      socialKPIs: [
        {
          metric: 'User Satisfaction',
          target: '85%+',
          measurement: 'Post-use survey rating (1-10 scale, 8+ is satisfied)',
          timeline: 'Month 7'
        },
        {
          metric: 'Real Users Tested',
          target: '20+',
          measurement: 'Deaf individuals testing in real scenarios',
          timeline: 'Month 6-8'
        },
        {
          metric: 'Pilot Institutions',
          target: '2-3',
          measurement: 'Schools/organizations using devices',
          timeline: 'Month 8'
        },
        {
          metric: 'Communication Success Rate',
          target: '80%+',
          measurement: 'Successful real-world interactions without fallback',
          timeline: 'Month 7'
        }
      ],
      milestones: [
        'Patent/IP application filed (Month 6)',
        'Partnership with 1-2 deaf associations (Month 5)',
        'Media coverage in tech/accessibility publications (Month 7)',
        'First 100 pre-orders received (Month 8)'
      ]
    },

    // Slide 19: Q&A Preparation
    {
      type: 'qa-prep',
      title: 'Anticipated Questions & Answers',
      subtitle: 'We\'ve Thought Through the Challenges',
      technicalQA: [
        {
          question: 'Why not use existing AR platforms like Meta Ray-Ban?',
          answer: 'Consumer AR glasses don\'t have computer vision APIs optimized for hand tracking. We need Raspberry Pi for custom MediaPipe + TensorFlow Lite pipeline. Also, consumer glasses are 2-3x more expensive.'
        },
        {
          question: 'How do you handle regional ISL variations?',
          answer: 'Phase 1: Train on Mumbai ISL (most prestigious variety). Phase 2-3: Expand to Hyderabad, Chennai, Delhi, Kolkata dialects through transfer learning. Adaptive learning personalizes to individual users.'
        },
        {
          question: 'What about battery life sustainability?',
          answer: 'Currently 6.5 hours. Optimization strategies: dynamic frame rate (30 FPS → 15 FPS when idle), model pruning, and larger battery option for power users. Target 8-10 hours for production.'
        },
        {
          question: 'Privacy concerns with camera always on?',
          answer: '100% on-device processing. NO video uploaded to cloud. NO data collection. Fully offline. User can physically cover camera when not in use. Privacy-first design.'
        }
      ],
      businessQA: [
        {
          question: 'How do you reach 18M users with limited budget?',
          answer: 'Government partnerships (ADIP Scheme provides 100% subsidy for eligible users). Pilot with deaf associations for word-of-mouth. Scale gradually: Year 1 (100 units) → Year 2 (1,000) → Year 3 (10,000).'
        },
        {
          question: 'What prevents big tech from copying you?',
          answer: 'First-mover advantage in ISL. Deep community relationships. ISL dataset we build becomes moat. Also, big tech focuses on mass market (ASL), not niche (ISL). We own this segment.'
        },
        {
          question: 'Sustainability beyond grants?',
          answer: 'Mixed model: (1) Direct sales to individuals, (2) Government subsidized distribution, (3) CSR partnerships with corporates, (4) Premium features for higher-paying customers cross-subsidize basic units.'
        }
      ],
      socialQA: [
        {
          question: 'Have you worked with the deaf community?',
          answer: 'Yes. Consulted with NAD India representatives. Testing will involve 20+ deaf individuals. Community co-design approach ensures we build what they NEED, not what we THINK they need.'
        },
        {
          question: 'What if users don\'t adopt technology?',
          answer: 'Training workshops included. Simple, intuitive interface. Works like normal glasses. Pilot programs in deaf schools to normalize usage. Focus on user experience from day one.'
        }
      ]
    },

    // Slide 20: Vision & Closing
    {
      type: 'vision-closing',
      title: 'Our Vision: A World Without Communication Barriers',
      subtitle: 'This is Just the Beginning',
      vision: {
        shortTerm: '8 Months',
        goal: 'Working prototypes empowering 20+ deaf individuals in Gujarat',
        impact: 'Proof that affordable ISL technology is possible'
      },
      midTerm: {
        period: '1-3 Years',
        goal: '10,000 devices distributed across India',
        impact: '₹15 crore revenue, ₹530 crore societal cost savings, 40,000 family members benefited'
      },
      longTerm: {
        period: '5+ Years',
        goal: 'IPSL family (India, Pakistan, Bangladesh, Nepal, Sri Lanka) - 15 million signers',
        impact: 'Global leader in sign language technology, democratizing communication access worldwide'
      },
      futureTech: [
        'Bidirectional: Speech→Sign display for hearing people',
        'Multi-language: ASL, BSL, other sign languages',
        'Context awareness: Location-based vocabulary',
        'AI personalization: Learns individual signing style',
        'Social features: Deaf community network',
        'Integration with mainstream smart glasses platforms'
      ],
      callToAction: {
        title: 'Join Us in Making History',
        message: 'Communication is not a privilege. It\'s a fundamental human right. With SSIP support, we can turn this vision into reality.',
        ask: 'We respectfully request ₹5 lakh to build the future of accessible communication.',
        commitment: 'We commit to transparent progress updates, community engagement, and measurable impact.'
      },
      closingQuote: {
        quote: '"The greatest barrier to inclusion is not disability—it\'s the failure to communicate."',
        attribution: '— Our Mission'
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

  const GlassCard = ({ children, className = "" }) => (
    <div className={`bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-2xl shadow-xl ${className}`}>
      {children}
    </div>
  );

  const renderSlide = (slide) => {
    switch (slide.type) {
      case 'covid-impact':
        return (
          <div className="p-12 bg-gradient-to-br from-red-900 via-orange-900 to-red-900 text-white h-full flex flex-col overflow-auto">
            <h2 className="text-5xl font-black mb-3">{slide.title}</h2>
            <p className="text-2xl mb-10 text-orange-200 font-light italic">{slide.subtitle}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {slide.stats.map((stat, i) => (
                <div 
                  key={i}
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                  className={`relative cursor-pointer transition-all duration-500 rounded-3xl overflow-hidden ${
                    expandedCard === i ? 'col-span-2 row-span-2 z-50 scale-105' : 'hover:scale-105'
                  }`}
                >
                  <div className={`h-full p-8 flex flex-col ${
                    expandedCard === i ? 'bg-orange-600 overflow-y-auto scrollbar-hide' : 'bg-red-800 bg-opacity-60'
                  }`}>
                    <div className="text-7xl font-black mb-4">{stat.percentage}</div>
                    <div className="text-2xl font-bold mb-4 uppercase tracking-tight">{stat.label}</div>
                    
                    {expandedCard === i && (
                      <div className="mt-6 space-y-4 animate-fade-in">
                        <div className="p-6 bg-black bg-opacity-20 rounded-2xl">
                          <p className="text-sm uppercase tracking-widest text-orange-300 mb-2 font-black">Details:</p>
                          <p className="text-lg leading-relaxed">{stat.description}</p>
                        </div>
                        <div className="p-6 bg-black bg-opacity-20 rounded-2xl border-l-4 border-white">
                          <p className="text-sm uppercase tracking-widest text-white mb-2 font-black">Impact:</p>
                          <p className="text-lg leading-relaxed font-medium">{stat.impact}</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-auto pt-4 text-xs uppercase tracking-widest text-orange-300">
                      {expandedCard === i ? 'Click to close' : 'Click for details →'}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8 bg-black bg-opacity-30 p-8 rounded-3xl border-2 border-orange-500">
              <p className="text-sm uppercase tracking-widest text-orange-300 mb-4 font-black">Real Voices:</p>
              <div className="space-y-4">
                {slide.testimonials.map((quote, i) => (
                  <p key={i} className="text-xl italic text-orange-100 leading-relaxed border-l-4 border-orange-400 pl-6">
                    {quote}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-3xl text-center border-4 border-white shadow-2xl">
              <div className="text-sm uppercase tracking-widest mb-2 font-black">Our Solution:</div>
              <div className="text-3xl font-black">{slide.solution}</div>
            </div>
          </div>
        );

      case 'healthcare-crisis':
        return (
          <div className="p-12 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white h-full flex flex-col overflow-auto">
            <h2 className="text-5xl font-black mb-3">{slide.title}</h2>
            <p className="text-2xl mb-10 text-red-200 font-light italic">{slide.subtitle}</p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="bg-red-800 bg-opacity-40 p-8 rounded-3xl border-2 border-red-500">
                <div className="text-6xl font-black mb-2">{slide.emergencyStats.independent.value}</div>
                <div className="text-lg font-bold text-red-200">{slide.emergencyStats.independent.label}</div>
              </div>
              <div className="bg-orange-800 bg-opacity-40 p-8 rounded-3xl border-2 border-orange-500">
                <div className="text-6xl font-black mb-2">{slide.emergencyStats.needFamily.value}</div>
                <div className="text-lg font-bold text-orange-200">{slide.emergencyStats.needFamily.label}</div>
              </div>
              <div className="bg-yellow-800 bg-opacity-40 p-8 rounded-3xl border-2 border-yellow-500">
                <div className="text-6xl font-black mb-2">{slide.emergencyStats.recognized.value}</div>
                <div className="text-lg font-bold text-yellow-200">{slide.emergencyStats.recognized.label}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 flex-1">
              {slide.realCases.map((caseItem, i) => (
                <div 
                  key={i}
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                  className={`cursor-pointer transition-all duration-500 ${
                    expandedCard === i ? 'col-span-3 scale-105 z-50' : 'hover:scale-105'
                  }`}
                >
                  <div className={`h-full p-8 rounded-3xl border-2 flex flex-col ${
                    expandedCard === i ? 'bg-red-600 border-white overflow-y-auto scrollbar-hide' : 'bg-gray-800 border-red-400'
                  }`}>
                    <div className="flex items-center gap-4 mb-6">
                      <AlertTriangle className="w-12 h-12 text-red-300" />
                      <h3 className="text-3xl font-black">{caseItem.title}</h3>
                    </div>
                    <p className="text-xl mb-6 leading-relaxed">{caseItem.story}</p>
                    
                    {expandedCard === i && (
                      <div className="mt-6 space-y-4 animate-fade-in">
                        <div className="p-6 bg-black bg-opacity-20 rounded-2xl border-l-4 border-white">
                          <p className="text-3xl italic leading-relaxed font-medium">{caseItem.quote}</p>
                        </div>
                        <div className="text-sm text-red-200 italic">— {caseItem.source}</div>
                      </div>
                    )}
                    
                    <div className="mt-auto pt-4 text-xs uppercase tracking-widest text-red-300">
                      {expandedCard === i ? 'Click to close' : 'Click to read full case →'}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-4">
              {slide.healthImpact.map((item, i) => (
                <div key={i} className="bg-red-900 bg-opacity-30 p-4 rounded-2xl border border-red-500">
                  <div className="text-sm uppercase tracking-widest text-red-300 mb-1 font-black">{item.issue}</div>
                  <div className="text-2xl font-black">{item.risk}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'employment-barriers':
        return (
          <div className="p-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white h-full flex flex-col overflow-auto">
            <h2 className="text-5xl font-black mb-3">{slide.title}</h2>
            <p className="text-2xl mb-10 text-purple-200 font-light italic">{slide.subtitle}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {slide.stats.map((stat, i) => (
                <div 
                  key={i}
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                  className={`cursor-pointer transition-all duration-500 ${
                    expandedCard === i ? 'col-span-2 scale-110 z-50' : 'hover:scale-105'
                  }`}
                >
                  <div className={`h-full p-8 rounded-3xl flex flex-col ${
                    expandedCard === i ? 'bg-purple-600 overflow-y-auto scrollbar-hide' : 'bg-indigo-800 bg-opacity-60'
                  }`}>
                    <div className="text-6xl font-black mb-3">{stat.metric}</div>
                    <div className="text-xl font-bold mb-4 uppercase tracking-tight">{stat.title}</div>
                    
                    {expandedCard === i && (
                      <div className="mt-6 space-y-4 animate-fade-in">
                        <div className="p-6 bg-black bg-opacity-20 rounded-2xl">
                          <p className="text-lg leading-relaxed">{stat.detail}</p>
                        </div>
                        <div className="p-4 bg-white bg-opacity-10 rounded-xl text-sm italic">
                          Source: {stat.source}
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-auto pt-4 text-xs uppercase tracking-widest text-purple-300">
                      {expandedCard === i ? 'Click to close' : 'Tap for source →'}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="text-3xl font-black mb-6 text-purple-300">Workplace Barriers in India:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {slide.workplaceBarriers.map((barrier, i) => (
                  <div key={i} className="bg-purple-800 bg-opacity-40 p-6 rounded-2xl border-2 border-purple-400">
                    <div className="text-xl font-black mb-3 text-purple-200">{barrier.barrier}</div>
                    <p className="text-base mb-3 leading-relaxed">{barrier.description}</p>
                    <div className="text-sm font-bold text-red-300 uppercase">⚠️ {barrier.impact}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-3xl border-4 border-white">
              <h3 className="text-2xl font-black mb-6">Corporate Success Stories:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {slide.corporateSuccess.map((story, i) => (
                  <div key={i} className="bg-black bg-opacity-20 p-6 rounded-2xl">
                    <div className="text-3xl font-black mb-3">{story.company}</div>
                    <p className="text-base mb-2"><strong>Approach:</strong> {story.action}</p>
                    <p className="text-base mb-2"><strong>Cost:</strong> {story.cost}</p>
                    <p className="text-base mb-4"><strong>Result:</strong> {story.result}</p>
                    <div className="bg-yellow-500 text-gray-900 p-4 rounded-xl font-black">
                      💡 {story.yourAdvantage}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'mental-health':
        return (
          <div className="p-12 bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 text-white h-full flex flex-col overflow-auto">
            <h2 className="text-5xl font-black mb-3">{slide.title}</h2>
            <p className="text-2xl mb-10 text-pink-200 font-light italic">{slide.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
              {slide.comparison.map((item, i) => (
                <div 
                  key={i}
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                  className={`cursor-pointer transition-all duration-500 ${
                    expandedCard === i ? 'col-span-2 scale-110 z-50' : 'hover:scale-105'
                  }`}
                >
                  <div className={`h-full p-8 rounded-3xl flex flex-col ${
                    expandedCard === i ? 'bg-pink-600 overflow-y-auto scrollbar-hide' : 'bg-purple-800 bg-opacity-60'
                  }`}>
                    <div className="flex items-center gap-4 mb-4">
                      <Heart className="w-10 h-10 text-pink-300" />
                      <div className="text-2xl font-bold uppercase tracking-tight">{item.issue}</div>
                    </div>
                    <div className="flex gap-4 mb-4">
                      <div className="flex-1">
                        <div className="text-sm uppercase tracking-widest text-pink-300 mb-1">Deaf</div>
                        <div className="text-4xl font-black">{item.deafRate}</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm uppercase tracking-widest text-pink-300 mb-1">General</div>
                        <div className="text-4xl font-black opacity-60">{item.generalRate}</div>
                      </div>
                    </div>
                    <div className="text-3xl font-black text-red-300 mb-4">{item.multiplier}</div>
                    
                    {expandedCard === i && (
                      <div className="mt-6 p-6 bg-black bg-opacity-20 rounded-2xl animate-fade-in">
                        <p className="text-lg leading-relaxed">{item.description}</p>
                      </div>
                    )}
                    
                    <div className="mt-auto pt-4 text-xs uppercase tracking-widest text-pink-300">
                      {expandedCard === i ? 'Click to close' : 'Click for context →'}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8 space-y-6">
              {slide.testimonials.map((testimonial, i) => (
                <div key={i} className="bg-purple-800 bg-opacity-40 p-8 rounded-3xl border-2 border-purple-400">
                  <p className="text-3xl italic mb-4 leading-relaxed font-light">{testimonial.quote}</p>
                  <p className="text-sm text-purple-300 italic">— {testimonial.source}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-3xl text-center border-4 border-white shadow-2xl">
              <div className="text-3xl font-black">{slide.ourImpact}</div>
            </div>
          </div>
        );

      case 'interpreter-crisis':
        return (
          <div className="p-12 bg-gradient-to-br from-gray-900 via-red-800 to-gray-900 text-white h-full flex flex-col overflow-auto">
            <h2 className="text-5xl font-black mb-3">{slide.title}</h2>
            <p className="text-2xl mb-10 text-red-200 font-light italic">{slide.subtitle}</p>

            <div className="mb-10">
              <table className="w-full border-collapse rounded-3xl overflow-hidden shadow-2xl">
                <thead>
                  <tr className="bg-red-900">
                    <th className="p-4 text-left uppercase tracking-widest text-sm">Country</th>
                    <th className="p-4 text-right uppercase tracking-widest text-sm">Deaf Population</th>
                    <th className="p-4 text-right uppercase tracking-widest text-sm">Interpreters</th>
                    <th className="p-4 text-right uppercase tracking-widest text-sm">Ratio</th>
                    <th className="p-4 text-center uppercase tracking-widest text-sm">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {slide.globalComparison.map((country, i) => (
                    <tr 
                      key={i} 
                      className={`${i === 4 ? 'bg-red-800 text-yellow-300 font-black text-xl' : 'bg-gray-800 hover:bg-gray-700'} transition-colors`}
                    >
                      <td className="p-4">{country.country}</td>
                      <td className="p-4 text-right">{country.deaf}</td>
                      <td className="p-4 text-right">{country.interpreters}</td>
                      <td className="p-4 text-right font-black text-2xl">{country.ratio}</td>
                      <td className="p-4 text-center text-3xl">{country.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mb-10 bg-red-600 p-8 rounded-3xl text-center border-4 border-white shadow-2xl animate-pulse">
              <div className="text-5xl font-black">{slide.shockingStat}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-800 bg-opacity-40 p-8 rounded-3xl border-2 border-red-400">
                <h3 className="text-3xl font-black mb-6 text-red-200">Human Interpreter Costs:</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Hourly:</span>
                    <span className="text-2xl font-black">{slide.costAnalysis.interpreter.hourly}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Daily:</span>
                    <span className="text-2xl font-black">{slide.costAnalysis.interpreter.daily}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Monthly:</span>
                    <span className="text-2xl font-black">{slide.costAnalysis.interpreter.monthly}</span>
                  </div>
                  <div className="flex justify-between items-center border-t-2 border-red-500 pt-4">
                    <span className="font-black">Yearly:</span>
                    <span className="text-3xl font-black text-red-300">{slide.costAnalysis.interpreter.yearly}</span>
                  </div>
                  <div className="text-sm text-red-300 mt-4">⚠️ {slide.costAnalysis.interpreter.availability}</div>
                </div>
              </div>

              <div className="bg-green-600 p-8 rounded-3xl border-4 border-white shadow-2xl">
                <h3 className="text-3xl font-black mb-6">Our Device:</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-sm uppercase tracking-widest mb-2">One-Time Cost</div>
                    <div className="text-7xl font-black">{slide.costAnalysis.yourDevice.cost}</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-6 rounded-2xl">
                    <p className="text-2xl font-black mb-2">{slide.costAnalysis.yourDevice.savings}</p>
                    <p className="text-lg">✅ {slide.costAnalysis.yourDevice.availability}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'government-funding':
        return (
          <div className="p-12 bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-900 text-white h-full flex flex-col overflow-auto">
            <h2 className="text-5xl font-black mb-3">{slide.title}</h2>
            <p className="text-2xl mb-10 text-blue-200 font-light italic">{slide.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-blue-800 bg-opacity-40 p-8 rounded-3xl border-2 border-blue-400">
                <h3 className="text-3xl font-black mb-6 text-blue-200">ADIP Scheme:</h3>
                <div className="space-y-3">
                  <p><strong>Full Name:</strong> {slide.adipScheme.name}</p>
                  <p><strong>Operational:</strong> {slide.adipScheme.operational}</p>
                  <p><strong>Eligibility:</strong> {slide.adipScheme.eligibility}</p>
                  <div className="bg-green-600 p-4 rounded-2xl mt-4">
                    <p className="text-2xl font-black">{slide.adipScheme.assistance}</p>
                  </div>
                  <p><strong>Beneficiaries:</strong> {slide.adipScheme.beneficiaries}</p>
                  <p><strong>Budget:</strong> {slide.adipScheme.budget}</p>
                  <div className="bg-yellow-500 text-gray-900 p-4 rounded-2xl mt-4">
                    <p className="font-black">Gujarat: {slide.adipScheme.gujaratUtilization}</p>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-800 bg-opacity-40 p-8 rounded-3xl border-2 border-indigo-400">
                <h3 className="text-3xl font-black mb-6 text-indigo-200">Perfect Fit:</h3>
                <div className="space-y-4">
                  {slide.perfectFit.map((point, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-green-600 rounded-2xl">
                      <div className="text-3xl">✓</div>
                      <p className="text-lg font-bold flex-1">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-10 bg-red-800 bg-opacity-40 p-8 rounded-3xl border-2 border-red-400">
              <h3 className="text-3xl font-black mb-6 text-red-200">Accessible India Campaign Gaps:</h3>
              <div className="grid grid-cols-4 gap-4">
                {Object.entries(slide.accessibleIndia.gaps).map(([key, value]) => (
                  <div key={key} className={`p-6 rounded-2xl ${key === 'communication' ? 'bg-red-600 border-4 border-white col-span-2 scale-110' : 'bg-gray-800'}`}>
                    <div className="text-sm uppercase tracking-widest mb-2">{key}</div>
                    <div className="text-4xl font-black">{value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-white text-gray-900 p-6 rounded-2xl text-center">
                <p className="text-2xl font-black">{slide.accessibleIndia.biggestGap}</p>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-black mb-6">Funding Pathway:</h3>
              <div className="grid grid-cols-4 gap-4">
                {slide.funding.map((fund, i) => (
                  <div key={i} className="bg-blue-600 p-6 rounded-2xl border-2 border-blue-300">
                    <div className="text-sm uppercase tracking-widest text-blue-200 mb-2">{fund.source}</div>
                    <div className="text-2xl font-black mb-2">{fund.amount}</div>
                    <div className="text-sm text-blue-200">{fund.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'market-impact':
        return (
          <div className="p-12 bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 text-white h-full flex flex-col overflow-auto">
            <h2 className="text-5xl font-black mb-3">{slide.title}</h2>
            <p className="text-2xl mb-10 text-emerald-200 font-light italic">{slide.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {Object.entries(slide.marketSize).map(([key, data]) => (
                <div key={key} className="bg-green-800 bg-opacity-40 p-8 rounded-3xl border-2 border-green-400">
                  <div className="text-sm uppercase tracking-widest text-green-300 mb-2 font-black">{data.note}</div>
                  <div className="text-6xl font-black mb-4">{data.value}</div>
                  <p className="text-lg mb-2">{data.population}</p>
                  <p className="text-base text-green-200">@ {data.price}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-blue-800 bg-opacity-40 p-8 rounded-3xl border-2 border-blue-400">
                <h3 className="text-3xl font-black mb-6 text-blue-200">Social Impact (Year 3):</h3>
                <div className="space-y-4">
                  {slide.socialImpact.map((impact, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-black bg-opacity-20 rounded-xl">
                      <div className="flex-1">
                        <div className="font-bold">{impact.metric}</div>
                        <div className="text-sm text-blue-200">{impact.detail}</div>
                      </div>
                      <div className="text-3xl font-black text-blue-300">{impact.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-600 p-8 rounded-3xl border-4 border-white shadow-2xl">
                <h3 className="text-3xl font-black mb-6 text-gray-900">Cost Savings to Society:</h3>
                <div className="space-y-3">
                  {slide.costSavings.perUser.map((saving, i) => (
                    <div key={i} className={`flex justify-between items-center p-4 rounded-xl ${saving.category === 'TOTAL' ? 'bg-green-700 text-white border-4 border-gray-900' : 'bg-white bg-opacity-30'}`}>
                      <span className="font-black">{saving.category}</span>
                      <span className="text-2xl font-black">{saving.savings}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-gray-900 text-white p-6 rounded-2xl text-center">
                  <p className="text-xl font-black">{slide.costSavings.societalTotal}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-black mb-6">UN SDG Alignment:</h3>
              <div className="grid grid-cols-3 gap-6">
                {slide.sdgAlignment.map((sdg, i) => (
                  <div key={i} className="bg-green-600 p-6 rounded-2xl border-2 border-green-300">
                    <div className="flex items-center gap-4 mb-4">
                      <Globe className="w-12 h-12 text-green-200" />
                      <div className="text-2xl font-black">{sdg.sdg}</div>
                    </div>
                    <div className="text-lg mb-2">{sdg.goal}</div>
                    <div className="text-sm text-green-200">→ {sdg.impact}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'corporate-csr':
        return (
          <div className="p-12 bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900 text-white h-full flex flex-col overflow-auto">
            <h2 className="text-5xl font-black mb-3">{slide.title}</h2>
            <p className="text-2xl mb-10 text-purple-200 font-light italic">{slide.subtitle}</p>

            <div className="mb-10 bg-purple-800 bg-opacity-40 p-8 rounded-3xl border-2 border-purple-400">
              <h3 className="text-2xl font-black mb-4 text-purple-200">CSR Legal Requirement:</h3>
              <p className="text-lg mb-2"><strong>Law:</strong> {slide.csrRequirement.law}</p>
              <p className="text-lg mb-2"><strong>Sectors:</strong> {slide.csrRequirement.sectors}</p>
              <p className="text-lg"><strong>Opportunity:</strong> {slide.csrRequirement.opportunity}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {slide.valueProposition.map((prop, i) => (
                <div key={i} className="bg-indigo-800 bg-opacity-60 p-8 rounded-3xl hover:scale-105 transition-all">
                  <prop.icon className="w-16 h-16 mb-6 text-indigo-300" />
                  <h4 className="text-xl font-black mb-4">{prop.benefit}</h4>
                  <p className="text-base text-indigo-200">{prop.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {slide.successStories.map((story, i) => (
                <div key={i} className="bg-purple-600 p-8 rounded-3xl border-2 border-purple-300">
                  <div className="flex items-center gap-4 mb-6">
                    <Building className="w-12 h-12 text-purple-200" />
                    <h4 className="text-3xl font-black">{story.company}</h4>
                  </div>
                  <div className="space-y-3">
                    <p><strong>Approach:</strong> {story.approach}</p>
                    <p><strong>Cost:</strong> {story.cost}</p>
                    <p><strong>Outcome:</strong> {story.outcome}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-3xl text-center border-4 border-white shadow-2xl">
              <div className="text-3xl font-black">{slide.ourSolution}</div>
            </div>
          </div>
        );

      case 'tech-readiness':
        return (
          <div className="p-12 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white h-full flex flex-col overflow-auto">
            <h2 className="text-5xl font-black mb-3">{slide.title}</h2>
            <p className="text-2xl mb-10 text-blue-200 font-light italic">{slide.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {slide.techValidation.map((tech, i) => (
                <div key={i} className="bg-blue-800 bg-opacity-40 p-8 rounded-3xl border-2 border-blue-400">
                  <div className="flex items-center gap-4 mb-6">
                    <Activity className="w-12 h-12 text-blue-300" />
                    <h4 className="text-3xl font-black">{tech.component}</h4>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm uppercase tracking-widest text-blue-300 mb-1">Performance</div>
                      <div className="text-4xl font-black">{tech.performance}</div>
                    </div>
                    <div>
                      <div className="text-sm uppercase tracking-widest text-blue-300 mb-1">Validation</div>
                      <div className="text-lg">{tech.validation}</div>
                    </div>
                    <div className="bg-black bg-opacity-20 p-4 rounded-xl">
                      <div className="text-sm text-blue-200">{tech.detail}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8 bg-green-800 bg-opacity-40 p-8 rounded-3xl border-2 border-green-400">
              <h3 className="text-3xl font-black mb-6 text-green-200">Our Technical Approach:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {slide.ourApproach.map((point, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-black bg-opacity-20 rounded-xl">
                    <div className="text-3xl text-green-400">✓</div>
                    <p className="text-lg flex-1">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-3xl text-center border-4 border-white shadow-2xl">
              <div className="text-3xl font-black">{slide.competitiveAdvantage}</div>
            </div>
          </div>
        );

      case 'isl-dialects':
        return (
          <div className="p-12 bg-gradient-to-br from-blue-900 via-teal-900 to-blue-900 text-white h-full flex flex-col overflow-auto">
            <h2 className="text-5xl font-black mb-3">{slide.title}</h2>
            <p className="text-2xl mb-10 text-teal-200 font-light italic">{slide.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
              {slide.dialects.map((dialect, i) => (
                <div 
                  key={i}
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                  className={`cursor-pointer transition-all duration-500 ${
                    expandedCard === i ? 'col-span-2 scale-110 z-50' : 'hover:scale-105'
                  }`}
                >
                  <div className={`h-full p-8 rounded-3xl flex flex-col ${
                    expandedCard === i ? 'bg-teal-600 overflow-y-auto scrollbar-hide' : 'bg-blue-800 bg-opacity-60'
                  }`}>
                    <Map className="w-16 h-16 mb-4 text-teal-300" />
                    <div className="text-3xl font-black mb-3">{dialect.city}</div>
                    
                    {expandedCard === i && (
                      <div className="mt-6 space-y-4 animate-fade-in">
                        <div className="p-4 bg-black bg-opacity-20 rounded-2xl">
                          <p className="text-sm uppercase tracking-widest text-teal-300 mb-2 font-black">Characteristics:</p>
                          <p className="text-lg">{dialect.characteristics}</p>
                        </div>
                        <div className="p-4 bg-black bg-opacity-20 rounded-2xl">
                          <p className="text-sm uppercase tracking-widest text-teal-300 mb-2 font-black">Similarity:</p>
                          <p className="text-lg">{dialect.similarity}</p>
                        </div>
                        <div className="p-4 bg-green-600 rounded-2xl">
                          <p className="text-sm uppercase tracking-widest mb-2 font-black">Our Strategy:</p>
                          <p className="text-lg font-bold">{dialect.strategy}</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-auto pt-4 text-xs uppercase tracking-widest text-teal-300">
                      {expandedCard === i ? 'Click to close' : 'Click for strategy →'}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-800 bg-opacity-40 p-8 rounded-3xl border-2 border-blue-400">
                <h3 className="text-2xl font-black mb-6 text-blue-200">IPSL Context:</h3>
                <div className="space-y-3">
                  <p><strong>Family:</strong> {slide.islContext.family}</p>
                  <p><strong>Regions:</strong> {slide.islContext.regions}</p>
                  <p><strong>Total Signers:</strong> {slide.islContext.totalSigners}</p>
                  <p><strong>World Rank:</strong> {slide.islContext.worldRank}</p>
                  <p><strong>Grammar:</strong> {slide.islContext.grammarSimilarity}</p>
                  <p><strong>Vocabulary:</strong> {slide.islContext.vocabularyVariation}</p>
                </div>
              </div>

              <div className="bg-teal-800 bg-opacity-40 p-8 rounded-3xl border-2 border-teal-400">
                <h3 className="text-2xl font-black mb-6 text-teal-200">ASL vs ISL:</h3>
                <div className="space-y-4">
                  {slide.aslComparison.map((comp, i) => (
                    <div key={i} className="bg-black bg-opacity-20 p-4 rounded-xl">
                      <p className="text-sm uppercase tracking-widest text-teal-300 mb-1 font-black">{comp.feature}</p>
                      <p className="text-sm"><strong>ASL:</strong> {comp.ASL}</p>
                      <p className="text-sm"><strong>ISL:</strong> {comp.ISL}</p>
                      <p className="text-xs text-yellow-300 mt-2">→ {comp.impact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-3xl text-center border-4 border-white shadow-2xl">
              <div className="text-3xl font-black">{slide.ourAdvantage}</div>
            </div>
          </div>
        );

      default:
        return (
          <div className="p-12 bg-gray-900 text-white h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-black mb-4">{slide.title}</h2>
              <p className="text-xl">{slide.subtitle}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Slide Content */}
      <div className="w-full h-full">
        {renderSlide(slides[currentSlide])}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-4 px-8">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-full hover:bg-opacity-30 transition-all disabled:opacity-30 disabled:cursor-not-allowed border-2 border-white border-opacity-30"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <div className="bg-white bg-opacity-20 backdrop-blur-md px-6 py-3 rounded-full border-2 border-white border-opacity-30">
          <span className="text-white font-bold text-lg">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-full hover:bg-opacity-30 transition-all disabled:opacity-30 disabled:cursor-not-allowed border-2 border-white border-opacity-30"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Slide Indicator Dots */}
      <div className="absolute top-8 right-8 flex flex-col gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-30 hover:bg-opacity-50'
            }`}
          />
        ))}
      </div>

      {/* Keyboard hint */}
      <div className="absolute bottom-8 left-8 bg-white bg-opacity-10 backdrop-blur-md px-4 py-2 rounded-full border border-white border-opacity-20">
        <span className="text-white text-sm">Use ← → or Space/Backspace to navigate</span>
      </div>
    </div>
  );
};

export default SSIPEnhancedPresentation;
