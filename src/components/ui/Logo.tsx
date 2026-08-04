import React from 'react';
import Image from 'next/image';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className} rounded-xl overflow-hidden`}>
      <Image
        src="/images/rudra_aquarium_logo_1785796773022.png"
        alt="Rudra Aquarium Logo"
        fill
        className="object-contain"
        sizes="100px"
      />
    </div>
  );
}
