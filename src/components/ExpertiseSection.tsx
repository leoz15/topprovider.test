import React from 'react';
import { motion } from 'framer-motion';

const CAPABILITIES = [
  'Product Design',
  'UX/UI Design',
  'System Architecture',
  'Healthcare Solution',
  'ERP System',
  'Hospital Management',
  'e-Claim Automation',
  'Cloud Infrastructure',
  'Medical Software',
  'Enterprise Integration',
  'High-Performance APIs',
  'Business Intelligence',
  'HL7 / FHIR Standards',
  'Database Optimization',
  'Queue & Hospital Kiosk',
];

export const ExpertiseSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 bg-white border-b border-slate-200/80 overflow-hidden select-none">
      {/* 90-92% Viewport Width Container with Max 1500px */}
      <div className="w-[92%] max-w-[1500px] mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-widest text-[#0066FF] uppercase">
              Expertise & Core Capabilities
            </span>
          </div>
          <span className="text-xs text-slate-400 font-normal">
            End-to-End Enterprise Software Engineering
          </span>
        </div>

        {/* Pill Tags: Horizontal wrapping layout with gentle hover effect */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {CAPABILITIES.map((cap, idx) => (
            <motion.div
              key={cap}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.03, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-50 hover:bg-blue-50/70 border border-slate-200/90 hover:border-blue-300 text-xs sm:text-sm font-medium text-slate-700 hover:text-[#0066FF] transition-all duration-200 shadow-2xs group cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300 group-hover:bg-[#0066FF] transition-colors" />
              <span>{cap}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
