import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigatePage?: (page: 'home' | 'solutions', sectionHref?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigatePage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', page: 'home' as const, href: '#hero' },
    { label: 'IT Solution & Product', page: 'solutions' as const, href: '#solutions' },
    { label: 'Service Solution', page: 'solutions' as const, href: '#services' },
    { label: 'News & Activities', page: 'home' as const, href: '#news' },
    { label: 'About Us', page: 'home' as const, href: '#about' },
  ];

  const connectLinks = [
    { label: 'LinkedIn', href: '#connect' },
    { label: 'Facebook', href: '#connect' },
    { label: 'GitHub', href: '#connect' },
    { label: 'LINE Official', href: '#connect' },
  ];

  const standards = [
    { label: 'ISO 27001' },
    { label: 'Enterprise Cloud' },
    { label: 'IT Solutions' },
    { label: 'Technology Support' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: { label: string; page: 'home' | 'solutions'; href: string }
  ) => {
    e.preventDefault();
    if (onNavigatePage) {
      onNavigatePage(item.page, item.href);
    }
  };

  return (
    <footer
      id="contact"
      className="bg-white text-[#17233F] pt-16 sm:pt-20 pb-10 overflow-hidden border-t border-[#E5EAF2]"
    >
      <div className="w-[92%] max-w-[1320px] mx-auto">
        {/* Back to Top Button Row (Matching Reference Image 1) */}
        <div className="pb-8 flex justify-end">
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F8FC] hover:bg-[#0866F5] hover:text-white border border-[#E5EAF2] text-[#17233F] text-xs font-medium transition-all shadow-2xs cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* 4 Columns Grid Layout Matching Section 14 & Reference Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-14 border-b border-[#E5EAF2]">
          {/* Column 1: Company / Brand Information (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <img
              src={`${import.meta.env.BASE_URL}assets/top-logo.png`}
              alt="TOP PROVIDER SYSTEM GROUP CO., LTD."
              className="h-10 sm:h-11 w-auto max-w-[240px] object-contain"
            />
            <p className="text-xs sm:text-sm font-semibold text-[#17233F]">
              บริษัท ท็อป โปรไวเดอร์ ซิสเท็ม กรุ๊ป จำกัด <br />
              <span className="text-[#64748B] font-normal text-xs">
                TOP PROVIDER SYSTEM GROUP CO., LTD.
              </span>
            </p>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-sm font-normal leading-relaxed">
              ผู้นำด้านเทคโนโลยีสารสนเทศโรงพยาบาล โซลูชันซอฟต์แวร์การแพทย์ และระบบดิจิทัลระดับองค์กร
              เพื่อขับเคลื่อนประสิทธิภาพและความเติบโตอย่างยั่งยืน
            </p>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#0866F5] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-xs sm:text-sm text-[#64748B] hover:text-[#0866F5] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#0866F5] font-semibold">
              Connect
            </h4>
            <ul className="space-y-2">
              {connectLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-[#64748B] hover:text-[#0866F5] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Standards (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#0866F5] font-semibold">
              Standards
            </h4>
            <ul className="space-y-2">
              {standards.map((item) => (
                <li
                  key={item.label}
                  className="text-xs sm:text-sm text-[#64748B] flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0866F5]" />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Brand Watermark (Big typography at bottom matching Reference) */}
        <div className="pt-8 pb-2 select-none overflow-hidden text-center">
          <div className="text-[11vw] font-bold tracking-tighter leading-none text-[#17233F]/[0.04] whitespace-nowrap">
            TOP PROVIDER
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-6 border-t border-[#E5EAF2] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© 2026 TOP PROVIDER SYSTEM GROUP CO., LTD. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#privacy" className="hover:text-[#0866F5] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#0866F5] transition-colors">
              Terms of Service
            </a>
            <span>Bangkok, Thailand</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
