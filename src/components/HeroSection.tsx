import React from 'react';
import { motion } from 'framer-motion';

const BANNER_SRC = `${import.meta.env.BASE_URL}assets/pphs-banner.jpg`;
const BANNER_FALLBACK = `${import.meta.env.BASE_URL}assets/hero-banner.jpg`;

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="pt-20 sm:pt-24 pb-6 sm:pb-8 px-3 sm:px-6 lg:px-8 max-w-[1560px] mx-auto select-none">
      {/* Framed Hero Banner Container - Clean White Card with Rounded Corners matching Reference */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden border border-slate-200/80 shadow-[0_15px_50px_rgba(0,102,255,0.06)] bg-white p-2 sm:p-5 lg:p-6 flex items-center justify-center transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,102,255,0.09)]"
      >
        <img
          src={BANNER_SRC}
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            if (img.src !== BANNER_FALLBACK) {
              img.src = BANNER_FALLBACK;
            }
          }}
          alt="Panacea Plus Hospital Solution (PPHS) - TOP PROVIDER SYSTEM GROUP"
          className="w-full h-auto max-h-[85vh] object-contain rounded-[18px] sm:rounded-[28px] lg:rounded-[36px] transition-transform duration-500 ease-out hover:scale-[1.01]"
          loading="eager"
        />
      </motion.div>
    </section>
  );
};
