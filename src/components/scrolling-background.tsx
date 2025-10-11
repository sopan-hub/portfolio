'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import LightRays from './LightRays';

const ScrollingBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const updateBackground = () => {
      if (backgroundRef.current) {
        const { x, y } = mousePosition;
        const scrollY = scrollPosition;
        
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? scrollY / docHeight : 0;

        // Animate gradient positions based on scroll and mouse
        const y1 = 20 + scrollPercent * 40;
        const x1 = 15 + (x / window.innerWidth - 0.5) * 10;
        
        const y2 = 75 - scrollPercent * 30;
        const x2 = 85 + (y / window.innerHeight - 0.5) * 15;

        backgroundRef.current.style.backgroundImage = `
          radial-gradient(circle at ${x1}% ${y1}%, rgba(138, 43, 226, 0.6) 0%, transparent 25%),
          radial-gradient(circle at ${x2}% ${y2}%, rgba(128, 0, 128, 0.7) 0%, transparent 30%)
        `;
      }
      frameRef.current = requestAnimationFrame(updateBackground);
    };

    frameRef.current = requestAnimationFrame(updateBackground);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [mousePosition, scrollPosition]);

  return (
    <div className="hero-gradient-bg">
      <div ref={backgroundRef} className="hero-gradient-bg-dynamic" />
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={0.5}
        lightSpread={0.5}
        rayLength={1.5}
        pulsating={true}
        fadeDistance={0.8}
        saturation={0.5}
        mouseInfluence={0.05}
      />
    </div>
  );
};

export default ScrollingBackground;
