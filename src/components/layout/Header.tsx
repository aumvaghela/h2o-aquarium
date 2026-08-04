'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Logo } from '@/components/ui/Logo';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Livestock', href: '#fishes' },
  { name: 'Products', href: '#products' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Floating Dynamic Header */}
      <header 
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-full ${
          scrolled 
            ? 'top-4 max-w-[95%] lg:max-w-6xl bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10 rounded-full py-3 px-6 lg:px-8 border border-white/50' 
            : 'top-0 max-w-full bg-transparent py-8 px-6 lg:px-12'
        }`}
      >
        <div className="flex items-center justify-between w-full">
          <Link href="#" className="flex items-center gap-3 z-50 group">
            <div className="transition-transform group-hover:scale-105">
              <Logo dark={scrolled} className={scrolled ? "scale-90" : "scale-100"} />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  scrolled ? 'text-muted hover:text-accent-green' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-6 ml-4 pl-6 border-l border-white/20">
              <a 
                href="https://www.instagram.com/h2o_aquarium_vadodara" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`hover:scale-110 transition-transform hover:text-accent-green ${scrolled ? 'text-accent-dark' : 'text-white'}`}
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://wa.me/919662676750"
                target="_blank" 
                rel="noopener noreferrer"
                className={`px-6 py-2.5 font-bold text-sm uppercase tracking-wide rounded-full transition-all shadow-lg flex items-center gap-2 ${
                  scrolled 
                    ? 'bg-[#25D366] text-white hover:bg-accent-dark shadow-[#25D366]/30' 
                    : 'bg-[#25D366] text-white hover:bg-white hover:text-accent-dark shadow-black/20'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                WhatsApp
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle (Hamburger) */}
          <button 
            className="lg:hidden z-50 w-12 h-12 rounded-full flex items-center justify-center bg-accent-green text-white shadow-xl hover:scale-105 transition-transform"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Fullscreen Cinematic Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-accent-dark flex flex-col justify-between"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6">
              <div className="transition-transform hover:scale-105">
                <Logo />
              </div>
              <button 
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-accent-green transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-6 px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl sm:text-5xl font-bold tracking-tight text-white hover:text-accent-green transition-colors heading-font uppercase"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Footer (Contact Info) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="p-8 bg-black/20 border-t border-white/10"
            >
              <div className="flex flex-col gap-4">
                <a href="tel:+919662676750" className="flex items-center gap-3 text-gray-300 hover:text-white">
                  <Phone size={18} className="text-accent-green shrink-0" />
                  <span className="font-bold tracking-widest">+91 96626 76750</span>
                </a>
                <a href="tel:+917405175021" className="flex items-center gap-3 text-gray-300 hover:text-white">
                  <Phone size={18} className="text-accent-green shrink-0 opacity-0" />
                  <span className="font-bold tracking-widest">+91 74051 75021</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={18} className="text-accent-green" />
                  <span className="font-medium text-sm">Vadodara, Gujarat</span>
                </div>
                <div className="w-full h-px bg-white/10 my-2" />
                <div className="flex items-center gap-4">
                  <a 
                    href="https://wa.me/919662676750" 
                    target="_blank" rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 bg-[#25D366] text-white py-3 px-6 rounded-full font-bold uppercase tracking-wide text-center text-sm shadow-lg shadow-[#25D366]/30 flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    WhatsApp
                  </a>
                  <a href="https://www.instagram.com/h2o_aquarium_vadodara" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent-green transition-colors shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
