import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import team from "../assets/team.png";
import service from "../assets/quick service.png";
import equipment from "../assets/equipment.png";
import expertise from "../assets/expertise.png";
import rupee from "../assets/rupee.png";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // duration 1s, animate once
  }, []);

  return (
    <div className="about-page">
      {/* TOP HEADING */}
      <section className="about-header container" data-aos="fade-down">
        <h1 className="about-title">
          About <span>Amidhara</span> Borewell
        </h1>
        <p className="about-subtitle">
          Trusted Service. Skilled Work. A name you can rely on.
        </p>
      </section>

      {/* FEATURE CARDS */}
      <section className="about-features container mb-5">
        <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
          <h3>Reliability 🔧</h3>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
          <h3>Safety 🛡️</h3>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
          <h3>Precision 🎯</h3>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="about-team container mb-5" data-aos="fade-right">
        <div className="team-content">
          <h2>Our Team</h2>
          <p>
            Behind every successful project is a skilled team. At Amidhara, our crew
            is trained, experienced, and committed to delivering the best drilling and
            water-solution services.
          </p>
          <p>
            With years of hands-on field knowledge, our technicians understand ground
            behavior, soil patterns, and the right methods needed for smooth and
            efficient work.
          </p>
          <p>
            From deep borewell drilling to flushing, pump fitting, and recharge
            systems — our team ensures every task is handled with care, accuracy, and
            complete responsibility.
          </p>
        </div>
        <div className="team-image" data-aos="fade-left">
          <img src={team} alt="Borewell Drilling" />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose container mb-5" data-aos="fade-up">
        <h2>Why Choose Amidhara Borewell?</h2>
        <div className="why-grid">
          <div className="why-box" data-aos="zoom-in" data-aos-delay="100">
            <img className="aboutIcon" src={expertise} alt="Expertise" />
            <h4>Trusted Expertise</h4>
          </div>
          <div className="why-box" data-aos="zoom-in" data-aos-delay="200">
            <img className="aboutIcon" src={equipment} alt="Equipment" />
            <h4>Advanced Equipment</h4>
          </div>
          <div className="why-box" data-aos="zoom-in" data-aos-delay="300">
            <img className="aboutIcon" src={service} alt="Service" />
            <h4>Quick Service</h4>
          </div>
          <div className="why-box" data-aos="zoom-in" data-aos-delay="400">
            <img className="aboutIcon" src={rupee} alt="Honest Charges" />
            <h4>Honest Charges</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
