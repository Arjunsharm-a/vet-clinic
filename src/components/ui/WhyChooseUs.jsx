const features = [
  {
    icon: '🩺',
    title: 'Experienced Doctor',
    desc: '15+ years of veterinary experience with all types of pets',
  },
  {
    icon: '💰',
    title: 'Affordable Treatment',
    desc: 
      "Quality care at prices that don't burn a hole in your pocket",
  },
  {
    icon: '🚨',
    title: 'Emergency Support',
    desc: 'Available for urgent cases — call us anytime on WhatsApp',
  },
  {
    icon: '❤️',
    title: 'Gentle & Caring',
    desc: 'We handle every pet with love, patience, and expertise',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-14 md:py-20 w-full">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-blue-900 mb-2">
            Why Pet Owners Trust Us
          </h2>
          <div className="flex justify-center">
            <span className="block h-1 w-16 bg-accent rounded-full mb-4"></span>
          </div>
          <p className="text-gray-500 text-base md:text-lg mb-2">
            We treat your pets like family
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl border border-blue-100 shadow-card p-6 flex flex-col items-center text-center transition-all duration-200 hover:shadow-lg hover:border-accent group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-sky-50 mb-4 text-2xl md:text-3xl">
                <span>{feature.icon}</span>
              </div>
              <div className="font-heading font-bold text-blue-900 text-base md:text-lg mb-2">
                {feature.title}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {feature.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
