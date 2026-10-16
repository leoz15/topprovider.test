import React from 'react';
import { ArrowUpRight, Sparkles, CheckCircle, Eye } from 'lucide-react';
import type { Project } from '../types';
import { PROJECTS } from '../data/agencyData';

interface StickyProjectSectionProps {
  onSelectProject: (project: Project) => void;
}

export const StickyProjectSection: React.FC<StickyProjectSectionProps> = ({ onSelectProject }) => {
  // Select top 3 flagship projects for the showcase
  const stickyProjects = PROJECTS.slice(0, 3);

  return (
    <section id="showcase" className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-900 relative z-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header with Blue Accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-medium uppercase tracking-widest text-[#0066FF]">
                Enterprise Portfolio
              </span>
              <div className="h-px w-8 bg-blue-300" />
              <span className="text-xs font-medium text-[#0066FF] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 shadow-xs">
                Featured Case Studies
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 font-editorial">
              Software engineered for <br />
              <span className="text-[#0066FF]">speed and scale.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-md font-normal leading-relaxed">
            Enterprise-grade digital systems and web applications designed to solve mission-critical challenges and drive business acceleration.
          </p>
        </div>

        {/* Sticky Stacked Product Cards Stage (Blue CI Tone) */}
        <div className="relative space-y-12 lg:space-y-20">
          {stickyProjects.map((project, index) => {
            const topOffset = 88 + index * 16;

            return (
              <div
                key={project.id}
                style={{ top: `${topOffset}px` }}
                className="sticky rounded-[28px] sm:rounded-[36px] bg-[#FFFFFF] border border-slate-200 shadow-[0_20px_50px_rgba(0,102,255,0.06)] overflow-hidden transition-all duration-300"
              >
                {/* Top Window Bar */}
                <div className="px-6 py-3.5 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                    <span className="text-xs font-medium text-slate-500 ml-3">
                      topprovider.platform / {project.name.toLowerCase()}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block text-[11px] font-mono text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 shadow-xs">
                      {project.category}
                    </span>
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-3.5 py-1 rounded-full bg-white hover:bg-blue-50 text-[#0066FF] text-xs font-medium flex items-center gap-1.5 transition-colors border border-blue-200 shadow-xs"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Case Details</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px] lg:min-h-[580px]">
                  {/* Left Column: Editorial Information */}
                  <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200/80 bg-[#FFFFFF]">
                    <div>
                      {/* Top Counter & Year */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="text-xs font-mono font-medium text-[#0066FF] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                          0{index + 1} / 0{stickyProjects.length}
                        </span>
                        <span className="text-xs text-slate-500">
                          {project.year} • {project.client}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 font-editorial mb-3">
                        {project.name}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                        {project.shortDescription}
                      </p>

                      {/* Scope Delivered */}
                      <div className="space-y-2 mb-6">
                        <p className="text-xs font-mono uppercase tracking-wider text-slate-500 font-medium">
                          Scope Delivered:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.deliverables.slice(0, 3).map((item, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 text-xs text-slate-700 border border-slate-200 font-medium"
                            >
                              <CheckCircle className="w-3.5 h-3.5 text-[#0066FF]" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Metrics & Action Button */}
                    <div>
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 mb-6">
                          <div>
                            <p className="text-2xl sm:text-3xl font-semibold font-editorial text-[#0066FF]">
                              {project.metrics[0].value}
                            </p>
                            <p className="text-xs text-slate-500">{project.metrics[0].label}</p>
                          </div>
                          {project.metrics[1] && (
                            <div>
                              <p className="text-2xl sm:text-3xl font-semibold font-editorial text-slate-900">
                                {project.metrics[1].value}
                              </p>
                              <p className="text-xs text-slate-500">{project.metrics[1].label}</p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Primary CTA in Electric Blue */}
                      <button
                        onClick={() => onSelectProject(project)}
                        className="group w-full py-3.5 px-6 rounded-full bg-[#0066FF] text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#0052CC] transition-all duration-200 shadow-md shadow-blue-500/25"
                      >
                        <span>Examine Full Case Study</span>
                        <ArrowUpRight className="w-4 h-4 stroke-[2] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Device Screen Mockup Frame */}
                  <div
                    onClick={() => onSelectProject(project)}
                    className="lg:col-span-7 relative bg-gradient-to-br from-slate-50 to-blue-50/40 overflow-hidden group cursor-pointer flex items-center justify-center p-6 sm:p-10 min-h-[360px] lg:min-h-full"
                  >
                    {/* Device Mockup Shell */}
                    <div className="relative w-full max-w-2xl transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                      {/* Laptop Screen Bezel */}
                      <div className="relative rounded-t-2xl bg-[#0F172A] border-[7px] sm:border-[8px] border-slate-900 shadow-[0_25px_60px_rgba(0,102,255,0.18)] overflow-hidden aspect-[16/10]">
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-800 border border-white/20 z-20" />

                        <img
                          src={project.coverImage}
                          alt={project.name}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />

                        {/* Interactive Beacon / Center Pulse in Royal Blue */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                          <span className="relative flex h-8 w-8">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75"></span>
                            <span className="relative inline-flex items-center justify-center rounded-full h-8 w-8 bg-slate-900/80 border border-blue-400/50 backdrop-blur-sm">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF]"></span>
                            </span>
                          </span>
                        </div>
                      </div>

                      {/* Laptop Bottom Base */}
                      <div className="relative h-3 bg-slate-300 rounded-b-xl border-t border-slate-400 shadow-sm flex justify-center items-start">
                        <div className="w-16 h-1 rounded-b bg-slate-400" />
                      </div>
                    </div>

                    {/* Interactive Preview Badge */}
                    <div className="absolute top-6 right-6">
                      <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-blue-200 shadow-sm text-[#0066FF] text-xs font-medium flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
                        <span>Interactive Case</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
