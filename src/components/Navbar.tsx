import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Sparkles, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenAuth?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Stays', href: '#stays' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Blog', href: '#blog' },
    { name: 'About', href: '#about' },
    { name: 'Become a Host', href: '#host' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <div className="absolute inset-0 bg-red-600/10 blur-md" />
            {/* Winzy Pinwheel Icon */}
            <svg className="w-5 h-5 text-red-500 relative z-10 transition-transform duration-500 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" className="opacity-30" />
              <path d="M12 12c-3 0 -5-2 -5-5s2-5 5-5 5 2 5 5-2 5-5 5z" />
              <path d="M12 12c0 3 2 5 5 5s5-2 5-5-2-5-5-5-5 2-5 5z" />
              <path d="M12 12c0-3-2-5-5-5s-5 2-5 5 2 5 5 5 5-2 5-5z" />
              <path d="M12 12c3 0 5 2 5 5s-2 5-5 5-5-2-5-5 2-5 5-5z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-['Plus_Jakarta_Sans']">
            Winzy
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 px-6 py-2 rounded-full glass-panel border border-white/10 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors relative py-1 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-red-500 hover:after:rounded-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={onOpenAuth}
            className="accent-gradient-btn text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-red-600/30"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button 
            onClick={onOpenAuth}
            className="accent-gradient-btn text-white text-xs font-semibold px-4 py-2 rounded-full"
          >
            Get Started
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full glass-panel text-slate-200 hover:text-white border border-white/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 p-5 rounded-2xl glass-panel border border-white/15 shadow-2xl flex flex-col gap-4 text-slate-200"
          >
            <div className="flex flex-col gap-3 font-medium text-base">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-4 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  if(onOpenAuth) onOpenAuth();
                }}
                className="w-full accent-gradient-btn text-white py-3 rounded-xl font-semibold text-center shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
              >
                <span>Get Started Now</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
