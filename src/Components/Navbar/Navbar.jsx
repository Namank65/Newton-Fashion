import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/ecomlogo2.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropDown from "../Assets/dropdown_icon.png";
import { useDispatch } from "react-redux";
import { toggleAiSearch } from "../../utils/AiCompSlice";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dispatch = useDispatch();

  const handelClickAi = () => {
    dispatch(toggleAiSearch())
  }

  const dropDownToggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="logoContainer">
        <img className="logoimg" src={logo} alt="Logo" />
        <p>NuBî Fashîon</p>
      </div>

      <div className="drop-down">
        <img
          className="nav-dropDown"
          onClick={dropDownToggle}
          src={nav_dropDown}
          alt="dropDown"
        />
      </div>

      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <span>Shop</span>
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        {/* <li>Shop</li> */}

        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link style={{ textDecoration: "none" }} to={"/mens"}>
            <span>Men</span>
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to={"/womens"}>
            <span>Women</span>
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to={"/kids"}>
            <span>Kids</span>
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to={"/login"}>
          <button>Login</button>
        </Link>

        <Link to={"/cart"}>
          <img src={cart_icon} alt="CartIcon" />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      <button id="ai-Btn" onClick={handelClickAi} className="aiBtn">AI Suggestions</button>
    </div>
  );
};

export default Navbar;
