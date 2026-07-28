'use client';

import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <title>CPAN - Produtos para Panificação e Confeitaria</title>
        <meta name="description" content="Distribuidora de ingredientes e insumos para padarias, confeitarias, pizzarias, mercados e food service. Marcas reconhecidas, entrega rápida e atendimento especializado." />
        <meta name="keywords" content="panificação, confeitaria, distribuidora, ingredientes, farinhas, chocolates, food service, Ribeirão Pires" />
        <meta property="og:title" content="CPAN - Produtos para Panificação e Confeitaria" />
        <meta property="og:description" content="Distribuidora de ingredientes e insumos para padarias, confeitarias e food service." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌾</text></svg>" />
      </head>
      <body className="font-sans antialiased bg-white text-[#303030]">{children}</body>
    </html>
  );
}
