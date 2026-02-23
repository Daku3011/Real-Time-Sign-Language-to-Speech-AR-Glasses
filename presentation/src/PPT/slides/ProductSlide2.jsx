import React from 'react';

const ProductSlide2 = () => (
    <div className="w-full h-full overflow-y-auto slide-bg-mesh slide-content-wrapper">
        <div style={{ padding: 'var(--slide-py) var(--slide-px)', maxWidth: '1200px', margin: '0 auto', paddingBottom: '100px' }}>

            <div className="mb-2 animate-fade-up delay-1">
                <span style={{ color: 'var(--teal)', textShadow: 'var(--shadow-glow)', fontSize: '16px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Slide 7 of 12</span>
            </div>
            <h2 className="animate-fade-up delay-1 gradient-text-primary" style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 50px)',
                marginBottom: '8px', letterSpacing: '-0.02em',
            }}>
                Product Deep Dive
            </h2>
            <div className="animate-fade-up delay-2" style={{ width: '48px', height: '3px', background: 'var(--teal)', borderRadius: '2px', marginBottom: '24px' }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '20px' }}>

                {/* Hardware Stack */}
                <div className="animate-fade-up delay-3" style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '19px', color: 'var(--charcoal)', marginBottom: '16px' }}>
                        Hardware Stack
                    </h3>
                    {[
                        { comp: 'Raspberry Pi Zero 2 W', role: 'Quad-core ARM, on-device AI brain' },
                        { comp: 'Pi Camera v2 (IMX219)', role: '30 FPS gesture capture, 160° FOV' },
                        { comp: 'OLED Microdisplay', role: 'HUD text confirmation overlay' },
                        { comp: 'Bone Conduction Audio', role: 'Speech output — ears remain free' },
                        { comp: '2500mAh LiPo Battery', role: '6–8 hours continuous use' },
                        { comp: 'TR-90 Lightweight Frame', role: 'Looks like regular glasses (~80g)' },
                    ].map((h, i) => (
                        <div key={i} className="flex items-start gap-2 mb-2">
                            <div style={{ width: '6px', height: '6px', borderRadius: '2px', background: 'var(--teal)', flexShrink: 0, marginTop: '6px' }} />
                            <div>
                                <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--charcoal)' }}>{h.comp}</span>
                                <span style={{ fontSize: '15px', color: 'var(--slate)' }}> — {h.role}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Prototype Results */}
                <div className="animate-fade-up delay-4" style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '19px', color: 'var(--charcoal)', marginBottom: '16px' }}>
                        Current Prototype Results
                    </h3>
                    {[
                        { metric: 'Recognition Accuracy', value: '85%', target: 'Target: 90%+ in 6 months' },
                        { metric: 'Processing Latency', value: '<500ms', target: 'Target: <300ms' },
                        { metric: 'Battery Life', value: '6.5 hrs', target: 'Target: 8 hrs' },
                        { metric: 'Device Weight', value: '~80g', target: 'Target: 65g' },
                        { metric: 'Signs Recognized', value: '50 ISL', target: 'Target: 200 signs' },
                    ].map((m, i) => (
                        <div key={i} className="flex items-center justify-between mb-3" style={{ paddingBottom: '8px', borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}>
                            <div>
                                <div style={{ fontSize: '15px', color: 'var(--charcoal)', fontWeight: 600 }}>{m.metric}</div>
                                <div style={{ fontSize: '13px', color: 'var(--slate)' }}>{m.target}</div>
                            </div>
                            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '24px', color: 'var(--teal)' }}>{m.value}</div>
                        </div>
                    ))}
                </div>

                {/* Live Demo CTA */}
                <div className="animate-fade-up delay-5" style={{
                    background: 'linear-gradient(135deg, var(--teal-dark), var(--teal))',
                    borderRadius: '12px', padding: '24px', color: '#fff',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                }}>
                    <div style={{ fontSize: '44px', marginBottom: '12px', textAlign: 'center' }}>🎬</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', textAlign: 'center', marginBottom: '12px' }}>
                        Live Demo
                    </h3>
                    <p style={{ fontSize: '16px', textAlign: 'center', opacity: 0.85, lineHeight: 1.5, marginBottom: '16px' }}>
                        Watch as we sign "Hello, my name is Dwarkesh" and the glasses speak it aloud in real-time.
                    </p>
                    <div style={{
                        padding: '10px', borderRadius: '8px', textAlign: 'center',
                        background: 'rgba(255,255,255,0.15)', fontSize: '15px', fontWeight: 600,
                    }}>
                        2–5 Min Live Demonstration
                    </div>
                    <div style={{ marginTop: '16px', padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)' }}>
                        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: 0 }}>
                            Validated by 15 deaf users in Surat — 80% expressed daily usage intent
                        </p>
                    </div>
                </div>
            </div>

            {/* Tech Pipeline */}
            <div className="animate-fade-up delay-6" style={{
                background: 'var(--navy)', borderRadius: '12px', padding: '20px 24px',
            }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: '#fff', marginBottom: '16px' }}>
                    End-to-End Pipeline — Under 500ms
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                    {[
                        { step: '1', label: 'Capture', sub: 'Pi Camera 30 FPS' },
                        { step: '2', label: 'Track', sub: '21 hand landmarks' },
                        { step: '3', label: 'Recognize', sub: 'TFLite CNN-LSTM' },
                        { step: '4', label: 'Translate', sub: 'Context grammar' },
                        { step: '5', label: 'Speak', sub: 'Bone conduction' },
                        { step: '6', label: 'Display', sub: 'OLED HUD' },
                    ].map((s, i) => (
                        <React.Fragment key={i}>
                            <div style={{ textAlign: 'center', minWidth: '100px' }}>
                                <div style={{
                                    width: '34px', height: '34px', borderRadius: '8px', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center', margin: '0 auto 6px',
                                    background: 'rgba(0,180,216,0.15)', color: 'var(--teal)',
                                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px',
                                }}>
                                    {s.step}
                                </div>
                                <div style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>{s.label}</div>
                                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginTop: '2px' }}>{s.sub}</div>
                            </div>
                            {i < 5 && (
                                <svg width="18" height="12" viewBox="0 0 20 12" className="hidden md:block" style={{ flexShrink: 0, opacity: 0.3 }}>
                                    <path d="M0 6h16M14 2l4 4-4 4" stroke="var(--teal)" strokeWidth="1.5" fill="none" />
                                </svg>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default ProductSlide2;
