import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ArrowUp, MessageCircle } from 'lucide-react';
import PricingSection from '@/components/PricingBundle';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  
  // Scroll to top button functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopBtn = document.getElementById('scrollToTopBtn');
      if (scrollToTopBtn) {
        if (window.pageYOffset > 300) {
          scrollToTopBtn.classList.remove('opacity-0', 'invisible');
          scrollToTopBtn.classList.add('opacity-100', 'visible');
        } else {
          scrollToTopBtn.classList.remove('opacity-100', 'visible');
          scrollToTopBtn.classList.add('opacity-0', 'invisible');
        }
      }

      // Show WhatsApp button after scrolling a bit
      if (window.pageYOffset > 500) {
        setShowWhatsApp(true);
      }
    };

    // Animation on scroll effect
    const animateOnScrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            animateOnScrollObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    // Allow time for the page to load
    setTimeout(() => {
      setIsLoaded(true);
      
      // Initialize animations after a short delay
      setTimeout(() => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
          animateOnScrollObserver.observe(el);
        });
      }, 300);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        animateOnScrollObserver.unobserve(el);
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '94741143323'; // Sri Lankan format without leading 0
    const message = encodeURIComponent("Hi! I'm interested in your services and would like to discuss a potential project.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Update the document title
  useEffect(() => {
    document.title = "Syndicate Solutions - Innovative Digital Solutions";
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <PricingSection/>
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Scroll to top button */}
      <button
        id="scrollToTopBtn"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 opacity-0 invisible transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* WhatsApp Contact Button */}
      <button
        onClick={handleWhatsAppClick}
        className={`fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500/50 z-50 flex items-center gap-2 group ${
          showWhatsApp ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
        }`}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform" />
        <span className="font-semibold text-sm hidden sm:inline">Chat with us</span>
      </button>
    </div>
  );
};

export default Index;