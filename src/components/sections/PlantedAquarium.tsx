import React from 'react';
import { Leaf, FlaskConical, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const PLANTS = [
  'Java Fern', 'Anubias', 'Amazon Sword', 'Vallisneria', 
  'Java Moss', 'Monte Carlo', 'Bucephalandra', 'Cryptocoryne'
];

export function PlantedAquarium() {
  return (
    <section className="py-10 lg:py-12 bg-background relative" id="planted">
      
      {/* Background shape */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent-green/10 rounded-full blur-[100px] -translate-y-1/2 -z-10" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="relative h-[300px] sm:h-[400px] lg:h-[700px] w-full rounded-sm overflow-hidden elementor-shadow group">
            <Image 
              src="https://images.unsplash.com/photo-1524704654690-b56c05c78a00?q=80&w=1200&auto=format&fit=crop" 
              alt="Detailed planted aquarium"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 right-6 bg-accent-green text-white px-6 py-3 font-bold text-sm shadow-xl flex items-center gap-2">
              <Leaf size={16} /> 100% Organic Flora
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block flex items-center gap-2">
                Nature Aquarium
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-accent-dark mb-6 heading-font">
                Living Art.
              </h2>
              <p className="text-muted text-lg leading-relaxed font-medium body-font">
                Transform your space with a slice of pure nature. We offer complete planted aquarium solutions, from specialized Japanese aquatic soil to high-end CO2 injection systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-sm elementor-shadow border-t-4 border-accent-green">
                <Leaf strokeWidth={2} className="w-8 h-8 text-accent-green mb-6" />
                <h3 className="text-accent-dark font-bold tracking-tight mb-4 text-lg">Aquatic Flora</h3>
                <ul className="space-y-3 text-muted font-medium text-sm">
                  {PLANTS.slice(0, 4).map(plant => (
                    <li key={plant} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent-green" />
                      {plant}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-sm elementor-shadow border-t-4 border-accent-dark">
                <FlaskConical strokeWidth={2} className="w-8 h-8 text-accent-dark mb-6" />
                <h3 className="text-accent-dark font-bold tracking-tight mb-4 text-lg">Aquascaping Tech</h3>
                <ul className="space-y-3 text-muted font-medium text-sm">
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent-dark" /> CO2 Regulators</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent-dark" /> ADA Aqua Soil</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent-dark" /> Rare Hardscape</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent-dark" /> WRGB Lighting</li>
                </ul>
              </div>
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-dark text-white font-bold text-sm uppercase tracking-wide rounded-sm hover:bg-accent-green transition-colors shadow-lg"
            >
              Consult an Expert <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
