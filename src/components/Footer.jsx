import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-box">
          <h3>Amidhara Borewell</h3>
          <p>
            Reliable borewell drilling, cleaning, recharging, pumping & repair
            solutions across Gujarat.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-box">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-box">
          <h4>Contact</h4>
          <p>📍 Sahajanand Krupa Society, F/120, Tarsali, Vadodara</p>
          <p>📞 +91 91066 04895</p>
          <p>✉️ infoamidharaborewell@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TEJASKP AI SOFTWARE</p>
        <div className="footer-links">
          <Link to="#">Privacy Policy</Link>
          <span>|</span>
          <Link to="#">Terms of Service</Link>
          <span>|</span>
          <Link to="#">Support</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
