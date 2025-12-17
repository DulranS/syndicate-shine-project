import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      
      // Update active link based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(section.getAttribute('id') || 'home');
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3' 
          : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group z-10 cursor-pointer">
            <Logo className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
            <span className="text-xl md:text-2xl font-bold">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Syndicate
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                className={`relative text-sm font-medium transition-all duration-300 ${
                  activeLink === link.id 
                    ? 'text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                {activeLink === link.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full"></span>
                )}
              </a>
            ))}
            <Button 
              asChild 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 shadow-lg shadow-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/60 hover:scale-105 rounded-lg px-6"
            >
              <a href="#contact">
                Contact Us
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu} 
            className={`md:hidden z-50 p-2 rounded-lg transition-all duration-300 ${
              mobileMenuOpen 
                ? 'text-white bg-white/10' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 transition-all duration-500 ease-out ${
          mobileMenuOpen 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-6 pt-28 pb-8 h-full flex flex-col">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  toggleMobileMenu();
                  setActiveLink(link.id);
                }}
                className={`text-2xl font-semibold py-5 border-b border-white/10 transition-all duration-300 ${
                  activeLink === link.id 
                    ? 'text-white pl-4 bg-gradient-to-r from-blue-500/20 to-transparent' 
                    : 'text-slate-400 hover:text-white hover:pl-4'
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-auto space-y-4">
            <Button 
              asChild 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-6 text-lg font-semibold rounded-xl shadow-xl shadow-blue-500/30 transition-all duration-300"
            >
              <a href="#contact" onClick={toggleMobileMenu}>
                Contact Us
              </a>
            </Button>
            <div className="flex items-center justify-center gap-6 pt-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Logo Component - Using unique ID to avoid conflicts
const Logo = ({ className }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="navbar-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      
      <path 
        d="M50 10 L80 27.5 L80 62.5 L50 80 L20 62.5 L20 27.5 Z" 
        stroke="url(#navbar-logo-gradient)" 
        strokeWidth="3" 
        fill="none"
      />
      
      <path 
        d="M50 25 L65 33.75 L65 56.25 L50 65 L35 56.25 L35 33.75 Z" 
        fill="url(#navbar-logo-gradient)" 
        opacity="0.3"
      />
      
      <line x1="50" y1="25" x2="50" y2="45" stroke="url(#navbar-logo-gradient)" strokeWidth="2"/>
      <line x1="35" y1="33.75" x2="45" y2="45" stroke="url(#navbar-logo-gradient)" strokeWidth="2"/>
      <line x1="65" y1="33.75" x2="55" y2="45" stroke="url(#navbar-logo-gradient)" strokeWidth="2"/>
      
      <circle cx="50" cy="50" r="5" fill="url(#navbar-logo-gradient)"/>
      
      <circle cx="50" cy="25" r="3" fill="#3b82f6"/>
      <circle cx="35" cy="33.75" r="3" fill="#8b5cf6"/>
      <circle cx="65" cy="33.75" r="3" fill="#3b82f6"/>
    </svg>
  );
};

export default Navbar;