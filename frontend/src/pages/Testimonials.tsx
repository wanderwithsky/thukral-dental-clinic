import { Link } from 'react-router-dom';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Premium Hero & First Video Section */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="page-container relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 opacity-0 animate-fade-in-up">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
              PATIENT TESTIMONIALS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.15] text-text mb-6">
              Real Experiences. <br className="hidden md:block" />
              <span className="italic text-primary">Real Confidence.</span>
            </h1>
            <p className="text-base md:text-lg text-text-muted leading-relaxed font-light">
              Every patient has a different concern, a different journey, and a different experience. Hear directly from our patients about their time at Thukral Dental & Aesthetic Clinic.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Left: Video */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full md:w-3/4 lg:w-full max-w-[700px] rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 bg-background/50 p-2 md:p-3 transition-transform duration-700 hover:shadow-3xl">
                <video 
                  src="https://res.cloudinary.com/zvlxacfu/video/upload/v1790667176/IMG_5498.mp4" 
                  controls 
                  muted 
                  playsInline 
                  className="w-full h-auto rounded-2xl object-contain shadow-inner"
                  preload="metadata"
                />
              </div>
            </div>
            
            {/* Right: Text */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted mb-4 block opacity-80">
                PATIENT TESTIMONIAL
              </span>
              <h3 className="text-3xl md:text-4xl font-serif text-text mb-6 leading-tight">
                “Your experience <br /> <span className="italic">matters.</span>”
              </h3>
              
              <div className="space-y-4 text-base text-text-muted leading-relaxed font-light mb-10">
                <p>
                  From the first consultation to the treatment journey, our focus is on making patients feel informed, comfortable and cared for.
                </p>
                <p>
                  Watch our patients share their experience in their own words.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background-secondary border border-border/60 shadow-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h4 className="text-xl font-serif text-text mb-3 relative z-10">Ready to Begin Your Smile Journey?</h4>
                <p className="text-sm text-text-muted mb-6 relative z-10">
                  Book a consultation and discuss your dental concerns with our team.
                </p>
                <Link to="/appointment" className="btn-primary w-full relative z-10 justify-center">
                  BOOK AN APPOINTMENT &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Second Video Section */}
      <section className="relative w-full py-20 lg:py-24 bg-background-secondary border-t border-border overflow-hidden">
        <div className="page-container relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto opacity-0 animate-fade-in-up">
            
            {/* Left: Text */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted mb-4 block opacity-80">
                PATIENT TREATMENT STORY
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text mb-6 leading-tight">
                Full Mouth Rehabilitation
              </h3>
              <p className="text-base md:text-lg text-text-muted leading-relaxed font-light mb-6">
                A complete smile rehabilitation journey focused on restoring function, comfort and confidence through comprehensive dental care.
              </p>
              <div className="bg-background/80 p-5 rounded-xl border border-border/50 mb-10 inline-block text-left mx-auto lg:mx-0 shadow-sm">
                <p className="text-sm font-medium text-text mb-1">
                  Treated at Thukral Dental & Aesthetic Clinic.
                </p>
                <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">
                  Patient: Mr. Stephen &middot; Australia
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <Link to="/appointment" className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-text border-b border-text/20 pb-1 hover:border-primary hover:text-primary transition-all group">
                  Book an Appointment
                  <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right: Video */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full md:w-3/4 lg:w-full max-w-[700px] rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 bg-background/50 p-2 md:p-3 transition-transform duration-700 hover:shadow-3xl">
                <video 
                  src="https://res.cloudinary.com/zvlxacfu/video/upload/v1790674679/Full_mouth_rehabilitation_done_for_Mr_Stephen_from_Australia.Treated_at_Thukral_Dental_Aesthet.mp4" 
                  controls 
                  muted 
                  playsInline 
                  className="w-full h-auto rounded-2xl object-contain shadow-inner"
                  preload="metadata"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Third Video Section */}
      <section className="relative w-full py-20 lg:py-24 bg-background border-t border-border overflow-hidden">
        <div className="page-container relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto opacity-0 animate-fade-in-up">
            
            {/* Left: Video */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full md:w-3/4 lg:w-full max-w-[700px] rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 bg-background-secondary/50 p-2 md:p-3 transition-transform duration-700 hover:shadow-3xl">
                <video 
                  src="https://res.cloudinary.com/zvlxacfu/video/upload/v1790677616/Another_happy_patient_for_full_mouth_dental_implants_from_UK._Treated_at_Thukral_Dental_and_Aest.mp4" 
                  controls 
                  muted 
                  playsInline 
                  className="w-full h-auto rounded-2xl object-contain shadow-inner"
                  preload="metadata"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted mb-4 block opacity-80">
                PATIENT TREATMENT STORY
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text mb-6 leading-tight">
                Full Mouth Dental Implants
              </h3>
              <p className="text-base md:text-lg text-text-muted leading-relaxed font-light mb-6">
                A patient journey focused on restoring a complete smile with comprehensive dental implant treatment and personalised care.
              </p>
              <div className="bg-background-secondary p-5 rounded-xl border border-border/50 mb-10 inline-block text-left mx-auto lg:mx-0 shadow-sm">
                <p className="text-sm font-medium text-text mb-1">
                  Treated at Thukral Dental & Aesthetic Clinic.
                </p>
                <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">
                  Patient: UK
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <Link to="/appointment" className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-text border-b border-text/20 pb-1 hover:border-primary hover:text-primary transition-all group">
                  Book an Appointment
                  <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Fourth Video Section */}
      <section className="relative w-full py-20 lg:py-24 bg-background-secondary border-t border-border overflow-hidden">
        <div className="page-container relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto opacity-0 animate-fade-in-up">
            
            {/* Left: Text */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted mb-4 block opacity-80">
                PATIENT TESTIMONIAL
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text mb-6 leading-tight">
                Your Experience Matters
              </h3>
              <p className="text-base md:text-lg text-text-muted leading-relaxed font-light mb-10">
                Thank you for appreciating our services and efforts. Your kind words and trust mean a great deal to the entire team at Thukral Dental & Aesthetic Clinic.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <Link to="/appointment" className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-text border-b border-text/20 pb-1 hover:border-primary hover:text-primary transition-all group">
                  Book an Appointment
                  <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right: Video */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full md:w-3/4 lg:w-full max-w-[700px] rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 bg-background/50 p-2 md:p-3 transition-transform duration-700 hover:shadow-3xl">
                <video 
                  src="https://res.cloudinary.com/zvlxacfu/video/upload/v1790677831/Thank_you_Mr._Jermy_for_appreciating_our_services_and_efforts._Your_good_review_is_our_biggest_r.mp4" 
                  controls 
                  muted 
                  playsInline 
                  className="w-full h-auto rounded-2xl object-contain shadow-inner"
                  preload="metadata"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Testimonials;
