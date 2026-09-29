import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full h-auto lg:h-screen bg-background pt-[100px] lg:pt-24 block lg:flex lg:items-end overflow-hidden border-b-0">
      
      {/* Container aligned to vertical center for text, bottom for image on desktop. Stacked on mobile. */}
      <div className="page-container h-full w-full flex flex-col lg:flex-row relative pb-10 lg:pb-0 px-5 lg:px-8">
        
        {/* Left Content (45-50%) - Order 2 on mobile, 1 on desktop */}
        <div className="w-full lg:w-[48%] h-auto lg:h-full flex flex-col justify-center lg:pb-24 opacity-0 animate-fade-in-up order-2 lg:order-1 mt-6 lg:mt-0" style={{ animationDelay: '0.1s' }}>
          
          {/* Trust Indicator */}
          <div className="flex items-center space-x-2 mb-4 lg:mb-6">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="lg:w-[14px] lg:h-[14px]" fill="currentColor" />
              ))}
            </div>
            <span className="text-[10px] lg:text-xs font-medium text-text-muted tracking-widest uppercase">
              4.9 Google Rating &middot; 138+ Reviews
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[2.5rem] sm:text-5xl lg:text-[4.5rem] xl:text-[5.5rem] font-serif leading-[1.05] lg:leading-[1.1] text-text mb-4 lg:mb-6">
            Your Smile <br />
            Deserves <span className="text-primary italic lg:hidden">Expert</span> <br className="hidden lg:block" />
            <span className="text-primary italic hidden lg:inline">Expert </span>
            <span className="text-primary italic block lg:inline">Care.</span>
          </h1>
          
          {/* Supporting Text */}
          <p className="text-[15px] md:text-lg text-text-muted mb-8 lg:mb-10 max-w-[420px] leading-relaxed font-light">
            Advanced Dental & Aesthetic Care in Varanasi — designed around your comfort, confidence and smile.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-start sm:items-center">
            <Link to="/appointment" className="w-full sm:w-auto btn-primary text-center group flex items-center justify-center transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 min-h-[48px] md:min-h-[52px]">
              BOOK AN APPOINTMENT
              <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
            <Link to="/treatments" className="w-full sm:w-auto text-text border-b border-text/20 pb-1 hover:border-primary hover:text-primary transition-all font-medium tracking-wide text-center uppercase text-sm min-h-[48px] flex items-center justify-center">
              EXPLORE OUR SERVICES
            </Link>
          </div>
        </div>

        {/* Right Visual Composition (50-55%) - Order 1 on mobile, 2 on desktop */}
        <div className="w-full lg:w-[52%] h-[60vh] sm:h-[65vh] lg:h-full flex justify-center lg:justify-end items-end relative opacity-0 animate-fade-in-up order-1 lg:order-2 pt-2 lg:pt-0 mb-6 lg:mb-0" style={{ animationDelay: '0.3s' }}>
          
          {/* Doctor Portrait (Primary) - Stretching to bottom */}
          <div className="relative w-[90vw] sm:w-[80vw] left-1/2 -translate-x-1/2 lg:w-auto lg:left-auto lg:translate-x-0 h-full lg:h-[82vh] xl:h-[85vh] flex items-end justify-center lg:justify-end group cursor-default z-10">
            
            {/* The Real Doctor Image (Transparent Cutout) */}
            <img 
              src="/hero-img.png" 
              alt="Dr. Anchit Thukral" 
              className="relative z-10 w-full lg:w-auto h-full max-w-none object-contain object-bottom transform transition-all duration-700 lg:group-hover:scale-[1.01] lg:group-hover:-translate-y-1 origin-bottom"
              style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))' }}
            />
            
            {/* Rotating Appointment Circle */}
            <Link to="/appointment" aria-label="Book an Appointment" className="absolute left-[-15vw] sm:-left-8 lg:-left-12 top-[45%] lg:top-[45%] -translate-y-1/2 z-20 w-24 h-24 lg:w-32 lg:h-32 rounded-full hidden lg:flex items-center justify-center group/circle transition-transform duration-500 cursor-pointer text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 opacity-0 animate-fade-in-up hover:scale-105" style={{ animationDelay: '0.6s' }}>
              <svg className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite] group-hover/circle:animate-[spin_8s_linear_infinite]" viewBox="0 0 200 200">
                <path id="textPath" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" fill="none" />
                <text className="text-[13px] uppercase font-bold tracking-[0.25em] fill-current" textLength="430">
                  <textPath href="#textPath" startOffset="0%">
                    BOOK AN APPOINTMENT &bull; BOOK AN APPOINTMENT &bull; 
                  </textPath>
                </text>
              </svg>
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary text-background rounded-full flex items-center justify-center z-10 shadow-lg transform transition-transform duration-500 group-hover/circle:scale-110 group-hover/circle:-rotate-12">
                <span className="text-lg lg:text-xl font-serif leading-none">&rarr;</span>
              </div>
            </Link>

            {/* Floating Tooth */}
            <div className="absolute right-[5vw] lg:right-[-2vw] top-[10%] lg:top-[30%] z-20 group/tooth cursor-default opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <div className="w-8 h-8 lg:w-12 lg:h-12 bg-background rounded-xl lg:rounded-2xl shadow-xl border border-border/50 flex items-center justify-center motion-safe:animate-float transform transition-transform duration-500 group-hover/tooth:scale-110 group-hover/tooth:rotate-12">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary w-3.5 h-3.5 lg:w-5 lg:h-5">
                  <path d="M12 22s-4-2-4-7V9a4 4 0 0 1 8 0v6c0 5-4 7-4 7z"></path>
                  <path d="M12 22c0-5 2-7 4-7"></path>
                  <path d="M12 22c0-5-2-7-4-7"></path>
                </svg>
              </div>
              {/* Tooltip */}
              <div className="absolute top-1/2 -translate-y-1/2 right-full mr-4 bg-primary text-background text-[10px] uppercase tracking-widest font-medium py-2 px-4 rounded whitespace-nowrap opacity-0 translate-x-4 pointer-events-none transition-all duration-300 group-hover/tooth:opacity-100 group-hover/tooth:translate-x-0 hidden md:block">
                Your Smile, Our Craft
              </div>
            </div>

            {/* Editorial Doctor Signature */}
            <div className="absolute bottom-2 lg:bottom-12 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-[-2vw] xl:-right-8 bg-white/95 backdrop-blur-sm px-4 py-2.5 lg:px-6 lg:py-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-lg lg:rounded-xl flex flex-col items-center lg:items-start z-30 group/signature cursor-default border border-white/60 w-max max-w-[85vw]">
              <div className="w-4 lg:w-6 h-[1.5px] bg-primary/80 mb-1.5 lg:mb-2.5 origin-center lg:origin-left transform transition-transform duration-500 group-hover/signature:scale-x-150 opacity-0 animate-[editorial-reveal_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]" style={{ animationDelay: '0.9s' }}></div>
              <p className="text-[15px] sm:text-base lg:text-[26px] font-serif font-medium text-text leading-none opacity-0 animate-[editorial-reveal_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards] transition-transform duration-300 group-hover/signature:-translate-y-1" style={{ animationDelay: '1.0s' }}>
                Dr. Anchit Thukral
              </p>
              <p className="text-[8px] sm:text-[9px] lg:text-[11px] font-medium text-text-muted uppercase tracking-[0.15em] mt-1 lg:mt-1.5 opacity-0 animate-[editorial-reveal_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards] transition-transform duration-300 group-hover/signature:-translate-y-0.5" style={{ animationDelay: '1.1s' }}>
                MDS (Orthodontics) &middot; Implantologist
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
