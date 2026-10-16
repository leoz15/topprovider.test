import React, { useState } from 'react';
import { ArrowUp, Copy, Check, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('contact@topprovider.co.th');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'IT Solution & Product', href: '#showcase' },
    { label: 'Service Solution', href: '#services' },
    { label: 'News & Activities', href: '#news' },
    { label: 'About Us', href: '#about' },
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'Line Official', href: 'https://line.me' },
  ];

  return (
    <footer className="bg-white text-slate-900 pt-20 pb-12 overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top Direct Inquiries Callout */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-14 border-b border-slate-200">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#0066FF] block mb-2 font-medium">
              Start The Conversation
            </span>
            <div className="flex items-center gap-3">
              <a
                href="mailto:contact@topprovider.co.th"
                className="text-2xl sm:text-4xl lg:text-5xl font-medium font-editorial text-slate-900 hover:text-[#0066FF] transition-colors"
              >
                contact@topprovider.co.th
              </a>
              <button
                onClick={copyEmail}
                className="p-3 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-[#0066FF] transition-all border border-slate-200 shadow-sm"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-4 h-4 text-[#0066FF]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copied && (
              <span className="text-xs text-[#0066FF] font-mono mt-2 inline-block">
                ✓ Copied to clipboard!
              </span>
            )}
          </div>

          <button
            onClick={scrollToTop}
            className="group self-start lg:self-center flex items-center gap-3 px-6 py-3 rounded-full bg-slate-100 hover:bg-[#0066FF] hover:text-white border border-slate-200 text-slate-800 transition-all shadow-sm"
          >
            <span className="text-xs font-medium tracking-wider uppercase font-mono">Back to top</span>
            <div className="w-5 h-5 rounded-full bg-white text-[#0066FF] flex items-center justify-center transition-transform group-hover:-translate-y-0.5 shadow-xs">
              <ArrowUp className="w-3 h-3 stroke-[2.5]" />
            </div>
          </button>
        </div>

        {/* Middle Navigation & Social Grid */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 border-b border-slate-200">
          {/* Brand Column with Official Logo */}
          <div className="col-span-2 lg:col-span-4 space-y-4">
            <img
              src="/assets/top-logo.png"
              alt="TOP PROVIDER SYSTEM GROUP CO., LTD."
              className="h-10 w-auto object-contain"
            />
            <p className="text-xs text-slate-600 font-medium">
              บริษัท ท็อป โปรไวเดอร์ ซิสเท็ม กรุ๊ป จำกัด <br />
              <span className="text-slate-400 font-normal">Provider System Group Co., Ltd.</span>
            </p>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm font-normal leading-relaxed">
              ผู้นำด้านเทคโนโลยี โซลูชันระบบ และการพัฒนาซอฟต์แวร์ระดับองค์กร เพื่อขับเคลื่อนประสิทธิภาพและความเติบโตอย่างยั่งยืน
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#0066FF] font-medium">
              Navigation
            </h4>
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-700 hover:text-[#0066FF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#0066FF] font-medium">
              Connect
            </h4>
            <ul className="space-y-1.5">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-slate-700 hover:text-[#0066FF] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Accreditations */}
          <div className="col-span-2 lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#0066FF] font-medium">
              Standards
            </h4>
            <div className="space-y-1 text-xs text-slate-600">
              <p>• ISO 27001 Certified</p>
              <p>• Enterprise Cloud SLA 99.9%</p>
              <p>• Fast-Track Deployment</p>
              <p>• 24/7 Dedicated Support</p>
            </div>
          </div>
        </div>

        {/* Oversized Brand Typography Graphic */}
        <div className="pt-14 pb-6 select-none overflow-hidden">
          <div className="text-[10vw] font-medium font-editorial tracking-tighter leading-none text-blue-900/[0.04] whitespace-nowrap text-center">
            TOP PROVIDER SYSTEM
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} TOP PROVIDER SYSTEM GROUP CO., LTD. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-800 transition-colors">Terms of Service</a>
            <span>Bangkok, Thailand</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
