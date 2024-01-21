import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removefromCart } = useContext(ShopContext);
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
      {all_product.map((e, index) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={index}>
              <div className="cartItems-Formate cartItems-format-main">
                <img
                  src={e.image}
                  alt="cartIcon"
                  className="cartIcon-product-icon"
                />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className="cartItems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]}</p>
                <img className="cartItems-remove-icon"
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
      })}
    </div>
  );
};

export default CartItems;
