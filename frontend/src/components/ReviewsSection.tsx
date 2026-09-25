import { Star } from 'lucide-react';

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

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-text mb-8 leading-tight">
            What Patients Remember Is How You Made Them Feel.
          </h2>
          <div className="flex items-center justify-center space-x-2 text-primary mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-text-muted font-medium tracking-wide uppercase text-sm">
            4.9 &starf; &middot; 138 Reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-background p-10 border border-border rounded-lg shadow-sm">
              <p className="text-lg text-text-muted font-serif italic leading-relaxed mb-6">
                "{review.text}"
              </p>
              <p className="text-sm font-medium text-text uppercase tracking-wider">
                &mdash; {review.name}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-16">
          <a href="#" className="btn-secondary inline-block">
            READ MORE REVIEWS
          </a>
        </div>

        <div className="pt-16 border-t border-border">
          <p className="text-center text-sm font-medium text-text-muted uppercase tracking-widest mb-10">
            Frequently mentioned in reviews
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {insights.map((insight, idx) => (
              <div key={idx} className="px-6 py-3 bg-background border border-border rounded-full text-center">
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
