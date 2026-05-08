
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Image from 'next/image';
import placeholderImages from '@/app/lib/placeholder-images.json';

export const metadata: Metadata = {
  title: 'Portfolio | Sopan Patil',
  description:
    'The personal portfolio of Sopan Patil, a computer science and AI/ML student.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalBg = placeholderImages['global-bg'];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative min-h-screen bg-black overflow-x-hidden antialiased">
        {/* Global base technical background - Persistent everywhere */}
        <div className="fixed inset-0 z-[-5] pointer-events-none">
          <Image
            src={globalBg.url}
            alt={globalBg.alt}
            fill
            className="object-cover opacity-60"
            quality={100}
            priority
            unoptimized
          />
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
