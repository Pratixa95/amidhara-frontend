import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate("/contact"); // navigate to contact page
  };

  return (
    <div>
      {/* Slider */}
      <header className="slider">
        <div className="slides">
          <div className="slide slide1"></div>
          <div className="slide slide2"></div>
          <div className="slide slide3"></div>
          <div className="slide slide4"></div>
          <div className="slide slide5"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero container">
        <div className="hero-center">
          <h1>
            <span>Amidhara Borewell</span>
          </h1>

          <p className="hero-desc">
            We provide reliable and professional borewell drilling services with modern equipment and skilled experts. Our services include new borewell drilling, borewell recharge, air compressor service, submersible pumps, emergency repair, water tanker service, and maintenance. With 30 years of experience, we ensure accurate drilling, fast service, and long-lasting results. Customer satisfaction and fair pricing are our top priorities.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleQuoteClick}>
              Get Free Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
