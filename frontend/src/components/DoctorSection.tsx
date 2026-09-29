const DoctorSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background-secondary border-y border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text mb-4">
              Dr. Anchit Thukral
            </h2>
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-8">
              Lead Dentist & Aesthetic Specialist
            </p>
            
            <div className="space-y-6 text-lg text-text-muted font-light leading-relaxed mb-10">
              <p>
                Dr. Anchit Thukral brings a calm, reassuring, and highly professional approach to dental care. Known for his clear communication and patient-first methodology, he ensures that every individual who sits in the dental chair feels safe, heard, and completely understood.
              </p>
              <p>
                His practice focuses on delivering precise, personalised treatment plans—from complex orthodontic corrections to complete smile transformations—without the anxiety typically associated with dental visits.
              </p>
            </div>
            
            <a href="#appointment" className="inline-flex items-center text-primary font-medium hover:text-primary-hover transition-colors text-lg group">
              Book a Consultation 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[3/4] bg-background border border-border rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src="https://res.cloudinary.com/zvlxacfu/image/upload/v1790668147/228af05e-abc7-4bd3-a90c-699149f82de8.png" 
                alt="Dr. Anchit Thukral" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
