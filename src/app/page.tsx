import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { FishCollection } from '@/components/sections/FishCollection';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { PlantedAquarium } from '@/components/sections/PlantedAquarium';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Bubbles } from '@/components/ui/Bubbles';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PetStore',
    name: 'H2O Aquarium & Pet’s',
    alternateName: ['H2O Aquarium', 'H2O Aquarium Vadodara', 'H2O Aquarium and Pets Vadodara'],
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5',
    '@id': 'https://h2o-aquarium.vercel.app',
    url: 'https://h2o-aquarium.vercel.app',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '185'
    },
    telephone: ['+919662676750', '+917405175021'],
    email: 'h2oaquariumandpets@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'GF 17, S Square complex, Subhanpura Rd',
      addressLocality: 'Vadodara',
      addressRegion: 'Gujarat',
      postalCode: '390023',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.316870,
      longitude: 73.167260
    },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '11:00',
      closes: '22:00'
    }]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-grow relative bg-white overflow-hidden">
        <Bubbles />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FishCollection />
        <CtaBanner />
        <PlantedAquarium />
        <ProductsSection />
        <WhyChooseUs />
        <GallerySection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
