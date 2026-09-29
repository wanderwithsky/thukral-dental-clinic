import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ImagePlaceholder = ({ label, className = "" }: { label: string, className?: string }) => (
  <div className={`flex items-center justify-center bg-primary/5 border border-primary/10 rounded-2xl overflow-hidden p-8 text-center shadow-inner ${className}`}>
    <span className="font-serif text-primary/60 text-lg md:text-xl tracking-wide">{label}</span>
  </div>
);

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      
      {/* 1. HERO — “Meet Dr. Anchit Thukral” */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-border">
        <div className="page-container relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-6 block">
                THE DOCTOR BEHIND <i style={{ color: 'black' }}>THUKRAL DENTAL CLINIC</i>
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-serif leading-[1.15] text-text mb-6">
                Dr. Anchit Thukral
              </h1>
              <h2 className="text-xl md:text-2xl text-text/80 font-serif mb-8 italic">
                Dentistry built around precision, comfort and confidence.
              </h2>
              <p className="text-base md:text-lg text-text-muted leading-relaxed font-light max-w-lg mb-10">
                Dr. Anchit Thukral is dedicated to creating a dental experience where clinical precision meets genuine patient care &mdash; helping every patient feel informed, comfortable and confident throughout their treatment journey.
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <Link to="/appointment" className="btn-primary">
                  Book a Consultation &rarr;
                </Link>
                <Link to="/treatments" className="text-sm font-semibold uppercase tracking-wider text-text border-b border-text/20 pb-1 hover:border-primary hover:text-primary transition-all">
                  Explore Treatments
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="w-full lg:w-1/2 relative opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="aspect-[3/4] md:aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-background/50 flex items-center justify-center p-4">
                <img 
                  src="https://res.cloudinary.com/zvlxacfu/image/upload/v1790679545/0a90d7c4-51dd-4fae-b790-5eeb1914ed3c.png" 
                  alt="Dr. Anchit Thukral Portrait" 
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-background/90 backdrop-blur-md border border-border/50 p-4 rounded-xl shadow-xl z-20">
                <span className="text-sm font-medium text-text uppercase tracking-wider block">
                  Lead Dentist & Aesthetic Specialist
                </span>
              </div>
              
              {/* Decorative Accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 AWARDS & PROFESSIONAL RECOGNITION */}
      <section className="py-24 lg:py-32 bg-background border-b border-border">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 opacity-0 animate-fade-in-up">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-6 block">
              PROFESSIONAL RECOGNITION
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text mb-6">
              Awards & Professional Recognition
            </h2>
            <p className="text-base md:text-lg text-text-muted leading-relaxed font-light">
              A commitment to continuous learning, advanced training and excellence in modern dentistry.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Recognition 01 */}
            <div className="w-full lg:w-1/2 flex flex-col items-center bg-background-secondary p-8 md:p-12 rounded-[2rem] border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-500 group">
              <div className="w-full max-w-sm rounded-xl overflow-hidden mb-10 flex justify-center items-center p-2 h-64 sm:h-72 md:h-80 lg:h-96">
                <img 
                  src="https://res.cloudinary.com/zvlxacfu/image/upload/v1790678689/327d8bf0-665d-4710-9ce5-9bd6f0a184d8.png" 
                  alt="Invisalign Fundamentals Certificate"
                  className="w-full h-full object-contain transform group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-text mb-4 text-center">
                Invisalign® Fundamentals — Certificate of Attendance
              </h3>
              <p className="text-sm md:text-base text-text-muted font-light leading-relaxed text-center max-w-sm">
                Professional training in Invisalign® Fundamentals, reflecting Dr. Anchit Thukral's commitment to advanced orthodontic learning.
              </p>
            </div>

            {/* Recognition 02 */}
            <div className="w-full lg:w-1/2 flex flex-col items-center bg-background-secondary p-8 md:p-12 rounded-[2rem] border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-500 group">
              <div className="w-full max-w-sm rounded-xl overflow-hidden mb-10 flex justify-center items-center p-2 h-64 sm:h-72 md:h-80 lg:h-96">
                <img 
                  src="https://res.cloudinary.com/zvlxacfu/image/upload/v1790678791/58faf31b-90d3-4cc2-a0b5-7b6d059276df.png" 
                  alt="Professional Implant Training Certificate"
                  className="w-full h-full object-contain transform group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-text mb-4 text-center">
                Professional Implant Training — AIC
              </h3>
              <p className="text-sm md:text-base text-text-muted font-light leading-relaxed text-center max-w-sm">
                Completed professional implant training, strengthening expertise in advanced implant dentistry.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* 1.6 FIND US HERE - SOCIAL PRESENCE */}
      <section className="py-24 lg:py-32 bg-background-secondary border-b border-border">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 opacity-0 animate-fade-in-up">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-6 block">
              FIND US HERE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text mb-6">
              Connect With Thukral
            </h2>
            <p className="text-base md:text-lg text-text-muted leading-relaxed font-light">
              Stay connected with Thukral Dental & Aesthetic Clinic, explore our latest updates, patient experiences and clinic information across our social platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Instagram */}
            <a href="https://www.instagram.com/thukraldentalclinic/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center bg-background p-8 md:p-10 rounded-[2rem] border border-border/50 shadow-sm hover:shadow-xl hover:shadow-pink-500/5 hover:border-pink-500/20 hover:-translate-y-1 transition-all duration-500">
              <div className="relative w-16 h-16 rounded-full border border-border flex items-center justify-center text-text-muted group-hover:border-pink-500/30 transition-colors duration-300 mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:[stroke:url(#ig-grad)] transition-all duration-300">
                  <defs>
                    <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif text-text mb-3">Instagram</h3>
              <p className="text-sm text-text-muted font-light leading-relaxed text-center mb-6">
                Follow our latest updates, smiles and clinic moments.
              </p>
              <div className="mt-auto opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] font-bold">&rarr;</span>
              </div>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/www.tdocvns.vom/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center bg-background p-8 md:p-10 rounded-[2rem] border border-border/50 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-500/20 hover:-translate-y-1 transition-all duration-500">
              <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center text-text-muted group-hover:bg-blue-50 group-hover:text-[#1877F2] group-hover:border-[#1877F2]/30 transition-colors duration-300 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </div>
              <h3 className="text-xl font-serif text-text mb-3">Facebook</h3>
              <p className="text-sm text-text-muted font-light leading-relaxed text-center mb-6">
                Connect with us and stay updated with Thukral Dental & Aesthetic Clinic.
              </p>
              <div className="mt-auto text-[#1877F2] opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-bold">
                &rarr;
              </div>
            </a>

            {/* Google Business Profile */}
            <a href="https://share.google/DTUJBH7NBMFoJAsx" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center bg-background p-8 md:p-10 rounded-[2rem] border border-border/50 shadow-sm hover:shadow-xl hover:shadow-green-500/5 hover:border-green-500/20 hover:-translate-y-1 transition-all duration-500">
              <div className="relative w-16 h-16 rounded-full border border-border flex items-center justify-center text-text-muted group-hover:border-green-500/30 transition-colors duration-300 mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4285F4]/10 via-[#DB4437]/10 to-[#F4B400]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:[stroke:url(#g-grad)] transition-all duration-300">
                  <defs>
                    <linearGradient id="g-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4285F4" />
                      <stop offset="33%" stopColor="#DB4437" />
                      <stop offset="66%" stopColor="#F4B400" />
                      <stop offset="100%" stopColor="#0F9D58" />
                    </linearGradient>
                  </defs>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-serif text-text mb-3">Google</h3>
              <p className="text-sm text-text-muted font-light leading-relaxed text-center mb-6">
                Explore our clinic, reviews, location and patient experiences.
              </p>
              <div className="mt-auto opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] via-[#F4B400] to-[#0F9D58] font-bold">&rarr;</span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 2. “THE BEGINNING” */}
      <section className="py-24 lg:py-32 bg-background-secondary border-b border-border">
        <div className="page-container">
          <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
            
            <div className="w-full lg:w-1/2 opacity-0 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text mb-8">
                Where the Journey Began.
              </h2>
              <div className="space-y-6 text-base md:text-lg text-text-muted leading-relaxed font-light">
                <p>
                  Every dental practice begins with a reason. For Dr. Anchit Thukral, that reason has always been simple &mdash; to make quality dental care more precise, more personal and more reassuring for every patient.
                </p>
                <p>
                  His interest in dentistry developed from a desire to combine medical science with aesthetic artistry. He embarked on his academic journey at <span className="text-text/70 italic">[Dental Education / University]</span>, graduating in <span className="text-text/70 italic">[Year of Graduation]</span> with a clear focus on modern clinical practices.
                </p>
                <p>
                  Transitioning from learning dentistry to practising it, Dr. Thukral recognised the importance of patient communication. He realised that reducing clinical anxiety starts with explaining treatments clearly and involving patients in their own care. This core philosophy eventually shaped the foundation of Thukral Dental & Aesthetic Clinic.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <ImagePlaceholder 
                label="[Academic / Early Journey Photograph]" 
                className="aspect-[4/3] w-full shadow-xl" 
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. “THE EVOLUTION” */}
      <section className="py-24 lg:py-32 bg-background border-b border-border">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-20 opacity-0 animate-fade-in-up">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-text-muted mb-4 block">
              THE EVOLUTION
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text">
              From Dentistry to a Complete Care Philosophy.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border/60 -translate-x-1/2"></div>
            
            <div className="space-y-16 md:space-y-24">
              
              {/* Milestone 1 */}
              <div className="relative flex flex-col md:flex-row justify-between items-center group opacity-0 animate-fade-in-up">
                <div className="hidden md:block w-5 h-5 rounded-full border-4 border-background bg-primary absolute left-1/2 -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300"></div>
                <div className="w-full md:w-[45%] text-left md:text-right mb-4 md:mb-0">
                  <span className="text-primary font-serif text-2xl mb-2 block">01 &mdash; The Foundation</span>
                </div>
                <div className="w-full md:w-[45%] pl-8 md:pl-0 border-l-2 md:border-l-0 border-border/60">
                  <p className="text-text-muted font-light leading-relaxed">Dental education and clinical fundamentals, mastering the core principles of oral healthcare.</p>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="relative flex flex-col md:flex-row-reverse justify-between items-center group opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="hidden md:block w-5 h-5 rounded-full border-4 border-background bg-primary absolute left-1/2 -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300"></div>
                <div className="w-full md:w-[45%] text-left mb-4 md:mb-0 pl-8 md:pl-0 border-l-2 md:border-l-0 border-border/60 md:border-none">
                  <span className="text-primary font-serif text-2xl mb-2 block">02 &mdash; Clinical Experience</span>
                </div>
                <div className="w-full md:w-[45%] md:text-right pl-8 md:pl-0 border-l-2 md:border-l-0 border-border/60 md:border-none">
                  <p className="text-text-muted font-light leading-relaxed">Developing practical experience and understanding the nuanced needs of different patients.</p>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="relative flex flex-col md:flex-row justify-between items-center group opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="hidden md:block w-5 h-5 rounded-full border-4 border-background bg-primary absolute left-1/2 -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300"></div>
                <div className="w-full md:w-[45%] text-left md:text-right mb-4 md:mb-0 pl-8 md:pl-0 border-l-2 md:border-l-0 border-border/60 md:border-none">
                  <span className="text-primary font-serif text-2xl mb-2 block">03 &mdash; Advanced Dentistry</span>
                </div>
                <div className="w-full md:w-[45%] pl-8 md:pl-0 border-l-2 md:border-l-0 border-border/60 md:border-none">
                  <p className="text-text-muted font-light leading-relaxed">Expanding knowledge into orthodontics, implants, smile aesthetics and modern dental technology.</p>
                </div>
              </div>

              {/* Milestone 4 */}
              <div className="relative flex flex-col md:flex-row-reverse justify-between items-center group opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="hidden md:block w-5 h-5 rounded-full border-4 border-background bg-primary absolute left-1/2 -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300"></div>
                <div className="w-full md:w-[45%] text-left mb-4 md:mb-0 pl-8 md:pl-0 border-l-2 md:border-l-0 border-border/60 md:border-none">
                  <span className="text-primary font-serif text-2xl mb-2 block">04 &mdash; Thukral Dental & Aesthetic Clinic</span>
                </div>
                <div className="w-full md:w-[45%] md:text-right pl-8 md:pl-0 border-l-2 md:border-l-0 border-border/60 md:border-none">
                  <p className="text-text-muted font-light leading-relaxed">Building a practice around personalised treatment, modern equipment and unmatched patient comfort.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. “CREDENTIALS & CERTIFICATIONS” */}
      <section className="py-24 lg:py-32 bg-background-secondary border-b border-border overflow-hidden">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24 opacity-0 animate-fade-in-up">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-text-muted mb-4 block">
              CREDENTIALS & CERTIFICATIONS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text">
              Built on Education. Strengthened by Experience.
            </h2>
          </div>

          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:px-0 md:mx-0 snap-x snap-mandatory">
            {[
              { label: "[Certificate / Degree 01]" },
              { label: "[Certificate / Degree 02]" },
              { label: "[Certificate / Degree 03]" },
              { label: "[Advanced Training Certificate]" },
              { label: "[Clinical Certification]" },
              { label: "[Professional Membership]" },
            ].map((cert, idx) => (
              <div 
                key={idx} 
                className="min-w-[85vw] md:min-w-0 snap-center shrink-0 group mr-4 md:mr-0 opacity-0 animate-fade-in-up bg-background p-6 rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-default"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <ImagePlaceholder 
                  label="[Certificate Image]" 
                  className="aspect-[4/3] w-full mb-6 transform group-hover:scale-[1.02] transition-transform duration-500" 
                />
                <h4 className="text-lg font-medium text-text mb-2 group-hover:text-primary transition-colors">
                  {cert.label}
                </h4>
                <p className="text-text-muted text-sm font-light">
                  <span className="italic">[Issuing Institution]</span> &middot; [Year]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. “THE STORY BEHIND THUKRAL” */}
      <section className="py-24 lg:py-32 bg-background border-b border-border">
        <div className="page-container">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <div className="w-full lg:w-1/2 opacity-0 animate-fade-in-up">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-text-muted mb-4 block">
                THE STORY BEHIND THUKRAL
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text mb-8">
                Why Thukral?
              </h2>
              <div className="space-y-6 text-base md:text-lg text-text-muted leading-relaxed font-light">
                <p>
                  Thukral Dental & Aesthetic Clinic was built around a simple belief: modern dentistry should not feel intimidating.
                </p>
                <p>
                  Patients deserve to understand what is happening, why a treatment is recommended, what their options are, and what they can realistically expect.
                </p>
                <p>
                  From routine dental care to advanced orthodontic and aesthetic treatments, the focus remains the same &mdash; thoughtful planning, clear communication and personalised care.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <ImagePlaceholder 
                label="[Clinic / Doctor With Patient Image]" 
                className="aspect-[4/3] w-full shadow-xl" 
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. “OUR APPROACH TO CARE” */}
      <section className="py-24 lg:py-32 bg-background-secondary border-b border-border">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24 opacity-0 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text">
              Our Approach to Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { num: "01", title: "Listen First", desc: "We begin by understanding the patient, their concerns and their expectations." },
              { num: "02", title: "Explain Clearly", desc: "Treatment options should be communicated in a way patients can genuinely understand." },
              { num: "03", title: "Plan Precisely", desc: "Every treatment plan should be personalised around the individual patient." },
              { num: "04", title: "Care Beyond Treatment", desc: "The experience should continue beyond the dental chair, with proper guidance and follow-up." },
            ].map((card, idx) => (
              <div key={idx} className="bg-background border border-border p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <span className="text-primary font-serif text-2xl mb-4 block">{card.num}</span>
                <h4 className="text-xl font-medium text-text mb-4">{card.title}</h4>
                <p className="text-text-muted font-light leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. “THE CLINIC TODAY” */}
      <section className="py-24 lg:py-32 bg-background border-b border-border">
        <div className="page-container">
          <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
            
            <div className="w-full lg:w-1/2 opacity-0 animate-fade-in-up">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-text-muted mb-4 block">
                THE CLINIC TODAY
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text mb-8">
                Where Experience Meets Modern Dentistry.
              </h2>
              <div className="space-y-6 text-base md:text-lg text-text-muted leading-relaxed font-light">
                <p>
                  Today, Thukral Dental & Aesthetic Clinic stands as a premier destination for modern dental and aesthetic practices. We have meticulously integrated advanced equipment and technology to ensure that every diagnosis is precise and every treatment is effective.
                </p>
                <p>
                  Whether it is preventive and general dental care, complex orthodontics, dental implants, or smile aesthetics, our clinic is designed around patient comfort and personalised treatment planning. 
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <ImagePlaceholder 
                label="[Modern Clinic Interior / Treatment Room]" 
                className="aspect-[4/3] w-full shadow-xl" 
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* 8. “BEYOND THE CLINIC” */}
      <section className="py-24 lg:py-32 bg-background-secondary border-b border-border">
        <div className="page-container">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <div className="w-full lg:w-1/2 opacity-0 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text mb-8">
                Beyond the White Coat.
              </h2>
              <div className="space-y-6 text-base md:text-lg text-text-muted leading-relaxed font-light">
                <p>
                  Beyond clinical expertise, Dr. Anchit Thukral brings a calm and reassuring personality to the practice. His commitment to continuous learning ensures that the clinic remains at the forefront of modern dentistry.
                </p>
                <p>
                  His passion extends beyond just performing treatments; it lies in refining the entire patient experience. Through clear communication and a genuinely empathetic approach, he strives to transform the traditional dental visit into an uplifting and positive experience.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <ImagePlaceholder 
                label="[Dr. Anchit Thukral Personal / Candid Image]" 
                className="aspect-[4/3] w-full shadow-xl" 
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* 9. “VISION” */}
      <section className="py-32 lg:py-48 bg-text text-background relative overflow-hidden text-center">
        {/* Subtle background abstract graphic / gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-0 w-full h-full opacity-10 pointer-events-none flex justify-center items-center">
            <svg width="600" height="600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C7 2 4.5 5 4.5 9c0 4 3 6 3 9 0 1.5 2 2 4.5 2s4.5-.5 4.5-2c0-3 3-5 3-9 0-4-2.5-7-7.5-7z"></path></svg>
        </div>

        <div className="page-container relative z-10 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-10 leading-tight">
            A Vision for Better <br className="hidden md:block" /> Dental Care.
          </h2>
          <div className="space-y-6 text-lg md:text-xl lg:text-2xl text-background/80 font-light max-w-4xl mx-auto leading-relaxed">
            <p>
              The vision is to create a dental practice where advanced dentistry and human connection exist side by side.
            </p>
            <p>
              Where technology supports better decision-making, communication builds trust, and every patient feels that their treatment has been planned specifically for them.
            </p>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-24 lg:py-32 bg-background text-center relative overflow-hidden">
        <div className="page-container relative z-10 flex flex-col items-center opacity-0 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
            Your Smile Deserves Thoughtful Care.
          </h2>
          <p className="text-lg md:text-xl text-text-muted font-light max-w-2xl mb-12">
            Whether you are looking for routine dental care, orthodontic treatment, implants or smile-focused treatment, start with a conversation.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 items-center mb-16">
            <Link to="/appointment" className="btn-primary">
              Book an Appointment &rarr;
            </Link>
            <Link to="/treatments" className="text-sm font-semibold uppercase tracking-wider text-text border-b border-text/20 pb-1 hover:border-primary hover:text-primary transition-all">
              Explore Treatments
            </Link>
          </div>

          <span className="text-sm font-semibold tracking-widest uppercase text-text-muted block">
            Thukral Dental & Aesthetic Clinic &middot; Varanasi
          </span>
        </div>
      </section>
      
    </div>
  );
};

export default About;
