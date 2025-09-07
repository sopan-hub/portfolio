import { cn } from '@/lib/utils';
import React from 'react';

export const Python = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('w-10 h-10', className)}
    >
      <path d="M12 21.5a4.5 4.5 0 004.5-4.5h-9a4.5 4.5 0 004.5 4.5z" fill="#3776ab" />
      <path d="M12 2.5a4.5 4.5 0 00-4.5 4.5h9a4.5 4.5 0 00-4.5-4.5z" fill="#ffc331" />
      <g fill="#3776ab">
        <path d="M16.5 7h-2.25v2.25H9A4.5 4.5 0 004.5 13.5v1h2.25v-1a2.25 2.25 0 012.25-2.25h5.25V7z" />
        <circle cx="17.25" cy="4.75" r="1.5" />
      </g>
      <g fill="#ffc331">
        <path d="M7.5 17h2.25v-2.25H15A4.5 4.5 0 0019.5 10.5v-1h-2.25v1A2.25 2.25 0 0115 12.75H9.75V17z" />
        <circle cx="6.75" cy="19.25" r="1.5" />
      </g>
    </svg>
  );
};
