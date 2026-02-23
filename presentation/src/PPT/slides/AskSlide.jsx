import React from 'react';

const AskSlide = () => (
    <div className="w-full h-full overflow-y-auto slide-bg-mesh slide-content-wrapper">
        <div style={{ padding: 'var(--slide-py) var(--slide-px)', maxWidth: '1200px', margin: '0 auto', paddingBottom: '100px' }}>

            <div className="mb-2 animate-fade-up delay-1">
                <span style={{ color: 'var(--gold)', fontSize: '19px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Slide 11 of 12</span>
            </div>
            <h2 className="animate-fade-up delay-1 gradient-text-primary" style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(36px, 4.5vw, 56px)',
                marginBottom: '8px', letterSpacing: '-0.02em',
            }}>
                The Ask
            </h2>
            <div className="animate-fade-up delay-2" style={{ width: '48px', height: '3px', background: 'var(--gold)', borderRadius: '2px', marginBottom: '28px' }} />

            {/* Main Ask */}
            <div className="animate-fade-up delay-2" style={{
                background: 'rgba(240,165,0,0.1)',
                borderRadius: '16px', padding: '32px', textAlign: 'center', marginBottom: '24px',
                border: '1px solid rgba(240,165,0,0.3)', boxShadow: 'var(--shadow-md)'
            }}>
                <div style={{ fontSize: '20px', color: 'var(--slate-dark)', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    SSIP Grant Request
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(50px, 7vw, 84px)', color: 'var(--gold)', lineHeight: 1, marginBottom: '12px' }}>
                    ₹2,00,000
                </div>
                <p style={{ fontSize: '21px', color: 'var(--charcoal)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.5, fontWeight: 500 }}>
                    6-month runway to deliver 5 wearable prototypes, a filed patent, and 20+ user testimonials
                </p>
            </div>

            {/* Spend Allocation */}
            <div className="animate-fade-up delay-3" style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px',
            }}>
                {/* Breakdown */}
                <div className="glass-card" style={{
                    padding: '24px',

                }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: 'var(--charcoal)', marginBottom: '20px' }}>
                        Projected Spend Allocation
                    </h3>
                    {[
                        { item: 'Hardware Prototypes (2 units)', amt: '₹75,000', pct: 37.5, color: 'var(--teal)', textShadow: '0 0 1px rgba(0,180,216,0.3)', deliverable: '2 working wearable devices' },
                        { item: 'IP Filing & Patent', amt: '₹40,000', pct: 20, color: 'var(--gold)', deliverable: 'Patent application filed' },
                        { item: 'ML Training & Data Collection', amt: '₹30,000', pct: 15, color: '#A78BFA', deliverable: '200-sign model at 90% accuracy' },
                        { item: 'User Testing & Field Trials', amt: '₹25,000', pct: 12.5, color: 'var(--success)', deliverable: '20+ user feedback reports' },
                        { item: '3D Printing & Manufacturing R&D', amt: '₹20,000', pct: 10, color: '#F59E0B', deliverable: 'Production-ready frame design' },
                        { item: 'Contingency', amt: '₹10,000', pct: 5, color: 'var(--slate)', deliverable: 'Risk buffer' },
                    ].map((s, i) => (
                        <div key={i} style={{ marginBottom: '16px' }}>
                            <div className="flex items-center justify-between mb-1">
                                <span style={{ fontSize: '19px', fontWeight: 600, color: 'var(--charcoal)' }}>{s.item}</span>
                                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: s.color }}>{s.amt}</span>
                            </div>
                            {/* Progress bar */}
                            <div style={{ height: '8px', borderRadius: '4px', background: 'var(--light-gray)', marginBottom: '6px', overflow: 'hidden' }}>
                                <div style={{ width: `${s.pct}%`, height: '100%', borderRadius: '4px', background: s.color, transition: 'width 0.8s ease' }} />
                            </div>
                            <div className="flex items-center justify-between">
                                <span style={{ fontSize: '17px', color: 'var(--slate-dark)', fontWeight: 500 }}>Deliverable: {s.deliverable}</span>
                                <span style={{ fontSize: '17px', color: 'var(--slate-dark)', fontWeight: 500 }}>{s.pct}%</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Timeline + Non-financial */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Milestone Timeline */}
                    <div className="glass-card" style={{
                        padding: '24px', flex: 1,
                    }}>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: 'var(--charcoal)', marginBottom: '16px' }}>
                            Milestone-Linked Timeline
                        </h3>
                        {[
                            { month: 'M1-2', milestone: 'Patent filed + first 2 prototypes built', color: 'var(--teal)', textShadow: '0 0 1px rgba(0,180,216,0.3)' },
                            { month: 'M3-4', milestone: '3 more prototypes + user testing begins', color: 'var(--gold)' },
                            { month: 'M5-6', milestone: 'Field trials + ADIP application prep', color: 'var(--success)' },
                            { month: 'M6', milestone: 'DEMO to SSIP panel — all 5 prototypes', color: '#EF4444' },
                        ].map((m, i) => (
                            <div key={i} className="flex items-start gap-4 mb-4">
                                <div style={{
                                    minWidth: '48px', padding: '6px 10px', borderRadius: '6px', textAlign: 'center',
                                    background: `${m.color}15`, border: `1px solid ${m.color}30`,
                                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: m.color,
                                }}>
                                    {m.month}
                                </div>
                                <span style={{ fontSize: '19px', color: 'var(--slate-dark)', lineHeight: 1.4, marginTop: '2px' }}>{m.milestone}</span>
                            </div>
                        ))}
                    </div>

                    {/* Non-Financial */}
                    <div className="glass-card" style={{
                        padding: '24px',

                    }}>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: 'var(--charcoal)', marginBottom: '12px' }}>
                            Non-Financial Support Needed
                        </h3>
                        {[
                            'Access to FabLab for prototyping',
                            'Mentorship from ML & hardware experts',
                            'Connection to deaf community organizations',
                            'Support for pilot deployment in institutions',
                        ].map((n, i) => (
                            <div key={i} className="flex items-center gap-3 mb-3">
                                <div style={{ width: '8px', height: '8px', borderRadius: '4px', background: 'var(--teal)', flexShrink: 0 }} />
                                <span style={{ fontSize: '19px', color: 'var(--slate-dark)' }}>{n}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Closing Statement */}
            <div className="animate-fade-up delay-6" style={{
                background: 'linear-gradient(135deg, rgba(0,180,216,0.08), rgba(0,180,216,0.02))',
                borderRadius: '12px', padding: '24px', textAlign: 'center',
                border: '1px solid rgba(0,180,216,0.2)', boxShadow: 'var(--shadow-md)'
            }}>
                <p style={{ fontSize: '22px', color: 'var(--charcoal)', lineHeight: 1.6, fontStyle: 'italic', maxWidth: '700px', margin: '0 auto 16px' }}>
                    "Communication is a fundamental right. With ₹2L, we deliver technology that lets 18 million Indians be heard — for the first time."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '20px', color: 'var(--slate)' }}>rdwarkesh1300@gmail.com</span>
                    <span style={{ color: 'var(--border)' }}>|</span>
                    <span style={{ fontSize: '20px', color: 'var(--slate)' }}>+91 90999 35366</span>
                    <span style={{ color: 'var(--border)' }}>|</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: 'var(--teal)', textShadow: '0 0 1px rgba(0,180,216,0.3)' }}>Team Inno8</span>
                </div>
            </div>
        </div>
    </div>
);

export default AskSlide;
