
// Added React import to fix 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}