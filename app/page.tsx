"use client";

import Image from "next/image";
import logo from "../public/vitalsigns-logo.png";

export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-center p-6 shadow-md bg-white">
        <div className="flex items-center gap-4">
          <Image src={logo} alt="VitalSigns Logo" width={48} height={48} />
          <div>
            <h1 className="text-2xl font-bold text-blue-900">VitalSigns</h1>
            <p className="text-teal-500 text-sm tracking-wide">WELLNESS</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="bg-teal-500 text-white px-4 py-2 rounded-md">Book a Visit</button>
      </header>

      <section className="bg-gradient-to-br from-teal-100 to-white text-center py-20 px-4">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Premium Home Care Services for Your Loved Ones
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto text-lg mb-6">
          Compassionate, professional caregivers providing personalized care to help seniors live comfortably and independently at home.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-md">Request Consultation</button>
          <button className="bg-transparent border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-md">Learn More</button>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gray-50 text-center">
        <h3 className="text-3xl font-semibold text-blue-900 mb-12">Our Core Services</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded shadow">
            <h4 className="text-xl font-bold mb-2">Vital Signs Monitoring</h4>
            <p>Blood pressure, temperature, pulse, and more — tracked with clinical accuracy in your home.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h4 className="text-xl font-bold mb-2">Traveling Nurse Support</h4>
            <p>Licensed professionals arrive wherever you are, equipped for safe and efficient health checks.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h4 className="text-xl font-bold mb-2">Patient Onboarding + EHR</h4>
            <p>Streamlined electronic health records with secure access and seamless provider handoff.</p>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-blue-900 mb-6">Why Choose VitalSigns Wellness?</h3>
          <p className="text-gray-700 text-lg mb-4">
            We combine clinical professionalism with compassionate care — backed by modern tech and a patient-first philosophy.
          </p>
          <p className="text-gray-600">
            HIPAA-compliant. Nurse-led. Fully mobile. We serve the Chicagoland area and beyond with excellence, empathy, and speed.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-teal-50 py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Ready to Book a Visit?</h3>
          <p className="text-gray-600 mb-6">Call us at (847) 555-1234 or book online with just a few clicks.</p>
          <button className="bg-blue-900 text-white px-6 py-3 rounded-md">Get Started</button>
        </div>
      </section>

      <footer className="py-10 px-4 bg-gray-100 text-center text-sm text-gray-600">
        &copy; 2025 VitalSigns Wellness. All rights reserved.
      </footer>
    </div>
  );
}

