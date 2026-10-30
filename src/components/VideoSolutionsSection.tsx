import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface VideoSolutionItem {
  id: string;
  partNumber: number;
  partLabel: string;
  title: string;
  subTitle: string;
  category: string;
  videoUrl: string;
  poster: string;
  accentColor: string;
}

const VIDEO_SOLUTIONS: VideoSolutionItem[] = [
  {
    id: 'solution-part-1',
    partNumber: 1,
    partLabel: 'ส่วนที่ 1',
    title: 'ถอดรหัส Hospital Service Solutions',
    subTitle: 'ส่วนที่ 1 : ภาพรวมโครงสร้างระบบบริการโรงพยาบาลยุคดิจิทัล',
    category: 'Digital Healthcare Ecosystem',
    videoUrl: `${import.meta.env.BASE_URL}assets/vitanix-demo.mp4`,
    poster: `${import.meta.env.BASE_URL}assets/showcase-laptop.png`,
    accentColor: '#0066FF',
  },
  {
    id: 'solution-part-2',
    partNumber: 2,
    partLabel: 'ส่วนที่ 2',
    title: 'ถอดรหัส Hospital Service Solutions',
    subTitle: 'ส่วนที่ 2 : ระบบบริหารเวชระเบียนและข้อมูลผู้ป่วย (HIS & EMR)',
    category: 'Smart EMR & Patient Management',
    videoUrl: `${import.meta.env.BASE_URL}assets/vitanix-demo.mp4`,
    poster: `${import.meta.env.BASE_URL}assets/vitanix-claim.png`,
    accentColor: '#10B981',
  },
  {
    id: 'solution-part-3',
    partNumber: 3,
    partLabel: 'ส่วนที่ 3',
    title: 'ถอดรหัส Hospital Service Solutions',
    subTitle: 'ส่วนที่ 3 : กรอบการดำเนินงาน (Hospital Operations Framework)',
    category: 'Operations & Enterprise Integration',
    videoUrl: `${import.meta.env.BASE_URL}assets/vitanix-demo.mp4`,
    poster: `${import.meta.env.BASE_URL}assets/video-solution-part3.png`,
    accentColor: '#EC4899',
  },
  {
    id: 'solution-part-4',
    partNumber: 4,
    partLabel: 'ส่วนที่ 4',
    title: 'ถอดรหัส Hospital Service Solutions',
    subTitle: 'ส่วนที่ 4 : ระบบบริหารจัดการหลังบ้านและโซลูชันคลาวด์ (ERP & Cloud)',
    category: 'Cloud HIS & Back Office Solutions',
    videoUrl: `${import.meta.env.BASE_URL}assets/vitanix-demo.mp4`,
    poster: `${import.meta.env.BASE_URL}assets/office-editorial.jpg`,
    accentColor: '#6366F1',
  },
];

