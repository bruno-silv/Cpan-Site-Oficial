'use client';

import Header from '@/components/cpan/Header';
import Hero from '@/components/cpan/Hero';
import About from '@/components/cpan/About';
import Categories from '@/components/cpan/Categories';
import Products from '@/components/cpan/Products';
import Brands from '@/components/cpan/Brands';
import Differentials from '@/components/cpan/Differentials';
import Process from '@/components/cpan/Process';
import Clients from '@/components/cpan/Clients';
import InstagramFeed from '@/components/cpan/InstagramFeed';
import Contact from '@/components/cpan/Contact';
import Footer from '@/components/cpan/Footer';
import FloatingButtons from '@/components/cpan/FloatingButtons';

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Categories />
      <Products />
      <Brands />
      <Differentials />
      <Process />
      <Clients />
      <InstagramFeed />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
