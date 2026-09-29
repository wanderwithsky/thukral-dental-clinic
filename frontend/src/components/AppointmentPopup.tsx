import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const AppointmentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Modal */}
      <div className="relative bg-background w-full max-w-lg rounded-2xl shadow-2xl border border-border p-6 md:p-8 animate-fade-in-up z-10 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-text-muted hover:text-primary transition-colors"
          aria-label="Close"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        <h3 className="text-2xl md:text-3xl font-serif text-text mb-8 pr-8">Book Your Appointment</h3>
        
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
          <div>
            <label htmlFor="popup-name" className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">Full Name</label>
            <input type="text" id="popup-name" className="w-full bg-transparent border-b border-border/60 py-2 text-text focus:outline-none focus:border-primary transition-colors" required />
          </div>
          
          <div>
            <label htmlFor="popup-phone" className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">Phone Number</label>
            <input type="tel" id="popup-phone" className="w-full bg-transparent border-b border-border/60 py-2 text-text focus:outline-none focus:border-primary transition-colors" required />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="popup-date" className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">Preferred Date</label>
              <input type="date" id="popup-date" className="w-full bg-transparent border-b border-border/60 py-2 text-text focus:outline-none focus:border-primary transition-colors" required />
            </div>
            <div>
              <label htmlFor="popup-treatment" className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">Treatment / Concern</label>
              <select id="popup-treatment" className="w-full bg-transparent border-b border-border/60 py-2 text-text focus:outline-none focus:border-primary transition-colors" required defaultValue="">
                <option value="" disabled>Select an option</option>
                <option value="general">General Consultation</option>
                <option value="aesthetic">Smile Aesthetics</option>
                <option value="orthodontic">Orthodontics (Braces/Aligners)</option>
                <option value="implant">Dental Implants</option>
                <option value="other">Other Concern</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="popup-message" className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">Message (Optional)</label>
            <textarea id="popup-message" rows={2} className="w-full bg-transparent border-b border-border/60 py-2 text-text focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
          </div>
          
          <button type="submit" className="w-full btn-primary mt-8 tracking-[0.2em] text-sm py-4">
            REQUEST APPOINTMENT &rarr;
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentPopup;
