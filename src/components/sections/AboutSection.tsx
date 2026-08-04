import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-10 lg:py-12 bg-white" id="about">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-accent-dark mb-6 heading-font leading-[1.1]">
              We Are The Most <br/>
              <span className="text-accent-green">Complete Aquarium</span>
            </h2>
            <p className="text-lg text-muted font-medium leading-relaxed mb-10 body-font">
              Located in the heart of the city, H2O Aquarium & Pet’s is the definitive destination for premium freshwater livestock and aquascaping design. We believe an aquarium is more than glass and water—it is a living piece of art.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <span className="font-bold text-accent-dark">Bespoke Design</span>
                <span className="text-accent-green font-bold">100%</span>
              </div>
              <div className="flex items-center justify-between border-b border-border pb-4">
                <span className="font-bold text-accent-dark">Healthy Livestock</span>
                <span className="text-accent-green font-bold">100%</span>
              </div>
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-dark text-white font-bold text-sm uppercase tracking-wide rounded-sm hover:bg-accent-green transition-colors shadow-lg"
            >
              Contact Us <ArrowRight size={16} />
            </a>
          </div>

          <div className="w-full lg:w-1/2 relative order-1 lg:order-2 h-[300px] sm:h-[400px] lg:h-[600px] flex items-center justify-center">
            {/* Main Image */}
            <div className="absolute right-0 top-0 w-[80%] h-[90%] rounded-sm overflow-hidden elementor-shadow z-10">
              <Image 
                src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=1200&auto=format&fit=crop" 
                alt="Beautiful freshwater aquarium fish" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
            
            {/* Dynamic CSS Animated Ring */}
            <div className="absolute left-0 bottom-0 w-[140px] h-[140px] md:w-[220px] md:h-[220px] bg-accent-dark rounded-full overflow-hidden border-4 md:border-8 border-white elementor-shadow z-20 flex items-center justify-center -translate-x-4 translate-y-4 md:-translate-x-6 md:translate-y-6">
              
              {/* Spinning Text Ring */}
              <div className="absolute inset-2 border border-white/20 rounded-full" />
              <div className="absolute inset-6 border border-white/10 rounded-full" />
              
              <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                  <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                  <text className="text-[12px] font-bold fill-accent-green uppercase tracking-[0.2em] font-sans">
                    <textPath href="#circlePath" startOffset="0%">
                      H2O Aquarium • Premium Quality • 
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Icon */}
              <div className="relative z-10 w-12 h-12 md:w-20 md:h-20 bg-accent-green rounded-full flex items-center justify-center elementor-shadow animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.46-3.44 6-7 6s-7.56-2.54-8.5-6Z"/>
                  <path d="M18 12h.01"/>
                  <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/>
                  <path d="M10.46 7.26C12.05 5.07 14.12 3.25 17 3c-1.37 1.95-1.07 4.75 0 6"/>
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
