'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

type Product = {
  name: string;
  category: string;
  brand: string;
  image: string;
};

const products: Product[] = [
  { name: 'Bolo de Cenoura com Cobertura de Chocolate', category: 'Bolos', brand: 'Harald', image: '/products/WhatsApp_Image_2026-07-21_at_23.50.18.jpeg' },
  { name: 'Bolo Red Velvet Individual', category: 'Bolos', brand: 'Selecta', image: '/products/WhatsApp_Image_2026-07-21_at_23.50.18_(3).jpeg' },
  { name: 'Bolo de Baunilha com Chantilly', category: 'Bolos', brand: "Rich's", image: '/products/WhatsApp_Image_2026-07-21_at_23.50.18_(2).jpeg' },
  { name: 'Pão Artesanal com Gergelim', category: 'Panificação', brand: 'Fleischmann', image: '/products/WhatsApp_Image_2026-07-21_at_23.50.19_(1).jpeg' },
  { name: 'Bolo Red Velvet Redondo', category: 'Bolos', brand: 'Mavalério', image: '/products/WhatsApp_Image_2026-07-21_at_23.50.18_(4).jpeg' },
  { name: 'Bolo de Baunilha com Chantilly Rosa', category: 'Bolos', brand: 'Aurora', image: '/products/WhatsApp_Image_2026-07-21_at_23.50.18_(1).jpeg' },
  { name: 'Pao de Queijo com Nutella', category: 'Confeitaria', brand: 'Nestlé Professional', image: '/products/WhatsApp_Image_2026-07-21_at_23.50.17.jpeg' },
  { name: 'Chipa', category: 'Confeitaria', brand: 'Duas Rodas', image: '/products/WhatsApp_Image_2026-07-21_at_23.50.17_(1).jpeg' },
  { name: 'Pão de Queijo com Catupiry', category: 'Confeitaria', brand: 'Piracanjuba', image: '/products/WhatsApp_Image_2026-07-21_at_23.50.17_(2).jpeg' },
  { name: 'Bolo 2', category: 'Confeitaria', brand: 'Vigor', image: '/products/WhatsApp_Image_2026-07-21_at_23.50.17_(3).jpeg' },
  { name: 'Pão Integral Recheado', category: 'Panificação', brand: 'Bauducco', image: '/products/WhatsApp_Image_2026-07-21_at_23.50.19_(2).jpeg' },
  { name: 'Panetone', category: 'Panificação', brand: 'Itambé', image: '/products/WhatsApp_Image_2026-07-21_at_23.50.19_(3).jpeg' },
  { name: 'Pão de Forma Premium', category: 'Panificação', brand: 'Selecta', image: '/products/WhatsApp_Image_2026-07-21_at_23.50.19.jpeg' },
  { name: 'Carolina de Doce de Leite', category: 'Confeitaria', brand: 'Harald', image: '/products/WhatsApp_Image_2026-07-21_at_23.50.20_(1).jpeg' },
  { name: 'Carolina de Limão', category: 'Confeitaria', brand: "Rich's", image: '/products/WhatsApp_Image_2026-07-21_at_23.50.20_(2).jpeg' },
];

const categories = ['Todos', 'Bolos', 'Panificação', 'Confeitaria', 'Coberturas'];
const PAGE_SIZE = 8;

export default function Products() {
  const [activeCat, setActiveCat] = useState('Todos');
  const [page, setPage] = useState(1);

  const filtered = activeCat === 'Todos' ? products : products.filter((p) => p.category === activeCat);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const quote = (p: Product) => {
    const msg = `Olá! Gostaria de solicitar cotação do produto: ${p.name} - ${p.brand}`;
    window.open(`https://wa.me/5511942122430?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="produtos" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
          <div>
            <span className="section-label block mb-1">Catálogo de Produtos</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#303030]">
              Produtos em{' '}
              <span className="text-[#2F7D32]">destaque</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => { setActiveCat(c); setPage(1); }}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  activeCat === c
                    ? 'bg-[#2F7D32] text-white shadow-sm'
                    : 'bg-[#F7F8F5] text-gray-600 hover:bg-gray-100 hover:text-[#2F7D32]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {current.map((p, i) => (
            <motion.div
              key={p.name}
              className="product-card bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-[#7FBF3F]/40 transition-all duration-300 flex flex-col group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (i % 4) * 0.06 }}
            >
              <div className="relative aspect-square overflow-hidden bg-[#F7F8F5]">
                <img src={p.image} alt={p.name} className="product-img w-full h-full object-cover" />
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-white/95 text-[9px] font-bold text-[#2F7D32] rounded-full uppercase tracking-wider">
                  {p.category}
                </span>
              </div>
              <div className="p-3.5 flex flex-col flex-1">
                <div className="text-[9px] font-bold text-[#7FBF3F] uppercase tracking-wider mb-0.5">{p.brand}</div>
                <h3 className="text-sm font-semibold text-[#303030] leading-snug mb-3 flex-1">{p.name}</h3>
                <button
                  onClick={() => quote(p)}
                  className="w-full py-2 bg-[#F7F8F5] group-hover:bg-[#2F7D32] text-[#2F7D32] group-hover:text-white text-xs font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 border border-[#2F7D32]/15"
                >
                  <MessageCircle size={13} />
                  Solicitar Cotação
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-white disabled:opacity-40 hover:border-[#2F7D32] hover:text-[#2F7D32] transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-semibold transition-all ${
                  page === n ? 'bg-[#2F7D32] text-white' : 'border border-gray-200 bg-white hover:border-[#2F7D32] hover:text-[#2F7D32]'
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-white disabled:opacity-40 hover:border-[#2F7D32] hover:text-[#2F7D32] transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* View all */}
        <div className="text-center mt-8">
          <a
            href="https://wa.me/5511942122430?text=Olá! Gostaria de receber o catálogo completo da CPAN."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border-2 border-[#2F7D32] text-[#2F7D32] font-bold rounded-lg hover:bg-[#2F7D32] hover:text-white transition-all duration-200 text-sm"
          >
            Ver todos os produtos
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
