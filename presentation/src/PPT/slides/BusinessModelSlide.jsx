import React from 'react';

const BusinessModelSlide = () => (
    <div className="w-full h-full overflow-y-auto slide-bg-mesh slide-content-wrapper">
        <div style={{ padding: 'var(--slide-py) var(--slide-px)', maxWidth: '1200px', margin: '0 auto', paddingBottom: '100px' }}>

            <div className="mb-2 animate-fade-up delay-1">
                <span style={{ color: 'var(--teal)', textShadow: 'var(--shadow-glow)', fontSize: '16px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Slide 7 of 9</span>
            </div>
            <h2 className="animate-fade-up delay-1 gradient-text-primary" style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 50px)',
                marginBottom: '8px', letterSpacing: '-0.02em',
            }}>
                Business Model
            </h2>
            <div className="animate-fade-up delay-2" style={{ width: '48px', height: '3px', background: 'var(--teal)', borderRadius: '2px', marginBottom: '28px' }} />

            {/* Pricing Strategy */}
            <div className="animate-fade-up delay-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '24px' }}>
                {[
                    { tier: 'Retail (B2C)', price: '₹15,000', desc: 'Direct sales — students, professionals, self-pay segment', color: 'var(--teal)', textShadow: '0 0 1px rgba(0,180,216,0.3)' },
                    { tier: 'ADIP Rate (B2G)', price: '₹12,000', desc: '100% govt subsidy for income ≤₹22.5K/mo (UDID required). Scheme till Mar 2026', color: 'var(--gold)' },
                    { tier: 'Institutional (B2B)', price: '₹10,000', desc: 'Bulk: hospitals (RPwD compliance), schools, corporates (MOQ: 50+)', color: 'var(--success)' },
                ].map((t, i) => (
                    <div key={i} style={{
                        background: '#fff', borderRadius: '12px', padding: '24px', textAlign: 'center',
                        border: '1px solid var(--border)', borderTop: `4px solid ${t.color}`,
                        boxShadow: 'var(--shadow-md)',
                    }}>
                        <div style={{ fontSize: '15px', fontWeight: 700, color: t.color, letterSpacing: '0.05em', marginBottom: '6px', textTransform: 'uppercase' }}>{t.tier}</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '39px', color: 'var(--charcoal)' }}>{t.price}</div>
                        <p style={{ fontSize: '15px', color: 'var(--slate)', marginTop: '8px', lineHeight: 1.4 }}>{t.desc}</p>
                    </div>
                ))}
            </div>

            {/* Revenue Streams + Unit Economics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginBottom: '24px' }}>

                {/* Revenue Streams */}
                <div className="animate-fade-up delay-4" style={{
                    className: 'glass-card', padding: '24px',
                }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '19px', color: 'var(--charcoal)', marginBottom: '16px' }}>
                        Revenue Streams
                    </h3>
                    {[
                        { stream: 'Hardware Sales', type: 'One-time', desc: 'Core revenue — device sales across all tiers' },
                        { stream: 'Vocabulary Expansion Packs', type: 'Recurring ₹999/yr', desc: 'Medical, legal, and domain-specific sign sets' },
                        { stream: 'Maintenance & Warranty', type: 'Recurring ₹499/yr', desc: 'Extended warranty, firmware updates, priority support' },
                        { stream: 'Institutional Licensing', type: 'Annual Contract', desc: 'Multi-device management for hospitals and schools' },
                    ].map((r, i) => (
                        <div key={i} style={{ marginBottom: '14px', paddingBottom: '14px', borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
                            <div className="flex items-center justify-between mb-1">
                                <span style={{ fontWeight: 700, fontSize: '17px', color: 'var(--charcoal)' }}>{r.stream}</span>
                                <span style={{ fontSize: '14px', fontWeight: 600, padding: '2px 8px', borderRadius: '4px', background: 'var(--light-gray)', color: 'var(--teal)', textShadow: '0 0 1px rgba(0,180,216,0.3)' }}>{r.type}</span>
                            </div>
                            <p style={{ fontSize: '15px', color: 'var(--slate)' }}>{r.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Unit Economics */}
                <div className="animate-fade-up delay-5" style={{
                    className: 'glass-card', padding: '24px',
                }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '19px', color: 'var(--charcoal)', marginBottom: '16px' }}>
                        Unit Economics
                    </h3>

                    {/* Cost breakdown bar */}
                    <div style={{ marginBottom: '20px' }}>
                        <div className="flex items-center justify-between mb-2">
                            <span style={{ fontSize: '16px', color: 'var(--slate)', fontWeight: 500 }}>Manufacturing Cost (at 500+ units)</span>
                            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '21px', color: 'var(--charcoal)' }}>₹8,200</span>
                        </div>
                        <div style={{ height: '8px', borderRadius: '4px', background: 'var(--light-gray)', overflow: 'hidden' }}>
                            <div style={{ width: '55%', height: '100%', borderRadius: '4px', background: 'linear-gradient(90deg, var(--teal), var(--teal-light))' }} />
                        </div>
                        <div className="flex justify-between mt-1">
                            <span style={{ fontSize: '14px', color: 'var(--slate)' }}>COGS: 55%</span>
                            <span style={{ fontSize: '14px', color: 'var(--success)', fontWeight: 600 }}>Gross Margin: 45%</span>
                        </div>
                    </div>

                    {[
                        { label: 'Retail Price', value: '₹15,000' },
                        { label: 'Cost at Scale (500+)', value: '₹8,200' },
                        { label: 'Gross Margin', value: '45%' },
                        { label: 'After Distribution', value: '~35%' },
                        { label: 'Break-even Volume', value: '500 units' },
                    ].map((u, i) => (
                        <div key={i} className="flex items-center justify-between" style={{ padding: '8px 0', borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}>
                            <span style={{ fontSize: '16px', color: 'var(--slate-dark)' }}>{u.label}</span>
                            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: 'var(--charcoal)' }}>{u.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Competitive Moat */}
            <div className="animate-fade-up delay-6" style={{
                background: 'var(--navy)', borderRadius: '12px', padding: '20px 24px',
            }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: '#fff', marginBottom: '12px' }}>
                    Competitive Moat
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                    {[
                        { moat: 'Hardware Design Patent', desc: 'Filed — protects unique wearable form factor' },
                        { moat: 'ISL Training Data', desc: 'Proprietary 50K+ ISL gesture dataset — only 339 interpreters exist, data is scarce' },
                        { moat: 'ADIP Empanelment', desc: 'Govt approval creates distribution lock-in (scheme till Mar 2026)' },
                        { moat: 'Community Network', desc: 'Deep partnerships with Gujarat State Deaf Association & Surat schools' },
                    ].map((m, i) => (
                        <div key={i} className="flex items-start gap-2">
                            <div style={{ width: '6px', height: '6px', borderRadius: '2px', background: 'var(--gold)', flexShrink: 0, marginTop: '5px' }} />
                            <div>
                                <span style={{ fontSize: '16px', fontWeight: 600, color: '#fff' }}>{m.moat}: </span>
                                <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)' }}>{m.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default BusinessModelSlide;
