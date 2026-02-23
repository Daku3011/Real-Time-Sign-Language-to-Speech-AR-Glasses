import React from 'react';

const members = [
    {
        name: 'Dwarkesh Ramani',
        role: 'Team Lead & AI/ML Engineer',
        skills: ['Python', 'TensorFlow', 'MediaPipe', 'System Architecture'],
        highlight: 'Built end-to-end gesture recognition pipeline with 85% accuracy',
        color: '#00B4D8',
    },
    {
        name: 'Jenil Gajera',
        role: 'Hardware & IoT Lead',
        skills: ['Raspberry Pi', 'Embedded Systems', 'PCB Design', '3D Printing'],
        highlight: 'Designed compact wearable with 8-hour battery life at 80g',
        color: '#10B981',
    },
    {
        name: 'Jenny Patel',
        role: 'Frontend & UX Designer',
        skills: ['UI/UX Design', 'React', 'Accessibility', 'User Research'],
        highlight: 'Created intuitive interfaces for both deaf and hearing users',
        color: '#A78BFA',
    },
    {
        name: 'Akifa Shaikh',
        role: 'Business Development',
        skills: ['Market Research', 'Financial Modeling', 'ADIP Scheme', 'Partnerships'],
        highlight: 'Mapped ADIP subsidy pathway for 100% user cost coverage',
        color: '#F59E0B',
    },
    {
        name: 'Drashtant Mevada',
        role: 'Business & Strategy',
        skills: ['Competitive Analysis', 'Go-to-Market', 'Documentation', 'Compliance'],
        highlight: 'Benchmarked 19 global competitors — identified clear market gap',
        color: '#EF4444',
    },
];

const FoundersSlide = () => (
    <div className="w-full h-full overflow-y-auto slide-bg-mesh slide-content-wrapper">
        <div style={{ padding: 'var(--slide-py) var(--slide-px)', maxWidth: '1200px', margin: '0 auto', paddingBottom: '100px' }}>

            {/* Header */}
            <div className="mb-2 animate-fade-up delay-1">
                <span style={{ color: 'var(--teal)', textShadow: 'var(--shadow-glow)', fontSize: '16px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Slide 9 of 12
                </span>
            </div>
            <h2 className="animate-fade-up delay-1 gradient-text-primary" style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 50px)',
                marginBottom: '8px', letterSpacing: '-0.02em',
            }}>
                The Team Behind the Vision
            </h2>
            <div className="animate-fade-up delay-2" style={{ width: '48px', height: '3px', background: 'var(--teal)', borderRadius: '2px', marginBottom: '24px' }} />

            {/* Mentor — First */}
            <div className="animate-fade-up delay-2 mb-4" style={{
                background: 'var(--navy)', borderRadius: '12px', padding: '20px 24px',
                display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap',
            }}>
                <div style={{
                    width: '44px', height: '44px', borderRadius: '10px', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', fontWeight: 700,
                    fontSize: '17px', color: 'var(--gold)',
                    background: 'rgba(240,165,0,0.15)', border: '1px solid rgba(240,165,0,0.3)',
                }}>
                    PK
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                    <div style={{ fontWeight: 700, fontSize: '18px', color: '#fff' }}>
                        Prof. Dr. Pariza Kamboj — Faculty Mentor
                    </div>
                    <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)' }}>
                        Ensuring technical rigor across AI model validation and hardware integration
                    </div>
                </div>
                {/* <div style={{
                    padding: '6px 12px', borderRadius: '6px', fontSize: '15px', fontWeight: 600,
                    background: 'rgba(240,165,0,0.15)', color: 'var(--gold)', border: '1px solid rgba(240,165,0,0.25)',
                }}>
                    5-member multidisciplinary team: AI + Hardware + Design + Business
                </div> */}
            </div>

            {/* Team Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                {members.map((m, i) => (
                    <div key={i} className={`glass-card animate-fade-up delay-${i + 3}`} style={{
                        padding: '24px',
                        borderTop: `3px solid ${m.color}`,
                    }}>
                        <div className="flex items-center gap-3 mb-3">
                            <div style={{
                                width: '44px', height: '44px', borderRadius: '10px', display: 'flex',
                                alignItems: 'center', justifyContent: 'center', fontWeight: 700,
                                fontSize: '19px', color: m.color,
                                background: `${m.color}15`, border: `1px solid ${m.color}30`,
                            }}>
                                {m.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '19px', color: 'var(--charcoal)' }}>{m.name}</div>
                                <div style={{ fontSize: '16px', color: m.color, fontWeight: 600 }}>{m.role}</div>
                            </div>
                        </div>

                        <p style={{ fontSize: '16px', color: 'var(--slate)', lineHeight: 1.5, marginBottom: '12px', fontStyle: 'italic' }}>
                            "{m.highlight}"
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                            {m.skills.map((s, j) => (
                                <span key={j} style={{
                                    fontSize: '14px', fontWeight: 500, padding: '3px 8px', borderRadius: '4px',
                                    background: 'var(--light-gray)', color: 'var(--slate-dark)',
                                }}>
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default FoundersSlide;
