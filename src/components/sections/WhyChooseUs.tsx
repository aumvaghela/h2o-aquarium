import React from 'react';
import { Shield, Sparkles, Gem, Layers } from 'lucide-react';

const REASONS = [
  { icon: <Shield strokeWidth={2} />, title: 'Expert Guidance', desc: 'Consultations tailored specifically to your freshwater or planted ecosystem.' },
  { icon: <Sparkles strokeWidth={2} />, title: 'Pristine Livestock', desc: 'All fishes undergo strict quarantine and observation in UV-sterilized water.' },
  { icon: <Gem strokeWidth={2} />, title: 'Architectural Quality', desc: 'We only stock top-tier, reliable aquarium brands and rimless tanks.' },
  { icon: <Layers strokeWidth={2} />, title: 'Curated Flora', desc: 'An extensive, hand-picked collection of rare aquatic plants and mosses.' },
];

export function WhyChooseUs() {
  return (
    <section className="py-10 lg:py-12 bg-accent-dark relative overflow-hidden" id="why-us">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-green/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 justify-between items-start">
          
          <div className="max-w-xl lg:sticky lg:top-32">
            <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Why H2O Aquarium
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 heading-font">
              The H2O Aquarium Standard.
            </h2>
            <p className="text-gray-300 font-medium leading-relaxed text-lg mb-10">
              We do not just sell fish. We partner with you to engineer and sustain beautiful, balanced aquatic ecosystems.
            </p>
            <div className="w-16 h-2 bg-accent-green rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-[60%]">
            {REASONS.map((reason, idx) => (
              <div
                key={reason.title}
                className="bg-[#112240] p-8 rounded-sm elementor-shadow hover:-translate-y-2 transition-transform duration-300 group border-t-4 border-transparent hover:border-accent-green"
              >
                <div className="w-14 h-14 bg-[#0a192f] rounded-full flex items-center justify-center text-accent-green mb-6 group-hover:bg-accent-green group-hover:text-white transition-colors">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 heading-font">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">{reason.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
