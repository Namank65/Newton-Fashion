import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginSignup from "../../Pages/LoginSignup";
import ShopCatogery from "../../Pages/ShopCatogery";
import men_banner from "../Assets/banner_mens.png";
import women_banner from "../Assets/banner_women.png";
import kid_banner from "../Assets/banner_kids.png";
import Cart from "../../Pages/Cart";
import Shop from "../../Pages/Shop";
import { useSelector } from "react-redux";
import AiComp from "../AiComponent/AiComp";

const Browse = () => {
  const showAiSearch = useSelector((store) => store.ai.showAiSearch);
  {/* {showAiSearch ? (<AiComp/>) : () } */}

  const AppRoute = createBrowserRouter(
    createRoutesFromElements(

      <>
      <Route path="/" element={<LoginSignup />} />
      <Route path="home" element={<Shop />} />
      <Route path="mens" element={<ShopCatogery category="men" banner={men_banner} />} />
      <Route path="womens" element={<ShopCatogery category="women" banner={women_banner} />} />
      <Route path="kids" element={<ShopCatogery category="kid" banner={kid_banner} />} />
      <Route path="cart" element={<Cart />} />
      <Route path="ai" element={<AiComp />} />
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
