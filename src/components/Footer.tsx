import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'IT Solution & Product', href: '#showcase' },
    { label: 'Leadership Team', href: '#team' },
    { label: 'About Us', href: '#about' },
  ];

  const standards = [
    { label: 'Enterprise Cloud SLA 99.9%' },
    { label: 'HL7 & FHIR Standards' },
    { label: 'Data Encryption AES-256' },
    { label: '24/7 Dedicated Support' },
  ];

  return (
    <footer className="bg-white text-slate-900 pt-16 sm:pt-20 pb-10 overflow-hidden border-t border-slate-200/80">
      {/* 90-92% Viewport Width Container with Max 1500px */}
      <div className="w-[92%] max-w-[1500px] mx-auto px-2 sm:px-4 lg:px-6">
        {/* 4 Columns Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-14 border-b border-slate-200/80">
          {/* Column 1: Company / Brand Information (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <img
              src={`${import.meta.env.BASE_URL}assets/top-logo.png`}
              alt="TOP PROVIDER SYSTEM GROUP CO., LTD."
              className="h-10 sm:h-11 w-auto max-w-[240px] object-contain"
            />
            <p className="text-xs sm:text-sm font-semibold text-slate-800">
              บริษัท ท็อป โปรไวเดอร์ ซิสเท็ม กรุ๊ป จำกัด <br />
              <span className="text-slate-400 font-normal text-xs">Provider System Group Co., Ltd.</span>
            </p>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm font-normal leading-relaxed">
              ผู้นำด้านเทคโนโลยี โซลูชันระบบ และการพัฒนาซอฟต์แวร์ระดับองค์กร เพื่อขับเคลื่อนประสิทธิภาพและความเติบโตอย่างยั่งยืน
            </p>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#0066FF] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-600 hover:text-[#0066FF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Standards / Resources (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#0066FF] font-semibold">
              Standards
            </h4>
            <ul className="space-y-2">
              {standards.map((item) => (
                <li key={item.label} className="text-xs text-slate-500 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-blue-400" />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#0066FF] font-semibold">
              Contact
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600">
              <a
                href="mailto:contact@topprovider.co.th"
                className="flex items-center gap-2 hover:text-[#0066FF] transition-colors text-slate-700"
              >
                <Mail className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                <span>contact@topprovider.co.th</span>
              </a>
              <div className="flex items-center gap-2 text-slate-500">
                <Phone className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                <span>+66 (0) 2-xxx-xxxx</span>
              </div>
              <div className="flex items-start gap-2 text-slate-500 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#0066FF] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  สำนักงานใหญ่ กรุงเทพมหานคร ประเทศไทย
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Floating Button Bar */}
        <div className="pt-8 flex justify-end">
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 hover:bg-[#0066FF] hover:text-white border border-slate-200 text-slate-700 text-xs font-medium transition-all shadow-2xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Brand Watermark (Big typography at bottom matching Reference) */}
        <div className="pt-6 pb-2 select-none overflow-hidden text-center">
          <div className="text-[11vw] font-bold tracking-tighter leading-none text-slate-900/[0.04] whitespace-nowrap">
            TOP PROVIDER
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} TOP PROVIDER SYSTEM GROUP CO., LTD. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#about" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            <span>Bangkok, Thailand</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
