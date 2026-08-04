import React from 'react';
import { Fish, Droplets, Wrench, Activity } from 'lucide-react';

const SERVICES = [
  {
    icon: <Fish strokeWidth={2} className="w-12 h-12 text-white mb-6" />,
    title: 'Livestock Shopping',
    desc: 'Exclusive access to rare, healthy freshwater species.'
  },
  {
    icon: <Droplets strokeWidth={2} className="w-12 h-12 text-white mb-6" />,
    title: 'Aquatic Plants',
    desc: 'Lush flora for nature aquariums and Iwagumi scapes.'
  },
  {
    icon: <Activity strokeWidth={2} className="w-12 h-12 text-white mb-6" />,
    title: 'Expert Maintenance',
    desc: 'Professional care for pristine water clarity.'
  },
  {
    icon: <Wrench strokeWidth={2} className="w-12 h-12 text-white mb-6" />,
    title: 'Nano Aquariums',
    desc: 'Custom glasswork and high-tech nano ecosystems.'
  },
];

export function ServicesSection() {
  return (
    <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-white" id="services">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="bg-accent-green p-10 text-center flex flex-col items-center justify-center rounded-sm elementor-shadow group hover:bg-accent-dark transition-colors duration-300"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 heading-font">{service.title}</h3>
              <p className="text-white/80 font-medium text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
