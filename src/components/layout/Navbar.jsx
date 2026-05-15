import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Appointment', path: '/appointment' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 h-16">
        {/* Logo & Clinic Info */}
        <Link to="/" className="flex flex-col items-start py-2 select-none">
          <span className="flex items-center gap-1 font-bold text-primary text-lg md:text-xl">
            <span role="img" aria-label="paw">🐾</span> Paws & Care Clinic
          </span>
          <span className="text-xs text-neutral-500 font-normal leading-tight ml-6 -mt-1 hidden sm:block">
            Dr. Ramesh Verma
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded font-medium transition-colors duration-150 ${
                isActive(link.path)
                  ? 'text-accent'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/appointment"
            className="btn-primary ml-2 hidden md:inline-block"
          >
            Book Now
          </Link>
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-white z-50 transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none'
        } shadow-lg border-t border-gray-100`}
        style={{ minHeight: menuOpen ? 'calc(100vh - 4rem)' : 0 }}
      >
        <div className="flex flex-col items-center py-6 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`w-full text-center py-3 text-lg font-medium rounded transition-colors duration-150 ${
                isActive(link.path)
                  ? 'text-accent'
                  : 'text-gray-700 hover:text-primary'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/appointment"
            className="btn-primary w-11/12 mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </Link>
          <span className="text-xs text-neutral-500 mt-4">Dr. Ramesh Verma</span>
        </div>
      </div>
    </header>
  );
}
