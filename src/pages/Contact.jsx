import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="contact-page">

      {/* Header */}
      <div className="contact-header" data-aos="fade-down">
        <h1>Get in Touch with Amidhara Borewell</h1>
        <p>Reach out to our expert team for a free consultation or a personalized borewell solution.</p>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container" data-aos="fade-up">
        <form className="contact-form">
          <h2>Request a Quote</h2>

          <input type="text" placeholder="Enter your full name" required />
          <input type="tel" placeholder="Enter your phone number" required />
          <input type="email" placeholder="Enter your email address" required />

          <select required>
            <option value="">Select a service</option>
            <option>New Borewell Drilling</option>
            <option>Borewell Recharge</option>
            <option>Submersible Pump Installation</option>
            <option>Borewell Repair & Maintenance</option>
            <option>Water Quality Testing</option>
          </select>

          <textarea placeholder="Describe your project requirements..." rows="5" required></textarea>

          <button type="submit" className="btn-submit">
            Send Request
          </button>
        </form>
      </div>

      {/* Contact Info Cards */}
      <div className="contact-info" data-aos="fade-up" data-aos-delay="200">
        <h2>Reach Us Easily</h2>
        <div className="info-cards">

          <div className="info-card" data-aos="zoom-in" data-aos-delay="100">
            <div className="info-icon">📞</div>
            <p>+91 91066 04895</p>
          </div>

          <div className="info-card" data-aos="zoom-in" data-aos-delay="200">
            <div className="info-icon">✉️</div>
            <p>infoamidharaborewell@gmail.com</p>
          </div>

          <div className="info-card" data-aos="zoom-in" data-aos-delay="300">
            <div className="info-icon">📍</div>
            <p>Sahajanand Krupa Society, F/120, Tarsali, Vadodara, Gujarat</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;
