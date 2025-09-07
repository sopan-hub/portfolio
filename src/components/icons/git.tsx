import { cn } from '@/lib/utils';
import React from 'react';

export const Git = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('w-10 h-10', className)}
    >
      <path
        d="M22.2 9.6c-.2-.5-.5-.9-.9-1.2l-7-7c-.4-.3-.8-.5-1.3-.5s-.9.2-1.3.5l-2.4 2.4c.7.3 1.3.8 1.8 1.4.5.6.8 1.4.8 2.2 0 .8-.3 1.6-.8 2.2-.5.6-1.1 1.1-1.8 1.4l-1.3 1.3v4.9c0 .4.1.8.4 1.1.3.3.7.4 1.1.4h4.9l1.3-1.3c.3-.7.8-1.3 1.4-1.8.6-.5 1.4-.8 2.2-.8.8 0 1.6.3 2.2.8.6.5 1.1 1.1 1.4 1.8l2.4-2.4c.3-.4.5-.8.5-1.3V11c0-.5-.2-1-.5-1.4z"
        fill="#f05033"
      />
      <circle cx="8" cy="16" r="2.5" fill="#f05033" />
      <circle cx="16" cy="8" r="2.5" fill="#f05033" />
      <circle cx="8" cy="8" r="2.5" fill="#f05033" />
    </svg>
  );
};
