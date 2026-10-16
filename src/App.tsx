import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StickyProjectSection } from './components/StickyProjectSection';
import { TeamSection } from './components/TeamSection';
import { TrustIndicators } from './components/TrustIndicators';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { useLenis } from './hooks/useLenis';
import type { Project } from './types';

export function App() {
  useLenis();

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenContactModal = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#0066FF] selection:text-[#FFFFFF]">
      {/* Main Navigation Header */}
      <Navbar onOpenContactModal={handleOpenContactModal} />

      {/* Main Content Sections Structured Strictly Following Reference */}
      <main>
        {/* 1. Hero Section (Strictly Untouched) */}
        <HeroSection />

        {/* 2. Project Showcase / Product Section (Strictly Untouched) */}
        <StickyProjectSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* 3. Leadership & Architecture Team */}
        <TeamSection />

        {/* 4. Trusted by Industry Leaders & Institutions Marquee */}
        <TrustIndicators />

        {/* 5. Key Achievements / Statistics */}
        <StatsSection />

        {/* 6. About Us / Company Introduction */}
        <AboutSection />
      </main>

      {/* 7. Minimal 4-Column Footer with Watermark */}
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
