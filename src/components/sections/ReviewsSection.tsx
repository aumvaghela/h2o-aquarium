import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Ravi Patel',
    review: 'Very cooperative and knowledgeable team. They explained everything about keeping fish and maintaining a planted aquarium. Excellent guidance for beginners!',
  },
  {
    name: 'Amit Shah',
    review: 'Great variety of healthy freshwater fishes at reasonable prices. Purchased an Arowana which is very active and healthy. Highly recommended.',
  },
  {
    name: 'Neha Desai',
    review: 'Nice place with proper guidance. Huge collection of plants and aquarium soil. Best shop in Vallabh Vidyanagar for aquascaping.',
  },
  {
    name: 'Suresh Kumar',
    review: 'Excellent collection of fishes, fish food, and accessories. Everything needed for a premium planted setup is available right here.',
  },
  {
    name: 'Vikram Singh',
    review: 'The quality of their custom glass tanks is unmatched. Built a 4-foot Iwagumi scape with their help and it looks absolutely stunning.',
  },
  {
    name: 'Priya Mehta',
    review: 'Best aquarium shop in Anand! The fish are always healthy, tanks are super clean, and the staff is genuinely passionate about the hobby.',
  }
];

export function ReviewsSection() {
  // Duplicate reviews to create a seamless infinite loop
  const duplicatedReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section className="py-16 lg:py-20 bg-background relative overflow-hidden" id="reviews">
      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-accent-green/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 lg:mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-accent-dark mb-6 heading-font">
              Client Experiences.
            </h2>
          </div>
          
          <div className="flex items-center gap-4 bg-white rounded-full px-6 py-3 elementor-shadow">
            <div className="flex text-[#FFB800]">
              {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <span className="text-accent-dark text-sm font-bold tracking-tight">5.0 on Google Maps</span>
          </div>
        </div>
      </div>

      {/* Cinematic Infinite Auto-Scroll Marquee */}
      <div className="relative w-full overflow-hidden py-4 flex flex-col gap-6">
        
        {/* Top Row (Scrolls Left) */}
        <div className="flex w-max animate-[scroll_80s_linear_infinite]">
          {duplicatedReviews.map((review, idx) => (
            <div
              key={idx}
              className="w-[350px] lg:w-[450px] shrink-0 bg-white p-10 mx-4 rounded-sm elementor-shadow group border-t-4 border-transparent hover:border-accent-green transition-colors duration-300"
            >
              <div className="flex text-[#FFB800] mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-muted mb-10 leading-relaxed font-medium italic">
                &quot;{review.review}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-dark text-white flex items-center justify-center font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <h4 className="text-accent-dark font-bold heading-font">{review.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row (Scrolls Right) */}
        <div className="flex w-max animate-[scroll-reverse_80s_linear_infinite] ml-[-200px]">
          {duplicatedReviews.map((review, idx) => (
            <div
              key={idx + 100}
              className="w-[350px] lg:w-[450px] shrink-0 bg-[#112240] p-10 mx-4 rounded-sm elementor-shadow group border-t-4 border-transparent hover:border-accent-green transition-colors duration-300"
            >
              <div className="flex text-[#FFB800] mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 mb-10 leading-relaxed font-medium italic">
                &quot;{review.review}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-green text-white flex items-center justify-center font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <h4 className="text-white font-bold heading-font">{review.name}</h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
