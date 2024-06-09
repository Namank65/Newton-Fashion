import React, { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
// import { useSelector } from "react-redux";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removefromCart, checkoutHandler } =
    useContext(ShopContext);
    const [totalCartAmount, setTotalCartAmount] = useState(getTotalCartAmount());
    let checkoutName = [""];
    // const Size = useSelector((store) => store.ai.productSize)
    // console.log(Size)

  return (
    <div className="CartItems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product?.map((e, index) => {
        if (cartItems[e.id] > 0) {
          checkoutName =  e.name;
          return (
            <div key={index}>
              <div className="cartItems-Formate cartItems-format-main">
                <img
                  src={e.images}
                  alt="cartIcon"
                  className="cartIcon-product-icon"
                />
                <p>{e.name}</p>
                <p>${e.newPrice}</p>
                <button className="cartItems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.newPrice * cartItems[e.id]}</p>
                {/* <p>{Size}</p> */}
                <img
                  className="cartItems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removefromCart(e.id);
                  }}
                  alt="removeIcon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartItems-down">
        <div className="cartItems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartItems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={() => {checkoutHandler(totalCartAmount, checkoutName)}}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartItems-promoCode">
          <p>If You Have A Promocode, Enter Here</p>
          <div className="cartItems-promobox">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
