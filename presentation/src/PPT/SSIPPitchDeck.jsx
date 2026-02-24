import React, { useState, useEffect, useCallback } from 'react';
import TitleSlide from './slides/TitleSlide';
import BusinessOverviewSlide from './slides/BusinessOverviewSlide';
import StrategySlide from './slides/StrategySlide';
import CompetitiveSlide from './slides/CompetitiveSlide';
import MarketSlide from './slides/MarketSlide';
import SolutionSlide from './slides/SolutionSlide';
import ProductSlide2 from './slides/ProductSlide2';
import MarketAnalysisSlide from './slides/MarketAnalysisSlide';
import FoundersSlide from './slides/FoundersSlide';
import FinancialsSlide from './slides/FinancialsSlide';
import AskSlide from './slides/AskSlide';
import ExitSlide from './slides/ExitSlide';

const TOTAL_SLIDES = 12;

const SLIDE_TITLES = [
    'Introduction',
    'Organisation & Team',
    'Business Overview',
    'Strategy',
    'Competitive Analysis',
    'Market Opportunity',
    'Product Details',
    'Product Tech & Demo',
    'Market Analysis',
    'Financial Analysis',
    'Funding Request',
    'Exit',
];

const SSIPPitchDeck = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);
    const [touchStart, setTouchStart] = useState(null);

    const go = useCallback((n) => {
        if (n >= 0 && n < TOTAL_SLIDES) {
            setDirection(n > current ? 1 : -1);
            setCurrent(n);
        }
    }, [current]);

    const next = useCallback(() => go(current + 1), [go, current]);
    const prev = useCallback(() => go(current - 1), [go, current]);

    useEffect(() => {
        const handleKey = (e) => {
            if (['ArrowRight', 'Enter', ' ', 'ArrowDown'].includes(e.key)) { e.preventDefault(); next(); }
            if (['ArrowLeft', 'Backspace', 'ArrowUp'].includes(e.key)) { e.preventDefault(); prev(); }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [next, prev]);

    const onTouchStart = (e) => setTouchStart(e.touches[0].clientX);
    const onTouchEnd = (e) => {
        if (touchStart === null) return;
        const diff = touchStart - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
        setTouchStart(null);
    };

    const slides = [
        <TitleSlide key="t" />,
        <FoundersSlide key="f" />,
        <BusinessOverviewSlide key="bo" />,
        <StrategySlide key="strat" />,
        <CompetitiveSlide key="comp" />,
        <MarketSlide key="m" />,
        <SolutionSlide key="s1" />,
        <ProductSlide2 key="s2" />,
        <MarketAnalysisSlide key="ma" />,
        <FinancialsSlide key="fi" />,
        <AskSlide key="a" />,
        <ExitSlide key="e" />
    ];

    return (
        <div
            className="relative w-screen h-screen overflow-hidden select-none"
            style={{ background: 'var(--navy)', fontFamily: 'var(--font-body)' }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            {/* Slide Content */}
            <div className="w-full h-full" key={current}>
                {slides[current]}
            </div>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-50" style={{
                background: 'linear-gradient(to top, rgba(15,27,45,0.95), rgba(15,27,45,0.7), transparent)',
                padding: '24px 32px 16px',
            }}>
                {/* Progress Bar */}
                <div className="w-full h-1 rounded-full mb-3" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <div className="h-full rounded-full transition-all duration-500 ease-out" style={{
                        width: `${((current + 1) / TOTAL_SLIDES) * 100}%`,
                        background: 'linear-gradient(90deg, var(--teal), var(--teal-light))',
                    }} />
                </div>

                <div className="flex items-center justify-between">
                    {/* Prev Button */}
                    <button
                        onClick={prev}
                        disabled={current === 0}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200"
                        style={{
                            background: current === 0 ? 'transparent' : 'rgba(255,255,255,0.06)',
                            color: current === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.7)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            cursor: current === 0 ? 'default' : 'pointer',
                            fontSize: '14px', fontFamily: 'var(--font-body)', fontWeight: 500,
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                        <span className="hidden sm:inline">Back</span>
                    </button>

                    {/* Slide Dots */}
                    <div className="flex items-center gap-1.5 flex-wrap justify-center overflow-x-auto px-2" style={{ maxWidth: '60%', scrollbarWidth: 'none' }}>
                        {SLIDE_TITLES.map((title, i) => (
                            <button
                                key={i}
                                onClick={() => go(i)}
                                title={title}
                                className="transition-all duration-300 flex-shrink-0"
                                style={{
                                    width: i === current ? '28px' : '8px',
                                    height: '8px',
                                    borderRadius: '4px',
                                    background: i === current
                                        ? 'var(--teal)'
                                        : i < current
                                            ? 'rgba(0,180,216,0.4)'
                                            : 'rgba(255,255,255,0.15)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: 0,
                                }}
                            />
                        ))}
                    </div>

                    {/* Slide Counter & Next */}
                    <div className="flex items-center gap-3">
                        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', fontFamily: 'var(--font-display)', fontWeight: 500 }}>
                            {current + 1} / {TOTAL_SLIDES}
                        </span>
                        <button
                            onClick={next}
                            disabled={current === TOTAL_SLIDES - 1}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200"
                            style={{
                                background: current === TOTAL_SLIDES - 1 ? 'transparent' : 'var(--teal)',
                                color: current === TOTAL_SLIDES - 1 ? 'rgba(255,255,255,0.2)' : '#fff',
                                border: 'none',
                                cursor: current === TOTAL_SLIDES - 1 ? 'default' : 'pointer',
                                fontSize: '14px', fontFamily: 'var(--font-body)', fontWeight: 600,
                            }}
                        >
                            <span className="hidden sm:inline">Next</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SSIPPitchDeck;
