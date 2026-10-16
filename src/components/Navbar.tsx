import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'IT Solution & Product', href: '#showcase' },
    { label: 'Service Solution', href: '#services' },
    { label: 'News & Activities', href: '#news' },
    { label: 'About Us', href: '#about' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Graceful fallback for linked sections
      if (href === '#services') {
        document.querySelector('#showcase')?.scrollIntoView({ behavior: 'smooth' });
      } else if (href === '#news') {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBookCall = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenContactModal) {
      onOpenContactModal();
    } else {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Pill Header with Blue Tech Branding */}
      <header className="fixed top-4 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <div className="w-full max-w-6xl flex items-center justify-between py-2 sm:py-2.5 px-4 sm:px-6 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-[0_8px_30px_rgba(0,102,255,0.08)] pointer-events-auto transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,102,255,0.12)]">
          {/* Official Company Logo */}
          <a
            href="#"
            className="flex items-center gap-3 no-underline focus:outline-none group py-1"
            aria-label="TOP Provider Home"
          >
            <img
              src="/assets/top-logo.png"
              alt="TOP PROVIDER SYSTEM GROUP CO., LTD."
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-[#0066FF] hover:bg-blue-50/70 rounded-full transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Vibrant Blue Button (Image 1 Style) */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleBookCall}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#0066FF] text-white text-xs sm:text-sm font-medium tracking-tight transition-all duration-200 hover:bg-[#0052CC] hover:shadow-[0_6px_20px_rgba(0,102,255,0.35)] hover:scale-[1.02] active:scale-[0.98] shadow-sm group"
            >
              <Calendar className="w-3.5 h-3.5 fill-white/20 transition-transform group-hover:scale-110" />
              <span>Book a Call</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-slate-100 text-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl md:hidden pt-24 px-6 pb-12 flex flex-col justify-between animate-fadeIn">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <img
                src="/assets/top-logo.png"
                alt="TOP PROVIDER SYSTEM GROUP"
                className="h-8 w-auto object-contain"
              />
              <span className="text-xs font-medium text-[#0066FF] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                System Group
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-2xl font-semibold tracking-tight text-slate-800 hover:text-[#0066FF] transition-colors flex items-center justify-between py-2"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-400" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-col gap-3">
            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleBookCall(e);
              }}
              className="w-full py-3.5 rounded-full bg-[#0066FF] text-white text-center font-medium text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Our Team</span>
            </button>
            <p className="text-center text-xs text-slate-500">
              Provider System Group Co., Ltd.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
