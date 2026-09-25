const treatments = [
  {
    category: "Smile & Aesthetic Dentistry",
    items: [
      { name: "Teeth Whitening", desc: "Professional treatments to safely brighten your smile." },
      { name: "Smile Design", desc: "Personalised planning to achieve your ideal aesthetic." },
      { name: "Smile Transformation", desc: "Comprehensive care combining treatments for a complete refresh." }
    ]
  },
  {
    category: "Orthodontics",
    items: [
      { name: "Clear Aligners", desc: "Discreet and comfortable alternatives to traditional braces." },
      { name: "Orthodontic Treatment", desc: "Expert alignment correction for functional and aesthetic results." }
    ]
  },
  {
    category: "Restorative & General Dentistry",
    items: [
      { name: "Root Canal Treatment", desc: "Careful, comfort-focused care to save damaged teeth." },
      { name: "Tooth Extraction", desc: "Safe, precise extractions performed with minimal discomfort." },
      { name: "General Dental Care", desc: "Routine check-ups, hygiene, and maintenance for long-term health." }
    ]
  },
  {
    category: "Advanced Dental Care",
    items: [
      { name: "Dental Implants", desc: "Permanent, natural-looking replacements for missing teeth." }
    ]
  }
];

const TreatmentsSection = () => {
  return (
    <section id="treatments" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-text mb-6">
            Comprehensive Care
          </h2>
          <p className="text-lg text-text-muted">
            Explore our range of treatments, from essential maintenance to advanced smile design. Each procedure is performed with an unwavering commitment to your comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {treatments.map((group, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-2xl font-serif text-primary border-b border-border pb-4">
                {group.category}
              </h3>
              <div className="space-y-6">
                {group.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group cursor-pointer">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-lg text-text font-medium group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                        Learn More &rarr;
                      </span>
                    </div>
                    <p className="text-text-muted text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
