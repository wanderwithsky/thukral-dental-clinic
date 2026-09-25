import { Link } from 'react-router-dom';

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
            <address className="not-italic text-text-muted space-y-2 text-sm leading-relaxed">
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
                <Link to="/terms" className="text-text-muted hover:text-primary transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Thukral Dental & Aesthetic Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
