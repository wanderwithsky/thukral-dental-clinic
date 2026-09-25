const TrustBar = () => {
  const stats = [
    { label: 'Google Rating', value: '4.9★' },
    { label: 'Reviews', value: '138+' },
    { label: 'Pishachmochan', value: 'Varanasi' },
    { label: 'Care', value: 'Patient-Centred' },
  ];

  return (
    <section className="bg-primary text-background py-12 border-y border-border/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-background/20 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <span className="font-serif text-3xl md:text-4xl mb-2">{stat.value}</span>
              <span className="text-xs md:text-sm uppercase tracking-widest text-background/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
