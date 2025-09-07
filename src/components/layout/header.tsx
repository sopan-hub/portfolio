"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { navLinks, socialLinks } from '@/lib/data';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 border-b border-border/40 bg-transparent backdrop-blur-2xl'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
            transition={isHovered ? { duration: 1, repeat: Infinity, ease: 'linear' } : { duration: 0.5 }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 100 100"
              className="fill-primary"
            >
              <path d="M50,0A50,50,0,1,0,50,100,50,50,0,0,0,50,0Zm0,92.86A42.86,42.86,0,1,1,92.86,50,42.91,42.91,0,0,1,50,92.86Z" />
              <path d="M50,21.43a7.14,7.14,0,1,0,7.14,7.14A7.14,7.14,0,0,0,50,21.43Z" />
              <path d="M50,42.86a7.14,7.14,0,1,0,7.14,7.14A7.14,7.14,0,0,0,50,42.86Z" />
              <path d="M50,64.29a7.14,7.14,0,1,0,7.14,7.14A7.14,7.14,0,0,0,50,64.29Z" />
            </svg>
          </motion.div>
          <span className="text-xl font-bold">Portfolio</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {socialLinks.map((link) => (
            <Button key={link.href} variant="link" size="icon" asChild>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </a>
            </Button>
          ))}
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 flex items-center gap-4">
                 {socialLinks.map((link) => (
                  <Button key={link.href} variant="link" size="icon" asChild>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                      <link.icon className="h-6 w-6" />
                      <span className="sr-only">{link.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
