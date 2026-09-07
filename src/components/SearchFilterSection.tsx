import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

interface SearchFilterSectionProps {
  onSearch?: (filters: { destination: string; date: string; guests: string }) => void;
}

export const SearchFilterSection: React.FC<SearchFilterSectionProps> = ({ onSearch }) => {
  const [destination, setDestination] = useState('');
  const [dateRange, setDateRange] = useState('Oct 14 - Oct 21');
  const [guests, setGuests] = useState('2 Adults, 1 Room');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const popularDestinations = [
    'Rio de Janeiro, Brazil',
    'Kyoto, Japan',
    'Tromsø, Norway',
    'Santorini, Greece',
    'Bali, Indonesia',
    'Amalfi Coast, Italy',
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ destination: destination || 'All Destinations', date: dateRange, guests });
    }
  };

  return (
    <section className="relative z-20 max-w-6xl mx-auto px-4 -mt-6 sm:-mt-10 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-4 sm:p-5 rounded-3xl sm:rounded-full border border-white/20 shadow-2xl"
      >
        <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 items-center">
          
          {/* Field 1: Destination */}
          <div className="relative group p-3 sm:px-5 rounded-2xl sm:rounded-full hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex-1 text-left">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Where to next?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  onFocus={() => setActiveDropdown('location')}
                  className="w-full bg-transparent text-sm font-semibold text-white placeholder-slate-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Location Dropdown */}
            {activeDropdown === 'location' && (
              <div className="absolute top-full left-0 mt-2 w-64 p-3 rounded-2xl glass-panel border border-white/15 shadow-2xl z-30 flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 px-3 py-1">Popular Destinations</span>
                {popularDestinations.map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => {
                      setDestination(loc);
                      setActiveDropdown(null);
                    }}
                    className="text-left px-3 py-2 rounded-xl text-xs font-medium text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {loc}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Field 2: Dates */}
          <div 
            onClick={() => setActiveDropdown(activeDropdown === 'dates' ? null : 'dates')}
            className="relative cursor-pointer p-3 sm:px-5 rounded-2xl sm:rounded-full hover:bg-white/5 transition-colors border-t sm:border-t-0 sm:border-l border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-slate-700/40 text-slate-300 border border-white/10">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="flex-1 text-left">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Check In / Out
                </label>
                <div className="text-sm font-semibold text-white flex items-center justify-between">
                  <span>{dateRange}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Field 3: Guests */}
          <div 
            onClick={() => setActiveDropdown(activeDropdown === 'guests' ? null : 'guests')}
            className="relative cursor-pointer p-3 sm:px-5 rounded-2xl sm:rounded-full hover:bg-white/5 transition-colors border-t sm:border-t-0 sm:border-l border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-slate-700/40 text-slate-300 border border-white/10">
                <Users className="w-4 h-4" />
              </div>
              <div className="flex-1 text-left">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Guests
                </label>
                <div className="text-sm font-semibold text-white flex items-center justify-between">
                  <span>{guests}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Field 4: Search CTA Button */}
          <div className="p-1">
            <button
              type="submit"
              className="w-full h-13 rounded-2xl sm:rounded-full accent-gradient-btn text-white font-semibold text-base flex items-center justify-center gap-2.5 shadow-lg shadow-red-600/30 transition-all transform hover:scale-[1.02] active:scale-98"
            >
              <Search className="w-5 h-5" />
              <span>Search Places</span>
            </button>
          </div>

        </form>
      </motion.div>
    </section>
  );
};
