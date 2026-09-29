const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-[4/5] w-full max-w-md mx-auto bg-background-secondary border border-border rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src="https://res.cloudinary.com/zvlxacfu/image/upload/v1790667607/82e8902d-7d55-4b0c-b2bf-bb3345753b19.png" 
                alt="Clinic / Patient Comfort" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 aspect-square bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text mb-8 leading-tight">
              Dental Care That Feels Personal.
            </h2>
            <div className="space-y-6 text-lg text-text-muted leading-relaxed font-sans font-light">
              <p>
                At Thukral Dental & Aesthetic Clinic, we believe that modern dentistry should be built around your comfort and peace of mind. We have designed our practice to feel less like a clinical hospital and more like a calming, supportive environment.
              </p>
              <p>
                Whether you're visiting for a routine check-up, a complete smile transformation, or advanced orthodontic care, our team prioritizes clear communication. We ensure you fully understand your treatment options before we begin.
              </p>
              <p>
                Our strict hygiene standards, professional team, and personalised approach to care have helped us earn the trust of the Varanasi community. We don't just treat teeth; we care for the people behind the smiles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
