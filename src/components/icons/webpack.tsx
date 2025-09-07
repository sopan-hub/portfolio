import { cn } from '@/lib/utils';
import React from 'react';

export const Webpack = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('w-10 h-10', className)}
    >
      <path
        d="M19.1 4.5l-7.1-4-7.1 4-3.5 11.3 10.6 6.2 10.6-6.2L19.1 4.5z"
        fill="#8ed6fb"
      />
      <path
        d="M12 2.3l-7.1 4.1.3 1.2 6.8-4 6.8 4 .3-1.2L12 2.3z"
        fill="#1c78c0"
      />
      <path
        d="M12 12.5L5.4 8.7l-.4.7 6.9 4.1 7.1-4.1-.4-.7-6.6 3.8z"
        fill="#1c78c0"
      />
      <path d="M12 22.5v-8.8l5.2-3 1.2 2-6.4 3.7z" fill="#1c78c0" />
      <path d="M12 22.5v-8.8l-5.2-3-1.2 2 6.4 3.7z" fill="#1c78c0" />
    </svg>
  );
};
