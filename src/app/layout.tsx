import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import ScrollZoomBackground from '@/components/ui/scroll-zoom-background';

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
  // Hero background (portrait)
  const heroBgUrl = "https://raw.githubusercontent.com/sopan-hub/my-acces/16fec689f27922f5d63ac2b8475019034a54106d/image.png";
  // Content background (High-res tech texture for all sections)
  const contentBgUrl = "https://raw.githubusercontent.com/sopan-hub/my-acces/0fa7baf05422f321bedaa05b2ba52ca8dc4e0d0f/bg3.png";

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
        {/* Responsive background that transitions between hero and global tech background */}
        <ScrollZoomBackground 
          heroSrc={heroBgUrl} 
          contentSrc={contentBgUrl} 
        />
        
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
