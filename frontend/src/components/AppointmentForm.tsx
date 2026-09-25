import { useState } from 'react';

const AppointmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="appointment" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Location Info */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif text-text mb-6">
              Find Us in Varanasi
            </h2>
            <div className="space-y-6 text-text-muted text-lg font-light">
              <address className="not-italic">
                <p>C 21/30 B-1A, Pishachmochan</p>
                <p>Varanasi, Uttar Pradesh 221002</p>
              </address>
              <p>
                <a href="tel:08299719955" className="hover:text-primary transition-colors block">
                  082997 19955
                </a>
              </p>
              <div className="pt-4">
                <a 
                  href="https://maps.google.com/?q=Thukral+Dental+Clinic+Varanasi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary inline-block"
                >
                  GET DIRECTIONS
                </a>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-12 w-full aspect-video bg-background-secondary border border-border rounded-lg flex items-center justify-center">
              <span className="text-text-muted text-sm">[Google Maps Embed]</span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-1/2 bg-background-secondary p-8 md:p-12 rounded-lg border border-border">
            <h3 className="text-3xl font-serif text-text mb-8">Request an Appointment</h3>
            
            {submitStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded text-center">
                <h4 className="text-xl font-medium mb-2">Request Received</h4>
                <p>We will contact you shortly to confirm your appointment time.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text mb-2">Name *</label>
                    <input required type="text" id="name" className="w-full bg-background border border-border rounded px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">Phone *</label>
                    <input required type="tel" pattern="[0-9]{10}" title="10 digit phone number" id="phone" className="w-full bg-background border border-border rounded px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-text mb-2">Preferred Date *</label>
                    <input required type="date" id="date" className="w-full bg-background border border-border rounded px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="treatment" className="block text-sm font-medium text-text mb-2">Treatment / Concern</label>
                    <select id="treatment" className="w-full bg-background border border-border rounded px-4 py-3 focus:outline-none focus:border-primary transition-colors">
                      <option>General Checkup</option>
                      <option>Smile Transformation</option>
                      <option>Clear Aligners</option>
                      <option>Teeth Whitening</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-background border border-border rounded px-4 py-3 focus:outline-none focus:border-primary transition-colors"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'REQUEST APPOINTMENT'}
                </button>
                
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-sm text-center mt-4">
                    Unable to submit request. Please try again or call us.
                  </p>
                )}
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
