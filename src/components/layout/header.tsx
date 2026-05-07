'use client';

import React, { useState, useEffect } from 'react';
import { navLinks } from '@/lib/data';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);

      const sections = navLinks.map((link) =>
        document.getElementById(link.href.substring(1))
      );
      let currentSection = '';
      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop - 100;
          if (window.scrollY >= sectionTop) {
            currentSection = `#${section.id}`;
          }
        }
      }
      setActiveLink(currentSection || '#home');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div className="fixed top-6 left-0 z-50 w-full px-4 flex justify-center pointer-events-none">
      <header
        className={`pointer-events-auto transition-all duration-500 rounded-full px-6 py-3 flex items-center gap-8 ${
          isSticky 
            ? 'liquid-glass border border-white/10 shadow-2xl scale-100' 
            : 'bg-transparent scale-105'
        }`}
      >
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-primary ${
                activeLink === link.href
                  ? 'text-primary'
                  : 'text-white/70'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="p-1 md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden flex items-center justify-center p-6">
          <div className="liquid-glass border border-white/10 rounded-3xl w-full max-w-xs p-8 flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  activeLink === link.href ? 'text-primary' : 'text-white'
                }`}
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={toggleMenu}
              className="mt-4 p-2 rounded-full bg-white/10 text-white"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
