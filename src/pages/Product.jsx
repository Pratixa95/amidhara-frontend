import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";
import AOS from "aos";
import "aos/dist/aos.css";

import pump05 from "../assets/product.webp";
import pump1 from "../assets/product.webp";
import pump15 from "../assets/product.webp";

const productList = [
  {
    name: "0.5 HP Submersible Pump",
    desc: "Ideal for domestic use and small water requirements",
    price: "₹5,500",
    gst: "*Price inclusive of GST",
    power: "0.5 HP",
    phase: "Single Phase",
    head: "Up to 30 meters",
    flow: "Up to 1800 LPH",
    features: [
      "Power: 0.5 HP",
      "Energy efficient motor",
      "Corrosion-resistant body",
      "Built-in thermal overload protection",
      "Easy installation and maintenance",
      "1-year warranty"
    ],
    img: pump05
  },
  {
    name: "1 HP Submersible Pump",
    desc: "Perfect for medium-sized homes and agricultural needs",
    price: "₹6,500",
    gst: "*Price inclusive of GST",
    power: "1 HP",
    phase: "Single Phase",
    head: "Up to 45 meters",
    flow: "Up to 3600 LPH",
    features: [
      "Power: 1 HP",
      "High-performance motor",
      "Stainless steel construction",
      "Thermal protection",
      "Low maintenance design",
      "1-year warranty"
    ],
    img: pump1
  },
  {
    name: "1.5 HP Submersible Pump",
    desc: "Suitable for farms and larger residential applications",
    price: "₹9,000",
    gst: "*Price inclusive of GST",
    power: "1.5 HP",
    phase: "Single/Three Phase",
    head: "Up to 60 meters",
    flow: "Up to 5400 LPH",
    features: [
      "Power: 1.5 HP",
      "Heavy-duty motor",
      "Superior build quality",
      "Enhanced protection features",
      "Efficient water delivery",
      "1-year warranty"
    ],
    img: pump15
  }
];

const Product = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="products-page">
      <h1 className="products-title" data-aos="fade-down">Our Products</h1>

      <div className="products-container">
        {productList.map((product, index) => (
          <div
            className="product-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <div className="product-img">
              <img src={product.img} alt={product.name} />
            </div>

            <div className="product-info">
              <h2>{product.name}</h2>
              <p className="desc">{product.desc}</p>
              <p className="price">{product.price}</p>
              <p className="gst">{product.gst}</p>

              <div className="specs">
                <p><strong>Power:</strong> {product.power}</p>
                <p><strong>Phase:</strong> {product.phase}</p>
                <p><strong>Max Head:</strong> {product.head}</p>
                <p><strong>Flow Rate:</strong> {product.flow}</p>
              </div>

              <ul className="features">
                {product.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <button className="btn-quote" onClick={goToContact}>
                Get Quote
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
