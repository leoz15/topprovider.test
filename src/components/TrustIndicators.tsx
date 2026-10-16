import React from 'react';
import { CLIENT_LOGOS } from '../data/agencyData';

export const TrustIndicators: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 bg-white border-b border-slate-200/80 overflow-hidden select-none">
      {/* Container aligned with other sections */}
      <div className="w-[92%] max-w-[1500px] mx-auto px-2 sm:px-4 lg:px-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200/80">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#0066FF] shrink-0" />
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#0066FF] font-['Prompt']">
              ได้รับความไว้วางใจจากโรงพยาบาลและสถานพยาบาลชั้นนำ
            </p>
          </div>
          <span className="text-[11px] sm:text-xs text-slate-500 font-normal font-['Roboto']">
            Enterprise Solutions • Medical Systems • Mission-Critical Platforms
          </span>
        </div>
      </div>

      {/* Infinite Logo Ticker (Bright Clean Style with Blue Accents) */}
      <div className="relative w-full overflow-hidden select-none">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6 sm:gap-8">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 sm:px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200/80 flex-shrink-0 group hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200 shadow-2xs hover:shadow-xs cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-[#0066FF] shrink-0 group-hover:scale-125 transition-transform" />
              <span className="text-sm sm:text-base font-medium text-slate-800 tracking-tight group-hover:text-[#0066FF] transition-colors font-['Roboto']">
                {logo.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono font-medium text-[#0066FF] bg-blue-50/90 px-2.5 py-0.5 rounded-full border border-blue-200/80">
                {logo.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
