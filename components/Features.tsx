
import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section
      id="why"
      className="py-24 relative overflow-hidden border-t border-white/5"
      style={{
        backgroundImage: "url('/elegirnos.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif italic">¿Por qué elegirnos?</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group p-8 bg-white/10 rounded-2xl shadow-lg hover:bg-white/20 transition-all duration-300 border border-white/20 text-center backdrop-blur-md"
            >
              <div className="mb-6 inline-flex p-4 bg-gold/10 rounded-full group-hover:scale-110 group-hover:bg-gold text-gold group-hover:text-coffee-dark transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 serif">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
