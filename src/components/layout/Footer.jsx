import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100 pt-10 pb-0 mt-10">
      <div className="max-w-6xl mx-auto px-4 w-full flex flex-col md:flex-row md:justify-between gap-8 md:gap-4">
        {/* Branding & Contact */}
        <div className="flex-1 min-w-[220px] mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">🐾</span>
            <span className="font-heading font-bold text-white text-lg">Paws & Care Clinic</span>
          </div>
          <div className="text-orange-400 font-semibold text-sm mb-1">Caring for your pets with love</div>
          <div className="text-blue-200 text-xs mb-2">by Dr. Ramesh Verma</div>
          <div className="flex flex-col gap-1 text-sm">
            <a href="tel:+919876543210" className="hover:text-orange-400 transition-colors">📞 +91 98765 43210</a>
            <a href="https://wa.me/919876543210?text=Hello%20Doctor%2C%20I%20need%20an%20appointment" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">💬 WhatsApp</a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex-1 min-w-[180px] mb-6 md:mb-0">
          <div className="text-orange-400 font-semibold mb-2">Quick Links</div>
          <ul className="flex flex-col gap-1">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/appointment" className="hover:text-white transition-colors">Appointment</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        {/* Working Hours */}
        <div className="flex-1 min-w-[200px]">
          <div className="text-orange-400 font-semibold mb-2">Working Hours</div>
          <table className="text-blue-100 text-sm w-full">
            <tbody>
              <tr>
                <td className="pr-2">Mon–Fri:</td>
                <td>9AM–1PM, 5PM–9PM</td>
              </tr>
              <tr>
                <td className="pr-2">Saturday:</td>
                <td>9AM–2PM</td>
              </tr>
              <tr>
                <td className="pr-2">Sunday:</td>
                <td>Emergency Only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="bg-blue-950 text-blue-200 text-xs py-3 mt-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div>© 2025 Paws & Care Clinic. All rights reserved.</div>
          <div>Made with <span className="text-red-400">❤️</span> for pets</div>
        </div>
      </div>
    </footer>
  );
}
