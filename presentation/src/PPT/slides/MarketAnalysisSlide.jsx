import React from 'react';

const MarketAnalysisSlide = () => (
    <div className="w-full h-full overflow-y-auto slide-bg-mesh slide-content-wrapper">
        <div style={{ padding: 'var(--slide-py) var(--slide-px)', maxWidth: '1200px', margin: '0 auto', paddingBottom: '100px' }}>

            <div className="mb-2 animate-fade-up delay-1">
                <span style={{ color: 'var(--teal)', textShadow: 'var(--shadow-glow)', fontSize: '16px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Slide 9 of 12</span>
            </div>
            <h2 className="animate-fade-up delay-1 gradient-text-primary" style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 50px)',
                marginBottom: '8px', letterSpacing: '-0.02em',
            }}>
                Target Segments &amp; Adoption Drivers
            </h2>
            <div className="animate-fade-up delay-2" style={{ width: '48px', height: '3px', background: 'var(--teal)', borderRadius: '2px', marginBottom: '24px' }} />

            {/* Target Segments */}
            <div className="glass-card animate-fade-up delay-3" style={{ padding: '24px', marginBottom: '24px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '21px', color: 'var(--charcoal)', marginBottom: '16px' }}>
                    Customer Segmentation &amp; Demand Profiles
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                    {[
                        { seg: 'Deaf Students', size: '2.5M est.', pain: 'Less than 5% receive education in ISL. Communication gap with hearing teachers limits academic growth.', intent: 'High (Parental Driver)', color: 'var(--teal)' },
                        { seg: 'Working Professionals', size: 'High intent cohort', pain: 'Face a 2–3× higher unemployment rate. Cannot participate seamlessly in corporate meetings without interpreters.', intent: 'Highest (Self-Pay)', color: 'var(--gold)' },
                        { seg: 'Healthcare Centers', size: 'B2B Institutional', pain: 'Critical misdiagnosis risks. 99% of hospitals do not have on-call ISL interpreters for deaf patients.', intent: 'Critical (Compliance Driver)', color: 'var(--alert)' },
                        { seg: 'Rural Population', size: 'Mass Market', pain: 'Complete communication isolation. Cannot afford expensive smartphones or subscription interpreter apps.', intent: 'Govt ADIP Subsidized', color: 'var(--success)' },
                    ].map((s, i) => (
                        <div key={i} style={{ padding: '16px', background: 'rgba(0,0,0,0.02)', borderRadius: '8px', borderLeft: `4px solid ${s.color}` }}>
                            <div style={{ fontWeight: 700, fontSize: '17px', color: 'var(--charcoal)' }}>{s.seg}</div>
                            <div style={{ fontSize: '13px', color: 'var(--slate)', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.size}</div>
                            <div style={{ fontSize: '14px', color: 'var(--slate-dark)', marginBottom: '12px', lineHeight: 1.4 }}>{s.pain}</div>
                            <span style={{ fontSize: '13px', padding: '4px 8px', borderRadius: '4px', background: `${s.color}15`, color: s.color, fontWeight: 600 }}>Purchase Intent: {s.intent}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Regulatory Drivers */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>

                {/* RPwD Act Compliance Driver */}
                <div className="animate-fade-up delay-4" style={{
                    background: 'var(--navy)', borderRadius: '12px', padding: '24px',
                    display: 'flex', flexDirection: 'column',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div style={{ fontSize: '28px' }}>⚖️</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '19px', color: 'var(--gold)' }}>
                            Regulatory Tailwind: RPwD Act 2016
                        </div>
                    </div>
                    <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, flex: 1 }}>
                        The Rights of Persons with Disabilities (RPwD) Act explicitly mandates barrier-free accessibility in government institutions, hospitals, and educational facilities.
                        <strong> Currently, no scalable technology exists to help them comply.</strong> Our B2B distribution taps directly into this mandated compliance budget.
                    </p>
                </div>

                {/* ADIP Subsidy Mechanism */}
                <div className="glass-card animate-fade-up delay-5" style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div style={{ fontSize: '28px' }}>🇮🇳</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '19px', color: 'var(--charcoal)' }}>
                            Economic Accelerator: ADIP Scheme
                        </div>
                    </div>
                    <p style={{ fontSize: '15px', color: 'var(--slate-dark)', lineHeight: 1.6, marginBottom: '16px' }}>
                        The Ministry of Social Justice provides up to ₹15,000 for assistive devices under the ADIP scheme (approved until March 2026).
                    </p>
                    <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', padding: '12px', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--charcoal)' }}>Income &le; ₹22,500/mo</span>
                            <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--success)' }}>100% Subsidy</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--charcoal)' }}>Income ₹22.5K–₹30K</span>
                            <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--success)' }}>50% Subsidy</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
);

export default MarketAnalysisSlide;
