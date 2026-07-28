'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative overflow-hidden" style={{ minHeight: 480 }}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1920&q=85"
          alt="Padaria e Confeitaria"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(100deg, rgba(10,50,20,0.88) 0%, rgba(10,50,20,0.70) 45%, rgba(0,0,0,0.40) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: text */}
          <div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-[52px] font-black text-white leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Distribuindo
              <br />
              <span className="text-white">Qualidade para</span>
              <br />
              <span className="text-[#7FBF3F]">Padarias e Confeitarias</span>
            </motion.h1>

            <motion.p
              className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Ingredientes, insumos e marcas reconhecidas para impulsionar o sucesso do seu negócio.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <button
                onClick={() => scrollTo('#contato')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2F7D32] text-white font-bold rounded-lg hover:bg-[#0F4D2E] transition-all duration-200 shadow-lg text-sm"
              >
                <MessageCircle size={16} />
                Solicitar Orçamento
              </button>
              <button
                onClick={() => scrollTo('#produtos')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white font-bold rounded-lg border-2 border-white/60 hover:border-white hover:bg-white/10 transition-all duration-200 text-sm"
              >
                Conheça os Produtos
                <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>

          {/* Right: oval CPAN logo */}
          <motion.div 
              className="hidden lg:flex justify-center items-center" 
              initial={{ opacity: 0, scale: 0.85 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.7, delay: 0.3 }} 
            > 
              <div className="relative"> 
                <div 
                  className="bg-white rounded-full shadow-2xl overflow-hidden flex items-center justify-center" 
                  style={{ width: 310, height: 220 }}
                > 
                  <div className="relative w-full h-full"> 
                    <Image 
                      src="/logo-of-transparent.png" 
                      alt="CPAN - Produtos para Panificação e Confeitaria" 
                      fill 
                      className="object-contain scale-105" 
                      priority 
                    /> 
                  </div> 
                </div> 
              </div> 
            </motion.div>
        </div>
      </div>

      {/* Bottom differentials bar */}
      <div className="relative z-10 bg-black/30 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🚚', title: 'Entrega rápida', sub: 'Agilidade garantida' },
              { icon: '📦', title: 'Grande variedade', sub: '+3.000 produtos' },
              { icon: '🎧', title: 'Atendimento especializado', sub: 'Focado no seu negócio' },
              { icon: '✅', title: 'Qualidade garantida', sub: 'Produtos de confiança' },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-2.5">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="text-white font-bold text-xs md:text-sm">{item.title}</div>
                  <div className="text-white/60 text-[11px]">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
