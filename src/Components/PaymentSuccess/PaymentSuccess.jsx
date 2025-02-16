import { useNavigate, useSearchParams } from "react-router-dom";
import "./PaymentSuccess.css"
import { useContext, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContext";

const PaymentSuccess = () => {
  const nevigate = useNavigate();
  const searchQuery = useSearchParams()[0];
  const refresnceNumber = searchQuery.get("refrence");
  const {orders} = useContext(ShopContext);

  // if(!refresnceNumber){
  //   nevigate("/home")
  // }

useEffect(() => {
    orders()
},[])
  
  return (
    <div className="paymentSuccess">
      <h1 className="heading">Payment Successfull🎉</h1>
      <p>Refrence Number - {refresnceNumber}</p>
      <h2>Thanks For Shopping With Us</h2>
    </div>
  );
};

export default PaymentSuccess;
