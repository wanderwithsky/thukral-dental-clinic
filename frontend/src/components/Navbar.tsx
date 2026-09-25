import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' },
    { name: 'Treatments', path: '#treatments' },
    { name: 'Why Thukral', path: '#why-thukral' },
    { name: 'Reviews', path: '#reviews' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-sm py-4 border-b border-border' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex flex-col z-50">
          <span className="font-serif font-bold text-xl md:text-2xl tracking-wide leading-tight text-text">
            THUKRAL
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-text-muted mt-1">
            Dental & Aesthetic Clinic
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.path} 
                  className="text-text hover:text-primary transition-colors text-sm font-medium tracking-wide"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#appointment" className="btn-primary">
            Book Appointment
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 text-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-background flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col items-center space-y-8 mb-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.path} 
                  className="text-2xl font-serif text-text hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="#appointment" 
            className="btn-primary w-3/4 text-center text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
