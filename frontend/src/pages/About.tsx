import { useEffect } from 'react';
import { Link } from 'react-router-dom';



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
              <div className="aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border border-border/80 bg-background-secondary">
                <img 
                  src="https://res.cloudinary.com/hmjaaen2/image/upload/v1792670446/2d2f280f-ee74-4dfd-87d5-6bf214fb019c.png" 
                  alt="Dr. Anchit Thukral - Lead Dentist & Aesthetic Specialist" 
                  className="w-full h-full object-cover object-center"
                  loading="eager"
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
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-primary/10">
                <img 
                  src="https://res.cloudinary.com/hmjaaen2/image/upload/v1792573055/ff65b9b3-82ea-4e18-98fb-586ed72472b9.jpg" 
                  alt="Academic journey of Dr. Anchit Thukral" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
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

      {/* 4. “THE STORY BEHIND THUKRAL” */}
      <section className="py-24 lg:py-32 bg-background border-b border-border">
        <div className="page-container">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <div className="w-full lg:w-1/2 opacity-0 animate-fade-in-up">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
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
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-border/80 bg-background-secondary">
                <img
                  src="https://res.cloudinary.com/hmjaaen2/image/upload/v1792664622/02.webp"
                  alt="Thukral Dental & Aesthetic Clinic - Thoughtful patient care"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
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
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-border/80 bg-background-secondary">
                <img
                  src="https://res.cloudinary.com/hmjaaen2/image/upload/v1792664990/492004405_2644301385919152_3283715891965521739_n.jpg"
                  alt="Thukral Dental & Aesthetic Clinic - Modern clinic interior, treatment operatory and dental setup"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
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
              <div className="aspect-square w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-border/80 bg-background-secondary">
                <img
                  src="https://res.cloudinary.com/hmjaaen2/image/upload/v1792669910/89cc7992-ed11-4020-82a5-99709a02d0d7.png"
                  alt="Dr. Anchit Thukral - Beyond the White Coat"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 9. “VISION” */}
      <section className="py-32 lg:py-48 bg-text text-background relative overflow-hidden text-center">
        {/* Subtle background abstract graphic / gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none flex justify-center items-center overflow-hidden">
          <img
            src="https://res.cloudinary.com/hmjaaen2/image/upload/v1792669371/logo.png"
            alt="Thukral Dental Clinic Logo"
            className="w-[420px] sm:w-[540px] md:w-[640px] max-w-[85vw] h-auto object-contain opacity-15 brightness-0 invert select-none pointer-events-none"
            loading="lazy"
          />
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

      {/* CONNECT WITH THUKRAL - SOCIAL PRESENCE */}
      <section className="py-28 lg:py-36 bg-[#28221F] text-[#F5F0E8] border-t border-[#50443B]/60 relative overflow-hidden">
        {/* Subtle warm ambient glow to enrich the espresso depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#4A3B32]/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="page-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 opacity-0 animate-fade-in-up">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#D4C3B3] mb-6 block">
              FIND US HERE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#F5F0E8] mb-6 tracking-tight">
              Connect With Thukral
            </h2>
            <p className="text-base md:text-lg text-[#BDB1A5] leading-relaxed font-light">
              Stay connected with Thukral Dental &amp; Aesthetic Clinic, explore our latest updates, patient experiences and clinic information across our social platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Instagram Card */}
            <a 
              href="https://www.instagram.com/thukraldentalclinic/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center bg-[#342C27] hover:bg-[#3D342E] p-8 md:p-10 rounded-[2rem] border border-[#50443B] hover:border-[#8C7A6B]/80 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#28221F] border border-[#50443B] flex items-center justify-center text-[#F5F0E8] group-hover:border-[#D4C3B3]/60 group-hover:scale-105 transition-all duration-300 mb-6 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#F5F0E8] group-hover:text-[#F5F0E8] transition-colors duration-300">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#F5F0E8] mb-3 group-hover:text-[#FFFFFF] transition-colors">Instagram</h3>
              <p className="text-sm text-[#BDB1A5] font-light leading-relaxed mb-6">
                Follow our latest updates, smiles and clinic moments.
              </p>
              <div className="mt-auto text-[#D4C3B3] font-medium text-sm flex items-center gap-1.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                <span>View Profile</span>
                <span className="font-bold">&rarr;</span>
              </div>
            </a>

            {/* Facebook Card */}
            <a 
              href="https://www.facebook.com/www.tdocvns.vom/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center bg-[#342C27] hover:bg-[#3D342E] p-8 md:p-10 rounded-[2rem] border border-[#50443B] hover:border-[#8C7A6B]/80 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#28221F] border border-[#50443B] flex items-center justify-center text-[#F5F0E8] group-hover:border-[#D4C3B3]/60 group-hover:scale-105 transition-all duration-300 mb-6 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#F5F0E8] group-hover:text-[#F5F0E8] transition-colors duration-300">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#F5F0E8] mb-3 group-hover:text-[#FFFFFF] transition-colors">Facebook</h3>
              <p className="text-sm text-[#BDB1A5] font-light leading-relaxed mb-6">
                Connect with us and stay updated with Thukral Dental &amp; Aesthetic Clinic.
              </p>
              <div className="mt-auto text-[#D4C3B3] font-medium text-sm flex items-center gap-1.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                <span>Connect With Us</span>
                <span className="font-bold">&rarr;</span>
              </div>
            </a>

            {/* Google Business Profile Card */}
            <a 
              href="https://share.google/DTUJBH7NBMFoJAsx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center bg-[#342C27] hover:bg-[#3D342E] p-8 md:p-10 rounded-[2rem] border border-[#50443B] hover:border-[#8C7A6B]/80 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#28221F] border border-[#50443B] flex items-center justify-center text-[#E8B98A] group-hover:border-[#E8B98A]/60 group-hover:scale-105 transition-all duration-300 mb-6 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#E8B98A] transition-colors duration-300">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#F5F0E8] mb-3 group-hover:text-[#FFFFFF] transition-colors">Google</h3>
              <p className="text-sm text-[#BDB1A5] font-light leading-relaxed mb-6">
                Explore our clinic, reviews, location and patient experiences.
              </p>
              <div className="mt-auto text-[#D4C3B3] font-medium text-sm flex items-center gap-1.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                <span>Find On Google</span>
                <span className="font-bold">&rarr;</span>
              </div>
            </a>

          </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;
