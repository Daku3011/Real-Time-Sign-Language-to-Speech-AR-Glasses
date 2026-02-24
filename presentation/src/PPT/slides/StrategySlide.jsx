import React from 'react';

const StrategySlide = () => (
    <div className="w-full h-full overflow-y-auto slide-bg-mesh slide-content-wrapper">
        <div style={{ padding: 'var(--slide-py) var(--slide-px)', maxWidth: '1200px', margin: '0 auto', paddingBottom: '100px' }}>

            <div className="mb-2 animate-fade-up delay-1">
                <span style={{ color: 'var(--teal)', textShadow: 'var(--shadow-glow)', fontSize: '16px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Slide 4 of 12</span>
            </div>
            <h2 className="animate-fade-up delay-1 gradient-text-primary" style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 50px)',
                marginBottom: '8px', letterSpacing: '-0.02em',
            }}>
                Strategy
            </h2>
            <div className="animate-fade-up delay-2" style={{ width: '48px', height: '3px', background: 'var(--teal)', borderRadius: '2px', marginBottom: '28px' }} />

            {/* 3-Phase Strategy */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                {[
                    {
                        phase: 'Phase 1', timeline: 'Month 1–6', channel: 'B2G — Government (ADIP)', color: 'var(--teal)',
                        steps: [
                            'Pilot at Indira Bharati & Muk Badhir Bal Vikas Kendra (Surat) — 20 students',
                            'Collect user testimonials, accuracy data, and clinical evidence',
                            'Apply for ADIP empanelment via DEPwD (scheme approved till Mar 2026)',
                            'BIS certification for assistive device classification under RPwD Act',
                        ],
                        target: '50 subsidized units',
                    },
                    {
                        phase: 'Phase 2', timeline: 'Month 7–18', channel: 'B2C — Direct Sales', color: 'var(--gold)',
                        steps: [
                            'Launch direct website sales (₹15,000 retail)',
                            'Partner with deaf associations for referral program',
                            'Target urban professionals & students (highest purchase intent)',
                            'Instagram/YouTube content with deaf community influencers',
                        ],
                        target: '500 self-pay units',
                    },
                    {
                        phase: 'Phase 3', timeline: 'Year 2+', channel: 'B2B — Corporate & Institutional', color: 'var(--success)',
                        steps: [
                            'Sell to inclusive employers (Amazon, Lemon Tree Hotels)',
                            'Hospital compliance packages (RPwD disability mandates)',
                            'State government bulk orders via ADIP at scale',
                            'Educational institution licensing program',
                        ],
                        target: '5,000+ units/year',
                    },
                ].map((p, i) => (
                    <div key={i} className={`animate-fade-up delay-${i + 2}`} style={{
                        background: '#fff', borderRadius: '12px', padding: '24px',
                        border: '1px solid var(--border)', borderTop: `4px solid ${p.color}`,
                        boxShadow: 'var(--shadow-md)',
                    }}>
                        <div className="flex items-center justify-between mb-2">
                            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '17px', color: p.color }}>{p.phase}</span>
                            <span style={{ fontSize: '14px', color: 'var(--slate)', fontWeight: 500, background: 'var(--light-gray)', padding: '2px 8px', borderRadius: '4px' }}>{p.timeline}</span>
                        </div>
                        <h3 style={{ fontWeight: 700, fontSize: '19px', color: 'var(--charcoal)', marginBottom: '14px' }}>{p.channel}</h3>
                        {p.steps.map((s, j) => (
                            <div key={j} className="flex items-start gap-2 mb-2">
                                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: p.color, flexShrink: 0, marginTop: '7px' }} />
                                <span style={{ fontSize: '15px', color: 'var(--slate-dark)', lineHeight: 1.4 }}>{s}</span>
                            </div>
                        ))}
                        <div style={{
                            marginTop: '14px', padding: '8px 12px', borderRadius: '6px',
                            background: `${p.color}15`, border: `1px solid ${p.color}30`,
                            fontSize: '15px', fontWeight: 600, color: p.color, textAlign: 'center',
                        }}>
                            Target: {p.target}
                        </div>
                    </div>
                ))}
            </div>

            {/* Customer Discovery Evidence */}
            <div className="animate-fade-up delay-6" style={{
                background: 'var(--navy)', borderRadius: '12px', padding: '24px',
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px',
            }}>
                <div>
                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '12px', textTransform: 'uppercase' }}>
                        Customer Discovery
                    </div>
                    {[
                        '15 deaf individuals interviewed',
                        '12 expressed daily usage intent',
                        '8 willing to self-fund at ₹15,000',
                        'Gujarat State Deaf Association engaged',
                    ].map((c, i) => (
                        <div key={i} className="flex items-center gap-2 mb-2">
                            <div style={{ width: '6px', height: '6px', borderRadius: '2px', background: 'var(--success)', flexShrink: 0 }} />
                            <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)' }}>{c}</span>
                        </div>
                    ))}
                </div>
                <div>
                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '12px', textTransform: 'uppercase' }}>
                        ADIP Scheme Alignment
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '36px', color: 'var(--gold)', marginBottom: '6px' }}>100%</div>
                    <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                        Our ₹15,000 device fits within ADIP's ₹15K full subsidy ceiling. For income ≤₹22,500/mo → 100% free. ₹22.5K–₹30K → 50% subsidy. Gujarat utilizes 75–80% of scheme funds.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default StrategySlide;
