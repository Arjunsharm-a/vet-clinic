import { useState } from 'react';
import useBooking from '../hooks/useBooking';

const PET_TYPES = [
  'Dog',
  'Cat',
  'Bird',
  'Rabbit',
  'Cow',
  'Buffalo',
  'Goat',
  'Other',
];
const TIME_SLOTS = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '5:00 PM',
  '6:00 PM',
  '7:00 PM',
  '8:00 PM',
];

function getToday() {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

export default function AppointmentPage() {
  const [form, setForm] = useState({
    ownerName: '',
    phone: '',
    petType: '',
    problem: '',
    date: '',
    time: '',
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const { loading, success, error, submitBooking } = useBooking();

  const resetForm = () => {
    setForm({
      ownerName: '',
      phone: '',
      petType: '',
      problem: '',
      date: '',
      time: '',
    });
    setErrorMsg(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.ownerName.trim()) return 'Please enter your name.';
    if (!form.phone.trim()) return 'Please enter your phone number.';
    if (!form.petType) return 'Please select your pet type.';
    if (!form.date) return 'Please select a preferred date.';
    if (!form.time) return 'Please select a preferred time.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    const err = validate();
    if (err) {
      setErrorMsg(err);
      return;
    }
    await submitBooking({
      ownerName: form.ownerName,
      phone: form.phone,
      petType: form.petType,
      problem: form.problem,
      preferredDate: form.date,
      preferredTime: form.time,
    });
  };

  // WhatsApp link with prefilled message
  const whatsappLink = `https://wa.me/919876543210?text=Hello Doctor, my name is ${encodeURIComponent(
    form.ownerName || ''
  )}. I have submitted an appointment request on your website.`;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-2">
      <div className="max-w-md w-full mx-auto">
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-blue-900 text-center mb-2">
          Book an Appointment
        </h1>
        <p className="text-gray-600 text-center mb-4">
          Fill the form below and we'll confirm via WhatsApp or call
        </p>
        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl p-3 mb-4 text-sm text-blue-900">
          <div className="mb-1">📞 Prefer to call? <a href="tel:+919876543210" className="underline font-semibold">+91 98765 43210</a></div>
          <div>💬 Or <a href="https://wa.me/919876543210?text=Hello Doctor, I need an appointment" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-green-700">WhatsApp directly</a></div>
        </div>

        {/* Success State */}
        {success ? (
          <div className="bg-white rounded-2xl shadow-card p-8 flex flex-col items-center text-center">
            <div className="text-5xl mb-2">✅</div>
            <div className="font-heading font-bold text-green-700 text-xl mb-2">Appointment Request Sent!</div>
            <div className="text-gray-700 mb-4">We'll call or WhatsApp you within 30 minutes to confirm</div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl mb-2 w-full transition-all duration-150"
            >
              💬 Chat on WhatsApp to Confirm
            </a>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl w-full transition-all duration-150"
              onClick={() => {
                resetForm();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Book Another Appointment
            </button>
          </div>
        ) : (
          <form
            className="bg-white rounded-2xl shadow-card p-6 flex flex-col gap-4"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            {/* Pet Owner Name */}
            <div>
              <label className="block font-semibold text-blue-900 mb-1" htmlFor="ownerName">
                Pet Owner Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="Your name"
                value={form.ownerName}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            {/* Phone Number */}
            <div>
              <label className="block font-semibold text-blue-900 mb-1" htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="+91 XXXXX XXXXX"
                value={form.phone}
                onChange={handleChange}
                disabled={loading}
              />
              <div className="text-xs text-gray-500 mt-1">(We'll confirm via WhatsApp)</div>
            </div>
            {/* Pet Type */}
            <div>
              <label className="block font-semibold text-blue-900 mb-1" htmlFor="petType">
                Pet Type <span className="text-red-500">*</span>
              </label>
              <select
                id="petType"
                name="petType"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                value={form.petType}
                onChange={handleChange}
                disabled={loading}
              >
                <option value="">Select</option>
                {PET_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            {/* Pet Problem */}
            <div>
              <label className="block font-semibold text-blue-900 mb-1" htmlFor="problem">
                Pet Problem
              </label>
              <textarea
                id="problem"
                name="problem"
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="Briefly describe the issue (e.g. not eating, injury, vaccination needed)"
                value={form.problem}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            {/* Preferred Date */}
            <div>
              <label className="block font-semibold text-blue-900 mb-1" htmlFor="date">
                Preferred Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                min={getToday()}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                value={form.date}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            {/* Preferred Time */}
            <div>
              <label className="block font-semibold text-blue-900 mb-1" htmlFor="time">
                Preferred Time <span className="text-red-500">*</span>
              </label>
              <select
                id="time"
                name="time"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                value={form.time}
                onChange={handleChange}
                disabled={loading}
              >
                <option value="">Select</option>
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
            {/* Error Message */}
            {(errorMsg || error) && (
              <div className="text-red-600 text-sm font-semibold mt-1">
                {errorMsg || error}
              </div>
            )}
            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary w-full text-lg py-3 rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                  Sending...
                </>
              ) : (
                <>📅 Confirm Appointment</>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
