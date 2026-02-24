import React from 'react';

const ExitSlide = () => (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden slide-bg-mesh slide-content-wrapper">

        {/* Floating background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute animate-float" style={{ top: '10%', left: '10%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
            <div className="absolute animate-float" style={{ bottom: '10%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(240,165,0,0.08) 0%, transparent 70%)', filter: 'blur(60px)', animationDelay: '2s' }} />
        </div>

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'var(--gradient-primary)' }} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

            <div className="animate-fade-up delay-1 mb-3">
                <span style={{ color: 'var(--teal)', textShadow: 'var(--shadow-glow)', fontSize: '16px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Slide 12 of 12</span>
            </div>

            {/* Thanks card */}
            <div className="glass-card animate-fade-up px-12 py-10 flex flex-col items-center" style={{ backdropFilter: 'blur(24px)', marginBottom: '32px' }}>
                <div style={{ fontSize: '56px', marginBottom: '16px' }}>🙏</div>
                <h1 className="animate-fade-up delay-2" style={{
                    fontFamily: 'var(--font-display)', fontWeight: 900,
                    fontSize: 'clamp(42px, 6vw, 80px)', lineHeight: 1.1,
                    color: 'var(--charcoal)', marginBottom: '16px', letterSpacing: '-0.03em',
                }}>
                    Thank You
                </h1>
                <div className="animate-fade-up delay-2" style={{ width: '48px', height: '3px', background: 'var(--gradient-primary)', borderRadius: '2px', marginBottom: '20px' }} />
                <p className="animate-fade-up delay-3" style={{
                    fontSize: 'clamp(18px, 2vw, 24px)', color: 'var(--slate-dark)',
                    fontWeight: 500, lineHeight: 1.6, maxWidth: '600px', marginBottom: '24px',
                }}>
                    Communication is a fundamental right.<br />
                    <strong style={{ color: 'var(--teal)' }}>With this glasses , we give voice to 18 million Indians — for the first time.</strong>
                </p>

                {/* Contact */}
                {/* <div className="animate-fade-up delay-4 flex flex-wrap items-center justify-center gap-4">
                    {[
                        { label: 'Email', value: 'rdwarkesh1300@gmail.com', icon: '📧' },
                        { label: 'Phone', value: '+91 90999 35366', icon: '📱' },
                        { label: 'Team', value: 'Team Inno8', icon: '🚀' },
                    ].map((c, i) => (
                        <div key={i} style={{
                            display: 'flex', alignItems: 'center', gap: '8px',
                            padding: '10px 16px', borderRadius: '8px',
                            background: 'rgba(0,180,216,0.06)', border: '1px solid rgba(0,180,216,0.15)',
                        }}>
                            <span style={{ fontSize: '18px' }}>{c.icon}</span>
                            <div>
                                <div style={{ fontSize: '12px', color: 'var(--slate)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{c.label}</div>
                                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px', color: 'var(--teal)' }}>{c.value}</div>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>

            {/* Mentor */}
            <div className="animate-fade-up delay-5">
                <p style={{ fontSize: '17px', color: 'var(--slate)', marginBottom: '16px' }}>
                    Mentor: <strong style={{ color: 'var(--charcoal)' }}>Prof. Dr. Pariza Kamboj</strong> &nbsp;|&nbsp; SCET, Surat 
                </p>
                {/* Team names */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {['Dwarkesh Ramani', 'Jenil Gajera', 'Jenny Patel', 'Akifa Shaikh', 'Drashtant Mevada'].map((name, i) => (
                        <div key={i} style={{
                            padding: '6px 14px', borderRadius: '20px',
                            background: 'rgba(255,255,255,0.7)', border: '1px solid var(--border)',
                            fontSize: '15px', fontWeight: 600, color: 'var(--slate-dark)',
                        }}>
                            {name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default ExitSlide;
