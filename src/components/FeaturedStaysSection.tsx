import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, MapPin, Sparkles, X, Wifi, Coffee, Pool, Compass } from 'lucide-react';

interface StayItem {
  id: string;
  category: string;
  title: string;
  location: string;
  rating: number;
  reviewsCount: number;
  price: number;
  image: string;
  badge?: string;
  features: string[];
  description: string;
}

export const FeaturedStaysSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedStay, setSelectedStay] = useState<StayItem | null>(null);
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Villas', 'Cabins', 'Ryokans', 'Eco Lodges'];

  const staysData: StayItem[] = [
    {
      id: 's1',
      category: 'Villas',
      title: 'Villa Breeze Cliffside',
      location: 'Santorini, Greece',
      rating: 4.98,
      reviewsCount: 142,
      price: 420,
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
      badge: 'Popular',
      features: ['Infinity Pool', 'Sea View', 'Chef Service', 'Free WiFi'],
      description: 'Experience panoramic Mediterranean sunsets from your private cliffside infinity pool in Oia, Santorini.'
    },
    {
      id: 's2',
      category: 'Cabins',
      title: 'Aurora Glass Igloo Resort',
      location: 'Tromsø, Norway',
      rating: 4.95,
      reviewsCount: 98,
      price: 380,
      image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80',
      badge: 'Trending',
      features: ['Thermal Glass Roof', 'Sauna', 'Snowmobile Tours', 'Aurora Alerts'],
      description: 'Sleep beneath dancing Northern Lights inside heated glass dome igloos surrounded by Arctic tranquility.'
    },
    {
      id: 's3',
      category: 'Ryokans',
      title: 'Bamboo Forest Springs Spa',
      location: 'Kyoto, Japan',
      rating: 4.99,
      reviewsCount: 215,
      price: 510,
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
      badge: 'Superhost',
      features: ['Private Onsen', 'Kaiseki Breakfast', 'Tea Ceremony', 'Garden View'],
      description: 'An authentic 200-year-old wooden ryokan with private thermal hot springs nestled in Kyoto bamboo forest.'
    },
    {
      id: 's4',
      category: 'Eco Lodges',
      title: 'Amazonian Canopy Treehouse',
      location: 'Manaus, Brazil',
      rating: 4.91,
      reviewsCount: 76,
      price: 290,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      badge: 'Eco Luxury',
      features: ['100% Solar', 'River Canoe', 'Wilderness Guide', 'Organic Dining'],
      description: 'Suspended 50 feet above the Amazon forest floor, offering unhindered wildlife views and zero carbon footprint.'
    },
    {
      id: 's5',
      category: 'Villas',
      title: 'Ubud River Sanctuary',
      location: 'Bali, Indonesia',
      rating: 4.96,
      reviewsCount: 189,
      price: 340,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
      badge: 'Featured',
      features: ['Private Pool', 'Jungle View', 'Daily Yoga', 'Floating Breakfast'],
      description: 'Tucked into the lush valleys of Ubud with infinity pools overlooking jungle waterfalls.'
    },
    {
      id: 's6',
      category: 'Cabins',
      title: 'Alpine Peak Chalet',
      location: 'Zermatt, Switzerland',
      rating: 4.97,
      reviewsCount: 164,
      price: 650,
      image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80',
      badge: 'Luxury Pick',
      features: ['Ski-in Ski-out', 'Fireplace', 'Matterhorn View', 'Jacuzzi'],
      description: 'Ultra-modern alpine timber architecture with floor-to-ceiling vistas of the Matterhorn mountain range.'
    },
  ];

  const filteredStays = activeCategory === 'All' 
    ? staysData 
    : staysData.filter(item => item.category === activeCategory);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="stays" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Handpicked Destinations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Curated Stays & Experiences
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 glass-panel p-1.5 rounded-2xl border border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredStays.map((stay, index) => (
          <motion.div
            key={stay.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onClick={() => setSelectedStay(stay)}
            className="group cursor-pointer rounded-3xl glass-panel glass-panel-hover border border-white/10 overflow-hidden flex flex-col justify-between"
          >
            {/* Image Box */}
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src={stay.image}
                alt={stay.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Badge */}
              {stay.badge && (
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                  {stay.badge}
                </div>
              )}

              {/* Like Button */}
              <button
                onClick={(e) => toggleLike(stay.id, e)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-slate-300 hover:text-red-500 transition-colors"
              >
                <Heart className={`w-4 h-4 ${likedIds[stay.id] ? 'fill-red-500 text-red-500' : ''}`} />
              </button>

              {/* Location pill */}
              <div className="absolute bottom-3 left-4 flex items-center gap-1 text-xs font-medium text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>{stay.location}</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                    {stay.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{stay.rating}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                  {stay.description}
                </p>
              </div>

              {/* Price & Book CTA */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xl font-extrabold text-white">${stay.price}</span>
                  <span className="text-xs text-slate-400 font-normal"> / night</span>
                </div>
                <span className="text-xs font-semibold text-red-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  View Details &rarr;
                </span>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      {/* Interactive Detail Modal */}
      <AnimatePresence>
        {selectedStay && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-2xl w-full rounded-3xl glass-panel border border-white/20 shadow-2xl overflow-hidden p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedStay(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <img src={selectedStay.image} alt={selectedStay.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-red-600/80 mb-2 inline-block">
                    {selectedStay.category}
                  </span>
                  <h3 className="text-2xl font-bold">{selectedStay.title}</h3>
                  <p className="text-xs text-slate-300 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    {selectedStay.location}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed">{selectedStay.description}</p>
                
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-400 mb-2">Amenities & Highlights</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-200">
                    {selectedStay.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10">
                        <Sparkles className="w-3.5 h-3.5 text-red-400" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-white">${selectedStay.price}</span>
                    <span className="text-xs text-slate-400"> / night</span>
                  </div>
                  <button 
                    onClick={() => {
                      alert(`Booking initialized for ${selectedStay.title}!`);
                      setSelectedStay(null);
                    }}
                    className="accent-gradient-btn text-white px-7 py-3 rounded-full font-semibold text-sm shadow-xl shadow-red-600/30"
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
