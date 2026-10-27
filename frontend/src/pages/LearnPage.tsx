import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, GraduationCap, ShieldAlert, Sparkles, Filter } from 'lucide-react';
import { INITIAL_EDUCATIONAL_VIDEOS, EDUCATION_CATEGORIES } from '../data/educationalVideos';
import EducationalVideoCard from '../components/EducationalVideoCard';

const INSTAGRAM_URL = "https://www.instagram.com/thukraldentalclinic/";

const LearnPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Topics');

  // Update Page Title and Meta Description for SEO
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Smile School by Thukral | Dental Education Hub | Thukral Dental";
    
    // Set or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const prevDescription = metaDescription ? metaDescription.getAttribute('content') : '';

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Smile School by Thukral: Clear answers to your dental questions. Discover bite-sized insights on oral hygiene, braces, aligners, and modern dentistry from Thukral Dental & Aesthetic Clinic.'
    );

    return () => {
      document.title = originalTitle;
      if (metaDescription && prevDescription) {
        metaDescription.setAttribute('content', prevDescription);
      }
    };
  }, []);

  const filteredVideos = useMemo(() => {
    if (selectedCategory === 'All Topics') {
      return INITIAL_EDUCATIONAL_VIDEOS;
    }
    return INITIAL_EDUCATIONAL_VIDEOS.filter(video => video.category === selectedCategory);
  }, [selectedCategory]);

  const scrollToLibrary = () => {
    const element = document.getElementById('educational-library');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden border-b border-border">
        {/* Ambient Warm Gradient Backdrop */}
        <div 
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[140px] -z-10 pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#C5A880]/[0.05] rounded-full blur-[120px] -z-10 pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="page-container relative z-10 text-center max-w-4xl mx-auto">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <GraduationCap size={15} />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase">
              LEARN WITH THUKRAL &middot; SMILE SCHOOL
            </span>
          </div>

          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-text-muted mb-4 block">
            Smile School by Thukral
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-text mb-6 leading-[1.15]">
            “Your Smile, <br className="hidden sm:block" />
            <span className="italic text-primary font-normal">Explained.</span>”
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed font-light max-w-2xl mx-auto mb-10">
            From everyday oral hygiene to understanding orthodontic treatment, explore dental education designed to help you make more informed decisions about your smile.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={scrollToLibrary}
              className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm tracking-widest uppercase group cursor-pointer shadow-md hover:shadow-lg transition-all"
            >
              <span>Explore the Videos</span>
              <ArrowDown size={16} className="transform transition-transform duration-300 group-hover:translate-y-1" />
            </button>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm tracking-wider uppercase text-text border border-border/80 rounded hover:border-primary hover:text-primary transition-all bg-background/50 backdrop-blur-sm"
              aria-label="Follow Thukral Dental on Instagram for more reels"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span>Follow on Instagram</span>
            </a>
          </div>

        </div>
      </section>

      {/* Educational Video Library Section */}
      <section id="educational-library" className="py-20 lg:py-28 bg-background relative">
        <div className="page-container">
          
          {/* Section Introduction & Category Navigation */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 lg:mb-16 pb-8 border-b border-border/60">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
                VIDEO LIBRARY &middot; TOPICS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-text leading-tight">
                Dental Knowledge Library
              </h2>
              <p className="text-sm sm:text-base text-text-muted font-light mt-2 max-w-xl">
                Bite-sized, portrait-format video guides created to demystify treatments, procedures, and daily oral care.
              </p>
            </div>

            {/* Topic Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-text-muted/70 flex items-center gap-1 mr-1 uppercase tracking-wider font-medium">
                <Filter size={12} />
                Category:
              </span>
              {EDUCATION_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded-full transition-all duration-300 cursor-pointer font-medium tracking-wide ${
                    selectedCategory === cat
                      ? 'bg-primary text-background shadow-sm'
                      : 'bg-background-secondary text-text-muted hover:text-text border border-border/60 hover:border-primary/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Videos Grid */}
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
              {filteredVideos.map((video) => (
                <EducationalVideoCard 
                  key={video.id} 
                  video={video} 
                  showCategoryBadge={true} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-background-secondary rounded-2xl border border-border/60 max-w-xl mx-auto">
              <Sparkles size={28} className="mx-auto text-primary mb-3" />
              <h3 className="text-xl font-serif text-text mb-2">Videos in preparation</h3>
              <p className="text-sm text-text-muted font-light mb-6">
                Educational videos for "{selectedCategory}" are currently in production and will be added here soon.
              </p>
              <button
                onClick={() => setSelectedCategory('All Topics')}
                className="text-xs font-semibold uppercase tracking-wider text-primary hover:underline cursor-pointer"
              >
                View all available topics &rarr;
              </button>
            </div>
          )}

          {/* Educational Disclaimer */}
          <div className="mt-20 pt-8 border-t border-border/60 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-2 text-xs text-text-muted/80 bg-background-secondary px-5 py-3 rounded-xl border border-border/60">
              <ShieldAlert size={14} className="text-primary shrink-0" />
              <span>
                <strong>Educational Disclaimer:</strong> The videos in Smile School provide general oral health education and information. They do not constitute a clinical diagnosis or replace an individual dental consultation.
              </span>
            </div>
          </div>

          {/* Consultation CTA Banner */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-background-secondary via-[#F9F6F0] to-[#EFE8DC] border border-border/80 shadow-sm text-center max-w-4xl mx-auto relative overflow-hidden">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-text mb-4">
              Have a Specific Dental Question?
            </h3>
            <p className="text-sm sm:text-base text-text-muted font-light max-w-xl mx-auto mb-8">
              Schedule a one-on-one consultation with Dr. Anchit Thukral at Thukral Dental &amp; Aesthetic Clinic in Varanasi to discuss your unique smile goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/appointment" className="btn-primary w-full sm:w-auto px-8 py-4 text-sm tracking-widest uppercase">
                Book an Appointment &rarr;
              </Link>
              <Link to="/treatments" className="w-full sm:w-auto text-text border-b border-text/20 pb-1 hover:border-primary hover:text-primary transition-all font-medium text-xs tracking-widest uppercase py-3">
                Explore Our Treatments
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default LearnPage;
