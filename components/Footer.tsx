
import React from 'react';
import { Instagram, MapPin, Clock } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-dark py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="inline-block">
            <h2 className="text-4xl font-bold font-serif text-white mb-2 italic">Cafè Vell</h2>
            <div className="h-1 w-full bg-gold rounded-full mb-6"></div>
          </div>
          <p className="text-white/50 max-w-md font-light leading-relaxed text-lg">
            Situado en el centro de Salou, Cafè Vell es el destino preferido para aquellos que buscan calidad, ambiente y el mejor producto mediterráneo.
          </p>
          <div className="flex gap-4 mt-8">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-gold hover:text-coffee-dark hover:border-gold transition-all">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-gold font-bold mb-6 text-xl font-serif italic">Ubicación</h3>
          <ul className="space-y-4 text-white/70 font-light">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
              <span>Carrer de Barcelona, 36, 43840 Salou, Tarragona</span>
            </li>
            <li>
              Tel: <a href="tel:+34677752217" className="text-xl font-bold text-white hover:text-gold transition-colors">+34 677 752 217</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-gold font-bold mb-6 text-xl font-serif italic">Horario de Apertura</h3>
          <ul className="space-y-3 text-white/70 font-light">
            <li className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-gold" />
              <div className="flex flex-col">
                <span className="text-xs uppercase text-white/40">Martes - Domingo</span>
                <span className="font-medium">09:00 - 02:00</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-gold" />
              <div className="flex flex-col">
                <span className="text-xs uppercase text-white/40">Lunes</span>
                <span className="font-medium">Cerrado</span>
              </div>
            </li>
            <li className="pt-2">
              <p className="text-xs text-gold italic border-l-2 border-gold pl-3">
                "A partir de abril, abierto todos los días"
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/30 text-xs gap-4">
        <p>© {new Date().getFullYear()} Cafè Vell Salou. Todos los derechos reservados.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
