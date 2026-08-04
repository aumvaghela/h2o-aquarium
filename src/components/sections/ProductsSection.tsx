import React from 'react';
import { Box, Droplet, Zap, HeartPulse, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  {
    icon: <Box strokeWidth={2} className="w-10 h-10 text-accent-green mb-6 group-hover:text-white transition-colors" />,
    title: 'Tanks & Hardscape',
    items: ['Rimless Glass Tanks', 'Custom Cabinetry', 'Aquatic Soil & Sand', 'Dragon & Seiryu Stone', 'Spider Wood']
  },
  {
    icon: <Droplet strokeWidth={2} className="w-10 h-10 text-accent-green mb-6 group-hover:text-white transition-colors" />,
    title: 'Filtration',
    items: ['Canister Filters', 'Hang-On-Back (HOB)', 'Internal Skimmers', 'Filter Media', 'Lily Pipes']
  },
  {
    icon: <Zap strokeWidth={2} className="w-10 h-10 text-accent-green mb-6 group-hover:text-white transition-colors" />,
    title: 'Technology',
    items: ['WRGB LED Lights', 'Inline Heaters', 'Silent Air Pumps', 'Digital Thermometers', 'CO2 Systems']
  },
  {
    icon: <HeartPulse strokeWidth={2} className="w-10 h-10 text-accent-green mb-6 group-hover:text-white transition-colors" />,
    title: 'Nutrition & Health',
    items: ['Premium Flakes/Pellets', 'Water Conditioners', 'Beneficial Bacteria', 'Liquid Fertilizers', 'Medications']
  }
];

export function ProductsSection() {
  return (
    <section className="py-16 lg:py-20 bg-white" id="products">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Premium Hardware
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-accent-dark mb-6 heading-font">
            Professional Equipment
          </h2>
          <p className="text-muted font-medium leading-relaxed text-lg body-font">
            We exclusively stock equipment proven to deliver results in high-tech planted tanks and demanding freshwater setups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-sm p-8 elementor-shadow group hover:bg-accent-green transition-colors duration-300 border-b-4 border-accent-green hover:border-accent-dark"
            >
              {cat.icon}
              <h3 className="text-xl font-bold text-accent-dark mb-6 heading-font group-hover:text-white transition-colors">{cat.title}</h3>
              <ul className="space-y-4 mb-8">
                {cat.items.map(item => (
                  <li key={item} className="text-muted font-medium text-sm group-hover:text-white/90 transition-colors flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-green group-hover:bg-white" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="text-accent-green font-bold text-sm flex items-center gap-2 group-hover:text-white transition-colors">
                View Catalog <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
