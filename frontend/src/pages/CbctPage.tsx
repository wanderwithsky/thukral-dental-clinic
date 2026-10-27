import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown, 
  ChevronDown, 
  Layers,
  Scan, 
  Eye, 
  Activity, 
  Sparkles,
  Calendar,
  AlertTriangle
} from 'lucide-react';
import InteractiveCbctScanner from '../components/InteractiveCbctScanner';

const CbctPage = () => {
  // Update document title and meta description
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "CBCT Dental Imaging in Varanasi | Thukral Dental & Aesthetic Clinic";

    let metaDescription = document.querySelector('meta[name="description"]');
    const prevDescription = metaDescription ? metaDescription.getAttribute('content') : '';

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Explore 3D CBCT dental imaging at Thukral Dental & Aesthetic Clinic in Varanasi. Accurate anatomical visualization for implants, orthodontics, and complex diagnosis.'
    );

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = originalTitle;
      if (metaDescription && prevDescription) {
        metaDescription.setAttribute('content', prevDescription);
      }
    };
  }, []);

  const scrollToTechnology = () => {
    const el = document.getElementById('cbct-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => (prev === index ? null : index));
  };

  // Section 1: Interactive Scan Workflow State (0 to 3)
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState<number>(0);

  // Section 2: Interactive Clinical Applications Explorer State (0 to 3)
  const [activeAppIndex, setActiveAppIndex] = useState<number>(0);

  // Section 3: Interactive 3D Imaging Multi-Planar Views State ('axial' | 'coronal' | 'sagittal' | 'volume')
  const [activeSliceView, setActiveSliceView] = useState<'axial' | 'coronal' | 'sagittal' | 'volume'>('volume');

  const faqs = [
    {
      q: "What does CBCT stand for?",
      a: "CBCT stands for Cone Beam Computed Tomography, a specialised imaging technique that produces three-dimensional views of teeth, jawbones and selected surrounding structures."
    },
    {
      q: "How is CBCT different from a normal dental X-ray?",
      a: "A conventional dental X-ray typically provides a two-dimensional image. CBCT reconstructs multiple X-ray projections into a three-dimensional view. The appropriate option depends on the clinical question."
    },
    {
      q: "Does every patient need a CBCT scan?",
      a: "No. CBCT is not required for every patient. It should be considered when the additional three-dimensional information is likely to support diagnosis or treatment planning."
    },
    {
      q: "Is CBCT painful?",
      a: "The scan itself is non-invasive and does not normally cause pain. You will need to remain still while the images are captured."
    },
    {
      q: "Is CBCT safe?",
      a: "CBCT uses ionising radiation, so the benefits and risks should be considered before scanning. Your dentist will determine whether the scan is justified and select suitable imaging parameters."
    },
    {
      q: "Can CBCT help with dental implants?",
      a: "It can help evaluate bone dimensions and relevant anatomy during implant planning when a three-dimensional assessment is indicated."
    },
    {
      q: "How should I prepare for a CBCT scan?",
      a: "Follow the clinic's instructions. You may be asked to remove jewellery or metal objects that could interfere with the images, and you should tell the dentist if pregnancy is possible."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden border-b border-border">
        {/* Subtle Ambient Glow */}
        <div 
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[140px] -z-10 pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#C5A880]/[0.05] rounded-full blur-[130px] -z-10 pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="page-container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Column: Text & CTAs */}
            <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary w-fit mx-auto lg:mx-0">
                <Scan size={14} className="shrink-0" />
                <span className="text-xs font-semibold tracking-[0.25em] uppercase">
                  ADVANCED DENTAL IMAGING
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-text mb-6 leading-[1.12]">
                “See Beyond <br className="hidden sm:block" />
                <span className="italic text-primary font-normal">the Surface.</span>”
              </h1>

              <p className="text-base sm:text-lg text-text-muted leading-relaxed font-light mb-10 max-w-xl mx-auto lg:mx-0">
                At Thukral Dental &amp; Aesthetic Clinic, CBCT imaging can help provide a detailed three-dimensional view of teeth, jawbone and surrounding anatomical structures when additional information is clinically needed.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <Link
                  to="/appointment"
                  className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm tracking-widest uppercase shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Calendar size={16} />
                  <span>Book an Appointment</span>
                </Link>

                <button
                  type="button"
                  onClick={scrollToTechnology}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm tracking-wider uppercase text-text border border-border/80 rounded hover:border-primary hover:text-primary transition-all bg-background/50 backdrop-blur-sm cursor-pointer"
                >
                  <span>Explore CBCT Technology</span>
                  <ArrowDown size={15} />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Area with Conceptual Scanner & 3D Scan Placeholders */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="w-full max-w-[560px] grid grid-cols-1 sm:grid-cols-2 gap-5 p-3 rounded-3xl bg-background-secondary/60 border border-border/60 shadow-xl">
                
                {/* [CBCT MACHINE PHOTOGRAPH] Placeholder */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#2E241E] via-[#211A16] to-[#171310] border border-[#3E322A]/80 flex flex-col justify-between p-6 text-left group">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-[#E8D8C4]/70 uppercase px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08]">
                      CLINIC SUITE
                    </span>
                    <Scan size={16} className="text-[#C5A880]" />
                  </div>

                  <div className="my-auto text-center py-6">
                    <div className="w-16 h-16 rounded-full bg-[#FAF8F5]/[0.08] border border-[#FAF8F5]/20 flex items-center justify-center text-[#C5A880] mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                      <Layers size={28} />
                    </div>
                    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FAF8F5]/90 block mb-1">
                      [CBCT MACHINE PHOTOGRAPH]
                    </span>
                    <p className="text-xs text-[#E8D8C4]/60 font-light max-w-[200px] mx-auto">
                      In-clinic three-dimensional radiographic imaging system
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#E8D8C4]/70">
                    <span className="font-serif italic text-xs text-[#FAF8F5]">Thukral Clinic</span>
                    <span className="text-[10px] uppercase tracking-wider text-[#C5A880]">In-House Unit</span>
                  </div>
                </div>

                {/* [3D DENTAL SCAN IMAGE] Placeholder */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#251E19] via-[#1D1612] to-[#120F0D] border border-[#3E322A]/80 flex flex-col justify-between p-6 text-left group">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-[#E8D8C4]/70 uppercase px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08]">
                      3D RECONSTRUCTION
                    </span>
                    <Eye size={16} className="text-[#C5A880]" />
                  </div>

                  <div className="my-auto text-center py-6">
                    <div className="w-16 h-16 rounded-full bg-[#FAF8F5]/[0.08] border border-[#FAF8F5]/20 flex items-center justify-center text-[#C5A880] mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                      <Activity size={28} />
                    </div>
                    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FAF8F5]/90 block mb-1">
                      [3D DENTAL SCAN IMAGE]
                    </span>
                    <p className="text-xs text-[#E8D8C4]/60 font-light max-w-[200px] mx-auto">
                      Volumetric anatomical reconstruction from multiple angles
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#E8D8C4]/70">
                    <span className="font-serif italic text-xs text-[#FAF8F5]">Multi-Planar</span>
                    <span className="text-[10px] uppercase tracking-wider text-[#C5A880]">Diagnostic View</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CBCT TECHNOLOGY SHOWCASE: LARGE 2D PHOTOGRAPH & INTERACTIVE 3D MODEL */}
      <section id="cbct-overview" className="py-20 lg:py-28 bg-background border-b border-border">
        <div className="page-container max-w-7xl mx-auto">
          
          <div className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
              UNDERSTANDING CBCT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-6">
              What Is CBCT Imaging?
            </h2>
            <div className="w-16 h-[1px] bg-primary mx-auto mb-8" />
            <div className="text-base sm:text-lg text-text-muted font-light leading-relaxed space-y-4">
              <p>
                CBCT stands for <strong>Cone Beam Computed Tomography</strong>. It is a specialised dental imaging technique that uses X-rays to create three-dimensional images of teeth, jawbones and selected surrounding anatomical structures.
              </p>
              <p>
                Unlike a conventional two-dimensional dental X-ray, CBCT provides views from multiple angles. When clinically indicated, these additional views can help a dentist assess anatomical details and plan certain treatments more thoroughly.
              </p>
            </div>
          </div>

          {/* TWO LARGE VISUAL PANELS (Min 500px Height, ~50% Width Each) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            
            {/* LEFT PANEL: 2D CBCT Machine Photograph */}
            <div className="flex flex-col justify-between rounded-3xl bg-background-secondary/70 border border-border/80 p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[560px]">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                    2D EQUIPMENT VIEW
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-text-muted/80 bg-background px-2.5 py-1 rounded-full border border-border/60">
                    Illustrative Scanner
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-text leading-snug">
                  The CBCT Scanner
                </h3>
                <p className="mt-2 text-sm text-text-muted font-light leading-relaxed">
                  Explore the imaging equipment used to capture detailed dental scans when additional anatomical information is clinically needed.
                </p>
              </div>

              {/* Large Image Frame (Entire Scanner Visible) */}
              <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#FAF8F5] to-[#EFEBE4] border border-border/70 flex items-center justify-center p-3 sm:p-4 group">
                <img
                  src="/images/cbct-scanner-2d.jpg"
                  alt="Modern Dental Cone Beam CT Scanner Equipment"
                  className="w-full h-full object-contain object-center transform transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute bottom-3 right-3 text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-black/60 text-white/90 backdrop-blur-sm pointer-events-none">
                  Photographic View
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-text-muted">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Physical Unit Layout &amp; C-Arm Architecture</span>
                </span>
                <span className="italic text-[11px] text-text-muted/70">
                  Equipment Illustration
                </span>
              </div>
            </div>

            {/* RIGHT PANEL: Interactive 3D CBCT Scanner Model */}
            <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#2E241E] via-[#211A16] to-[#171310] text-[#FAF8F5] border border-[#3E322A] p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-500 min-h-[560px]">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C5A880]">
                    INTERACTIVE 3D MODEL
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#FAF8F5]/80 bg-white/[0.08] px-2.5 py-1 rounded-full border border-white/10">
                    Realtime WebGL
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF8F5] leading-snug">
                  Explore CBCT in 3D
                </h3>
                <p className="mt-2 text-sm text-[#E8D8C4]/80 font-light leading-relaxed">
                  Rotate the model to explore the scanner's structure and understand how three-dimensional dental imaging is performed.
                </p>
              </div>

              {/* Large Interactive 3D Canvas */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-[#3E322A]/80 bg-[#181310] shadow-inner">
                <InteractiveCbctScanner />
              </div>

              {/* Footer Note */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#E8D8C4]/70">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]" />
                  <span>Interactive 3D Geometry (Drag to Rotate &middot; Scroll to Zoom)</span>
                </span>
                <span className="italic text-[11px] text-[#E8D8C4]/60">
                  Illustrative 3D Model
                </span>
              </div>
            </div>

          </div>

          {/* 4. HELPFUL TECHNICAL EXPLANATION & PROGRESSION DIAGRAM */}
          <div className="mt-16 lg:mt-24 p-8 sm:p-12 rounded-3xl bg-background-secondary border border-border/80 shadow-sm max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-2 block">
                TECHNICAL PRINCIPLE
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-text mb-4">
                From X-Ray Projections to a 3D View.
              </h3>
              <p className="text-base text-text-muted font-light leading-relaxed">
                CBCT systems capture multiple X-ray projections around the relevant area. Software reconstructs this information into a three-dimensional volume that clinicians can inspect from different angles.
              </p>
            </div>

            {/* Progression Flow: CBCT Scanner → Image Acquisition → Reconstructed 3D Volume */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              
              {/* Step 1 */}
              <div className="p-6 rounded-2xl bg-background border border-border/70 flex flex-col justify-between text-center relative group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                    <Scan size={22} />
                  </div>
                  <span className="text-xs font-mono font-bold text-primary block mb-1">STAGE 01</span>
                  <h4 className="text-lg font-serif text-text mb-2">CBCT Scanner</h4>
                  <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                    The physical equipment positions the patient and guides the X-ray tube and detector around the targeted anatomical region.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-6 rounded-2xl bg-background border border-border/70 flex flex-col justify-between text-center relative group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                    <Layers size={22} />
                  </div>
                  <span className="text-xs font-mono font-bold text-primary block mb-1">STAGE 02</span>
                  <h4 className="text-lg font-serif text-text mb-2">Image Acquisition</h4>
                  <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                    A single rotational sweep records hundreds of distinct 2D raw projection images within a cone-shaped radiation beam.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-2xl bg-background border border-border/70 flex flex-col justify-between text-center relative group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                    <Activity size={22} />
                  </div>
                  <span className="text-xs font-mono font-bold text-primary block mb-1">STAGE 03</span>
                  <h4 className="text-lg font-serif text-text mb-2">Reconstructed 3D Volume</h4>
                  <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                    Advanced algorithms convert raw projections into a multi-planar 3D volumetric view of teeth, roots, and bone density.
                  </p>
                </div>
              </div>

            </div>

            {/* Terminology Clarity Callout */}
            <div className="mt-8 pt-6 border-t border-border/60 text-center">
              <p className="text-xs text-text-muted font-light italic max-w-3xl mx-auto">
                <strong>Clinical Note:</strong> A 2D photograph of the machine shows the physical equipment; the interactive 3D model demonstrates the equipment's spatial shape; the actual CBCT scan is reconstructed into a three-dimensional view of the patient's dental anatomy. CBCT is recommended based strictly on diagnostic indication.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. HOW CBCT WORKS (INTERACTIVE WORKFLOW) */}
      <section className="py-20 lg:py-28 bg-background-secondary border-b border-border">
        <div className="page-container max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
              WORKFLOW &middot; PROTOCOL
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-4">
              “From Scan to a 3D View.”
            </h2>
            <p className="text-base text-text-muted font-light">
              A streamlined, non-invasive imaging workflow designed around patient comfort and diagnostic clarity.
            </p>
          </div>

          {/* Interactive Editorial Two-Column Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Interactive vertical numbered timeline */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              {[
                {
                  id: 0,
                  num: "01",
                  title: "Clinical Assessment",
                  subtitle: "Diagnostic Evaluation",
                  description: "The dentist evaluates your concerns, reviews existing records, and determines whether additional 3D imaging is clinically justified to address a specific diagnostic question.",
                  image: "/images/cbct-workflow-assessment.jpg",
                  tag: "CONSULTATION & INDICATION"
                },
                {
                  id: 1,
                  num: "02",
                  title: "Patient Positioning",
                  subtitle: "Precision Alignment",
                  description: "You are comfortably positioned with chin and forehead rests to ensure steady alignment. You may be asked to remove jewellery or metal objects that could interfere with the scan.",
                  image: "/images/cbct-workflow-positioning.jpg",
                  tag: "COMFORT & STABILIZATION"
                },
                {
                  id: 2,
                  num: "03",
                  title: "Image Capture",
                  subtitle: "Single Rotational Sweep",
                  description: "The C-arm gantry rotates smoothly around the head in a single continuous sweep of 10–30 seconds, capturing multiple low-dose projection images while you remain relaxed and still.",
                  image: "/images/cbct-workflow-capture.jpg",
                  tag: "FAST & NON-INVASIVE"
                },
                {
                  id: 3,
                  num: "04",
                  title: "Image Reconstruction",
                  subtitle: "Volumetric Multi-Planar Views",
                  description: "Specialized algorithmic software reconstructs raw X-ray projections into sub-millimeter axial, coronal, sagittal, and 3D volumetric views for precise clinical examination.",
                  image: "/images/cbct-app-implant.jpg",
                  tag: "3D MULTI-PLANAR VISUALIZATION"
                }
              ].map((step, idx) => {
                const isActive = activeWorkflowIndex === idx;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveWorkflowIndex(idx)}
                    className={`w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 relative border ${
                      isActive 
                        ? 'bg-background border-primary/40 shadow-md shadow-primary/5' 
                        : 'bg-background/40 hover:bg-background/80 border-border/60 hover:border-border'
                    }`}
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <span className={`text-2xl sm:text-3xl font-serif font-light transition-colors ${
                        isActive ? 'text-primary font-medium' : 'text-text-muted/60'
                      }`}>
                        {step.num}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className={`text-base sm:text-lg font-serif transition-colors ${
                            isActive ? 'text-text font-medium' : 'text-text/80'
                          }`}>
                            {step.title}
                          </h3>
                          {isActive && (
                            <span className="text-[10px] font-mono tracking-widest uppercase text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">
                              Active Stage
                            </span>
                          )}
                        </div>
                        <p className={`text-xs sm:text-sm text-text-muted font-light mt-1.5 leading-relaxed transition-all duration-300 ${
                          isActive ? 'opacity-100 max-h-32' : 'opacity-70 line-clamp-2'
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Large interactive visual showcase */}
            <div className="lg:col-span-7">
              {(() => {
                const steps = [
                  {
                    num: "01",
                    title: "Clinical Assessment",
                    subtitle: "Initial Examination & Diagnostic Indication",
                    description: "The dentist evaluates your concerns and determines whether additional imaging is necessary.",
                    image: "/images/cbct-workflow-assessment.jpg",
                    tag: "STEP 01 &middot; CLINICAL INDICATION",
                    badge: "Consultation Stage"
                  },
                  {
                    num: "02",
                    title: "Patient Positioning",
                    subtitle: "Comfortable Alignment & Scout View Preparation",
                    description: "You are positioned according to the scanner's requirements. You may be asked to remove jewellery or other metal objects that could interfere with the image.",
                    image: "/images/cbct-workflow-positioning.jpg",
                    tag: "STEP 02 &middot; PATIENT PREPARATION",
                    badge: "Positioning Suite"
                  },
                  {
                    num: "03",
                    title: "Image Capture",
                    subtitle: "Single Rotational Sweep Around the Head",
                    description: "The scanner rotates around the relevant area and captures multiple X-ray projections. Remaining still helps reduce image blurring.",
                    image: "/images/cbct-workflow-capture.jpg",
                    tag: "STEP 03 &middot; ACQUISITION PHASE",
                    badge: "Rotational Acquisition"
                  },
                  {
                    num: "04",
                    title: "Image Reconstruction",
                    subtitle: "Algorithmic 3D Multi-Planar Volumetric Processing",
                    description: "Software reconstructs the captured information into a three-dimensional view that the dentist can examine for the clinical question being investigated.",
                    image: "/images/cbct-app-implant.jpg",
                    tag: "STEP 04 &middot; COMPUTED RECONSTRUCTION",
                    badge: "Volumetric Synthesis"
                  }
                ];
                const active = steps[activeWorkflowIndex];

                return (
                  <div className="bg-background rounded-3xl border border-border p-3 sm:p-5 shadow-xl overflow-hidden transition-all duration-500">
                    {/* Media Frame */}
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-900 group">
                      <img 
                        key={active.image}
                        src={active.image} 
                        alt={active.title}
                        className="w-full h-full object-cover object-center transition-all duration-700 ease-out animate-fadeIn"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                      {/* Header overlay badge */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="text-[11px] font-mono tracking-widest uppercase text-white/90 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                          {active.badge}
                        </span>
                        <span className="text-xs font-mono font-medium text-amber-300/90 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                          STAGE {active.num} / 04
                        </span>
                      </div>

                      {/* Bottom overlay info */}
                      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 pointer-events-none">
                        <div className="inline-block text-[10px] font-mono tracking-widest uppercase text-amber-200/90 mb-1">
                          {active.tag}
                        </div>
                        <h4 className="text-xl sm:text-2xl font-serif text-white font-medium mb-1">
                          {active.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl line-clamp-2">
                          {active.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Stage Details Strip below media */}
                    <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border/60 mt-2">
                      <div>
                        <span className="text-xs font-mono uppercase text-primary font-semibold block mb-0.5">
                          Clinical Purpose
                        </span>
                        <p className="text-xs sm:text-sm text-text font-light">
                          {active.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {steps.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setActiveWorkflowIndex(i)}
                            aria-label={`Go to stage ${i + 1}`}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              activeWorkflowIndex === i 
                                ? 'bg-primary w-8' 
                                : 'bg-border hover:bg-primary/40'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHEN CBCT MAY BE RECOMMENDED (INTERACTIVE CLINICAL APPLICATIONS EXPLORER) */}
      <section className="py-20 lg:py-28 bg-background border-b border-border">
        <div className="page-container max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
              CLINICAL INDICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-6">
              More Detail When It Matters.
            </h2>
            <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed">
              CBCT is considered when conventional dental imaging may not provide enough information to answer a specific clinical question.
            </p>
          </div>

          {/* Asymmetric Interactive Explorer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left side: Interactive clinical topics list */}
            <div className="lg:col-span-5 flex flex-col divide-y divide-border/80 border-y border-border/80">
              {[
                {
                  id: 0,
                  num: "01",
                  title: "Dental Implant Planning",
                  category: "RESTORATIVE &middot; SURGICAL",
                  summary: "Three-dimensional imaging can help assess bone dimensions and the anatomical structures relevant to implant planning.",
                  details: "Assesses bone height, cortical thickness, bone density indicators, and precise spatial distance to vital anatomical structures such as the inferior alveolar nerve canal or maxillary sinus floor before surgical placement.",
                  image: "/images/cbct-app-implant.jpg",
                  indicationLabel: "Implant Site Assessment"
                },
                {
                  id: 1,
                  num: "02",
                  title: "Impacted Teeth",
                  category: "ORAL SURGERY &middot; WISDOM TEETH",
                  summary: "CBCT may help show the position and orientation of impacted teeth, including their relationship to nearby structures, when additional information is needed.",
                  details: "Reveals exact 3D tooth angulation, root curvature morphology, follicular sac expansion, and close proximities to neighbouring tooth roots or neurovascular bundles.",
                  image: "/images/cbct-app-impacted.jpg",
                  indicationLabel: "Spatial & Nerve Proximity"
                },
                {
                  id: 2,
                  num: "03",
                  title: "Complex Root Canal Assessment",
                  category: "ENDODONTICS",
                  summary: "In selected endodontic cases, CBCT may help evaluate complex root anatomy or investigate findings that remain unclear with conventional imaging.",
                  details: "Helps identify hidden root canals (such as MB2), canal calcifications, complex apical curvatures, internal or external root resorption, and persistent periapical lesions undetectable on 2D periapical films.",
                  image: "/images/cbct-app-endodontic.jpg",
                  indicationLabel: "Internal Canal Morphology"
                },
                {
                  id: 3,
                  num: "04",
                  title: "Selected Orthodontic and Jaw Assessments",
                  category: "ORTHODONTICS &middot; SKELETAL",
                  summary: "CBCT may be useful in selected cases involving complex tooth positioning, jaw anatomy or surgical orthodontic planning when three-dimensional information can influence clinical decisions.",
                  details: "Provides 3D cephalometric analysis, upper airway volume evaluation, temporomandibular joint (TMJ) bony morphology, and skeletal asymmetry analysis for surgical-orthodontic collaboration.",
                  image: "/images/cbct-app-ortho.jpg",
                  indicationLabel: "Airway & Skeletal Cephalometrics"
                }
              ].map((topic, idx) => {
                const isActive = activeAppIndex === idx;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => setActiveAppIndex(idx)}
                    className={`text-left py-6 px-4 transition-all duration-300 relative group flex items-start justify-between gap-4 ${
                      isActive 
                        ? 'bg-background-secondary/70 -mx-2 px-6 rounded-xl' 
                        : 'hover:bg-background-secondary/40'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className={`text-xs font-mono font-bold tracking-widest ${
                          isActive ? 'text-primary' : 'text-text-muted/60'
                        }`}>
                          {topic.num}
                        </span>
                        <span className="text-[10px] font-semibold tracking-widest uppercase text-text-muted/80">
                          {topic.category}
                        </span>
                      </div>
                      <h3 className={`text-lg sm:text-xl font-serif transition-colors ${
                        isActive ? 'text-primary font-medium' : 'text-text group-hover:text-primary'
                      }`}>
                        {topic.title}
                      </h3>
                      <p className={`text-xs sm:text-sm text-text-muted font-light mt-1.5 leading-relaxed transition-all duration-300 ${
                        isActive ? 'opacity-100 max-h-24' : 'opacity-60 line-clamp-1'
                      }`}>
                        {topic.summary}
                      </p>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all mt-1 ${
                      isActive 
                        ? 'bg-primary text-white border-primary rotate-90' 
                        : 'border-border text-text-muted group-hover:border-primary/50'
                    }`}>
                      <ArrowRight size={14} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right side: Large clinical image viewer */}
            <div className="lg:col-span-7">
              {(() => {
                const applications = [
                  {
                    num: "01",
                    title: "Dental Implant Planning",
                    category: "RESTORATIVE & SURGICAL",
                    summary: "Three-dimensional imaging can help assess bone dimensions and the anatomical structures relevant to implant planning.",
                    details: "Assesses bone height, cortical thickness, bone density indicators, and precise spatial distance to vital anatomical structures such as the inferior alveolar nerve canal or maxillary sinus floor before surgical placement.",
                    image: "/images/cbct-app-implant.jpg",
                    indicationLabel: "Implant Site Assessment"
                  },
                  {
                    num: "02",
                    title: "Impacted Teeth",
                    category: "ORAL SURGERY & WISDOM TEETH",
                    summary: "CBCT may help show the position and orientation of impacted teeth, including their relationship to nearby structures, when additional information is needed.",
                    details: "Reveals exact 3D tooth angulation, root curvature morphology, follicular sac expansion, and close proximities to neighbouring tooth roots or neurovascular bundles.",
                    image: "/images/cbct-app-impacted.jpg",
                    indicationLabel: "Spatial & Nerve Proximity"
                  },
                  {
                    num: "03",
                    title: "Complex Root Canal Assessment",
                    category: "ENDODONTIC DIAGNOSTICS",
                    summary: "In selected endodontic cases, CBCT may help evaluate complex root anatomy or investigate findings that remain unclear with conventional imaging.",
                    details: "Helps identify hidden root canals (such as MB2), canal calcifications, complex apical curvatures, internal or external root resorption, and persistent periapical lesions undetectable on 2D periapical films.",
                    image: "/images/cbct-app-endodontic.jpg",
                    indicationLabel: "Internal Canal Morphology"
                  },
                  {
                    num: "04",
                    title: "Selected Orthodontic and Jaw Assessments",
                    category: "ORTHODONTICS & SKELETAL",
                    summary: "CBCT may be useful in selected cases involving complex tooth positioning, jaw anatomy or surgical orthodontic planning when three-dimensional information can influence clinical decisions.",
                    details: "Provides 3D cephalometric analysis, upper airway volume evaluation, temporomandibular joint (TMJ) bony morphology, and skeletal asymmetry analysis for surgical-orthodontic collaboration.",
                    image: "/images/cbct-app-ortho.jpg",
                    indicationLabel: "Airway & Skeletal Cephalometrics"
                  }
                ];
                const active = applications[activeAppIndex];

                return (
                  <div className="bg-background-secondary rounded-3xl border border-border p-3 sm:p-5 shadow-lg overflow-hidden">
                    {/* Media frame */}
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black group">
                      <img 
                        key={active.image}
                        src={active.image} 
                        alt={active.title}
                        className="w-full h-full object-cover object-center transition-all duration-700 ease-out animate-fadeIn"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                      {/* Header overlay badge */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="text-[11px] font-mono tracking-widest uppercase text-white/90 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                          {active.category}
                        </span>
                        <span className="text-xs font-mono font-medium text-amber-300/90 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                          {active.indicationLabel}
                        </span>
                      </div>

                      {/* Bottom overlay info */}
                      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 pointer-events-none">
                        <span className="text-[10px] font-mono tracking-widest uppercase text-amber-200/90 block mb-1">
                          CLINICAL INDICATION {active.num}
                        </span>
                        <h4 className="text-xl sm:text-2xl font-serif text-white font-medium mb-1.5">
                          {active.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl line-clamp-2">
                          {active.summary}
                        </p>
                      </div>
                    </div>

                    {/* Explanatory text card below */}
                    <div className="p-4 sm:p-6 border-t border-border/70 mt-2">
                      <span className="text-xs font-mono uppercase text-primary font-semibold block mb-1">
                        Diagnostic Assessment Value
                      </span>
                      <p className="text-xs sm:text-sm text-text font-light leading-relaxed">
                        {active.details}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>

          {/* Understated Clinical Caveat Note (No Card Box) */}
          <div className="mt-12 text-center max-w-3xl mx-auto pt-6 border-t border-border/60">
            <p className="text-xs sm:text-sm text-text-muted font-light italic">
              <strong>Clinical Guidance:</strong> CBCT is not required for every patient or every treatment. Your dentist will determine whether it is appropriate for your individual case based strictly on clinical necessity.
            </p>
          </div>

        </div>
      </section>

      {/* 5. HOW 3D IMAGING CAN SUPPORT TREATMENT PLANNING (INTERACTIVE 3D MULTI-PLANAR EXPLORER) */}
      <section className="py-20 lg:py-28 bg-background-secondary border-b border-border">
        <div className="page-container max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
              DIAGNOSTIC VALUE &middot; MULTI-PLANAR RECONSTRUCTION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-4">
              How 3D Imaging Can Support Treatment Planning.
            </h2>
            <p className="text-base text-text-muted font-light">
              Explore how raw cone-beam projections are reconstructed into standardized anatomical views and spatial volumetric models.
            </p>
          </div>

          {/* Interactive Multi-Planar View Selector + Benefits Column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Interactive View Display */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              
              {/* View Selector Tabs */}
              <div className="flex flex-wrap items-center gap-2 p-1.5 bg-background rounded-2xl border border-border w-fit">
                {[
                  { key: 'volume', label: '3D Volume View' },
                  { key: 'axial', label: 'Axial View (Horizontal)' },
                  { key: 'coronal', label: 'Coronal View (Frontal)' },
                  { key: 'sagittal', label: 'Sagittal View (Profile)' }
                ].map(tab => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveSliceView(tab.key as any)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-serif transition-all duration-300 ${
                      activeSliceView === tab.key 
                        ? 'bg-primary text-white shadow-sm font-medium' 
                        : 'text-text-muted hover:text-text hover:bg-background-secondary'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Dynamic View Frame */}
              <div className="bg-background rounded-3xl border border-border p-3 sm:p-5 shadow-lg overflow-hidden">
                {(() => {
                  const viewDetails = {
                    volume: {
                      title: "3D Volumetric Composite Reconstruction",
                      plane: "Full Maxillofacial Volume",
                      description: "A complete three-dimensional representation that visualizes spatial relationships, bony contours, tooth angulations, and external anatomical landmarks in their authentic anatomical context.",
                      image: "/images/cbct-app-ortho.jpg",
                      indicator: "Spatial Volumetric View"
                    },
                    axial: {
                      title: "Axial View (Horizontal Plane)",
                      plane: "Inferior / Superior Cross-Section",
                      description: "Transverse slices slicing horizontally across the dental arch. Crucial for assessing dental arch curvature, buccal and lingual cortical plate thickness, and root positions relative to adjacent teeth.",
                      image: "/images/cbct-slice-axial.jpg",
                      indicator: "Transverse / Horizontal Slice"
                    },
                    coronal: {
                      title: "Coronal View (Frontal Plane)",
                      plane: "Anterior / Posterior Cross-Section",
                      description: "Vertical slices viewed from the front, revealing the maxillary sinuses, nasal cavity, floor of the nose, and the vertical height of alveolar bone above root apexes.",
                      image: "/images/cbct-slice-coronal.jpg",
                      indicator: "Frontal / Coronal Slice"
                    },
                    sagittal: {
                      title: "Sagittal View (Profile Plane)",
                      plane: "Lateral / Cross-Sectional Ridge View",
                      description: "Side-profile cross-sections displaying the alveolar ridge width, anterior incisor inclination, facial-lingual bone contour, and root canal path from crown to apex.",
                      image: "/images/cbct-slice-sagittal.jpg",
                      indicator: "Profile / Sagittal Slice"
                    }
                  }[activeSliceView];

                  return (
                    <div>
                      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black group">
                        <img 
                          key={viewDetails.image}
                          src={viewDetails.image} 
                          alt={viewDetails.title}
                          className="w-full h-full object-cover object-center transition-all duration-700 ease-out animate-fadeIn"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                        {/* Top Badges */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                          <span className="text-[11px] font-mono tracking-widest uppercase text-white/90 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                            {viewDetails.indicator}
                          </span>
                          <span className="text-xs font-mono font-medium text-amber-300/90 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                            {viewDetails.plane}
                          </span>
                        </div>

                        {/* Bottom Overlay Info */}
                        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 pointer-events-none">
                          <h4 className="text-xl sm:text-2xl font-serif text-white font-medium mb-1">
                            {viewDetails.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl">
                            {viewDetails.plane}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 sm:p-6 border-t border-border/70 mt-2">
                        <span className="text-xs font-mono uppercase text-primary font-semibold block mb-1">
                          Diagnostic Purpose
                        </span>
                        <p className="text-xs sm:text-sm text-text font-light leading-relaxed">
                          {viewDetails.description}
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </div>

            </div>

            {/* Right Column: Key Clinical Benefits Editorial List (No Repetitive Card Grid) */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 block">
                  CLINICAL ADVANTAGES
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-text mb-4">
                  Why 3D Reconstruction Matters
                </h3>
                <p className="text-sm text-text-muted font-light leading-relaxed mb-6">
                  Unlike traditional two-dimensional films that superimpose complex anatomy, multi-planar CBCT imaging allows clinicians to isolate and evaluate specific structures without distortion.
                </p>
              </div>

              {/* Minimalist Editorial Benefits List */}
              <div className="space-y-4 divide-y divide-border/60 border-t border-b border-border/60 py-2">
                
                <div className="pt-3">
                  <h4 className="text-base font-serif text-text font-medium mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Three-Dimensional Perspective
                  </h4>
                  <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed pl-3.5">
                    Helps clinicians inspect relevant anatomy from multiple directions without planar distortion or overlapping structural artefacts.
                  </p>
                </div>

                <div className="pt-3">
                  <h4 className="text-base font-serif text-text font-medium mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Anatomical Detail
                  </h4>
                  <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed pl-3.5">
                    May reveal useful information about tooth position, bone dimensions, density indicators, and selected surrounding structures.
                  </p>
                </div>

                <div className="pt-3">
                  <h4 className="text-base font-serif text-text font-medium mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Planning Support
                  </h4>
                  <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed pl-3.5">
                    Can support assessment and planning in selected complex surgical, implant, or orthodontic procedures.
                  </p>
                </div>

                <div className="pt-3">
                  <h4 className="text-base font-serif text-text font-medium mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Targeted Assessment
                  </h4>
                  <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed pl-3.5">
                    May provide additional information when conventional imaging does not sufficiently answer the specific clinical question.
                  </p>
                </div>

                <div className="pt-3">
                  <h4 className="text-base font-serif text-text font-medium mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Digital Review
                  </h4>
                  <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed pl-3.5">
                    Allows clinicians to examine reconstructed multi-planar views and discuss relevant clinical findings collaboratively with patients.
                  </p>
                </div>

              </div>

              {/* Restrained Philosophy Quote */}
              <div className="p-4 rounded-xl bg-background border border-border/80">
                <p className="text-xs text-text font-serif italic mb-1 leading-relaxed">
                  “Evidence-based imaging focused strictly on patient safety, diagnostic necessity, and clear clinical outcomes.”
                </p>
                <span className="text-[10px] text-text-muted uppercase tracking-widest font-mono">
                  Thukral Dental Philosophy
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. CBCT SAFETY AND RADIATION INFORMATION (MANDATORY SECTION) */}
      <section className="py-20 lg:py-28 bg-background border-b border-border">
        <div className="page-container max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900">
              <AlertTriangle size={14} className="text-amber-600 shrink-0" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase">
                RADIATION SAFETY &middot; PATIENT GUIDANCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-6">
              “The Right Scan. For the Right Reason.”
            </h2>

            <div className="w-16 h-[1px] bg-primary mx-auto mb-8" />
            
            <div className="text-base text-text-muted font-light leading-relaxed space-y-4 text-left sm:text-center">
              <p>
                CBCT uses ionising radiation, so the decision to scan should be based on your clinical needs. Dental CBCT generally involves more radiation than conventional dental X-rays, although its dose is usually lower than that of medical CT examinations.
              </p>
              <p>
                At Thukral Dental &amp; Aesthetic Clinic, CBCT imaging should be recommended only when the dentist determines that the additional information is clinically useful. The scan area and exposure settings should be selected appropriately to obtain sufficient diagnostic information while minimising unnecessary exposure.
              </p>
            </div>
          </div>

          {/* Patient Guidance Points List */}
          <div className="bg-background-secondary p-8 sm:p-10 rounded-3xl border border-border/80 shadow-sm">
            <h3 className="text-lg font-serif text-text mb-6 pb-3 border-b border-border/60">
              Key Patient Safety Guidelines:
            </h3>

            <ul className="space-y-4 text-sm text-text font-light leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Not a routine screening:</strong> CBCT is not a routine screening test for every patient.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Previous records:</strong> Previous relevant dental imaging should be discussed with the dentist to help avoid unnecessary repeat examinations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Pregnancy notification:</strong> Tell the dentist if you are pregnant or might be pregnant before an X-ray examination.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Pediatric consideration:</strong> Children and younger patients require particular care when determining whether imaging is justified.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Informed dialogue:</strong> The need for CBCT and any alternative imaging options should be discussed with the treating clinician.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 7. WHAT TO EXPECT DURING A CBCT SCAN */}
      <section className="py-20 lg:py-28 bg-background-secondary border-b border-border">
        <div className="page-container max-w-5xl mx-auto">
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left: What to Expect Steps */}
            <div className="w-full lg:w-3/5">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
                PATIENT EXPERIENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-text mb-6">
                A Clear, Simple Process.
              </h2>
              <p className="text-base text-text-muted font-light leading-relaxed mb-8">
                CBCT imaging is non-invasive and does not require an injection for the scan itself. Here is what you can anticipate:
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-background border border-border/60 flex items-start gap-3">
                  <span className="text-xs font-mono font-bold text-primary mt-0.5">1</span>
                  <p className="text-sm text-text font-light leading-relaxed">
                    The dentist explains why the scan may be useful for your specific treatment question.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-background border border-border/60 flex items-start gap-3">
                  <span className="text-xs font-mono font-bold text-primary mt-0.5">2</span>
                  <p className="text-sm text-text font-light leading-relaxed">
                    The patient is positioned according to the machine's instructions, usually standing or seated comfortably.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-background border border-border/60 flex items-start gap-3">
                  <span className="text-xs font-mono font-bold text-primary mt-0.5">3</span>
                  <p className="text-sm text-text font-light leading-relaxed">
                    The scanner captures the required images while the patient remains still for a brief rotation.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-background border border-border/60 flex items-start gap-3">
                  <span className="text-xs font-mono font-bold text-primary mt-0.5">4</span>
                  <p className="text-sm text-text font-light leading-relaxed">
                    The clinician reviews the reconstructed images and discusses relevant findings and treatment options with you.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Imaging Room Photograph Placeholder */}
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="w-full max-w-[340px] aspect-[3/4] rounded-2xl bg-gradient-to-br from-[#2E241E] via-[#211A16] to-[#171310] border border-[#3E322A] p-6 flex flex-col justify-between text-left shadow-xl group">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-[#E8D8C4]/70 uppercase px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08]">
                    ROOM SETUP
                  </span>
                  <Sparkles size={14} className="text-[#C5A880]" />
                </div>

                <div className="my-auto text-center py-4">
                  <div className="w-14 h-14 rounded-full bg-[#FAF8F5]/[0.08] border border-[#FAF8F5]/20 flex items-center justify-center text-[#C5A880] mx-auto mb-3">
                    <Scan size={24} />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FAF8F5] block mb-1">
                    [CLINIC IMAGING ROOM]
                  </span>
                  <p className="text-[11px] text-[#E8D8C4]/60 font-light">
                    Protected dental radiography suite at Thukral Dental &amp; Aesthetic Clinic
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.08] text-[10px] text-[#E8D8C4]/70 flex justify-between">
                  <span>Non-invasive</span>
                  <span className="text-[#C5A880]">Clean Protocol</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 lg:py-28 bg-background border-b border-border">
        <div className="page-container max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
              PATIENT CLARITY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-text-muted font-light">
              Common questions patients ask about dental cone-beam CT imaging.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className="rounded-2xl border border-border/80 bg-background-secondary/50 overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:bg-background-secondary"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-serif text-text font-medium">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-primary shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-text-muted font-light leading-relaxed border-t border-border/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. FINAL PREMIUM CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-background-secondary via-[#F9F6F0] to-[#EFE8DC] border-b border-border">
        <div className="page-container max-w-4xl mx-auto text-center">
          
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4 block">
            PERSONALIZED CARE
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-6 max-w-2xl mx-auto leading-tight">
            “The Right Information for a Thoughtful Treatment Plan.”
          </h2>

          <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Discuss your dental concerns with the team at Thukral Dental &amp; Aesthetic Clinic to understand whether CBCT imaging may be appropriate for your needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/appointment"
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm tracking-widest uppercase shadow-md hover:shadow-xl transition-all"
            >
              <span>Book an Appointment</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/treatments"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm tracking-wider uppercase text-text border border-border/80 rounded hover:border-primary hover:text-primary transition-all bg-background/50 backdrop-blur-sm"
            >
              <span>Explore Our Treatments</span>
            </Link>
          </div>

          <p className="text-xs text-text-muted/70 mt-8 italic">
            Booking an appointment provides a comprehensive clinical consultation; imaging recommendations are made individually based on diagnostic need.
          </p>

        </div>
      </section>

    </div>
  );
};

export default CbctPage;
