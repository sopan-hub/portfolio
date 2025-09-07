import { cn } from '@/lib/utils';
import React from 'react';

export const Genkit = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('w-10 h-10', className)}
    >
      <path
        d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.24L19.5 8.5v7L12 19.76 4.5 15.5v-7L12 4.24zM11 11H7v2h4v-2zm2 0h4v2h-4v-2z"
        fill="#fb8c00"
      />
    </svg>
  );
};
