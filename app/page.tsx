'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import VisionMission from '@/components/VisionMission';
import Projects from '@/components/Projects';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <About />
      <VisionMission />
      <Projects />
      <Leadership />
      <Contact />
      <Map />
      <Footer />
    </main>
  );
}
