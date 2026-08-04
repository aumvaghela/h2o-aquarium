import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  return (
    <footer className="bg-accent-dark pt-16 pb-8 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Massive Footer CTA Banner */}
        <div className="bg-[#112240]/80 backdrop-blur-md rounded-sm p-8 lg:p-12 mb-10 flex flex-col lg:flex-row items-center justify-between gap-8 border-t-4 border-accent-green elementor-shadow">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 heading-font">Ready to build your ecosystem?</h2>
            <p className="text-gray-400 font-medium text-lg max-w-2xl">
              Our experts are ready to guide you. Check current livestock availability or get a quote for a custom aquascape.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 shrink-0 w-full lg:w-auto justify-center lg:justify-start">
            <a 
              href="https://wa.me/919662676750" 
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wide flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform shadow-lg shadow-[#25D366]/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Inquire Now
            </a>
            <a 
              href="https://www.instagram.com/h2o_aquarium_vadodara" 
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wide flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform shadow-lg shadow-[#ee2a7b]/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </a>
            <a 
              href="https://g.page/r/CUAcv486Wl3NEBM/review" 
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-accent-dark px-8 py-4 rounded-sm font-bold uppercase tracking-wide flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform shadow-lg shadow-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#FFB800]">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              Leave Review
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-10 text-center sm:text-left">
          
          <div className="space-y-6 flex flex-col items-center sm:items-start">
            <Link href="#" className="flex items-center transition-transform hover:scale-105">
              <Logo />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Your definitive destination for premium freshwater livestock and bespoke aquascaping design.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold tracking-tight text-lg mb-6 heading-font">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Livestock', 'Products'].map((link) => (
                <li key={link}>
                  <Link href={`#${link === 'Livestock' ? 'fishes' : link.toLowerCase()}`} className="text-gray-400 hover:text-accent-green transition-colors text-sm font-medium flex items-center justify-center sm:justify-start gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-green opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold tracking-tight text-lg mb-6 heading-font">Services</h3>
            <ul className="space-y-4">
              {['Custom Aquariums', 'Maintenance', 'Exotic Fishes', 'Accessories'].map((link) => (
                <li key={link}>
                  <Link href="#services" className="text-gray-400 hover:text-accent-green transition-colors text-sm font-medium flex items-center justify-center sm:justify-start gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-green opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold tracking-tight text-lg mb-6 heading-font">Store Info</h3>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li>
                <span className="block text-white mb-1 font-bold">Address</span>
                GF 17, S Square complex,<br/>
                Subhanpura Rd, nr. Ganga Jamuna Hospital,<br/>
                Vadodara, Gujarat 390023
              </li>
              <li className="pt-2">
                <span className="block text-white mb-1 font-bold">Hours</span>
                Mon-Sun: 11:00 AM - 10:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-gray-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} H2O Aquarium & Pet’s. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
