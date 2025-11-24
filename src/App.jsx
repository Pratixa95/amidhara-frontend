import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './pages/About';
import Service from './pages/Service';
import Product from './pages/Product';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Footer from './components/Footer';
// import Home from './pages/Home';
import Main from './pages/Main';
import WhatsappButton from './components/WhatsappButton';
import WaterBackground from './components/WaterBackground';
import Gallery from './pages/Gallery';

const App = () => {
  return (
    <Router>

      <WaterBackground/>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/product" element={<Product />} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      <WhatsappButton/>
    </Router>
  );
};

export default App;
