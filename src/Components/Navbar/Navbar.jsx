import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/ecomlogo2.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropDown from "../Assets/dropdown_icon.png";
import { useDispatch } from "react-redux";
import { toggleAiSearch } from "../../utils/AiCompSlice";
import { context, server } from "../../index";
import toast from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [aiBtn, setAiBtn] = useState("AI Suggestions");
  const { getTotalCartItems } = useContext(ShopContext);
  const { isAuthenticated, setIsAuthenticated } = useContext(context);

  const menuRef = useRef();
  const dispatch = useDispatch();

  const handelClickAi = () => {
    dispatch(toggleAiSearch());
    aiBtn === "AI Suggestions" ? setAiBtn("Home") : setAiBtn("AI Suggestions");
  };

  const logoOutHandler = async () => {
    try {
      await axios.get(`${server}/users/logout`, { withCredentials: true });
      toast.success("Logged Out Successfully");
      setIsAuthenticated(false);
    } catch (error) {
      console.log(error);
      toast.error("Somthing Went Wrong");
      setIsAuthenticated(true);
    }
  };

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
          <Link style={{ textDecoration: "none" }} to={"/shop"}>
            <span>Shop</span>
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>

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
        {isAuthenticated ? (
          <button onClick={logoOutHandler}>logout</button>
        ) : (
          <Link to={"/"}>
            <button>Login</button>
          </Link>
        )}

        <Link to={"/cart"}>
          <img src={cart_icon} alt="CartIcon" />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      <button id="ai-Btn" onClick={handelClickAi} className="aiBtn">
        {aiBtn}
      </button>
    </div>
  );
};

export default Navbar;
