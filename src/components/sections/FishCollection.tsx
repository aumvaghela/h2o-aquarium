import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const FISH_COLLECTION = [
  { name: 'Arowana', img: '/images/fish_arowana_1785796829789.png', category: 'Predator' },
  { name: 'Flowerhorn', img: '/images/fish_flowerhorn_1785796820740.png', category: 'Cichlid' },
  { name: 'Oscar', img: '/images/fish_oscar_1785796839859.png', category: 'Cichlid' },
  { name: 'Koi', img: '/images/fish_koi_1785796811077.png', category: 'Pond' },
  { name: 'Gold Fish', img: '/images/fish_gold_fish_1785796801146.png', category: 'Coldwater' },
  { name: 'Guppy', img: '/images/fish_guppy_1785796857218.png', category: 'Livebearer' },
  { name: 'Neon Tetra', img: '/images/fish_neon_tetra_1785796866361.png', category: 'Tetra' },
  { name: 'Molly', img: '/images/fish_molly_1785796875140.png', category: 'Livebearer' },
  { name: 'Platy', img: '/images/fish_platy_1785796887093.png', category: 'Livebearer' },
  { name: 'Swordtail', img: '/images/fish_swordtail_1785796897804.png', category: 'Livebearer' },
];

export function FishCollection() {
  return (
    <section className="py-10 lg:py-12 bg-background relative" id="fishes">
      {/* Soft background shape */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-green/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Our Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-accent-dark heading-font">
              Livestock &amp; Species
            </h2>
          </div>
          <a href="https://wa.me/919662533735" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-accent-green text-white font-bold text-sm tracking-wide uppercase hover:bg-accent-dark transition-colors flex items-center justify-center gap-2 rounded-sm elementor-shadow">
            Inquire Stock <ArrowRight size={16} />
          </a>
        </div>

        {/* Aquavist style floating cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {FISH_COLLECTION.map((fish) => (
            <div
              key={fish.name}
              className="bg-white rounded-sm overflow-hidden elementor-shadow group"
            >
              <div className="aspect-square relative overflow-hidden bg-white">
                <Image
                  src={fish.img}
                  alt={fish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                />
                <div className="absolute top-4 left-4 bg-accent-green text-white text-xs font-bold px-3 py-1 rounded-sm shadow-md">
                  {fish.category}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-accent-dark font-bold text-lg mb-2 heading-font">{fish.name}</h4>
                <a href="#contact" className="text-accent-green font-bold text-sm flex items-center gap-2">
                  Inquire Now <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
