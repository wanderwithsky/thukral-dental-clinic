import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const INSTAGRAM_URL = "https://www.instagram.com/thukraldentalclinic/"; // Replace with actual URL
const FACEBOOK_URL = "https://www.facebook.com/www.tdocvns.vom/"; // Replace with actual URL
const GMB_URL = "https://share.google/DTUJBH7NBMFoJAsx";

const Footer = () => {
  return (
    <footer className="bg-background-secondary pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Contact */}
          <div>
            <Link to="/" className="flex flex-col mb-6">
              <span className="font-serif font-bold text-xl tracking-wide text-text">
                THUKRAL
              </span>
              <span className="text-xs uppercase tracking-[0.1em] text-text-muted mt-1">
                Dental & Aesthetic Clinic
              </span>
            </Link>
            <address className="not-italic text-text-muted space-y-2 text-sm leading-relaxed mb-6">
              <p>C 21/30 B-1A, Pishachmochan</p>
              <p>Varanasi, Uttar Pradesh 221002</p>
              <p className="pt-2">
                <a href="tel:08299719955" className="hover:text-primary transition-colors">
                  082997 19955
                </a>
              </p>
              <p>
                <a href="https://thukraldental.net" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  thukraldental.net
                </a>
              </p>
            </address>

            <div className="flex items-center space-x-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-muted hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-muted hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={GMB_URL} target="_blank" rel="noopener noreferrer" aria-label="Google Business Profile" title="Google Business Profile" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-muted hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <MapPin size={14} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-text">Explore</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Treatments', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-text-muted hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-text">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-text-muted hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-text-muted hover:text-primary transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted text-center md:text-left">
            &copy; {new Date().getFullYear()} Thukral Dental & Aesthetic Clinic. All rights reserved.
          </p>
          <p className="text-xs text-text-muted text-center">
            Developed by Team{' '}
            <a 
              href="https://wa.me/919792722166" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-text hover:text-primary hover:underline transition-all duration-300"
              aria-label="Contact Team I2S on WhatsApp"
            >
              I2S
            </a>
            {' '}❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
