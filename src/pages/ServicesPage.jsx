import { useNavigate, Link } from 'react-router-dom';

const SERVICES = [
  {
    icon: '💉',
    bg: 'bg-blue-50',
    name: 'Vaccination Program',
    details: [
      'Core vaccines for dogs (Rabies, Distemper, Parvovirus) and cats',
      'Annual boosters',
      'Puppy/kitten vaccination schedules',
    ],
    price: 'Starting ₹200',
  },
  {
    icon: '🔬',
    bg: 'bg-green-50',
    name: 'General Health Checkup',
    details: [
      'Full physical exam',
      'Blood tests if needed',
      'Diet and nutrition advice',
    ],
    price: 'Starting ₹100',
  },
  {
    icon: '🏥',
    bg: 'bg-orange-50',
    name: 'Surgical Procedures',
    details: [
      'Spay/neuter surgeries',
      'Wound treatment',
      'Foreign body removal',
      'Minor surgeries under local anesthesia',
    ],
    price: 'Call for pricing',
  },
  {
    icon: '✂️',
    bg: 'bg-blue-50',
    name: 'Pet Grooming',
    details: [
      'Bath & dry',
      'Haircut and styling',
      'Nail trimming',
      'Ear cleaning',
      'De-matting',
      'Tick treatment',
    ],
    price: 'Starting ₹300',
  },
  {
    icon: '🚑',
    bg: 'bg-green-50',
    name: 'Emergency Care',
    details: [
      '24/7 WhatsApp for emergencies',
      'Poisoning, accidents',
      'Difficulty breathing, seizures',
    ],
    price: 'Emergency fees apply',
  },
  {
    icon: '💊',
    bg: 'bg-orange-50',
    name: 'Deworming & Parasite Control',
    details: [
      'Internal deworming',
      'Tick & flea treatment',
      'Heartworm prevention',
    ],
    price: 'Starting ₹80',
  },
];

export default function ServicesPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* Header Banner */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-blue-700 py-10 px-4 md:px-0 text-white mb-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-sm mb-2 opacity-80">
            <Link to="/" className="hover:underline">Home</Link> &gt; Services
          </div>
          <h1 className="font-heading font-bold text-2xl md:text-4xl mb-1">Our Services</h1>
        </div>
      </div>
      {/* Service Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 px-4 md:px-0 mb-14">
        {SERVICES.map((s, idx) => (
          <div key={s.name} className="bg-white rounded-2xl shadow-md p-7 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-3">
              <span className={`w-14 h-14 flex items-center justify-center rounded-full text-3xl ${s.bg}`}>
                {s.icon}
              </span>
              <h3 className="font-heading font-bold text-blue-900 text-xl md:text-2xl ml-1">{s.name}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 mb-4 pl-2">
              {s.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
            <div className="mt-auto flex items-center justify-between pt-2">
              <span className="inline-block bg-orange-500 text-white text-xs font-bold rounded-full px-4 py-1">
                {s.price}
              </span>
              <button
                className="btn-primary text-sm md:text-base px-5 py-2 rounded-xl font-bold ml-2"
                onClick={() => navigate('/appointment')}
              >
                Book for This Service
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* CTA Banner */}
      <div className="w-full bg-gradient-to-r from-orange-400 to-orange-500 py-10 mt-2 flex flex-col items-center justify-center text-center">
        <div className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
          Not sure what your pet needs?
        </div>
        <div className="text-white text-lg mb-4">Just WhatsApp us!</div>
        <a
          href="https://wa.me/919876543210?text=Hello%20Doctor%2C%20I%20have%20a%20question%20about%20my%20pet"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-orange-600 font-bold px-7 py-3 rounded-xl shadow hover:bg-orange-50 transition-all text-lg"
        >
          WhatsApp Now
        </a>
      </div>
    </div>
  );
}
