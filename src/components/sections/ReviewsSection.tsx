import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

const REVIEWS = [
  {
    name: 'Nirav Chaudhari',
    image: '/images/reviews/nirav_chaudhari.png',
    review: 'Had a great experience purchasing my first large fish tank! The shop is perfect for anyone wanting to learn more about fish. The owner explained everything in detail and guided us through the entire setup process. Highly recommended!',
  },
  {
    name: 'Srijana Chetri',
    image: '/images/reviews/srijana_chetri.png',
    review: 'Recently picked some new babies from the store H2oaquarium and the staff was knowledgeable and helped me choose the right species for my mini aquarium setup. All the fish were healthy, active, and clearly well cared for. The tanks were clean, and the variety was impressive. I’ll definitely be coming back for more in the future. Highly recommended for any fish enthusiast!',
  },
  {
    name: 'MAULIK THAKAR',
    image: '/images/reviews/maulik_thakar.png',
    review: 'Amazing Aquarium – Eye-Catching & Peaceful! This aquarium looks absolutely stunning! The vibrant neon-colored fish under the blue LED lighting create a magical and calming atmosphere. The tank is clean, well-maintained, and beautifully arranged with gravel and proper filtration. Watching the fish swim is very relaxing and instantly adds life and beauty to the room. Perfect for home, office, or shop décor. Truly a joy for fish lovers — highly recommended! Thanks h2o aquarium 🫠😇',
  },
  {
    name: 'Dimpu12345 Sharma',
    image: '/images/reviews/dimpu12345_sharma.png',
    review: 'My experience with this store was fantastic. I purchased a large aquarium for a very reasonable price and received valuable information about caring for fish and maintaining the aquarium. The staff was extremely helpful, offering assistance even after I set up the aquarium at home. I highly recommend this store for anyone looking to buy an aquarium or fish.',
  },
  {
    name: 'IMRAN shaikh',
    image: '/images/reviews/imran_shaikh.png',
    review: 'Conversation Mashallah, good service and good communication and very good. I really liked your fish aquarium. You are very happy with the decorating you do and at Broadley. No one has been able to give me the service that you give me even after coming home, after working at your place and purchasing from here. Yaar Likely, I like your store very much.',
  },
  {
    name: 'rutu patel',
    image: '/images/reviews/rutu_patel.png',
    review: 'after searching almost all over Vadodara for the best place to buy fish for my tank, I finally found the perfect store H2O Aquarium. Their prices are the best I came across in the entire city, and the quality is amazing. The owner and staff were extremely friendly, explained everything in detail, and guided me very well. The fish I bought are healthy and active, which shows how well they maintain them. I truly loved their service and overall experience. Highly recommended!!!',
  },
  {
    name: 'Hiren Rajput',
    image: '/images/reviews/hiren_rajput.png',
    review: 'Very nice fishes and nice price. The variety they offer is fantastic, and everything is super affordable. Really happy with my purchase and I\'ll definitely be visiting again soon!',
  },
  {
    name: 'Binita Banerjee',
    image: '/images/reviews/binita_banerjee.png',
    review: 'A truly magical place for anyone who loves aquariums! The tanks are crystal clear and the owner is incredibly passionate. They helped me design my dream planted tank from scratch.',
  }
];

export function ReviewsSection() {
  // Duplicate reviews to create a seamless infinite loop
  const duplicatedReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section className="py-10 lg:py-12 bg-background relative overflow-hidden" id="reviews">
      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-accent-green/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 lg:mb-8 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-accent-dark mb-6 heading-font">
              Client Experiences.
            </h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 bg-white rounded-full px-6 py-3 elementor-shadow">
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
              </svg>
              <div className="flex text-[#FFB800]">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
              </div>
            </div>
            <div className="w-px h-6 bg-gray-200 hidden sm:block"></div>
            <a href="https://g.page/r/CUAcv486Wl3NEBM/review" target="_blank" rel="noopener noreferrer" className="text-accent-dark hover:text-accent-green text-sm font-bold tracking-tight transition-colors">Review us on Google</a>
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
              className="w-[350px] lg:w-[450px] shrink-0 bg-white p-6 md:p-8 mx-4 rounded-sm elementor-shadow group border-t-4 border-transparent hover:border-accent-green transition-colors duration-300 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex text-[#FFB800]">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <svg width="24" height="24" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                </svg>
              </div>
              <p className="text-muted mb-6 leading-relaxed font-medium italic line-clamp-4">
                &quot;{review.review}&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                {review.image ? (
                  <Image src={review.image} alt={review.name} width={40} height={40} className="rounded-full object-cover w-10 h-10 elementor-shadow" unoptimized />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-accent-dark text-white flex items-center justify-center font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                )}
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
              className="w-[350px] lg:w-[450px] shrink-0 bg-[#112240] p-6 md:p-8 mx-4 rounded-sm elementor-shadow group border-t-4 border-transparent hover:border-accent-green transition-colors duration-300 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex text-[#FFB800]">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <svg width="24" height="24" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                </svg>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed font-medium italic line-clamp-4">
                &quot;{review.review}&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                {review.image ? (
                  <Image src={review.image} alt={review.name} width={40} height={40} className="rounded-full object-cover w-10 h-10 elementor-shadow" unoptimized />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-accent-green text-white flex items-center justify-center font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                )}
                <h4 className="text-white font-bold heading-font">{review.name}</h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
