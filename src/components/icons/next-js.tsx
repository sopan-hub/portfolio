import { cn } from '@/lib/utils';
import React from 'react';

export const NextJs = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn('w-10 h-10', className)}
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="64" cy="64" r="64" fill="#000" />
      <path
        d="M102.75 35.25L64.0001 84.75L64 84.75L64 102.75L102.75 35.25Z"
        fill="url(#paint0_linear_140_22)"
      />
      <path
        d="M102.75 35.25L64 102.75V84.75L102.75 35.25Z"
        fill="url(#paint1_linear_140_22)"
      />
      <path
        d="M64.0001 84.75L64 84.75L25.25 35.25L64.0001 84.75Z"
        fill="white"
      />
      <path
        d="M64 102.75V84.75L25.25 35.25L64 102.75Z"
        fill="white"
        fillOpacity="0.2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_140_22"
          x1="64"
          y1="84.75"
          x2="102.75"
          y2="35.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_140_22"
          x1="102.75"
          y1="35.25"
          x2="64"
          y2="102.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
