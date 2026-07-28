'use client';

import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight } from 'lucide-react';

const posts = [
  { img: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', caption: 'Novidades chegando toda semana ao estoque!' },
  { img: 'https://images.pexels.com/photos/695753/pexels-photo-695753.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', caption: 'Chocolates premium para sua confeitaria.' },
  { img: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', caption: 'Farinhas selecionadas para o pão perfeito.' },
  { img: 'https://images.pexels.com/photos/14478/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600&q=80', caption: 'Decoração que transforma seus produtos.' },
  { img: 'https://images.pexels.com/photos/230386/pexels-photo-230386.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', caption: 'Cacau 100% para receitas marcantes.' },
  { img: 'https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', caption: 'Laticínios frescos direto para sua cozinha.' },
];

export default function InstagramFeed() {
  return (
    <section id="instagram" className="py-20 md:py-28 bg-[#F7F8F5]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Redes Sociais</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0F4D2E] mt-3 mb-4 leading-tight">
            Siga-nos no Instagram
          </h2>
          <p className="text-gray-600">
            Acompanhe lançamentos, novidades e dicas no perfil oficial da CPAN.
          </p>
        </motion.div>
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/cpandist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#2F7D32] text-[#2F7D32] font-bold rounded-xl hover:bg-[#2F7D32] hover:text-white transition-all duration-300 text-sm"
          >
            <Instagram size={16} />
            Ver Instagram
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
