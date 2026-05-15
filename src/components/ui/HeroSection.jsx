import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="w-full bg-gradient-to-br from-sky-50 to-white flex flex-col md:flex-row items-center justify-between min-h-[80vh] md:min-h-screen px-4 md:px-12 py-10 md:py-0"
    >
      {/* Left Column */}
      <div className="w-full md:w-3/5 flex flex-col items-start justify-center gap-6 md:gap-8">
        <span className="inline-block bg-accent text-white text-xs md:text-sm font-semibold rounded-full px-4 py-1 mb-2">
          🐾 Trusted by 500+ Pet Owners
        </span>
        <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-blue-900 leading-tight">
          Trusted Veterinary Care for Your Beloved Pets
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-xl">
          Expert treatment, affordable prices, and a caring touch — right here in your city
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto">
          <button
            className="btn-primary text-lg w-full md:w-auto px-8 py-3 rounded-xl font-bold"
            onClick={() => navigate('/appointment')}
          >
            📅 Book Appointment
          </button>
          <a
            href="tel:+919876543210"
            className="btn-secondary text-lg w-full md:w-auto px-8 py-3 rounded-xl font-bold border-2 border-primary"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/919876543210?text=Hello Doctor, I need an appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg w-full md:w-auto px-8 py-3 rounded-xl font-bold bg-green-500 hover:bg-green-600 text-white shadow-md transition-all duration-200"
          >
            💬 WhatsApp Us
          </a>
        </div>
        <div className="text-sm text-gray-500 mt-2">
          ✓ No waiting &nbsp; ✓ Affordable &nbsp; ✓ Experienced
        </div>
      </div>

      {/* Right Column: Doctor Card */}
      <div className="w-full md:w-2/5 flex justify-center md:justify-end mt-10 md:mt-0">
        <div className="bg-white rounded-3xl border-2 border-blue-100 shadow-card p-6 md:p-8 flex flex-col items-center min-w-[260px] max-w-xs">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <span className="text-blue-700 font-bold text-2xl md:text-3xl">Dr. RV</span>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-blue-900 text-lg md:text-xl">Dr. Ramesh Verma</div>
            <div className="text-gray-500 text-sm md:text-base mb-2">BVSc & AH</div>
          </div>
          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold rounded-full px-3 py-1 mb-2">
            15+ Years Experience
          </span>
          <div className="flex items-center gap-2 mt-1">
            <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
            <span className="text-green-700 text-xs font-medium">Available Today</span>
          </div>
        </div>
      </div>
    </section>
  );
}
