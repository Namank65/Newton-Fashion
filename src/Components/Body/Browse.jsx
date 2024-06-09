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
import AiComp from "../AiComponent/AiComp";
import Product from "../../Pages/Product";
import PaymentSuccess from "../PaymentSuccess/PaymentSuccess";


const Browse = () => {

  const AppRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LoginSignup />} />
        <Route path="home" element={<Shop />} />
        <Route
          path="mens"
          element={<ShopCatogery category="Men" banner={men_banner} />}
        />
        <Route
          path="womens"
          element={<ShopCatogery category="Women" banner={women_banner} />}
        />
        <Route
          path="kids"
          element={<ShopCatogery category="Kid" banner={kid_banner} />}
        />

        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>

        <Route path="cart" element={<Cart />} />
        <Route path="ai" element={<AiComp />} />
        <Route path="paymentsuccess" element={<PaymentSuccess />} />
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
