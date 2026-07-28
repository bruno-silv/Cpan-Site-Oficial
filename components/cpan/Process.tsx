'use client';

import { motion } from 'framer-motion';
import { ClipboardList, Phone, PackageCheck, Truck } from 'lucide-react';

const steps = [
  { icon: ClipboardList, title: 'Solicite orçamento', desc: 'Fale com nossa equipe pelos canais de atendimento.' },
  { icon: Phone, title: 'Receba atendimento', desc: 'Um especialista entende suas necessidades.' },
  { icon: PackageCheck, title: 'Escolha os produtos', desc: 'Monte seu pedido com o melhor do catálogo.' },
  { icon: Truck, title: 'Receba sua entrega', desc: 'Entrega rápida e programada até sua porta.' },
];

export default function Process() {
  return (
    <section id="processo" className="py-20 md:py-28 bg-[#F7F8F5]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Como funciona</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0F4D2E] mt-3 mb-4 leading-tight">
            Simples e direto ao ponto
          </h2>
          <p className="text-gray-600">
            Em quatro passos sua padaria ou confeitaria está abastecida com qualidade.
          </p>
        </motion.div>

        <div className="relative">
          {/* connecting line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#7FBF3F] via-[#2F7D32] to-[#0F4D2E]" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-[#F7F8F5] flex items-center justify-center shadow-md z-10 relative group hover:bg-[#2F7D32] transition-colors duration-300">
                    <step.icon size={28} className="text-[#2F7D32] group-hover:text-white transition-colors" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#7FBF3F] text-white text-xs font-black flex items-center justify-center shadow-sm z-20">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-bold text-[#0F4D2E] text-base mt-5 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
