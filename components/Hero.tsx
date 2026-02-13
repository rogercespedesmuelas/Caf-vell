
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../constants';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityContent = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Parallax and professional low exposure */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={ASSETS.interior} 
          alt="Café Vell Interior" 
          className="w-full h-[120%] object-cover brightness-[0.3] contrast-[1.1] saturate-[0.9]"
        />
        {/* Subtle gradient overlays for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ opacity: opacityContent }}
          className="text-center flex flex-col items-center"
        >
          {/* Logo/Subtitle Badge */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gold uppercase tracking-[0.5em] font-bold text-sm mb-6 drop-shadow-lg"
          >
            Establert a Salou
          </motion.span>

          {/* Impactful Title */}
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-8 leading-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] serif italic">
            Café Vell
          </h1>

          {/* Centered Description */}
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl italic serif leading-relaxed drop-shadow-md mb-12">
            "L'art del bon cafè davant de la Mediterrània. Un refugi premium on cada detall explica una història."
          </p>

          {/* Centered Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <a 
              href="#carta" 
              className="w-full sm:w-auto bg-gold text-coffee-dark px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-white transition-all shadow-2xl hover:-translate-y-1 active:scale-95 uppercase"
            >
              EXPLORA LA CARTA
            </a>
            <a 
              href="#" 
              className="w-full sm:w-auto border-2 border-white/40 text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-white/10 transition-all backdrop-blur-md uppercase"
            >
              FER UNA RESERVA
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator with refined appearance */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] mb-4">Descobreix l'experiència</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
