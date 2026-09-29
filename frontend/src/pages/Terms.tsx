import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | Thukral Dental & Aesthetic Clinic";
    
    // Manage meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Terms & Conditions for accessing and using the Thukral Dental & Aesthetic Clinic website.');
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="page-container max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-text-muted hover:text-primary transition-colors text-sm font-medium tracking-wide mb-12 group">
          <ArrowLeft size={16} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text mb-8">Terms & Conditions</h1>
        
        <div className="space-y-12 text-base md:text-lg text-text-muted leading-relaxed font-light">
          <p className="text-lg md:text-xl text-text font-serif italic mb-12">
            By accessing and using the Thukral Dental & Aesthetic Clinic website, you agree to the following terms and conditions.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-text">1. Website Information</h2>
            <p>
              The information provided on this website is intended for general informational purposes and does not replace a professional dental consultation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-text">2. Appointment Requests</h2>
            <p>
              Submitting an appointment request through the website does not automatically guarantee an appointment. The clinic may contact the user to confirm availability and timing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-text">3. Treatment Information</h2>
            <p>
              Treatment information presented on the website is general in nature. Treatment suitability, procedures and treatment plans depend on individual clinical evaluation by a qualified dental professional.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-text">4. Website Content</h2>
            <p>
              All website content, including text, images, graphics and branding, belongs to or is used by Thukral Dental & Aesthetic Clinic unless otherwise stated.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-text">5. External Links & Services</h2>
            <p>
              The website may contain links or embedded services provided by third parties. The clinic is not responsible for the content or availability of external third-party services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-text">6. Changes</h2>
            <p>
              The clinic may update website content, services or these terms from time to time.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-border">
            <h2 className="text-2xl font-serif text-text mb-6">7. Contact</h2>
            <address className="not-italic space-y-2">
              <p className="font-medium text-text">Thukral Dental & Aesthetic Clinic</p>
              <p>C 21/30 B-1A, Pishachmochan, Varanasi, Uttar Pradesh 221002</p>
              <p>Phone: 082997 19955</p>
            </address>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
