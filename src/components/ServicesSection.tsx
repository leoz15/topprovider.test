import React, { useState } from 'react';
import { ArrowUpRight, Plus, Minus, Check, Clock, Wrench } from 'lucide-react';
import { SERVICES } from '../data/agencyData';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [expandedId, setExpandedId] = useState<string>('brand-identity');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  const handleInquire = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#FFFFFF] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-medium uppercase tracking-widest text-[#0066FF]">
                Core Capabilities
              </span>
              <div className="h-px w-8 bg-blue-300" />
              <span className="text-xs font-medium text-[#0066FF] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 shadow-xs">
                Engineering & Design
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 font-editorial">
              How we accelerate <br />
              <span className="text-[#0066FF]">
                forward-thinking teams.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-md font-normal leading-relaxed">
            From architecture planning to full-stack web applications, healthcare digital systems, and enterprise cloud solutions.
          </p>
        </div>

        {/* Editorial Accordion List (Blue CI Style) */}
        <div className="divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className={`transition-colors duration-200 ${
                  isExpanded ? 'bg-blue-50/40' : 'hover:bg-slate-50/70'
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(service.id)}
                  className="py-7 sm:py-9 px-2 sm:px-4 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start md:items-center gap-6 sm:gap-8">
                    <span className={`text-lg sm:text-xl font-mono ${isExpanded ? 'text-[#0066FF] font-semibold' : 'text-slate-400'}`}>
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 font-editorial tracking-tight group-hover:text-[#0066FF] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-center">
                    <span className="hidden sm:inline-block text-xs font-mono text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 shadow-xs">
                      {service.timeline}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
                      isExpanded
                        ? 'bg-[#0066FF] text-white shadow-[0_4px_14px_rgba(0,102,255,0.3)]'
                        : 'bg-white border border-slate-200 text-slate-700 hover:border-[#0066FF]'
                    }`}>
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Panel */}
                {isExpanded && (
                  <div className="pb-10 pt-2 px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-blue-100/80 animate-fadeIn">
                    <div className="lg:col-span-5 space-y-4">
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#0066FF]" />
                          <span>Timeline: <strong className="text-slate-800">{service.timeline}</strong></span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Wrench className="w-3.5 h-3.5 text-[#0066FF]" />
                          <span>Tools: <strong className="text-slate-800">{service.tools.slice(0, 3).join(', ')}</strong></span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleInquire(service.title)}
                        className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0066FF] text-white text-xs font-medium hover:bg-[#0052CC] hover:shadow-[0_6px_20px_rgba(0,102,255,0.35)] transition-all shadow-sm"
                      >
                        <span>Inquire About {service.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="lg:col-span-7">
                      <p className="text-xs font-mono uppercase tracking-wider text-[#0066FF] font-semibold mb-3">
                        Scope & Deliverables
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.deliverables.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-blue-100 shadow-sm"
                          >
                            <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center text-[#0066FF] flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 stroke-[2.5]" />
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-slate-800">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
