import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const treatments = [
  {
    id: "01",
    title: "Clear Aligners",
    category: "ORTHODONTICS",
    description: "Straighten your teeth and achieve a stunning smile with our invisible braces. Our discreet and comfortable aligners will help you achieve the perfect smile you've always wanted. Book a consultation today and take the first step to a confident, beautiful smile.",
    image: "https://res.cloudinary.com/zqeg1wvh/image/upload/f_auto,q_auto,w_800/v1790419713/e020bb_3a413fc80f4c43568b3b1f2be3a1193d_mv2.avif",
  },
  {
    id: "02",
    title: "Dental Implants",
    category: "IMPLANTOLOGY",
    description: "Dental implants are a great solution for missing teeth. They are a permanent and natural-looking option that can improve your smile and overall oral health. Contact us today to learn more about how dental implants can benefit you.",
    image: "https://res.cloudinary.com/zqeg1wvh/image/upload/f_auto,q_auto,w_800/v1790419714/e020bb_ab258b9875c2436098f7f6960c134a12_mv2.avif",
  },
  {
    id: "03",
    title: "Hair Loss Treatment",
    category: "AESTHETIC CARE",
    description: "Are you tired of hair loss? Our PRP treatment can help! Say goodbye to thinning hair and hello to a fuller, healthier head of hair. Book your appointment today and get ready to love your locks again.",
    image: "https://res.cloudinary.com/zqeg1wvh/image/upload/f_auto,q_auto,w_800/v1790419713/e020bb_59ca078af61e42b0bb7260e06c20498b_mv2.avif",
  }
];

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
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/zqeg1wvh/image/upload/f_auto,q_auto,w_1000/v1790419713/e020bb_8f314245ab82421ebf31b82f67904309_mv2.avif" 
                  alt="Modern Aesthetic Dental Clinic Interior" 
                  className="w-full h-full object-cover transform transition-transform duration-1000 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
              </div>
              
              {/* Decorative Accent */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-border/50 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments List Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="page-container">
          
          <div className="text-center mb-20 md:mb-32">
            <h2 className="text-3xl md:text-5xl font-serif text-text">Our Expertise</h2>
            <div className="w-16 h-[1px] bg-primary mx-auto mt-8"></div>
          </div>

          <div className="flex flex-col space-y-24 md:space-y-32">
            {/* Treatment 1 */}
            <div className="flex flex-col gap-12 lg:gap-24 items-center lg:flex-row">
              <div className="w-full lg:w-1/2 relative group opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="hidden lg:block absolute top-10 -right-16 text-[12rem] font-serif font-light text-background leading-none select-none -z-10 tracking-tighter">
                  {treatments[0].id}
                </div>
                <div className="relative aspect-[3/4] w-full max-w-[500px] mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <img 
                    src={treatments[0].image} 
                    alt={treatments[0].title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 md:px-0 max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="lg:hidden text-2xl font-serif text-primary">{treatments[0].id}</span>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted">{treatments[0].category}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-text mb-6">{treatments[0].title}</h3>
                <p className="text-base md:text-lg text-text-muted leading-relaxed font-light mb-10">{treatments[0].description}</p>
                <Link to="/appointment" className="inline-flex items-center text-sm font-medium uppercase tracking-wider text-text group w-max">
                  <span className="border-b border-text/30 pb-1 group-hover:border-primary group-hover:text-primary transition-all">EXPLORE TREATMENT</span>
                  <span className="ml-3 transform transition-transform duration-300 group-hover:translate-x-1.5 text-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Visual Break 1 */}
            <div className="w-full opacity-0 animate-fade-in-up py-4 lg:py-12" style={{ animationDelay: '0.2s' }}>
              <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-lg group">
                <img 
                  src="https://res.cloudinary.com/zqeg1wvh/image/upload/f_auto,q_auto,w_1440/v1790419713/e020bb_745d5e0048d64d479edc8cff8f52e574_mv2.avif" 
                  alt="Smile Makeover" 
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/5"></div>
              </div>
            </div>

            {/* Treatment 2 */}
            <div className="flex flex-col gap-12 lg:gap-24 items-center lg:flex-row-reverse">
              <div className="w-full lg:w-1/2 relative group opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="hidden lg:block absolute top-10 -left-16 text-[12rem] font-serif font-light text-background leading-none select-none -z-10 tracking-tighter">
                  {treatments[1].id}
                </div>
                <div className="relative aspect-[4/3] w-full mx-auto rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <img 
                    src={treatments[1].image} 
                    alt={treatments[1].title} 
                    className="w-full h-full object-contain bg-background/50 transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 md:px-0 max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="lg:hidden text-2xl font-serif text-primary">{treatments[1].id}</span>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted">{treatments[1].category}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-text mb-6">{treatments[1].title}</h3>
                <p className="text-base md:text-lg text-text-muted leading-relaxed font-light mb-10">{treatments[1].description}</p>
                <Link to="/appointment" className="inline-flex items-center text-sm font-medium uppercase tracking-wider text-text group w-max">
                  <span className="border-b border-text/30 pb-1 group-hover:border-primary group-hover:text-primary transition-all">EXPLORE TREATMENT</span>
                  <span className="ml-3 transform transition-transform duration-300 group-hover:translate-x-1.5 text-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Visual Break 2 */}
            <div className="flex flex-col md:flex-row gap-8 w-full py-4 lg:py-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
               <div className="w-full md:w-2/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                 <img src="https://res.cloudinary.com/zqeg1wvh/image/upload/f_auto,q_auto,w_1000/v1790419714/e020bb_a1b6ee9476b946f6ae9a24dc0f6a1fb6_mv2.avif" alt="Full Mouth Rehab" className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-[1.02]" loading="lazy"/>
               </div>
               <div className="w-full md:w-1/3 aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden shadow-lg group">
                 <img src="https://res.cloudinary.com/zqeg1wvh/image/upload/f_auto,q_auto,w_600/v1790419713/e020bb_8df438c06ce34239a89281d6a9754b2c_mv2.avif" alt="Overjet Correction" className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105" loading="lazy"/>
               </div>
            </div>

            {/* Treatment 3 */}
            <div className="flex flex-col gap-12 lg:gap-24 items-center lg:flex-row">
              <div className="w-full lg:w-1/2 relative group opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="hidden lg:block absolute top-10 -right-16 text-[12rem] font-serif font-light text-background leading-none select-none -z-10 tracking-tighter">
                  {treatments[2].id}
                </div>
                <div className="relative aspect-[3/4] w-full max-w-[500px] mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <img 
                    src={treatments[2].image} 
                    alt={treatments[2].title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 md:px-0 max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="lg:hidden text-2xl font-serif text-primary">{treatments[2].id}</span>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted">{treatments[2].category}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-text mb-6">{treatments[2].title}</h3>
                <p className="text-base md:text-lg text-text-muted leading-relaxed font-light mb-10">{treatments[2].description}</p>
                <Link to="/appointment" className="inline-flex items-center text-sm font-medium uppercase tracking-wider text-text group w-max">
                  <span className="border-b border-text/30 pb-1 group-hover:border-primary group-hover:text-primary transition-all">EXPLORE TREATMENT</span>
                  <span className="ml-3 transform transition-transform duration-300 group-hover:translate-x-1.5 text-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Real Results / Mini Gallery */}
      <section className="py-24 bg-background">
        <div className="page-container">
          <div className="text-center mb-16 opacity-0 animate-fade-in-up">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-text-muted mb-4 block">
              REAL RESULTS
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-text">Transformations</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-square lg:aspect-auto lg:h-[400px] rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-500">
              <img src="https://res.cloudinary.com/zqeg1wvh/image/upload/f_auto,q_auto,w_600/v1790419713/e020bb_016b5e2ee2c34736be4fc27b05e6b869_mv2.avif" alt="Gallery 1" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="relative aspect-[4/3] md:aspect-auto lg:aspect-auto lg:h-[400px] rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-500 lg:col-span-2">
              <img src="https://res.cloudinary.com/zqeg1wvh/image/upload/f_auto,q_auto,w_1000/v1790419713/e020bb_057c16cf9f8f4c318c29220fc9dd61c4_mv2.avif" alt="Gallery 2" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="relative aspect-square lg:aspect-auto lg:h-[400px] rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-500">
              <img src="https://res.cloudinary.com/zqeg1wvh/image/upload/f_auto,q_auto,w_600/v1790419713/e020bb_2e8f8c7ff8c64768ade51424bdbac62f_mv2.avif" alt="Gallery 3" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="md:col-start-2 relative aspect-[21/9] md:aspect-auto md:h-[300px] rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-500">
               <img src="https://res.cloudinary.com/zqeg1wvh/image/upload/f_auto,q_auto,w_800/v1790419714/e020bb_792de4de9e894c3f980bb6c2710b90ad_mv2.avif" alt="Gallery 4" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" />
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
