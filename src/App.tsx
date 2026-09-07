import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SearchFilterSection } from './components/SearchFilterSection';
import { FeaturedStaysSection } from './components/FeaturedStaysSection';
import { HostSection } from './components/HostSection';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';

export function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const scrollToStays = () => {
    const el = document.getElementById('stays');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0e100f] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] relative selection:bg-red-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenAuth={() => setIsAuthOpen(true)} />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <HeroSection onExploreClick={scrollToStays} />

        {/* Floating Search Filter Bar */}
        <SearchFilterSection onSearch={(filters) => {
          console.log('Search submit:', filters);
          scrollToStays();
        }} />

        {/* Handpicked Stays & Experiences Showcase */}
        <FeaturedStaysSection />

        {/* Become a Host Section */}
        <HostSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}

export default App;
