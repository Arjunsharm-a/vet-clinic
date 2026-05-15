export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-14 md:py-20 w-full">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-blue-900 mb-2">
            Find Us
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-2">
            We're easy to reach — visit, call, or WhatsApp
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Info Cards */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Address */}
            <div className="bg-white rounded-2xl shadow-card p-5 flex items-start gap-3">
              <span className="text-2xl bg-blue-50 rounded-full w-10 h-10 flex items-center justify-center">📍</span>
              <div>
                <div className="font-bold text-blue-900 text-sm">Address</div>
                <div className="text-gray-700 text-sm">123, Nehru Nagar, Near City Hospital, Indore, MP - 452001</div>
              </div>
            </div>
            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-card p-5 flex items-start gap-3">
              <span className="text-2xl bg-blue-50 rounded-full w-10 h-10 flex items-center justify-center">📞</span>
              <div className="flex-1">
                <div className="font-bold text-blue-900 text-sm">Phone</div>
                <a
                  href="tel:+919876543210"
                  className="inline-block mt-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-150"
                >
                  Call Now
                </a>
                <div className="text-gray-700 text-xs mt-1">+91 98765 43210</div>
              </div>
            </div>
            {/* WhatsApp */}
            <div className="bg-white rounded-2xl shadow-card p-5 flex items-start gap-3">
              <span className="text-2xl bg-green-50 rounded-full w-10 h-10 flex items-center justify-center">💬</span>
              <div className="flex-1">
                <div className="font-bold text-blue-900 text-sm">WhatsApp</div>
                <a
                  href="https://wa.me/919876543210?text=Hello Doctor, I need an appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-150"
                >
                  Chat on WhatsApp
                </a>
                <div className="text-gray-700 text-xs mt-1">+91 98765 43210</div>
              </div>
            </div>
            {/* Email */}
            <div className="bg-white rounded-2xl shadow-card p-5 flex items-start gap-3">
              <span className="text-2xl bg-orange-50 rounded-full w-10 h-10 flex items-center justify-center">✉️</span>
              <div>
                <div className="font-bold text-blue-900 text-sm">Email</div>
                <div className="text-gray-700 text-sm">pawsandcare@gmail.com</div>
              </div>
            </div>
            {/* Timings (desktop only) */}
            <div className="hidden md:block bg-white rounded-2xl shadow-card p-5 flex items-start gap-3">
              <span className="text-2xl bg-blue-50 rounded-full w-10 h-10 flex items-center justify-center">🕐</span>
              <div>
                <div className="font-bold text-blue-900 text-sm">Timings</div>
                <div className="text-gray-700 text-sm">
                  Mon-Sat: 9:00 AM – 1:00 PM, 5:00 PM – 9:00 PM<br />
                  Sunday: Emergency Only
                </div>
              </div>
            </div>
          </div>
          {/* Right: Map */}
          <div className="flex-1 flex flex-col items-center">
            <iframe
              title="Clinic Location"
              src="https://maps.google.com/maps?q=Indore,MP,India&output=embed"
              className="w-full h-72 md:h-[400px] rounded-2xl border-0 shadow-card"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Timings (mobile only) */}
            <div className="block md:hidden w-full mt-4">
              <div className="bg-white rounded-2xl shadow-card p-5 flex items-start gap-3">
                <span className="text-2xl bg-blue-50 rounded-full w-10 h-10 flex items-center justify-center">🕐</span>
                <div>
                  <div className="font-bold text-blue-900 text-sm">Timings</div>
                  <div className="text-gray-700 text-sm">
                    <table className="text-xs">
                      <tbody>
                        <tr>
                          <td className="pr-2 font-semibold">Mon-Sat:</td>
                          <td>9:00 AM – 1:00 PM, 5:00 PM – 9:00 PM</td>
                        </tr>
                        <tr>
                          <td className="pr-2 font-semibold">Sunday:</td>
                          <td>Emergency Only</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
