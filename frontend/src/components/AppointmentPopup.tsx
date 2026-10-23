import { useEffect, useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { useAppointmentModal } from '../context/AppointmentModalContext';
import { submitAppointmentApi } from '../services/api';

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

  // Prevent background scrolling when open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitStatus('idle');
      setErrorMessage('');
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        treatment: 'General Checkup',
        message: '',
      });
      setTimeout(() => {
        closeModal();
        setSubmitStatus('idle');
      }, 3000);
    } catch (err: any) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setErrorMessage(err?.message || 'Unable to submit request. Please try again or call us.');
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
          <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-xl text-center flex flex-col items-center">
            <CheckCircle size={40} className="text-green-600 mb-3" />
            <h4 className="text-xl font-medium mb-2">Request Received</h4>
            <p className="text-sm text-green-700">Thank you! We will contact you shortly to confirm your appointment time.</p>
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