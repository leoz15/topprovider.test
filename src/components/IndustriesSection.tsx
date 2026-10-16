import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { INDUSTRIES } from '../data/agencyData';

export const IndustriesSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-[#FFFFFF] border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-medium uppercase tracking-widest text-[#6E6E73]">
                Expertise
              </span>
              <div className="h-px w-8 bg-black/15" />
              <span className="text-xs font-medium text-[#111111] bg-[#F6F6F4] px-2.5 py-0.5 rounded-full border border-black/[0.06]">
                Domains
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#111111] font-editorial">
              Industries we <br />
              <span className="text-[#6E6E73]">
                transform.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#6E6E73] max-w-md font-normal leading-relaxed">
            We don’t believe in creative silos. Our breakthroughs happen when transferring cross-disciplinary insights between finance, technology, and consumer experiences.
          </p>
        </div>

        {/* Typographic Interactive List */}
        <div className="border-t border-black/[0.08]">
          {INDUSTRIES.map((industry, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={industry.name}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`py-7 sm:py-9 border-b border-black/[0.08] transition-all duration-200 group cursor-pointer ${
                  isHovered ? 'bg-[#F6F6F4] px-5 sm:px-7 rounded-2xl' : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="text-xs font-mono text-[#6E6E73]">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#111111] font-editorial group-hover:translate-x-1.5 transition-transform duration-200">
                      {industry.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between lg:justify-end gap-6 pl-8 lg:pl-0">
                    <p className="text-xs sm:text-sm text-[#6E6E73] max-w-sm hidden sm:block font-normal">
                      {industry.description}
                    </p>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-medium text-[#111111] bg-white px-3 py-1 rounded-full border border-black/[0.08] shadow-xs">
                        {industry.count}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors shadow-xs">
                        <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#6E6E73] mt-2.5 pl-8 sm:hidden">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
