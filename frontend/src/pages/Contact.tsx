import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Clock, CheckCircle, ExternalLink } from 'lucide-react';
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

const Contact = () => {
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

  useEffect(() => {
    document.title = "Contact Us | Thukral Dental Clinic";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Get in touch with Thukral Dental Clinic in Varanasi. Visit our clinic, call, or request an appointment online.');

    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submissions
    setErrorMessage('');

    // Form validation
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

    // Optional email validation: validate only if entered
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

    // 2. Open WhatsApp in a new tab immediately
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
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="page-container max-w-7xl mx-auto">
        
        {/* Navigation Breadcrumb / Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center text-text-muted hover:text-primary transition-colors text-sm font-medium tracking-wide mb-10 group"
        >
          <ArrowLeft size={16} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>

        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text mb-6">
            Find Us in Varanasi
          </h1>
          <p className="text-base md:text-lg text-text-muted font-light leading-relaxed">
            Have questions about a treatment or need to schedule a consultation? We welcome you to reach out or visit our clinic.
          </p>
        </div>

        {/* Main Content: Info & Map on Left, Appointment Request Form on Right */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Location Info & Map */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-text mb-1">Our Clinic</h3>
                    <address className="not-italic text-text-muted text-sm leading-relaxed">
                      C 21/30 B-1A, Pishachmochan<br />
                      Varanasi, Uttar Pradesh 221002
                    </address>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-text mb-1">Phone & Inquiries</h3>
                    <p className="text-text-muted text-sm">
                      <a href="tel:08299719955" className="hover:text-primary transition-colors block">
                        082997 19955
                      </a>
                    </p>
                    <p className="text-text-muted text-xs mt-1">
                      Available Mon – Sat
                    </p>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-text mb-1">Working Hours</h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      Mon – Sat: 10:00 AM – 8:00 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>

                {/* Online */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-text mb-1">Contact Mail</h3>
                    <p className="text-text-muted text-sm">
                      <a href="mailto:dranchitthukral@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        dranchitthukral@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2 mb-10">
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

            {/* Google Maps Embed - matching landing page */}
            <div className="w-full aspect-video bg-background-secondary border border-border rounded-2xl overflow-hidden shadow-sm flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d83155.20206765059!2d82.97306198908954!3d25.322048614237637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e09989ce75f%3A0xfaa6fa6b95356a4f!2sThukral%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1790668813204!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Thukral Dental Clinic Location"
              ></iframe>
            </div>
          </div>

          {/* Form matching landing page */}
          <div className="lg:w-1/2 bg-background-secondary p-8 md:p-12 rounded-2xl border border-border shadow-sm flex flex-col justify-center">
            <h2 className="text-3xl font-serif text-text mb-3">Request an Appointment</h2>
            <p className="text-text-muted text-sm font-light mb-8">
              Leave your details and preferred timing. Our clinic team will reach out to confirm your visit.
            </p>
            
            {submitStatus === 'success' ? (
              <div className="bg-background border border-border/80 p-6 sm:p-8 rounded-xl text-center flex flex-col items-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mb-4 border border-[#25D366]/30">
                  <CheckCircle size={36} strokeWidth={2} />
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-text mb-2">
                  Appointment Request Prepared
                </h3>

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
                    New Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name* | Phone* */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-text mb-2">Name *</label>
                    <input 
                      required 
                      type="text" 
                      id="contact-name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text" 
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-text mb-2">Phone *</label>
                    <input 
                      required 
                      type="tel" 
                      id="contact-phone" 
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
                    <label htmlFor="contact-email" className="block text-sm font-medium text-text mb-2">Email (Optional)</label>
                    <input 
                      type="email" 
                      id="contact-email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text" 
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-treatment" className="block text-sm font-medium text-text mb-2">Treatment / Concern</label>
                    <select 
                      id="contact-treatment" 
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
                    <label htmlFor="contact-date" className="block text-sm font-medium text-text mb-2">Preferred Date *</label>
                    <input 
                      required 
                      type="date" 
                      id="contact-date" 
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text" 
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-time" className="block text-sm font-medium text-text mb-2">Preferred Time Slot *</label>
                    <select 
                      required
                      id="contact-time" 
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
                  <label htmlFor="contact-message" className="block text-sm font-medium text-text mb-2">Message</label>
                  <textarea 
                    id="contact-message" 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your concern (optional)"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text resize-none"
                  ></textarea>
                </div>

                {/* Final row: Request Appointment button */}
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

      </div>
    </div>
  );
};

export default Contact;