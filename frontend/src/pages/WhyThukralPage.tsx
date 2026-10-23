import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Sparkles,
  ChevronDown,
  ArrowRight,
  ArrowDown,
  Quote,
  Star,
  Calendar,
  Award,
  Cpu,
  HeartPulse,
  Layers,
} from 'lucide-react';
import { useAppointmentModal } from '../context/AppointmentModalContext';
import MediaPlaceholder from '../components/MediaPlaceholder';
import DoctorVideoPlayer from '../components/DoctorVideoPlayer';
import PatientVideoPlayer from '../components/PatientVideoPlayer';
import ClinicVideoExperience from '../components/ClinicVideoExperience';



// Section 4: 4 Stages of Care Approach
const careStages = [
  {
    step: '01',
    title: 'Understand Your Needs',
    description:
      'Listen to your dental concerns, lifestyle, aesthetic aspirations, and past experiences with patience.',
  },
  {
    step: '02',
    title: 'Explain Your Options',
    description:
      'Explain all relevant treatment pathways in transparent, jargon-free language with visual references.',
  },
  {
    step: '03',
    title: 'Plan Your Care',
    description:
      'Help you understand the recommended milestones, timing, and next steps before any procedure starts.',
  },
  {
    step: '04',
    title: 'Focus on Comfort',
    description:
      'Maintain a welcoming, supportive, and gentle clinical environment through every moment of your visit.',
  },
];

// Section 6: Verified Testimonials from real Google reviews on the site
const verifiedReviews = [
  {
    name: 'Ashu Rayeen',
    text: 'Thank you sir you changed my life. I highly recommend Dr Anchit Thukral. He designed my smile so well. Thank you once again.',
    tag: 'Smile Design',
  },
  {
    name: 'Riya Pathak',
    text: 'Dr. Anchit Sir is a dentist who truly understands how to comfort his patients. His calm nature and reassuring words make every treatment feel safe and stress-free.',
    tag: 'Patient Comfort',
  },
  {
    name: 'Adarsh Mishra',
    text: 'Very nice dental clinic. Very affordable and reasonable. Best dentist in varanasi. Value for money treatment.',
    tag: 'Clinical Care',
  },
  {
    name: 'Verified Patient',
    text: 'The team is highly professional. The clinic maintains excellent hygiene and the teeth whitening and aligners treatments were explained clearly. I felt completely comfortable throughout the process.',
    tag: 'Hygiene & Clear Guidance',
  },
];

// Section 7: FAQs
const faqs = [
  {
    question: 'What makes Thukral Dental & Aesthetic Clinic different?',
    answer:
      'We combine clinical precision with an unhurried, comfort-first philosophy. Rather than rushing into procedures, we take time to listen, provide clear jargon-free explanations, and create a calm, supportive environment where patients feel reassured and in control.',
  },
  {
    question: 'What dental and aesthetic treatments are available?',
    answer:
      'Our practice offers a comprehensive suite of dental solutions including smile design, teeth whitening, clear aligners, orthodontic treatment, dental implants, root canal therapy, and general restorative dental care.',
  },
  {
    question: 'How can I book an appointment?',
    answer:
      'You can easily book online using our "Book an Appointment" button on this website, or call our clinic directly at 082997 19955 during clinic working hours (Monday through Saturday, 10:00 AM – 8:00 PM).',
  },
  {
    question: 'Can I discuss my dental concerns before choosing a treatment?',
    answer:
      'Yes, absolutely. Every consultation begins with a thoughtful discussion of your concerns, treatment expectations, and aesthetic goals so you can make confident, informed decisions without any pressure.',
  },
  {
    question: 'How can I find the clinic?',
    answer:
      'We are centrally located at C 21/30 B-1A, Pishachmochan, Varanasi, Uttar Pradesh 221002. Convenient parking and directions are available on Google Maps.',
  },
];

