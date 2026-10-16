import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StickyProjectSection } from './components/StickyProjectSection';
import { TrustIndicators } from './components/TrustIndicators';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { useLenis } from './hooks/useLenis';
import type { Project } from './types';

export function App() {
  useLenis();

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenContactModal = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#0066FF] selection:text-[#FFFFFF]">
      {/* Main Navigation Header */}
      <Navbar onOpenContactModal={handleOpenContactModal} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Framed Architectural Motion Hero (Pure Image, No text) */}
        <HeroSection />

        {/* 2. Flagship Product Showcase (Laptop & Device Mockups) */}
        <StickyProjectSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* 3. Selected Clients & Key Verified Metrics */}
        <TrustIndicators />

        {/* 4. About TOP Provider System Group & Leadership */}
        <AboutSection />

        {/* 5. Contact CTA & Interactive Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={handleOpenContactModal}
      />
    </div>
  );
}

export default App;
