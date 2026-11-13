import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  ZoomIn, 
  X,
  Compass,
  UserCheck,
  Table
} from 'lucide-react';
import { useAppointmentModal } from '../context/AppointmentModalContext';

const LateralCephPage: React.FC = () => {
  const { openModal } = useAppointmentModal();
  const [selectedZoomImage, setSelectedZoomImage] = useState<{ url: string; title: string; alt: string } | null>(null);

  // SEO Title and Meta Description
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Lateral Cephalogram in Varanasi | Thukral Dental Clinic";

    let metaDescription = document.querySelector('meta[name="description"]');
    const prevDescription = metaDescription ? metaDescription.getAttribute('content') : '';

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Learn about Lateral Cephalogram imaging at Thukral Dental Clinic in Varanasi. Standardised lateral cranial radiography for orthodontic planning, facial profile analysis, and jaw relationship evaluation.'
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
    const el = document.getElementById('ceph-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whyRecommendedCards = [
    {
      num: '01',
      title: 'Jaw Relationship Analysis',
      desc: 'Accurately quantifies whether the upper jaw (maxilla) and lower jaw (mandible) are balanced skeletal Class I, protrusive Class II, or retrusive/underbite Class III.',
      tag: 'Skeletal Harmony'
    },
    {
      num: '02',
      title: 'Orthodontic Assessment',
      desc: 'Evaluates the exact angulation of upper and lower incisors relative to their basal bones, determining whether teeth are flared, upright, or retruded.',
      tag: 'Dental Angulation'
    },
    {
      num: '03',
      title: 'Facial Profile Analysis',
      desc: 'Provides a clear profile contour view of the soft-tissue silhouette—including nose projection, nasolabial angle, lip competence, and chin prominence.',
      tag: 'Facial Profile'
    },
    {
      num: '04',
      title: 'Bite and Alignment Evaluation',
      desc: 'Supports clinical diagnosis of complex vertical and sagittal discrepancies such as severe deep bites, open bites, crossbites, and severe crowding.',
      tag: 'Occlusal Patterns'
    },
    {
      num: '05',
      title: 'Evidence-Based Treatment Planning',
      desc: 'Empowers orthodontists to make calculated decisions regarding tooth extraction vs non-extraction arch expansion, clear aligners, or surgical repositioning.',
      tag: 'Care Blueprint'
    },
    {
      num: '06',
      title: 'Treatment Progress Monitoring',
      desc: 'Permits cephalometric superimposition to track skeletal growth patterns in growing adolescents or quantify tooth movements achieved throughout treatment.',
      tag: 'Growth Tracking'
    }
  ];

  const procedureSteps = [
    {
      step: 'Step 1',
      title: 'Preparation',
      desc: 'Remove earrings, necklaces, glasses, hairpins, and any metallic accessories around the head and neck to prevent visual obstruction over cranial landmarks.'
    },
    {
      step: 'Step 2',
      title: 'Patient Positioning',
      desc: 'The patient stands or sits naturally upright beside the cephalometric extension arm, looking straight ahead at eye level with relaxed facial muscles.'
    },
    {
      step: 'Step 3',
      title: 'Head Stabilisation',
      desc: 'The operator gently places calibrated ear rods into the external auditory canals and aligns the forehead support to guarantee standardized Frankfort horizontal alignment.'
    },
    {
      step: 'Step 4',
      title: 'Image Capture',
      desc: 'The high-resolution digital sensor captures a crisp lateral profile radiograph in just a few seconds while the patient bites gently in natural occlusion.'
    }
  ];

  const benefits = [
    {
      title: 'Detailed Side Profile',
      desc: 'Provides a standardized, reproducible lateral view showing skeletal bones, teeth, and soft tissue in true anatomical proportion.'
    },
    {
      title: 'Skeletal Analysis',
      desc: 'Distinguishes between purely dental tooth misalignment and deeper skeletal jaw discrepancies that require specific orthopaedic mechanics.'
    },
    {
      title: 'Orthodontic Precision',
      desc: 'Enables precise cephalometric angular and linear measurements (such as SNA, SNB, ANB, and FMA) for scientific treatment design.'
    },
    {
      title: 'Facial Assessment',
      desc: 'Assesses how tooth alignment and bite correction will directly enhance facial harmony, lip support, and smiling balance.'
    },
    {
      title: 'Progress Comparison',
      desc: 'Allows direct digital overlay (superimposition) of pre-treatment and post-treatment images to verify treatment milestones.'
    }
  ];

  const comparisonRows = [
    {
      feature: 'Image Type',
      opg: 'Panoramic 2D continuous strip',
      ceph: 'Standardized lateral side-view 2D'
    },
    {
      feature: 'Main View',
      opg: 'Full dental arch (upper & lower jaws)',
      ceph: 'Lateral skull, jaws & facial profile'
    },
    {
      feature: 'Primary Focus',
      opg: 'Teeth, roots, bone levels & TMJ overview',
      ceph: 'Skeletal & dental angles, soft-tissue contour'
    },
    {
      feature: 'Common Application',
      opg: 'General dental health, wisdom teeth, pathology',
      ceph: 'Orthodontic analysis, braces, aligners & orthognathic surgery'
    },
    {
      feature: 'Coverage',
      opg: 'Curved panoramic field of the maxillofacial complex',
      ceph: 'Standardized profile from cranial base to chin'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary/20 selection:text-text">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-border bg-gradient-to-b from-background via-background-secondary/30 to-background overflow-hidden">
        <div className="absolute top-1/4 right-5 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

        <div className="page-container max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-text-muted mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary font-medium">Diagnostic Imaging</span>
            <span>/</span>
            <span className="text-text">Lateral Cephalogram</span>
          </div>

          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-primary bg-primary/10 border border-primary/20 mb-6">
            <Compass size={14} />
            <span>DIAGNOSTIC IMAGING</span>
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-text tracking-tight leading-[1.12] mb-5 max-w-4xl">
            Lateral Cephalogram
          </h1>

          <p className="text-xl sm:text-2xl font-serif text-primary italic mb-6 max-w-3xl">
            “Understanding Your Facial Structure, One Image at a Time.”
          </p>

          <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            A Lateral Cephalogram is a specialised two-dimensional side-view X-ray of the head and facial structures. It helps orthodontists evaluate the relationship between the upper jaw, lower jaw, teeth and facial profile for accurate orthodontic diagnosis and treatment planning.
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
              <span>Explore Cephalometrics</span>
              <ArrowDown size={15} />
            </button>
          </div>

          {/* Fast highlight pills */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 pt-8 mt-10 border-t border-border/70 max-w-xl mx-auto text-center w-full">
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-text">Standardised</div>
              <div className="text-xs text-text-muted font-light mt-0.5">Reproducible View</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-text">Skeletal</div>
              <div className="text-xs text-text-muted font-light mt-0.5">Jaw Relationships</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-text">Profile</div>
              <div className="text-xs text-text-muted font-light mt-0.5">Soft-Tissue Analysis</div>
            </div>
          </div>

          {/* Featured Visual Panels - Symmetric 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mt-14 sm:mt-16 w-full text-left">
            
            {/* Card 1: Sample Lateral Cephalometric Radiograph with Click-to-Zoom */}
            <div 
              onClick={() => setSelectedZoomImage({
                url: '/images/lateral-ceph-radiograph.jpg',
                title: 'Standard Lateral Cephalometric Radiograph',
                alt: 'Lateral cephalogram X-ray showing skull bones, upper and lower jaws, and facial soft tissue profile'
              })}
              className="group relative rounded-2xl overflow-hidden border border-border shadow-lg bg-background-secondary cursor-pointer transition-all duration-300 hover:shadow-2xl"
              role="button"
              tabIndex={0}
              aria-label="Click to zoom lateral cephalometric radiograph"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-black flex items-center justify-center">
                <img
                  src="/images/lateral-ceph-radiograph.jpg"
                  alt="Standard lateral cephalogram radiograph showing skull, cervical vertebrae, dentition and facial profile"
                  className="w-full h-full object-contain p-2 transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-background-secondary border-t border-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary block">Clinical Radiograph</span>
                  <span className="text-sm font-serif font-medium text-text">Cranial &amp; Facial Profile X-Ray</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted group-hover:text-primary transition-colors">
                  <ZoomIn size={14} />
                  <span>Zoom</span>
                </div>
              </div>
            </div>

            {/* Card 2: Cephalometric Arm Equipment */}
            <div 
              onClick={() => setSelectedZoomImage({
                url: '/images/lateral-ceph-equipment.jpg',
                title: 'Digital Cephalostat Radiography Equipment',
                alt: 'Digital cephalometric unit with head positioning ear rods'
              })}
              className="group relative rounded-2xl overflow-hidden border border-border shadow-md bg-background-secondary cursor-pointer transition-all duration-300 hover:shadow-xl"
              role="button"
              tabIndex={0}
              aria-label="Click to zoom cephalometric equipment"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5] flex items-center justify-center">
                <img
                  src="/images/lateral-ceph-equipment.jpg"
                  alt="Digital cephalometric positioning arm and sensor unit"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-background-secondary border-t border-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary block">Equipment View</span>
                  <span className="text-sm font-serif font-medium text-text">Cephalostat &amp; Digital Sensor</span>
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

      {/* 2. WHAT IS A LATERAL CEPHALOGRAM? */}
      <section id="ceph-overview" className="py-20 lg:py-28 bg-background-secondary/50 border-b border-border">
        <div className="page-container max-w-7xl mx-auto">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
              THE ORTHODONTIC PERSPECTIVE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-6">
              What Is a Lateral Cephalogram?
            </h2>
            <div className="w-16 h-[1px] bg-primary mx-auto mb-6" />
            <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed">
              Derived from <em>cephalo</em> (head) and <em>gram</em> (measurement/recording), a cephalometric radiograph is an essential diagnostic record in modern orthodontics and dentofacial orthopaedics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-2xl bg-background border border-border shadow-sm">
                <h3 className="text-xl font-serif text-text mb-2 font-medium">
                  Standardised Side-Profile Geometry
                </h3>
                <p className="text-sm text-text-muted font-light leading-relaxed">
                  A cephalogram is captured under rigorous physical standards: the X-ray source is positioned at a fixed distance (usually 5 feet / 1.5 meters) from the patient’s midsagittal plane. This constant geometry ensures minimal magnification and guarantees that repeat radiographs taken months or years apart can be directly compared.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border shadow-sm">
                <h3 className="text-xl font-serif text-text mb-2 font-medium">
                  Comprehensive Anatomical Landmarks
                </h3>
                <p className="text-sm text-text-muted font-light leading-relaxed">
                  The radiograph displays the cranial base (sella turcica, nasion), the bony maxilla and mandible, the cervical spine vertebrae (used to determine biological growth maturation), and the soft-tissue facial drape including the nose, upper and lower lips, and chin.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border shadow-sm">
                <h3 className="text-xl font-serif text-text mb-2 font-medium">
                  Skeletal vs Dental Alignment Distinction
                </h3>
                <p className="text-sm text-text-muted font-light leading-relaxed">
                  Many smile concerns originate not solely from crooked teeth, but from the size or position of the jaws themselves. A lateral cephalogram reveals whether a deep bite or protruding smile is caused by tooth angulation (dental) or jaw position (skeletal), guiding whether braces, aligners, or orthopaedic jaw redirection is ideal.
                </p>
              </div>
            </div>

            {/* Tracing Visual Spotlight */}
            <div className="lg:col-span-5">
              <div 
                onClick={() => setSelectedZoomImage({
                  url: '/images/lateral-ceph-tracing.jpg',
                  title: 'Cephalometric Tracing & Angular Analysis',
                  alt: 'Anatomical tracing diagram of a lateral cephalogram showing cephalometric landmarks'
                })}
                className="group relative rounded-2xl overflow-hidden border border-border shadow-lg bg-background cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label="Click to zoom cephalometric tracing diagram"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-black flex items-center justify-center p-3">
                  <img
                    src="/images/lateral-ceph-tracing.jpg"
                    alt="Orthodontic cephalometric tracing diagram illustrating anatomical points Sella, Nasion, Point A, Point B"
                    className="w-full h-full object-contain transform transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 bg-background-secondary border-t border-border">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary block mb-1">Orthodontic Analysis</span>
                  <h4 className="text-base font-serif text-text mb-1">Anatomical Cephalometric Tracing</h4>
                  <p className="text-xs text-text-muted font-light leading-relaxed">
                    Orthodontists identify standardized anatomical points (such as Nasion, Sella, Subspinale, and Pogonion) to compute angles that guide orthodontic tooth movement.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. WHY IS IT RECOMMENDED? */}
      <section className="py-20 lg:py-28 bg-background border-b border-border">
        <div className="page-container max-w-7xl mx-auto">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
              CLINICAL UTILITY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-6">
              Why Is a Lateral Cephalogram Recommended?
            </h2>
            <div className="w-16 h-[1px] bg-primary mx-auto mb-6" />
            <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed">
              Carefully chosen diagnostic imaging provides the foundational roadmap for predictable, long-lasting orthodontic smile transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyRecommendedCards.map((card) => (
              <div 
                key={card.num}
                className="p-8 rounded-2xl bg-background-secondary/60 border border-border/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-primary/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-primary">{card.num}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-background border border-border text-text-muted">
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif text-text mb-3 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-text-muted font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. HOW IS THE PROCEDURE PERFORMED? (4-STEP VISUAL PROCESS) */}
      <section className="py-20 lg:py-28 bg-background-secondary/60 border-b border-border">
        <div className="page-container max-w-6xl mx-auto">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
              PATIENT COMFORT &amp; WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-6">
              How Is the Procedure Performed?
            </h2>
            <div className="w-16 h-[1px] bg-primary mx-auto mb-6" />
            <p className="text-base text-text-muted font-light leading-relaxed">
              The entire examination is non-invasive, completely painless, and requires just a few minutes of clinical time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {procedureSteps.map((step, idx) => (
              <div 
                key={step.step}
                className="bg-background rounded-2xl p-6 border border-border/80 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                      {step.step}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-mono text-xs flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif text-text mb-2 font-medium">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-background border border-border shadow-xs text-xs sm:text-sm text-text-muted">
              <Clock size={16} className="text-primary" />
              <span>
                <strong>Comfortable &amp; Fast:</strong> The active radiation exposure lasts only <strong>2 to 4 seconds</strong>.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. BENEFITS OF LATERAL CEPHALOGRAM */}
      <section className="py-20 lg:py-28 bg-background border-b border-border">
        <div className="page-container max-w-7xl mx-auto">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
              DIAGNOSTIC VALUE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-6">
              Benefits of Lateral Cephalogram
            </h2>
            <div className="w-16 h-[1px] bg-primary mx-auto mb-6" />
            <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed">
              Precision metrics designed for scientific, evidence-based orthodontic outcomes.
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

      {/* 6. LATERAL CEPHALOGRAM VS OPG COMPARISON TABLE */}
      <section className="py-20 lg:py-28 bg-background-secondary/50 border-b border-border">
        <div className="page-container max-w-5xl mx-auto">
          
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
              COMPARATIVE ANALYSIS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-4">
              Lateral Cephalogram vs OPG
            </h2>
            <p className="text-base text-text-muted font-light max-w-2xl mx-auto">
              Understanding the distinct roles of two essential two-dimensional dental radiography examinations.
            </p>
          </div>

          {/* Premium Comparison Table */}
          <div className="bg-background rounded-3xl border border-border overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border bg-background-secondary/80">
                    <th className="py-5 px-6 font-mono text-xs uppercase tracking-widest text-text-muted w-1/4">
                      Feature
                    </th>
                    <th className="py-5 px-6 font-serif text-base sm:text-lg text-primary font-semibold w-3/8 border-l border-border/60">
                      OPG (Orthopantomogram)
                    </th>
                    <th className="py-5 px-6 font-serif text-base sm:text-lg text-text font-semibold w-3/8 border-l border-border/60 bg-primary/5">
                      Lateral Cephalogram
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-sm">
                  {comparisonRows.map((row, index) => (
                    <tr key={index} className="hover:bg-background-secondary/30 transition-colors">
                      <td className="py-4 px-6 font-medium text-text font-serif">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 text-text-muted font-light border-l border-border/60">
                        {row.opg}
                      </td>
                      <td className="py-4 px-6 text-text font-light border-l border-border/60 bg-primary/[0.02]">
                        {row.ceph}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Note beneath table */}
            <div className="p-6 bg-background-secondary/90 border-t border-border flex items-start gap-3 text-xs sm:text-sm text-text-muted font-light">
              <Table size={18} className="text-primary shrink-0 mt-0.5" />
              <span>
                <strong>Clinical Note:</strong> These imaging modalities serve distinct diagnostic purposes and are <strong>not interchangeable</strong>. While an OPG evaluates tooth health and general bone structure, a Lateral Cephalogram provides the cranial and soft-tissue landmarks necessary for cephalometric orthodontic computation.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 7. IS IT NECESSARY FOR EVERYONE? */}
      <section className="py-16 lg:py-24 bg-background border-b border-border">
        <div className="page-container max-w-4xl mx-auto">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-background-secondary/60 border border-border shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <UserCheck size={20} />
              </span>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-text-muted">Clinical Indications</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-text">Is It Necessary for Everyone?</h3>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-text-muted font-light leading-relaxed">
              <p>
                A Lateral Cephalogram is <strong>not required for routine dental visits or every minor tooth alignment</strong>. It is selectively prescribed by an orthodontist or oral surgeon when:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  There is a noticeable mismatch between upper and lower jaw sizes or positions.
                </li>
                <li>
                  Comprehensive fixed braces or clear aligners are being planned for moderate to severe bite issues.
                </li>
                <li>
                  Growth modification therapies (e.g. myofunctional appliances or headgear) are being considered for growing adolescents.
                </li>
                <li>
                  Orthognathic (corrective jaw) surgery requires digital surgical simulation.
                </li>
              </ul>
              <p className="pt-2 text-xs sm:text-sm text-text italic">
                Your orthodontist will advise whether a cephalometric radiograph is clinically indicated after an initial clinical examination.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 8. SAFETY AND PREPARATION */}
      <section className="py-20 lg:py-28 bg-background-secondary/40 border-b border-border">
        <div className="page-container max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
              SAFETY FIRST
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-text mb-4">
              Safety and Preparation Guidelines
            </h2>
            <p className="text-base text-text-muted font-light">
              Modern digital radiology prioritizing patient safety and high diagnostic yield.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-2xl bg-background border border-border/80 flex items-start gap-4">
              <ShieldCheck size={24} className="text-primary shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-serif font-medium text-text mb-1">Pregnancy Notification</h4>
                <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                  Inform the dental team if you are pregnant or suspect you might be. Elective radiographic procedures can typically be scheduled after pregnancy.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-background border border-border/80 flex items-start gap-4">
              <ShieldCheck size={24} className="text-primary shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-serif font-medium text-text mb-1">Remove Metallic Accessories</h4>
                <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                  Spectacles, earrings, necklaces, and hair accessories must be removed to avoid casting shadow artefacts across cranial base landmarks.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-background border border-border/80 flex items-start gap-4">
              <ShieldCheck size={24} className="text-primary shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-serif font-medium text-text mb-1">Maintain Head Position</h4>
                <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                  Rest comfortably with teeth closed in your natural bite and follow the operator’s instructions to remain still during the short exposure.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-background border border-border/80 flex items-start gap-4">
              <ShieldCheck size={24} className="text-primary shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-serif font-medium text-text mb-1">Optimised Low-Dose Radiation</h4>
                <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                  Our advanced digital sensor technology captures high diagnostic detail using ultra-low exposure settings under strict ALARA safety standards.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-background-secondary text-text text-center border-b border-border">
        <div className="page-container max-w-3xl mx-auto">
          
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4 block">
            ORTHODONTIC EXCELLENCE
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-6 leading-tight">
            Planning Your Perfect Smile?
          </h2>

          <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed mb-10">
            Get the right diagnostic guidance for a well-planned orthodontic journey.
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
              to="/opg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm tracking-wider uppercase text-text border border-border rounded hover:border-primary hover:text-primary transition-all bg-background/50 backdrop-blur-sm"
            >
              <span>Explore OPG Panoramic &rarr;</span>
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

export default LateralCephPage;
