import React from "react";
import "./Hero.css";
import handIcon from "../Assets/hand_icon.png";
import arrowIcon from "../Assets/arrow.png";
import heroImage from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="Hero-Hand-Icon">
                <p>New</p>
                <img src={handIcon} alt="hero" />
            </div>
            <p>Collections</p>
            <p>For Every One</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrowIcon} alt="arrow" />
        </div>
      </div>

      <div className="hero-right">
            <img src={heroImage} alt="heroImg" />
      </div>

    </div>
  );
};

export default Hero;
