import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "../../Pages/LoginSignup";
import ShopCatogery from "../../Pages/ShopCatogery";
import men_banner from "../Assets/banner_mens.png";
import women_banner from "../Assets/banner_women.png";
import kid_banner from "../Assets/banner_kids.png";
import Shop from "../../Pages/Shop";
import AiComp from "../AiComponent/AiComp";
import Product from "../../Pages/Product";
import PaymentSuccess from "../PaymentSuccess/PaymentSuccess";
import Loader from "../Loader/Loader";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";
import CartItems from "../CartItems/CartItems";

const AppRoute = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
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

          <Route path="cart" element={<CartItems />} />
          <Route path="ai" element={<AiComp />} />
          <Route path="paymentsuccess" element={<PaymentSuccess />} />
        </Routes>
        <Footer />
      </Suspense>
      <Toaster />
    </Router>
  );
};

export default AppRoute;
