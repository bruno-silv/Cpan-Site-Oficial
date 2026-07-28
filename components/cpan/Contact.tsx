'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, Building, Clock } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.name} da empresa ${form.company}.\nTelefone: ${form.phone}\nE-mail: ${form.email}\n\nMensagem: ${form.message}`;
    window.open(`https://wa.me/5511942122430?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', company: '', phone: '', email: '', message: '' });
  };

  const info = [
    { icon: Building, label: 'Empresa', value: 'CPAN Produtos para Panificação e Confeitaria' },
    { icon: MapPin, label: 'Endereço', value: 'Rua Clemente Peralta, 455 - Jardim Represa, Ribeirão Pires - SP, CEP 09415-110' },
    { icon: Phone, label: 'Telefone', value: '(11) 94212-2430' },
    { icon: Mail, label: 'E-mail', value: 'cleomar.l@hotmail.com' },
    { icon: Clock, label: 'Atendimento', value: 'Seg a Sex, 8h às 18h · Sáb, 8h às 12h' },
  ];

  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Fale conosco</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0F4D2E] mt-3 mb-4 leading-tight">
            Solicite seu orçamento
          </h2>
          <p className="text-gray-600">
            Entre em contato e descubra como a CPAN pode abastecer seu negócio com qualidade e economia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: info + map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#F7F8F5] rounded-2xl p-6 mb-4">
              <div className="space-y-5">
                {info.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <item.icon size={18} className="text-[#2F7D32]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#7FBF3F] uppercase tracking-wider">{item.label}</div>
                      <div className="text-sm text-[#303030] font-medium mt-0.5">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md h-64 border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5!2d46.4086!3d-23.7106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQyJzM4LjIiUyw0NsKwMjQnMzEuMCJW!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização CPAN"
              />
            </div>

            <a
              href="https://wa.me/5511942122430"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20b857] transition-colors text-sm"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={submit} className="bg-[#F7F8F5] rounded-2xl p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#303030] uppercase tracking-wider">Nome*</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full mt-1 px-4 py-2.5 bg-white rounded-lg border border-gray-200 text-sm"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#303030] uppercase tracking-wider">Empresa</label>
                  <input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full mt-1 px-4 py-2.5 bg-white rounded-lg border border-gray-200 text-sm"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#303030] uppercase tracking-wider">Telefone*</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full mt-1 px-4 py-2.5 bg-white rounded-lg border border-gray-200 text-sm"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#303030] uppercase tracking-wider">E-mail*</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full mt-1 px-4 py-2.5 bg-white rounded-lg border border-gray-200 text-sm"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-[#303030] uppercase tracking-wider">Mensagem*</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 bg-white rounded-lg border border-gray-200 text-sm resize-none"
                  placeholder="Descreva os produtos e quantidades que deseja cotar."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#2F7D32] text-white font-bold rounded-xl hover:bg-[#0F4D2E] transition-colors text-sm shadow-md"
              >
                {sent ? 'Mensagem enviada!' : 'Enviar solicitação'}
                <Send size={16} />
              </button>
              <p className="text-xs text-gray-400 text-center">
                Ao enviar você concorda com nossa Política de Privacidade.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
