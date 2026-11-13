import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  ShieldCheck, 
  Eye, 
  Layers, 
  Sparkles, 
  ZoomIn, 
  X,
  Scan,
  Activity
} from 'lucide-react';
import { useAppointmentModal } from '../context/AppointmentModalContext';

const OpgPage: React.FC = () => {
  const { openModal } = useAppointmentModal();
  const [selectedZoomImage, setSelectedZoomImage] = useState<{ url: string; title: string; alt: string } | null>(null);

  // SEO Title and Meta Description
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "OPG Panoramic Dental X-Ray in Varanasi | Thukral Dental Clinic";

    let metaDescription = document.querySelector('meta[name="description"]');
    const prevDescription = metaDescription ? metaDescription.getAttribute('content') : '';

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Learn about Orthopantomogram (OPG) panoramic dental X-rays at Thukral Dental Clinic in Varanasi. Full-jaw two-dimensional imaging for wisdom teeth, jaw health, and treatment planning.'
    );

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    return () => {
      document.title = originalTitle;
      if (metaDescription && prevDescription) {
        metaDescription.setAttribute('content', prevDescription);
      }
    };
  }, []);

  // Keyboard handler for image lightbox
  useEffect(() => {
    if (!selectedZoomImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedZoomImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedZoomImage]);

  const scrollToOverview = () => {
    const el = document.getElementById('opg-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const detectionItems = [
    {
      num: '01',
      title: 'Impacted Wisdom Teeth',
      desc: 'Evaluation of wisdom tooth positioning, angulation, root morphology, and eruption patterns relative to the mandibular nerve canal.',
      tag: 'Oral Surgery'
    },
    {
      num: '02',
      title: 'Jawbone Abnormalities',
      desc: 'Broad visual assessment of structural jawbone changes, overall bone height, density patterns, and alveolar ridge resorption.',
      tag: 'Bone Assessment'
    },
    {
      num: '03',
      title: 'Dental Development',
      desc: 'Comprehensive view of tooth eruption stages, unerupted or congenitally missing teeth, and overall dental arch development.',
      tag: 'Development'
    },
    {
      num: '04',
      title: 'Cysts and Other Lesions',
      desc: 'Identification of bony radiolucencies, cysts, tumors, or pathoses within the maxilla and mandible requiring targeted clinical evaluation.',
      tag: 'Pathology'
    },
    {
      num: '05',
      title: 'TMJ Assessment',
      desc: 'Initial panoramic screening of the temporomandibular joint condyles, articular fossa, and gross bony symmetry between both sides.',
      tag: 'Joint Anatomy'
    },
    {
      num: '06',
      title: 'Orthodontic Planning',
      desc: 'Evaluation of tooth inclination, axial positioning, crowding, and spatial relationships before beginning braces or clear aligners.',
      tag: 'Orthodontics'
    }
  ];

  const steps = [
    {
      step: 'Step 1',
      title: 'Preparation',
      desc: 'The patient removes jewellery, earrings, necklaces, spectacles, hairpins, and any metallic items around the head and neck that could produce radiopaque ghost images.'
    },
    {
      step: 'Step 2',
      title: 'Positioning',
      desc: 'The patient stands or sits comfortably facing the machine. The chin rests on a padded chin cup, and a sterile bite guide helps align the anterior incisors precisely in the focal trough.'
    },
    {
      step: 'Step 3',
      title: 'Scanning',
      desc: 'The machine arm rotates smoothly around the patient’s head for approximately 12–20 seconds. The procedure is entirely painless, non-invasive, and requires the patient to remain still with tongue against the palate.'
    },
    {
      step: 'Step 4',
      title: 'Image Review',
      desc: 'The high-resolution digital panoramic radiograph is immediately loaded onto chairside clinical monitors for thorough evaluation, diagnosis, and treatment discussion.'
    }
  ];

  const benefits = [
    {
      title: 'Wide Coverage',
      desc: 'Captures the upper and lower dental arches, maxillary sinuses, nasal cavity, and jaw joints in a single continuous radiograph.'
    },
    {
      title: 'Non-Invasive Protocol',
      desc: 'No sensors or film packets need to be placed deep inside the oral cavity, ensuring zero soft-tissue irritation or gag reflex.'
    },
    {
      title: 'Quick Procedure',
      desc: 'The imaging scan itself takes only 12 to 20 seconds, allowing for rapid diagnostics during initial consultations.'
    },
    {
      title: 'Treatment Planning',
      desc: 'Provides vital clinical baseline documentation before wisdom tooth extractions, orthodontic alignment, implant placement, and restorative work.'
    },
    {
      title: 'Digital High-Resolution Images',
      desc: 'Modern digital radiography eliminates chemical film processing, enables instant digital magnification, and can be archived securely.'
    },
    {
      title: 'Enhanced Patient Comfort',
      desc: 'Especially beneficial for children, elderly patients, or individuals who experience severe gag reflex or difficulty holding intraoral sensors.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary/20 selection:text-text">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-border bg-gradient-to-b from-background via-background-secondary/30 to-background overflow-hidden">
        {/* Subtle background ambient blur */}
        <div className="absolute top-1/4 right-5 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

        <div className="page-container max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-text-muted mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary font-medium">Diagnostic Imaging</span>
            <span>/</span>
            <span className="text-text">OPG</span>
          </div>

          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-primary bg-primary/10 border border-primary/20 mb-6">
            <Scan size={14} />
            <span>DIAGNOSTIC IMAGING</span>
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-text tracking-tight leading-[1.12] mb-5 max-w-4xl">
            OPG Imaging <br />
            <span className="italic font-light text-text/90">(Orthopantomogram)</span>
          </h1>

          <p className="text-xl sm:text-2xl font-serif text-primary italic mb-6 max-w-3xl">
            “A Complete Panoramic View of Your Smile.”
          </p>

          <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            An Orthopantomogram (OPG) is a specialised dental X-ray that captures a panoramic two-dimensional image of your upper and lower jaws, teeth and surrounding structures in a single scan. It helps dentists examine your overall oral condition and plan appropriate dental treatments.
          </p>

          {/* Centered CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={openModal}
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm tracking-widest uppercase shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <span>Book an Appointment</span>
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              onClick={scrollToOverview}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium tracking-wide text-text hover:text-primary transition-colors cursor-pointer border border-border/80 rounded bg-background/50 backdrop-blur-sm"
            >
              <span>Learn How OPG Works</span>
              <ArrowDown size={15} />
            </button>
          </div>

          {/* Fast highlight pills */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 pt-8 mt-10 border-t border-border/70 max-w-xl mx-auto text-center w-full">
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-text">12–20s</div>
              <div className="text-xs text-text-muted font-light mt-0.5">Quick Scan Time</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-text">Full Arch</div>
              <div className="text-xs text-text-muted font-light mt-0.5">Upper &amp; Lower Jaws</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-text">Digital</div>
              <div className="text-xs text-text-muted font-light mt-0.5">Low-Dose Sensor</div>
            </div>
          </div>

          {/* Symmetrical 2-Column Visual Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mt-14 sm:mt-16 w-full text-left">
            
            {/* Card 1: Sample Panoramic Radiograph with Click-to-Zoom */}
            <div 
              onClick={() => setSelectedZoomImage({
                url: '/images/opg-radiograph-panoramic.jpg',
                title: 'Full Panoramic Dental Radiograph (OPG)',
                alt: 'Orthopantomogram dental radiograph showing upper and lower jaws'
              })}
              className="group relative rounded-2xl overflow-hidden border border-border shadow-lg bg-background-secondary cursor-pointer transition-all duration-300 hover:shadow-2xl"
              role="button"
              tabIndex={0}
              aria-label="Click to zoom panoramic dental radiograph"
            >
              <div className="aspect-[16/9] w-full overflow-hidden bg-black/90 flex items-center justify-center">
                <img
                  src="/images/opg-radiograph-panoramic.jpg"
                  alt="Orthopantomogram panoramic radiograph showing complete upper and lower teeth, roots, and mandibular bone"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-background-secondary border-t border-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary block">Clinical Radiograph</span>
                  <span className="text-sm font-serif font-medium text-text">Full Jaw Panoramic X-Ray</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted group-hover:text-primary transition-colors">
                  <ZoomIn size={14} />
                  <span>Zoom</span>
                </div>
              </div>
            </div>

            {/* Card 2: Modern Panoramic Scanner Unit */}
            <div 
              onClick={() => setSelectedZoomImage({
                url: '/images/opg-equipment-machine.jpg',
                title: 'Orthophos Digital Panoramic Imaging Suite',
                alt: 'Modern digital panoramic dental radiography machine'
              })}
              className="group relative rounded-2xl overflow-hidden border border-border shadow-md bg-background-secondary cursor-pointer transition-all duration-300 hover:shadow-xl"
              role="button"
              tabIndex={0}
              aria-label="Click to zoom panoramic radiography machine"
            >
              <div className="aspect-[16/9] w-full overflow-hidden bg-[#FAF8F5] flex items-center justify-center">
                <img
                  src="/images/opg-equipment-machine.jpg"
                  alt="Digital panoramic X-ray unit in clinic radiography suite"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-background-secondary border-t border-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary block">Equipment View</span>
                  <span className="text-sm font-serif font-medium text-text">Panoramic Imaging Unit</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted group-hover:text-primary transition-colors">
                  <ZoomIn size={14} />
                  <span>Zoom</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. WHAT IS AN OPG? SECTION */}
      <section id="opg-overview" className="py-20 lg:py-28 bg-background-secondary/50 border-b border-border">
        <div className="page-container max-w-7xl mx-auto">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
              UNDERSTANDING THE TECHNOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-6">
              What Is an OPG?
            </h2>
            <div className="w-16 h-[1px] bg-primary mx-auto mb-6" />
            <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed">
              The term <strong>Orthopantomogram</strong> originates from Greek roots: <em>ortho</em> (straight or aligned), <em>pan</em> (all or complete), and <em>tomogram</em> (a cross-sectional slice or record).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            <div className="bg-background rounded-2xl p-8 border border-border/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl font-serif text-text mb-3">How Panoramic X-Rays Work</h3>
                <p className="text-sm text-text-muted font-light leading-relaxed">
                  During an OPG examination, the X-ray tube and digital sensor rotate in opposite directions around the patient’s head. This movement follows a mathematically designed curved plane known as the <strong>focal trough</strong>, creating a continuous two-dimensional panoramic strip of the dental arches.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-border/60 text-xs font-mono text-primary">
                Rotational Radiography
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-serif text-text mb-3">Comprehensive Single View</h3>
                <p className="text-sm text-text-muted font-light leading-relaxed">
                  Unlike traditional X-rays that require multiple individual exposures, a single OPG captures both the upper jaw (maxilla) and lower jaw (mandible), the tooth roots, the maxillary sinuses, and both temporomandibular joints (TMJs) side by side.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-border/60 text-xs font-mono text-primary">
                Global Maxillofacial Survey
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Eye size={24} />
                </div>
                <h3 className="text-xl font-serif text-text mb-3">OPG vs Intraoral X-Rays</h3>
                <p className="text-sm text-text-muted font-light leading-relaxed">
                  Conventional bitewings and periapical X-rays are small intraoral films that give ultra-sharp detail for 2–3 teeth to identify minute cavities. An OPG serves as a broader survey, mapping how every tooth relates to surrounding bone, nerves, and adjacent teeth.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-border/60 text-xs font-mono text-primary">
                Complementary Diagnostic Roles
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. WHAT CAN AN OPG HELP DETECT? */}
      <section className="py-20 lg:py-28 bg-background border-b border-border">
        <div className="page-container max-w-7xl mx-auto">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
              CLINICAL APPLICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-6">
              What Can an OPG Help Detect?
            </h2>
            <div className="w-16 h-[1px] bg-primary mx-auto mb-6" />
            <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed">
              Dentists and oral surgeons rely on panoramic radiographs to evaluate structural conditions across the entire oral-maxillofacial region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detectionItems.map((item) => (
              <div 
                key={item.num}
                className="p-8 rounded-2xl bg-background-secondary/60 border border-border/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-primary/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-primary">{item.num}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-background border border-border text-text-muted">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif text-text mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Clinical Spotlight Banner: Impacted Wisdom Teeth */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-background-secondary to-background border border-border/80 shadow-md flex flex-col md:flex-row items-center gap-8">
            <div 
              onClick={() => setSelectedZoomImage({
                url: '/images/opg-impacted-teeth.jpg',
                title: 'OPG Radiograph Demonstrating Impacted Molars',
                alt: 'OPG radiograph showing impacted third molar teeth'
              })}
              className="w-full md:w-56 shrink-0 aspect-[16/10] rounded-xl overflow-hidden border border-border/80 bg-black cursor-pointer group relative"
              role="button"
              tabIndex={0}
              aria-label="Click to zoom wisdom tooth radiograph"
            >
              <img
                src="/images/opg-impacted-teeth.jpg"
                alt="OPG showing impacted third molar teeth"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xs font-mono bg-black/60 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <ZoomIn size={12} />
                  <span>View</span>
                </span>
              </div>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary block mb-1">Diagnostic Highlight</span>
              <h4 className="text-xl font-serif text-text mb-2">Wisdom Teeth &amp; Nerve Proximity Evaluation</h4>
              <p className="text-sm text-text-muted font-light leading-relaxed">
                Panoramic imaging provides a vital view of the inferior alveolar nerve canal running beneath lower wisdom teeth. Assessing this spatial relation helps the surgeon plan minimally invasive extractions with high confidence.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. HOW IS THE PROCEDURE PERFORMED? (4-STEP TIMELINE) */}
      <section className="py-20 lg:py-28 bg-background-secondary/60 border-b border-border">
        <div className="page-container max-w-6xl mx-auto">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
              PATIENT JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-6">
              How Is the OPG Procedure Performed?
            </h2>
            <div className="w-16 h-[1px] bg-primary mx-auto mb-6" />
            <p className="text-base text-text-muted font-light leading-relaxed">
              Taking an Orthopantomogram is completely comfortable, non-invasive, and takes less than a minute from preparation to digital image output.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((item, idx) => (
              <div 
                key={item.step}
                className="bg-background rounded-2xl p-6 border border-border/80 shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                      {item.step}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-mono text-xs flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif text-text mb-2 font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Timing Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-background border border-border shadow-xs text-xs sm:text-sm text-text-muted">
              <Clock size={16} className="text-primary" />
              <span>
                <strong>Quick &amp; Painless:</strong> The active scan takes only <strong>12 to 20 seconds</strong> depending on the protocol.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. BENEFITS OF OPG IMAGING */}
      <section className="py-20 lg:py-28 bg-background border-b border-border">
        <div className="page-container max-w-7xl mx-auto">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
              KEY ADVANTAGES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-6">
              Benefits of OPG Imaging
            </h2>
            <div className="w-16 h-[1px] bg-primary mx-auto mb-6" />
            <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed">
              Designed for comprehensive visual assessment and optimal patient comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-background-secondary/50 border border-border/80 shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <CheckCircle size={20} />
                </div>
                <h3 className="text-xl font-serif text-text mb-3">{benefit.title}</h3>
                <p className="text-sm text-text-muted font-light leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. LIMITATIONS OF OPG IMAGING */}
      <section className="py-16 lg:py-24 bg-background-secondary/40 border-b border-border">
        <div className="page-container max-w-4xl mx-auto">
          
          <div className="bg-background rounded-3xl p-8 sm:p-12 border border-border shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center">
                <AlertTriangle size={20} />
              </span>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-text-muted">Clinical Transparency</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-text">What Are the Limitations of an OPG?</h3>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-text-muted font-light leading-relaxed">
              <p>
                While an Orthopantomogram provides an invaluable wide overview, it is still a <strong>two-dimensional projection</strong> of three-dimensional anatomical structures. Consequently:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Structures outside the focal trough may appear slightly magnified, distorted, or overlapped.
                </li>
                <li>
                  It does not provide volumetric depth (bucco-lingual bone width) required for precise dental implant diameter planning.
                </li>
                <li>
                  Fine interproximal enamel cavities or subtle root fractures are better detected on high-resolution intraoral bitewing X-rays or periapicals.
                </li>
              </ul>
              <div className="p-4 rounded-xl bg-background-secondary border border-border/80 mt-6 text-xs sm:text-sm text-text font-normal flex items-start gap-3">
                <Sparkles size={16} className="text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>When 3D is needed:</strong> If bone width measurement, complex nerve tracing, or multi-planar root evaluation is required, your dentist will recommend a <strong>3D CBCT scan</strong>.
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. PATIENT PREPARATION AND SAFETY */}
      <section className="py-20 lg:py-28 bg-background border-b border-border">
        <div className="page-container max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
              PROTECTION &amp; PROTOCOLS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-text mb-4">
              Patient Preparation and Safety
            </h2>
            <p className="text-base text-text-muted font-light">
              Essential guidelines to ensure accurate diagnosis and minimal radiation exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-2xl bg-background-secondary/60 border border-border/80 flex items-start gap-4">
              <ShieldCheck size={24} className="text-primary shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-serif font-medium text-text mb-1">Inform of Possible Pregnancy</h4>
                <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                  Always notify the clinician or radiographer if you are pregnant or suspect you may be pregnant so appropriate precautions or postponements can be arranged.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-background-secondary/60 border border-border/80 flex items-start gap-4">
              <ShieldCheck size={24} className="text-primary shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-serif font-medium text-text mb-1">Remove Metallic Accessories</h4>
                <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                  Earrings, piercings, necklaces, dental prostheses (dentures), glasses, and hairpins must be temporarily removed to prevent radiopaque artefacts over the image.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-background-secondary/60 border border-border/80 flex items-start gap-4">
              <ShieldCheck size={24} className="text-primary shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-serif font-medium text-text mb-1">Follow Positioning Guidance</h4>
                <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                  Stand upright, place your chin gently on the support, rest your tongue firmly against the roof of your mouth, and remain steady for the short duration of the scan.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-background-secondary/60 border border-border/80 flex items-start gap-4">
              <ShieldCheck size={24} className="text-primary shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-serif font-medium text-text mb-1">The ALARA Safety Principle</h4>
                <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                  X-rays are prescribed only when clinically justified. Modern digital OPG machines emit very low radiation doses, following the ALARA (As Low As Reasonably Achievable) protocol.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-background-secondary text-text text-center border-b border-border">
        <div className="page-container max-w-3xl mx-auto">
          
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4 block">
            DIAGNOSTIC GUIDANCE
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-6 leading-tight">
            Need a Clearer Picture of Your Dental Health?
          </h2>

          <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed mb-10">
            Consult our dental team to understand which diagnostic imaging examination is appropriate for your needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={openModal}
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm tracking-widest uppercase shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <span>BOOK AN APPOINTMENT</span>
              <ArrowRight size={16} />
            </button>

            <Link
              to="/treatments/cbct"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm tracking-wider uppercase text-text border border-border rounded hover:border-primary hover:text-primary transition-all bg-background/50 backdrop-blur-sm"
            >
              <span>Explore 3D CBCT Imaging &rarr;</span>
            </Link>
          </div>

        </div>
      </section>

      {/* LIGHTBOX MODAL ON IMAGE CLICK */}
      {selectedZoomImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedZoomImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center cursor-default"
          >
            <button
              type="button"
              onClick={() => setSelectedZoomImage(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white text-sm font-mono tracking-widest uppercase cursor-pointer flex items-center gap-1.5 transition-colors"
              aria-label="Close modal"
            >
              <span>Close</span>
              <X size={18} />
            </button>
            <img
              src={selectedZoomImage.url}
              alt={selectedZoomImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
            <p className="mt-4 text-white/90 font-serif text-base sm:text-lg text-center">
              {selectedZoomImage.title}
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

export default OpgPage;
