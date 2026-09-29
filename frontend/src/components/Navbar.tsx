import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-sm py-4 border-b border-border' 
            : 'bg-transparent py-6'
        }`}
      >
      <div className="page-container flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 md:space-x-4 z-50">
          <img 
            src="/logo.jpeg" 
            alt="Thukral Clinic Logo" 
            className="h-10 md:h-12 w-auto object-contain mix-blend-multiply"
          />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl md:text-2xl tracking-wide leading-tight text-text">
              THUKRAL
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-text-muted mt-0.5">
              Dental & Aesthetic Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.path.startsWith('/#') ? (
                  <a 
                    href={link.path} 
                    className="text-text hover:text-primary transition-colors text-sm font-medium tracking-wide"
                  >
                    {link.name}
                  </a>
                ) : (
                  <NavLink 
                    to={link.path} 
                    end={link.path === '/'}
                    className={({ isActive }) => 
                      `text-sm font-medium tracking-wide transition-colors ${
                        isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-text hover:text-primary'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          <Link to="/appointment" className="btn-primary">
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Menu Toggle (Header visible when menu closed) */}
        <button 
          className="md:hidden z-50 text-text"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>

        </div>
      </header>

      {/* Mobile Navigation Full Overlay - Rendered outside header to prevent backdrop-filter from trapping fixed positioning */}
      <div 
        className={`fixed inset-0 bg-background z-[9999] flex flex-col transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ height: '100dvh' }}
      >
        {/* Menu Header (mirrors navbar inside overlay) */}
        <div className="flex justify-between items-center px-5 py-6 border-b border-border/10 shrink-0">
          <Link to="/" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/logo.jpeg" alt="Thukral Clinic Logo" className="h-10 w-auto object-contain mix-blend-multiply" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-wide leading-tight text-text">THUKRAL</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted mt-0.5">Dental & Aesthetic</span>
            </div>
          </Link>
          <button 
            className="text-text p-2 -mr-2 transition-transform duration-300 hover:rotate-90"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} strokeWidth={1.2} />
          </button>
        </div>

        {/* Menu Items Container */}
        <div className="flex-1 overflow-y-auto px-6 py-10 flex flex-col relative" style={{ WebkitOverflowScrolling: 'touch' }}>
          <ul className="flex flex-col space-y-7 w-full max-w-sm relative z-10">
            {navLinks.map((link, index) => (
              <li key={link.name} className="overflow-hidden shrink-0">
                {link.path.startsWith('/#') ? (
                  <a 
                    href={link.path} 
                    className={`group flex items-baseline font-serif text-[32px] sm:text-4xl text-text hover:text-primary transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                    style={{ transitionDelay: `${index * 60 + 100}ms` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-xs sm:text-sm font-sans text-text-muted/60 mr-4 mb-1 group-hover:text-primary transition-colors tracking-widest">0{index + 1}</span>
                    <span className="relative">
                      {link.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full ease-out"></span>
                    </span>
                  </a>
                ) : (
                  <NavLink 
                    to={link.path} 
                    end={link.path === '/'}
                    className={({ isActive }) => 
                      `group flex items-baseline font-serif text-[32px] sm:text-4xl transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} ${isActive ? 'text-primary' : 'text-text hover:text-primary'}`
                    }
                    style={{ transitionDelay: `${index * 60 + 100}ms` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {({ isActive }) => (
                      <>
                        <span className={`text-xs sm:text-sm font-sans mr-4 mb-1 transition-colors tracking-widest ${isActive ? 'text-primary' : 'text-text-muted/60 group-hover:text-primary'}`}>0{index + 1}</span>
                        <span className="relative">
                          {link.name}
                          <span className={`absolute left-0 -bottom-1 h-[1px] bg-primary transition-all duration-500 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </span>
                      </>
                    )}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* Background Watermark */}
          <div className="absolute right-[-10%] top-[40%] -translate-y-1/2 text-[14vh] font-serif font-black text-text/[0.03] rotate-90 whitespace-nowrap pointer-events-none select-none tracking-tighter mix-blend-multiply">
            THUKRAL
          </div>
        </div>

        {/* Menu Footer CTA */}
        <div className="p-6 pb-8 bg-background relative z-10 border-t border-border/10 shrink-0">
          <Link 
            to="/appointment" 
            className={`btn-primary w-full flex items-center justify-between text-base py-4 px-6 group transform transition-all duration-700 ease-out ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${navLinks.length * 60 + 150}ms` }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="font-medium tracking-widest">BOOK AN APPOINTMENT</span>
            <span className="text-xl font-serif transform transition-transform duration-500 group-hover:translate-x-2">&rarr;</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
