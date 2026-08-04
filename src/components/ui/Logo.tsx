import React from 'react';
import Image from 'next/image';

export function Logo({ className = "", dark = false }: { className?: string, dark?: boolean }) {
  return (
    <div className={`relative ${className} flex items-center`}>
      <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 drop-shadow-xl transition-all">
        <Image 
          src="/logo.png" 
          alt="H2O Aquarium & Pet's Logo" 
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
