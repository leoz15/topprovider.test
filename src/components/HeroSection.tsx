import React, { useState } from 'react';

export const HeroSection: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight } = currentTarget;
    const x = (clientX / clientWidth - 0.5) * 16;
    const y = (clientY / clientHeight - 0.5) * 16;
    setMousePos({ x, y });
  };

  const scrollToProducts = () => {
    document.querySelector('#showcase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-20 sm:pt-24 pb-6 sm:pb-8 px-3 sm:px-6 lg:px-8 max-w-[1560px] mx-auto select-none">
      {/* Framed Hero Container - Pure Image with Rounded Corners & Subtle Motion */}
      <div
        onMouseMove={handleMouseMove}
        onClick={scrollToProducts}
        className="relative min-h-[70vh] sm:min-h-[78vh] lg:min-h-[82vh] rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden border border-slate-200/80 shadow-[0_20px_60px_rgba(0,102,255,0.06)] bg-slate-100 cursor-pointer group"
        title="Scroll to explore products"
      >
        {/* Background Architectural Motion Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/assets/hero-architecture.jpg"
            alt="TOP Provider System Group Studio"
            className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04]"
            style={{
              transform: `scale(1.025) translate3d(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px, 0)`,
            }}
            loading="eager"
          />

          {/* Gentle cinematic lighting & subtle gleam */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
          <div
            className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-700 bg-gradient-to-tr from-transparent via-blue-400/15 to-transparent"
            style={{
              transform: `translate3d(${mousePos.x * -1}px, ${mousePos.y * -1}px, 0)`,
            }}
          />
        </div>
      </div>
    </section>
  );
};
