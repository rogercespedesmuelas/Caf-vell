
import React from 'react';
import { Coffee, UserCheck, Wind } from 'lucide-react';
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
    title: 'Ingredients de qualitat',
    description: 'Seleccionem els millors grans d\'origen i productes frescos de proximitat.',
    icon: <Coffee className="w-8 h-8 text-[#4a3728]" />
  },
  {
    id: 2,
    title: 'Baristes professionals',
    description: 'Art i precisió en cada tassa i elaboració culinària.',
    icon: <UserCheck className="w-8 h-8 text-[#4a3728]" />
  },
  {
    id: 3,
    title: 'Ambient acollidor',
    description: 'El refugi perfecte al centre de Salou amb una terrassa inoblidable.',
    icon: <Wind className="w-8 h-8 text-[#4a3728]" />
  }
];

export const FULL_MENU: MenuCategory[] = [
  {
    id: 'tostadas',
    title: 'Tostadas',
    items: [
      { name: 'Tostada de Aguacate', description: 'Tomate rayado, aguacate y mezcla de brotis', price: '8.50€' },
      { name: 'Tostada de Hummus', description: 'Tomate cheri, rucula, queso feta, salsa hummus', price: '7.50€' },
      { name: 'Tostada de Atún', description: 'Atún, mayonesa, tomate Cherry, huevo duro', price: '7.90€' },
      { name: 'Tostada de Salmón', description: 'Salmón, aguacate, cebolla caramelizada y queso de crema', price: '10.50€' },
      { name: 'Tostada de Jamón', description: 'Jamón salado, aguacate, tomate cherry', price: '9.50€' },
      { name: 'Tostada de Pesto', description: 'Salsa pesto, queso mozzarela y tomate cherry', price: '8.50€' },
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

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Espresso Intenso',
    description: 'Cos complet i notes de xocolata negra.',
    price: '2.50€',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    name: 'Tostada Salmó',
    description: 'Aguacate, cebolla caramelizada i crema.',
    price: '10.50€',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    name: 'Patatas Bravas',
    description: 'Amb la nostra salsa secreta artesana.',
    price: '7.90€',
    image: 'https://images.unsplash.com/photo-1581445749184-e9365610787e?auto=format&fit=crop&q=80&w=600'
  }
];

export const ASSETS = {
  // Now using a high-quality interior shot of the bar counter
  interior: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000',
  heroLatte: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=800',
  gallery: [
    {
      url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
      caption: 'L\'essència del nostre bar'
    },
    {
      url: 'https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&q=80&w=800',
      caption: 'Vistes des de la nostra terrassa a Salou'
    },
    {
      url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
      caption: 'Brindis amb la millor selecció'
    }
  ]
};
