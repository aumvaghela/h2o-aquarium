import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "H2O Aquarium & Pet's | Premium Aquarium Shop in Vadodara",
  description: "Visit H2O Aquarium & Pet's in Vadodara for healthy ornamental fishes, planted aquarium setups, aquarium accessories, tanks, fish food, and professional aquascaping guidance.",
  keywords: [
    // Core Brand & Location
    "H2O Aquarium", "H2O Aquarium Vadodara", "H2O Pets", "H2O Aquarium Subhanpura", 
    "Pet Store Subhanpura Vadodara",
    
    // High-Traffic Local Searches
    "Aquarium Shop Vadodara", "Best Aquarium Store in Vadodara", "Fish Shop near me Vadodara", 
    "Fish Aquarium Price in Vadodara", "Aquarium Fish Market Vadodara", "Where to buy aquarium fish in Vadodara",
    "Best Pet Shop in Vadodara", "Buy Aquarium Online Vadodara",
    
    // Products & Setup
    "Live Aquarium Fish Vadodara", "Custom Fish Tanks Vadodara", "Aquarium Accessories Vadodara", 
    "Aquarium Filter and Pump Vadodara", "Aquarium Glass Tanks Vadodara", "Fish Tank Setup Vadodara",
    
    // Specialized Niches
    "Planted Aquarium Vadodara", "Aquascaping Vadodara", "Aquascaping Plants Vadodara",
    "Aquarium Soil and Plants", "Marine Aquarium Vadodara", 
    
    // Livestock Species
    "Exotic Fish Shop Vadodara", "Freshwater Fishes Vadodara", "Arowana Fish Vadodara", 
    "Discus Fish Vadodara", "Flowerhorn Fish Vadodara", "Koi Fish Vadodara", "Tetra Fish Vadodara",
    
    // Services
    "Aquarium Maintenance Services Vadodara", "Aquarium Cleaning Vadodara"
  ],
  metadataBase: new URL("https://aqualife-store.vercel.app"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "H2O Aquarium & Pet’s",
    description: "Your Trusted Aquarium Store. Healthy ornamental fishes, planted setups, and expert guidance.",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: '/icon.png?v=5',
  },
  twitter: {
    card: "summary_large_image",
    title: "H2O Aquarium & Pet’s",
    description: "Your Trusted Aquarium Store. Healthy ornamental fishes, planted setups, and expert guidance.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--background)] text-[var(--foreground)] selection:bg-accent-green selection:text-white">
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-G34CC3R03Y" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-G34CC3R03Y');
          `}
        </Script>

        {children}
        
        {/* Floating WhatsApp CTA */}
        <a 
          href="https://wa.me/919662676750" 
          className="whatsapp-float" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Chat with us on WhatsApp"
        >
          <svg viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
