import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ShieldCheck, Zap, HeartHandshake, ArrowRight } from 'lucide-react';

export const HostSection: React.FC = () => {
  const [nightsCount, setNightsCount] = useState(7);
  const pricePerNight = 180;
  const estimatedEarnings = nightsCount * pricePerNight * 4;

  return (
    <section id="host" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
      <div className="relative rounded-[2.5rem] glass-panel border border-white/15 p-8 sm:p-14 overflow-hidden">
        
        {/* Background Accent Blur */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Left Column: Heading & Features */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Winzy Host Guarantee</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Turn your property into an extraordinary journey
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              Join thousands of global hosts sharing unique homes, treehouses, and villas. Enjoy 100% verified guest protection and automatic payouts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-2 rounded-xl bg-red-500/10 text-red-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Covered up to $3M</h4>
                  <p className="text-xs text-slate-400">Comprehensive property protection</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-2 rounded-xl bg-red-500/10 text-red-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Instant Payouts</h4>
                  <p className="text-xs text-slate-400">Direct deposit upon check-in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Earnings Calculator Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl text-center space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Estimated Monthly Earnings
              </span>

              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                ${estimatedEarnings.toLocaleString()}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-300 font-medium">
                  <span>Nights booked per month:</span>
                  <span className="font-bold text-red-400">{nightsCount * 4} nights</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="14"
                  value={nightsCount}
                  onChange={(e) => setNightsCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
              </div>

              <button 
                onClick={() => alert("Host onboarding started!")}
                className="w-full accent-gradient-btn text-white py-3.5 rounded-2xl font-semibold text-sm shadow-xl shadow-red-600/30 flex items-center justify-center gap-2"
              >
                <span>Start Hosting Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
