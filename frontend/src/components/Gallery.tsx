import { useState } from 'react';

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  title: string;
}

const environmentImages: GalleryImage[] = [
  {
    id: 'env-1',
    url: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792664622/01.webp',
    alt: 'Thukral Dental & Aesthetic Clinic - State-of-the-art modern clinical treatment operatory',
    title: 'Modern Clinical Operatory',
  },
  {
    id: 'env-2',
    url: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792664622/03.webp',
    alt: 'Thukral Dental & Aesthetic Clinic - Patient consultation area and diagnostic facilities',
    title: 'Consultation & Diagnostics',
  },
  {
    id: 'env-3',
    url: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792664868/52688528_923426558006652_435400656069591040_n.jpg',
    alt: 'Thukral Dental & Aesthetic Clinic - Reception and welcoming patient arrival lounge',
    title: 'Patient Lounge & Reception',
  },
  {
    id: 'env-4',
    url: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792664622/02.webp',
    alt: 'Thukral Dental & Aesthetic Clinic - Gentle, personalized doctor-patient clinical interaction',
    title: 'Thoughtful Patient Care',
  },
  {
    id: 'env-5',
    url: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792665133/489908746_2626714064344551_8043259614026675697_n.jpg',
    alt: 'Thukral Dental & Aesthetic Clinic - Sterilized treatment suite and ergonomic dental equipment',
    title: 'Sterilization & Treatment Suite',
  },
  {
    id: 'env-6',
    url: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792665135/489425975_2626714087677882_2677709627538054550_n.jpg',
    alt: 'Thukral Dental & Aesthetic Clinic - Clinical precision operatory with high-grade hygiene',
    title: 'Advanced Treatment Environment',
  },
  {
    id: 'env-7',
    url: 'https://res.cloudinary.com/hmjaaen2/image/upload/v1792665110/489457755_2626714481011176_5338931340936037231_n.jpg',
    alt: 'Thukral Dental & Aesthetic Clinic - Clinical exterior and welcoming practice ambiance in Varanasi',
    title: 'Practice Ambiance & Architecture',
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
          Asymmetric 7-Image Editorial Grid (3-column composition on desktop)
          - Image 1 (Hero Feature): spans 2 cols and 2 rows for prominence (~2x standard size)
          - Images 2 & 3: stacked on the 3rd column
          - Images 4, 5, 6, 7: balanced row below
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto">
          
          {/* Tile 1: Hero Featured Image (Spans 2 columns on desktop) */}
          <div
            onClick={() => setSelectedImage(environmentImages[0])}
            className="sm:col-span-2 sm:row-span-2 group relative overflow-hidden rounded-2xl border border-border/80 bg-background-secondary shadow-xs hover:shadow-xl hover:border-primary/40 transition-all duration-500 cursor-pointer min-h-[340px] sm:min-h-[460px] lg:min-h-[500px]"
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

          {/* Tile 2 */}
          <div
            onClick={() => setSelectedImage(environmentImages[1])}
            className="group relative overflow-hidden rounded-2xl border border-border/80 bg-background-secondary shadow-xs hover:shadow-lg hover:border-primary/40 transition-all duration-500 cursor-pointer aspect-[4/3] sm:aspect-auto sm:h-[220px] lg:h-[240px]"
          >
            <img
              src={environmentImages[1].url}
              alt={environmentImages[1].alt}
              loading="lazy"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-white text-xs font-medium tracking-wide">
                {environmentImages[1].title}
              </span>
            </div>
          </div>

          {/* Tile 3 */}
          <div
            onClick={() => setSelectedImage(environmentImages[2])}
            className="group relative overflow-hidden rounded-2xl border border-border/80 bg-background-secondary shadow-xs hover:shadow-lg hover:border-primary/40 transition-all duration-500 cursor-pointer aspect-[4/3] sm:aspect-auto sm:h-[220px] lg:h-[240px]"
          >
            <img
              src={environmentImages[2].url}
              alt={environmentImages[2].alt}
              loading="lazy"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-white text-xs font-medium tracking-wide">
                {environmentImages[2].title}
              </span>
            </div>
          </div>

          {/* Tile 4 */}
          <div
            onClick={() => setSelectedImage(environmentImages[3])}
            className="group relative overflow-hidden rounded-2xl border border-border/80 bg-background-secondary shadow-xs hover:shadow-lg hover:border-primary/40 transition-all duration-500 cursor-pointer aspect-[4/3] sm:aspect-[4/3] lg:aspect-[16/11]"
          >
            <img
              src={environmentImages[3].url}
              alt={environmentImages[3].alt}
              loading="lazy"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-white text-xs font-medium tracking-wide">
                {environmentImages[3].title}
              </span>
            </div>
          </div>

          {/* Tile 5 */}
          <div
            onClick={() => setSelectedImage(environmentImages[4])}
            className="group relative overflow-hidden rounded-2xl border border-border/80 bg-background-secondary shadow-xs hover:shadow-lg hover:border-primary/40 transition-all duration-500 cursor-pointer aspect-[4/3] sm:aspect-[4/3] lg:aspect-[16/11]"
          >
            <img
              src={environmentImages[4].url}
              alt={environmentImages[4].alt}
              loading="lazy"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-white text-xs font-medium tracking-wide">
                {environmentImages[4].title}
              </span>
            </div>
          </div>

          {/* Tile 6 */}
          <div
            onClick={() => setSelectedImage(environmentImages[5])}
            className="group relative overflow-hidden rounded-2xl border border-border/80 bg-background-secondary shadow-xs hover:shadow-lg hover:border-primary/40 transition-all duration-500 cursor-pointer aspect-[4/3] sm:aspect-[4/3] lg:aspect-[16/11]"
          >
            <img
              src={environmentImages[5].url}
              alt={environmentImages[5].alt}
              loading="lazy"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-white text-xs font-medium tracking-wide">
                {environmentImages[5].title}
              </span>
            </div>
          </div>

          {/* Tile 7 (Spans full row on 3-col desktop or standard on mobile) */}
          <div
            onClick={() => setSelectedImage(environmentImages[6])}
            className="sm:col-span-2 lg:col-span-3 group relative overflow-hidden rounded-2xl border border-border/80 bg-background-secondary shadow-xs hover:shadow-lg hover:border-primary/40 transition-all duration-500 cursor-pointer aspect-[16/9] sm:aspect-[21/9] lg:h-[280px]"
          >
            <img
              src={environmentImages[6].url}
              alt={environmentImages[6].alt}
              loading="lazy"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 sm:p-6">
              <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                {environmentImages[6].title}
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
