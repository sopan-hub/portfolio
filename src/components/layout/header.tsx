
'use client';

import React, { useState, useEffect } from 'react';
import { navLinks } from '@/lib/data';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Animate the profile icon appearing as the background finishes its shrink
  // We use a slight delay so it "takes over" from the shrinking BG
  const profileOpacity = useTransform(smoothProgress, [0.15, 0.25], [0, 1]);
  const profileScale = useTransform(smoothProgress, [0.15, 0.25], [0.8, 1]);
  const navPaddingLeft = useTransform(smoothProgress, [0.1, 0.25], ["2.5rem", "1rem"]);

  useEffect(() => {
    const handleScroll = () => {
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profileImageUrl = "https://raw.githubusercontent.com/sopan-hub/my-image-assets/c1a37f7dca7fef0d5cad624e94e96e3132132d9e/file_00000000dc0461f9b1a884202d5845c2.png";

  return (
    <div className="fixed top-8 left-0 z-50 w-full px-4 flex justify-center pointer-events-none">
      <motion.nav 
        style={{ paddingLeft: navPaddingLeft }}
        className="pointer-events-auto transition-all duration-500 rounded-full pr-10 py-2 flex items-center gap-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
      >
        {/* Profile Icon - Appears on Scroll and "catches" the shrinking Hero BG */}
        <motion.div 
          style={{ opacity: profileOpacity, scale: profileScale }}
          className="flex items-center gap-3 shrink-0"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-black">
            <Image
              src={profileImageUrl}
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <span className="hidden lg:block text-[9px] font-bold uppercase tracking-[0.2em] text-white/90">
            SOPAN
          </span>
        </motion.div>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-[9px] font-bold uppercase tracking-[0.3em] transition-all hover:text-white",
                activeLink === link.href ? "text-white" : "text-white/40"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="p-1 md:hidden text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl md:hidden flex items-center justify-center p-6 pointer-events-auto">
          <div className="w-full max-w-xs flex flex-col gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-[0.4em] transition-colors",
                  activeLink === link.href ? "text-white" : "text-white/40"
                )}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={() => setMenuOpen(false)}
              className="mt-8 p-3 rounded-full bg-white/10 text-white"
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
