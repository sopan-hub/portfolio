
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Image from 'next/image';
import images from '@/app/lib/placeholder-images.json';

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
      <body className="relative min-h-screen">
        {/* Fixed Background Image - Global High Quality */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <Image
            src={images["hero-bg"].url}
            alt={images["hero-bg"].alt}
            fill
            className="object-cover"
            priority
            quality={100}
            unoptimized
          />
          {/* Subtle overlay to improve text readability without blocking the image */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        <div className="relative z-0">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
