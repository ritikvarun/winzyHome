import React from 'react';
import { Send, Instagram, Youtube, Twitter, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0a0c0b] pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Newsletter Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-center">
          <div className="lg:col-span-6 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Stay Inspired for Your Next Journey
            </h3>
            <p className="text-sm text-slate-400 max-w-md">
              Subscribe to get secret deals, curated travel guides, and new luxury retreat drops.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to Winzy newsletter!'); }} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-3.5 rounded-2xl glass-panel border border-white/15 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-500"
              />
              <button
                type="submit"
                className="accent-gradient-btn px-6 py-3.5 rounded-2xl text-white font-semibold text-sm shadow-lg shadow-red-600/30 flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#" className="hover:text-white transition-colors">About Winzy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press & Media</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Stays & Villas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guided Tours</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Private Retreats</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Hosting</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Become a Host</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AirCover Protection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Host Resources</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cancellation Options</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Information</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trust & Security</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Winzy Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
