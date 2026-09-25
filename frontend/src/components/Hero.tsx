import { Star, MapPin } from 'lucide-react';
import heroImg from '../assets/hero_enhanced.jpg';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center bg-background pt-28 pb-16 lg:pt-32 lg:pb-16 overflow-hidden">
      
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>

      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row h-full items-center gap-12 lg:gap-16">
        
        {/* Content Side (50-55%) */}
        <div className="w-full lg:w-[50%] xl:w-[55%] flex flex-col justify-center z-10 order-2 lg:order-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          
          {/* Subtle Premium Detail */}
          <div className="mb-8">
            <span className="text-[10px] md:text-xs tracking-[0.3em] font-medium text-text-muted uppercase">
              Precision &middot; Comfort &middot; Confidence
            </span>
          </div>

          {/* Trust Indicator */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="text-xs font-medium text-text-muted tracking-widest uppercase">
              4.9 Google Rating &middot; 138+ Reviews
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-serif leading-[1.15] text-text mb-8">
            Your Smile <br className="hidden md:block" />
            Deserves <br className="hidden md:block" />
            <span className="text-primary italic">Expert Care.</span>
          </h1>
          
          {/* Supporting Text */}
          <p className="text-base md:text-lg text-text-muted mb-12 max-w-[440px] leading-relaxed font-light">
            Advanced Dental & Aesthetic Care in Varanasi — designed around your comfort, confidence and smile.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12 lg:mb-0">
            <a href="#appointment" className="btn-primary text-center group flex items-center justify-center">
              BOOK AN APPOINTMENT
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </a>
            <a href="#treatments" className="bg-transparent border border-text/20 text-text px-6 py-3 rounded hover:border-primary hover:text-primary transition-all font-medium tracking-wide text-center">
              EXPLORE OUR SERVICES
            </a>
          </div>

          {/* Mobile Only Location */}
          <div className="flex lg:hidden items-center space-x-2 text-xs text-text-muted tracking-widest uppercase mt-8 border-t border-border/50 pt-8">
            <MapPin size={14} className="text-primary" />
            <span>Pishachmochan, Varanasi</span>
          </div>
        </div>

        {/* Visual Side (45-50%) */}
        <div className="w-full lg:w-[50%] xl:w-[45%] relative mt-8 lg:mt-0 order-1 lg:order-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          
          {/* Premium Image Container */}
          <div className="w-full aspect-[4/5] lg:aspect-[3/4] relative rounded-t-[40px] rounded-bl-[40px] rounded-br-sm overflow-hidden border border-border/50 shadow-2xl shadow-primary/5 group">
            
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply z-10 transition-opacity duration-700 group-hover:opacity-0 pointer-events-none"></div>
            
            {/* Image */}
            <img 
              src={heroImg} 
              alt="Dr. Anchit Thukral" 
              className="absolute inset-0 w-full h-full object-cover object-top transform transition-transform duration-[2s] ease-out group-hover:scale-105"
            />

            {/* Floating Information Element */}
            <div className="absolute bottom-6 -left-4 lg:-left-12 bg-background/95 backdrop-blur-md shadow-xl border border-border p-4 rounded-xl z-20 flex items-center space-x-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-bold">
                T
              </div>
              <div className="pr-2">
                <p className="text-xs font-bold text-text uppercase tracking-widest mb-1">Dr. Anchit Thukral</p>
                <p className="text-[10px] text-text-muted uppercase tracking-wider">Lead Specialist</p>
              </div>
            </div>
          </div>

          {/* Desktop Location Marker */}
          <div className="hidden lg:flex absolute -right-16 bottom-16 items-center space-x-3 rotate-[-90deg] origin-bottom-right text-[10px] text-text-muted tracking-[0.2em] uppercase">
            <span>Varanasi &middot; IN</span>
            <span className="w-8 h-[1px] bg-border"></span>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
