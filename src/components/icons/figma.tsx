import { cn } from '@/lib/utils';
import React from 'react';

export const Figma = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('w-10 h-10', className)}
    >
      <path d="M15 12a3 3 0 01-3 3H9v-3a3 3 0 013-3h3z" fill="#a259ff" />
      <path d="M9 15v3a3 3 0 110-6v3z" fill="#f24e1e" />
      <path d="M9 9V6a3 3 0 110 6V9z" fill="#ff7262" />
      <path d="M12 6a3 3 0 013 3v3a3 3 0 11-6 0V6a3 3 0 013-3z" fill="#1abcfe" />
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" fill="#0acf83" />
    </svg>
  );
};
