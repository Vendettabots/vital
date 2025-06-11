import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function VitalSignsHomepage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="flex justify-between items-center p-6 shadow-md">
        <div className="flex items-center space-x-4">
          <img src="/vitalsigns-logo.png" alt="VitalSigns Wellness Logo" className="w-12 h-12" />
          <div>
            <h1 className="text-2xl font-bold text-blue-900">VitalSigns</h1>
            <p className="text-teal-500 text-sm tracking-wide">WELLNESS</p>
          </div>
        </div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#services" className="hover:text-teal-600">Services</a>
          <a href="#about" className="hover:text-teal-600">About</a>
          <a href="#contact" className="hover:text-teal-600">Contact</a>
        </nav>
        <Button className="bg-teal-500 hover:bg-teal-600 text-white">Book a Visit</Button>
      </header>

      <section className="bg-gradient-to-br from-teal-100 to-white text-center py-20 px-4">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">On-Demand Health Services, Delivered to You</h2>
        <p className="text-gray-700 max-w-xl mx-auto text-lg mb-6">
          Whether it's a wellness check or vitals monitoring, we bring care directly to your door — fast, private, and professional.
        </p>
        <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 text-lg">Schedule Your First Visit</Button>
      </section>

      <section id="services" className="py-20 px-4 bg-gray-50">
        <h3 className="text-3xl font-semibold text-center text-blue-900 mb-12">Our Core Services</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Vital Signs Monitoring</h4>
              <p className="text-gray-600">Blood pressure, temperature, pulse, and more — tracked with clinical accuracy in your home.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Traveling Nurse Support</h4>
              <p className="text-gray-600">Licensed professionals arrive wherever you are, equipped for safe and efficient health checks.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Patient Onboarding + EHR</h4>
              <p className="text-gray-600">Streamlined electronic health records with secure access and seamless provider handoff.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-blue-900 mb-6">Why Choose VitalSigns Wellness?</h3>
          <p className="text-gray-700 text-lg mb-4">
            We combine clinical professionalism with compassionate care — backed by modern tech and a patient-first philosophy.
          </p>
          <p className="text-gray-600">
            HIPAA-compliant. Nurse-led. Fully mobile. We serve the Chicagoland area and beyond with excellence, empathy, and speed.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-teal-50 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Ready to Book a Visit?</h3>
          <p className="text-gray-600 mb-6">Call us at (847) 555-1234 or book online with just a few clicks.</p>
          <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 text-lg">Get Started</Button>
        </div>
      </section>

      <footer className="py-10 px-4 bg-gray-100 text-center text-sm text-gray-600">
        &copy; 2025 VitalSigns Wellness. All rights reserved.
      </footer>
    </div>
  );
}
