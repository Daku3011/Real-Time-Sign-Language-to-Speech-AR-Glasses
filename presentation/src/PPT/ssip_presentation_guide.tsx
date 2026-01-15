import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const SlideGuide = () => {
  const [expandedSlide, setExpandedSlide] = useState<number | null>(null);

  const slides = [
    {
      number: 1,
      title: "Title Slide",
      content: {
        mainTitle: "Real-Time Sign Language to Speech AR Glasses",
        subtitle: "Bridging Communication Gaps for 18 Million Indians",
        team: "Your Name & Team Members",
        institution: "Your College/University",
        event: "SSIP 2026 Pitch Presentation",
        date: "January 2026"
      },
      designTips: [
        "Use clean, professional font (Montserrat/Roboto)",
        "Include a high-quality image of prototype or concept render",
        "Color scheme: Blue/Green (trust, innovation) with accent color",
        "Add SSIP Gujarat logo (with permission)"
      ],
      visualElements: [
        "Background: Subtle gradient or abstract tech pattern",
        "Small icon representing AR glasses in corner",
        "Your college logo opposite SSIP logo"
      ]
    },
    {
      number: 2,
      title: "Introduction",
      content: {
        aboutYou: [
          "Engineering students passionate about assistive technology",
          "Background in [Computer Science/Electronics/AI]",
          "Personal connection: [Optional - why this matters to you]"
        ],
        context: [
          "Communication barriers affect daily life of millions",
          "Technology can democratize access to communication",
          "Combining AR, AI, and social impact"
        ]
      },
      speakerNotes: "Keep this to 60-90 seconds. Make it personal but professional. Show passion without being emotional.",
      dataPoints: [
        "Brief mention: 'We were inspired by meeting deaf community members who struggle with basic interactions like doctor visits'"
      ]
    },
    {
      number: 3,
      title: "Problem Statement",
      content: {
        statistics: [
          {
            source: "Census of India 2011",
            data: "5.07 million hearing impaired + 1.99 million speech impaired",
            visual: "Combined 7+ million people"
          },
          {
            source: "WHO & Research Studies",
            data: "18 million total when including underreported cases",
            impact: "Less than 1% of population understands ISL"
          },
          {
            source: "NAD India Reports",
            data: "89% report difficulty in healthcare communication",
            impact: "Critical barrier in emergency situations"
          },
          {
            source: "RCI Data 2024",
            data: "Only 500 certified ISL interpreters nationwide",
            impact: "1 interpreter per 10,000 deaf individuals"
          }
        ],
        realWorldExamples: [
          "Medical emergencies: Unable to explain symptoms",
          "Education: Students miss opportunities due to communication gaps",
          "Employment: Qualified candidates rejected due to interview barriers",
          "Banking/Government: Simple tasks become day-long struggles"
        ]
      },
      visualElements: [
        "Pie chart: Distribution of disabilities (Census 2011 data)",
        "Bar graph: Deaf population vs. Available interpreters",
        "Infographic: Daily communication scenarios affected"
      ],
      citations: [
        "¹Census of India 2011, Report on Disability",
        "²National Association for the Deaf India, 2023 Report",
        "³Rehabilitation Council of India, 2024 Statistics"
      ]
    },
    {
      number: 4,
      title: "Solution Overview",
      content: {
        tagline: "Wearable AI that speaks for those who sign",
        keyFeatures: [
          "Hands-free AR glasses with camera, processor, display",
          "Real-time ISL gesture recognition (500+ signs)",
          "Instant text-to-speech conversion",
          "Privacy-first: 100% on-device processing"
        ],
        howItWorks: [
          "Camera captures signing in front of user",
          "MediaPipe extracts hand landmarks (21 points per hand)",
          "TensorFlow Lite model recognizes gesture sequences",
          "Text-to-Speech engine speaks translation",
          "HUD displays confirmation"
        ],
        technicalHighlights: [
          "Powered by Raspberry Pi Zero 2 W",
          "Uses Google MediaPipe (95.7% palm detection accuracy)",
          "Custom trained CNN-LSTM model (85%+ accuracy target)",
          "6-8 hours battery life"
        ]
      },
      visualElements: [
        "Large image: Prototype glasses (front and side view)",
        "Flow diagram: Camera → AI Processing → Audio Output",
        "Technical architecture diagram",
        "Short demo video (15-20 seconds embedded)"
      ]
    },
    {
      number: 5,
      title: "What Makes Us Different - Competitive Analysis",
      content: {
        comparisonTable: [
          {
            product: "XRAI Glass (UK)",
            price: "₹40,000",
            signLanguage: "❌ No (Speech-to-text only)",
            ISL: "❌",
            privacy: "⚠️ Cloud-based",
            availability: "UK Only"
          },
          {
            product: "SignGlass (Research)",
            price: "N/A (Research only)",
            signLanguage: "✅ ASL Only",
            ISL: "❌",
            privacy: "✅ On-device",
            availability: "Not commercial"
          },
          {
            product: "Smartphone Apps",
            price: "₹0-500",
            signLanguage: "⚠️ Limited",
            ISL: "⚠️ Some",
            privacy: "❌ Cloud",
            availability: "Requires holding device"
          },
          {
            product: "Human Interpreters",
            price: "₹500-2,000/hour",
            signLanguage: "✅",
            ISL: "✅",
            privacy: "✅",
            availability: "Limited, expensive"
          },
          {
            product: "OUR SOLUTION",
            price: "₹15,000 (one-time)",
            signLanguage: "✅ ISL Focus",
            ISL: "✅ 500+ signs",
            privacy: "✅ 100% on-device",
            availability: "Wearable, always ready"
          }
        ]
      },
      keyMessages: [
        "90% cheaper than imported AR glasses",
        "ONLY ISL-focused wearable solution in India",
        "Privacy-first architecture (no video transmission)",
        "Hands remain free for natural signing"
      ],
      visualElements: [
        "Comparison table with color coding (green checkmarks, red X)",
        "Cost comparison bar chart",
        "Feature matrix highlighting unique advantages"
      ]
    },
    {
      number: 6,
      title: "Market Analysis",
      content: {
        targetMarket: {
          primary: [
            "7+ million hearing/speech impaired individuals (Census 2011)",
            "Age 18-60: Most economically active",
            "Urban first (better distribution), rural later",
            "Focus: Gujarat (15.4 lakh persons with disabilities)"
          ],
          secondary: [
            "Educational institutions (special schools)",
            "Hospitals and healthcare facilities",
            "Government service centers",
            "Corporate HR departments (accessibility compliance)"
          ],
          tertiary: [
            "Families of deaf individuals",
            "Sign language learners",
            "Interpreters (as training tool)"
          ]
        },
        marketSize: {
          TAM: "18 million potential users × ₹15,000 = ₹27,000 crore market",
          SAM: "Urban India, ages 18-60: ~5 million × ₹15,000 = ₹7,500 crore",
          SOM: "Year 1-3 target: 10,000 units = ₹15 crore revenue"
        },
        marketTrends: [
          {
            trend: "Assistive Tech Market Growth",
            data: "Global market $26.1 billion (2022), 7.1% CAGR to 2030",
            source: "Grand View Research"
          },
          {
            trend: "Government Push",
            data: "Accessible India Campaign targeting 50 cities by 2025",
            source: "DEPwD, Govt of India"
          },
          {
            trend: "Digital India",
            data: "Technology adoption in tier 2/3 cities accelerating",
            source: "NASSCOM Reports"
          }
        ]
      },
      visualElements: [
        "Market segmentation pyramid",
        "India map showing target states (start: Gujarat, Maharashtra, Karnataka)",
        "Growth projection graph (3-year timeline)"
      ]
    },
    {
      number: 7,
      title: "Business Model",
      content: {
        revenueStreams: [
          {
            stream: "Direct Sales (B2C)",
            pricing: "₹15,000 per unit",
            target: "Individual consumers",
            margin: "30-35% gross margin at scale"
          },
          {
            stream: "Institutional Sales (B2B)",
            pricing: "₹12,000 per unit (bulk discount)",
            target: "Schools, hospitals, govt offices",
            volume: "Orders of 50-500 units"
          },
          {
            stream: "Government Schemes",
            pricing: "₹15,000 (subsidized for users)",
            program: "ADIP Scheme coverage (₹15,000 max assistance)",
            potential: "Largest volume driver"
          },
          {
            stream: "Subscription Services (Future)",
            pricing: "₹199/month",
            features: "Cloud backup, advanced vocabulary, updates",
            note: "Optional, not required for basic function"
          }
        ],
        costStructure: {
          manufacturing: "₹10,000 per unit (at 100 units volume)",
          breakdown: [
            "Electronics: ₹6,500",
            "Mechanical: ₹1,800",
            "Assembly & QC: ₹1,200",
            "Packaging: ₹500"
          ],
          scaling: "At 1,000 units: ₹8,500 per unit (economies of scale)"
        },
        sustainability: [
          "Year 1: Break-even at 500 units sold",
          "Year 2: Target 2,000 units (₹3 crore revenue)",
          "Year 3: Scale to 10,000 units (₹15 crore revenue)",
          "Profit margin improves with volume (15% → 35%)"
        ]
      },
      visualElements: [
        "Revenue streams pie chart",
        "Cost breakdown visual",
        "3-year financial projection graph",
        "Unit economics infographic"
      ]
    },
    {
      number: 8,
      title: "Execution Plan & Timeline",
      content: {
        phases: [
          {
            phase: "Phase 1: Proof of Concept (Months 1-2)",
            milestones: [
              "Desktop MVP with 100 ISL signs",
              "85% accuracy on test set",
              "Dataset: 50 signers, 5,000 samples"
            ],
            status: "✅ In Progress"
          },
          {
            phase: "Phase 2: Hardware Prototype (Months 3-6)",
            milestones: [
              "Component procurement (Surat sourcing)",
              "500 signs vocabulary expansion",
              "First wearable prototype assembly",
              "90% accuracy target"
            ],
            status: "📅 Starting Soon"
          },
          {
            phase: "Phase 3: User Testing (Months 7-8)",
            milestones: [
              "20 participants, 2-week trials",
              "Real-world accuracy validation",
              "User feedback integration",
              "Refined prototype v2"
            ],
            status: "🔜 Upcoming"
          },
          {
            phase: "Phase 4: Pilot Production (Months 9-12)",
            milestones: [
              "100 units manufacturing",
              "Regulatory compliance (if needed)",
              "Distribution partnerships",
              "Marketing launch"
            ],
            status: "🎯 Target"
          }
        ],
        keyMilestones: [
          "✅ Technical validation complete (Desktop MVP)",
          "📍 SSIP Funding secured (Current)",
          "🔜 Prototype ready for demo (Month 6)",
          "🎯 First 100 customers (Month 12)"
        ],
        resources: [
          "Funding: ₹5 lakh (SSIP seed fund requested)",
          "Team: 4 core members + 2 advisors",
          "Infrastructure: College FabLab, Local electronics market",
          "Partnerships: Gujarat Deaf Association (testing)"
        ]
      },
      visualElements: [
        "Gantt chart or timeline graphic",
        "Milestone roadmap with checkpoints",
        "Resource allocation pie chart",
        "Photos of current progress (if available)"
      ]
    },
    {
      number: 9,
      title: "Team",
      content: {
        teamMembers: [
          {
            name: "[Your Name]",
            role: "Project Lead & ML Engineer",
            qualification: "B.Tech Computer Science, Year [X]",
            experience: "Projects: [Previous AI/ML projects]",
            skills: "Python, TensorFlow, Computer Vision"
          },
          {
            name: "[Team Member 2]",
            role: "Hardware & Embedded Systems",
            qualification: "B.Tech Electronics, Year [X]",
            experience: "Raspberry Pi projects, IoT systems",
            skills: "Circuit design, PCB, Raspberry Pi"
          },
          {
            name: "[Team Member 3]",
            role: "Software & App Development",
            qualification: "B.Tech IT, Year [X]",
            experience: "Mobile app development",
            skills: "React, Python, UI/UX design"
          },
          {
            name: "[Team Member 4]",
            role: "Design & User Research",
            qualification: "B.Des/Engineering, Year [X]",
            experience: "3D modeling, user testing",
            skills: "CAD, 3D printing, user research"
          }
        ],
        advisors: [
          {
            name: "[Faculty Advisor]",
            role: "Technical Mentor",
            expertise: "AI/ML, Computer Vision",
            affiliation: "Professor, [Department]"
          },
          {
            name: "[Community Advisor]",
            role: "Deaf Community Liaison",
            expertise: "ISL, User Advocacy",
            affiliation: "Gujarat Deaf Association"
          }
        ],
        teamStrength: [
          "Multidisciplinary: Hardware + Software + Design",
          "Direct community engagement from day one",
          "Prior experience in embedded systems and ML",
          "Passionate about assistive technology"
        ]
      },
      visualElements: [
        "Team photos with name/role labels",
        "Skills matrix or competency chart",
        "Organizational structure diagram"
      ]
    },
    {
      number: 10,
      title: "The Ask",
      content: {
        fundingRequest: {
          amount: "₹5,00,000 (5 Lakhs)",
          justification: "Seed funding for prototype development and testing"
        },
        fundBreakdown: [
          {
            category: "Hardware Components",
            amount: "₹2,50,000",
            details: "2 prototypes + testing equipment (₹22,755 × 2 + tools)"
          },
          {
            category: "Data Collection & Testing",
            amount: "₹1,00,000",
            details: "Participant compensation, field testing, travel"
          },
          {
            category: "Manufacturing Setup",
            amount: "₹1,00,000",
            details: "3D printing, assembly tools, small-scale production"
          },
          {
            category: "Marketing & Demo",
            amount: "₹30,000",
            details: "Video production, demo materials, events"
          },
          {
            category: "Contingency",
            amount: "₹20,000",
            details: "Unexpected costs, component failures"
          }
        ],
        additionalSupport: [
          "Mentorship from industry experts in AR/AI",
          "Access to testing facilities and fabrication labs",
          "Connections to disability welfare departments",
          "Guidance on regulatory compliance"
        ],
        terms: [
          "Timeline: 12 months to working prototype",
          "Milestone-based fund release",
          "Monthly progress reports to SSIP",
          "Open to partnership/equity discussions for scaling"
        ]
      },
      visualElements: [
        "Fund allocation pie chart",
        "Milestone-funding timeline",
        "Return on investment projection (social + financial)"
      ]
    },
    {
      number: 11,
      title: "Social Impact & Vision",
      content: {
        immediateImpact: [
          "Enable independent communication for 18 million Indians",
          "Reduce healthcare communication errors",
          "Increase employment opportunities for deaf individuals",
          "Support inclusive education"
        ],
        sdgAlignment: [
          {
            goal: "SDG 3: Good Health and Well-being",
            impact: "Better healthcare access and communication"
          },
          {
            goal: "SDG 4: Quality Education",
            impact: "Educational accessibility in mainstream schools"
          },
          {
            goal: "SDG 10: Reduced Inequalities",
            impact: "Equal communication opportunities"
          }
        ],
        governmentAlignment: [
          "Rights of Persons with Disabilities Act 2016 (Sections 25, 33)",
          "Accessible India Campaign (Sugamya Bharat Abhiyan)",
          "ADIP Scheme eligibility (₹15,000 max assistance)",
          "Digital India Mission - Technology for inclusion"
        ],
        longTermVision: [
          "Year 3: 10,000 users across India",
          "Year 5: Standard assistive device in govt programs",
          "Year 10: Eliminate communication barriers for all sign language users"
        ],
        testimonial: [
          "Include a quote from deaf community member (if available)",
          "Or vision statement: 'Imagine a world where signing is as understood as speaking'"
        ]
      },
      visualElements: [
        "SDG logos (with proper attribution)",
        "India map showing expansion plan",
        "Before/After scenario illustrations",
        "User testimonial slide (photo + quote)"
      ]
    },
    {
      number: 12,
      title: "Conclusion",
      content: {
        keySummary: [
          "🎯 Problem: 18M Indians face communication barriers daily",
          "💡 Solution: Affordable, hands-free AR glasses for ISL translation",
          "🚀 Market: ₹27,000 crore opportunity, completely underserved",
          "⚡ Technology: Proven ML/AI on accessible hardware",
          "💰 Business: Sustainable model with government scheme alignment",
          "❤️ Impact: Lives transformed, independence restored"
        ],
        uniqueValue: [
          "First ISL-focused wearable solution in India",
          "90% more affordable than alternatives",
          "Privacy-first, works offline anywhere",
          "Community-driven development"
        ],
        callToAction: [
          "Support us to build a more inclusive India",
          "Join us in eliminating communication barriers",
          "Help bring this technology to those who need it most"
        ],
        closingStatement: "Together, we can give voice to millions of Indians who communicate through sign language. All they need is to be heard."
      },
      visualElements: [
        "Powerful image: Deaf person using glasses successfully",
        "Key metrics summary infographic",
        "Your contact information prominently displayed"
      ]
    },
    {
      number: 13,
      title: "Q&A Preparation",
      content: {
        anticipatedQuestions: [
          {
            q: "How accurate is your system?",
            a: "Currently 85% on 100 signs (desktop), targeting 90%+ for 500 signs on prototype. Academic research (SignGlass) achieved 83% with similar approach."
          },
          {
            q: "What about privacy concerns?",
            a: "100% on-device processing. No video transmission. Only skeletal landmarks extracted, not actual images. Users have full control."
          },
          {
            q: "Why not just use smartphone apps?",
            a: "Hands must be free for natural signing. Holding phone interrupts communication flow and makes two-handed signs impossible."
          },
          {
            q: "How will you handle different signing styles?",
            a: "Diverse training data (50+ signers) + user calibration mode + adaptive learning that improves with use."
          },
          {
            q: "What about battery life?",
            a: "6-8 hours on 2500mAh battery with power optimization. Sufficient for full day use. USB-C charging available."
          },
          {
            q: "How do you plan to scale manufacturing?",
            a: "Starting with small batch (100 units), partnering with local electronics manufacturers, open to contract manufacturing for larger volumes."
          },
          {
            q: "Regulatory compliance?",
            a: "Consulting with regulatory experts. May be Class A medical device or assistive tech (outside medical regulation). Timeline includes compliance activities."
          },
          {
            q: "What if someone doesn't know ISL?",
            a: "Primary users are existing ISL signers. Future: Can help learners by providing feedback. Bidirectional feature will help non-signers too."
          }
        ],
        technicalBackup: [
          "Have GitHub repo ready to show",
          "Desktop demo video ready (if possible)",
          "Component list and cost breakdown",
          "Technical architecture diagram"
        ]
      }
    },
    {
      number: 14,
      title: "Closing Slide",
      content: {
        thankYou: "Thank You for Your Time and Consideration",
        tagline: "Building Bridges Through Technology",
        contactInfo: [
          {
            label: "Email",
            value: "your.email@college.edu"
          },
          {
            label: "Phone",
            value: "+91 XXXXX XXXXX"
          },
          {
            label: "GitHub",
            value: "github.com/Daku3011/Real-Time-Sign-Language-to-Speech-AR-Glasses"
          },
          {
            label: "LinkedIn",
            value: "linkedin.com/in/yourprofile"
          }
        ],
        followUp: "We welcome questions, feedback, and partnership opportunities",
        qrCode: "Consider adding QR code linking to demo video or project page"
      },
      visualElements: [
        "Professional team photo",
        "Contact information clearly readable",
        "QR code for easy follow-up",
        "SSIP/College logos"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-indigo-900 mb-4">
            Complete SSIP Presentation Guide
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Real-Time Sign Language to Speech AR Glasses
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-6">
            <p className="text-sm text-indigo-900">
              <strong>Total Presentation Time:</strong> 15-20 minutes (12-15 slides + 3-5 min Q&A)
            </p>
            <p className="text-sm text-indigo-900 mt-2">
              <strong>Key Resources Used:</strong> Census 2011, WHO Reports, Academic Research (SignGlass), Government Schemes (ADIP), Market Research (Grand View)
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {slides.map((slide) => (
            <div key={slide.number} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => setExpandedSlide(expandedSlide === slide.number ? null : slide.number)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    {slide.number}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{slide.title}</h2>
                </div>
                {expandedSlide === slide.number ? (
                  <ChevronUp className="text-indigo-600" size={24} />
                ) : (
                  <ChevronDown className="text-indigo-600" size={24} />
                )}
              </button>

              {expandedSlide === slide.number && (
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <div className="prose max-w-none">
                    {Object.entries(slide.content).map(([key, value]) => (
                      <div key={key} className="mb-6">
                        <h3 className="text-lg font-semibold text-indigo-900 capitalize mb-3">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        {Array.isArray(value) ? (
                          <ul className="list-disc pl-6 space-y-2">
                            {value.map((item, idx) => (
                              <li key={idx} className="text-gray-700">
                                {typeof item === 'object' ? (
                                  <div className="bg-white p-3 rounded border border-gray-200 my-2">
                                    {Object.entries(item).map(([k, v]) => (
                                      <div key={k} className="mb-1">
                                        <strong className="text-indigo-700">{k}:</strong>{' '}
                                        {typeof v === 'object' && v !== null ? JSON.stringify(v) : String(v ?? '')}
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  item
                                )}
                              </li>
                            ))}
                          </ul>
                        ) : typeof value === 'object' ? (
                          <div className="bg-white p-4 rounded border border-gray-200">
                            {Object.entries(value).map(([k, v]) => (
                              <div key={k} className="mb-2">
                                <strong className="text-indigo-700">{k}:</strong>{' '}
                                {Array.isArray(v) ? (
                                  <ul className="list-disc pl-6 mt-1">
                                    {v.map((item, idx) => (
                                      <li key={idx} className="text-gray-700">{item}</li>
                                    ))}
                                  </ul>
                                ) : (
                                  <span className="text-gray-700">{typeof v === 'object' && v !== null ? JSON.stringify(v) : String(v ?? '')}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-700">{value}</p>
                        )}
                      </div>
                    ))}

                    {slide.visualElements && (
                      <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                        <h4 className="font-semibold text-blue-900 mb-2">Visual Elements to Include:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {slide.visualElements.map((element, idx) => (
                            <li key={idx} className="text-blue-800">{element}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {slide.citations && (
                      <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">
                        <h4 className="font-semibold text-yellow-900 mb-2">Citations:</h4>
                        <ul className="text-sm space-y-1">
                          {slide.citations.map((citation, idx) => (
                            <li key={idx} className="text-yellow-800">{citation}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {slide.speakerNotes && (
                      <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">Speaker Notes:</h4>
                        <p className="text-green-800">{slide.speakerNotes}</p>
                      </div>
                    )}

                    {slide.designTips && (
                      <div className="mt-4 p-3 bg-purple-50 rounded border border-purple-200">
                        <h4 className="font-semibold text-purple-900 mb-2">Design Tips:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {slide.designTips.map((tip, idx) => (
                            <li key={idx} className="text-purple-800">{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">Quick Links to Data Sources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://censusindia.gov.in/" target="_blank" rel="noopener noreferrer" 
               className="flex items-center space-x-2 p-3 bg-indigo-50 rounded hover:bg-indigo-100 transition-colors">
              <ExternalLink size={20} className="text-indigo-600" />
              <span className="text-indigo-900">Census of India (Disability Data)</span>
            </a>
            <a href="https://disabilityaffairs.gov.in/" target="_blank" rel="noopener noreferrer"
               className="flex items-center space-x-2 p-3 bg-indigo-50 rounded hover:bg-indigo-100 transition-colors">
              <ExternalLink size={20} className="text-indigo-600" />
              <span className="text-indigo-900">DEPwD - Government Schemes</span>
            </a>
            <a href="https://www.islrtc.nic.in/" target="_blank" rel="noopener noreferrer"
               className="flex items-center space-x-2 p-3 bg-indigo-50 rounded hover:bg-indigo-100 transition-colors">
              <ExternalLink size={20} className="text-indigo-600" />
              <span className="text-indigo-900">ISLRTC - ISL Dictionary</span>
            </a>
            <a href="https://ssip.gujarat.gov.in/" target="_blank" rel="noopener noreferrer"
               className="flex items-center space-x-2 p-3 bg-indigo-50 rounded hover:bg-indigo-100 transition-colors">
              <ExternalLink size={20} className="text-indigo-600" />
              <span className="text-indigo-900">SSIP Gujarat Portal</span>
            </a>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Presentation Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Before Presentation:</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Practice 10+ times, time yourself (12-15 min)</li>
                <li>Prepare backup: USB + cloud link to presentation</li>
                <li>Test all videos/animations on presentation computer</li>
                <li>Print handouts with key statistics</li>
                <li>Dress professionally</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">During Presentation:</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Make eye contact, not just reading slides</li>
                <li>Speak clearly, moderate pace</li>
                <li>Use pointer/laser for emphasis</li>
                <li>Pause for questions naturally</li>
                <li>Show passion and conviction</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Visual Design:</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Use 30-36pt font minimum</li>
                <li>Limit text: 6 lines per slide max</li>
                <li>High contrast colors</li>
                <li>Professional images only</li>
                <li>Consistent theme throughout</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Handling Q&A:</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Listen fully before answering</li>
                <li>Repeat question for audience</li>
                <li>Be honest: "Great question, we're exploring that"</li>
                <li>Keep answers concise (30-60 sec)</li>
                <li>Have team backup for technical questions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Download Checklist</h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-indigo-600" />
              <span>All slides created with proper formatting</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-indigo-600" />
              <span>Data sources cited on each slide</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-indigo-600" />
              <span>High-quality images and diagrams included</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-indigo-600" />
              <span>Demo video prepared (15-20 seconds)</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-indigo-600" />
              <span>Speaker notes added to slides</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-indigo-600" />
              <span>Q&A answers prepared</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-indigo-600" />
              <span>Contact information on closing slide</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-indigo-600" />
              <span>Backup copy saved (USB + cloud)</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-indigo-600" />
              <span>Practiced full presentation 10+ times</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideGuide;