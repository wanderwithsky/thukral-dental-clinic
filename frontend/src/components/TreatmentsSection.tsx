import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const treatments = [
  {
    category: "Smile & Aesthetic",
    number: "01",
    items: [
      { name: "Teeth Whitening", image: "/images/teeth_whitening_1790669407239.jpg" },
      { name: "Smile Design", image: "/images/smile_design_1790669421386.jpg" },
      { name: "Smile Transformation", image: "https://res.cloudinary.com/zvlxacfu/image/upload/v1790670701/46e68157-13ec-4f35-abd2-7fc3ea75dc21.png" }
    ]
  },
  {
    category: "Orthodontics",
    number: "02",
    items: [
      { name: "Clear Aligners", image: "/images/clear_aligners_1790669813201.jpg" },
      { name: "Orthodontic Treatment", image: "/images/orthodontic_treatment_1790669833781.jpg" }
    ]
  },
  {
    category: "Restorative & General",
    number: "03",
    items: [
      { name: "Root Canal Treatment", image: "/images/root_canal_1790669854565.jpg" },
      { name: "Tooth Extraction", image: "/images/tooth_extraction_1790669881327.jpg" },
      { name: "General Dental Care", image: "/images/general_dental_1790669896226.jpg" }
    ]
  },
  {
    category: "Advanced Care",
    number: "04",
    items: [
      { name: "Dental Implants", image: "/images/dental_implants_1790669911953.jpg" }
    ]
  }
];

const allServices = treatments.flatMap(cat => cat.items);

const TreatmentsSection = () => {
  const [activeItem, setActiveItem] = useState(allServices[1]); // Default to Smile Design

  return (
    <section id="treatments" className="py-24 md:py-32 bg-background-secondary border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 opacity-0 animate-fade-in-up">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-text-muted mb-4 block">
            TREATMENTS &middot; EXPERT CARE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text mb-6">
            Comprehensive Care
          </h2>
          <p className="text-base md:text-lg text-text-muted font-light leading-relaxed">
            Explore our range of treatments, from essential maintenance to advanced smile design. Each procedure is performed with an unwavering commitment to your comfort.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start relative">
          
          {/* Mobile Image (Shows only on mobile at the top) */}
          <div className="w-full lg:hidden relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-8 bg-black/5">
            {allServices.map((service, idx) => (
              <img 
                key={idx}
                src={service.image} 
                alt={service.name} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activeItem.name === service.name ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              />
            ))}
            <div className="absolute inset-0 bg-black/10 z-20 pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 z-30 pointer-events-none">
                <span className="bg-background/90 backdrop-blur text-text px-4 py-2 rounded-full text-sm font-medium shadow">
                    {activeItem.name}
                </span>
            </div>
          </div>

          {/* Left Column: Service List */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-16">
            {treatments.map((group, gIdx) => (
              <div key={gIdx} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${gIdx * 0.1}s` }}>
                <div className="flex items-baseline gap-4 border-b border-border/60 pb-4 mb-6">
                  <span className="text-lg font-serif text-primary/70">{group.number} &mdash;</span>
                  <h3 className="text-xl md:text-2xl font-serif text-text tracking-wide uppercase">
                    {group.category}
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {group.items.map((item, iIdx) => {
                    const isActive = activeItem.name === item.name;
                    return (
                      <li key={iIdx}>
                        <Link
                          to="/treatments"
                          onMouseEnter={() => setActiveItem(item)}
                          onClick={() => setActiveItem(item)} // For mobile tap
                          className="group flex items-center justify-between py-3 px-4 -mx-4 rounded-lg transition-all duration-300 hover:bg-white/50"
                        >
                          <span 
                            className={`text-lg md:text-xl font-light transition-all duration-300 ${
                              isActive 
                                ? 'text-primary font-medium translate-x-2' 
                                : 'text-text-muted group-hover:text-text'
                            }`}
                          >
                            {item.name}
                          </span>
                          <span 
                            className={`transition-all duration-300 ${
                              isActive 
                                ? 'text-primary opacity-100 translate-x-0' 
                                : 'text-text-muted opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
                            }`}
                          >
                            <ArrowRight size={20} strokeWidth={1.5} />
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Large Image (Desktop only) */}
          <div className="hidden lg:block lg:w-1/2 sticky top-32">
            <Link to="/treatments" className="block relative aspect-[3/4] xl:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              
              {/* Images */}
              {allServices.map((service, idx) => (
                <img 
                  key={idx}
                  src={service.image} 
                  alt={service.name} 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    activeItem.name === service.name 
                      ? 'opacity-100 scale-100 z-10' 
                      : 'opacity-0 scale-105 z-0'
                  }`}
                />
              ))}

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 z-20 pointer-events-none"></div>

              {/* Floating Label / Interaction */}
              <div className="absolute bottom-0 left-0 w-full p-10 z-30 pointer-events-none">
                <div className="flex items-end justify-between">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="text-primary/90 text-sm font-semibold tracking-widest uppercase mb-2 block">
                      Explore Treatment
                    </span>
                    <h4 className="text-3xl xl:text-4xl font-serif text-white">
                      {activeItem.name}
                    </h4>
                  </div>
                  <div className="w-14 h-14 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <ArrowRight size={24} strokeWidth={1.5} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>
        
        <div className="mt-16 text-center lg:hidden opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Link to="/treatments" className="btn-secondary inline-block">
              VIEW ALL TREATMENTS
            </Link>
        </div>

      </div>
    </section>
  );
};

export default TreatmentsSection;
