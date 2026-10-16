import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/agencyData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 lg:py-32 bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-medium uppercase tracking-widest text-[#0066FF]">
                Client Reviews
              </span>
              <div className="h-px w-8 bg-blue-300" />
              <span className="text-xs font-mono text-slate-500">
                0{currentIndex + 1} / 0{TESTIMONIALS.length}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 font-editorial">
              What partners <br />
              <span className="text-[#0066FF]">
                say about our work.
              </span>
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] transition-all shadow-xs"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] transition-all shadow-xs"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#FFFFFF] border border-slate-200 p-8 sm:p-14 lg:p-16 shadow-[0_20px_50px_rgba(0,102,255,0.05)] transition-all duration-300">
          {/* Top highlight bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
              ))}
              <span className="text-xs font-medium ml-2 text-slate-500">5.0 Verified Partnership</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-xs font-medium text-[#0066FF] border border-blue-200 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{current.highlight}</span>
            </div>
          </div>

          {/* Big Editorial Quotation */}
          <div className="relative mb-10">
            <Quote className="absolute -top-3 -left-2 w-10 h-10 text-blue-500/10 pointer-events-none" />
            <blockquote className="text-xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-slate-900 leading-[1.3] font-editorial">
              "{current.quote}"
            </blockquote>
          </div>

          {/* Client Bio & Avatar Row */}
          <div className="flex items-center justify-between flex-wrap gap-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3.5">
              <img
                src={current.avatar}
                alt={current.clientName}
                className="w-12 h-12 rounded-full object-cover border border-slate-200 shadow-xs"
              />
              <div>
                <h3 className="text-base font-medium text-slate-900 leading-tight">
                  {current.clientName}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {current.jobTitle}, <span className="text-[#0066FF] font-medium">{current.company}</span>
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    currentIndex === idx ? 'w-6 bg-[#0066FF]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
