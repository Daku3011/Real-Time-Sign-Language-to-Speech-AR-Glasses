import React from 'react';

const SolutionSlide = () => (
    <div className="w-full h-full overflow-y-auto slide-bg-mesh slide-content-wrapper">
        <div style={{ padding: 'var(--slide-py) var(--slide-px)', maxWidth: '1200px', margin: '0 auto', paddingBottom: '100px' }}>

            <div className="mb-2 animate-fade-up delay-1">
                <span style={{ color: 'var(--teal)', textShadow: 'var(--shadow-glow)', fontSize: '16px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Slide 6 of 12</span>
            </div>
            <h2 className="animate-fade-up delay-1 gradient-text-primary" style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 50px)',
                marginBottom: '8px', letterSpacing: '-0.02em',
            }}>
                Assistive Vision — The Solution
            </h2>
            <div className="animate-fade-up delay-2" style={{ width: '48px', height: '3px', background: 'var(--teal)', borderRadius: '2px', marginBottom: '28px' }} />

            {/* Key Features Grid */}
            <div className="animate-fade-up delay-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                {[
                    { icon: '👓', title: 'Hands-Free OS', desc: 'Wearable lightweight AR glasses — both hands remain entirely free for natural Indian Sign Language signing.', color: 'var(--teal)', textShadow: '0 0 1px rgba(0,180,216,0.3)' },
                    { icon: '🔒', title: 'Absolute Privacy', desc: '100% processing happens on-device. No cloud video uploads, no internet dependency required for translation.', color: 'var(--success)' },
                    { icon: '🇮🇳', title: 'ISL-Native', desc: 'Purpose-built specifically for the grammatical structure and nuances of Indian Sign Language (ISL), not ASL.', color: 'var(--gold)' },
                    { icon: '⚖️', title: '100% Subsidizable', desc: 'Targeting a ₹15,000 price ceiling to perfectly fit the Govt ADIP scheme — making it free for BPL consumers.', color: 'var(--alert)' },
                ].map((f, i) => (
                    <div key={i} className="glass-card flex flex-col items-start" style={{
                        padding: '24px', borderLeft: `4px solid ${f.color}`,
                    }}>
                        <div style={{ fontSize: '36px', marginBottom: '14px', textShadow: f.textShadow || 'none' }}>{f.icon}</div>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: 'var(--charcoal)', marginBottom: '8px' }}>{f.title}</h3>
                        <p style={{ fontSize: '15px', color: 'var(--slate)', lineHeight: 1.6 }}>{f.desc}</p>
                    </div>
                ))}
            </div>

            {/* User Journey Section */}
            <div className="glass-card animate-fade-up delay-5" style={{ padding: '32px', marginBottom: '24px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: 'var(--charcoal)', marginBottom: '24px', textAlign: 'center' }}>
                    Seamless Real-Time Interaction
                </h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                    {/* Step 1 */}
                    <div style={{ flex: 1, minWidth: '200px', textAlign: 'center' }}>
                        <div style={{
                            width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(0,180,216,0.1)',
                            border: '2px solid var(--teal)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '28px'
                        }}>🙌</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: 'var(--charcoal)', marginBottom: '8px' }}>1. The User Signs</div>
                        <div style={{ fontSize: '14px', color: 'var(--slate)' }}>Deaf individual simply performs ISL gestures naturally in front of the hearing person.</div>
                    </div>

                    <svg width="40" height="20" viewBox="0 0 40 20" className="hidden md:block" style={{ flexShrink: 0, opacity: 0.4 }}>
                        <path d="M0 10h36M30 4l6 6-6 6" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>

                    {/* Step 2 */}
                    <div style={{ flex: 1, minWidth: '200px', textAlign: 'center' }}>
                        <div style={{
                            width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16,185,129,0.1)',
                            border: '2px solid var(--success)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '28px'
                        }}>👁️</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: 'var(--charcoal)', marginBottom: '8px' }}>2. Glasses Process</div>
                        <div style={{ fontSize: '14px', color: 'var(--slate)' }}>The built-in camera captures movements. On-board AI translates gestures into spoken words.</div>
                    </div>

                    <svg width="40" height="20" viewBox="0 0 40 20" className="hidden md:block" style={{ flexShrink: 0, opacity: 0.4 }}>
                        <path d="M0 10h36M30 4l6 6-6 6" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>

                    {/* Step 3 */}
                    <div style={{ flex: 1, minWidth: '200px', textAlign: 'center' }}>
                        <div style={{
                            width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(240,165,0,0.1)',
                            border: '2px solid var(--gold)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '28px'
                        }}>🗣️</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: 'var(--charcoal)', marginBottom: '8px' }}>3. Instant Output</div>
                        <div style={{ fontSize: '14px', color: 'var(--slate)' }}>Sentences are spoken aloud via bone-conduction transducers instantly bridge the gap.</div>
                    </div>
                </div>
            </div>

            {/* Validation line */}
            <div className="animate-fade-up delay-7" style={{
                marginTop: '16px', padding: '16px 20px', borderRadius: '8px',
                background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)',
                textAlign: 'center',
            }}>
                <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--success)' }}>
                    ✓ Validation: In 15 interviews with deaf students &amp; educators in Surat, 80% expressed daily usage intent.
                </span>
            </div>
        </div>
    </div>
);

export default SolutionSlide;
