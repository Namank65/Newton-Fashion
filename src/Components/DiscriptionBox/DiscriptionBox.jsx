import React from "react";
import "./DiscriptionBox.css";

const DiscriptionBox = () => {
  return (
    <div className="DiscriptionBox">
      <div className="DiscriptionBox-navigator">
        <div className="DiscriptionBox-nav-box">Discription</div>
        <div className="DiscriptionBox-nav-box fade">Reviews (125)</div>
      </div>
      <div className="DiscriptionBox-Discription">
        <p>
          An e-commerce website is an online platform that facilitate buying and
          selling of products or services over the internet serves as a virtual
          marketplace where businesses and individ showcase their products,
          interact with customers, and conduc transactions without the need for
          a physical presence. E-com websites have gained immense popularity due
          to their conveni accessibility, and the global reach they offer.
        </p>

        <p>
          E-commerce websites typically display products or services a detailed
          descriptions, images, prices, and any available var (e.g., sizes,
          colors). Each product usually has its own details with relevant
          information and details.
        </p>
      </div>
    </div>
  );
};

export default DiscriptionBox;
