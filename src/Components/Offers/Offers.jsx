import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/rashmikaherotwo.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
      </div>

      <div className="offers-right">
        <img src={exclusive_image} alt="exclusiveImage" />
      </div>
    </div>
  );
};

export default Offers;
