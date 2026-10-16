import React from 'react';
import { Users, Sparkles, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-[#FFFFFF] border-b border-slate-200/80">
      {/* 90-92% Viewport Width Container with Max 1500px */}
      <div className="w-[92%] max-w-[1500px] mx-auto px-2 sm:px-4 lg:px-6">
        {/* Top 2 Columns: Large Brand Heading (Left) & Description (Right) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-10 mb-10 sm:mb-14">
          {/* Left Column: Big Brand Typography */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex items-center gap-2.5 mb-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
              <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-widest text-[#0066FF] uppercase">
                About Us • Bangkok, Thailand
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[#0F172A]"
            >
              <span className="text-[#0066FF]">TOP PROVIDER</span> <br />
              <span className="text-[#F5A623]">SYSTEM GROUP</span>
              <span className="text-[#0066FF]"> .</span>
            </motion.h2>
          </div>

          {/* Right Column: Detailed Corporate Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-xs sm:text-sm md:text-[15px] text-slate-600 font-normal leading-relaxed space-y-3"
          >
            <p>
              บริษัท ท็อป โปรไวเดอร์ ซิสเท็ม กรุ๊ป จำกัด (Provider System Group Co., Ltd.) คือผู้นำด้านการพัฒนาเทคโนโลยี แพลตฟอร์มซอฟต์แวร์ และระบบบริหารจัดการทางการแพทย์ระดับองค์กร
            </p>
            <p className="text-slate-500 text-xs sm:text-sm">
              เรามุ่งมั่นสร้างสรรค์นวัตกรรมดิจิทัลเพื่อช่วยยกระดับการทำงาน เพิ่มความแม่นยำในการประมวลผลข้อมูล และผลักดันองค์กรสู่ความสำเร็จอย่างยั่งยืน
            </p>
          </motion.div>
        </div>

        {/* Bottom Section: Left Building Photo & Right 2 Information Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column (Big Headquarters Image) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-[26px] sm:rounded-[36px] overflow-hidden border border-slate-200/80 bg-slate-100 shadow-sm relative group min-h-[320px] sm:min-h-[420px]"
          >
            <div className="relative w-full h-full min-h-[320px] sm:min-h-[420px] overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}assets/office-editorial.jpg`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TERVKbeU15z0voZzqxPgW5H8inBX2fjQUbjlkcfnizi4zjlkRuclWPgGeTQbi8_7U-1nym5Lrz86NSgWMrt5UXYvR7-SEHEwHA2McIMP_Of3_DPS9lFuCaS2rBh8A4659KZA1p=s1360-w1360-h1020-rw';
                }}
                alt="TOP PROVIDER SYSTEM GROUP Headquarters"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066FF]/90 backdrop-blur-md text-[11px] font-mono mb-2 shadow-xs">
                    <Building2 className="w-3 h-3" />
                    Headquarters • Bangkok
                  </span>
                  <p className="text-base sm:text-xl font-bold leading-tight">
                    TOP PROVIDER SYSTEM GROUP CO., LTD.
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    ศูนย์ปฏิบัติการและวิจัยพัฒนาระบบซอฟต์แวร์ระดับองค์กร
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2 Information Cards Stacked */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5 sm:gap-6">
            {/* Information Card 1: White Background with Blue Accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-slate-50/90 border border-slate-200/90 shadow-2xs hover:shadow-md hover:bg-white transition-all duration-300 flex-1 flex flex-col justify-center"
            >
              <div className="w-10 h-10 rounded-2xl bg-white border border-blue-200 flex items-center justify-center text-[#0066FF] mb-4 shadow-2xs">
                <Users className="w-4 h-4 stroke-[2.2]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-2 leading-snug">
                High-Trust Collaboration
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                ทำงานร่วมกันอย่างใกล้ชิดระหว่างทีมผู้เชี่ยวชาญด้านสถาปัตยกรรมระบบและลูกค้า มีการติดตามผลอย่างต่อเนื่อง แม่นยำ และโปร่งใสในทุกขั้นตอน
              </p>
            </motion.div>

            {/* Information Card 2: Vibrant Blue Accent Background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-[#0066FF] text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex-1 flex flex-col justify-center"
            >
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-4 backdrop-blur-xs">
                <Sparkles className="w-4 h-4 stroke-[2.2]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                Mission-Critical Reliability
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                โครงสร้างพื้นฐานระดับเอ็นเตอร์ไพรส์ที่ออกแบบมาเพื่อรองรับงานภารกิจสำคัญ (Mission-Critical) มั่นใจได้ด้วยระบบความปลอดภัยและเสถียรภาพสูงสุด 99.9%
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
