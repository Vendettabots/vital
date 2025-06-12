'use client';

import Image from 'next/image';
import { FaHeartbeat, FaClipboardList, FaUserNurse, FaCalendarCheck, FaShieldAlt, FaHeart, FaClock, FaComments } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto px-8">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-6">
        <div className="flex items-center gap-2 text-3xl font-extrabold text-[#3a86ff]">
          <FaHeartbeat className="text-4xl" />
          <span>VitalCare</span>
        </div>
        <div className="flex gap-8">
          {['Home', 'Services', 'About Us', 'Caregivers', 'Resources', 'Contact'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-[#1a1a2e] font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-[#3a86ff] after:transition-all hover:after:w-full hover:text-[#3a86ff]"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16 items-center">
        <div>
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Premium <span className="text-[#3a86ff]">Home Care</span> Services for Your Loved Ones
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-[90%]">
            Compassionate, professional caregivers providing personalized care to help seniors live comfortably and independently at home.
          </p>
          <div className="flex gap-4 mt-8">
            <Button variant="primary" href="#assessment">
              Request Consultation
            </Button>
            <Button variant="secondary" href="#">
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
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
      <section id="assessment" className="bg-gradient-to-r from-[#3a86ff] to-[#8338ec] p-12 rounded-2xl text-white my-16 shadow-xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Get Your Free Assessment Today</h2>
          <FaClipboardList className="text-5xl" />
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
            { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(123) 456-7890' },
            { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
            { id: 'location', label: 'Location', type: 'text', placeholder: 'City, State' }
          ].map((field) => (
            <div key={field.id} className="mb-4">
              <label htmlFor={field.id} className="block mb-2 font-medium">{field.label}</label>
              <input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 rounded-lg border-none bg-white/90 text-gray-800"
              />
            </div>
          ))}
          
          <div className="md:col-span-2 mb-4">
            <label className="block mb-2 font-medium">Care Needs (Select all that apply)</label>
            <div className="flex flex-wrap gap-4">
              {["personal-care", "companionship", "medication", "mobility", "dementia", "other"].map((id) => (
                <div key={id} className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <input type="checkbox" id={id} className="w-auto" />
                  <label htmlFor={id} className="cursor-pointer">
                    {id.replace("-", " ").replace(/\b\w/g, c => c.toUpperCase())}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2 mb-4">
            <label htmlFor="message" className="block mb-2 font-medium">Additional Information</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your specific needs..."
              className="w-full px-4 py-3 rounded-lg border-none bg-white/90 text-gray-800"
            />
          </div>
          
          <div className="md:col-span-2">
            <Button 
              type="submit" 
              variant="primary" 
              className="w-full py-4 text-lg"
            >
              Submit Assessment Request
            </Button>
          </div>
        </form>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Why Choose VitalCare?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We provide exceptional care with a personal touch that makes all the difference.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <FaUserNurse className="text-5xl" />, title: "Expert Caregivers", text: "Highly trained professionals who undergo rigorous background checks and continuous education." },
            { icon: <FaCalendarCheck className="text-5xl" />, title: "Personalized Plans", text: "Custom care plans tailored to each individual's needs and preferences." },
            { icon: <FaShieldAlt className="text-5xl" />, title: "Safety First", text: "Comprehensive safety assessments to prevent accidents and ensure wellbeing." },
            { icon: <FaHeart className="text-5xl" />, title: "Compassionate Care", text: "We treat your loved ones with the dignity, respect, and kindness they deserve." },
            { icon: <FaClock className="text-5xl" />, title: "Flexible Scheduling", text: "Care when you need it - from a few hours to 24/7 live-in assistance." },
            { icon: <FaComments className="text-5xl" />, title: "Constant Communication", text: "Regular updates and open lines of communication with families." }
          ].map((feature, index) => (
            <Card key={index} icon={feature.icon} title={feature.title} className="hover:-translate-y-1 hover:shadow-lg">
              {feature.text}
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-gray-50 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-xl italic text-gray-800 mb-8">
            "VitalCare has been a blessing for our family. Their caregiver treats my mother with such kindness and respect, and the peace of mind is priceless."
          </blockquote>
          <p className="font-bold">- Sarah Johnson, Daughter of Client</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#3a86ff]">
              VitalCare
            </h3>
            <p>Providing exceptional home care services with compassion and professionalism.</p>
          </div>
          
          {[
            {
              title: "Services",
              items: ["Personal Care", "Companionship", "Dementia Care", "Respite Care"]
            },
            {
              title: "Company",
              items: ["About Us", "Our Caregivers", "Testimonials", "Careers"]
            },
            {
              title: "Contact",
              items: ["(800) 555-1234", "info@vitalcare.com", "Locations", "Emergency Contact"]
            }
          ].map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#3a86ff]">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-all hover:pl-2"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          &copy; {new Date().getFullYear()} VitalCare. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
