'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Search, MessageCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Empresa', href: '#empresa' },
  { label: 'Produtos', href: '#produtos', sub: true },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Atendimento', href: '#processo' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#1a5c35] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7FBF3F]" />
            Distribuindo qualidade para o sucesso do seu negócio!
          </span>
          <div className="flex items-center gap-5 text-[11px]">
            <a href="https://wa.me/5511942122430" className="flex items-center gap-1.5 hover:text-[#7FBF3F] transition-colors">
              <MessageCircle size={12} />
              (11) 94212-2430
            </a>
            <a href="mailto:cleomar.l@hotmail.com" className="flex items-center gap-1.5 hover:text-[#7FBF3F] transition-colors">
              <span className="w-3 h-3 border border-current rounded-sm flex items-center justify-center" style={{fontSize: '8px'}}>@</span>
              cleomar.l@hotmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        } bg-white`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-6">
            {/* Logo */}
            <button onClick={() => scrollTo('#inicio')} className="flex-shrink-0">
              <Image
                src="/logo-of.png"
                alt="CPAN Logo"
                width={110}
                height={70}
                className="object-contain h-14 w-15 rounded-full bg-white shadow-sm"
                priority
              />
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5 flex-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="flex items-center gap-0.5 px-3 py-2 text-sm font-semibold text-[#303030] hover:text-[#2F7D32] transition-colors rounded-lg hover:bg-[#F7F8F5] whitespace-nowrap"
                >
                  {item.label}
                  {item.sub && <ChevronDown size={13} />}
                </button>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-3 ml-auto">
              <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-[#2F7D32] transition-colors">
                <Search size={18} />
              </button>
              <button
                onClick={() => scrollTo('#contato')}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#2F7D32] text-white text-sm font-bold rounded-lg hover:bg-[#0F4D2E] transition-all shadow-sm"
              >
                Solicitar Orçamento
                <MessageCircle size={14} />
              </button>
              <a
                href="https://wa.me/5511942122430"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#25D366] text-white rounded-full hover:bg-[#20b857] transition-colors shadow-sm"
              >
                <MessageCircle size={18} />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden ml-auto p-2 text-[#303030]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollTo(item.href)}
                    className="text-left px-4 py-3 text-sm font-semibold text-[#303030] hover:text-[#2F7D32] hover:bg-[#F7F8F5] rounded-lg transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                  <button
                    onClick={() => scrollTo('#contato')}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#2F7D32] text-white font-bold rounded-lg text-sm"
                  >
                    <MessageCircle size={16} />
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
