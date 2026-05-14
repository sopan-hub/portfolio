'use client';
import { socialLinks } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 transition-all hover:text-white hover:scale-110"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
