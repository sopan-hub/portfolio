import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Bowlby_One_SC } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const bowlbyOneSC = Bowlby_One_SC({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bowlby-one-sc',
});

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
        <link
          href="https://fonts.googleapis.com/css2?family=Bowlby+One+SC&family=DM+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('min-h-screen font-sans antialiased', bowlbyOneSC.variable)}>
        <div className="hero-gradient-bg"></div>
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
