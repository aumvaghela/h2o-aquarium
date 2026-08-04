import React from 'react';
import { PhoneCall } from 'lucide-react';

export function CtaBanner() {
  return (
    <section className="bg-accent-dark py-16">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 heading-font">
            Ready to build your dream ecosystem?
          </h2>
          <p className="text-gray-300 font-medium text-lg">
            Our experts are ready to guide you. Call us or visit the store today.
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-6">
          <div className="flex items-center gap-4 text-white">
            <div className="w-12 h-12 rounded-full bg-accent-green flex items-center justify-center animate-pulse">
              <PhoneCall size={20} className="text-white" />
            </div>
            <div>
              <span className="block text-sm text-gray-400 font-bold uppercase tracking-widest">Call Us Now</span>
              <a href="tel:+919662533735" className="text-2xl font-bold heading-font hover:text-accent-green transition-colors">+91 96625 33735</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
