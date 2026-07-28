'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const brands = [
  { name: 'Harald', logo: '/brands/harald.png' },
  { name: 'Nestlé Professional', logo: '/brands/nestle-professional.png' },
  { name: 'Selecta', logo: '/brands/selecta.png' },
  { name: "Rich's", logo: '/brands/richs.png' },
  { name: 'Mavalério', logo: '/brands/mavalerio.png' },
  { name: 'Duas Rodas', logo: '/brands/duas-rodas.png' },
  { name: 'Piracanjuba', logo: '/brands/piracanjuba.png' },
  { name: 'Vigor', logo: '/brands/vigor.png' },
  { name: 'Itambé', logo: '/brands/itambe.png' },
  { name: 'Fleischmann', logo: '/brands/fleischmann.png' },
  { name: 'Aurora', logo: '/brands/aurora.png' },
  { name: 'Bauducco', logo: '/brands/bauducco.png' },
];

export default function Brands() {
  return (
    <section id="marcas" className="py-14 md:py-20 bg-[#F7F8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="section-label block mb-1">Marcas Parceiras</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#303030]">
              Trabalhamos com as{' '}
              <span className="text-[#2F7D32]">melhores marcas</span>
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md">
            Mais de 40 marcas reconhecidas nacionalmente, garantindo qualidade e procedência em cada entrega.
          </p>
        </div>
      </div>

      {/* Infinite carousel */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F7F8F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F7F8F5] to-transparent z-10 pointer-events-none" />
        <div className="overflow-hidden">
          <div className="brands-track flex gap-4 w-max">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-48 h-28 bg-white rounded-xl flex items-center justify-center px-6 border border-gray-100 hover:border-[#7FBF3F]/50 hover:shadow-md transition-all duration-200 group"
              >
                <Image
                  src={brand.logo}
                  alt={`Logo ${brand.name}`}
                  width={160}
                  height={80}
                  className="max-h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { n: '40+', l: 'Marcas parceiras' },
            { n: '3.000+', l: 'Itens disponíveis' },
            { n: '5.000+', l: 'Clientes atendidos' },
            { n: '15+', l: 'Anos de mercado' },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              className="text-center p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="text-3xl md:text-4xl font-black text-[#2F7D32]">{s.n}</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-medium">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
