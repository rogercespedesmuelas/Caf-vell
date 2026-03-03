import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedHero } from './ui/animated-hero';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section className="relative min-h-[80vh] md:min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-20 bg-transparent">

      {/* The Layer Trick */}
      <div
        className="absolute inset-0 -z-10 bg-[url('/baixa.jpeg')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/60"
      ></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center flex-grow justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center flex flex-col items-center w-full"
        >
          {/* Logo/Subtitle Badge */}
          <motion.span
            variants={textVariants}
            className="text-gold font-bold text-xl mb-6 drop-shadow-lg font-serif italic"
          >
            Establecido en Salou
          </motion.span>

          {/* Animated Hero Component */}
          <div className="mb-12 w-full">
            <AnimatedHero />
          </div>

          {/* Centered Action Buttons */}
          <motion.div
            variants={buttonVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <a
              href="#carta"
              className="w-full sm:w-auto border-2 border-white/40 text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-white/10 transition-all backdrop-blur-md uppercase"
            >
              VER CARTA.
            </a>
            <a
              href="tel:+34 677 75 22 17"
              className="w-full sm:w-auto border-2 border-white/40 text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-white/10 transition-all backdrop-blur-md uppercase"
            >
              RESERVAR MESA
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - Relocated to flow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="relative z-10 flex flex-col items-center text-white/40 mt-12 md:mt-0 md:absolute md:bottom-10 md:left-1/2 md:-translate-x-1/2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] mb-4 text-center">Descubre la experiencia</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
