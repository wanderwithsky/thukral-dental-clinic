const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Understand your concern."
  },
  {
    num: "02",
    title: "Assessment",
    desc: "Evaluate your dental needs."
  },
  {
    num: "03",
    title: "Treatment Plan",
    desc: "Discuss suitable options."
  },
  {
    num: "04",
    title: "Care",
    desc: "Begin your personalised treatment journey."
  }
];

const PatientJourney = () => {
  return (
    <section className="py-24 bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-text font-serif">
            Your Journey With Us
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-8 bg-background border border-border rounded-lg text-center group hover:border-primary transition-colors">
              <span className="block text-4xl font-serif text-primary/20 mb-6 group-hover:text-primary/40 transition-colors">
                {step.num}
              </span>
              <h3 className="text-xl text-text font-medium mb-3">
                {step.title}
              </h3>
              <p className="text-text-muted font-light">
                {step.desc}
              </p>
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-border z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientJourney;
