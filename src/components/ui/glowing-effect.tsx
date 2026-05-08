'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface GlowingEffectProps {
  spread?: number;
  glow?: boolean;
  disabled?: boolean;
  proximity?: number;
  inactiveZone?: number;
  className?: string;
}

export const GlowingEffect = ({
  spread = 40,
  glow = true,
  disabled = false,
  proximity = 64,
  inactiveZone = 0.01,
  className,
}: GlowingEffectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current || disabled) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    },
    [disabled]
  );

  useEffect(() => {
    const parent = containerRef.current?.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove as any);
      return () => parent.removeEventListener('mousemove', handleMouseMove as any);
    }
  }, [handleMouseMove]);

  if (disabled) return null;

  return (
    <div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100',
        className
      )}
      style={{
        background: `radial-gradient(${spread}px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 80%)`,
      }}
    >
      {glow && (
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `radial-gradient(${proximity}px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.2), transparent 80%)`,
          }}
        />
      )}
    </div>
  );
};
