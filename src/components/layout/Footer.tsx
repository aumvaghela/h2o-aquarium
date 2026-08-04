import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-accent-dark pt-16 pb-8 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Massive Footer CTA Banner */}
        <div className="bg-[#112240]/80 backdrop-blur-md rounded-sm p-8 lg:p-12 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 border-t-4 border-accent-green elementor-shadow">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 heading-font">Ready to build your ecosystem?</h2>
            <p className="text-gray-400 font-medium text-lg max-w-2xl">
              Our experts are ready to guide you. Check current livestock availability or get a quote for a custom aquascape.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <a 
              href="https://wa.me/919662533735" 
              target="_blank" rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wide flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform shadow-lg shadow-[#25D366]/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Inquire Now
            </a>
            <a 
              href="https://www.instagram.com/rudra_aquarium/" 
              target="_blank" rel="noopener noreferrer"
              className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wide flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform shadow-lg shadow-[#ee2a7b]/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-5 space-y-6">
            <Link href="#" className="flex items-center w-max transition-transform hover:scale-105">
              <Image 
                src="/images/logo_light.png" 
                alt="Rudra Aquarium Logo" 
                width={240} 
                height={80} 
                className="object-contain h-[60px] w-auto drop-shadow-lg" 
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-medium max-w-sm">
              Anand&apos;s definitive destination for premium freshwater livestock and bespoke aquascaping design.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-white font-bold tracking-tight text-lg mb-6 heading-font">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Livestock', 'Products'].map((link) => (
                <li key={link}>
                  <Link href={`#${link === 'Livestock' ? 'fishes' : link.toLowerCase()}`} className="text-gray-400 hover:text-accent-green transition-colors text-sm font-medium flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-green opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-white font-bold tracking-tight text-lg mb-6 heading-font">Store Info</h3>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li>
                <span className="block text-white mb-1 font-bold">Address</span>
                Bhaikaka Statue Garden, <br/>
                691 Prakruti Bunglow, Vallabh Vidyanagar,<br/>
                Anand, Gujarat 388120
              </li>
              <li className="pt-2">
                <span className="block text-white mb-1 font-bold">Hours</span>
                Mon-Sun: 10:00 AM - 8:30 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Rudra Aquarium. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
