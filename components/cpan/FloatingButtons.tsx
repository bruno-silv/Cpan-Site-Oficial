'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/5511942122430?text=Olá! Gostaria de solicitar um orçamento."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
      </a>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="scroll-top"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} className="text-white" />
        </button>
      )}
    </>
  );
}
