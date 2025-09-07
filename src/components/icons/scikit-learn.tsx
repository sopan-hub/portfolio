import { cn } from '@/lib/utils';
import React from 'react';

export const ScikitLearn = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('w-10 h-10', className)}
    >
      <circle cx="9" cy="8" r="4.5" fill="#f89939" />
      <path
        d="M17 12a3 3 0 013 3v3a3 3 0 01-3 3h-2v-9h2a3 3 0 013 3z"
        fill="#6CB4E4"
      />
      <path
        d="M21 15v3a3 3 0 01-6 0v-3h2v3a1 1 0 002 0v-3h2z"
        fill="#3A76B8"
      />
      <circle cx="9" cy="8" r="1.5" fill="#fff" />
    </svg>
  );
};
