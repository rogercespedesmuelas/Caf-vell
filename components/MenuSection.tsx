
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FULL_MENU } from '../constants';
import { Utensils } from 'lucide-react';

const MenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(FULL_MENU[0].id);

  const activeCategory = FULL_MENU.find(cat => cat.id === activeTab);

  return (
    <section id="carta" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] font-bold text-sm">La Nostra Carta</span>
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mt-2 mb-4 serif italic">Gastronomia Autèntica</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {FULL_MENU.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm uppercase tracking-widest ${
                activeTab === category.id 
                ? 'bg-coffee-dark text-gold shadow-lg' 
                : 'bg-white text-coffee-dark/60 hover:bg-coffee-dark hover:text-white'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-white/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-coffee-dark/5 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-x-16 gap-y-8"
            >
              {activeCategory?.items.map((item, idx) => (
                <div key={idx} className="group relative">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-bold text-coffee-dark serif group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex-grow mx-4 border-b border-dotted border-coffee-dark/20 h-1" />
                    <span className="text-gold font-bold">{item.price}</span>
                  </div>
                  {item.description && (
                    <p className="text-sm text-coffee-dark/60 italic font-light">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-3 text-coffee-dark/40 text-xs uppercase tracking-[0.2em]">
              <Utensils className="w-4 h-4" />
              <span>Qualitat Mediterrània Certificada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
