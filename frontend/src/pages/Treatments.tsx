import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const FadeInImage = ({ src, alt }: { src: string, alt: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={elementRef}
      className={`w-full relative rounded-2xl overflow-hidden bg-background shadow-sm border border-border/50 hover:shadow-md transition-all duration-700 ease-out p-2 md:p-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto object-contain rounded-xl" 
        loading="lazy" 
      />
    </div>
  );
};

const TreatmentCard = ({ image, title, description, size = "small" }: { image: string, title: string, description: string, size?: "small" | "large" }) => (
  <div className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-700 cursor-pointer border border-border bg-background ${size === "large" ? "md:col-span-2 aspect-[4/3] md:aspect-[21/9]" : "aspect-[4/3] md:aspect-[4/5]"}`}>
    <div className="absolute inset-0 w-full h-full">
      <img src={image} alt={title} className="w-full h-full object-cover transform transition-transform duration-[1.5s] group-hover:scale-105" loading="lazy" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
    
    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end">
      <div className="flex items-end justify-between">
        <div className="max-w-[85%] transform transition-transform duration-700 group-hover:-translate-y-2">
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">{title}</h3>
          <p className="text-sm md:text-base text-white/90 font-light leading-relaxed transform transition-all duration-700 opacity-80 group-hover:opacity-100">{description}</p>
        </div>
        <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-500">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform duration-300"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>
      </div>
    </div>
  </div>
);

const Treatments = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      
      {/* Premium Hero Section */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-border">
        <div className="page-container relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-6 block">
                OUR SERVICES
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-serif leading-[1.15] text-text mb-8">
                Complete Care for <br />
                <span className="italic text-primary">Your Smile.</span>
              </h1>
              <p className="text-base md:text-lg text-text-muted leading-relaxed font-light max-w-lg mb-10">
                At Thukral Dental & Aesthetic clinic we provide both dental and aesthetic services. We treat our patients with the latest equipment, advanced technology, and years of quality clinical experience of Dr. Anchit Thukral, under whom we give you a variety of treatment plans suiting your needs and budget.
              </p>
              <Link to="/appointment" className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-text border-b border-text/20 pb-1 hover:border-primary hover:text-primary transition-all group">
                BOOK A CONSULTATION
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>

            {/* Right Visual */}
            <div className="w-full lg:w-1/2 relative opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative w-full flex justify-center items-center">
                <div className="relative w-[70%] rounded-2xl overflow-hidden shadow-2xl bg-background/50">
                  <img 
                    src="https://res.cloudinary.com/zqeg1wvh/image/upload/f_auto,q_auto,w_1000/v1790419713/e020bb_8f314245ab82421ebf31b82f67904309_mv2.avif" 
                    alt="Modern Aesthetic Dental Clinic Interior" 
                    className="w-full h-auto object-contain"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
                </div>
              </div>
              
              {/* Decorative Accent */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-border/50 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Editorial Showcase Section */}
      <section className="py-24 lg:py-32 bg-background-secondary border-b border-border">
        <div className="page-container">
          
          <div className="text-center mb-24 md:mb-32 opacity-0 animate-fade-in-up">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-text-muted mb-4 block">
              TREATMENTS &middot; EXPERT CARE
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text mb-6">Comprehensive Care</h2>
            <p className="text-base md:text-lg text-text-muted leading-relaxed font-light max-w-2xl mx-auto">
              Explore our range of treatments, from essential maintenance to advanced smile design. Each procedure is performed with an unwavering commitment to your comfort.
            </p>
            <div className="w-16 h-[1px] bg-primary mx-auto mt-10"></div>
          </div>

          <div className="flex flex-col space-y-24 md:space-y-32">
            
            {/* Category 1: Smile & Aesthetic */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-10 flex items-center gap-4">
                <span className="text-xl font-serif text-primary">01 /</span>
                <h3 className="text-2xl md:text-3xl font-serif text-text tracking-[0.05em] uppercase">Smile & Aesthetic</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <TreatmentCard 
                  size="large"
                  title="Smile Transformation" 
                  description="Comprehensive care combining treatments for a complete refresh." 
                  image="/images/smile_transformation_1790669780721.jpg" 
                />
                <TreatmentCard 
                  title="Teeth Whitening" 
                  description="Professional treatments to safely brighten your smile." 
                  image="/images/teeth_whitening_1790669407239.jpg" 
                />
                <TreatmentCard 
                  title="Smile Design" 
                  description="Personalised planning to achieve your ideal aesthetic." 
                  image="/images/smile_design_1790669421386.jpg" 
                />
              </div>
            </div>

            {/* Category 2: Orthodontics */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-10 flex items-center gap-4">
                <span className="text-xl font-serif text-primary">02 /</span>
                <h3 className="text-2xl md:text-3xl font-serif text-text tracking-[0.05em] uppercase">Orthodontics</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <TreatmentCard 
                  title="Clear Aligners" 
                  description="Discreet and comfortable alternatives to traditional braces." 
                  image="/images/clear_aligners_1790669813201.jpg" 
                />
                <TreatmentCard 
                  title="Orthodontic Treatment" 
                  description="Expert alignment correction for functional and aesthetic results." 
                  image="/images/orthodontic_treatment_1790669833781.jpg" 
                />
              </div>
            </div>

            {/* Category 3: Restorative & General */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-10 flex items-center gap-4">
                <span className="text-xl font-serif text-primary">03 /</span>
                <h3 className="text-2xl md:text-3xl font-serif text-text tracking-[0.05em] uppercase">Restorative & General</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <TreatmentCard 
                  title="Root Canal Treatment" 
                  description="Careful, comfort-focused care to save damaged teeth." 
                  image="/images/root_canal_1790669854565.jpg" 
                />
                <TreatmentCard 
                  title="Tooth Extraction" 
                  description="Safe, precise extractions performed with minimal discomfort." 
                  image="/images/tooth_extraction_1790669881327.jpg" 
                />
                <TreatmentCard 
                  title="General Dental Care" 
                  description="Routine examinations and preventative care for long-lasting health." 
                  image="/images/general_dental_1790669896226.jpg" 
                />
              </div>
            </div>

            {/* Category 4: Advanced Care */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-10 flex items-center gap-4">
                <span className="text-xl font-serif text-primary">04 /</span>
                <h3 className="text-2xl md:text-3xl font-serif text-text tracking-[0.05em] uppercase">Advanced Care</h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:gap-8">
                <TreatmentCard 
                  size="large"
                  title="Dental Implants" 
                  description="Permanent, natural-looking replacements for missing teeth." 
                  image="/images/dental_implants_1790669911953.jpg" 
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Real Results / Mini Gallery */}
      <section className="py-24 bg-background border-b border-border">
        <div className="page-container">
          <div className="text-center mb-16 opacity-0 animate-fade-in-up">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-text-muted mb-4 block">
              REAL RESULTS
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-text">Transformations</h2>
          </div>
          
          <div className="flex flex-col items-center gap-12 lg:gap-16 max-w-4xl mx-auto px-2 md:px-8 lg:px-12">
            {[
              "https://res.cloudinary.com/zqeg1wvh/image/upload/f_auto,q_auto,w_600/v1790419713/e020bb_016b5e2ee2c34736be4fc27b05e6b869_mv2.avif",
              "https://res.cloudinary.com/zqeg1wvh/image/upload/f_auto,q_auto,w_1000/v1790419713/e020bb_057c16cf9f8f4c318c29220fc9dd61c4_mv2.avif",
              "https://res.cloudinary.com/zqeg1wvh/image/upload/f_auto,q_auto,w_600/v1790419713/e020bb_2e8f8c7ff8c64768ade51424bdbac62f_mv2.avif",
              "https://res.cloudinary.com/zqeg1wvh/image/upload/f_auto,q_auto,w_800/v1790419714/e020bb_792de4de9e894c3f980bb6c2710b90ad_mv2.avif"
            ].map((imgUrl, idx) => (
              <FadeInImage key={idx} src={imgUrl} alt={`Transformation ${idx + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Visual Content */}
      <section className="py-24 bg-background-secondary border-b border-border">
        <div className="page-container">
          <div className="w-full flex justify-center opacity-0 animate-fade-in-up">
            <div className="w-full max-w-4xl rounded-[2rem] overflow-hidden shadow-xl border border-border/50 bg-background/50 p-2 md:p-4">
              <img 
                src="https://res.cloudinary.com/zvlxacfu/image/upload/v1790680451/e6ed4d42-00e6-4afc-9f4d-d9bafe40cedc.jpg" 
                alt="Treatment Details" 
                className="w-full h-auto object-contain rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA Section */}
      <section className="py-24 lg:py-32 bg-text text-background relative overflow-hidden">
        {/* Subtle background pattern/glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
        
        <div className="page-container relative z-10 text-center flex flex-col items-center">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-border/70 mb-6 block">
            READY TO TAKE THE NEXT STEP?
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-12 max-w-3xl">
            Let's create a healthier, <br className="hidden md:block" />
            <span className="italic text-background/80">more confident smile.</span>
          </h2>
          <Link to="/appointment" className="bg-background text-text px-8 py-4 rounded-full hover:bg-primary hover:text-background transition-colors font-medium tracking-wide text-sm md:text-base flex items-center group">
            BOOK AN APPOINTMENT
            <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
          
          <div className="mt-16 flex items-center space-x-2 text-background/80">
            <div className="flex text-[#FFB800]">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-medium tracking-wider uppercase">
              4.9 Google Rating &middot; 138+ Reviews
            </span>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Treatments;
