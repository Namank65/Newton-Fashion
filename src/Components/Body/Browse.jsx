import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import men_banner from "../Assets/banner_mens.png";
import women_banner from "../Assets/banner_women.png";
import kid_banner from "../Assets/banner_kids.png";

const LoginSignup = lazy(() => import('../../Pages/LoginSignup'));
const ShopCatogery = lazy(() => import('../../Pages/ShopCatogery'));
const Shop = lazy(() => import('../../Pages/Shop'));
const AiComp = lazy(() => import('../AiComponent/AiComp'));
const Product = lazy(() => import('../../Pages/Product'));
const PaymentSuccess = lazy(() => import('../PaymentSuccess/PaymentSuccess'));
const Loader = lazy(() => import('../Loader/Loader'));
const Footer = lazy(() => import('../Footer/Footer'));
const CartItems = lazy(() => import('../CartItems/CartItems'));
const Navbar = lazy(() => import('../Navbar/Navbar'));

const AppRoute = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="home" element={<Loader/>} />
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
 