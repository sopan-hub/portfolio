import { cn } from '@/lib/utils';
import React from 'react';

export const TailwindCss = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('w-10 h-10', className)}
    >
      <path
        d="M12 18.2651C15.3137 18.2651 18 15.5788 18 12.2651C18 8.95148 15.3137 6.26514 12 6.26514C8.68629 6.26514 6 8.95148 6 12.2651C6 14.1915 7.02458 15.8943 8.5 16.9254"
        stroke="#38bdf8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 18.2651C9.31371 18.2651 12 15.5788 12 12.2651C12 8.95148 9.31371 6.26514 6 6.26514C2.68629 6.26514 0 8.95148 0 12.2651C0 14.1915 1.02458 15.8943 2.5 16.9254"
        transform="translate(5.5, 0)"
        stroke="#38bdf8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
