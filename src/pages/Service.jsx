import React from "react";
import "./Service.css";
import service1 from "../assets/service1.jpeg";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.webp";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";
import service6 from "../assets/service6.jpeg";

// List of services
const services = [
  { title: "New Borewell Drilling", image: service1 },
  { title: "Commercial & Industrial Borewell Service", image: service2 },
  { title: "Borewell Recharging", image: service3 },
  { title: "Submersible Pump Installation", image: service4 },
  { title: "Borewell Repairing", image: service5 },
  { title: "Air Compressor in all Borewell", image: service6 }
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Header */}
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Reliable borewell solutions across Gujarat</p>
      </div>

      {/* Service Cards */}
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
