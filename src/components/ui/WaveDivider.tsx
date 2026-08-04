'use client';

import React from 'react';

export function WaveDivider({ className = "", position = "bottom" }: { className?: string, position?: "top" | "bottom" }) {
  return (
    <div className={`absolute left-0 w-full overflow-hidden leading-[0] ${position === 'bottom' ? 'bottom-0' : 'top-0 rotate-180'} ${className}`}>
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill="currentColor"
          className="opacity-25"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05c28.29,21.43,62.15,31.95,97.12,32.74,38.16.85,75.44-8.87,110.8-21.75,34.42-12.52,66.9-29,101.44-39.67,41.49-12.78,85.67-15.65,128.71-8.54,43.25,7.17,84.4,22.75,126.79,35.45,43.37,13,88.75,22.06,134.82,23.11,46,.82,92.05-6.84,136.43-20.91,37.38-11.83,72.82-28.7,110.6-40.42,38.27-11.86,79.52-16.14,120.37-12.06,31.81,3.17,62.97,12.3,92.83,25.33,12.51,5.47,24.63,11.59,36.32,18.15V0Z"
          fill="currentColor"
          className="opacity-50"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
}
