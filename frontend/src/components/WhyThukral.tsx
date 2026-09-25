const reasons = [
  {
    title: "Comfort-first approach",
    description: "Patients consistently mention feeling comfortable and reassured during their visits."
  },
  {
    title: "Clear communication",
    description: "We provide clear, jargon-free treatment explanations so you know exactly what to expect."
  },
  {
    title: "Professional & hygienic environment",
    description: "We maintain strict hygiene protocols in a pristine, welcoming setting."
  },
  {
    title: "Supportive team",
    description: "From the front desk to the dental chair, our staff is dedicated to your well-being."
  },
  {
    title: "Smile-focused care",
    description: "Specialized in aesthetic dentistry, smile design, whitening, and aligners."
  },
  {
    title: "Modern approach",
    description: "A contemporary clinic utilizing advanced techniques for precise, effective care."
  }
];

const WhyThukral = () => {
  return (
    <section id="why-thukral" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text leading-tight sticky top-32">
              Why Thukral?
            </h2>
          </div>
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {reasons.map((reason, idx) => (
                <div key={idx} className="border-t border-border pt-6">
                  <span className="text-primary font-serif text-xl mb-4 block">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <h3 className="text-xl text-text font-medium mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-text-muted font-light leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThukral;
