import React from 'react';
import { CLIENT_LOGOS, TRUST_METRICS } from '../data/agencyData';
import { ShieldCheck, Award, Zap, TrendingUp } from 'lucide-react';

export const TrustIndicators: React.FC = () => {
  const metricIcons = [Zap, Award, ShieldCheck, TrendingUp];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-[#0066FF]">
              Trusted by Industry Leaders & Institutions
            </p>
          </div>
          <span className="text-xs text-slate-500 font-normal">
            Enterprise Solutions • Medical Systems • Mission-Critical Platforms
          </span>
        </div>
      </div>

      {/* Infinite Logo Ticker (Bright Clean Style with Blue Accents) */}
      <div className="relative w-full overflow-hidden mb-16 select-none">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-8 sm:gap-12">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200/80 flex-shrink-0 group hover:border-blue-300 hover:bg-blue-50/40 transition-colors shadow-xs"
            >
              <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
              <span className="text-sm sm:text-base font-medium font-editorial text-slate-800 tracking-tight group-hover:text-[#0066FF] transition-colors">
                {logo.name}
              </span>
              <span className="text-[10px] font-mono text-[#0066FF] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                {logo.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Metrics Grid (Blue CI Style) */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_METRICS.map((metric, idx) => {
            const Icon = metricIcons[idx % metricIcons.length];
            return (
              <div
                key={metric.label}
                className="p-7 rounded-[28px] bg-slate-50 border border-slate-200/80 transition-all duration-200 hover:shadow-[0_12px_30px_rgba(0,102,255,0.08)] hover:bg-white hover:border-blue-200 group"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-blue-100 flex items-center justify-center text-[#0066FF] shadow-xs group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4 stroke-[2]" />
                  </div>
                  <span className="text-[10px] font-mono text-[#0066FF] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 uppercase tracking-wider font-semibold">
                    Verified
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-semibold font-editorial text-slate-900 tracking-tight mb-1.5 group-hover:text-[#0066FF] transition-colors">
                  {metric.value}
                </div>

                <h4 className="text-sm font-medium text-slate-800 mb-1">
                  {metric.label}
                </h4>

                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {metric.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
