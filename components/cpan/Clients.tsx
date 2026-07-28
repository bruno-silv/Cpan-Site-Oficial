'use client';

import { motion } from 'framer-motion';
import { Croissant, Cake, Pizza, ShoppingCart, Utensils, Hotel } from 'lucide-react';

const segments = [
  { icon: Croissant, name: 'Padarias', img: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' },
  { icon: Cake, name: 'Confeitarias', img: '/confeitaria.png' },
  { icon: Pizza, name: 'Pizzarias', img: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' },
  { icon: ShoppingCart, name: 'Mercados', img: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' },
  { icon: Utensils, name: 'Restaurantes', img: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' },
  { icon: Hotel, name: 'Hotéis', img: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' },
];

export default function Clients() {
  return (
    <section id="clientes" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Segmentos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0F4D2E] mt-3 mb-4 leading-tight">
            Atendemos diversos segmentos
          </h2>
          <p className="text-gray-600">
            Atendemos diversos segmentos alimentícios oferecendo soluções completas para o seu negócio.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.name}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <img
                src={seg.img}
                alt={seg.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F4D2E]/85 via-[#0F4D2E]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#7FBF3F] flex items-center justify-center flex-shrink-0">
                  <seg.icon size={20} className="text-white" />
                </div>
                <span className="text-white font-bold text-lg">{seg.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
