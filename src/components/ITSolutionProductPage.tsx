import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronRight,
  CheckCircle2,
  ArrowUpRight,
  Stethoscope,
  Layers,
  Zap,
  HeadphonesIcon,
  PhoneCall,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from 'lucide-react';
import {
  IT_SOLUTION_PRODUCTS,
  DOMAIN_PILLS,
  type DomainPillId,
  type ITSolutionProduct,
} from '../data/itSolutionsData';
import { SoftwareMockupUI } from './SoftwareMockupUI';

const OFFICE_IMAGE_SRC = `${import.meta.env.BASE_URL}assets/office-editorial.jpg`;
const VITANIX_VIDEO_SRC = `${import.meta.env.BASE_URL}assets/vitanix-demo.mp4`;
const VITANIX_POSTER_SRC = `${import.meta.env.BASE_URL}assets/vitanix-claim.png`;

interface ITSolutionProductPageProps {
  onNavigateHome?: () => void;
  onContactClick: () => void;
}

export const ITSolutionProductPage: React.FC<ITSolutionProductPageProps> = ({
  onContactClick,
}) => {
  // Active Domain Pill for the 6 Category Pills
  const [activeDomainPill, setActiveDomainPill] = useState<DomainPillId>('software');
  // Active Product in the Interactive Product Explorer & Product Detail Section
  const [activeProductId, setActiveProductId] = useState<string>('vitanix-claim');
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const productDetailRef = useRef<HTMLDivElement>(null);
  const explorerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeProduct: ITSolutionProduct =
    IT_SOLUTION_PRODUCTS.find((p) => p.id === activeProductId) || IT_SOLUTION_PRODUCTS[0];

  useEffect(() => {
    if (activeProductId === 'vitanix-claim' && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
      setIsPlayingVideo(true);
    }
  }, [activeProductId]);

  const handleSelectProduct = (productId: string, scrollToDetail = false) => {
    setActiveProductId(productId);
    if (scrollToDetail && productDetailRef.current) {
      productDetailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExploreClick = () => {
    explorerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#F5F8FC] text-[#17233F]">
      {/* =====================================================================
          1. CATEGORY TABS (6 Domain Pills Centered)
      ===================================================================== */}
      <section className="pt-24 sm:pt-28 pb-4 bg-[#F5F8FC]">
        <div className="w-[92%] max-w-[1320px] mx-auto">
          <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-2 no-scrollbar">
            {DOMAIN_PILLS.map((pill) => {
              const isSelected = pill.id === activeDomainPill;
              return (
                <button
                  key={pill.id}
                  onClick={() => setActiveDomainPill(pill.id)}
                  className={`shrink-0 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0866F5] text-white border border-[#0866F5] shadow-[0_6px_18px_rgba(8,102,245,0.28)]'
                      : 'bg-white text-[#17233F] border border-[#E5EAF2] hover:border-[#0866F5]/50 hover:text-[#0866F5]'
                  }`}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. INTERACTIVE PRODUCT EXPLORER CARD
          Left: LIST OF SOLUTIONS (12 Items)
          Right: Browser Window + Laptop Mockup + Bottom Product Bar with 'ดูรายละเอียด ↗'
      ===================================================================== */}
      <section ref={explorerRef} className="pb-16 bg-[#F5F8FC]">
        <div className="w-[92%] max-w-[1320px] mx-auto">
          <div className="rounded-[28px] bg-white border border-[#E5EAF2] shadow-[0_16px_45px_rgba(17,27,70,0.05)] p-4 sm:p-6 lg:p-7">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Left Sidebar: LIST OF SOLUTIONS */}
              <div className="lg:col-span-4 xl:col-span-3 border-b lg:border-b-0 lg:border-r border-[#E5EAF2] pr-0 lg:pr-5 pb-4 lg:pb-0">
                <div className="pb-3 mb-2 border-b border-[#E5EAF2]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0866F5]">
                    LIST OF SOLUTIONS
                  </p>
                </div>
                <div className="space-y-1">
                  {IT_SOLUTION_PRODUCTS.map((product) => {
                    const isActive = product.id === activeProduct.id;
                    return (
                      <button
                        key={product.id}
                        onClick={() => handleSelectProduct(product.id, false)}
                        className={`w-full px-3 py-2 text-left text-xs sm:text-[13px] flex items-center justify-between gap-2 rounded-xl transition-all cursor-pointer ${
                          isActive
                            ? 'bg-blue-50/90 text-[#0866F5] font-bold shadow-2xs'
                            : 'text-[#17233F] hover:bg-[#F8FAFC] hover:text-[#0866F5] font-medium'
                        }`}
                      >
                        <span className="truncate">{product.sidebarLabel}</span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                            isActive ? 'text-[#0866F5] translate-x-0.5' : 'text-slate-300'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Panel: Laptop Mockup & Bottom Action */}
              <div className="lg:col-span-8 xl:col-span-9 flex flex-col justify-between">
                {/* Browser Window Bar */}
                <div className="px-4 sm:px-6 py-3 bg-[#F8FAFC] rounded-t-2xl border border-[#E5EAF2] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    <span className="text-xs font-medium text-[#64748B] ml-2">
                      {activeProduct.browserUrl}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full text-[11px] font-semibold bg-white text-[#0866F5] border border-blue-200">
                      {activeProduct.category}
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-[11px] font-semibold bg-white text-[#13A8E8] border border-sky-200 hidden sm:inline-block">
                      {activeProduct.subBadge}
                    </span>
                  </div>
                </div>

                {/* Laptop Center Stage */}
                <div className="p-6 sm:p-10 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] border-x border-[#E5EAF2] flex-1 flex items-center justify-center">
                  <div className="w-full max-w-[700px]">
                    <div className="relative rounded-t-2xl bg-[#0F172A] border-[6px] sm:border-[8px] border-[#111B46] shadow-[0_20px_45px_rgba(17,27,70,0.14)] overflow-hidden aspect-[16/10] flex items-center justify-center">
                      {activeProduct.id === 'vitanix-claim' ? (
                        <>
                          <video
                            ref={videoRef}
                            src={VITANIX_VIDEO_SRC}
                            poster={VITANIX_POSTER_SRC}
                            autoPlay
                            loop
                            muted={isMuted}
                            playsInline
                            className="w-full h-full object-cover object-top"
                          />
                          {/* Play/Pause & Sound Controls */}
                          <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
                            <button
                              type="button"
                              onClick={() => {
                                if (!videoRef.current) return;
                                if (isPlayingVideo) {
                                  videoRef.current.pause();
                                  setIsPlayingVideo(false);
                                } else {
                                  videoRef.current.play();
                                  setIsPlayingVideo(true);
                                }
                              }}
                              className="px-3 py-1.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1.5 shadow-md border border-white/20 transition-transform active:scale-95 cursor-pointer"
                              title={isPlayingVideo ? 'หยุดเล่นชั่วคราว' : 'เล่นวิดิโอ'}
                            >
                              {isPlayingVideo ? (
                                <>
                                  <Pause className="w-3.5 h-3.5 fill-white" />
                                  <span>กำลังเล่น</span>
                                </>
                              ) : (
                                <>
                                  <Play className="w-3.5 h-3.5 fill-white" />
                                  <span>เล่นวิดิโอ</span>
                                </>
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                if (!videoRef.current) return;
                                videoRef.current.muted = !isMuted;
                                setIsMuted(!isMuted);
                              }}
                              className="p-1.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-white text-[11px] shadow-md border border-white/20 transition-transform active:scale-95 cursor-pointer"
                              title={isMuted ? 'เปิดเสียง' : 'ปิดเสียง'}
                            >
                              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full flex flex-col">
                          <SoftwareMockupUI productId={activeProduct.id} variant="primary" />
                        </div>
                      )}
                    </div>
                    <div className="w-full h-3 sm:h-3.5 bg-gradient-to-b from-slate-200 to-slate-300 rounded-b-xl border-t border-slate-400/60 shadow-md flex justify-center">
                      <div className="w-20 h-1.5 rounded-b bg-slate-400" />
                    </div>
                  </div>
                </div>

                {/* Bottom Bar: 01 / 12 Vitanix Claim + Thai description + 'ดูรายละเอียด ↗' */}
                <div className="p-4 sm:p-5 bg-white rounded-b-2xl border border-[#E5EAF2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#0866F5] bg-blue-50 px-2 py-0.5 rounded">
                        {activeProduct.number} / 12
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#17233F]">
                        {activeProduct.name}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#64748B] line-clamp-2 max-w-2xl">
                      {activeProduct.thaiDescription}
                    </p>
                  </div>
                  <button
                    onClick={() => handleSelectProduct(activeProduct.id, true)}
                    className="shrink-0 inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full bg-[#0866F5] hover:bg-[#0654CC] text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-[0_6px_18px_rgba(8,102,245,0.25)]"
                  >
                    <span>ดูรายละเอียด</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. PRODUCT DETAIL SECTION
          Header: Badges, Title, Thai description, Contact Sales button
          Row 1: Left Text & Checklists + Right Office Building Image (office-editorial.jpg)
          Row 2: Left Office Building Image (office-editorial.jpg) + Right Text & Checklists
      ===================================================================== */}
      <section ref={productDetailRef} className="py-12 sm:py-16 bg-white border-t border-[#E5EAF2] scroll-mt-24">
        <div className="w-[92%] max-w-[1320px] mx-auto">
          {/* Section Breadcrumb & Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
              IT SOLUTION & PRODUCT
            </span>
            <span className="text-slate-300">/</span>
            <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-[#0866F5] border border-blue-200">
              {activeProduct.category}
            </span>
            <span className="px-3 py-0.5 rounded-full text-xs font-medium bg-[#F5F8FC] text-[#64748B] border border-[#E5EAF2]">
              Product {activeProduct.number}
            </span>
          </div>

          {/* Product Title & Contact Sales Button Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#E5EAF2]">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17233F] tracking-tight">
                {activeProduct.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1.5 max-w-3xl leading-relaxed">
                {activeProduct.thaiDescription}
              </p>
            </div>
            <button
              onClick={onContactClick}
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0866F5] hover:bg-[#0654CC] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all cursor-pointer self-start sm:self-auto"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Contact Sales</span>
            </button>
          </div>

          {/* Deep-Dive Row 1: Left Content + Right Building Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-10 sm:py-14">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#0866F5] bg-blue-50 px-3 py-1 rounded-full">
                {activeProduct.deepDiveSection1.badge}
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#17233F] leading-snug">
                {activeProduct.deepDiveSection1.heading}
              </h3>
              {activeProduct.deepDiveSection1.paragraphs.map((p, idx) => (
                <p key={idx} className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {p}
                </p>
              ))}
              <div className="pt-2 space-y-2">
                {activeProduct.deepDiveSection1.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17233F]">
                    <CheckCircle2 className="w-4 h-4 text-[#0866F5] shrink-0 mt-0.5" />
                    <span className="font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Modern Building Image matching Reference */}
            <div className="lg:col-span-6">
              <div className="rounded-[24px] overflow-hidden border border-[#E5EAF2] shadow-[0_16px_40px_rgba(17,27,70,0.08)] bg-slate-100">
                <img
                  src={OFFICE_IMAGE_SRC}
                  alt="TOP PROVIDER System Group Modern Architecture"
                  className="w-full h-[320px] sm:h-[380px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Deep-Dive Row 2: Left Building Photo + Right Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-10 sm:py-14 border-t border-[#E5EAF2]">
            {/* Left: Building Photo */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-[24px] overflow-hidden border border-[#E5EAF2] shadow-[0_16px_40px_rgba(17,27,70,0.08)] bg-slate-100">
                <img
                  src={OFFICE_IMAGE_SRC}
                  alt="TOP PROVIDER System Group Headquarters"
                  className="w-full h-[320px] sm:h-[380px] object-cover"
                />
              </div>
            </div>

            {/* Right: Content & Checklists */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#13A8E8] bg-sky-50 px-3 py-1 rounded-full">
                {activeProduct.deepDiveSection2.badge}
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#17233F] leading-snug">
                {activeProduct.deepDiveSection2.heading}
              </h3>
              {activeProduct.deepDiveSection2.paragraphs.map((p, idx) => (
                <p key={idx} className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {p}
                </p>
              ))}

              {/* Checklist in Light Cards */}
              <div className="space-y-2 pt-2">
                {activeProduct.deepDiveSection2.bullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E5EAF2]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0866F5] shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-[#17233F]">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Related Solutions */}
              <div className="pt-2 text-xs text-[#64748B]">
                <span className="font-semibold text-[#17233F]">Related Solutions: </span>
                {activeProduct.relatedIds.map((id, index) => {
                  const rel = IT_SOLUTION_PRODUCTS.find((p) => p.id === id);
                  if (!rel) return null;
                  return (
                    <span key={id}>
                      <button
                        onClick={() => handleSelectProduct(id, true)}
                        className="text-[#0866F5] hover:underline cursor-pointer font-medium"
                      >
                        {rel.name}
                      </button>
                      {index < activeProduct.relatedIds.length - 1 && ' • '}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. WHY CHOOSE OUR SOLUTIONS (4 Feature Cards in a Row)
      ===================================================================== */}
      <section className="py-16 sm:py-20 bg-[#F5F8FC] border-t border-[#E5EAF2]">
        <div className="w-[92%] max-w-[1320px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0866F5] mb-2">
              WHY CHOOSE OUR SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17233F] tracking-tight">
              Technology That Supports Better Healthcare
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
              Our solutions are designed to help healthcare organizations improve operational
              efficiency, support digital workflows, and manage information effectively.
            </p>
          </div>

          {/* 4 Cards in a Row on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Stethoscope,
                title: 'Healthcare Expertise',
                description:
                  'Solutions designed specifically for hospital workflows and healthcare management.',
              },
              {
                icon: Layers,
                title: 'Integrated Technology',
                description:
                  'Connected software systems that work together across departments.',
              },
              {
                icon: Zap,
                title: 'Operational Efficiency',
                description:
                  'Streamline processes, reduce manual work, and improve information management.',
              },
              {
                icon: HeadphonesIcon,
                title: 'Reliable Support',
                description:
                  'Dedicated technical support, system implementation, and maintenance services.',
              },
            ].map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-[20px] border border-[#E5EAF2] p-6 shadow-[0_8px_24px_rgba(17,27,70,0.04)] hover:shadow-[0_14px_30px_rgba(8,102,245,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 text-[#0866F5] flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#17233F] mb-1.5">{card.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. CALL TO ACTION BANNER (Blue Gradient Card)
      ===================================================================== */}
      <section className="pt-4 pb-16 bg-[#F5F8FC]">
        <div className="w-[92%] max-w-[1320px] mx-auto">
          <div className="relative rounded-[28px] bg-gradient-to-r from-[#0d1e52] via-[#084db8] to-[#0866F5] text-white p-8 sm:p-12 lg:p-14 overflow-hidden shadow-[0_20px_50px_rgba(8,102,245,0.25)]">
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-white/15 text-sky-200 border border-white/20">
                TOP PROVIDER SYSTEM GROUP
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Let&apos;s Transform Your Business with Smart Technology
              </h2>
              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed max-w-2xl">
                Discover the right technology solutions for your organization. Our team is ready to
                help you explore software, healthcare systems, and enterprise solutions tailored to
                your needs.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleExploreClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0866F5] hover:bg-blue-50 text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
                >
                  <span>Explore Our Solutions</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onContactClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#13A8E8] hover:bg-[#0ea5e9] text-white border border-white/25 text-xs sm:text-sm font-bold transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Contact Our Team</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
