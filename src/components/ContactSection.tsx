import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Loader2, AlertCircle, Mail, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    services: initialService ? [initialService] : ['Enterprise Software & Web App'],
    budget: '$30k — $60k',
    message: '',
    consent: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const availableServices = [
    'Enterprise Software & Web App',
    'Brand Identity & UI/UX',
    'Custom System Development',
    'Cloud Architecture & DevOps',
    'Dedicated Engineering Team',
  ];

  const budgetTiers = [
    '$15k — $30k',
    '$30k — $60k',
    '$60k — $120k',
    '$120k+',
  ];

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      const newServices = exists
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: newServices.length > 0 ? newServices : [service] };
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.message.trim() || formData.message.length < 8) {
      newErrors.message = 'Please provide a short description of your project';
    }
    if (!formData.consent) {
      newErrors.consent = 'Please accept the privacy terms to continue';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      await new Promise((resolve) => setTimeout(resolve, 1100));

      try {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0066FF', '#F5A623', '#0052CC', '#FFFFFF'],
        });
      } catch (err) {
        // Fallback gracefully
      }

      setIsSuccess(true);
    } catch (err) {
      setErrors({ form: 'An unexpected transmission error occurred. Please email us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      services: ['Enterprise Software & Web App'],
      budget: '$30k — $60k',
      message: '',
      consent: true,
    });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F8FAFC] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Headline & Studio Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-medium uppercase tracking-widest text-[#0066FF]">
                  Contact
                </span>
                <div className="h-px w-8 bg-blue-300" />
                <span className="text-xs font-medium text-[#0066FF] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 shadow-xs">
                  Let's Connect
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 font-editorial leading-[1.08] mb-6">
                Ready to accelerate <br />
                <span className="text-[#0066FF]">
                  your digital systems?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 font-normal">
                Tell us about your organization, software roadmap, or technical requirements. Our solution architects will review and reply within 24 hours.
              </p>

              {/* Direct Touchpoints */}
              <div className="space-y-4 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0066FF] shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Direct Inquiries</span>
                    <a href="mailto:contact@topprovider.co.th" className="font-medium text-[#0066FF] hover:underline">
                      contact@topprovider.co.th
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0066FF] shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Corporate Office</span>
                    <span className="font-medium text-slate-900">
                      บริษัท ท็อป โปรไวเดอร์ ซิสเท็ม กรุ๊ป จำกัด (Bangkok, Thailand)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Indicator */}
            <div className="mt-8 p-4 rounded-2xl bg-white border border-blue-100 flex items-center gap-3 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF] animate-pulse"></span>
              <p className="text-xs text-slate-700 font-normal">
                <strong>Deployment Capacity:</strong> Active development slots available for <strong>Q3/Q4 2026</strong>.
              </p>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,102,255,0.06)]">
              {isSuccess ? (
                /* Success State */
                <div className="py-12 px-4 text-center space-y-5 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-[#0066FF] text-white flex items-center justify-center mx-auto shadow-lg shadow-blue-500/30">
                    <CheckCircle2 className="w-7 h-7 stroke-[2]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-medium font-editorial text-slate-900">
                    Transmission Received.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Our enterprise consulting team will review your project brief for <strong>{formData.company}</strong> and contact you at <strong>{formData.email}</strong> within one business day.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-800 text-xs font-medium hover:bg-slate-200 border border-slate-200 transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {errors.form && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errors.form}</span>
                    </div>
                  )}

                  {/* Service Multi-Select Pills */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-medium mb-2.5">
                      Required Solutions
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((service) => {
                        const isSelected = formData.services.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 border ${
                              isSelected
                                ? 'bg-[#0066FF] text-white border-[#0066FF] shadow-xs'
                                : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900 hover:border-slate-300'
                            }`}
                          >
                            {isSelected && <span className="mr-1">✓</span>}
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-medium mb-2.5">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetTiers.map((tier) => (
                        <button
                          type="button"
                          key={tier}
                          onClick={() => setFormData({ ...formData, budget: tier })}
                          className={`py-2 px-3 rounded-xl text-xs font-medium transition-all text-center border ${
                            formData.budget === tier
                              ? 'bg-[#0066FF] text-white border-[#0066FF] shadow-xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Personal & Company Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-600 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Marcus Vance"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF] transition-all ${
                          errors.name ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-medium text-slate-600 mb-1.5">
                        Company Name *
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Organization or Venture"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF] transition-all ${
                          errors.company ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-600 mb-1.5">
                      Work Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF] transition-all ${
                        errors.email ? 'border-red-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-600 mb-1.5">
                      System Scope & Requirements *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you're building, key technical challenges, or target launch milestones..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF] transition-all ${
                        errors.message ? 'border-red-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Privacy Consent Checkbox */}
                  <div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded text-[#0066FF] focus:ring-[#0066FF]"
                      />
                      <span className="text-xs text-slate-500 leading-tight">
                        I agree to the confidential processing of this inquiry according to the Privacy Policy.
                      </span>
                    </label>
                    {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent}</p>}
                  </div>

                  {/* Submit Button in Royal Blue */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/25 group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending specification...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Specification</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
