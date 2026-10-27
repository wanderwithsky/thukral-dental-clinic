import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { INITIAL_EDUCATIONAL_VIDEOS } from '../data/educationalVideos';
import EducationalVideoCard from './EducationalVideoCard';

const SmileSchoolPreview = () => {
  // Exactly three prominent video preview cards
  const previewVideos = INITIAL_EDUCATIONAL_VIDEOS.slice(0, 3);

  return (
    <section 
      id="smile-school-preview" 
      className="py-24 md:py-32 bg-background-secondary border-t border-border overflow-hidden relative"
      aria-labelledby="smile-school-heading"
    >
      {/* Subtle Warm Gradient Accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/[0.03] rounded-full blur-[140px] pointer-events-none -z-0" 
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <GraduationCap size={14} className="shrink-0" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase">
              DENTAL KNOWLEDGE, MADE SIMPLE
            </span>
          </div>

          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-text-muted mb-3">
            Smile School by Thukral
          </p>

          <h2 
            id="smile-school-heading" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-text mb-6 leading-tight"
          >
            “Better Smiles Begin With Better Knowledge.”
          </h2>

          <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
            Explore bite-sized dental education, practical guidance, and answers to the questions patients ask most often.
          </p>
        </div>

        {/* Three Prominent 9:16 Video Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
          {previewVideos.map((video) => (
            <EducationalVideoCard 
              key={video.id} 
              video={video} 
              showCategoryBadge={true} 
            />
          ))}
        </div>

        {/* Homepage CTA to Dedicated Page */}
        <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            to="/learn"
            className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 text-sm tracking-widest uppercase group shadow-md hover:shadow-xl transition-all duration-300"
          >
            <span>Explore Smile School</span>
            <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          
          <p className="text-xs text-text-muted mt-2 sm:mt-0 font-light">
            Educational videos by Dr. Anchit Thukral &amp; the Thukral Dental team.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SmileSchoolPreview;
