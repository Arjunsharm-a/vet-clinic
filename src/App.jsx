import { BrowserRouter, Routes, Route } from 'react-router-dom'

function HomePage() {
  return <h1>Home Page</h1>
}

function ServicesPage() {
  return <h1>Services Page</h1>
}

function AppointmentPage() {
  return <h1>Appointment Page</h1>
}

function ContactPage() {
  return <h1>Contact Page</h1>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App