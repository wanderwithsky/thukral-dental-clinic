import { useEffect, useState } from 'react';
import { X, CheckCircle, ExternalLink } from 'lucide-react';
import { useAppointmentModal } from '../context/AppointmentModalContext';
import { submitAppointmentApi } from '../services/api';
import { generateAppointmentWhatsAppUrl } from '../utils/whatsapp';

const TIME_SLOTS = [
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
  '05:00 PM',
  '05:30 PM',
  '06:00 PM',
  '06:30 PM',
  '07:00 PM',
  '07:30 PM',
];

const AppointmentPopup = () => {
  const { isModalOpen, closeModal } = useAppointmentModal();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    treatment: 'General Checkup',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedWhatsappUrl, setSubmittedWhatsappUrl] = useState('');

  // Prevent background scrolling when open & handle Escape key
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitStatus('idle');
      setErrorMessage('');

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeModal();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalOpen, closeModal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submissions
    setErrorMessage('');

    if (!formData.name.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!formData.phone.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please enter your phone number.');
      return;
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!formData.date) {
      setSubmitStatus('error');
      setErrorMessage('Please select a preferred date.');
      return;
    }

    if (!formData.time) {
      setSubmitStatus('error');
      setErrorMessage('Please select a preferred time slot.');
      return;
    }

    setIsSubmitting(true);

    // 1. Generate structured WhatsApp URL targeting official clinic number 918299719955
    const waUrl = generateAppointmentWhatsAppUrl({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      treatment: formData.treatment,
      date: formData.date,
      time: formData.time,
      message: formData.message,
    });

    setSubmittedWhatsappUrl(waUrl);

    // 2. Open WhatsApp in a new tab immediately (works on desktop and mobile)
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    // 3. Persist appointment details to backend API
    try {
      await submitAppointmentApi({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || undefined,
        date: formData.date,
        time: formData.time,
        treatment: formData.treatment,
        message: formData.message.trim() || undefined,
      });
    } catch (err: any) {
      console.warn('Backend appointment record note:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Do NOT auto-close modal: keep it open so user sees instructions to press Send in WhatsApp
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={closeModal}
      ></div>

      {/* Modal Dialog */}
      <div className="relative bg-background-secondary w-full max-w-2xl rounded-2xl shadow-2xl border border-border p-6 sm:p-8 md:p-10 animate-fade-in-up z-10 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-text-muted hover:text-primary transition-colors p-2 rounded-full hover:bg-background/80"
          aria-label="Close"
        >
          <X size={22} strokeWidth={1.5} />
        </button>

        <div className="pr-8 mb-6">
          <h3 className="text-2xl sm:text-3xl font-serif text-text mb-2">Request an Appointment</h3>
          <p className="text-text-muted text-sm font-light">
            Leave your details and preferred timing. Our clinic team will reach out to confirm your visit.
          </p>
        </div>
        
        {submitStatus === 'success' ? (
          <div className="bg-background-secondary border border-border/80 p-6 sm:p-8 rounded-xl text-center flex flex-col items-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mb-4 border border-[#25D366]/30">
              <CheckCircle size={36} strokeWidth={2} />
            </div>

            <h4 className="text-2xl sm:text-3xl font-serif text-text mb-2">
              Appointment Request Prepared
            </h4>

            <p className="text-sm sm:text-base text-text-muted font-light max-w-md mx-auto mb-6 leading-relaxed">
              We have opened WhatsApp in a new tab with your pre-filled appointment request.
            </p>

            {/* Instruction to press Send in WhatsApp */}
            <div className="w-full max-w-md bg-amber-50 dark:bg-amber-950/30 border border-amber-200/90 dark:border-amber-900/60 rounded-xl p-4 text-left mb-6 shadow-xs">
              <div className="flex items-start gap-3">
                <span className="text-xl leading-none mt-0.5">📲</span>
                <div className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed font-light">
                  <strong className="font-semibold text-amber-900 dark:text-amber-100">Final Step Required: </strong>
                  Please switch to the WhatsApp chat window and press <strong className="font-semibold underline">Send</strong> to deliver your appointment request to Thukral Dental Clinic.
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
              <a
                href={submittedWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium py-3.5 px-5 rounded-lg transition-all shadow-md hover:shadow-lg text-sm tracking-wide"
              >
                <span>Open WhatsApp Again</span>
                <ExternalLink size={16} />
              </a>
              <button
                type="button"
                onClick={() => {
                  closeModal();
                  setSubmitStatus('idle');
                  setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    date: '',
                    time: '',
                    treatment: 'General Checkup',
                    message: '',
                  });
                }}
                className="w-full sm:w-auto px-5 py-3.5 text-sm font-medium text-text-muted hover:text-text border border-border rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Row 1: Name* | Phone* */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="popup-name" className="block text-sm font-medium text-text mb-2">Name *</label>
                <input 
                  required 
                  type="text" 
                  id="popup-name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text" 
                />
              </div>
              <div>
                <label htmlFor="popup-phone" className="block text-sm font-medium text-text mb-2">Phone *</label>
                <input 
                  required 
                  type="tel" 
                  id="popup-phone" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Phone number"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text" 
                />
              </div>
            </div>

            {/* Row 2: Email (Optional) | Treatment / Concern */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="popup-email" className="block text-sm font-medium text-text mb-2">Email (Optional)</label>
                <input 
                  type="email" 
                  id="popup-email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text" 
                />
              </div>
              <div>
                <label htmlFor="popup-treatment" className="block text-sm font-medium text-text mb-2">Treatment / Concern</label>
                <select 
                  id="popup-treatment" 
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text"
                >
                  <option value="General Checkup">General Checkup</option>
                  <option value="Smile Transformation">Smile Transformation</option>
                  <option value="Clear Aligners">Clear Aligners</option>
                  <option value="Teeth Whitening">Teeth Whitening</option>
                  <option value="Root Canal Treatment">Root Canal Treatment</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Row 3: Preferred Date* | Preferred Time Slot* */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="popup-date" className="block text-sm font-medium text-text mb-2">Preferred Date *</label>
                <input 
                  required 
                  type="date" 
                  id="popup-date" 
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text" 
                />
              </div>
              <div>
                <label htmlFor="popup-time" className="block text-sm font-medium text-text mb-2">Preferred Time Slot *</label>
                <select 
                  required 
                  id="popup-time" 
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text"
                >
                  <option value="" disabled>Select preferred time slot</option>
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4: Message, full width */}
            <div>
              <label htmlFor="popup-message" className="block text-sm font-medium text-text mb-2">Message</label>
              <textarea 
                id="popup-message" 
                rows={4} 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe your concern (optional)"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text resize-none"
              ></textarea>
            </div>

            {/* Submit button */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full btn-primary py-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {isSubmitting ? 'SUBMITTING...' : 'REQUEST APPOINTMENT'}
            </button>

            {submitStatus === 'error' && (
              <p className="text-red-500 text-sm text-center mt-4">
                {errorMessage || 'Unable to submit request. Please try again or call us.'}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default AppointmentPopup;