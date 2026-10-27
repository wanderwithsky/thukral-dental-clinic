import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown, 
  ChevronDown, 
  Layers, 
  ShieldCheck, 
  Scan, 
  Eye, 
  Activity, 
  Info, 
  CheckCircle2, 
  Sparkles,
  Calendar,
  AlertTriangle
} from 'lucide-react';

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

      {/* 2. EXPLAIN WHAT CBCT IS + VISUAL COMPARISON */}
      <section id="cbct-overview" className="py-20 lg:py-28 bg-background border-b border-border">
        <div className="page-container max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
              UNDERSTANDING CBCT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-6">
              What Is CBCT Imaging?
            </h2>
            <div className="w-16 h-[1px] bg-primary mx-auto mb-8" />
            <div className="text-base sm:text-lg text-text-muted font-light leading-relaxed max-w-3xl mx-auto space-y-4">
              <p>
                CBCT stands for <strong>Cone Beam Computed Tomography</strong>. It is a specialised dental imaging technique that uses X-rays to create three-dimensional images of teeth, jawbones and selected surrounding anatomical structures.
              </p>
              <p>
                Unlike a conventional two-dimensional dental X-ray, CBCT provides views from multiple angles. When clinically indicated, these additional views can help a dentist assess anatomical details and plan certain treatments more thoroughly.
              </p>
            </div>
          </div>

          {/* Visual Comparison: 2D vs 3D */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            {/* Conventional 2D X-ray card */}
            <div className="p-8 rounded-2xl bg-background-secondary border border-border/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-wider uppercase text-text-muted">
                    Conventional Dental X-Ray
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-border/40 text-text">
                    2D Representation
                  </span>
                </div>
                <h3 className="text-xl font-serif text-text mb-3">Single Flat Projection</h3>
                <p className="text-sm text-text-muted font-light leading-relaxed mb-6">
                  Standard intraoral or panoramic radiographs project anatomical structures onto a single two-dimensional plane. While essential for regular checkups, structures can overlap in complex regions.
                </p>
              </div>
              <div className="pt-4 border-t border-border/60 text-xs text-text-muted flex items-center gap-2">
                <Info size={14} className="text-primary shrink-0" />
                <span>Primary standard for routine cavities and dental checkups.</span>
              </div>
            </div>

            {/* CBCT 3D Scan card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#2E241E] via-[#211A16] to-[#171310] text-[#FAF8F5] border border-[#3E322A] shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#C5A880]">
                    Cone Beam CT (CBCT)
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#C5A880]/20 text-[#FAF8F5] border border-[#C5A880]/30">
                    3D Volumetric View
                  </span>
                </div>
                <h3 className="text-xl font-serif text-[#FAF8F5] mb-3">Reconstructed Multi-Planar Views</h3>
                <p className="text-sm text-[#E8D8C4]/80 font-light leading-relaxed mb-6">
                  Captures a cylinder of data that is reconstructed into cross-sectional, axial, sagittal, and panoramic 3D slices. Eliminates anatomical superimposition when deeper detail is clinically needed.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs text-[#E8D8C4]/70 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#C5A880] shrink-0" />
                <span>Applied when specific anatomical questions require depth evaluation.</span>
              </div>
            </div>

          </div>

          {/* Clinical Balance Disclaimer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-text-muted italic max-w-2xl mx-auto">
              Please note: CBCT is not automatically better for every dental condition. The appropriate imaging method is determined strictly by the specific clinical question being investigated.
            </p>
          </div>

        </div>
      </section>

      {/* 3. HOW CBCT WORKS (4-STEP PROCESS) */}
      <section className="py-20 lg:py-28 bg-background-secondary border-b border-border">
        <div className="page-container">
          
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

          {/* Steps Timeline: Horizontal on Desktop, Vertical on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
            
            {/* Step 01 */}
            <div className="p-6 rounded-2xl bg-background border border-border/80 shadow-sm flex flex-col justify-between relative group hover:border-primary/50 transition-colors">
              <div>
                <span className="text-3xl font-serif text-primary/70 font-semibold mb-4 block">01</span>
                <h3 className="text-lg font-serif text-text mb-2">Clinical Assessment</h3>
                <p className="text-sm text-text-muted font-light leading-relaxed">
                  The dentist evaluates your concerns and determines whether additional imaging is necessary.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="p-6 rounded-2xl bg-background border border-border/80 shadow-sm flex flex-col justify-between relative group hover:border-primary/50 transition-colors">
              <div>
                <span className="text-3xl font-serif text-primary/70 font-semibold mb-4 block">02</span>
                <h3 className="text-lg font-serif text-text mb-2">Patient Positioning</h3>
                <p className="text-sm text-text-muted font-light leading-relaxed">
                  You are positioned according to the scanner's requirements. You may be asked to remove jewellery or other metal objects that could interfere with the image.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="p-6 rounded-2xl bg-background border border-border/80 shadow-sm flex flex-col justify-between relative group hover:border-primary/50 transition-colors">
              <div>
                <span className="text-3xl font-serif text-primary/70 font-semibold mb-4 block">03</span>
                <h3 className="text-lg font-serif text-text mb-2">Image Capture</h3>
                <p className="text-sm text-text-muted font-light leading-relaxed">
                  The scanner rotates around the relevant area and captures multiple X-ray projections. Remaining still helps reduce image blurring.
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="p-6 rounded-2xl bg-background border border-border/80 shadow-sm flex flex-col justify-between relative group hover:border-primary/50 transition-colors">
              <div>
                <span className="text-3xl font-serif text-primary/70 font-semibold mb-4 block">04</span>
                <h3 className="text-lg font-serif text-text mb-2">Image Reconstruction</h3>
                <p className="text-sm text-text-muted font-light leading-relaxed">
                  Software reconstructs the captured information into a three-dimensional view that the dentist can examine for the clinical question being investigated.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHEN CBCT MAY BE RECOMMENDED */}
      <section className="py-20 lg:py-28 bg-background border-b border-border">
        <div className="page-container max-w-6xl mx-auto">
          
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

          {/* Four Content Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Block 1: Implants */}
            <div className="p-8 rounded-2xl bg-background-secondary border border-border/70 hover:border-primary/40 transition-colors">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
                RESTORATIVE &middot; SURGICAL
              </span>
              <h3 className="text-2xl font-serif text-text mb-3">Dental Implant Planning</h3>
              <p className="text-sm sm:text-base text-text-muted font-light leading-relaxed">
                Three-dimensional imaging can help assess bone dimensions and the anatomical structures relevant to implant planning.
              </p>
            </div>

            {/* Block 2: Impacted Teeth */}
            <div className="p-8 rounded-2xl bg-background-secondary border border-border/70 hover:border-primary/40 transition-colors">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
                ORAL SURGERY &middot; WISDOM TEETH
              </span>
              <h3 className="text-2xl font-serif text-text mb-3">Impacted Teeth</h3>
              <p className="text-sm sm:text-base text-text-muted font-light leading-relaxed">
                CBCT may help show the position and orientation of impacted teeth, including their relationship to nearby structures, when additional information is needed.
              </p>
            </div>

            {/* Block 3: Complex Root Canals */}
            <div className="p-8 rounded-2xl bg-background-secondary border border-border/70 hover:border-primary/40 transition-colors">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
                ENDODONTICS
              </span>
              <h3 className="text-2xl font-serif text-text mb-3">Complex Root Canal Assessment</h3>
              <p className="text-sm sm:text-base text-text-muted font-light leading-relaxed">
                In selected endodontic cases, CBCT may help evaluate complex root anatomy or investigate findings that remain unclear with conventional imaging.
              </p>
            </div>

            {/* Block 4: Orthodontics & Jaw */}
            <div className="p-8 rounded-2xl bg-background-secondary border border-border/70 hover:border-primary/40 transition-colors">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
                ORTHODONTICS &middot; SKELETAL
              </span>
              <h3 className="text-2xl font-serif text-text mb-3">Selected Orthodontic and Jaw Assessments</h3>
              <p className="text-sm sm:text-base text-text-muted font-light leading-relaxed">
                CBCT may be useful in selected cases involving complex tooth positioning, jaw anatomy or surgical orthodontic planning when three-dimensional information can influence clinical decisions.
              </p>
            </div>

          </div>

          {/* Restrained Supporting Note */}
          <div className="mt-12 p-5 rounded-xl bg-background border border-border/70 max-w-2xl mx-auto text-center">
            <p className="text-xs sm:text-sm text-text-muted font-light italic">
              CBCT is not required for every patient or every treatment. Your dentist will determine whether it is appropriate for your individual case.
            </p>
          </div>

        </div>
      </section>

      {/* 5. BENEFITS OF CBCT IMAGING */}
      <section className="py-20 lg:py-28 bg-background-secondary border-b border-border">
        <div className="page-container max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
              DIAGNOSTIC VALUE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-4">
              How 3D Imaging Can Support Treatment Planning.
            </h2>
            <p className="text-base text-text-muted font-light">
              Clear structural insights to assist clinical discussions and treatment preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Benefit 1 */}
            <div className="p-6 rounded-2xl bg-background border border-border/60">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Layers size={20} />
              </div>
              <h3 className="text-lg font-serif text-text mb-2">Three-Dimensional Perspective</h3>
              <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                Helps clinicians examine relevant anatomy from multiple directions without planar distortion.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-6 rounded-2xl bg-background border border-border/60">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Eye size={20} />
              </div>
              <h3 className="text-lg font-serif text-text mb-2">Anatomical Detail</h3>
              <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                Can show tooth position, bone dimensions and selected surrounding structures more clearly than a two-dimensional image.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-6 rounded-2xl bg-background border border-border/60">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-lg font-serif text-text mb-2">Planning Support</h3>
              <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                May help clinicians assess anatomical considerations before certain surgical or complex dental procedures.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="p-6 rounded-2xl bg-background border border-border/60">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Scan size={20} />
              </div>
              <h3 className="text-lg font-serif text-text mb-2">Targeted Assessment</h3>
              <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                Can provide additional information when conventional imaging does not adequately answer the clinical question.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="p-6 rounded-2xl bg-background border border-border/60">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Activity size={20} />
              </div>
              <h3 className="text-lg font-serif text-text mb-2">Digital Review</h3>
              <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                Reconstructed images can be examined from different views and angles for collaborative clinical planning.
              </p>
            </div>

            {/* Context Note */}
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col justify-center">
              <p className="text-xs text-text font-serif italic mb-2 leading-relaxed">
                “Evidence-based imaging focused strictly on patient safety and diagnostic necessity.”
              </p>
              <span className="text-[10px] text-text-muted uppercase tracking-widest font-semibold">
                Thukral Dental Philosophy
              </span>
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
