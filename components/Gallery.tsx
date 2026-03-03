
import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS, INSTAGRAM_URL } from '../constants';
import { Instagram, ExternalLink } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-4 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full text-white mb-6 shadow-xl"
          >
            <Instagram className="w-8 h-8" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark font-serif italic mb-4">Momentos Cafè Vell</h2>
          <p className="text-coffee-dark/60 max-w-lg mx-auto font-light">
            Comparte tu experiencia con nosotros en las redes sociales.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {ASSETS.gallery.map((item, index) => (
            <motion.a
              key={index}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
              }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-lg shadow-lg group cursor-pointer transition-all duration-300"
            >
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-8 text-center backdrop-blur-[2px]">
                <Instagram className="text-white w-12 h-12 mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                <p className="text-white font-medium text-lg leading-snug transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.caption}
                </p>
                <div className="mt-6 flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                  <span>Ver en Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-coffee-dark text-white px-10 py-4 rounded-full font-bold hover:bg-gold hover:text-coffee-dark transition-all duration-300 shadow-xl group"
          >
            <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>@CAFEVELL</span>
          </a>
        </div>
      </div>
    </section >
  );
};

export default Gallery;
