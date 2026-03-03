
import React from 'react';
import { Coffee, UserCheck, Wind, Home, History, MapPin } from 'lucide-react';
import { Feature, Product, MenuCategory } from './types';

export const COLORS = {
  cream: '#F5F5DC',
  coffeeDark: '#1a0f0a',
  gold: '#d4af37',
  earthyBrown: '#4a3728',
};

export const INSTAGRAM_URL = 'https://www.instagram.com/cafevell?igsh=Y2dnbGYzbDZhcHBt';

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Ambiente Acogedor',
    description: 'Hemos diseñado un espacio donde el tiempo se detiene. Ya sea para un café rápido o una comida tranquila, nuestra terraza y salón son el refugio perfecto en el centro de Salou.',
    icon: <Home className="w-8 h-8" />
  },
  {
    id: 2,
    title: 'Nuestra Historia',
    description: 'Cafè Vell es un nombre con solera en el pueblo. Hemos recuperado la esencia de lo que siempre fue: un punto de encuentro auténtico, manteniendo viva la tradición y el alma de nuestro local de siempre.',
    icon: <History className="w-8 h-8" />
  },
  {
    id: 3,
    title: 'En el Corazón de Salou',
    description: 'Estamos en pleno centro. Nuestra ubicación en la Calle Barcelona 36 te permite disfrutar del mejor ambiente sin perderte nada, siendo el punto de partida o descanso ideal en tu paso por Salou.',
    icon: <MapPin className="w-8 h-8" />
  }
];

export const FULL_MENU: MenuCategory[] = [
  {
    id: 'tostadas',
    title: 'Tostadas',
    items: [
      { name: 'Tostada de Aguacate', description: 'Tomate rallado, aguacate y mezcla de brotes', price: '8.50€' },
      { name: 'Tostada de Hummus', description: 'Tomate cherry, rúcula, queso feta, salsa hummus', price: '7.50€' },
      { name: 'Tostada de Atún', description: 'Atún, mayonesa, tomate Cherry, huevo duro', price: '7.90€' },
      { name: 'Tostada de Salmón', description: 'Salmón, aguacate, cebolla caramelizada y queso crema', price: '10.50€' },
      { name: 'Tostada de Jamón', description: 'Jamón salado, aguacate, tomate cherry', price: '9.50€' },
      { name: 'Tostada de Pesto', description: 'Salsa pesto, queso mozzarella y tomate cherry', price: '8.50€' },
      { name: 'Bikini de Jamón y Queso', price: '3.50€' },
      { name: 'Tostada con Tomate y Aceite', price: '2.50€' },
    ]
  },
  {
    id: 'tapas',
    title: 'Tapas',
    items: [
      { name: 'Patatas Bravas', price: '7.90€' },
      { name: 'Calamares a la Andaluza', price: '13.50€' },
      { name: 'Chipirones Fritos', price: '13.50€' },
      { name: 'Boquerones en Vinagre', price: '10.90€' },
      { name: 'Croquetas', description: 'Jamón / Pollo / Cocido / Bacalao', price: '7.90€' },
      { name: 'Pescaditos Fritos', price: '9.90€' },
      { name: 'Palitos de Queso', price: '9.50€' },
      { name: 'Huevos Rotos con Jamón', price: '14.50€' },
      { name: 'Ensaladilla Rusa', price: '8.50€' },
    ]
  },
  {
    id: 'ensaladas',
    title: 'Ensaladas',
    items: [
      { name: 'Ensalada Queso de Cabra', description: 'Mezclum, tomate, frutos secos, olivas negras, queso de cabra y vinagre balsámico', price: '11.95€' },
      { name: 'Ensalada César', description: 'Mezclum, tomate, aceitunas, maíz, parmesano, pollo rebozado y salsa cesar', price: '11.90€' },
      { name: 'Ensalada Mixta', description: 'Mezclum, tomate, aceitunas negras, maíz, zanahoria, atún y jamón york', price: '9.50€' },
      { name: 'Ensalada Pollo y Piña', description: 'Mezclum, tomate, maíz, aceitunas negras, pollo, piña y salsa rosa', price: '11.90€' },
    ]
  },
  {
    id: 'entrantes',
    title: 'Entrantes',
    items: [
      { name: 'Carpaccio de Ternera', description: 'Solomillo crudo, rúcula y parmesano', price: '17.90€' },
      { name: 'Carpaccio de Salmón Ahumado', description: 'Tomate fresco, alcaparras, aceitunas y salmón', price: '19.90€' },
      { name: 'Tabla de Embutidos Ibéricos', price: '21.00€' },
      { name: 'Tabla de Quesos', price: '18.00€' },
      { name: 'Tabla de Jamón Ibérico', price: '21.90€' },
      { name: 'Pan con Tomate', price: '4.90€' },
    ]
  }
];



export const ASSETS = {
  // Now using a high-quality interior shot of the bar counter
  interior: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000',
  heroLatte: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=800',
  gallery: [
    {
      url: '/gallery-1.jpeg',
      caption: 'Brindis con la mejor selección'
    },
    {
      url: '/gallery-2.jpeg',
      caption: 'Vistas desde nuestra terraza en Salou'
    },
    {
      url: '/gallery-3.jpeg',
      caption: 'La esencia de nuestro bar'
    }
  ],
  food: [
    {
      url: '/food-1.jpeg',
      caption: 'Delicias de temporada'
    },
    {
      url: '/food-2.jpeg',
      caption: 'Sabor mediterráneo'
    },
    {
      url: '/food-3.jpeg',
      caption: 'Pasión por la cocina'
    }
  ]
};

