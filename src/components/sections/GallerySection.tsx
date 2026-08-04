'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  { src: '/images/gallery/gallery-1.jpg', alt: 'Beautiful H2O Aquarium tank display with vibrant fishes' },
  { src: '/images/gallery/gallery-2.jpg', alt: 'Large custom aquarium setup on wooden stand' },
  { src: '/images/gallery/gallery-3.jpg', alt: 'Small desktop planted tanks with LED lighting' },
  { src: '/images/gallery/gallery-4.jpg', alt: 'Classic glass aquarium setup with goldfish' },
  { src: '/images/gallery/gallery-5.jpg', alt: 'Office aquarium display with beautiful lighting and aquascaping' },
  { src: '/images/gallery/gallery-6.jpg', alt: 'Turtle terrarium setup with basking area' },
  { src: '/images/gallery/gallery-7.jpg', alt: 'Blue cichlid exotic freshwater fish' },
  { src: '/images/gallery/gallery-8.jpg', alt: 'Group of angelfish swimming' },
  { src: '/images/gallery/gallery-9.jpg', alt: 'Beautiful red and blue betta fish' },
  { src: '/images/gallery/gallery-10.jpg', alt: 'Close up of premium oranda goldfish' },
  { src: '/images/gallery/gallery-11.jpg', alt: 'Large premium tank display with parrot cichlids' },
  { src: '/images/gallery/gallery-12.jpg', alt: 'Massive planted nature aquarium display' },
  { src: '/images/gallery/gallery-13.jpg', alt: 'Storefront of H2O Aquarium & Pets' },
  { src: '/images/gallery/gallery-14.jpg', alt: 'Massive selection of glass tanks and aquariums' },
  { src: '/images/gallery/gallery-15.jpg', alt: 'Aquascaping rock decor and hardscape materials' },
  { src: '/images/gallery/gallery-16.jpg', alt: 'Store shelves stocked with premium fish food and aquarium supplies' },
  { src: '/images/gallery/gallery-17.jpg', alt: 'Exterior view of S Square complex housing H2O Aquarium & Pets' },
];

export function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth - 64 : 400;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth - 64 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If we reached the end, scroll back to the start smoothly
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRight();
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section 
      className="py-10 lg:py-12 bg-gray-50 relative overflow-hidden" 
      id="gallery"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Our Gallery
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-accent-dark mb-4 heading-font">
              Glimpses of Our Work.
            </h2>
            <p className="text-muted text-lg leading-relaxed font-medium">
              Explore our collection of beautiful custom aquariums, meticulously maintained tanks, and vibrant, healthy livestock right from our store.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-accent-dark hover:bg-accent-green hover:text-white transition-colors duration-300 elementor-shadow shrink-0"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-accent-dark hover:bg-accent-green hover:text-white transition-colors duration-300 elementor-shadow shrink-0"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden px-6 lg:px-12">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 -mx-6 px-6 lg:-mx-12 lg:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className="snap-center shrink-0 w-[280px] sm:w-[350px] lg:w-[400px] relative group rounded-2xl overflow-hidden elementor-shadow cursor-pointer border-4 border-transparent hover:border-accent-green transition-all duration-300"
            >
              <div className="absolute inset-0 bg-accent-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
