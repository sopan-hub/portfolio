import { cn } from '@/lib/utils';
import React from 'react';

export const Typescript = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={cn('w-10 h-10', className)}
    >
      <path fill="#3178c6" d="M0 0h48v48H0z" />
      <path
        fill="#fff"
        d="M27.4 35.8h9.8v3.4h-14v-15.6h3.4l.8 12.2zm-12-16.4h11.2v-3.4H15.4v3.4zm0 5.6h11.2v-3.4H15.4v3.4zm0 5.6h11.2v-3.4H15.4v3.4z"
      />
    </svg>
  );
};
