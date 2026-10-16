import React, { useState } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const HERO_IMAGE_URL = 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TERVKbeU15z0voZzqxPgW5H8inBX2fjQUbjlkcfnizi4zjlkRuclWPgGeTQbi8_7U-1nym5Lrz86NSgWMrt5UXYvR7-SEHEwHA2McIMP_Of3_DPS9lFuCaS2rBh8A4659KZA1p=s1360-w1360-h1020-rw';
const LOCAL_FALLBACK = `${import.meta.env.BASE_URL}assets/hero-banner.jpg`;

export const HeroSection: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight } = currentTarget;
    const x = (clientX / clientWidth - 0.5) * 16;
    const y = (clientY / clientHeight - 0.5) * 16;
    setMousePos({ x, y });
  };

  const scrollToProducts = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    document.querySelector('#showcase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-20 sm:pt-24 pb-6 sm:pb-8 px-3 sm:px-6 lg:px-8 max-w-[1560px] mx-auto select-none">
      {/* Framed Hero Container - Image with Rounded Corners & Content Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={handleMouseMove}
        className="relative min-h-[72vh] sm:min-h-[80vh] lg:min-h-[85vh] rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden border border-slate-200/80 shadow-[0_20px_60px_rgba(0,102,255,0.08)] bg-slate-100 group flex flex-col justify-end"
      >
        {/* Background Architectural Motion Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={HERO_IMAGE_URL}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = LOCAL_FALLBACK;
            }}
            referrerPolicy="no-referrer"
            alt="TOP Provider System Group Studio"
            className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.03]"
            style={{
              transform: `scale(1.025) translate3d(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px, 0)`,
            }}
            loading="eager"
          />

          {/* Cinematic lighting & bottom gradient for crisp text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent pointer-events-none" />
          <div
            className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-700 bg-gradient-to-tr from-transparent via-blue-400/15 to-transparent"
            style={{
              transform: `translate3d(${mousePos.x * -1}px, ${mousePos.y * -1}px, 0)`,
            }}
          />
        </div>

        {/* Hero Overlay Content */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-14 w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
          {/* Left: Badge, Heading, Thai Description & Button */}
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-white/60 text-[#0F172A] text-xs sm:text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Healthcare IT & Software Solutions</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.15] drop-shadow-sm"
            >
              Top Provider System Group
            </motion.h1>

            {/* Description (Thai) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2 text-slate-100/90 text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed max-w-2xl drop-shadow-sm"
            >
              <p>
                ผู้เชี่ยวชาญด้านระบบการจัดการภายในโรงพยาบาล เรามีประสบการณ์ในการวางระบบต่าง ๆ เพื่ออำนวยความสะดวก ตั้งแต่การจัดการฐานข้อมูลคนไข้ ระบบแอดมิด ระบบการจัดการคิว ไปจนถึงบริการติดตั้งและจัดจำหน่ายอุปกรณ์งานพิมพ์และเครื่องมือแพทย์
              </p>
              <p>
                เรามีทีมงานมืออาชีพที่มีประสบการณ์กว่า 10 ปี พร้อมให้คำแนะนำในการบริหารจัดการระบบ แก้ปัญหา และดูแลการใช้งานต่าง ๆ ให้มีประสิทธิภาพ
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2"
            >
              <button
                onClick={scrollToProducts}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium text-xs sm:text-sm tracking-wide shadow-[0_10px_25px_rgba(0,102,255,0.45)] hover:shadow-[0_14px_30px_rgba(0,102,255,0.55)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group/btn cursor-pointer"
              >
                <span>Explore Solutions</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </motion.div>
          </div>

          {/* Right: Floating Experience Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0 pb-1"
          >
            <div className="inline-flex items-center gap-4 px-5 py-3 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-white/60 text-slate-900 transition-transform duration-300 hover:scale-105">
              <div className="text-left">
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  10+ Years Experience
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-normal leading-tight mt-0.5">
                  12 Core Software Solutions
                </div>
              </div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center shrink-0">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-slate-800 text-slate-800" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
