
import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="why" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-4">Per què escollir-nos?</h2>
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
              className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-coffee-dark/5 text-center"
            >
              <div className="mb-6 inline-flex p-4 bg-cream rounded-full group-hover:scale-110 group-hover:bg-gold transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-coffee-dark mb-3 serif">{feature.title}</h3>
              <p className="text-coffee-dark/70 leading-relaxed font-light">
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
