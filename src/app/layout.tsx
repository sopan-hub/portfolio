import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import ScrollingBackground from '@/components/scrolling-background';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Portfolio | Sopan Patil',
  description: 'The personal portfolio of Sopan Patil, a computer science and AI/ML student.',
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn('min-h-screen font-sans antialiased', inter.variable)}>
        <ScrollingBackground />
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
