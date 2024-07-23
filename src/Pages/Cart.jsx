import React from "react";
import CartItems from "../Components/CartItems/CartItems";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Cart = () => {
  return (
    <div>
      <Navbar/>
      <CartItems />
      <Footer/>
      <Toaster/>
    </div>
  );
};

export default Cart;
