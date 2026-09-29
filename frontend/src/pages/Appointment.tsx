import { useEffect } from 'react';

const Appointment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 flex items-center justify-center">
      <div className="page-container text-center max-w-2xl">
        <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
          BOOK AN APPOINTMENT
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-text mb-8">
          Your journey to a perfect smile starts here.
        </h1>
        <p className="text-text-muted mb-12 leading-relaxed">
          Please contact our clinic directly or fill out the form below (coming soon) to schedule your visit.
        </p>
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-border/50 flex flex-col gap-6 text-left">
          <p className="text-lg text-text"><strong className="font-serif">Phone:</strong> +91 XXXXX XXXXX</p>
          <p className="text-lg text-text"><strong className="font-serif">Email:</strong> contact@thukralclinic.com</p>
          <p className="text-lg text-text"><strong className="font-serif">Address:</strong> Varanasi, Uttar Pradesh</p>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
