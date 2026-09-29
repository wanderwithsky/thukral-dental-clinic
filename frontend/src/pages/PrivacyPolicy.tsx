import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Thukral Dental & Aesthetic Clinic";
    
    // Manage meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Privacy Policy for Thukral Dental & Aesthetic Clinic. Learn how we collect, use, and protect your information.');
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="page-container max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-text-muted hover:text-primary transition-colors text-sm font-medium tracking-wide mb-12 group">
          <ArrowLeft size={16} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text mb-8">Privacy Policy</h1>
        
        <div className="space-y-12 text-base md:text-lg text-text-muted leading-relaxed font-light">
          <p className="text-lg md:text-xl text-text font-serif italic mb-12">
            Your privacy matters to us. This Privacy Policy explains how Thukral Dental & Aesthetic Clinic collects, uses and protects information shared through this website.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-text">1. Information We Collect</h2>
            <p>
              Information such as name, phone number, appointment preferences, treatment concerns and messages may be collected when a user submits a form.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-text">2. How We Use Your Information</h2>
            <p>Submitted information may be used to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to enquiries</li>
              <li>Process appointment requests</li>
              <li>Communicate regarding consultations or treatments</li>
              <li>Improve the website and patient experience</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-text">3. Information Protection</h2>
            <p>
              Reasonable measures are taken to protect submitted information and prevent unauthorised access.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-text">4. Third-Party Services</h2>
            <p>
              The website may use third-party services such as Google Maps, analytics, hosting or communication services where applicable.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-text">5. Your Choices</h2>
            <p>
              Users can contact the clinic regarding questions about their personal information or request clarification about how submitted information is used.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-border">
            <h2 className="text-2xl font-serif text-text mb-6">6. Contact</h2>
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

export default PrivacyPolicy;
