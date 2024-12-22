import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/ecomlogo2.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, Navigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropDown from "../Assets/dropdown_icon.png";
import { context, server } from "../../index";
import toast from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const { isAuthenticated, setIsAuthenticated } = useContext(context);
  const { isAdmin, setIsAdmin } = useContext(context);

  const menuRef = useRef();

  const logoOutHandler = async () => {
    try {
      await axios.get(`${server}/users/logout`, { withCredentials: true });
      toast.success("Logged Out Successfully");
      setIsAuthenticated(false);
    } catch (error) {
      toast.error("Somthing Went Wrong");
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated ) return <Navigate to={"/"} />;
  console.log(isAdmin)

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
          <Link style={{ textDecoration: "none" }} to={"/home"}>
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

      {isAdmin === "Admin" ? <Link to={"/ai"}><button id="ai-Btn"  className="aiBtn">
        Ai
      </button>
      </Link> : <Link to={"https://www.google.com"}><button id="ai-Btn"  className="aiBtn">
        Admin
      </button>
      </Link>}
      
    </div>
  );
};

export default Navbar;
