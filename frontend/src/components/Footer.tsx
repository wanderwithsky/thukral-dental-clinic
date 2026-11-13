import { Link } from 'react-router-dom';

const INSTAGRAM_URL = "https://www.instagram.com/thukraldentalclinic/"; // Replace with actual URL
const FACEBOOK_URL = "https://www.facebook.com/www.tdocvns.vom/"; // Replace with actual URL

const Footer = () => {
  return (
    <footer className="bg-background-secondary pt-16 pb-10 border-t border-border">
      <div className="page-container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 mb-14">
          
          {/* Column 1: Brand & Contact */}
          <div className="md:col-span-5 lg:col-span-5">
            <Link to="/" className="inline-flex flex-col mb-6 group">
              <span className="font-serif font-bold text-xl tracking-wide text-text group-hover:text-primary transition-colors">
                THUKRAL
              </span>
              <span className="text-xs uppercase tracking-[0.1em] text-text-muted mt-1">
                Dental Clinic
              </span>
            </Link>

            <address className="not-italic text-text-muted space-y-2 text-sm leading-relaxed mb-6">
              <p>C 21/30 B-1A, Pishachmochan</p>
              <p>Varanasi, Uttar Pradesh 221002</p>
              <p className="pt-1">
                <a href="tel:08299719955" className="hover:text-primary transition-colors">
                  082997 19955
                </a>
              </p>
              <p>
                <a href="https://thukraldental.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  thukraldental.com
                </a>
              </p>
            </address>

            <div className="flex items-center space-x-3.5">
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-muted hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a 
                href={FACEBOOK_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook" 
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-muted hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-4 lg:col-span-4 md:pl-4 lg:pl-10">
            <h4 className="font-serif text-lg mb-6 text-text font-medium">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Why Thukral Dental', path: '/why-thukral' },
                { name: 'Treatments', path: '/treatments' },
                { name: 'Smile School', path: '/learn' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-text-muted hover:text-primary transition-colors text-sm inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Social */}
          <div className="md:col-span-3 lg:col-span-3 md:pl-2 lg:pl-8">
            <h4 className="font-serif text-lg mb-6 text-text font-medium">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-text-muted hover:text-primary transition-colors text-sm inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-text-muted hover:text-primary transition-colors text-sm inline-block">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row: Copyright & Developer Credit */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted text-center md:text-left">
            &copy; {new Date().getFullYear()} Thukral Dental Clinic. All rights reserved.
          </p>
          <p className="text-xs text-text-muted text-center md:text-right">
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
