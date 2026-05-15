import { Link, useNavigate } from 'react-router-dom';

const services = [
  {
    icon: '💉',
    name: 'Vaccination',
    desc: 'Protect your pet with timely vaccinations and boosters',
    bg: 'bg-blue-50',
  },
  {
    icon: '🔬',
    name: 'General Checkup',
    desc: 'Thorough health checkup to catch problems early',
    bg: 'bg-green-50',
  },
  {
    icon: '🏥',
    name: 'Surgery',
    desc: 'Safe minor and major surgeries with post-op care',
    bg: 'bg-orange-50',
  },
  {
    icon: '✂️',
    name: 'Pet Grooming',
    desc: 'Full grooming — bath, trim, nail cutting and more',
    bg: 'bg-blue-50',
  },
  {
    icon: '🚑',
    name: 'Emergency Care',
    desc: '24/7 emergency support for critical conditions',
    bg: 'bg-green-50',
  },
  {
    icon: '💊',
    name: 'Deworming',
    desc: 'Regular deworming schedules for healthy pets',
    bg: 'bg-orange-50',
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-50 py-14 md:py-20 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-blue-900 mb-2">
            Our Services
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-2">
            Complete care for your pets under one roof
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, idx) => (
            <div
              key={service.name}
              className={`bg-white rounded-2xl p-5 shadow-card transition-all duration-200 flex flex-col h-full group hover:shadow-lg`}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full text-2xl mb-3 transition-all duration-200 ${service.bg} group-hover:bg-orange-100`}
              >
                <span>{service.icon}</span>
              </div>
              <div className="font-heading font-bold text-blue-900 text-base md:text-lg mb-1">
                {service.name}
              </div>
              <div className="text-gray-600 text-sm mb-4 flex-1">
                {service.desc}
              </div>
              <Link
                to="#"
                className="text-accent text-xs font-semibold mt-auto hover:underline"
                tabIndex={-1}
                aria-disabled="true"
                onClick={e => e.preventDefault()}
              >
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button
            className="btn-primary text-lg px-8 py-3 rounded-xl font-bold"
            onClick={() => navigate('/appointment')}
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
