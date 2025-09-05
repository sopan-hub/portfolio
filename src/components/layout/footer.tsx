import React from 'react';
import { socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} PortfolioPulse. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Button key={link.href} variant="ghost" size="icon" asChild>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
