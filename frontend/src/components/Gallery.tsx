const Gallery = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-text font-serif mb-16">
          Our Environment
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`relative bg-background-secondary rounded overflow-hidden aspect-square border border-border group ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
              <div className="absolute inset-0 flex items-center justify-center text-text-muted text-sm font-medium">
                [Gallery Asset {i+1}]
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
