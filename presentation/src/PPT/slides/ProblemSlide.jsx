import React from 'react';

const ProblemSlide = () => (
    <div className="w-full h-full overflow-y-auto slide-bg-mesh slide-content-wrapper">
        <div style={{ padding: 'var(--slide-py) var(--slide-px)', maxWidth: '1200px', margin: '0 auto', paddingBottom: '100px' }}>

            <div className="mb-2 animate-fade-up delay-1">
                <span style={{ color: 'var(--teal)', textShadow: 'var(--shadow-glow)', fontSize: '16px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Slide 3 of 9</span>
            </div>
            <h2 className="animate-fade-up delay-1 gradient-text-primary" style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 50px)',
                marginBottom: '8px', letterSpacing: '-0.02em',
            }}>
                The Communication Crisis
            </h2>
            <div className="animate-fade-up delay-2" style={{ width: '48px', height: '3px', background: 'var(--alert)', borderRadius: '2px', marginBottom: '28px' }} />

            {/* User Testimonies */}
            <div className="animate-fade-up delay-2" style={{
                background: 'var(--alert-light)', borderRadius: '12px', padding: '20px 24px',
                borderLeft: '4px solid var(--alert)', marginBottom: '24px',
            }}>
                <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '12px' }}>Anticipated Pain Points for Validation</div>
                {[
                    { quote: 'In hospitals, I have to write on paper. Doctors don\'t wait. It\'s stressful.', who: '— Expected Feedback: Deaf college students' },
                    { quote: 'Interpreters are rarely available. A portable device would help daily communication.', who: '— Expected Feedback: Special educators' },
                    { quote: 'Mobile apps are inconvenient because hands are busy while signing.', who: '— Expected Feedback: Deaf NGO volunteers' },
                ].map((t, i) => (
                    <div key={i} style={{ marginBottom: i < 2 ? '10px' : 0, paddingBottom: i < 2 ? '10px' : 0, borderBottom: i < 2 ? '1px solid rgba(239,68,68,0.15)' : 'none' }}>
                        <p style={{ fontSize: '17px', color: 'var(--charcoal)', lineHeight: 1.5, fontStyle: 'italic', marginBottom: '2px' }}>
                            "{t.quote}"
                        </p>
                        <p style={{ fontSize: '14px', color: 'var(--slate)', fontWeight: 500 }}>{t.who}</p>
                    </div>
                ))}
            </div>

            {/* Stats Row */}
            <div className="animate-fade-up delay-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', marginBottom: '24px' }}>
                {[
                    { num: '63M', label: 'Hearing Loss in India', sub: 'WHO World Report on Hearing, 2021', color: 'var(--alert)' },
                    { num: '339', label: 'Certified ISL Interpreters', sub: 'ISLRTC Directory — 1:18,500 ratio', color: 'var(--gold)' },
                    { num: '1.9L', label: 'Hearing Disabled in Gujarat', sub: 'Census of India, 2011', color: 'var(--teal)', textShadow: '0 0 1px rgba(0,180,216,0.3)' },
                    { num: '27K+', label: 'Born Deaf Every Year', sub: 'WHO / Drishti IAS, 2021', color: '#A78BFA' },
                ].map((s, i) => (
                    <div key={i} className="glass-card"
                        style={{
                            padding: '20px', textAlign: 'center',
                        }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '39px', color: s.color, lineHeight: 1 }}>
                            {s.num}
                        </div>
                        <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--charcoal)', marginTop: '8px' }}>{s.label}</div>
                        <div style={{ fontSize: '13px', color: 'var(--slate)', marginTop: '4px' }}>{s.sub}</div>
                    </div>
                ))}
            </div>

            {/* Two columns: Pain Points + Current Solutions Fail */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>

                {/* Pain Points */}
                <div className="animate-fade-up delay-4" style={{
                    className: 'glass-card', padding: '24px',
                }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '21px', color: 'var(--charcoal)', marginBottom: '16px' }}>
                        Daily Reality for Deaf Indians
                    </h3>
                    {[
                        { icon: '🏥', text: 'Hospitals: Written notes or family relay — misdiagnosis risk high' },
                        { icon: '📚', text: '<5% of deaf children receive education in ISL' },
                        { icon: '💼', text: '2–3× higher unemployment rate vs general population' },
                        { icon: '🏛️', text: 'RPwD Act mandates ISL access — but no tools exist to deliver it' },
                    ].map((p, i) => (
                        <div key={i} className="flex items-start gap-3 mb-3">
                            <span style={{ fontSize: '19px', flexShrink: 0, marginTop: '1px' }}>{p.icon}</span>
                            <span style={{ fontSize: '17px', color: 'var(--slate-dark)', lineHeight: 1.5 }}>{p.text}</span>
                        </div>
                    ))}
                </div>

                {/* Why Current Solutions Fail */}
                <div className="animate-fade-up delay-5" style={{
                    className: 'glass-card', padding: '24px',
                }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '21px', color: 'var(--charcoal)', marginBottom: '16px' }}>
                        Why Current Solutions Fail
                    </h3>
                    {[
                        { name: 'SignAble App', fail: 'On-demand video interpreters — needs phone, internet, interpreter availability' },
                        { name: 'Human Interpreters', fail: 'Only 339 certified in India, ₹30K+/month, rarely available in hospitals' },
                        { name: 'Smart Gloves', fail: 'Sensors on hands disrupt natural signing flow' },
                        { name: 'Imported AR (Meta, XRAI)', fail: '₹40K–₹2L, speech-to-text only, no ISL recognition, no India presence' },
                    ].map((s, i) => (
                        <div key={i} className="flex items-start gap-3 mb-3">
                            <div style={{
                                flexShrink: 0, width: '20px', height: '20px', borderRadius: '4px',
                                background: 'var(--alert-light)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '14px', color: 'var(--alert)', fontWeight: 700, marginTop: '1px',
                            }}>✕</div>
                            <div>
                                <span style={{ fontSize: '17px', fontWeight: 600, color: 'var(--charcoal)' }}>{s.name}: </span>
                                <span style={{ fontSize: '16px', color: 'var(--slate)' }}>{s.fail}</span>
                            </div>
                        </div>
                    ))}
                    <div style={{ marginTop: '16px', padding: '12px 16px', borderRadius: '8px', background: 'rgba(0,180,216,0.06)', border: '1px solid rgba(0,180,216,0.15)' }}>
                        <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--teal)', textShadow: '0 0 1px rgba(0,180,216,0.3)' }}>
                            No affordable, hands-free, ISL-focused, offline solution exists today.
                        </span>
                    </div>
                </div>
            </div>

            <p className="animate-fade-up delay-6" style={{ fontSize: '14px', color: 'var(--slate)', marginTop: '16px' }}>
                Sources: Census 2011, NSS 76th Round (2018), MOSPI (2021), WHO World Report on Hearing (2021), ISLRTC, RCI India
                <br />Estimated figures — exact counts vary by definition. Testimonies are anticipated feedback for upcoming field validations.
            </p>
        </div>
    </div>
);

export default ProblemSlide;
