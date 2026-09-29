import { useState, useEffect, useRef } from 'react';

const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

const AnimatedStat = ({ endValue, format, duration = 2000 }: { endValue: number, format: (val: number) => string, duration?: number }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      let startTime: number | null = null;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        const easeProgress = easeOutQuart(progress);
        setCurrentValue(endValue * easeProgress);

        if (progress < 1) {
          window.requestAnimationFrame(animate);
        } else {
          setCurrentValue(endValue);
          setHasAnimated(true);
        }
      };

      window.requestAnimationFrame(animate);
    }
  }, [isVisible, endValue, duration, hasAnimated]);

  return <span ref={elementRef}>{format(currentValue)}</span>;
};

const TrustBar = () => {
  const stats = [
    { 
      label: 'Google Rating', 
      staticValue: '4.9★', 
      isNumeric: true, 
      endValue: 4.9, 
      format: (v: number) => v.toFixed(1) + '★' 
    },
    { 
      label: 'Reviews', 
      staticValue: '138+', 
      isNumeric: true, 
      endValue: 138, 
      format: (v: number) => Math.floor(v) + '+' 
    },
    { label: 'Pishachmochan', staticValue: 'Varanasi' },
    { label: 'Care', staticValue: 'Patient-Centred' },
  ];

  return (
    <section className="bg-primary text-background py-12 border-y border-border/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-background/20 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <span className="font-serif text-3xl md:text-4xl mb-2">
                {stat.isNumeric && stat.endValue && stat.format ? (
                  <AnimatedStat endValue={stat.endValue} format={stat.format} />
                ) : (
                  stat.staticValue
                )}
              </span>
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
