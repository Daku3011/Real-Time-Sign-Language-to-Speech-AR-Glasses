import React from 'react';

const FinancialsSlide = () => (
    <div className="w-full h-full overflow-y-auto slide-bg-mesh slide-content-wrapper">
        <div style={{ padding: 'var(--slide-py) var(--slide-px)', maxWidth: '1200px', margin: '0 auto', paddingBottom: '100px' }}>

            <div className="mb-2 animate-fade-up delay-1">
                <span style={{ color: 'var(--teal)', textShadow: 'var(--shadow-glow)', fontSize: '19px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Slide 10 of 12</span>
            </div>
            <h2 className="animate-fade-up delay-1 gradient-text-primary" style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(36px, 4.5vw, 56px)',
                marginBottom: '8px', letterSpacing: '-0.02em',
            }}>
                Financial Projections
            </h2>
            <div className="animate-fade-up delay-2" style={{ width: '48px', height: '3px', background: 'var(--teal)', borderRadius: '2px', marginBottom: '28px' }} />

            {/* KPI Cards Row */}
            <div className="animate-fade-up delay-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '24px' }}>
                {[
                    { label: 'ARR (Year 3)', value: '₹55L', sub: 'Recurring revenue from 5,500 users', color: 'var(--teal)', textShadow: '0 0 1px rgba(0,180,216,0.3)' },
                    { label: 'MRR (Year 2)', value: '₹42K', sub: 'Monthly recurring from maintenance', color: 'var(--gold)' },
                    { label: 'CAC', value: '₹2,000', sub: 'Community events & demos', color: 'var(--success)' },
                    { label: 'ACV', value: '₹16,000', sub: '₹15K device + ₹999/yr updates', color: '#A78BFA' },
                    { label: 'Churn Rate', value: '5%', sub: 'Hardware = low churn (annual)', color: '#F59E0B' },
                    { label: 'Gross Margin', value: '45%', sub: 'At 500+ unit production scale', color: '#10B981' },
                    { label: 'Monthly Burn', value: '₹15K', sub: 'Year 1 — founders bootstrap', color: '#EF4444' },
                    { label: 'Runway', value: '13 mo', sub: '₹2L grant ÷ ₹15K/mo burn (Year 1)', color: '#EC4899' },
                ].map((k, i) => (
                    <div key={i} className="glass-card" style={{
                        padding: '18px',
                        textAlign: 'center',
                    }}>
                        <div style={{ fontSize: '17px', color: 'var(--slate)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '6px' }}>
                            {k.label}
                        </div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '34px', color: k.color, lineHeight: 1 }}>
                            {k.value}
                        </div>
                        <div style={{ fontSize: '16px', color: 'var(--slate)', marginTop: '6px', lineHeight: 1.3 }}>{k.sub}</div>
                    </div>
                ))}
            </div>

            {/* 3-Year Projection Table */}
            <div className="glass-card animate-fade-up delay-4" style={{
                padding: '24px',
                marginBottom: '20px', overflowX: 'auto',
            }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: 'var(--charcoal)', marginBottom: '16px' }}>
                    3-Year Revenue Projection
                </h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '19px' }}>
                    <thead>
                        <tr>
                            {['Metric', 'Year 1 (Pilot)', 'Year 2 (ADIP + B2C)', 'Year 3 (Scale)'].map((h, i) => (
                                <th key={i} style={{
                                    textAlign: i === 0 ? 'left' : 'right', padding: '8px 12px',
                                    color: 'var(--slate)', fontWeight: 600, fontSize: '18px',
                                    borderBottom: '1px solid var(--border)', letterSpacing: '0.03em',
                                }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { metric: 'Units Sold', y1: '50', y2: '500', y3: '5,000' },
                            { metric: 'Hardware Revenue', y1: '₹7.5L', y2: '₹75L', y3: '₹7.5Cr' },
                            { metric: 'Recurring Revenue (ARR)', y1: '₹0.5L', y2: '₹5L', y3: '₹55L' },
                            { metric: 'Total Revenue', y1: '₹8L', y2: '₹80L', y3: '₹8.05Cr', highlight: true },
                            { metric: 'COGS', y1: '₹5.5L', y2: '₹45L', y3: '₹4.1Cr' },
                            { metric: 'Gross Margin', y1: '27%', y2: '40%', y3: '45%' },
                            { metric: 'Team Size', y1: '5 founders', y2: '5 + 3 hires', y3: '5 + 8 hires' },
                            { metric: 'Monthly Burn', y1: '₹15K', y2: '₹2.5L', y3: '₹8L' },
                            { metric: 'Cash Flow +ve', y1: '—', y2: 'Month 9', y3: 'Month 4', highlight: true },
                        ].map((r, i) => (
                            <tr key={i} style={{ background: r.highlight ? 'rgba(0,180,216,0.06)' : 'transparent' }}>
                                <td style={{ padding: '8px 12px', color: r.highlight ? 'var(--teal)' : 'var(--charcoal)', fontWeight: r.highlight ? 700 : 500 }}>{r.metric}</td>
                                <td style={{ padding: '8px 12px', textAlign: 'right', fontFamily: 'var(--font-display)', fontWeight: 600, color: r.highlight ? 'var(--teal)' : 'var(--slate-dark)' }}>{r.y1}</td>
                                <td style={{ padding: '8px 12px', textAlign: 'right', fontFamily: 'var(--font-display)', fontWeight: 600, color: r.highlight ? 'var(--gold)' : 'var(--slate-dark)' }}>{r.y2}</td>
                                <td style={{ padding: '8px 12px', textAlign: 'right', fontFamily: 'var(--font-display)', fontWeight: 600, color: r.highlight ? 'var(--success)' : 'var(--slate-dark)' }}>{r.y3}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Cost Structure */}
            <div className="animate-fade-up delay-6" style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px',
            }}>
                <div className="glass-card" style={{
                    padding: '20px',

                }}>
                    <div style={{ fontSize: '18px', color: 'var(--slate)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '12px', textTransform: 'uppercase' }}>
                        Cost Structure (Year 2)
                    </div>
                    {[
                        { item: 'COGS (hardware)', pct: '56%', amt: '₹45L' },
                        { item: 'Salaries (8 people)', pct: '22%', amt: '₹18L' },
                        { item: 'Marketing & Sales', pct: '10%', amt: '₹8L' },
                        { item: 'R&D / Testing', pct: '7%', amt: '₹5.6L' },
                        { item: 'Operations & Legal', pct: '5%', amt: '₹4L' },
                    ].map((c, i) => (
                        <div key={i} className="flex items-center justify-between mb-2">
                            <span style={{ fontSize: '19px', color: 'var(--slate-dark)' }}>{c.item}</span>
                            <div className="flex items-center gap-2">
                                <span style={{ fontSize: '18px', color: 'var(--slate)' }}>{c.amt}</span>
                                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '20px', color: 'var(--teal)', textShadow: '0 0 1px rgba(0,180,216,0.3)', minWidth: '36px', textAlign: 'right' }}>{c.pct}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="glass-card" style={{
                    padding: '20px',

                }}>
                    <div style={{ fontSize: '18px', color: 'var(--slate)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '12px', textTransform: 'uppercase' }}>
                        Burn Rate & Cash Flow
                    </div>
                    {[
                        { label: 'Year 1 Monthly Burn', value: '₹15,000', note: 'No salaries — founders bootstrap' },
                        { label: 'Year 2 Monthly Burn', value: '₹2.5L', note: '3 new hires + operations' },
                        { label: 'Year 3 Monthly Burn', value: '₹8L', note: '8 hires + manufacturing scale' },
                        { label: 'Break-Even', value: 'Month 9, Y2', note: 'After 500 cumulative units' },
                        { label: 'Net Positive Cash', value: 'Month 4, Y3', note: 'Sustainable growth phase' },
                    ].map((b, i) => (
                        <div key={i} style={{ marginBottom: '10px', paddingBottom: '10px', borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}>
                            <div className="flex items-center justify-between">
                                <span style={{ fontSize: '19px', color: 'var(--slate-dark)' }}>{b.label}</span>
                                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '21px', color: 'var(--gold)' }}>{b.value}</span>
                            </div>
                            <div style={{ fontSize: '17px', color: 'var(--slate)', marginTop: '2px' }}>{b.note}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default FinancialsSlide;
