import React from 'react';
import { motion } from 'framer-motion';
import CinematicCard from '@/components/ui/CinematicCard';
import { Button } from '@/components/ui/Button';

const MENU_CATEGORIES = ['Coffee & Tea', 'Himachali Delights', 'Bakery'];

const MENU_ITEMS = [
  { name: 'Mountain Pine Pour Over', price: 250, desc: 'Single estate beans with subtle pine notes' },
  { name: 'Siddu with Ghee', price: 350, desc: 'Traditional steamed bread stuffed with walnut and poppy seeds' },
  { name: 'Cedar Smoked Trout', price: 850, desc: 'Fresh river trout smoked with cedar wood' },
  { name: 'Rhododendron Cooler', price: 180, desc: 'Wild flower extract with mountain spring water' },
];

export default function Cafe() {
  return (
    <div className="pt-32 px-gutter min-h-screen bg-background">
      <div className="max-w-container-max mx-auto mb-24">
        <h1 className="text-display-lg text-primary mb-8">The Woodland Café</h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mb-16">
          Savor artisanal coffee and Himachali delicacies prepared with organic, locally sourced ingredients. A cozy space adorned with handcrafted woodwork and warm lighting.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Menu */}
          <div>
            <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
              {MENU_CATEGORIES.map((cat, i) => (
                <button key={cat} className={`text-label-caps uppercase tracking-widest px-4 py-2 rounded-full border ${i === 0 ? 'bg-primary text-on-primary border-primary' : 'border-outline-variant text-on-surface-variant'}`}>
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="space-y-8">
              {MENU_ITEMS.map(item => (
                <div key={item.name} className="flex flex-col group cursor-pointer">
                  <div className="flex justify-between items-baseline mb-2 border-b border-outline-variant/30 pb-2">
                    <h4 className="text-headline-md text-primary font-display group-hover:text-lantern-glow transition-colors">{item.name}</h4>
                    <span className="text-xl font-sans text-secondary">₹{item.price}</span>
                  </div>
                  <p className="text-body-md text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <Button>Reserve a Table</Button>
            </div>
          </div>
          
          {/* Images */}
          <div className="space-y-8">
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-ambient">
              <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1500&auto=format&fit=crop" alt="Cafe" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
