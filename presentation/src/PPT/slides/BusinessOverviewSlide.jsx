import React from 'react';

const BusinessOverviewSlide = () => (
    <div className="w-full h-full overflow-y-auto slide-bg-mesh slide-content-wrapper">
        <div style={{ padding: 'var(--slide-py) var(--slide-px)', maxWidth: '1200px', margin: '0 auto', paddingBottom: '100px' }}>

            <div className="mb-2 animate-fade-up delay-1">
                <span style={{ color: 'var(--teal)', textShadow: 'var(--shadow-glow)', fontSize: '16px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Slide 3 of 12</span>
            </div>
            <h2 className="animate-fade-up delay-1 gradient-text-primary" style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 50px)',
                marginBottom: '8px', letterSpacing: '-0.02em',
            }}>
                Business Overview
            </h2>
            <div className="animate-fade-up delay-2" style={{ width: '48px', height: '3px', background: 'var(--teal)', borderRadius: '2px', marginBottom: '28px' }} />

            {/* Mission Statement */}
            <div className="animate-fade-up delay-2" style={{
                background: 'var(--navy)', borderRadius: '16px', padding: '28px 32px', marginBottom: '24px',
            }}>
                <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '10px', textTransform: 'uppercase' }}>Our Mission</div>
                <p style={{ fontSize: 'clamp(18px, 2.2vw, 26px)', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, lineHeight: 1.4, marginBottom: 0 }}>
                    To give <span style={{ color: 'var(--teal)' }}>voice to 18 million deaf Indians</span> through affordable, AI-powered AR wearables — eliminating the communication barrier that isolates them daily.
                </p>
            </div>

            {/* Problem + Solution summary */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>

                {/* The Problem */}
                <div className="animate-fade-up delay-3" style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid var(--border)', borderTop: '4px solid var(--alert)', boxShadow: 'var(--shadow-md)' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: 'var(--charcoal)', marginBottom: '14px' }}>
                        The Problem
                    </h3>
                    {[
                        { icon: '🗣️', text: 'India has only 339 certified ISL interpreters for 63M people with hearing loss' },
                        { icon: '🏥', text: 'Deaf patients face misdiagnosis risk — no interpreters in 99% of hospitals' },
                        { icon: '💼', text: '2–3× higher unemployment rate due to communication barriers' },
                        { icon: '📱', text: 'Existing apps require phones — hands are busy while signing' },
                    ].map((p, i) => (
                        <div key={i} className="flex items-start gap-3 mb-3">
                            <span style={{ fontSize: '18px', flexShrink: 0 }}>{p.icon}</span>
                            <span style={{ fontSize: '16px', color: 'var(--slate-dark)', lineHeight: 1.5 }}>{p.text}</span>
                        </div>
                    ))}
                </div>

                {/* Our Solution */}
                <div className="animate-fade-up delay-4" style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid var(--border)', borderTop: '4px solid var(--teal)', boxShadow: 'var(--shadow-md)' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: 'var(--charcoal)', marginBottom: '14px' }}>
                        Our Solution
                    </h3>
                    {[
                        { icon: '👓', text: 'AI-powered AR glasses with real-time ISL-to-speech translation' },
                        { icon: '🔒', text: 'Fully on-device processing — no internet needed, completely private' },
                        { icon: '💰', text: '₹15,000 retail (100% free under ADIP govt subsidy for BPL users)' },
                        { icon: '🇮🇳', text: 'Built exclusively for Indian Sign Language (ISL) — unlike any global competitor' },
                    ].map((s, i) => (
                        <div key={i} className="flex items-start gap-3 mb-3">
                            <span style={{ fontSize: '18px', flexShrink: 0 }}>{s.icon}</span>
                            <span style={{ fontSize: '16px', color: 'var(--slate-dark)', lineHeight: 1.5 }}>{s.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Business Model Summary */}
            <div className="animate-fade-up delay-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
                {[
                    { label: 'Business Type', value: 'Hardware + SaaS', color: 'var(--teal)' },
                    { label: 'Revenue Model', value: 'B2C / B2G / B2B', color: 'var(--gold)' },
                    { label: 'Key Channel', value: 'ADIP Govt Scheme', color: 'var(--success)' },
                    { label: 'Year 1 Target', value: '50 Units', color: '#A78BFA' },
                    { label: 'Registered', value: 'Gujarat, India', color: '#F59E0B' },
                ].map((item, i) => (
                    <div key={i} style={{
                        background: '#fff', borderRadius: '12px', padding: '18px', textAlign: 'center',
                        border: '1px solid var(--border)', borderBottom: `3px solid ${item.color}`,
                        boxShadow: 'var(--shadow-sm)',
                    }}>
                        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--slate)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>{item.label}</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: item.color }}>{item.value}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default BusinessOverviewSlide;
