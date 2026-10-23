import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

interface GalleryItem {
  id: string;
  number: string;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'case-01',
    number: '01',
    title: 'Precision Diastema Closure',
    description:
      'Fixed orthodontic treatment closing anterior gaps and restoring dental symmetry for a natural, harmonious smile.',
    imageUrl:
      'https://res.cloudinary.com/hmjaaen2/image/upload/v1792653462/39ad19f2-a698-4746-885f-4a9bb805a729.jpg',
    altText:
      'Clinical before and after photographic documentation of gap closure orthodontics by Dr. Anchit Thukral',
  },
  {
    id: 'case-02',
    number: '02',
    title: 'Orthodontic Alignment & Smile Design',
    description:
      'Targeted correction of crowded anterior teeth and arch coordination, creating balanced facial aesthetics and oral health.',
    imageUrl:
      'https://res.cloudinary.com/hmjaaen2/image/upload/v1792653419/7acc836f-8c51-4d99-9093-551eff85029a.jpg',
    altText:
      'Intraoral and facial photographic alignment records showing orthodontic correction',
  },
  {
    id: 'case-03',
    number: '03',
    title: 'Comprehensive Orthodontic Transformation',
    description:
      'Multi-angle clinical case resolving severe anterior overjet and tooth protrusion with conservative orthodontic guidance.',
    imageUrl:
      'https://res.cloudinary.com/hmjaaen2/image/upload/v1792653385/3f43ee23-81ee-49db-a78d-3a754fe1f714.jpg',
    altText:
      'Multi-angle clinical before and after documentation of overjet and profile correction',
  },
  {
    id: 'case-04',
    number: '04',
    title: 'Aesthetic Smile Makeover & Restoration',
    description:
      'Restorative treatment harmonizing tooth shade, contour, and alignment to deliver a healthy, revitalized smile.',
    imageUrl:
      'https://res.cloudinary.com/hmjaaen2/image/upload/v1792653344/2358833f-8984-4e1d-9686-cc4b1a0242c9.jpg',
    altText:
      'Before and after smile makeover resolving dental discoloration and alignment discrepancies',
  },
];

