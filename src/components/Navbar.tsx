import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const LOGO_SRC = `${import.meta.env.BASE_URL}assets/top-logo.png`;

interface NavbarProps {
  activePage?: 'home' | 'solutions';
  onNavigatePage?: (page: 'home' | 'solutions', sectionHref?: string) => void;
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage = 'solutions',
  onNavigatePage,
  onOpenContactModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const accumulatedUpScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show header when at or near top of the page
      if (currentScrollY <= 80) {
        setIsVisible(true);
        accumulatedUpScroll.current = 0;
        lastScrollY.current = currentScrollY;
        return;
      }

      const diff = currentScrollY - lastScrollY.current;

      if (diff > 5) {
        // Scrolling Down -> Hide Header immediately and reset upward scroll counter
        setIsVisible(false);
        accumulatedUpScroll.current = 0;
      } else if (diff < -5) {
        // Scrolling Up -> Accumulate upward scroll distance
        accumulatedUpScroll.current += Math.abs(diff);

        // Require ~180px accumulated upward scroll (~2 mouse wheel scrolls) before showing
        // to prevent obstructing the locked tablist
        if (accumulatedUpScroll.current >= 180) {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showHeader = isVisible || mobileMenuOpen;

  const navLinks = [
    { label: 'Home', href: '#hero', page: 'home' as const },
    { label: 'IT Solution & Product', href: '#solutions', page: 'solutions' as const },
    { label: 'Service Solution', href: '#services', page: 'solutions' as const },
    { label: 'News & Activities', href: '#news', page: 'home' as const },
    { label: 'About Us', href: '#about', page: 'home' as const },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: { label: string; href: string; page: 'home' | 'solutions' }
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.label === 'IT Solution & Product') {
      if (onNavigatePage) {
        onNavigatePage('solutions');
      }
      return;
    }

    if (link.label === 'Home') {
      if (onNavigatePage) {
        onNavigatePage('home', '#hero');
      }
      return;
    }

    if (onNavigatePage) {
      onNavigatePage(link.page, link.href);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigatePage) {
      onNavigatePage('home', '#hero');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
      {/* Floating Pill Header with Blue Tech Branding - Smart Sticky Header */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{
          y: showHeader ? 0 : -100,
          opacity: showHeader ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none"
      >
        <div className="w-full max-w-6xl flex items-center justify-between py-2 sm:py-2.5 px-4 sm:px-6 rounded-full bg-white/95 backdrop-blur-md border border-[#E5EAF2] shadow-[0_8px_30px_rgba(8,102,245,0.08)] pointer-events-auto transition-all duration-300 hover:shadow-[0_12px_40px_rgba(8,102,245,0.12)]">
          {/* Official Company Logo */}
          <a
            href="#hero"
            onClick={handleLogoClick}
            className="flex items-center gap-3 no-underline focus:outline-none group py-0.5"
            aria-label="TOP Provider Home"
          >
            <img
              src={LOGO_SRC}
              alt="TOP PROVIDER SYSTEM GROUP CO., LTD."
              className="h-9 sm:h-11 w-auto max-w-[220px] sm:max-w-[260px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-1.5">
            {navLinks.map((link) => {
              const isActive =
                (link.label === 'IT Solution & Product' && activePage === 'solutions') ||
                (link.label === 'Home' && activePage === 'home');

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm rounded-full transition-all duration-150 ${
                    isActive
                      ? 'font-semibold text-[#0866F5] bg-blue-50/90'
                      : 'font-medium text-[#17233F]/80 hover:text-[#0866F5] hover:bg-blue-50/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Vibrant Blue Contact Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleBookCall}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#0866F5] text-white text-xs sm:text-sm font-medium tracking-tight transition-all duration-200 hover:bg-[#0654CC] hover:shadow-[0_6px_20px_rgba(8,102,245,0.35)] hover:scale-[1.02] active:scale-[0.98] shadow-sm group cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 fill-white/20 transition-transform group-hover:scale-110" />
              <span>contact</span>
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
      </motion.header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl md:hidden pt-24 px-6 pb-12 flex flex-col justify-between animate-fadeIn">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <img
                src={LOGO_SRC}
                alt="TOP PROVIDER SYSTEM GROUP"
                className="h-9 sm:h-10 w-auto max-w-[200px] object-contain"
              />
              <span className="text-xs font-medium text-[#0866F5] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                System Group
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive =
                  (link.label === 'IT Solution & Product' && activePage === 'solutions') ||
                  (link.label === 'Home' && activePage === 'home');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`text-xl font-semibold tracking-tight transition-colors flex items-center justify-between py-2 ${
                      isActive ? 'text-[#0866F5]' : 'text-[#17233F] hover:text-[#0866F5]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-400" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-col gap-3">
            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleBookCall(e);
              }}
              className="w-full py-3.5 rounded-full bg-[#0866F5] text-white text-center font-medium text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Our Team</span>
            </button>
            <p className="text-center text-xs text-slate-500">
              TOP PROVIDER SYSTEM GROUP CO., LTD.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
