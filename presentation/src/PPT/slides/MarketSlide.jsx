import React from 'react';

const MarketSlide = () => (
    <div className="w-full h-full overflow-y-auto slide-bg-mesh slide-content-wrapper">
        <div style={{ padding: 'var(--slide-py) var(--slide-px)', maxWidth: '1200px', margin: '0 auto', paddingBottom: '100px' }}>

            <div className="mb-2 animate-fade-up delay-1">
                <span style={{ color: 'var(--teal)', textShadow: 'var(--shadow-glow)', fontSize: '16px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Slide 5 of 12</span>
            </div>
            <h2 className="animate-fade-up delay-1 gradient-text-primary" style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 50px)',
                marginBottom: '8px', letterSpacing: '-0.02em',
            }}>
                Market Opportunity
            </h2>
            <div className="animate-fade-up delay-2" style={{ width: '48px', height: '3px', background: 'var(--teal)', borderRadius: '2px', marginBottom: '28px' }} />

            {/* TAM / SAM / SOM */}
            <div className="animate-fade-up delay-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                {[
                    { label: 'TAM', value: '63M', desc: 'People with hearing loss in India', sub: 'WHO World Report on Hearing, 2021', bg: 'var(--navy)', color: 'var(--teal)', textShadow: '0 0 1px rgba(0,180,216,0.3)' },
                    { label: 'SAM', value: '1.9L', desc: 'Hearing-disabled in Gujarat — strong ADIP infra, 75-80% fund utilization', sub: 'Census of India, 2011 (Gujarat tables)', bg: 'var(--navy-light)', color: 'var(--gold)' },
                    { label: 'SOM (Year 1)', value: '50', desc: 'Pilot at deaf schools in Surat/Rajkot + ADIP subsidized units', sub: 'Conservative initial target', bg: 'var(--navy-lighter)', color: 'var(--success)' },
                ].map((m, i) => (
                    <div key={i} style={{ background: m.bg, borderRadius: '12px', padding: '28px', textAlign: 'center' }}>
                        <div style={{ fontSize: '15px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', marginBottom: '8px' }}>{m.label}</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '51px', color: m.color, lineHeight: 1 }}>{m.value}</div>
                        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', marginTop: '10px', lineHeight: 1.4 }}>{m.desc}</p>
                        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.3)', marginTop: '6px' }}>{m.sub}</p>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                {/* Industry Trends */}
                <div className="glass-card animate-fade-up delay-4" style={{ padding: '24px' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '19px', color: 'var(--charcoal)', marginBottom: '16px' }}>
                        Industry Trends &amp; Growth
                    </h3>
                    {[
                        { value: '$2.5B', label: 'India Assistive Tech market (2025)', cagr: '3.83% CAGR → $3.6B by 2034', color: 'var(--gold)' },
                        { value: '16%', label: 'India wearable tech CAGR', cagr: 'Smart glasses: high double-digit growth', color: 'var(--teal)' },
                        { value: '$772M', label: 'India audiology devices (2024)', cagr: '8.5% CAGR → $1.26B by 2030', color: 'var(--success)' },
                    ].map((t, i) => (
                        <div key={i} style={{ marginBottom: '14px', paddingBottom: '14px', borderBottom: i < 2 ? '1px solid var(--border)' : 'none' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '28px', color: t.color, lineHeight: 1 }}>{t.value}</div>
                                <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--charcoal)' }}>{t.label}</div>
                            </div>
                            <div style={{ fontSize: '14px', color: 'var(--slate)' }}>{t.cagr}</div>
                        </div>
                    ))}
                </div>

                {/* Why Big Companies Haven't */}
                <div className="glass-card animate-fade-up delay-5" style={{ padding: '24px' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '19px', color: 'var(--charcoal)', marginBottom: '16px' }}>
                        Why Big Companies Haven't Captured This
                    </h3>
                    {[
                        { co: 'Google', reason: 'Demoed ASL glasses at I/O 2022, never shipped. 63M niche too small for billion-user margins.' },
                        { co: 'Meta', reason: 'Ray-Ban glasses focus on voice/audio. No sign language computer vision models.' },
                        { co: 'XRAI Glass', reason: 'Speech-to-text captions only. No ability to recognize sign language.' },
                        { co: 'TranscribeGlass', reason: 'Focuses strictly on subtitle captions, not on-device ISL recognition.' },
                    ].map((c, i) => (
                        <div key={i} style={{ marginBottom: '12px' }}>
                            <span style={{ fontWeight: 700, fontSize: '15px', color: 'var(--charcoal)' }}>{c.co}: </span>
                            <span style={{ fontSize: '15px', color: 'var(--slate)', lineHeight: 1.5 }}>{c.reason}</span>
                        </div>
                    ))}
                    <div style={{ marginTop: '16px', padding: '12px', borderRadius: '8px', background: 'rgba(0,180,216,0.06)', border: '1px solid rgba(0,180,216,0.15)' }}>
                        <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--teal)', textShadow: '0 0 1px rgba(0,180,216,0.3)' }}>
                            Our moat: ISL-specific, on-device AI, built for the ₹15K ADIP subsidy envelope.
                        </span>
                    </div>
                </div>
            </div>

            <p className="animate-fade-up delay-7" style={{ fontSize: '14px', color: 'var(--slate)', marginTop: '16px', opacity: 0.7 }}>
                Sources: WHO World Report on Hearing (2021), Census of India (2011), IMARC Group (2025), IDC India (2025), Grand View Research (2024).
            </p>
        </div>
    </div>
);

export default MarketSlide;
