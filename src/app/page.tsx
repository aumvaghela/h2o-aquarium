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
import { ContactSection } from '@/components/sections/ContactSection';
import { Bubbles } from '@/components/ui/Bubbles';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PetStore',
    name: 'Rudra Aquarium',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5',
    '@id': 'https://rudra-aquarium.vercel.app',
    url: 'https://rudra-aquarium.vercel.app',
    telephone: '+919662533735',
    email: 'jigarmachhi810@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bhaikaka Statue Garden, 691 Prakruti Bunglow, Beside O.B.C. Bank, Near Bhai Kaka Circle',
      addressLocality: 'Vallabh Vidyanagar, Anand',
      addressRegion: 'Gujarat',
      postalCode: '388120',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.5503487,
      longitude: 72.9159939
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
      opens: '10:00',
      closes: '20:30'
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
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
