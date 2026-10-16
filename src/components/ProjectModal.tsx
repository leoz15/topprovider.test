import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Sparkles, ExternalLink, Calendar, User, Tag, Layers } from 'lucide-react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenContact }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/40 backdrop-blur-md animate-fadeIn">
      {/* Background click overlay */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl my-auto bg-[#FFFFFF] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-black/[0.08] z-10 max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="p-5 sm:p-6 bg-[#FFFFFF] border-b border-black/[0.06] flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
            <div>
              <h3 className="text-lg sm:text-xl font-medium text-[#111111] font-editorial leading-tight">
                {project.name}
              </h3>
              <p className="text-xs text-[#6E6E73] font-normal">{project.client} • {project.year}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066FF] text-white text-xs font-medium hover:bg-[#0052CC] hover:shadow-[0_4px_14px_rgba(0,102,255,0.3)] transition-all shadow-sm"
            >
              <span>Build similar project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-50">
          {/* Hero Image Showcase */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/10] bg-white border border-slate-200 shadow-sm">
            {project.videoUrl ? (
              <video
                src={project.videoUrl}
                poster={project.coverImage}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain bg-[#0F172A]"
              />
            ) : (
              <img
                src={project.coverImage}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0066FF] text-white text-xs font-mono shadow-sm">
              {project.category}
            </div>
          </div>

          {/* Metadata Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <User className="w-3.5 h-3.5 text-[#0066FF]" />
                <span>Client</span>
              </div>
              <p className="font-medium text-xs sm:text-sm text-slate-900">{project.client}</p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#0066FF]" />
                <span>Year</span>
              </div>
              <p className="font-medium text-xs sm:text-sm text-slate-900">{project.year}</p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <Tag className="w-3.5 h-3.5 text-[#0066FF]" />
                <span>Discipline</span>
              </div>
              <p className="font-medium text-xs sm:text-sm text-slate-900">{project.category}</p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <Layers className="w-3.5 h-3.5 text-[#0066FF]" />
                <span>Stack</span>
              </div>
              <p className="font-medium text-xs sm:text-sm text-slate-900">{project.technologies.slice(0, 2).join(', ')}</p>
            </div>
          </div>

          {/* Overview & Story */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <h4 className="text-xs font-mono font-medium text-[#0066FF] uppercase tracking-widest">
              Overview
            </h4>
            <p className="text-xl sm:text-2xl text-slate-900 font-medium leading-relaxed font-editorial">
              {project.shortDescription}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {project.fullDescription}
            </p>
          </div>

          {/* Impact Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0052CC] to-[#00388A] text-white shadow-md">
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-xs font-mono uppercase tracking-widest text-white/90 font-medium">
                  Business Impact
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="border-t border-white/20 pt-4">
                    <p className="text-2xl sm:text-4xl font-medium font-editorial text-white mb-1">
                      {m.value}
                    </p>
                    <p className="text-xs text-white/80">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h5 className="text-xs font-mono uppercase tracking-widest text-[#0066FF] mb-2 font-medium">
                The Challenge
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h5 className="text-xs font-mono uppercase tracking-widest text-[#0066FF] mb-2 font-medium">
                Our Solution
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Deliverables & Tech Chips */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div>
              <h5 className="text-xs font-mono uppercase tracking-widest text-[#0066FF] mb-3 font-semibold">
                Deliverables
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h5 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2.5 font-medium">
                Technologies
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] text-xs font-medium border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Client Testimonial snippet */}
          {project.testimonial && (
            <div className="p-6 rounded-2xl bg-white border-l-4 border-[#0066FF] border border-slate-200 shadow-xs space-y-2">
              <p className="text-sm sm:text-base italic text-slate-800">
                "{project.testimonial.quote}"
              </p>
              <div className="text-xs font-medium text-slate-900">
                {project.testimonial.author} — <span className="text-[#0066FF] font-medium">{project.testimonial.role}</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom CTA Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            Want a tailored case study presentation for your team?
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#0066FF] text-white text-xs sm:text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#0052CC] hover:shadow-[0_4px_14px_rgba(0,102,255,0.3)] transition-all shadow-sm"
          >
            <span>Inquire About Similar Scope</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
