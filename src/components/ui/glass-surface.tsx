'use client';
import { cn } from '@/lib/utils';

interface GlassSurfaceProps {
  children: React.ReactNode;
  className?: string;
  borderRadius?: number;
  width?: number | string;
  height?: number | string;
}

const GlassSurface = ({
  children,
  className,
  borderRadius = 32,
  width = '100%',
  height = 'auto',
}: GlassSurfaceProps) => {
  return (
    <div
      className={cn(
        "liquid-glass relative overflow-hidden",
        className
      )}
      style={{
        borderRadius: `${borderRadius}px`,
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default GlassSurface;
