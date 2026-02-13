
import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { Plus } from 'lucide-react';

const ProductSection: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-coffee-dark relative text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-gold uppercase tracking-[0.3em] font-bold text-sm">Nostra Passió</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">La Selecció Especial</h2>
          </div>
          <p className="text-white/60 max-w-xs text-sm leading-loose">
            Explora les nostres begudes més populars, preparades amb amor i rigor pel nostre equip de baristes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {PRODUCTS.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden backdrop-blur-sm"
            >
              {/* Product Image with Float */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-64 mb-6 rounded-xl overflow-hidden"
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                   <p className="text-xl font-bold serif">{product.price}</p>
                </div>
              </motion.div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold serif mb-2 text-gold group-hover:text-white transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-white/60 text-sm font-light">
                    {product.description}
                  </p>
                </div>
                <button className="p-3 bg-gold text-coffee-dark rounded-full hover:bg-white transition-all transform hover:rotate-90 active:scale-90 shadow-lg">
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="bg-transparent border border-gold text-gold hover:bg-gold hover:text-coffee-dark px-10 py-4 rounded-full font-bold transition-all duration-300">
            VEURE EL MENÚ COMPLET
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