export const VideoSolutionsSection: React.FC = () => {
  // Start on Part 3 (index 2) to directly match the user's reference mockup, or Part 1
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const activeItem = VIDEO_SOLUTIONS[currentIndex];

  // Auto-play video whenever active slide changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Browser autoplay policy might require mute
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
            }
          });
      }
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? VIDEO_SOLUTIONS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === VIDEO_SOLUTIONS.length - 1 ? 0 : prev + 1));
  };

  const handleSelectDot = (idx: number) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current || !videoRef.current.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    videoRef.current.currentTime = percentage * videoRef.current.duration;
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <section id="services" className="py-10 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200/80 select-none">
      <div className="w-[92%] max-w-[1360px] mx-auto px-2 sm:px-4 lg:px-6">
        {/* Dynamic Section Header - updates synchronously as slides change */}
        <div className="text-center mb-8 sm:mb-12">
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-2 mb-2.5 sm:mb-3"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#0066FF] uppercase">
              TOP PROVIDER SYSTEM GROUP CO., LTD.
            </span>
          </motion.div>

          {/* Dynamic Main Heading with Smooth AnimatePresence */}
          <div className="min-h-[70px] sm:min-h-[85px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-1.5"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0F172A] tracking-tight leading-tight">
                  {activeItem.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-base font-medium text-slate-500">
                  {activeItem.subTitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Video Player Carousel Container */}
        <div className="relative flex items-center justify-center gap-3 sm:gap-6 lg:gap-8">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous video"
            className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-slate-300/90 bg-white text-slate-600 hover:text-[#0066FF] hover:border-[#0066FF] hover:bg-blue-50/50 shadow-sm transition-all duration-200 flex items-center justify-center group active:scale-95 cursor-pointer z-20"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
          </button>

          {/* Main Video Frame with Framer Motion Animation */}
          <div
            ref={containerRef}
            className="relative w-full max-w-4xl aspect-[16/9] rounded-[20px] sm:rounded-[28px] lg:rounded-[36px] overflow-hidden border border-slate-200/90 shadow-[0_20px_60px_rgba(0,102,255,0.08)] bg-slate-900 group"
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeItem.id}
                custom={direction}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                {/* HTML5 Video element with Autoplay and Poster Fallback */}
                <video
                  ref={videoRef}
                  src={activeItem.videoUrl}
                  poster={activeItem.poster}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  onClick={togglePlay}
                  className="w-full h-full object-cover cursor-pointer"
                />

                {/* Top Subtle Vignette */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

                {/* Top Overlay Badge */}
                <div className="absolute top-3.5 left-4 sm:top-5 sm:left-6 flex items-center gap-2 sm:gap-2.5 z-10 pointer-events-none">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-semibold text-white tracking-wide drop-shadow-md">
                    {activeItem.partLabel} • {activeItem.category}
                  </span>
                </div>

                {/* Center YouTube Style Play Button Overlay (shown when paused) */}
                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[2px] transition-all cursor-pointer z-10"
                  >
                    <button
                      aria-label="Play video"
                      className="w-16 h-12 sm:w-20 sm:h-14 rounded-2xl bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-2xl transition-transform duration-200 hover:scale-110 active:scale-95"
                    >
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
                    </button>
                  </div>
                )}

                {/* Bottom Interactive Control Bar on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col gap-2 z-10 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Progress scrub bar */}
                  <div
                    onClick={handleSeek}
                    className="w-full h-1.5 bg-white/30 hover:h-2.5 rounded-full cursor-pointer overflow-hidden transition-all relative"
                  >
                    <div
                      className="h-full bg-[#0066FF] rounded-full transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Controls row */}
                  <div className="flex items-center justify-between text-white text-xs sm:text-sm pt-1">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={togglePlay}
                        className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />}
                      </button>

                      <button
                        onClick={toggleMute}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition-colors"
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? (
                          <>
                            <VolumeX className="w-4 h-4" />
                            <span className="text-[11px] font-medium hidden sm:inline">เปิดเสียง</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-4 h-4" />
                            <span className="text-[11px] font-medium hidden sm:inline">ปิดเสียง</span>
                          </>
                        )}
                      </button>

                      <span className="text-[11px] sm:text-xs text-white/80 font-mono hidden md:inline">
                        {activeItem.subTitle}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] sm:text-xs text-white/70 tracking-wider uppercase font-semibold">
                        TOP PROVIDER
                      </span>
                      <button
                        onClick={toggleFullscreen}
                        className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="Fullscreen"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next video"
            className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-slate-300/90 bg-white text-slate-600 hover:text-[#0066FF] hover:border-[#0066FF] hover:bg-blue-50/50 shadow-sm transition-all duration-200 flex items-center justify-center group active:scale-95 cursor-pointer z-20"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 mt-6 sm:mt-8">
          {VIDEO_SOLUTIONS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleSelectDot(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentIndex
                  ? 'w-7 sm:w-8 h-2 sm:h-2.5 bg-[#0066FF]'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

