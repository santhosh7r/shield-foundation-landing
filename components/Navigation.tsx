'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#vision', label: 'Vision' },
    { href: '#projects', label: 'Projects' },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] bg-black/60 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex items-center justify-between relative h-14 md:h-20">

          {/* Logo Area */}
          <Link
            href="#home"
            className="flex items-center z-[110] h-full py-0"
            onClick={() => setIsOpen(false)}
          >
            {/* Logo Image */}
            <div className="h-full flex items-center justify-center rounded-md group">
              <img src="/logo.jpg" alt="Shield Foundation Logo" className="h-full w-auto object-contain scale-[1.1] md:scale-[1.25] origin-left" />
            </div>
          </Link>

          {/* Desktop Navigation (Perfectly Centered) */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center space-x-12 pointer-events-none">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/50 hover:text-[#FFBF00] transition-colors duration-300 pointer-events-auto"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Button & Mobile Toggle */}
          <div className="flex items-center z-[110]">
            <a
              href="#contact"
              className="hidden md:inline-flex text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-black bg-[#FFBF00] px-6 py-2.5 hover:bg-white transition-colors duration-300 pointer-events-auto"
            >
              Contact Us
            </a>

            <button
              className="md:hidden text-white pointer-events-auto"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Extreme Minimal Mobile Menu */}
      <div
        className={`fixed inset-0 z-[90] bg-[#0a0a0a] flex flex-col justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center px-6 md:px-12 space-y-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-4xl sm:text-5xl font-bold tracking-[0.1em] uppercase text-white hover:text-[#FFBF00] transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${index * 50 + 100}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className={`text-2xl sm:text-3xl border border-[#FFBF00] text-[#FFBF00] px-8 py-4 font-bold tracking-[0.2em] uppercase hover:bg-[#FFBF00] hover:text-black transition-all duration-300 mt-8 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: `${navLinks.length * 50 + 200}ms` }}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
