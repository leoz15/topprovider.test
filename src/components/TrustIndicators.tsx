import React from 'react';

const LOGOS = [
  {
    name: 'Spellbook',
    render: () => (
      <div className="flex items-center gap-1.5">
        <svg className="w-5 h-5 text-slate-900 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
        <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">spellbook</span>
      </div>
    ),
  },
  {
    name: 'PostHog',
    render: () => (
      <div className="flex items-center gap-2">
        <svg className="w-6 h-6 text-slate-900 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M19 12c-1.5-3.5-5-5-8.5-5-1.5 0-3 .5-4 1.5L5 7v10h14c1.5 0 2.5-1 2.5-2.5S20.5 12 19 12zm-3 4H8v-2h8v2zm0-3H8v-2h8v2z" />
          <path d="M7 4L5 7h4L7 4zM12 3l-2 4h4l-2-4z" />
        </svg>
        <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900">PostHog</span>
      </div>
    ),
  },
  {
    name: 'augment code',
    render: () => (
      <div className="flex items-center gap-1.5">
        <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">augment code</span>
      </div>
    ),
  },
  {
    name: 'telnyx',
    render: () => (
      <div className="flex items-center gap-1.5">
        <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900">telnyx</span>
      </div>
    ),
  },
  {
    name: 'Deepgram',
    render: () => (
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-slate-900 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M3 4C3 3.45 3.45 3 4 3H12C16.97 3 21 7.03 21 12C21 16.97 16.97 21 12 21H4C3.45 21 3 20.55 3 20V4ZM7 7V17H12C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7H7Z" />
        </svg>
        <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">Deepgram</span>
      </div>
    ),
  },
  {
    name: 'redpoint',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 border-[2.2px] border-slate-900 rounded-[3px] relative flex items-center justify-center shrink-0">
          <div className="w-1.5 h-1.5 bg-slate-900 rounded-[1px]" />
        </div>
        <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">redpoint</span>
      </div>
    ),
  },
  {
    name: 'browserbase',
    render: () => (
      <div className="flex items-center gap-1.5">
        <span className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900">browserbase</span>
      </div>
    ),
  },
  {
    name: 'Robinhood',
    render: () => (
      <div className="flex items-center gap-1.5">
        <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">Robinhood</span>
      </div>
    ),
  },
];

const STATS_DATA = [
  {
    value: '10+ Years',
    label: 'Industry Experience',
    subtext: 'ความเชี่ยวชาญการวางระบบกว่าทศวรรษ',
  },
  {
    value: '12 Systems',
    label: 'Core Software Solutions',
    subtext: 'โซลูชันแพลตฟอร์มระดับองค์กรครบวงจร',
  },
  {
    value: '99.9%',
    label: 'Performance & Uptime',
    subtext: 'เสถียรภาพและความปลอดภัยระดับมาตรฐาน',
  },
  {
    value: '24/7',
    label: 'Dedicated Support',
    subtext: 'ทีมงานมืออาชีพดูแลและแก้ไขปัญหาตลอดเวลา',
  },
];

export const TrustIndicators: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 bg-[#F8FAFC] border-b border-slate-200/80 select-none">
      <div className="w-[92%] max-w-[1240px] mx-auto px-2 sm:px-4">
        {/* Unified Card Container Matching Reference Image 1 */}
        <div className="bg-white rounded-[24px] sm:rounded-[32px] border border-slate-200/90 shadow-[0_4px_30px_rgba(0,0,0,0.03)] overflow-hidden">
          {/* Top Half: Trust Header + Logo Marquee */}
          <div className="pt-8 sm:pt-10 pb-8 sm:pb-10">
            <p className="text-center text-xs sm:text-[13px] md:text-sm text-slate-500 font-normal tracking-wide px-4 mb-6 sm:mb-8">
              Trusted by 500+ engineering organizations. Startups to Fortune 100
            </p>

            {/* Marquee with Left & Right Gradient Fade Masks */}
            <div className="relative w-full overflow-hidden select-none">
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

              <div className="animate-marquee flex items-center gap-12 sm:gap-16 lg:gap-20">
                {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
                  <div key={idx} className="flex-shrink-0 opacity-85 hover:opacity-100 transition-opacity">
                    {logo.render()}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Clean Horizontal Divider */}
          <div className="border-t border-slate-100" />

          {/* Bottom Half: 4 Stat Columns Divided by Vertical Borders */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {STATS_DATA.map((item, idx) => (
              <div key={idx} className="py-7 sm:py-9 lg:py-11 px-4 text-center">
                <div className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0866F5] leading-none mb-2 font-['Inter',sans-serif]">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 tracking-tight">
                  {item.label}
                </div>
                {item.subtext && (
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1 font-normal leading-relaxed">
                    {item.subtext}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
