'use client';

import { motion } from 'framer-motion';
import {
  Truck, Boxes, Users, Tag, BadgeCheck, Headphones,
  Warehouse, Route,
} from 'lucide-react';

const items = [
  { icon: Truck, title: 'Entrega Rápida', desc: 'Logística otimizada com prazos cumpridos.' },
  { icon: Boxes, title: 'Grande Variedade', desc: 'Mais de 3.000 itens para todos os segmentos.' },
  { icon: Users, title: 'Equipe Especializada', desc: 'Atendimento técnico e comercial dedicado.' },
  { icon: Tag, title: 'Preço Competitivo', desc: 'Condições especiais para revenda e volume.' },
  { icon: BadgeCheck, title: 'Produtos Originais', desc: 'Insumos com procedência garantida e rastreáveis.' },
  { icon: Headphones, title: 'Suporte Comercial', desc: 'Acompanhamento antes, durante e após a venda.' },
  { icon: Warehouse, title: 'Estoque Permanente', desc: 'Disponibilidade constante dos itens mais pedidos.' },
  { icon: Route, title: 'Distribuição Eficiente', desc: 'Rotas planejadas para cobrir toda a região.' },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="section-label block mb-1">Nossos Diferenciais</span>
          <h2 className="text-2xl md:text-3xl font-black text-[#303030]">
            Por que escolher a{' '}
            <span className="text-[#2F7D32]">CPAN?</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            Mais que um fornecedor, um parceiro estratégico para o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="group bg-[#F7F8F5] rounded-xl p-5 border border-gray-100 hover:bg-white hover:border-[#7FBF3F]/50 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
            >
              <div className="w-11 h-11 rounded-xl bg-white group-hover:bg-[#2F7D32] flex items-center justify-center mb-3 shadow-sm transition-colors duration-300">
                <item.icon size={20} className="text-[#2F7D32] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-[#303030] text-sm mb-1.5">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
