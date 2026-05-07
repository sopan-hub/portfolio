
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Image from 'next/image';

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
  // Using the high-quality direct raw link for the background
  const bgImage = "https://github.com/sopan-hub/my-acces/blob/main/image.png?raw=true";

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
      <body className="relative min-h-screen bg-black overflow-x-hidden">
        {/* Fixed Background Image Layer */}
        <div className="fixed inset-0 z-[-1]">
          <Image
            src={bgImage}
            alt="Neural Interface Background"
            fill
            className="object-cover"
            priority
            quality={100}
            unoptimized // Bypass optimization if GitHub raw links behave unexpectedly with standard loaders
          />
          {/* Extremely subtle overlay to keep image colors vibrant while ensuring text is readable */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
