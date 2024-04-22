import React from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Body from "./Body";
import LoginSignup from "../../Pages/LoginSignup";
import ShopCatogery from "../../Pages/ShopCatogery";
import men_banner from "../Assets/banner_mens.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Cart from "../../Pages/Cart";
import Component from "./Component";
import Shop from "../../Pages/Shop";

const Browse = () => {
  const AppLayout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const AppRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LoginSignup />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shopc" element={<ShopCatogery category="men" banner={men_banner} />} />
        </>
    )
  );

  return (
    <div>
      <RouterProvider router={AppRoute} />
    </div>
  );
};

export default Browse;
