import React from 'react';

const CompetitiveSlide = () => (
    <div className="w-full h-full overflow-y-auto slide-bg-mesh slide-content-wrapper">
        <div style={{ padding: 'var(--slide-py) var(--slide-px)', maxWidth: '1200px', margin: '0 auto', paddingBottom: '100px' }}>

            <div className="mb-2 animate-fade-up delay-1">
                <span style={{ color: 'var(--teal)', textShadow: 'var(--shadow-glow)', fontSize: '16px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Slide 5 of 12</span>
            </div>
            <h2 className="animate-fade-up delay-1 gradient-text-primary" style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 50px)',
                marginBottom: '8px', letterSpacing: '-0.02em',
            }}>
                Competitive Analysis &amp; Advantages
            </h2>
            <div className="animate-fade-up delay-2" style={{ width: '48px', height: '3px', background: 'var(--teal)', borderRadius: '2px', marginBottom: '24px' }} />

            {/* Comparison Table */}
            <div className="animate-fade-up delay-2" style={{ overflowX: 'auto', marginBottom: '20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '16px' }}>
                    <thead>
                        <tr style={{ background: 'var(--navy)' }}>
                            {['Feature', 'Assistive Vision', 'SignAble App', 'Smart Gloves', 'XRAI Glass', 'Human Interpreters'].map((h, i) => (
                                <th key={i} style={{
                                    padding: '12px 14px', textAlign: i === 0 ? 'left' : 'center',
                                    color: i === 1 ? 'var(--teal)' : 'rgba(255,255,255,0.6)',
                                    fontWeight: 700, fontSize: '15px', letterSpacing: '0.03em',
                                    borderBottom: '2px solid rgba(255,255,255,0.08)',
                                    whiteSpace: 'nowrap',
                                }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { feature: 'ISL Recognition', us: '✓', signable: '✓', gloves: '✓', xrai: '✗', human: '✓' },
                            { feature: 'Hands-Free', us: '✓', signable: '✗', gloves: '✗', xrai: '✓', human: '✓' },
                            { feature: 'Offline / On-Device', us: '✓', signable: '✗', gloves: '✓', xrai: '✗', human: '✓' },
                            { feature: 'Real-Time (<500ms)', us: '✓', signable: '✗', gloves: '✓', xrai: '✓', human: '✗' },
                            { feature: 'Under ₹15,000', us: '✓', signable: '✓', gloves: '✗', xrai: '✗', human: '✗' },
                            { feature: 'ADIP Subsidized', us: '✓', signable: '✗', gloves: '✗', xrai: '✗', human: '✗' },
                            { feature: 'India-Specific ISL', us: '✓', signable: '✓', gloves: '✗', xrai: '✗', human: '✓' },
                        ].map((r, i) => (
                            <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                                <td style={{ padding: '10px 14px', color: 'var(--charcoal)', fontWeight: 600, fontSize: '16px' }}>{r.feature}</td>
                                {[r.us, r.signable, r.gloves, r.xrai, r.human].map((v, j) => (
                                    <td key={j} style={{
                                        padding: '10px 14px', textAlign: 'center', fontSize: '20px',
                                        color: v === '✓' ? (j === 0 ? 'var(--teal)' : 'var(--success)') : 'var(--alert)',
                                        fontWeight: 700,
                                    }}>{v}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Our Competitive Advantages */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '20px' }}>
                {[
                    { title: 'Hardware Patent', desc: 'Filed patent on unique wearable form factor — structural protection against copycats', color: 'var(--teal)', icon: '🛡️' },
                    { title: 'ISL Training Data', desc: 'Proprietary 50K+ ISL gesture dataset — data is scarce (only 339 interpreters in India)', color: 'var(--gold)', icon: '📊' },
                    { title: 'ADIP Empanelment', desc: 'Govt scheme approval creates B2G distribution lock-in at zero customer acquisition cost', color: 'var(--success)', icon: '🏛️' },
                    { title: 'Community Network', desc: 'Deep partnerships with Gujarat State Deaf Association and Surat schools', color: '#A78BFA', icon: '🤝' },
                ].map((m, i) => (
                    <div key={i} className={`animate-fade-up delay-${i + 4}`} style={{
                        background: '#fff', borderRadius: '12px', padding: '20px',
                        border: '1px solid var(--border)', borderLeft: `4px solid ${m.color}`,
                        boxShadow: 'var(--shadow-md)',
                    }}>
                        <div style={{ fontSize: '28px', marginBottom: '8px' }}>{m.icon}</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: m.color, marginBottom: '6px' }}>{m.title}</div>
                        <p style={{ fontSize: '14px', color: 'var(--slate)', lineHeight: 1.5 }}>{m.desc}</p>
                    </div>
                ))}
            </div>

            {/* Bottom callout */}
            <div className="animate-fade-up delay-8" style={{
                background: 'rgba(0,180,216,0.06)', border: '1px solid rgba(0,180,216,0.2)',
                borderRadius: '10px', padding: '16px 20px', textAlign: 'center',
            }}>
                <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--teal)' }}>
                    Only solution combining ISL recognition + hands-free AR + offline AI + ADIP subsidy eligibility — all at ₹15,000.
                </span>
            </div>
        </div>
    </div>
);

export default CompetitiveSlide;
