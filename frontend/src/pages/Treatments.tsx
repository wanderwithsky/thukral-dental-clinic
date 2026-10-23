import { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

// Centralized verified original clinic & clinical case images
export const TREATMENT_ASSETS = {
  // Clinical Operations / Atmosphere
  drExaminingYoungPatient: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792664990/492004405_2644301385919152_3283715891965521739_n.jpg', // Image 01 (960x720)
  chairsideProcedureAssistance: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792664920/52720428_923426484673326_9035049136948248576_n.jpg', // Image 02 (720x960)
  hairAestheticProcedure: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792664622/03.webp', // Image 03 (574x1020)
  laserAdvancedDeviceProcedure: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792664624/06.webp', // Image 04 (471x1020)
  sterileSurgicalPrecision: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792664622/02.webp', // Image 05 (765x1020)
  
  // Clinical Before & After Orthodontics & Restorative Records
  orthodonticDiastemaGapClosure: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792653468/9a78e42d-443a-4fbc-a653-d2842cb4c846.jpg', // Image 06 (1206x625)
  orthodonticCrowdingAlignment: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792653462/39ad19f2-a698-4746-885f-4a9bb805a729.jpg', // Image 07 (1206x1506)
  teethWhiteningBeforeAfter: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792653455/c8714864-ab0b-4531-8181-4297d6879d9f.jpg', // Image 08 (1206x1242)
  smileMakeoverArchRestoration: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792653443/6e34f1dd-541a-4db5-bdb6-97c557d17641.jpg', // Image 09 (1220x1206)
  orthodonticProfileAlignment: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792653392/2bfda034-4fab-4228-8ced-8e4904d02996.jpg', // Image 10 (1206x1210)
  aestheticArchHarmony: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792653362/3982f855-4937-4d6c-84db-a4e238842add.jpg', // Image 11 (1206x1182)
  restorativeCrownAnteriorRepair: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792653344/2358833f-8984-4e1d-9686-cc4b1a0242c9.jpg', // Image 12 (1206x1063)
  aestheticFacialHarmonyTransformation: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792653350/e2aa2a30-57c7-4bcb-a104-1d589f397e64.jpg', // Image 13 (1206x1197)
  fullSmileTransformationClinical: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792653325/306e470f-b028-4831-9afe-199b6e41b123.jpg', // Image 14 (1206x1206)

  // Additional Verified Gallery Transformation Assets (Images 04 to 09)
  transformationArchAlignment04: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792653379/5ceede13-2854-444c-b08a-b9bc33ddf138.jpg',
  transformationBiteHarmony05: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792653355/03b5b580-3557-4dd0-b0fa-2526700d7cdc.jpg',
  transformationOcclusalGuidance06: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792653416/a59f8a14-403c-4879-af0e-afeb8753f218.jpg',
  transformationOrthodonticAlignment07: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792653419/7acc836f-8c51-4d99-9093-551eff85029a.jpg',
  transformationRehabilitation08: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792653325/306e470f-b028-4831-9afe-199b6e41b123.jpg',
  transformationRestorativeCrown09: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792653344/2358833f-8984-4e1d-9686-cc4b1a0242c9.jpg',
};

// Full collection of 14 gallery items with rich captions for modal view
export interface LightboxItem {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
  alt: string;
}

const ALL_TREATMENT_ITEMS: LightboxItem[] = [
  // 0: Hero
  {
    id: 'item-chairside',
    image: TREATMENT_ASSETS.chairsideProcedureAssistance,
    title: 'In-Clinic Chairside Dental Procedure',
    category: 'Clinical Excellence',
    description: 'Dr. Anchit Thukral performing a chairside dental procedure with assistant support in the advanced treatment operatory.',
    alt: 'Dr. Anchit Thukral performing chairside clinical procedure at Thukral Dental & Aesthetic Clinic',
  },
  // 1: Smile & Aesthetic - Smile Transformation
  {
    id: 'item-full-smile',
    image: TREATMENT_ASSETS.fullSmileTransformationClinical,
    title: 'Comprehensive Smile Transformation',
    category: 'Smile & Aesthetic',
    description: 'Clinical documentation showing pre- and post-treatment aesthetic smile rehabilitation and restored dental symmetry.',
    alt: 'Comprehensive smile transformation clinical before and after documentation',
  },
  // 2: Smile & Aesthetic - Teeth Whitening
  {
    id: 'item-whitening',
    image: TREATMENT_ASSETS.teethWhiteningBeforeAfter,
    title: 'In-Office Teeth Whitening Progression',
    category: 'Smile & Aesthetic',
    description: 'Evidence-based professional teeth whitening results showing substantial shade brightening while preserving enamel health.',
    alt: 'Teeth whitening shade comparison before and after',
  },
  // 3: Smile & Aesthetic - Smile Design
  {
    id: 'item-smile-design',
    image: TREATMENT_ASSETS.smileMakeoverArchRestoration,
    title: 'Smile Design & Arch Harmony',
    category: 'Smile & Aesthetic',
    description: 'Custom diagnostic treatment plan resolving tooth proportion, alignment, and arch symmetry.',
    alt: 'Smile design and dental arch alignment clinical record',
  },
  // 4: Orthodontics - Diastema
  {
    id: 'item-diastema',
    image: TREATMENT_ASSETS.orthodonticDiastemaGapClosure,
    title: 'Diastema Gap Closure & Alignment',
    category: 'Orthodontics & Clear Alignment',
    description: 'Targeted orthodontic mechanotherapy closing anterior midline gap and establishing balanced arch continuity.',
    alt: 'Orthodontic gap closure before and after clinical photographs',
  },
  // 5: Orthodontics - Crowding
  {
    id: 'item-crowding',
    image: TREATMENT_ASSETS.orthodonticCrowdingAlignment,
    title: 'Comprehensive Orthodontic Correction',
    category: 'Orthodontics & Clear Alignment',
    description: 'Resolution of severe anterior crowding, deep bite, and occlusal disharmony using modern orthodontic guidance.',
    alt: 'Orthodontic crowding alignment clinical comparison',
  },
  // 6: Restorative - Crowns
  {
    id: 'item-crowns',
    image: TREATMENT_ASSETS.restorativeCrownAnteriorRepair,
    title: 'Restorative Crowns & Anterior Repair',
    category: 'Restorative Dentistry',
    description: 'Precision aesthetic ceramic crowns restoring broken and compromised front teeth to lifelike contour and strength.',
    alt: 'Anterior tooth restoration and dental crown repair before and after',
  },
  // 7: Restorative - Consultations
  {
    id: 'item-exam',
    image: TREATMENT_ASSETS.drExaminingYoungPatient,
    title: 'Gentle Consultations & Diagnostics',
    category: 'Preventative & Family Dentistry',
    description: 'Unhurried examination and transparent dialogue ensuring patient comfort and informed decisions from the first visit.',
    alt: 'Dr. Anchit Thukral conducting examination with young patient',
  },
  // 8: Restorative - Sterile Surgery
  {
    id: 'item-sterile',
    image: TREATMENT_ASSETS.sterileSurgicalPrecision,
    title: 'Sterile Surgical Preparations',
    category: 'Clinical Surgery & Safety',
    description: 'Hospital-grade autoclaved instruments and rigorous surgical protocols maintaining an uncompromising sterile field.',
    alt: 'Doctor preparing sterile surgical instruments in clinic',
  },
  // 9: Advanced - Laser
  {
    id: 'item-laser',
    image: TREATMENT_ASSETS.laserAdvancedDeviceProcedure,
    title: 'Laser & Advanced Clinical Technology',
    category: 'Advanced Care',
    description: 'Application of state-of-the-art medical devices for minimally invasive periodontal, aesthetic, and surgical treatments.',
    alt: 'Dr. Anchit Thukral operating specialized medical laser device',
  },
  // 10: Advanced - Scalp Care
  {
    id: 'item-scalp',
    image: TREATMENT_ASSETS.hairAestheticProcedure,
    title: 'Specialized Scalp & Aesthetic Therapy',
    category: 'Clinical Aesthetics',
    description: 'Dedicated aesthetic treatment room equipped for targeted clinical scalp therapy and rejuvenation procedures.',
    alt: 'Clinical aesthetic procedure in clinic treatment room',
  },
  // 11: Real Results - Case 01
  {
    id: 'item-case-profile',
    image: TREATMENT_ASSETS.orthodonticProfileAlignment,
    title: 'Case 01: Profile & Occlusal Correction',
    category: 'Orthodontic Alignment',
    description: 'Multi-panel photographic records demonstrating correction of anterior protrusion, bite overjet, and facial profile balance.',
    alt: 'Multi-angle clinical before and after documentation of overjet and profile correction',
  },
  // 12: Real Results - Case 02
  {
    id: 'item-case-arch',
    image: TREATMENT_ASSETS.aestheticArchHarmony,
    title: 'Case 02: Anterior Symmetry & Contour',
    category: 'Aesthetic Dentistry',
    description: 'Comprehensive dental records illustrating alignment correction and aesthetic restoration under standardized clinical views.',
    alt: 'Intraoral and smile documentation of alignment correction and aesthetic arch harmony',
  },
  // 13: Real Results - Case 03
  {
    id: 'item-case-harmony',
    image: TREATMENT_ASSETS.aestheticFacialHarmonyTransformation,
    title: 'Case 03: Comprehensive Smile Makeover',
    category: 'Smile Transformation',
    description: 'Harmonization of smile arc, tooth shade, and lip line symmetry delivering a revitalized, natural appearance.',
    alt: 'Clinical smile makeover documentation before and after',
  },
  // 14: Real Results - Case 04 (Image 04)
  {
    id: 'item-case-04',
    image: TREATMENT_ASSETS.transformationArchAlignment04,
    title: 'Case 04: Maxillary Arch Alignment & Symmetry',
    category: 'Orthodontic Guidance',
    description: 'Targeted arch expansion and anterior alignment resolving crowding to establish harmonious occlusal relationships.',
    alt: 'Clinical before and after records of maxillary arch alignment and smile symmetry',
  },
  // 15: Real Results - Case 05 (Image 05)
  {
    id: 'item-case-05',
    image: TREATMENT_ASSETS.transformationBiteHarmony05,
    title: 'Case 05: Anterior Bite Harmony & Alignment',
    category: 'Orthodontic Correction',
    description: 'Systematic bite adjustment and anterior leveling delivering structural stability and enhanced smile aesthetics.',
    alt: 'Clinical before and after documentation of anterior bite harmony and tooth leveling',
  },
  // 16: Real Results - Case 06 (Image 06)
  {
    id: 'item-case-06',
    image: TREATMENT_ASSETS.transformationOcclusalGuidance06,
    title: 'Case 06: Occlusal Guidance & Crossbite Correction',
    category: 'Orthodontic Alignment',
    description: 'Conservative correction of transverse occlusal discrepancies, restoring balanced canine guidance and smile aesthetics.',
    alt: 'Photographic clinical records of crossbite correction and functional occlusal guidance',
  },
  // 17: Real Results - Case 07 (Image 07)
  {
    id: 'item-case-07',
    image: TREATMENT_ASSETS.transformationOrthodonticAlignment07,
    title: 'Case 07: Orthodontic Alignment & Smile Design',
    category: 'Orthodontic Alignment',
    description: 'Targeted correction of crowded anterior teeth and arch coordination, creating balanced facial aesthetics and oral health.',
    alt: 'Intraoral and facial photographic alignment records showing orthodontic correction',
  },
  // 18: Real Results - Case 08 (Image 08)
  {
    id: 'item-case-08',
    image: TREATMENT_ASSETS.transformationRehabilitation08,
    title: 'Case 08: Full Smile Rehabilitation & Proportions',
    category: 'Aesthetic Dentistry',
    description: 'Comprehensive restorative and aesthetic smile design re-establishing proportional tooth height, shade, and natural luster.',
    alt: 'Full aesthetic smile makeover and rehabilitation before and after documentation',
  },
  // 19: Real Results - Case 09 (Image 09)
  {
    id: 'item-case-09',
    image: TREATMENT_ASSETS.transformationRestorativeCrown09,
    title: 'Case 09: Restorative Crown & Enamel Restoration',
    category: 'Restorative Care',
    description: 'Biomimetic restorative craftsmanship repairing fractured anterior enamel with shade-matched clinical restorations.',
    alt: 'Anterior ceramic crown and enamel restoration before and after clinical photography',
  },
];

// Clinical Case Card with full composite preservation
const ClinicalCaseCard = ({
  item,
  badge = 'Clinical Documentation',
  onOpenFullscreen,
}: {
  item: LightboxItem;
  badge?: string;
  onOpenFullscreen: () => void;
}) => {
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
      onClick={onOpenFullscreen}
      className={`group rounded-2xl md:rounded-3xl border border-border bg-background-secondary p-4 sm:p-6 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-700 ease-out flex flex-col justify-between cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
            {item.category}
          </span>
          <span className="text-[11px] font-medium text-text-muted/70 tracking-wide uppercase">
            {badge}
          </span>
        </div>

        {/* Clinical Image Container - strictly object-contain with clean neutral frame to preserve text/labels */}
        <div className="relative w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden bg-black/95 flex items-center justify-center p-2 mb-5 border border-border/50 group-hover:border-primary/40 transition-colors">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          />
          {/* Subtle tap to enlarge hint overlay */}
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
            <Maximize2 size={13} />
          </div>
        </div>

        {/* Content */}
        <h4 className="text-xl sm:text-2xl font-serif text-text mb-2 group-hover:text-primary transition-colors">
          {item.title}
        </h4>
        <p className="text-sm sm:text-base text-text-muted font-light leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-border/50 flex items-center justify-between text-xs text-text-muted">
        <span className="inline-flex items-center gap-1.5 text-primary font-medium">
          <CheckCircle2 size={14} /> Verified Thukral Patient Case
        </span>
        <span className="italic inline-flex items-center gap-1 group-hover:text-primary transition-colors">
          Tap for Fullscreen &rarr;
        </span>
      </div>
    </div>
  );
};

// Treatment Service Card (Clean photographic showcase with crisp title and light, visible image)
const TreatmentCard = ({
  item,
  size = 'small',
  objectPosition = 'object-center',
  onOpenFullscreen,
}: {
  item: LightboxItem;
  size?: 'small' | 'large';
  objectPosition?: string;
  onOpenFullscreen: () => void;
}) => (
  <div
    onClick={onOpenFullscreen}
    className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer border border-border/80 bg-background-secondary ${
      size === 'large'
        ? 'md:col-span-2 aspect-[4/3] md:aspect-[21/9]'
        : 'aspect-[4/3] md:aspect-[4/5]'
    }`}
  >
    {/* Clean, 100% bright, fully visible photograph */}
    <div className="absolute inset-0 w-full h-full">
      <img
        src={item.image}
        alt={item.title}
        className={`w-full h-full object-cover ${objectPosition} transform transition-transform duration-[1.2s] group-hover:scale-105 opacity-100`}
        loading="lazy"
      />
    </div>
    
    {/* Subtle gradient at bottom solely to ensure the title is crisp and readable */}
    <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

    {/* Fullscreen Icon Indicator at Top Right */}
    <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/30 text-white flex items-center justify-center opacity-85 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 shadow-md">
      <Maximize2 size={14} className="text-white" />
    </div>

    {/* Bottom Footer: The Title (prominently displayed) and Action Button */}
    <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6 md:p-8 flex items-end justify-between gap-4 z-10">
      <div className="max-w-[85%] transform transition-transform duration-500 group-hover:-translate-y-1">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-white drop-shadow-md tracking-tight leading-snug">
          {item.title}
        </h3>
      </div>
      
      {/* Action Button */}
      <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full border border-white/50 bg-black/50 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-lg">
        <ArrowRight size={18} className="transform group-hover:translate-x-0.5 transition-transform duration-300 text-white" />
      </div>
    </div>
  </div>
);

// Transformation cases slice for the carousel (Cases 01 to 09, indices 11 to 19 in ALL_TREATMENT_ITEMS)
const TRANSFORMATION_CASES = ALL_TREATMENT_ITEMS.slice(11, 20);

const Treatments = () => {
  const location = useLocation();

  // Carousel state for Verified Patient Transformations
  const [carouselPage, setCarouselPage] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const totalPages = Math.ceil(TRANSFORMATION_CASES.length / 3); // 3 pages (3 cases each)

  const handlePrevPage = useCallback(() => {
    if (isAnimating || carouselPage <= 0) return;
    setIsAnimating(true);
    setCarouselPage((prev) => prev - 1);
    setTimeout(() => setIsAnimating(false), 450);
  }, [isAnimating, carouselPage]);

  const handleNextPage = useCallback(() => {
    if (isAnimating || carouselPage >= totalPages - 1) return;
    setIsAnimating(true);
    setCarouselPage((prev) => prev + 1);
    setTimeout(() => setIsAnimating(false), 450);
  }, [isAnimating, carouselPage, totalPages]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      handleNextPage();
    } else if (distance < -minSwipeDistance) {
      handlePrevPage();
    }
  };

  // Fullscreen Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goToPrevious = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + ALL_TREATMENT_ITEMS.length) % ALL_TREATMENT_ITEMS.length
    );
  }, []);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % ALL_TREATMENT_ITEMS.length
    );
  }, []);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, goToPrevious, goToNext]);

  // Scroll to top on load or to hash if present
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const section = document.getElementById(id);
        if (section) {
          const y = section.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      
      {/* 1. PREMIUM HERO SECTION — Authentic Chairside Clinical Care */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-border">
        <div className="page-container relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase mb-6 shadow-xs">
                <Sparkles size={13} className="text-primary animate-pulse" />
                <span>CLINICAL EXCELLENCE &middot; DENTAL & AESTHETIC</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-serif leading-[1.15] text-text mb-8">
                Complete Care for <br />
                <span className="italic text-primary">Your Smile.</span>
              </h1>
              <p className="text-base md:text-lg text-text-muted leading-relaxed font-light max-w-lg mb-10">
                At Thukral Dental & Aesthetic Clinic, every procedure is guided by meticulous diagnosis, advanced clinical technology, and Dr. Anchit Thukral&apos;s commitment to gentle, unhurried patient care tailored to your unique goals.
              </p>
              <div className="flex flex-wrap gap-5 items-center">
                <Link to="/appointment" className="btn-primary flex items-center gap-2">
                  <span>Book a Consultation</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="#services"
                  className="text-sm font-semibold uppercase tracking-wider text-text border-b border-text/20 pb-1 hover:border-primary hover:text-primary transition-all"
                >
                  Explore Treatments &darr;
                </a>
              </div>
            </div>

            {/* Right Visual: Original Photograph of Chairside Clinical Care (Index 0 in Lightbox) */}
            <div className="w-full lg:w-1/2 relative opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative w-full flex justify-center items-center">
                <div 
                  onClick={() => openLightbox(0)}
                  className="group relative w-full max-w-md sm:max-w-lg aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-border/80 bg-background-secondary cursor-pointer transition-transform duration-500 hover:scale-[1.01]"
                >
                  <img 
                    src={ALL_TREATMENT_ITEMS[0].image} 
                    alt={ALL_TREATMENT_ITEMS[0].alt} 
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Subtle Maximize Button on Hover */}
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-85 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 size={16} />
                  </div>

                  {/* Subtle Badge Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-background/90 backdrop-blur-md border border-border/50 shadow-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        In-Clinic Care
                      </span>
                      <span className="text-[11px] text-text-muted italic">
                        Tap for Fullscreen
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-text font-medium">
                      Multi-specialty clinical facility equipped for modern restorative & surgical care.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary/15 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TREATMENTS EDITORIAL SHOWCASE SECTION — Mapped with Authentic Clinic Imagery */}
      <section id="services" className="py-24 lg:py-32 bg-background-secondary border-b border-border">
        <div className="page-container">
          
          <div className="text-center mb-20 md:mb-28 opacity-0 animate-fade-in-up">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
              TREATMENTS &middot; SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text mb-6">
              Comprehensive Dental & Aesthetic Care
            </h2>
            <p className="text-base md:text-lg text-text-muted leading-relaxed font-light max-w-2xl mx-auto">
              Explore our core treatment disciplines, from preventative care and orthodontics to complex smile reconstructions. Tap any card to view detailed clinical photographs in high resolution.
            </p>
            <div className="w-16 h-[1px] bg-primary mx-auto mt-8" />
          </div>

          <div className="flex flex-col space-y-24 md:space-y-32">
            
            {/* Category 1: Smile & Aesthetic (Items 1, 2, 3) */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-8 flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-serif text-primary">01 /</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-text tracking-[0.05em] uppercase">
                    Smile & Aesthetic
                  </h3>
                </div>
                <span className="text-xs text-text-muted uppercase tracking-wider hidden sm:inline">
                  Aesthetic Excellence
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <TreatmentCard 
                  size="large"
                  item={ALL_TREATMENT_ITEMS[1]}
                  objectPosition="object-center"
                  onOpenFullscreen={() => openLightbox(1)}
                />
                <TreatmentCard 
                  item={ALL_TREATMENT_ITEMS[2]}
                  objectPosition="object-center"
                  onOpenFullscreen={() => openLightbox(2)}
                />
                <TreatmentCard 
                  item={ALL_TREATMENT_ITEMS[3]}
                  objectPosition="object-center"
                  onOpenFullscreen={() => openLightbox(3)}
                />
              </div>
            </div>

            {/* Category 2: Orthodontics & Alignment (Items 4, 5) */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-8 flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-serif text-primary">02 /</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-text tracking-[0.05em] uppercase">
                    Orthodontics & Clear Alignment
                  </h3>
                </div>
                <span className="text-xs text-text-muted uppercase tracking-wider hidden sm:inline">
                  Fixed Braces & Clear Aligners
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <TreatmentCard 
                  item={ALL_TREATMENT_ITEMS[4]}
                  objectPosition="object-center"
                  onOpenFullscreen={() => openLightbox(4)}
                />
                <TreatmentCard 
                  item={ALL_TREATMENT_ITEMS[5]}
                  objectPosition="object-top"
                  onOpenFullscreen={() => openLightbox(5)}
                />
              </div>
            </div>

            {/* Category 3: Restorative & General Care (Items 6, 7, 8) */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-8 flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-serif text-primary">03 /</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-text tracking-[0.05em] uppercase">
                    Restorative & Clinical Dentistry
                  </h3>
                </div>
                <span className="text-xs text-text-muted uppercase tracking-wider hidden sm:inline">
                  Preservation & Repair
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <TreatmentCard 
                  item={ALL_TREATMENT_ITEMS[6]}
                  objectPosition="object-center"
                  onOpenFullscreen={() => openLightbox(6)}
                />
                <TreatmentCard 
                  item={ALL_TREATMENT_ITEMS[7]}
                  objectPosition="object-top"
                  onOpenFullscreen={() => openLightbox(7)}
                />
                <TreatmentCard 
                  item={ALL_TREATMENT_ITEMS[8]}
                  objectPosition="object-center"
                  onOpenFullscreen={() => openLightbox(8)}
                />
              </div>
            </div>

            {/* Category 4: Advanced Aesthetic & Clinical Care (Items 9, 10) */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-8 flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-serif text-primary">04 /</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-text tracking-[0.05em] uppercase">
                    Advanced Laser & Clinical Aesthetics
                  </h3>
                </div>
                <span className="text-xs text-text-muted uppercase tracking-wider hidden sm:inline">
                  State-of-the-Art Technology
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <TreatmentCard 
                  item={ALL_TREATMENT_ITEMS[9]}
                  objectPosition="object-center"
                  onOpenFullscreen={() => openLightbox(9)}
                />
                <TreatmentCard 
                  item={ALL_TREATMENT_ITEMS[10]}
                  objectPosition="object-top"
                  onOpenFullscreen={() => openLightbox(10)}
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. CLINICAL CASE TRANSFORMATIONS GALLERY (3-Item Carousel with Cases 01 to 09) */}
      <section id="transformations" className="py-24 lg:py-32 bg-background border-b border-border">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20 opacity-0 animate-fade-in-up">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
              CLINICAL EVIDENCE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-6">
              Verified Patient Transformations
            </h2>
            <p className="text-base md:text-lg text-text-muted leading-relaxed font-light">
              Real clinical documentation displaying pre- and post-treatment photographic records. Tap any case to inspect full-resolution clinical records.
            </p>
          </div>
          
          {/* Carousel Wrapper with outer side navigation arrows */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-14 md:px-16 lg:px-20">
            
            {/* Desktop / Tablet Left Navigation Arrow */}
            <button
              type="button"
              onClick={handlePrevPage}
              disabled={carouselPage === 0 || isAnimating}
              aria-label="Previous transformation cases"
              className={`absolute left-0 sm:left-1 md:left-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full border flex items-center justify-center transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                carouselPage === 0
                  ? 'bg-background-secondary border-border/40 text-text-muted/30 cursor-not-allowed opacity-30 shadow-none'
                  : 'bg-background border-border text-text hover:border-primary hover:bg-primary hover:text-white cursor-pointer hover:shadow-2xl hover:scale-105 active:scale-95'
              }`}
            >
              <ChevronLeft size={24} className="stroke-[2.5]" />
            </button>

            {/* Desktop / Tablet Right Navigation Arrow */}
            <button
              type="button"
              onClick={handleNextPage}
              disabled={carouselPage >= totalPages - 1 || isAnimating}
              aria-label="Next transformation cases"
              className={`absolute right-0 sm:right-1 md:right-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full border flex items-center justify-center transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                carouselPage >= totalPages - 1
                  ? 'bg-background-secondary border-border/40 text-text-muted/30 cursor-not-allowed opacity-30 shadow-none'
                  : 'bg-background border-border text-text hover:border-primary hover:bg-primary hover:text-white cursor-pointer hover:shadow-2xl hover:scale-105 active:scale-95'
              }`}
            >
              <ChevronRight size={24} className="stroke-[2.5]" />
            </button>

            {/* Carousel Viewport Container (Overflow Hidden) */}
            <div 
              className="overflow-hidden rounded-2xl md:rounded-3xl p-1"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-[400ms] ease-out will-change-transform"
                style={{
                  transform: `translateX(-${carouselPage * 100}%)`,
                }}
              >
                {/* 3 Pages (0, 1, 2) each containing 3 complete cards side-by-side */}
                {Array.from({ length: totalPages }).map((_, pageIdx) => {
                  const pageCases = TRANSFORMATION_CASES.slice(pageIdx * 3, pageIdx * 3 + 3);
                  return (
                    <div
                      key={`page-${pageIdx}`}
                      className="w-full shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-1 py-2"
                    >
                      {pageCases.map((caseItem, idxOnPage) => {
                        const globalLightboxIndex = 11 + pageIdx * 3 + idxOnPage;
                        return (
                          <div key={caseItem.id} className="h-full">
                            <ClinicalCaseCard
                              item={caseItem}
                              badge={`Case 0${pageIdx * 3 + idxOnPage + 1}`}
                              onOpenFullscreen={() => openLightbox(globalLightboxIndex)}
                            />
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Indicators & Range Counter */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/60 pt-6">
              
              {/* Range Counter (e.g. 01–03 / 09) */}
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium tracking-wider text-text-muted">
                <span className="font-serif text-base md:text-lg text-primary font-semibold">
                  {`0${carouselPage * 3 + 1}–0${Math.min((carouselPage + 1) * 3, TRANSFORMATION_CASES.length)}`}
                </span>
                <span className="text-border">/</span>
                <span>{`0${TRANSFORMATION_CASES.length} Cases Documented`}</span>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center gap-2.5" role="tablist" aria-label="Carousel pagination">
                {Array.from({ length: totalPages }).map((_, dotIdx) => (
                  <button
                    key={`dot-${dotIdx}`}
                    type="button"
                    role="tab"
                    aria-selected={carouselPage === dotIdx}
                    aria-label={`Go to page ${dotIdx + 1}: Cases 0${dotIdx * 3 + 1} to 0${Math.min((dotIdx + 1) * 3, TRANSFORMATION_CASES.length)}`}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setCarouselPage(dotIdx);
                        setTimeout(() => setIsAnimating(false), 450);
                      }
                    }}
                    className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary ${
                      carouselPage === dotIdx
                        ? 'w-8 h-2.5 bg-primary rounded-full'
                        : 'w-2.5 h-2.5 bg-border hover:bg-text-muted/40 rounded-full'
                    }`}
                  />
                ))}
              </div>

              {/* Mobile Previous / Next Touch Buttons */}
              <div className="flex items-center gap-2 sm:hidden">
                <button
                  type="button"
                  onClick={handlePrevPage}
                  disabled={carouselPage === 0 || isAnimating}
                  aria-label="Previous cases"
                  className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1 ${
                    carouselPage === 0
                      ? 'border-border/40 text-text-muted/30 cursor-not-allowed'
                      : 'border-border bg-background-secondary text-text'
                  }`}
                >
                  <ChevronLeft size={14} /> Prev
                </button>
                <button
                  type="button"
                  onClick={handleNextPage}
                  disabled={carouselPage >= totalPages - 1 || isAnimating}
                  aria-label="Next cases"
                  className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1 ${
                    carouselPage >= totalPages - 1
                      ? 'border-border/40 text-text-muted/30 cursor-not-allowed'
                      : 'border-border bg-background-secondary text-text'
                  }`}
                >
                  Next <ChevronRight size={14} />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. APPOINTMENT CTA SECTION */}
      <section className="py-24 lg:py-32 bg-text text-background relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-30 pointer-events-none" />
        
        <div className="page-container relative z-10 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8 max-w-3xl">
            Let&apos;s create a healthier, <br className="hidden md:block" />
            <span className="italic text-background/80">more confident smile.</span>
          </h2>
          <p className="text-base md:text-lg text-background/70 font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Schedule an unhurried consultation with Dr. Anchit Thukral to discuss your treatment options with complete transparency.
          </p>
          <Link 
            to="/appointment" 
            className="bg-background text-text px-8 py-4 rounded-full hover:bg-primary hover:text-background transition-all duration-300 font-medium tracking-wide text-sm md:text-base flex items-center gap-2 group shadow-xl hover:shadow-2xl hover:scale-[1.02]"
          >
            <span>BOOK AN APPOINTMENT</span>
            <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          
          <div className="mt-16 flex items-center space-x-2 text-background/80">
            <div className="flex text-[#FFB800]">
              {[1, 2, 3, 4, 5].map((i) => (
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

      {/* ============================================================ */}
      {/* 5. FULL-SCREEN LIGHTBOX MODAL */}
      {/* ============================================================ */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full-screen treatment image viewer"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Header Controls Bar */}
          <div
            className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between text-white z-30 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Counter & Indicator */}
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-white/10 border border-white/20 font-mono text-xs sm:text-sm tracking-wider">
                {String(lightboxIndex + 1).padStart(2, '0')} / {String(ALL_TREATMENT_ITEMS.length).padStart(2, '0')}
              </span>
              <span className="text-xs sm:text-sm text-white/70 hidden md:inline font-light">
                Use &larr; &rarr; arrows to navigate &bull; Esc to close
              </span>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close full-screen image"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xl focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <X size={20} />
            </button>
          </div>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all duration-200 z-30 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all duration-200 z-30 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <ChevronRight size={24} />
          </button>

          {/* Central Full-Resolution Image & Caption Container */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[92vh] p-4 sm:p-8 flex flex-col items-center justify-center z-20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Wrapper */}
            <div className="relative w-full h-[65vh] sm:h-[72vh] flex items-center justify-center">
              <img
                src={ALL_TREATMENT_ITEMS[lightboxIndex].image}
                alt={ALL_TREATMENT_ITEMS[lightboxIndex].alt}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl transition-transform duration-300 select-none border border-white/10"
              />
            </div>

            {/* Caption & Category Area */}
            <div className="mt-4 sm:mt-6 text-center max-w-2xl px-4">
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full inline-block mb-2">
                {ALL_TREATMENT_ITEMS[lightboxIndex].category}
              </span>
              <h3 className="text-lg sm:text-2xl font-serif text-white mb-1.5">
                {ALL_TREATMENT_ITEMS[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                {ALL_TREATMENT_ITEMS[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Treatments;
