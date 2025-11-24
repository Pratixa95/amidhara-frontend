import React from "react";
import "./WaterBackground.css";

const WaterBackground = () => {
  return (
    <>
      <div className="water-background-fixed">
        {/* Base gradient layer */}
        <div className="water-base"></div>
        
        {/* Animated Wave Layers */}
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4 highlight-wave"></div>
      </div>
      
      {/* Global Overlay to ensure text is readable on all pages */}
      <div className="global-overlay"></div>
    </>
  );
};

export default WaterBackground;