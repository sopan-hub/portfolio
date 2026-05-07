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
  return (
    <html lang="en">
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
      <body className="relative">
        {/* Fixed Background Image */}
        <div className="fixed inset-0 z-[-1] overflow-hidden">
          <Image
            src="https://raw.githubusercontent.com/sopan-hub/my-acces/16fec689f27922f5d63ac2b8475019034a54106d/image.png"
            alt="Global Background"
            fill
            className="object-cover"
            priority
            quality={100}
            unoptimized
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-0">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
