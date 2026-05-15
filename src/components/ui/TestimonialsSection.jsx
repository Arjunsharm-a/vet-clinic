const testimonials = [
  {
    name: 'Priya Sharma',
    pet: 'Golden Retriever owner',
    review:
      'Dr. Verma treated my Bruno with so much care. He recovered quickly from surgery. Highly recommend!',
    stars: 5,
    city: 'Indore',
  },
  {
    name: 'Rahul Gupta',
    pet: 'Cat owner',
    review:
      "Very affordable and the doctor explains everything clearly. My cat's vaccination was quick and painless.",
    stars: 5,
    city: 'Bhopal',
  },
  {
    name: 'Sunita Patel',
    pet: 'Labrador owner',
    review:
      'Emergency service saved my dog\'s life at night. Doctor responded on WhatsApp immediately!',
    stars: 5,
    city: 'Ujjain',
  },
  {
    name: 'Amit Joshi',
    pet: 'Rabbit owner',
    review:
      'Never expected such good treatment for a rabbit. Doctor is very knowledgeable and kind.',
    stars: 5,
    city: 'Indore',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-14 md:py-20 w-full">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-accent font-bold text-sm md:text-base block mb-2">
            500+ Happy Pet Owners
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-blue-900 mb-2">
            What Pet Owners Say
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-2">
            Real stories from real families in our city
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-blue-50 border-l-4 border-blue-400 rounded-2xl p-6 flex flex-col justify-between shadow-card"
            >
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>
              <div className="italic text-gray-700 mb-6">“{t.review}”</div>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-700 text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-bold text-blue-900 leading-tight">
                    {t.name}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {t.pet} • {t.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