const WhyThukral = () => {
  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goToPrevious = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev === 0 ? galleryItems.length - 1 : prev - 1) : null
    );
  }, []);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev === galleryItems.length - 1 ? 0 : prev + 1) : null
    );
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, goToPrevious, goToNext]);

  return (
    <section
      id="why-thukral"
      className="relative py-24 md:py-36 bg-[#F5F2EC] text-[#1A1A1A] overflow-hidden border-t border-[#E5DFD5]"
    >
      {/* Background Architectural Watermark & Warm Lighting */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] font-serif text-[18vw] leading-none whitespace-nowrap text-[#4A3B32]">
        PORTFOLIO
      </div>
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#4A3B32]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#4A3B32]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="page-container relative z-10">

        {/* ============================================================ */}
        {/* EDITORIAL SECTION HEADER */}
        {/* ============================================================ */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FAFAF8] border border-[#E5DFD5] mb-5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#4A3B32] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#4A3B32]">
              THE THUKRAL EXPERIENCE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1A1A1A] leading-[1.12] tracking-tight mb-5">
            Care You Can See. <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#4A3B32]">
              Details That Matter.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#6B625B] font-light leading-relaxed">
            Take a closer look at the people, environment, and thoughtful approach behind your dental care.
          </p>
        </div>

        {/* ============================================================ */}
        {/* BALANCED 2-COLUMN EDITORIAL MASONRY GRID */}
        {/* Eliminates the empty gap on the left by distributing cases 01 & 04 (Left) and 02 & 03 (Right) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

          {/* ---------------------------------------------------------- */}
          {/* LEFT COLUMN: Case 01 & Case 04 */}
          {/* ---------------------------------------------------------- */}
          <div className="flex flex-col gap-10 sm:gap-12">
            
            {/* Case 01: Featured Case */}
            <div
              className="group cursor-pointer select-none"
              onClick={() => openLightbox(0)}
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl md:rounded-3xl overflow-hidden bg-[#FAFAF8] border border-[#E5DFD5] shadow-xs group-hover:shadow-xl group-hover:border-[#4A3B32]/40 transition-all duration-500 flex items-center justify-center p-3 sm:p-4">
                <img
                  src={galleryItems[0].imageUrl}
                  alt={galleryItems[0].altText}
                  className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  loading="eager"
                />

                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-[#FAFAF8]/90 backdrop-blur-md border border-[#E5DFD5] text-[#4A3B32] flex items-center justify-center shadow-sm opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 size={16} />
                </div>

                <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 px-3 py-1 rounded-full bg-[#FAFAF8]/95 backdrop-blur-md border border-[#E5DFD5] text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#4A3B32] shadow-xs">
                  FEATURED CASE &bull; 01 / 04
                </div>
              </div>

              {/* Caption Directly Below Image 1 */}
              <div className="mt-5 sm:mt-6 transition-all duration-300">
                <div className="flex items-center justify-between pb-2 border-b border-[#E5DFD5]/80">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-semibold tracking-wider text-[#4A3B32]">
                      01 / 04
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif text-[#1A1A1A] group-hover:text-[#4A3B32] transition-colors">
                      {galleryItems[0].title}
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-medium text-[#6B625B] group-hover:text-[#4A3B32] transition-colors">
                    <span className="hidden sm:inline">Inspect Full Screen</span>
                    <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-[#6B625B] font-light leading-relaxed">
                  {galleryItems[0].description}
                </p>
              </div>
            </div>

            {/* Case 04: Panoramic / Comprehensive Case */}
            <div
              className="group cursor-pointer select-none"
              onClick={() => openLightbox(3)}
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl md:rounded-3xl overflow-hidden bg-[#FAFAF8] border border-[#E5DFD5] shadow-xs group-hover:shadow-xl group-hover:border-[#4A3B32]/40 transition-all duration-500 flex items-center justify-center p-3 sm:p-4">
                <img
                  src={galleryItems[3].imageUrl}
                  alt={galleryItems[3].altText}
                  className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  loading="lazy"
                />

                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-[#FAFAF8]/90 backdrop-blur-md border border-[#E5DFD5] text-[#4A3B32] flex items-center justify-center shadow-sm opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 size={16} />
                </div>

                <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 px-3 py-1 rounded-full bg-[#FAFAF8]/95 backdrop-blur-md border border-[#E5DFD5] text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#4A3B32] shadow-xs flex items-center gap-2">
                  <Sparkles size={12} />
                  <span>CASE STUDY &bull; 04 / 04</span>
                </div>
              </div>

              {/* Caption Below Image 4 */}
              <div className="mt-5 sm:mt-6 transition-all duration-300">
                <div className="flex items-center justify-between pb-2 border-b border-[#E5DFD5]/80">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-semibold tracking-wider text-[#4A3B32]">
                      04 / 04
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif text-[#1A1A1A] group-hover:text-[#4A3B32] transition-colors">
                      {galleryItems[3].title}
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-medium text-[#6B625B] group-hover:text-[#4A3B32] transition-colors">
                    <span className="hidden sm:inline">Inspect Full Screen</span>
                    <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-[#6B625B] font-light leading-relaxed">
                  {galleryItems[3].description}
                </p>
              </div>
            </div>

          </div>

          {/* ---------------------------------------------------------- */}
          {/* RIGHT COLUMN: Case 02 & Case 03 */}
          {/* ---------------------------------------------------------- */}
          <div className="flex flex-col gap-10 sm:gap-12">

            {/* Case 02 */}
            <div
              className="group cursor-pointer select-none"
              onClick={() => openLightbox(1)}
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl md:rounded-3xl overflow-hidden bg-[#FAFAF8] border border-[#E5DFD5] shadow-xs group-hover:shadow-xl group-hover:border-[#4A3B32]/40 transition-all duration-500 flex items-center justify-center p-3 sm:p-4">
                <img
                  src={galleryItems[1].imageUrl}
                  alt={galleryItems[1].altText}
                  className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  loading="lazy"
                />

                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-[#FAFAF8]/90 backdrop-blur-md border border-[#E5DFD5] text-[#4A3B32] flex items-center justify-center shadow-sm opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 size={16} />
                </div>

                <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 px-3 py-1 rounded-full bg-[#FAFAF8]/95 backdrop-blur-md border border-[#E5DFD5] text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#4A3B32] shadow-xs">
                  CASE STUDY &bull; 02 / 04
                </div>
              </div>

              {/* Caption Below Image 2 */}
              <div className="mt-5 sm:mt-6 transition-all duration-300">
                <div className="flex items-center justify-between pb-2 border-b border-[#E5DFD5]/80">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-semibold tracking-wider text-[#4A3B32]">
                      02 / 04
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif text-[#1A1A1A] group-hover:text-[#4A3B32] transition-colors">
                      {galleryItems[1].title}
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-medium text-[#6B625B] group-hover:text-[#4A3B32] transition-colors">
                    <span className="hidden sm:inline">Inspect Full Screen</span>
                    <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-[#6B625B] font-light leading-relaxed">
                  {galleryItems[1].description}
                </p>
              </div>
            </div>

            {/* Case 03 */}
            <div
              className="group cursor-pointer select-none"
              onClick={() => openLightbox(2)}
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl md:rounded-3xl overflow-hidden bg-[#FAFAF8] border border-[#E5DFD5] shadow-xs group-hover:shadow-xl group-hover:border-[#4A3B32]/40 transition-all duration-500 flex items-center justify-center p-3 sm:p-4">
                <img
                  src={galleryItems[2].imageUrl}
                  alt={galleryItems[2].altText}
                  className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  loading="lazy"
                />

                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-[#FAFAF8]/90 backdrop-blur-md border border-[#E5DFD5] text-[#4A3B32] flex items-center justify-center shadow-sm opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 size={16} />
                </div>

                <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 px-3 py-1 rounded-full bg-[#FAFAF8]/95 backdrop-blur-md border border-[#E5DFD5] text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#4A3B32] shadow-xs">
                  CASE STUDY &bull; 03 / 04
                </div>
              </div>

              {/* Caption Below Image 3 */}
              <div className="mt-5 sm:mt-6 transition-all duration-300">
                <div className="flex items-center justify-between pb-2 border-b border-[#E5DFD5]/80">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-semibold tracking-wider text-[#4A3B32]">
                      03 / 04
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif text-[#1A1A1A] group-hover:text-[#4A3B32] transition-colors">
                      {galleryItems[2].title}
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-medium text-[#6B625B] group-hover:text-[#4A3B32] transition-colors">
                    <span className="hidden sm:inline">Inspect Full Screen</span>
                    <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-[#6B625B] font-light leading-relaxed">
                  {galleryItems[2].description}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* ============================================================ */}
        {/* PROMINENT TESTIMONIALS CALL TO ACTION */}
        {/* ============================================================ */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#E5DFD5]/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4A3B32] block mb-1">
              PATIENT EXPERIENCES
            </span>
            <p className="text-base sm:text-lg text-[#1A1A1A] font-serif font-medium">
              Real experiences. A closer look at patient perspectives.
            </p>
            <p className="text-xs sm:text-sm text-[#6B625B] font-light mt-1">
              Hear directly from individuals who entrusted their smiles to Thukral Dental & Aesthetic Clinic.
            </p>
          </div>

          <Link
            to="/testimonials"
            className="inline-flex items-center justify-center gap-2.5 bg-[#4A3B32] text-[#FAFAF8] px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-[#3A2E26] shadow-md hover:shadow-xl transition-all duration-300 group shrink-0"
          >
            <span>Read Patient Testimonials</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-base">
              ↗
            </span>
          </Link>
        </div>

      </div>

      {/* ============================================================ */}
      {/* FULL-SCREEN LIGHTBOX OVERLAY */}
      {/* ============================================================ */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full-screen photograph viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1A]/95 backdrop-blur-md transition-opacity duration-300"
          onClick={closeLightbox}
        >
          {/* Lightbox Header / Controls Bar */}
          <div
            className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between text-[#FAFAF8] z-20 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Counter */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#FAFAF8]/10 border border-[#FAFAF8]/20 font-mono text-xs tracking-wider">
                {galleryItems[lightboxIndex].number} / 04
              </span>
              <span className="text-xs sm:text-sm text-[#FAFAF8]/70 hidden md:inline font-light">
                Use &larr; &rarr; arrows or swipe to navigate &bull; Esc to close
              </span>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close full-screen image"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FAFAF8]/10 hover:bg-[#FAFAF8]/25 border border-[#FAFAF8]/20 text-[#FAFAF8] flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#FAFAF8]/10 hover:bg-[#FAFAF8]/25 border border-[#FAFAF8]/20 text-[#FAFAF8] flex items-center justify-center transition-all duration-200 z-20 cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#FAFAF8]/10 hover:bg-[#FAFAF8]/25 border border-[#FAFAF8]/20 text-[#FAFAF8] flex items-center justify-center transition-all duration-200 z-20 cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>

          {/* Central Active Image Container */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh] p-4 sm:p-12 flex flex-col items-center justify-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] sm:h-[72vh] flex items-center justify-center">
              <img
                src={galleryItems[lightboxIndex].imageUrl}
                alt={galleryItems[lightboxIndex].altText}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-300 select-none"
              />
            </div>

            {/* Restrained Caption Area Below Image in Lightbox */}
            <div className="mt-4 sm:mt-6 text-center max-w-2xl px-4">
              <h3 className="text-lg sm:text-xl font-serif text-[#FAFAF8] mb-1">
                {galleryItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#FAFAF8]/70 font-light leading-relaxed">
                {galleryItems[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyThukral;
