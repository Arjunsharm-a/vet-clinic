import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="w-full">
      {/* Header Banner */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-blue-700 py-10 px-4 md:px-0 text-white mb-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading font-bold text-2xl md:text-4xl mb-2">Contact Us</h1>
          <div className="text-lg opacity-90">We're here for you and your pets</div>
        </div>
      </div>

      {/* Contact Options */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-10">
        <a
          href="tel:+919876543210"
          className="flex flex-col items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-2xl shadow-lg p-8 transition-all text-center cursor-pointer"
        >
          <span className="text-4xl mb-2">📞</span>
          <span className="font-bold text-lg mb-1">Call Us</span>
          <span className="text-base font-semibold">+91 98765 43210</span>
        </a>
        <a
          href="https://wa.me/919876543210?text=Hello%20Doctor%2C%20I%20need%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-2xl shadow-lg p-8 transition-all text-center cursor-pointer"
        >
          <span className="text-4xl mb-2">💬</span>
          <span className="font-bold text-lg mb-1">WhatsApp</span>
          <span className="text-base font-semibold">Chat with Doctor</span>
        </a>
        <a
          href="https://maps.google.com/maps?q=123,+Nehru+Nagar,+Indore&output=embed"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-2xl shadow-lg p-8 transition-all text-center cursor-pointer"
        >
          <span className="text-4xl mb-2">📍</span>
          <span className="font-bold text-lg mb-1">Visit Us</span>
          <span className="text-base font-semibold">123, Nehru Nagar, Indore</span>
        </a>
      </div>

      {/* Clinic Info Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-card p-7 mb-10 flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">📍</span>
            <span className="font-bold text-blue-900">123, Nehru Nagar, Near City Hospital, Indore, MP - 452001</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🕐</span>
            <span className="font-bold text-blue-900">Working Hours:</span>
          </div>
          <table className="text-sm ml-8 mb-2">
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
          <div className="flex items-center gap-2">
            <span className="text-2xl">💉</span>
            <span className="font-bold text-blue-900">Services:</span>
            <span className="text-gray-700">Vaccination, Checkup, Surgery, Grooming, Emergency, Deworming</span>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="max-w-4xl mx-auto px-4 mb-10">
        <iframe
          title="Clinic Location"
          src="https://maps.google.com/maps?q=Indore,Madhya+Pradesh,India&output=embed"
          className="w-full h-[400px] rounded-2xl border-0 shadow-card"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Quick Message Form */}
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-card p-7 mb-10">
        <h2 className="font-heading font-bold text-xl text-blue-900 mb-2">Quick Message</h2>
        {sent ? (
          <div className="text-green-600 font-semibold text-center py-8 text-lg">
            Thanks! We'll call you within 2 hours
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
            <div>
              <label htmlFor="name" className="block font-semibold text-blue-900 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-semibold text-blue-900 mb-1">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="+91 XXXXX XXXXX"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold text-blue-900 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="How can we help you?"
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full text-lg py-3 rounded-xl font-bold mt-2"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="text-xs text-gray-500 mt-4 text-center">
          Prefer WhatsApp? It's faster!{' '}
          <a
            href="https://wa.me/919876543210?text=Hello%20Doctor%2C%20I%20have%20a%20question"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 underline font-semibold"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
