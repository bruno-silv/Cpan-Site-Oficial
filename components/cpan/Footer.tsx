'use client';

import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail, ArrowRight, Shield } from 'lucide-react';

const menu = [
  { label: 'Início', href: '#inicio' },
  { label: 'Empresa', href: '#empresa' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F4D2E] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Top: newsletter */}
        {/* <motion.div
          className="grid lg:grid-cols-2 gap-6 items-center bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-xl md:text-2xl font-black mb-1">Receba novidades</h3>
            <p className="text-white/60 text-sm">Promoções, lançamentos e dicas para o seu negócio.</p>
          </div>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-xl bg-white text-[#303030] text-sm border border-transparent focus:border-[#7FBF3F]"
            />
            <button className="flex items-center gap-1.5 px-5 py-3 bg-[#7FBF3F] text-[#0F4D2E] font-bold rounded-xl hover:bg-white transition-colors text-sm whitespace-nowrap">
              Inscrever
              <ArrowRight size={14} />
            </button>
          </form>
        </motion.div> */}

        {/* Middle: columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-11 h-11 bg-[#2F7D32] rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-black text-sm">CP</span>
              </div>
              <div className="leading-tight">
                <div className="font-black text-base">CPAN</div>
                <div className="text-[10px] font-medium tracking-wider uppercase text-[#7FBF3F]">Panificação & Confeitaria</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Distribuindo qualidade para quem transforma ingredientes em sucesso. Mais de 15 anos de experiência no abastecimento do setor alimentício.
            </p>
            <div className="flex gap-2">
              <a href="https://www.instagram.com/cpandist" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#7FBF3F] hover:text-[#0F4D2E] transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#7FBF3F] hover:text-[#0F4D2E] transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://wa.me/5511942122430" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#7FBF3F] hover:text-[#0F4D2E] transition-colors">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-[#7FBF3F]">Navegação</h4>
            <ul className="space-y-2.5">
              {menu.map((m) => (
                <li key={m.label}>
                  <button onClick={() => scrollTo(m.href)} className="text-white/60 hover:text-white text-sm transition-colors">
                    {m.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-[#7FBF3F]">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#7FBF3F]" />
                Rua Clemente Peralta, 455 - Jardim Represa, Ribeirão Pires - SP
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Phone size={16} className="flex-shrink-0 text-[#7FBF3F]" />
                (11) 94212-2430
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Mail size={16} className="flex-shrink-0 text-[#7FBF3F]" />
                c.pandist@gmail.com
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-[#7FBF3F]">Informações</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2"><Shield size={14} /> LGPD</a></li>
              <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2"><Shield size={14} /> Política de Privacidade</a></li>
              <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2"><Shield size={14} /> Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-center">
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} CPAN Produtos para Panificação e Confeitaria. Todos os direitos reservados.</p>
          <p className="text-white/40 text-xs">CNPJ e endereço: Ribeirão Pires - SP · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
