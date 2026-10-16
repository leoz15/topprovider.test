import React from 'react';
import { Award, Layers, ShieldCheck, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const STATS = [
  {
    icon: Award,
    value: '10+ Years',
    label: 'Industry Experience',
    subtext: 'ความเชี่ยวชาญการวางระบบกว่าทศวรรษ',
  },
  {
    icon: Layers,
    value: '12 Systems',
    label: 'Core Software Solutions',
    subtext: 'โซลูชันแพลตฟอร์มระดับองค์กรครบวงจร',
  },
  {
    icon: ShieldCheck,
    value: '99.9%',
    label: 'Performance & Uptime',
    subtext: 'เสถียรภาพและความปลอดภัยระดับมาตรฐาน',
  },
  {
    icon: Headphones,
    value: '24/7',
    label: 'Dedicated Support',
    subtext: 'ทีมงานมืออาชีพดูแลและแก้ไขปัญหาตลอดเวลา',
  },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
      {/* 90-92% Viewport Width Container with Max 1500px */}
      <div className="w-[92%] max-w-[1500px] mx-auto px-2 sm:px-4 lg:px-6">
        {/* 4 Cards Grid: 4 Columns on Desktop, 2 Columns on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 sm:p-7 rounded-[22px] sm:rounded-[28px] bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon Pill */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#0066FF] shadow-2xs group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-mono text-[#0066FF] bg-blue-50/60 px-2 py-0.5 rounded-full border border-blue-100 uppercase tracking-wider font-semibold">
                      Verified
                    </span>
                  </div>

                  {/* Big Number */}
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A] group-hover:text-[#0066FF] transition-colors mb-1.5">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-800 mb-1">
                    {stat.label}
                  </h4>

                  {/* Subtext */}
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal">
                    {stat.subtext}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
