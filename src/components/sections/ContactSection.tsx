import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation2 } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-10 lg:py-12 bg-background relative" id="contact">
      {/* Background shape */}
      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-accent-dark -z-10" />

      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="bg-white rounded-sm elementor-shadow overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            <div className="p-10 lg:p-16">
              <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-accent-dark mb-6 heading-font">
                Experience the Gallery.
              </h2>
              <p className="text-muted text-lg leading-relaxed font-medium mb-8">
                Drop by to explore our freshwater collection, or reach out to consult on your next aquascape project. We are always ready to assist.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-accent-green/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-accent-green w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-accent-dark mb-2">Store Address</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      GF 17, S Square complex,<br />
                      Subhanpura Rd, nr. Ganga Jamuna Hospital,<br />
                      Vadodara, Gujarat 390023
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-accent-green/10 flex items-center justify-center shrink-0">
                    <Phone className="text-accent-green w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-accent-dark mb-2">Direct Line</h3>
                    <a href="tel:+919662676750" className="text-muted text-sm hover:text-accent-green transition-colors block">+91 96626 76750</a>
                    <a href="tel:+917405175021" className="text-muted text-sm hover:text-accent-green transition-colors block">+91 74051 75021</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-accent-green/10 flex items-center justify-center shrink-0">
                    <Clock className="text-accent-green w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-accent-dark mb-2">Business Hours</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      Mon-Sun: 11:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-accent-green/10 flex items-center justify-center shrink-0">
                    <Mail className="text-accent-green w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-accent-dark mb-2">Email Us</h3>
                    <a href="mailto:h2oaquariumandpets@gmail.com" className="text-muted text-sm hover:text-accent-green transition-colors break-all">h2oaquariumandpets@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/919662676750" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-accent-green text-white font-bold text-sm tracking-wide uppercase hover:bg-accent-dark transition-colors flex items-center justify-center gap-2 rounded-sm shadow-lg shadow-accent-green/30"
                >
                  Message on WhatsApp
                </a>
                <a 
                  href="https://g.page/r/CUAcv486Wl3NEBM/review" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-accent-dark text-accent-dark font-bold text-sm tracking-wide uppercase hover:bg-accent-dark hover:text-white transition-colors flex items-center justify-center gap-2 rounded-sm"
                >
                  Leave a Review
                </a>
              </div>
            </div>

            <div className="h-[400px] lg:h-auto min-h-[500px] bg-gray-100 relative">
              <iframe 
                src="https://maps.google.com/maps?q=H2O+Aquarium+%26+Pet's,+Vadodara&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
              <a 
                href="https://maps.app.goo.gl/or1zdPQChx7vZrVt5" 
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 px-6 py-3 bg-white text-accent-dark font-bold text-sm uppercase transition-colors hover:bg-accent-green hover:text-white flex items-center justify-center gap-2 rounded-sm shadow-xl"
              >
                <Navigation2 size={16} /> Get Directions
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
