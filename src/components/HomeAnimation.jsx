import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Liquid transition going down.json";

const HomeAnimation = () => {
  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <Lottie 
        animationData={animationData} 
        loop={true}
      />
    </div>
  );
};

export default HomeAnimation;
