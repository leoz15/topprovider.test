import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VideoSolutionsSection } from './components/VideoSolutionsSection';
import { StickyProjectSection } from './components/StickyProjectSection';
import { TeamSection } from './components/TeamSection';
import { TrustIndicators } from './components/TrustIndicators';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ITSolutionProductPage } from './components/ITSolutionProductPage';
import { useLenis } from './hooks/useLenis';
import type { Project } from './types';

export function App() {
  useLenis();

  // Default to 'solutions' to showcase the newly built IT Solution & Product Page,
  // while preserving the full 'home' page and allowing 1-click navigation between both.
  const [activePage, setActivePage] = useState<'home' | 'solutions'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavigatePage = (page: 'home' | 'solutions', sectionHref?: string) => {
    setActivePage(page);

    if (sectionHref && sectionHref !== '#solutions' && sectionHref !== '#hero') {
      setTimeout(() => {
        const target = document.querySelector(sectionHref);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenContactModal = () => {
    const contactFooter = document.querySelector('#contact');
    if (contactFooter) {
      contactFooter.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F5F8FC] text-[#17233F] selection:bg-[#0866F5] selection:text-[#FFFFFF]">
      {/* Shared Floating Capsule Header */}
      <Navbar
        activePage={activePage}
        onNavigatePage={handleNavigatePage}
        onOpenContactModal={handleOpenContactModal}
      />

      {activePage === 'solutions' ? (
        <main>
          <ITSolutionProductPage
            onNavigateHome={() => handleNavigatePage('home', '#hero')}
            onContactClick={handleOpenContactModal}
          />
        </main>
      ) : (
        <main>
          {/* 1. Hero Section */}
          <HeroSection />

          {/* 2. Video Solution Showcase */}
          <VideoSolutionsSection />

          {/* 3. Project Showcase / Product Section */}
          <StickyProjectSection onSelectProject={(p) => setSelectedProject(p)} />

          {/* 4. Leadership & Architecture Team */}
          <TeamSection />

          {/* 5. Unified Trust & Stats Card matching Reference */}
          <TrustIndicators />

          {/* 6. About Us / Company Introduction */}
          <AboutSection />
        </main>
      )}

      {/* Shared Corporate 4-Column Footer with Watermark */}
      <Footer onNavigatePage={handleNavigatePage} />

      {/* Project Case Study Modal (For Home Page) */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={handleOpenContactModal}
      />
    </div>
  );
}

export default App;
