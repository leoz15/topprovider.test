import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../data/agencyData';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-14 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
      {/* 90-92% Viewport Width Container with Max 1500px */}
      <div className="w-[92%] max-w-[1500px] mx-auto px-2 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex items-center gap-3 mb-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
              <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-widest text-[#0066FF] uppercase">
                Leadership & Architecture Team
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A]"
            >
              ทีมผู้เชี่ยวชาญระดับองค์กร
            </motion.h2>
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm text-slate-500 font-normal"
          >
            Bangkok Headquarters & Global Specialists
          </motion.span>
        </div>

        {/* Profile Cards Grid (4 Cards Horizontal on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-5 rounded-[24px] sm:rounded-[28px] bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Profile Image with Rounded Corners */}
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Location Tag */}
                  <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-mono flex items-center gap-1.5 shadow-sm">
                    <MapPin className="w-3 h-3 text-[#0066FF]" />
                    <span>{member.location}</span>
                  </div>
                </div>

                {/* Name */}
                <h4 className="text-base sm:text-lg font-bold text-[#0F172A] leading-tight group-hover:text-[#0066FF] transition-colors">
                  {member.name}
                </h4>

                {/* Role */}
                <p className="text-xs font-medium text-[#0066FF] mt-1 mb-2.5 leading-snug">
                  {member.role}
                </p>

                {/* Bio Description */}
                <p className="text-xs text-slate-500 leading-relaxed font-normal line-clamp-3">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
