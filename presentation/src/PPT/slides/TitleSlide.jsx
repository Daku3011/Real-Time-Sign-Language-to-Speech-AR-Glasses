import React from 'react';

const TitleSlide = () => (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden slide-bg-mesh slide-content-wrapper">

        {/* Dynamic Glowing Floating Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute animate-float" style={{ top: '10%', left: '15%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,180,216,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />
            <div className="absolute animate-float" style={{ bottom: '10%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(240,165,0,0.1) 0%, transparent 70%)', filter: 'blur(60px)', animationDelay: '2s' }} />
            <div className="absolute animate-float" style={{ top: '40%', right: '25%', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', filter: 'blur(30px)', animationDelay: '4s' }} />
        </div>

        {/* Premium Top Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'var(--gradient-primary)' }} />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto flex flex-col items-center justify-center h-full">

            {/* Glassmorphism Wrapper for Title Area */}
            <div className="glass-card animate-fade-up px-16 py-12 flex flex-col items-center justify-center" style={{ backdropFilter: 'blur(24px)', marginBottom: '40px' }}>

                {/* Team Name badge */}
                <div className="animate-fade-up delay-1 mb-6 px-6 py-2 rounded-full border border-teal-500/30" style={{ background: 'rgba(0,180,216,0.05)' }}>
                    <span className="gradient-text-primary" style={{
                        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '20px', letterSpacing: '0.15em', textTransform: 'uppercase',
                    }}>
                        Team Inno8
                    </span>
                </div>

                {/* Massive Project Title */}
                <h1 className="animate-fade-up delay-2" style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: 'clamp(48px, 6.5vw, 90px)',
                    lineHeight: 1.1,
                    color: 'var(--charcoal)',
                    marginBottom: '16px',
                    letterSpacing: '-0.03em',
                }}>
                    Real-Time Sign Language<br />
                    <span className="gradient-text-primary">to Speech AR Glasses</span>
                </h1>

                {/* Tagline */}
                <p className="animate-fade-up delay-3" style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(21px, 2.5vw, 30px)',
                    color: 'var(--slate-dark)',
                    fontWeight: 500,
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: 1.6,
                }}>
                    AR glasses that give voice to 18 million deaf Indians —
                    <strong style={{ color: 'var(--teal)' }}> offline, hands-free, private.</strong>
                </p>
            </div>

            {/* Bottom Info Area */}
            <div className="animate-fade-up delay-4 flex flex-col items-center">
                <p className="mb-6 px-6 py-2 rounded-full bg-white/50 border border-slate-200 shadow-sm text-slate-600 font-medium" style={{ fontSize: '18px' }}>
                    Mentor: <strong className="text-slate-800">Prof. Dr. Pariza Kamboj</strong>
                </p>

                {/* Team Row in subtle glass pills */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {['Dwarkesh R.', 'Jenil G.', 'Jenny P.', 'Akifa S.', 'Drashtant M.'].map((name, i) => (
                        <div key={i} className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform cursor-default">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                                style={{ background: 'var(--gradient-primary)', color: '#fff' }}>
                                {name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span style={{ color: 'var(--slate-dark)', fontSize: '17px', fontWeight: 600 }}>{name}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </div>
);

export default TitleSlide;
