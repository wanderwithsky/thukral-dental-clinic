import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const reviews = [
  {
    name: "Ashu Rayeen",
    text: "Thank you sir you changed my life. I highly recommend Dr Anchit Thukral. He designed my smile so well. Thank you once again."
  },
  {
    name: "Riya Pathak",
    text: "Dr. Anchit Sir is a dentist who truly understands how to comfort his patients. His calm nature and reassuring words make every treatment feel safe and stress-free."
  },
  {
    name: "Adarsh Mishra",
    text: "Very nice dental clinic. Very affordable and reasonable. Best dentist in varanasi. Value for money treatment."
  },
  {
    name: "Verified Patient",
    text: "The team is highly professional. The clinic maintains excellent hygiene and the teeth whitening and aligners treatments were explained clearly. I felt completely comfortable throughout the process."
  }
];

const insights = [
  { topic: "Orthodontic Treatment", mentions: "13 mentions" },
  { topic: "Smile Transformation", mentions: "6 mentions" },
  { topic: "Painless Procedures", mentions: "3 mentions" },
  { topic: "Root Canal", mentions: "4 mentions" }
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="h-full bg-gradient-to-br from-[#fdfcfb] to-[#f9f7f1] p-8 md:p-10 border border-border rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(139,115,85,0.1)] hover:-translate-y-1 hover:border-[#d4cbb8] transition-all duration-500 flex flex-col justify-between group cursor-default">
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>
        <Quote size={20} className="text-text-muted/20 group-hover:text-primary/20 transition-colors" />
      </div>
      <p className="text-lg md:text-xl text-text-muted font-serif italic leading-relaxed mb-8">
        "{review.text}"
      </p>
    </div>
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-bold text-lg">
        {review.name.charAt(0)}
      </div>
      <div>
        <p className="text-sm font-medium text-text uppercase tracking-wider">
          {review.name}
        </p>
        <p className="text-xs text-text-muted">Google Review</p>
      </div>
    </div>
  </div>
);

const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // To pause auto-slide if needed

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    if (isHovered) return; // Optional: pause mobile slider on interaction
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext, isHovered]);

  return (
    <section id="reviews" className="py-24 md:py-32 bg-background-secondary border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-text mb-8 leading-tight">
            What Patients Remember Is How You Made Them Feel.
          </h2>
          <div className="flex items-center justify-center space-x-2 text-primary mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="currentColor" />
            ))}
          </div>
          <p className="text-text-muted font-medium tracking-wide uppercase text-sm">
            4.9 &starf; &middot; 138 Reviews
          </p>
        </div>
      </div>

      {/* Desktop Continuous Marquee */}
      <div className="hidden md:block relative w-full mb-24 overflow-hidden">
        {/* Subtle Edge Fades for Desktop */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background-secondary to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background-secondary to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-[200%] animate-marquee">
          {/* Double the array for seamless infinite looping */}
          {[...reviews, ...reviews].map((review, idx) => (
            <div key={idx} className="w-[500px] shrink-0 px-4">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Auto-slider */}
      <div 
        className="md:hidden relative w-full mb-16"
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Subtle Edge Fades for Mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-background-secondary to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-background-secondary to-transparent z-10 pointer-events-none"></div>
        
        <div 
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="w-full shrink-0 px-6 transition-opacity duration-700"
              style={{ opacity: idx === activeIndex ? 1 : 0.3 }}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center justify-center space-x-6 mt-10">
          <button 
            onClick={() => { handlePrev(); setIsHovered(false); }}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text hover:bg-primary hover:text-white hover:border-primary transition-colors focus:outline-none"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <div className="flex space-x-2">
            {reviews.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-500 ${idx === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-border'}`}
              />
            ))}
          </div>
          <button 
            onClick={() => { handleNext(); setIsHovered(false); }}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text hover:bg-primary hover:text-white hover:border-primary transition-colors focus:outline-none"
            aria-label="Next review"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Special Review Section */}
      <div className="container mx-auto px-4 md:px-8 mb-20 lg:mb-24">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary block">
            SPECIAL REVIEW
          </span>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full max-w-[750px] rounded-[1.5rem] overflow-hidden shadow-2xl border border-border/50 bg-background/50">
            <img 
              src="https://res.cloudinary.com/zvlxacfu/image/upload/v1790678410/3679cb64-e340-41d8-89f0-1199d5852e53.png" 
              alt="Patient Review"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <a href="#" className="btn-secondary inline-block">
            READ MORE REVIEWS
          </a>
        </div>

        <div className="pt-16 border-t border-border/50">
          <p className="text-center text-sm font-medium text-text-muted uppercase tracking-widest mb-10">
            Frequently mentioned in reviews
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {insights.map((insight, idx) => (
              <div key={idx} className="px-6 py-3 bg-white/50 backdrop-blur-sm border border-border rounded-full text-center hover:border-[#d4cbb8] transition-colors cursor-default">
                <span className="block text-text font-medium">{insight.topic}</span>
                <span className="block text-xs text-text-muted mt-1">{insight.mentions}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
