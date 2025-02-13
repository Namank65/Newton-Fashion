import { useNavigate, useSearchParams } from "react-router-dom";
import "./PaymentSuccess.css"

const PaymentSuccess = () => {
  const nevigate = useNavigate();
  const searchQuery = useSearchParams()[0];
  const refresnceNumber = searchQuery.get("refrence");

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
