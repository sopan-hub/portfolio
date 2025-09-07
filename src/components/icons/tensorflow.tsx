import { cn } from '@/lib/utils';
import React from 'react';

export const Tensorflow = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('w-10 h-10', className)}
    >
      <path
        d="M5.13 4.28L2.5 5.86v6.28l2.63 1.58v-6.3l5.25 3.03v3.13l-5.25 3.03v3.16l5.25 3.03L13 21.14V18l5.25 3.03v-6.28L13 11.72v6.3l-2.62-1.52v-3.12l5.25-3.03V5.86L13 2.83 7.75 5.86v3.12l2.62-1.51V4.28h-5.24z"
        fill="#FF6F00"
      />
    </svg>
  );
};
