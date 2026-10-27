import { useState } from 'react';
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

const AppointmentForm = () => {
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
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (err: any) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setErrorMessage(err?.message || 'Unable to submit request. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-background scroll-mt-20">
      <div id="appointment" className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Location Info */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif text-text mb-6">
              Find Us in Varanasi
            </h2>

            {/* Map Embed - Positioned directly below heading */}
            <div className="mb-8 w-full aspect-video bg-background-secondary border border-border rounded-lg overflow-hidden flex items-center justify-center shadow-xs">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d83155.20206765059!2d82.97306198908954!3d25.322048614237637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e09989ce75f%3A0xfaa6fa6b95356a4f!2sThukral%20Dental%20%26%20Aesthetic%20Clinic!5e0!3m2!1sen!2sin!4v1790668813204!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Thukral Dental & Aesthetic Clinic Location"
              ></iframe>
            </div>

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
              <div className="pt-2">
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
          </div>

          {/* Form */}
          <div className="lg:w-1/2 bg-background-secondary p-8 md:p-12 rounded-lg b1order border-border">
            <h3 className="text-3xl font-serif text-text mb-8">Book an Appointment</h3>
            
            {submitStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded text-center">
                <h4 className="text-xl font-medium mb-2">Request Received</h4>
                <p>We will contact you shortly to confirm your appointment time.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name* | Phone* */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text mb-2">Name *</label>
                    <input 
                      required 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full bg-background border border-border rounded px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text" 
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">Phone *</label>
                    <input 
                      required 
                      type="tel" 
                      id="phone" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone number"
                      className="w-full bg-background border border-border rounded px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text" 
                    />
                  </div>
                </div>

                {/* Row 2: Email (Optional) | Treatment / Concern */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text mb-2">Email (Optional)</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full bg-background border border-border rounded px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text" 
                    />
                  </div>
                  <div>
                    <label htmlFor="treatment" className="block text-sm font-medium text-text mb-2">Treatment / Concern</label>
                    <select 
                      id="treatment" 
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full bg-background border border-border rounded px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text"
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
                    <label htmlFor="date" className="block text-sm font-medium text-text mb-2">Preferred Date *</label>
                    <input 
                      required 
                      type="date" 
                      id="date" 
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-background border border-border rounded px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text" 
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-text mb-2">Preferred Time Slot *</label>
                    <select 
                      required 
                      id="time" 
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-background border border-border rounded px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text"
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
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your concern (optional)"
                    className="w-full bg-background border border-border rounded px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text resize-none"
                  ></textarea>
                </div>

                {/* Final row: Request Appointment button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
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
      </div>
    </section>
  );
};

export default AppointmentForm;