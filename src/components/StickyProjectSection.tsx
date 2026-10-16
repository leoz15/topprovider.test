import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '../types';
import { PROJECTS } from '../data/agencyData';

interface StickyProjectSectionProps {
  onSelectProject: (project: Project) => void;
}

export const StickyProjectSection: React.FC<StickyProjectSectionProps> = ({ onSelectProject }) => {
  // Select top flagship projects for showcase
  const stickyProjects = PROJECTS.slice(0, 3);

  return (
    <section id="showcase" className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] text-slate-900 relative z-20 border-b border-slate-200/80">
      {/* 90-92% Viewport Width Container with Max 1500px */}
      <div className="w-[92%] max-w-[1500px] mx-auto px-2 sm:px-4 lg:px-6">
        {/* Section Header with Balanced Spacing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 lg:mb-12">
          <div>
            {/* Category Tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex items-center gap-3 mb-2.5 sm:mb-3"
            >
              <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-widest text-[#0066FF] uppercase">
                SOFTWARE PRODUCT
              </span>
              <div className="h-px w-6 sm:w-8 bg-blue-300" />
              <span className="text-[11px] sm:text-xs font-medium text-[#0066FF] bg-blue-50/70 px-3 py-0.5 rounded-full border border-blue-200">
                IT Solution & Product
              </span>
            </motion.div>

            {/* Main Section Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] leading-[1.2]"
            >
              ผลิตภัณฑ์และโซลูชัน <br />
              <span className="text-[#0066FF]">ทั้งหมดของเรา</span>
            </motion.h2>
          </div>

          {/* Right Thai Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-sm md:text-right"
          >
            ระบบดิจิทัลและซอฟต์แวร์ระดับองค์กรทั้ง 12 ระบบ <br className="hidden sm:inline" />
            ที่ออกแบบมาเพื่อแก้ไขปัญหาสำคัญของธุรกิจ <br className="hidden sm:inline" />
            และขับเคลื่อนการทำงานให้เติบโตอย่างก้าวกระโดด
          </motion.p>
        </div>

        {/* Sticky Stacked Product Cards Stage */}
        <div className="relative space-y-10 lg:space-y-14">
          {stickyProjects.map((project, index) => {
            const topOffset = 76 + index * 14;
            const categoryBadge = project.category || 'Hospital Claim';
            const subCategoryBadge = project.subCategory || 'Healthcare Solution';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ top: `${topOffset}px` }}
                className="sticky rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] bg-[#FFFFFF] border border-blue-100/90 shadow-[0_20px_50px_rgba(0,102,255,0.06)] overflow-hidden transition-all duration-300"
              >
                {/* 1. Top Browser Window Bar: Vertically Centered & Uniform Padding */}
                <div className="px-6 sm:px-8 py-3.5 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between gap-4">
                  {/* Left: Window Controls & Path */}
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                    </div>
                    <span className="text-xs font-medium text-slate-500 ml-2 truncate">
                      Topprovider.co.th / {project.name}
                    </span>
                  </div>

                  {/* Right: Category Badges */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-medium text-[#0066FF] bg-white px-3.5 py-1 rounded-full border border-blue-200/90 shadow-2xs">
                      {categoryBadge}
                    </span>
                    <span className="text-xs font-medium text-[#0066FF] bg-white px-3.5 py-1 rounded-full border border-blue-200/90 shadow-2xs">
                      {subCategoryBadge}
                    </span>
                  </div>
                </div>

                {/* 2. Card Body: 38 : 62 Layout Proportion */}
                <div className="flex flex-col lg:flex-row min-h-[480px] lg:min-h-[520px]">
                  {/* Left Column (38%): Product Information & Structured Flow */}
                  <div className="w-full lg:w-[38%] p-6 sm:p-8 lg:p-8 xl:p-9 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100 bg-[#FFFFFF] shrink-0">
                    {/* Top Group: Counter, Title, Description & Features */}
                    <div className="space-y-4">
                      {/* Counter & Year / Client */}
                      <div className="flex items-center justify-between gap-4">
                        <span className="inline-flex items-center justify-center text-xs font-mono font-semibold text-[#0066FF] bg-blue-50/90 px-3 py-1 rounded-full border border-blue-100 leading-none">
                          0{index + 1} / 12
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {project.year} • {project.client}
                        </span>
                      </div>

                      {/* Product Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-[#0F172A] leading-tight">
                        {project.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {project.shortDescription}
                      </p>

                      {/* Key Features */}
                      <div className="space-y-2 pt-1">
                        <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                          KEY FEATURES :
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.deliverables.slice(0, 3).map((item, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50/80 text-xs text-slate-700 border border-slate-200/80 font-medium"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                              <span>{item}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Group: Metrics & Action Button with Balanced Margin */}
                    <div className="pt-6 sm:pt-8 mt-4 sm:mt-6 border-t border-slate-100/90">
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-4 mb-5 sm:mb-6">
                          <div>
                            <p className="text-2xl sm:text-3xl font-bold text-[#0066FF] tracking-tight">
                              {project.metrics[0].value}
                            </p>
                            <p className="text-xs text-slate-500 mt-1 font-normal leading-snug">
                              {project.metrics[0].label}
                            </p>
                          </div>
                          {project.metrics[1] && (
                            <div>
                              <p className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                                {project.metrics[1].value}
                              </p>
                              <p className="text-xs text-slate-500 mt-1 font-normal leading-snug">
                                {project.metrics[1].label}
                              </p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Primary CTA in Electric Blue */}
                      <button
                        onClick={() => onSelectProject(project)}
                        className="w-full py-3.5 px-6 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(0,102,255,0.3)] hover:shadow-[0_12px_28px_rgba(0,102,255,0.45)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer group"
                      >
                        <span>ดูรายละเอียด</span>
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column (62%): Centered Product Preview with Uniform Padding */}
                  <div
                    onClick={() => onSelectProject(project)}
                    className="w-full lg:w-[62%] relative bg-gradient-to-br from-slate-50/80 to-blue-50/20 overflow-hidden group cursor-pointer flex items-center justify-center p-6 sm:p-8 lg:p-10 min-h-[360px] sm:min-h-[420px] lg:min-h-full"
                  >
                    {/* Centered Laptop Mockup with Safe Margins & Uncut Base */}
                    <div className="relative w-full max-w-[760px] my-auto transition-transform duration-500 ease-out group-hover:scale-[1.015] flex flex-col items-center justify-center">
                      {/* Laptop Screen Bezel */}
                      <div className="relative w-full rounded-t-xl bg-[#0F172A] border-[6px] sm:border-[8px] border-slate-900 shadow-[0_20px_50px_rgba(0,102,255,0.12)] overflow-hidden aspect-[16/10] flex items-center justify-center">
                        {project.videoUrl ? (
                          <video
                            src={project.videoUrl}
                            poster={project.coverImage}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                          />
                        ) : (
                          <img
                            src={project.coverImage}
                            alt={project.name}
                            className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                            loading="lazy"
                          />
                        )}
                      </div>

                      {/* Laptop Bottom Base (Fully visible, not cut off) */}
                      <div className="relative w-full h-3 sm:h-3.5 bg-gradient-to-b from-slate-200 to-slate-300 rounded-b-xl border-t border-slate-400/80 shadow-md flex justify-center items-start">
                        <div className="w-20 h-1.5 rounded-b-sm bg-slate-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
