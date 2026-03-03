
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FULL_MENU, ASSETS } from '../constants';
import { Utensils } from 'lucide-react';

const MenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(FULL_MENU[0].id);

  const activeCategory = FULL_MENU.find(cat => cat.id === activeTab);

  return (
    <section id="carta" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[url('/bg-hero.jpeg')] bg-cover bg-center bg-scroll"></div>
      <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px] z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] font-bold text-xs">Nuestra Carta</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4 font-serif italic">Gastronomía Auténtica</h2>
          <div className="w-24 h-px bg-white/20 mx-auto" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FULL_MENU.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-8 py-3 rounded-md font-medium transition-all duration-300 text-xs uppercase tracking-widest border ${activeTab === category.id
                ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                : 'bg-transparent text-white/60 border-white/10 hover:bg-white/5 hover:text-white hover:border-white/30'
                }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-transparent">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-x-12 gap-y-6"
            >
              {activeCategory?.items.map((item, idx) => (
                <div key={idx} className="group relative p-6 rounded-lg hover:bg-white/[0.05] transition-all duration-300 border border-transparent hover:border-white/10 hover:scale-[1.02] cursor-default">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-bold text-white serif group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex-grow mx-4 border-b border-dotted border-white/10 h-1 group-hover:border-gold/30 transition-colors" />
                    <span className="text-gold font-bold font-mono text-lg group-hover:scale-110 transition-transform origin-right inline-block">{item.price}</span>
                  </div>
                  {item.description && (
                    <p className="text-sm text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>
                  )}
                  {/* Example tag for popular items manually added based on name for demo */}
                  {(item.name.includes("Bravas") || item.name.includes("Aguacate")) && (
                    <span className="absolute -top-2 -right-2 bg-gold text-coffee-dark text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Recomendado
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-16 mb-20 flex justify-center opacity-50">
            <div className="flex items-center gap-3 text-white/40 text-[10px] uppercase tracking-[0.3em] font-medium">
              <Utensils className="w-3 h-3" />
              <span>Calidad Mediterránea Certificada</span>
            </div>
          </div>

          {/* Food Images added from FoodGallery */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            {ASSETS.food.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
                }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              >
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
