import { useState } from 'react';

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  title: string;
  orientation: 'landscape' | 'portrait' | 'square';
  aspectRatio: string;
  objectPosition?: string;
}

const environmentImages: GalleryImage[] = [
  {
    id: 'env-1',
    url: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792664622/01.webp',
    alt: 'Thukral Dental Clinic - State-of-the-art modern clinical treatment operatory',
    title: 'Modern Clinical Operatory',
    orientation: 'landscape',
    aspectRatio: '3:2',
    objectPosition: 'object-center',
  },
  {
    id: 'env-c1',
    url: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792664868/52688528_923426558006652_435400656069591040_n.jpg',
    alt: 'Thukral Dental Clinic - Collaborative chairside clinical procedure session',
    title: 'Clinical Operatory Session',
    orientation: 'portrait',
    aspectRatio: '3:4',
    objectPosition: 'object-[center_15%]',
  },
  {
    id: 'env-c2',
    url: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792664920/52720428_923426484673326_9035049136948248576_n.jpg',
    alt: 'Thukral Dental Clinic - Dedicated chairside dental treatment and clinical precision',
    title: 'Chairside Procedure Precision',
    orientation: 'portrait',
    aspectRatio: '3:4',
    objectPosition: 'object-[center_15%]',
  },
  {
    id: 'env-c3',
    url: '/images/gallery/specialist-clinical-focus.jpg',
    alt: 'Thukral Dental Clinic - Focused dental specialist performing procedure under clinical illumination',
    title: 'Specialist Clinical Focus',
    orientation: 'portrait',
    aspectRatio: '3:4',
    objectPosition: 'object-[center_center]',
  },
  {
    id: 'env-c4',
    url: '/images/gallery/treatment-suite.jpg',
    alt: 'Thukral Dental Clinic - Comprehensive patient care and advanced operatory setting',
    title: 'Comprehensive Treatment Suite',
    orientation: 'portrait',
    aspectRatio: '3:4',
    objectPosition: 'object-[center_center]',
  },
  {
    id: 'env-7',
    url: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792665110/489457755_2626714481011176_5338931340936037231_n.jpg',
    alt: 'Thukral Dental Clinic - Clinical exterior and welcoming practice ambiance in Varanasi',
    title: 'Practice Ambiance & Architecture',
    orientation: 'landscape',
    aspectRatio: '3:2',
    objectPosition: 'object-center',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
            A GLIMPSE INSIDE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-text font-serif">
            Our Environment
          </h2>
          <p className="mt-4 text-base md:text-lg text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
            Step into a calming, hygienic, and modern dental sanctuary designed around your comfort, safety, and well-being.
          </p>
        </div>

        {/* 
          Balanced Responsive Editorial Gallery Grid (6 Images):
          - Row 1: Featured Landscape Hero (2 cols on lg) + Clinical Portrait 1 (1 col on lg, identical row height)
          - Row 2: Triple Portrait Showcase (3 cols on lg: Portrait 2, Portrait 3, Portrait 4 with matching heights & portrait alignment)
          - Row 3: Panoramic Ambiance Feature (3 cols on lg, full-width cinematic architectural view)
          Result: Zero empty spaces, perfect rectangular outer boundary, completely balanced on desktop, tablet, and mobile.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto">
          
          {/* Tile 1: Hero Featured Image (Landscape - 2 cols on lg & sm) */}
          <div
            onClick={() => setSelectedImage(environmentImages[0])}
            className="sm:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-2xl border border-border/80 bg-background-secondary shadow-xs hover:shadow-xl hover:border-primary/40 transition-all duration-500 cursor-pointer aspect-[16/10] sm:aspect-auto sm:min-h-[440px] lg:min-h-[480px]"
          >
            <img
              src={environmentImages[0].url}
              alt={environmentImages[0].alt}
              loading="eager"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-sm font-medium tracking-wide">
                {environmentImages[0].title}
              </span>
            </div>
          </div>

          {/* Tile 2: Clinical Portrait 1 (Portrait - 1 col on lg & sm, matches height of Tile 1) */}
          <div
            onClick={() => setSelectedImage(environmentImages[1])}
            className="sm:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-2xl border border-border/80 bg-background-secondary shadow-xs hover:shadow-xl hover:border-primary/40 transition-all duration-500 cursor-pointer aspect-[3/4] sm:aspect-auto sm:min-h-[440px] lg:min-h-[480px]"
          >
            <img
              src={environmentImages[1].url}
              alt={environmentImages[1].alt}
              loading="lazy"
              className="w-full h-full object-cover object-[center_15%] transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-sm font-medium tracking-wide">
                {environmentImages[1].title}
              </span>
            </div>
          </div>

          {/* Tile 3: Clinical Portrait 2 (Portrait - 1 col on lg & sm) */}
          <div
            onClick={() => setSelectedImage(environmentImages[2])}
            className="sm:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-2xl border border-border/80 bg-background-secondary shadow-xs hover:shadow-lg hover:border-primary/40 transition-all duration-500 cursor-pointer aspect-[3/4] sm:min-h-[420px] lg:min-h-[460px]"
          >
            <img
              src={environmentImages[2].url}
              alt={environmentImages[2].alt}
              loading="lazy"
              className="w-full h-full object-cover object-[center_15%] transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                {environmentImages[2].title}
              </span>
            </div>
          </div>

          {/* Tile 4: Clinical Portrait 3 (Portrait - 1 col on lg & sm) */}
          <div
            onClick={() => setSelectedImage(environmentImages[3])}
            className="sm:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-2xl border border-border/80 bg-background-secondary shadow-xs hover:shadow-lg hover:border-primary/40 transition-all duration-500 cursor-pointer aspect-[3/4] sm:min-h-[420px] lg:min-h-[460px]"
          >
            <img
              src={environmentImages[3].url}
              alt={environmentImages[3].alt}
              loading="lazy"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                {environmentImages[3].title}
              </span>
            </div>
          </div>

          {/* Tile 5: Clinical Portrait 4 (Portrait - 1 col on lg & sm) */}
          <div
            onClick={() => setSelectedImage(environmentImages[4])}
            className="sm:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-2xl border border-border/80 bg-background-secondary shadow-xs hover:shadow-lg hover:border-primary/40 transition-all duration-500 cursor-pointer aspect-[3/4] sm:min-h-[420px] lg:min-h-[460px]"
          >
            <img
              src={environmentImages[4].url}
              alt={environmentImages[4].alt}
              loading="lazy"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                {environmentImages[4].title}
              </span>
            </div>
          </div>

          {/* Tile 6: Practice Ambiance & Architecture (Panoramic Landscape - 3 cols on lg, 2 cols on sm) */}
          <div
            onClick={() => setSelectedImage(environmentImages[5])}
            className="sm:col-span-2 lg:col-span-3 group relative overflow-hidden rounded-2xl border border-border/80 bg-background-secondary shadow-xs hover:shadow-xl hover:border-primary/40 transition-all duration-500 cursor-pointer aspect-[16/9] md:aspect-[21/9] sm:min-h-[380px] lg:min-h-[420px]"
          >
            <img
              src={environmentImages[5].url}
              alt={environmentImages[5].alt}
              loading="lazy"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-sm font-medium tracking-wide">
                {environmentImages[5].title}
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal on Image Click */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white text-sm font-mono tracking-widest uppercase cursor-pointer"
            >
              Close &times;
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            <p className="mt-4 text-white/80 font-serif text-base sm:text-lg text-center">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
