import HeroSection from '../components/ui/HeroSection';
import WhyChooseUs from '../components/ui/WhyChooseUs';
import ServicesSection from '../components/ui/ServicesSection';
import TestimonialsSection from '../components/ui/TestimonialsSection';
import ContactSection from '../components/ui/ContactSection';

export default function HomePage() {
  return (
    <div className="w-full">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>
      <section id="services">
        <ServicesSection />
      </section>

      {/* Emergency CTA Banner */}
      <div className="w-full py-7 px-4 md:px-0 bg-gradient-to-r from-orange-400 to-orange-500 flex flex-col md:flex-row items-center justify-between gap-4 text-white text-center md:text-left">
        <div className="flex-1">
          <div className="font-heading font-bold text-lg md:text-2xl mb-1">Need Emergency Help? We're Available on WhatsApp</div>
          <div className="text-base md:text-lg font-semibold">📞 +91 98765 43210</div>
        </div>
        <a
          href="https://wa.me/919876543210?text=Hello%20Doctor%2C%20I%20need%20emergency%20help"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 md:mt-0 inline-block bg-white text-orange-600 font-bold px-7 py-3 rounded-xl shadow hover:bg-orange-50 transition-all text-lg"
        >
          WhatsApp Now
        </a>
      </div>

      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
