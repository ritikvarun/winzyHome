import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Instagram, Youtube, Twitter, Play, MapPin, Star } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const tours = [
    {
      id: '01',
      title: 'Tour',
      location: 'Brazil',
      subtitle: 'Explore Brazil with local flavors and guided adventures',
      rating: '4.95',
      image: '/images/tour_brazil.png',
      fallbackImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: '02',
      title: 'Retreat',
      location: 'Kyoto, Japan',
      subtitle: 'Tranquil ryokans & private bamboo forest tea ceremonies',
      rating: '4.98',
      image: '/images/tour_japan.png',
      fallbackImg: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: '03',
      title: 'Expedition',
      location: 'Tromsø, Norway',
      subtitle: 'Chase the Aurora Borealis from luxury glass igloos',
      rating: '4.92',
      image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80',
      fallbackImg: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: '04',
      title: 'Safari',
      location: 'Serengeti, Tanzania',
      subtitle: 'Unrivaled wilderness views & luxury eco-tents',
      rating: '4.99',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
      fallbackImg: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: '05',
      title: 'Island Escape',
      location: 'Santorini, Greece',
      subtitle: 'Sun-drenched cliffside villas with private infinity pools',
      rating: '4.96',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
      fallbackImg: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const currentTour = tours[currentSlideIndex];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % tours.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + tours.length) % tours.length);
  };

  return (
    <section className="relative min-h-screen pt-24 pb-12 sm:pt-28 sm:pb-16 flex flex-col justify-between overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] my-2 sm:my-3 mx-2 sm:mx-4 border border-white/10 shadow-2xl">
      
      {/* Background Image Container with Overlay Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_bg.png"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80';
          }}
          alt="Misty Forest Resort"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-75 contrast-110"
        />
        {/* Dark Vignette & Gradient Overlays matching mockup */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e100f] via-[#0e100f]/60 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/60" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8"
          >
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-2xl text-glow">
              Explore New Horizons with Every Journey
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-300 max-w-xl font-normal leading-relaxed">
              Discover unique cultures, stunning landscapes, and unforgettable moments every step of the way.
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={onExploreClick}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-base transition-all duration-300 shadow-xl hover:border-white/40 active:scale-95"
              >
                <span>Get started</span>
                <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Tour Preview Card (01/10) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            {/* Glassmorphism Card */}
            <div className="relative rounded-3xl p-4 sm:p-5 glass-panel border border-white/15 shadow-2xl overflow-hidden group">
              
              {/* Card Image Area */}
              <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden mb-4">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlideIndex}
                    src={currentTour.image}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = currentTour.fallbackImg;
                    }}
                    alt={currentTour.location}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover object-center"
                  />
                </AnimatePresence>
                
                {/* Rating Badge Overlay */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{currentTour.rating}</span>
                </div>
              </div>

              {/* Progress & Pagination Bar */}
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium mb-3 px-1">
                <span>0{currentSlideIndex + 1}/10</span>
                <div className="flex-1 mx-4 h-1 bg-white/15 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-slate-200 transition-all duration-300 rounded-full"
                    style={{ width: `${((currentSlideIndex + 1) / 5) * 100}%` }}
                  />
                </div>
                <div className="flex items-center gap-1">
                  <button 
                    onClick={handlePrev}
                    className="p-1 rounded-md hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="p-1 rounded-md hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card Footer Content: Title + Subtitle */}
              <div className="flex items-start justify-between gap-4 px-1">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span>{currentTour.title}</span>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-red-500/20 text-red-400 border border-red-500/30 font-normal">
                      {currentTour.location}
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                    {currentTour.subtitle}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Central Spinning Badge - Floating between columns */}
        <div className="hidden lg:flex absolute left-1/2 bottom-12 -translate-x-1/2 pointer-events-auto">
          <div className="relative group cursor-pointer" onClick={onExploreClick}>
            {/* Outer rotating text ring */}
            <div className="w-32 h-32 rounded-full border border-white/15 bg-black/40 backdrop-blur-xl flex items-center justify-center shadow-2xl relative">
              <svg className="w-full h-full animate-spin-slow p-2" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9.5px] font-semibold tracking-[0.25em] fill-slate-300 uppercase">
                  <textPath href="#circlePath" startOffset="0%">
                    • Explore more • Explore more
                  </textPath>
                </text>
              </svg>

              {/* Center Pinwheel Icon */}
              <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-red-600/30 border border-red-500/40 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 12c-3 0 -5-2 -5-5s2-5 5-5 5 2 5 5-2 5-5 5z" />
                  <path d="M12 12c0 3 2 5 5 5s5-2 5-5-2-5-5-5-5 2-5 5z" />
                  <path d="M12 12c0-3-2-5-5-5s-5 2-5 5 2 5 5 5 5-2 5-5z" />
                  <path d="M12 12c3 0 5 2 5 5s-2 5-5 5-5-2-5-5 2-5 5-5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Trust Avatars + Social Media Links */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10">
        
        {/* Left: Overlapping User Avatars + 10K+ users */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2.5 overflow-hidden">
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0e100f] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="User 1" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0e100f] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="User 2" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0e100f] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" alt="User 3" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0e100f] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="User 4" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-slate-300">
            10K+ users
          </span>
        </div>

        {/* Right: Social Media Handles */}
        <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
          <span>Follow us</span>
          <div className="flex items-center gap-2">
            <a href="#" className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-white/30 transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-white/30 transition-all">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-white/30 transition-all">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
