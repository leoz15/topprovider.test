import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import type { Project } from '../types';
import { PROJECTS } from '../data/agencyData';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Product Design & SaaS', 'Brand Identity & E-Commerce', 'Website Design & Marketing', 'Spatial Design & Web Experience'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase().split(' ')[0]));

  return (
    <section id="work" className="py-24 lg:py-32 bg-[#FFFFFF] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-medium uppercase tracking-widest text-[#0066FF]">
                Enterprise Archive
              </span>
              <div className="h-px w-8 bg-blue-300" />
              <span className="text-xs font-medium text-[#0066FF] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 shadow-xs">
                2024 — 2026 Deliverables
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 font-editorial">
              Crafting products <br />
              <span className="text-[#0066FF]">
                with engineered purpose.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-md font-normal leading-relaxed">
            Every engagement represents an uncompromising standard of system reliability, human-centered UI, and tangible commercial acceleration.
          </p>
        </div>

        {/* Category Filter Pills (Blue CI) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 pr-2">
            <Filter className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#0066FF] text-white border-[#0066FF] shadow-[0_4px_14px_rgba(0,102,255,0.3)]'
                    : 'bg-slate-50 text-slate-600 hover:text-[#0066FF] hover:bg-blue-50/60 border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => {
            const colSpan =
              index % 6 === 0
                ? 'md:col-span-12'
                : index % 6 === 1
                ? 'md:col-span-7'
                : index % 6 === 2
                ? 'md:col-span-5'
                : index % 6 === 3
                ? 'md:col-span-5'
                : index % 6 === 4
                ? 'md:col-span-7'
                : 'md:col-span-6';

            const isLarge = index % 6 === 0;

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`${colSpan} group cursor-pointer flex flex-col`}
              >
                {/* Visual Card */}
                <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-slate-50 border border-slate-200/80 shadow-sm transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(0,102,255,0.12)] group-hover:-translate-y-1">
                  <div
                    className={`relative overflow-hidden w-full ${
                      isLarge
                        ? 'aspect-[16/9] lg:aspect-[21/9]'
                        : 'aspect-[4/3] sm:aspect-[16/10]'
                    }`}
                  >
                    <img
                      src={project.coverImage}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                      loading="lazy"
                    />

                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-mono border border-slate-200 shadow-sm">
                        {project.year}
                      </span>
                      {project.metrics && project.metrics[0] && (
                        <span className="px-3 py-1 rounded-full bg-[#0066FF] text-white text-xs font-semibold shadow-sm">
                          {project.metrics[0].value} {project.metrics[0].label}
                        </span>
                      )}
                    </div>

                    {/* Interactive "Explore Case" Badge on Hover */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <div className="px-4 py-2 rounded-full bg-[#0066FF] text-white font-medium text-xs flex items-center gap-1.5 shadow-lg hover:bg-[#0052CC]">
                        <span>View case</span>
                        <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Editorial Metadata Below Card */}
                <div className="pt-4 pb-2 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#0066FF] font-semibold">
                        {project.category}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-xs text-slate-500">{project.client}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-medium text-slate-900 font-editorial group-hover:text-[#0066FF] transition-colors flex items-center gap-2">
                      <span>{project.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#0066FF] opacity-0 group-hover:opacity-100 transition-all" />
                    </h3>

                    <p className="mt-1.5 text-sm text-slate-600 line-clamp-2 max-w-2xl font-normal">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Archive CTA (Blue CI) */}
        <div className="mt-16 p-8 sm:p-10 rounded-[28px] bg-blue-50/60 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-white border border-blue-200 flex items-center justify-center text-[#0066FF] flex-shrink-0 shadow-sm">
              <Sparkles className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-medium text-slate-900 font-editorial">
                Need to inspect proprietary or enterprise system blueprints?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                We maintain confidential case studies in healthcare systems, cloud infrastructure, and enterprise workflows.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#0066FF] text-white text-xs sm:text-sm font-medium hover:bg-[#0052CC] hover:shadow-[0_6px_20px_rgba(0,102,255,0.35)] transition-all whitespace-nowrap text-center shadow-sm"
          >
            Request Private Deck
          </a>
        </div>
      </div>
    </section>
  );
};
