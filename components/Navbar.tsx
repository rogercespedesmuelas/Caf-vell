
import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${isScrolled ? 'bg-coffee-dark/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <a href="#" className="text-2xl font-bold font-serif text-white tracking-wider italic">
            CAFÈ VELL
          </a>
          <div className="hidden md:flex space-x-8 text-white/80 font-medium text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-gold transition-colors">Inicio</a>
            <a href="#carta" className="hover:text-gold transition-colors">Carta</a>
            <a href="#why" className="hover:text-gold transition-colors">Nosotros</a>

          </div>
        </div>

        <a href="tel:+34 677 75 22 17" className="bg-gold hover:bg-[#c4a030] text-coffee-dark px-6 py-2.5 rounded-full font-bold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-gold/20 transform hover:-translate-y-1 active:scale-95 text-xs tracking-wider">
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline uppercase">Reservar Mesa</span>
          <span className="sm:hidden uppercase">Reservar</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
