import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./PaymentSuccess.css"
import { ShopContext } from "../../Context/ShopContext";

const PaymentSuccess = () => {
  const nevigate = useNavigate();
  const searchQuery = useSearchParams()[0];
  const refresnceNumber = searchQuery.get("refrence");

  const {
    all_product,
    cartItems,
    removefromCart
  } = useContext(ShopContext);

  useEffect(() => {
    all_product.map((e) => cartItems[e.id].quantity > 0 ? removefromCart(e.id) : "")
  },[])


  if(!refresnceNumber){
    nevigate("/home")
  }
  return (
    <div className="paymentSuccess">
      <h1 className="heading">Payment Successfull🎉</h1>
      <p>Refrence Number - {refresnceNumber}</p>
      <h2>Thanks For Shopping With Us</h2>
    </div>
  );
};

export default PaymentSuccess;
