import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/ecomlogo2.png";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="logoContainer">
        <img className="logoimg" src={logo} alt="Logo" />
        <p>NuBî Fashîon</p>
      </div>
      <ul className="nav-menu">
        <li>
          Shop <hr />
        </li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="CartIcon" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
