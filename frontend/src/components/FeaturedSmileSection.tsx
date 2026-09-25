const FeaturedSmileSection = () => {
  return (
    <section className="bg-primary text-background py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Placeholder for background subtle texture/image */}
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-8 leading-tight max-w-4xl mx-auto">
          A Smile Designed Around You.
        </h2>
        <p className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          From teeth whitening and aligners to personalised smile-focused care, explore treatment options designed around your individual needs.
        </p>
        <a href="#treatments" className="btn-secondary border-background text-background hover:bg-background hover:text-primary transition-colors bg-transparent px-8 py-4 text-sm tracking-widest uppercase inline-block">
          Explore Smile Treatments
        </a>
      </div>
    </section>
  );
};

export default FeaturedSmileSection;
