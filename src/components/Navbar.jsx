import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from '../assets/logonew.png';

const Navbar = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Function to collapse navbar after clicking a link
  const collapseNavbar = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  const handleQuoteClick = () => {
    collapseNavbar(); // Collapse menu
    navigate("/contact"); // Navigate to contact page
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/">
  <img className='logo' src={logo} alt="Amidhara Logo" />
</Link>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-4 align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={collapseNavbar}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={collapseNavbar}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/service" onClick={collapseNavbar}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product" onClick={collapseNavbar}>Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq" onClick={collapseNavbar}>FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={collapseNavbar}>Contact</Link>
            </li>
          </ul>

          <button 
            className="btn bg-dark text-warning" 
            onClick={handleQuoteClick}
          >
            Get Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
