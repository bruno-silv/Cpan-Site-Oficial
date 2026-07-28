'use client';

import { motion } from 'framer-motion';
import {
  Wheat, Candy, Cake, Milk, Egg, Layers, Droplets, IceCream2,
  CookingPot, Cookie, Sandwich, FlaskConical, Square, Coffee,
  GlassWater, Utensils, Sparkles, Beef, ArrowRight,
} from 'lucide-react';

const categories = [
  { icon: Wheat, name: 'Farinhas' },
  { icon: Candy, name: 'Chocolates' },
  { icon: Cake, name: 'Confeitaria' },
  { icon: Milk, name: 'Laticínios' },
  { icon: Egg, name: 'Ovos Pasteurizados' },
  { icon: Layers, name: 'Coberturas' },
  { icon: Droplets, name: 'Geleias' },
  { icon: IceCream2, name: 'Cremes' },
  { icon: CookingPot, name: 'Misturas Prontas' },
  { icon: Cookie, name: 'Biscoitos' },
  { icon: Sandwich, name: 'Recheios' },
  { icon: FlaskConical, name: 'Fermentos' },
  { icon: Square, name: 'Margarinas' },
  { icon: Milk, name: 'Leites' },
  { icon: Beef, name: 'Coco' },
  { icon: Sparkles, name: 'Confeitos' },
  { icon: Sparkles, name: 'Decoração' },
  { icon: Coffee, name: 'Cafés' },
  { icon: GlassWater, name: 'Bebidas' },
  { icon: Utensils, name: 'Food Service' },
];

export default function Categories() {
  return (
    <section id="categorias" className="py-14 md:py-20 bg-[#F7F8F5]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="section-label block mb-1">Nossas Categorias</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#303030]">
              Tudo o que sua produção{' '}
              <span className="text-[#2F7D32]">precisa</span>
            </h2>
          </div>
          <button
            onClick={() => document.querySelector('#produtos')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-[#2F7D32] hover:text-[#0F4D2E] transition-colors"
          >
            Ver todos os produtos
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.name + i}
              className="group flex flex-col items-center gap-2 py-4 px-2 bg-white rounded-xl border border-gray-100 hover:border-[#7FBF3F]/60 hover:shadow-md transition-all duration-200"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (i % 10) * 0.03 }}
              onClick={() => document.querySelector('#produtos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="w-10 h-10 rounded-xl bg-[#F7F8F5] group-hover:bg-[#2F7D32] flex items-center justify-center transition-colors duration-200">
                <cat.icon size={19} className="text-[#2F7D32] group-hover:text-white transition-colors" />
              </div>
              <span className="text-[10px] md:text-[11px] font-semibold text-gray-600 group-hover:text-[#2F7D32] text-center leading-tight transition-colors">
                {cat.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
