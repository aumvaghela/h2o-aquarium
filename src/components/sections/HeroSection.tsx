import React from 'react';
import Image from 'next/image';
import { ArrowRight, Waves, ShieldCheck } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center overflow-hidden" id="home">
      
      {/* Background Image with Aquavist-style Deep Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/custom_hero.jpg"
          alt="Premium Planted Aquarium with Discus"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/90 via-[#0a192f]/70 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col xl:flex-row xl:items-end justify-between pt-32 pb-24 lg:pb-32 gap-12 xl:gap-8">
        <div className="max-w-2xl shrink-0">
          <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Premium Aquarium Store
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 heading-font leading-[1.1]">
            Turning Your Space Into <br />
            <span className="text-accent-green">An Underwater Paradise</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 font-medium leading-relaxed max-w-xl body-font">
            Vadodara&apos;s definitive gallery for exotic freshwater livestock, custom aquascapes, and professional aquarium setup and guidance.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#fishes" 
              className="w-full sm:w-auto px-8 py-4 bg-accent-green text-white font-bold text-sm tracking-wide uppercase hover:bg-accent-dark transition-colors flex items-center justify-center gap-2 rounded-sm"
            >
              Get Started
            </a>
            <a 
              href="#about" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-sm tracking-wide uppercase hover:bg-white hover:text-accent-dark transition-colors flex items-center justify-center rounded-sm"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Aquavist-style Floating Boxes */}
        <div className="hidden md:flex flex-row gap-4 w-full xl:w-auto justify-start xl:justify-end xl:-mb-12">
          <div className="bg-[#112240]/95 backdrop-blur-md p-6 lg:p-10 w-full md:w-[320px] rounded-sm elementor-shadow border-t-4 border-accent-green group hover:-translate-y-2 transition-transform duration-300">
            <Waves className="w-10 h-10 text-accent-green mb-6" />
            <h3 className="text-xl font-bold text-white mb-3 heading-font">Aquarium Design</h3>
            <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6">
              Bespoke planted tanks and architectural glasswork designed for your space.
            </p>
            <a href="#services" className="text-accent-green font-bold text-sm flex items-center gap-2 group-hover:text-white transition-colors">
              Learn More <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="bg-[#112240]/95 backdrop-blur-md p-6 lg:p-10 w-full md:w-[320px] rounded-sm elementor-shadow border-t-4 border-accent-green group hover:-translate-y-2 transition-transform duration-300">
            <ShieldCheck className="w-10 h-10 text-accent-green mb-6" />
            <h3 className="text-xl font-bold text-white mb-3 heading-font">Complete Fishes</h3>
            <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6">
              Healthy, quarantined freshwater species from Arowanas to Neon Tetras.
            </p>
            <a href="#fishes" className="text-accent-green font-bold text-sm flex items-center gap-2 group-hover:text-white transition-colors">
              Learn More <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
