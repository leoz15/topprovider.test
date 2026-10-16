import React from 'react';
import { Eye, Heart, Compass } from 'lucide-react';

export const AgencyIntro: React.FC = () => {
  const tenets = [
    {
      num: '01',
      title: 'Craft & Precision',
      desc: 'We sweat the micromillimeters: typographic tracking, easing curves, lighting shaders, and sub-pixel alignment.',
      icon: Eye,
    },
    {
      num: '02',
      title: 'Emotional Resonance',
      desc: 'People don’t fall in love with software features; they fall in love with how digital touchpoints make them feel.',
      icon: Heart,
    },
    {
      num: '03',
      title: 'Commercial Velocity',
      desc: 'Aesthetic innovation is only half the formula. Our work is engineered to drive conversions and defensible market valuation.',
      icon: Compass,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F6F6F4] border-b border-black/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Label & Tagline */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-[#6E6E73]">
            Manifesto
          </span>
          <div className="h-px w-8 bg-black/15" />
          <span className="text-xs font-medium text-[#111111] bg-white px-2.5 py-0.5 rounded-full border border-black/[0.08] shadow-sm">
            Our Core Belief
          </span>
        </div>

        {/* Big Editorial Statement (Most Studios Typography) */}
        <div className="max-w-5xl mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#111111] leading-[1.12] font-editorial">
            “Good design makes people look.{' '}
            <span className="text-[#6E6E73]">
              Great design
            </span>{' '}
            makes people feel.”
          </h2>

          <p className="mt-8 text-base sm:text-xl text-[#6E6E73] leading-relaxed max-w-3xl font-normal">
            We are an independent digital design studio at the intersection of brand strategy, high-fidelity interaction design, and progressive web engineering. We reject safe formulas to craft iconic digital products that endure.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-8 border-t border-black/[0.06]">
          {tenets.map((tenet) => {
            const Icon = tenet.icon;
            return (
              <div
                key={tenet.num}
                className="group p-8 rounded-[28px] bg-[#FFFFFF] border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-medium text-[#6E6E73] bg-[#F6F6F4] px-3 py-1 rounded-full border border-black/[0.06]">
                    {tenet.num}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#F6F6F4] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4 stroke-[2]" />
                  </div>
                </div>

                <h3 className="text-lg font-medium text-[#111111] font-editorial mb-2">
                  {tenet.title}
                </h3>
                <p className="text-sm text-[#6E6E73] leading-relaxed font-normal">
                  {tenet.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
