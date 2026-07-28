'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Users, Package, Award, Clock } from 'lucide-react';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const duration = 1800;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.floor(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const stats = [
  { icon: Users, value: 5000, suffix: '+', label: 'Clientes atendidos', color: 'text-[#2F7D32]' },
  { icon: Package, value: 3000, suffix: '+', label: 'Produtos', color: 'text-[#2F7D32]' },
  { icon: Award, value: 40, suffix: '+', label: 'Marcas parceiras', color: 'text-[#2F7D32]' },
  { icon: Clock, value: 15, suffix: '+', label: 'Anos de experiência', color: 'text-[#2F7D32]' },
];

export default function About() {
  return (
    <section id="empresa" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left: image */}
          <motion.div
            className="relative rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg?auto=compress&cs=tinysrgb&w=800&q=85"
              alt="Padaria e confeitaria CPAN"
              className="w-full aspect-[4/3] object-cover"
            />
          </motion.div>

          {/* Middle: text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="section-label block mb-2">Sobre a CPAN</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#303030] leading-tight mb-4">
              Tradição, qualidade e parceria{' '}
              <span className="text-[#2F7D32]">que impulsionam seu negócio</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Há mais de 15 anos no mercado, a CPAN distribui ingredientes e insumos para panificação, confeitaria e food service com compromisso, agilidade e excelência no atendimento.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Contamos com um estoque completo, logística eficiente e uma equipe preparada para oferecer as melhores soluções para o seu negócio.
            </p>
          </motion.div>

          {/* Right: stats 2x2 */}
          <motion.div
            className="grid grid-cols-2 gap-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="bg-[#F7F8F5] rounded-xl p-4 text-center border border-gray-100 hover:border-[#7FBF3F]/50 hover:shadow-md transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              >
                <div className="w-9 h-9 bg-[#2F7D32]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <s.icon size={18} className="text-[#2F7D32]" />
                </div>
                <div className="text-2xl font-black text-[#2F7D32]">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
