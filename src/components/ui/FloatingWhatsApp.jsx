import { useState } from 'react';

const WHATSAPP_URL =
  'https://wa.me/919876543210?text=Hello%20Doctor%2C%20I%20need%20an%20appointment';
const PHONE_URL = 'tel:+919876543210';

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {/* Tooltip (desktop only) */}
      <div
        className={`hidden sm:block mb-1 transition-opacity duration-200 ${
          hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-1 shadow-lg font-semibold">
          Chat with Doctor
        </div>
      </div>
      {/* Call Button */}
      <a
        href={PHONE_URL}
        className="relative w-[60px] h-[60px] flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg transition-transform duration-200 active:scale-95 mb-2"
        style={{ zIndex: 2 }}
        aria-label="Call Doctor"
      >
        <span className="text-white font-bold text-lg">📞</span>
      </a>
      {/* WhatsApp Button with Pulse */}
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-pulse"
          style={{ filter: 'blur(4px)' }}
        ></span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-[60px] h-[60px] flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-transform duration-200 active:scale-95 hover:scale-110"
          style={{ zIndex: 2 }}
          aria-label="Chat on WhatsApp"
        >
          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            className="text-white"
            fill="currentColor"
          >
            <circle cx="16" cy="16" r="16" fill="none" />
            <path
              d="M16 6.5A9.5 9.5 0 007.1 21.1l-1.1 4.1 4.2-1.1A9.5 9.5 0 1016 6.5zm0 17.5a8 8 0 01-4.1-1.2l-.3-.2-2.5.7.7-2.4-.2-.3A8 8 0 1116 24zm4.4-6.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.1-.5.7-.6.8-.1.1-.2.2-.4.1-.2-.1-.8-.3-1.5-.9-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2.2-.3.1-.1.1-.2.1-.3 0-.1 0-.2 0-.3s-.5-1.3-.7-1.7c-.2-.4-.4-.3-.5-.3h-.4c-.1 0-.3 0-.4.2-.1.2-.5.5-.5 1.2s.5 1.4.6 1.5c.1.1 1.1 1.7 2.7 2.3.4.2.7.3 1 .4.4.1.7.1 1 .1.3 0 .9-.1 1.1-.3.2-.2.5-.5.6-.9.1-.4.1-.8.1-.9-.1-.1-.2-.1-.4-.2z"
              fill="#fff"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