const WhyThukralPage = () => {
  const { openModal } = useAppointmentModal();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Why Thukral? | Thukral Dental & Aesthetic Clinic';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Discover why patients choose Thukral Dental & Aesthetic Clinic in Varanasi. Comfort-first care, clear communication, hygienic clinic environment, and modern aesthetic dentistry.'
    );

    window.scrollTo(0, 0);
  }, []);

  const handleScrollToApproach = () => {
    const section = document.getElementById('why-choose-grid');
    if (section) {
      const topOffset = section.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background text-text overflow-hidden">
      
      {/* ============================================================ */}
      {/* SECTION 1: HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 border-b border-border">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="page-container">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 opacity-0 animate-fade-in-up">
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-primary mb-4 block">
                WHY THUKRAL
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-serif leading-[1.12] text-text mb-6">
                Your Smile Deserves <br className="hidden sm:inline" />
                <span className="italic font-normal">Thoughtful Care.</span>
              </h1>
              <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed max-w-xl mb-9">
                From clear treatment guidance to a comfortable clinical environment, we focus on making your dental care experience reassuring, personal, and centered around your smile.
              </p>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={openModal}
                  className="btn-primary flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
                >
                  <Calendar size={18} />
                  Book an Appointment
                </button>
                <button
                  type="button"
                  onClick={handleScrollToApproach}
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-primary/40 bg-background hover:bg-primary/10 hover:border-primary text-primary transition-all duration-300 shadow-sm hover:shadow cursor-pointer"
                  aria-label="Scroll down to explore our approach"
                  title="Scroll down"
                >
                  <span className="sr-only">Scroll down</span>
                  <div className="animate-bounce flex flex-col items-center">
                    <ArrowDown size={20} className="stroke-[2.2] text-primary" />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Media Placeholder */}
            <div
              className="w-full lg:w-1/2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="relative">
                <MediaPlaceholder
                  label="Thukral Dental & Aesthetic Clinic"
                  previewSrc="https://res.cloudinary.com/hmjaaen2/image/upload/v1792573055/ff65b9b3-82ea-4e18-98fb-586ed72472b9.jpg"
                  aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                  className="shadow-xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-5 -left-4 sm:bottom-6 sm:-left-8 bg-background/95 backdrop-blur-md border border-border p-4 rounded-xl shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text uppercase tracking-wider">
                      Patient Comfort First
                    </p>
                    <p className="text-[11px] text-text-muted">
                      Calm, reassuring consultations
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: ORTHODONTICS FEATURE (Why Timing Matters in Orthodontics) */}
      {/* Replaces the previous 6-image gallery */}
      {/* ============================================================ */}
      <section
        id="why-choose-grid"
        className="py-16 md:py-24 bg-background-secondary border-b border-border"
      >
        <div className="page-container">
          <ClinicVideoExperience
            videoUrl="https://res.cloudinary.com/hmjaaen2/video/upload/v1792671153/tdac-04.mp4"
            className="mt-0"
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: EXPERIENCE THE CLINIC (Polished Media Gallery) */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-background border-b border-border">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
              CLINICAL ENVIRONMENT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-5">
              Experience the Clinic
            </h2>
            <p className="text-base md:text-lg text-text-muted font-light leading-relaxed">
              Step inside a clinical setting planned around quiet comfort, absolute cleanliness, and modern dental technology.
            </p>
          </div>

          {/* Visual Grid: Featured Large Card + Supporting Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Large Feature Card: Clinic Exterior & Doctor Board */}
            <div className="md:col-span-2 lg:col-span-2">
              <MediaPlaceholder
                label="Dr. Anchit Thukral Dental Clinic"
                previewSrc="https://res.cloudinary.com/hmjaaen2/image/upload/v1792573076/cad1e263-60e8-48c8-a11e-7796fceadeb6.jpg"
                aspectRatio="aspect-[16/10] md:aspect-[16/9]"
                className="h-full shadow-md"
              />
            </div>

            {/* 2. Modern Operatory / Treatment Room */}
            <div>
              <MediaPlaceholder
                label="Modern Dental Treatment Suite"
                previewSrc="https://res.cloudinary.com/hmjaaen2/image/upload/v1792573067/e67009a5-2402-4667-9fe2-0bf26ae2fdb7.jpg"
                aspectRatio="aspect-[4/3] md:aspect-auto"
                className="h-full min-h-[260px] shadow-sm"
              />
            </div>

            {/* 3. Clinical Operatory & Precision Setup */}
            <div>
              <MediaPlaceholder
                label="Advanced Clinical Setup"
                previewSrc="https://res.cloudinary.com/hmjaaen2/image/upload/v1792573640/8a7666ce-dc9a-4982-b9c4-a713377ee9f6.jpg"
                aspectRatio="aspect-[4/3] md:aspect-auto"
                objectPosition="object-[8%_center]"
                className="h-full min-h-[260px] shadow-sm"
              />
            </div>

            {/* 4. Consultation & Aesthetic Smile Suite */}
            <div>
              <MediaPlaceholder
                label="Aesthetic Consultation & Care"
                previewSrc="https://res.cloudinary.com/hmjaaen2/image/upload/v1792573659/0c183510-fec8-4043-b119-686cad6aecaa.jpg"
                aspectRatio="aspect-[4/3] md:aspect-auto"
                objectPosition="object-center"
                className="h-full min-h-[260px] shadow-sm"
              />
            </div>

            {/* 5. Hospital-Grade Sterilization & Environment */}
            <div>
              <MediaPlaceholder
                label="Hygienic & Sterile Environment"
                previewSrc="https://res.cloudinary.com/hmjaaen2/image/upload/v1792573651/060a0ead-38ce-408d-afe5-c57fd6bd7bde.jpg"
                aspectRatio="aspect-[4/3] md:aspect-auto"
                objectPosition="object-[25%_center]"
                className="h-full min-h-[260px] shadow-sm"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: OUR APPROACH TO PATIENT CARE */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-background-secondary border-b border-border">
        <div className="page-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between mb-16 md:mb-20">
            <div className="max-w-2xl">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
                STEP-BY-STEP EXPERIENCE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-5">
                Our Approach to Patient Care
              </h2>
              <p className="text-base md:text-lg text-text-muted font-light leading-relaxed">
                We believe exceptional dentistry is built on listening first and treating second. Every step of your visit is clearly explained and paced to your comfort.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              <button
                type="button"
                onClick={openModal}
                className="btn-primary w-full sm:w-auto cursor-pointer"
              >
                Schedule Your Visit
              </button>
            </div>
          </div>

          {/* Process Timeline: Horizontal on Desktop, Vertical on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-16">
            {careStages.map((stage, idx) => (
              <div
                key={stage.step}
                className="relative bg-background border border-border rounded-2xl p-8 flex flex-col justify-between group hover:border-primary/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-serif text-primary/50 group-hover:text-primary transition-colors font-bold">
                      {stage.step}
                    </span>
                    <span className="text-xs font-semibold tracking-wider uppercase text-text-muted/60">
                      Phase {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif text-text mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-text-muted text-sm md:text-base font-light leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Connecting arrow indicator for desktop */}
                {idx !== careStages.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-border z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: CLINICAL EXPERTISE / MEET THE TEAM */}
      {/* Replicated from the Reference Architecture (Image 01) */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-background border-b border-border relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[160px] -z-10 pointer-events-none" />

        <div className="page-container">
          
          {/* Header pill & Title */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>Our Clinical Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-text mb-6 leading-tight">
              Exceptional dentistry, <br />
              <span className="italic">every step of the way</span>
            </h2>
            <p className="text-base md:text-lg text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
              Experience personalized care, advanced treatments, and reassuring results with our specialist dental & aesthetic services led by Dr. Anchit Thukral.
            </p>
          </div>

          {/* 3-Column Benefits & Arched Centerpiece Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center max-w-7xl mx-auto">
            
            {/* Left 3 Benefits (Text Right-aligned on desktop) */}
            <div className="lg:col-span-4 flex flex-col space-y-12 order-2 lg:order-1">
              
              {/* Left Item 1 */}
              <div className="flex items-start lg:flex-row-reverse gap-5 text-left lg:text-right group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-serif text-text mb-2 group-hover:text-primary transition-colors">
                    Specialist Orthodontist
                  </h3>
                  <p className="text-sm text-text-muted font-light leading-relaxed">
                    Led by Dr. Anchit Thukral (BDS, MDS Orthodontics) with extensive clinical training in precision dental care.
                  </p>
                </div>
              </div>

              {/* Left Item 2 */}
              <div className="flex items-start lg:flex-row-reverse gap-5 text-left lg:text-right group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                  <Cpu size={22} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-serif text-text mb-2 group-hover:text-primary transition-colors">
                    Advanced Technology
                  </h3>
                  <p className="text-sm text-text-muted font-light leading-relaxed">
                    We utilize digital smile planning, advanced aligners, and modern clinical equipment for precise, gentle care.
                  </p>
                </div>
              </div>

              {/* Left Item 3 */}
              <div className="flex items-start lg:flex-row-reverse gap-5 text-left lg:text-right group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                  <HeartPulse size={22} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-serif text-text mb-2 group-hover:text-primary transition-colors">
                    Personalized Care
                  </h3>
                  <p className="text-sm text-text-muted font-light leading-relaxed">
                    Every treatment plan is tailored to your unique smile anatomy, aesthetic expectations, and personal comfort.
                  </p>
                </div>
              </div>

            </div>

            {/* Center Arched Doctor Video Feature */}
            <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] group">
                
                {/* Arch decorative ring */}
                <div className="absolute -inset-2.5 rounded-t-[140px] rounded-b-3xl border border-primary/20 -z-10 group-hover:border-primary/40 transition-colors duration-500" />
                
                {/* Auto-playing Video Player with Custom Controls */}
                <DoctorVideoPlayer
                  videoUrl="https://res.cloudinary.com/hmjaaen2/video/upload/v1792661954/tdac-06.mp4"
                  fallbackPosterUrl="https://res.cloudinary.com/zvlxacfu/image/upload/v1790679545/0a90d7c4-51dd-4fae-b790-5eeb1914ed3c.png"
                />

              </div>
            </div>

            {/* Right 3 Benefits (Text Left-aligned on desktop) */}
            <div className="lg:col-span-4 flex flex-col space-y-12 order-3">
              
              {/* Right Item 1 */}
              <div className="flex items-start gap-5 text-left group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                  <Layers size={22} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-serif text-text mb-2 group-hover:text-primary transition-colors">
                    Comprehensive Services
                  </h3>
                  <p className="text-sm text-text-muted font-light leading-relaxed">
                    From cosmetic whitening & aligners to restorative root canals and implants, we provide complete oral care.
                  </p>
                </div>
              </div>

              {/* Right Item 2 */}
              <div className="flex items-start gap-5 text-left group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-serif text-text mb-2 group-hover:text-primary transition-colors">
                    High Safety Standards
                  </h3>
                  <p className="text-sm text-text-muted font-light leading-relaxed">
                    Your safety is our priority. We strictly adhere to hospital-grade sterilization and hygiene protocols.
                  </p>
                </div>
              </div>

              {/* Right Item 3 */}
              <div className="flex items-start gap-5 text-left group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                  <Sparkles size={22} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-serif text-text mb-2 group-hover:text-primary transition-colors">
                    Comfortable Environment
                  </h3>
                  <p className="text-sm text-text-muted font-light leading-relaxed">
                    Our clinic provides a welcoming, reassuring, and stress-free atmosphere planned around patient comfort.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Action CTAs below */}
          <div className="mt-16 pt-10 border-t border-border/60 flex flex-wrap items-center justify-center gap-5">
            <Link to="/about" className="btn-secondary inline-flex items-center gap-2">
              Read Dr. Anchit's Profile & Credentials
              <ArrowRight size={16} />
            </Link>
            <button
              type="button"
              onClick={openModal}
              className="btn-primary cursor-pointer"
            >
              Book a Consultation
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: PATIENT TESTIMONIALS */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-background-secondary border-b border-border">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
              PATIENT EXPERIENCES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-5">
              In Our Patients' Words
            </h2>
            <p className="text-base md:text-lg text-text-muted font-light leading-relaxed">
              Genuine feedback from patients who entrusted their smile and comfort to Thukral Dental & Aesthetic Clinic.
            </p>
          </div>

          {/* Genuine Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {verifiedReviews.map((rev, i) => (
              <div
                key={i}
                className="bg-background border border-border rounded-2xl p-8 md:p-10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-1 text-amber-600">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <Quote size={22} className="text-primary/20" />
                  </div>

                  <p className="text-base md:text-lg text-text-muted font-serif italic leading-relaxed mb-6">
                    "{rev.text}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/60">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-bold text-base">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text uppercase tracking-wider">
                        {rev.name}
                      </p>
                      <p className="text-xs text-text-muted">Verified Google Review</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {rev.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Patient Video Testimonial */}
          <div className="max-w-4xl mx-auto">
            <PatientVideoPlayer
              videoUrl="https://res.cloudinary.com/hmjaaen2/video/upload/v1792663665/tdac-03.mp4"
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-background border-b border-border">
        <div className="page-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14 md:mb-16">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
                CLEAR ANSWERS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text mb-5">
                Frequently Asked Questions
              </h2>
              <p className="text-base md:text-lg text-text-muted font-light leading-relaxed">
                Everything you need to know about our approach, scheduling, and consultations.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-border rounded-xl bg-background-secondary overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-serif text-lg md:text-xl text-text hover:text-primary transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={20}
                        className={`text-primary shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-sm md:text-base text-text-muted font-light leading-relaxed border-t border-border/40">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhyThukralPage;
