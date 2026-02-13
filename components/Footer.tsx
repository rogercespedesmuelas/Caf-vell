
import React from 'react';
import { Instagram, Facebook, MapPin, Clock } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-dark py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl font-bold serif text-white mb-6 italic">Café Vell</h2>
          <p className="text-white/50 max-w-md font-light leading-relaxed text-lg">
            Situat al centre de Salou, Café Vell és la destinació preferida per a aquells que busquen qualitat, ambient i el millor producte mediterrani.
          </p>
          <div className="flex gap-4 mt-8">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-gold hover:text-coffee-dark hover:border-gold transition-all">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-gold hover:text-coffee-dark hover:border-gold transition-all">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-gold font-bold mb-6 tracking-widest text-sm uppercase">Ubicació</h3>
          <ul className="space-y-4 text-white/70 font-light">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
              <span>Carrer de Barcelona, 36, 43840 Salou, Tarragona</span>
            </li>
            <li>Tel: +34 977 123 456</li>
            <li>Email: reserves@cafevell.com</li>
          </ul>
        </div>

        <div>
          <h3 className="text-gold font-bold mb-6 tracking-widest text-sm uppercase">Horari d'Obertura</h3>
          <ul className="space-y-3 text-white/70 font-light">
            <li className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-gold" />
              <div className="flex flex-col">
                <span className="text-xs uppercase text-white/40">Dilluns - Divendres</span>
                <span className="font-medium">08:00 - 20:00</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-gold" />
              <div className="flex flex-col">
                <span className="text-xs uppercase text-white/40">Dissabte - Diumenge</span>
                <span className="font-medium">09:00 - 21:00</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/30 text-xs gap-4">
        <p>© {new Date().getFullYear()} Café Vell Salou. Tots els drets reservats.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Política de Privacitat</a>
          <a href="#" className="hover:text-white transition-colors">Avís Legal</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
