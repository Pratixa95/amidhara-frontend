import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate("/contact");
  };

  return (
    <div className="home-page-container">
      {/* Hero Content Section */}
      <section className="hero-content">
        
        {/* The Glass Card */}
        <div className="glass-card">
          <h1 className="animate-text">
            Welcome to <br />
            <span>Amidhara Borewell</span>
          </h1>

          <p className="hero-tagline animate-text delay-1">
            Deep Drilling Solutions & Professional Water Services
          </p>

          {/* Features Grid */}
          <div className="features-grid animate-text delay-2">
            <div className="feature-item">
              <h3>30+ Years</h3>
              <p>Proven Experience</p>
            </div>
            <div className="feature-item">
              <h3>Advanced</h3>
              <p>Drilling Rigs</p>
            </div>
            <div className="feature-item">
              <h3>Reliable</h3>
              <p>Water Source</p>
            </div>
          </div>

          <p className="hero-desc animate-text delay-3">
            We specialize in reliable borewell drilling, timely recharging, submersible pump installation, and comprehensive maintenance. We ensure accurate drilling and long-lasting water solutions with skilled experts and modern technology.
          </p>

          <div className="hero-buttons animate-text delay-4">
            <button className="btn-primary glow-effect" onClick={handleQuoteClick}>
              Get Free Quote <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;