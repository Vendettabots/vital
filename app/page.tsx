'use client';

import Image from 'next/image';
import { FaHeartbeat, FaClipboardList, FaUserNurse, FaCalendarCheck, FaShieldAlt, FaHeart, FaClock, FaComments } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-6">
        <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <FaHeartbeat className="text-xl" />
          <span>VitalCare</span>
        </div>
        <div className="flex gap-6 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About Us</a>
          <a href="#">Caregivers</a>
          <a href="#">Resources</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-10 py-16 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Premium <span className="text-blue-600">Home Care</span> Services for Your Loved Ones
          </h1>
          <p className="text-gray-600 mb-6">
            Compassionate, professional caregivers providing personalized care to help seniors live comfortably and independently at home.
          </p>
          <div className="flex gap-4">
            <a href="#assessment" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Request Consultation
            </a>
            <a href="#" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-100 transition">
              Learn More
            </a>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=880&q=80"
            alt="Happy senior with caregiver"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Assessment Form */}
      <section id="assessment" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-16 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Get Your Free Assessment Today</h2>
          <FaClipboardList className="text-3xl" />
        </div>
        <form className="grid md:grid-cols-2 gap-6">
          <div><label>Full Name</label><input type="text" className="w-full mt-1 p-3 rounded-md text-black" placeholder="John Smith" /></div>
          <div><label>Phone Number</label><input type="tel" className="w-full mt-1 p-3 rounded-md text-black" placeholder="(123) 456-7890" /></div>
          <div><label>Email Address</label><input type="email" className="w-full mt-1 p-3 rounded-md text-black" placeholder="john@example.com" /></div>
          <div><label>Location</label><input type="text" className="w-full mt-1 p-3 rounded-md text-black" placeholder="City, State" /></div>
          <div className="col-span-2">
            <label>Care Needs (Select all that apply)</label>
            <div className="flex flex-wrap gap-4 mt-2">
              {["Personal Care", "Companionship", "Medication Management", "Mobility Assistance", "Dementia Care", "Other"].map((need, i) => (
                <label key={i} className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-white" />
                  {need}
                </label>
              ))}
            </div>
          </div>
          <div className="col-span-2">
            <label>Additional Information</label>
            <textarea rows={4} className="w-full mt-1 p-3 rounded-md text-black" placeholder="Tell us about your specific needs..." />
          </div>
          <div className="col-span-2">
            <button type="submit" className="w-full bg-white text-blue-600 font-bold py-3 rounded-md hover:bg-gray-100 transition">
              Submit Assessment Request
            </button>
          </div>
        </form>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose VitalCare?</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We provide exceptional care with a personal touch that makes all the difference.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <FaUserNurse />, title: "Expert Caregivers", text: "Highly trained professionals who undergo rigorous background checks and continuous education." },
            { icon: <FaCalendarCheck />, title: "Personalized Plans", text: "Custom care plans tailored to each individual's needs and preferences." },
            { icon: <FaShieldAlt />, title: "Safety First", text: "Comprehensive safety assessments to prevent accidents and ensure wellbeing." },
            { icon: <FaHeart />, title: "Compassionate Care", text: "We treat your loved ones with the dignity, respect, and kindness they deserve." },
            { icon: <FaClock />, title: "Flexible Scheduling", text: "Care when you need it - from a few hours to 24/7 live-in assistance." },
            { icon: <FaComments />, title: "Constant Communication", text: "Regular updates and open lines of communication with families." }
          ].map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
              <div className="text-blue-600 text-3xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-gray-50 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg italic mb-4">
            "VitalCare has been a blessing for our family. Their caregiver treats my mother with such kindness and respect, and the peace of mind is priceless."
          </p>
          <p className="font-bold">- Sarah Johnson, Daughter of Client</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto px-4">
          <div>
            <h3 className="font-bold text-lg mb-4">VitalCare</h3>
            <p className="text-sm text-gray-300">Providing exceptional home care services with compassion and professionalism.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#">Personal Care</a></li>
              <li><a href="#">Companionship</a></li>
              <li><a href="#">Dementia Care</a></li>
              <li><a href="#">Respite Care</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Caregivers</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>(800) 555-1234</li>
              <li>info@vitalcare.com</li>
              <li>Locations</li>
              <li>Emergency Contact</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">&copy; 2023 VitalCare. All rights reserved.</div>
      </footer>
    </div>
  );
}
