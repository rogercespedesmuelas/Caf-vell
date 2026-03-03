
import React from 'react';
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MenuSection from './components/MenuSection';
import FoodGallery from './components/FoodGallery';
import Gallery from './components/Gallery';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-[#0d0d0d]">
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <MenuSection />
          <FoodGallery />
          <Gallery />
          <LocationSection />
        </main>
        <Footer />


      </div>
    </div>
  );
};

export default App;
