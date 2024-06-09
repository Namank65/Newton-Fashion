import React from "react";
import { useSearchParams } from "react-router-dom";
import "./PaymentSuccess.css"

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const refresnceNumber = searchQuery.get("refrence");
  return (
    <div className="paymentSuccess">
      <h1 className="heading">Payment Successfully🎉</h1>
      <p>Refrence Number - {refresnceNumber}</p>
    </div>
  );
};

export default PaymentSuccess;
