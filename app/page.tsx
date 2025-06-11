'use client';

import Image from 'next/image';
import { FaHeartbeat, FaClipboardList, FaUserNurse, FaCalendarCheck, FaShieldAlt, FaHeart, FaClock, FaComments } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav>
        <div className="logo">
          <FaHeartbeat />
          <span>VitalCare</span>
        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About Us</a>
          <a href="#">Caregivers</a>
          <a href="#">Resources</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Premium <span>Home Care</span> Services for Your Loved Ones
          </h1>
          <p>
            Compassionate, professional caregivers providing personalized care to help seniors live comfortably and independently at home.
          </p>
          <div className="cta-group">
            <a href="#assessment" className="btn btn-primary">Request Consultation</a>
            <a href="#" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=880&q=80"
            alt="Happy senior with caregiver"
            width={600}
            height={400}
          />
        </div>
      </section>

      {/* Assessment Form */}
      <section id="assessment" className="assessment">
        <div className="assessment-header">
          <h2>Get Your Free Assessment Today</h2>
          <div className="feature-icon"><FaClipboardList /></div>
        </div>
        <form className="assessment-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="John Smith" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="(123) 456-7890" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" placeholder="City, State" />
          </div>
          <div className="form-group full-width">
            <label>Care Needs (Select all that apply)</label>
            <div className="checkbox-group">
              {["personal-care", "companionship", "medication", "mobility", "dementia", "other"].map(id => (
                <div className="checkbox-item" key={id}>
                  <input type="checkbox" id={id} />
                  <label htmlFor={id}>
                    {id.replace("-", " ").replace(/\b\w/g, c => c.toUpperCase())}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="form-group full-width">
            <label htmlFor="message">Additional Information</label>
            <textarea id="message" rows={4} placeholder="Tell us about your specific needs..." />
          </div>
          <div className="form-group full-width">
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Submit Assessment Request
            </button>
          </div>
        </form>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-header">
          <h2>Why Choose VitalCare?</h2>
          <p>We provide exceptional care with a personal touch that makes all the difference.</p>
        </div>
        <div className="features-grid">
          {[
            { icon: <FaUserNurse />, title: "Expert Caregivers", text: "Highly trained professionals who undergo rigorous background checks and continuous education." },
            { icon: <FaCalendarCheck />, title: "Personalized Plans", text: "Custom care plans tailored to each individual's needs and preferences." },
            { icon: <FaShieldAlt />, title: "Safety First", text: "Comprehensive safety assessments to prevent accidents and ensure wellbeing." },
            { icon: <FaHeart />, title: "Compassionate Care", text: "We treat your loved ones with the dignity, respect, and kindness they deserve." },
            { icon: <FaClock />, title: "Flexible Scheduling", text: "Care when you need it - from a few hours to 24/7 live-in assistance." },
            { icon: <FaComments />, title: "Constant Communication", text: "Regular updates and open lines of communication with families." }
          ].map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial">
        <div className="container">
          <div className="testimonial-content">
            "VitalCare has been a blessing for our family. Their caregiver treats my mother with such kindness and respect, and the peace of mind is priceless."
          </div>
          <div className="testimonial-author">- Sarah Johnson, Daughter of Client</div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>VitalCare</h3>
              <p>Providing exceptional home care services with compassion and professionalism.</p>
            </div>
            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Personal Care</a></li>
                <li><a href="#">Companionship</a></li>
                <li><a href="#">Dementia Care</a></li>
                <li><a href="#">Respite Care</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Caregivers</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact</h3>
              <ul>
                <li><a href="#">(800) 555-1234</a></li>
                <li><a href="#">info@vitalcare.com</a></li>
                <li><a href="#">Locations</a></li>
                <li><a href="#">Emergency Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            &copy; 2023 VitalCare. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
