import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    removefromCart,
    checkoutHandler,
    addQuantity,
    removeQuantity
  } = useContext(ShopContext);

  return (
    <div className="CartItems">
      {getTotalCartAmount() > 0 ? (
        <div className="cartItems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Size</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      ) : (
        <h1>Your Cart Is Empty!</h1>
      )}

      <hr />
      {all_product?.map((e, index) => {
        if (cartItems[e.id].quantity > 0) {
          return (
            <div key={index}>
              <div className="cartItems-Formate cartItems-format-main">
                <img
                  src={e.images}
                  alt="cartIcon"
                  className="cartIcon-product-icon"
                />
                <p>{e.name}</p>
                <p>₹{e.newPrice}</p>
                <p>{cartItems[e.id].productSize}</p>
                <div className="quantitySection">
                <button disabled={cartItems[e.id].quantity === 1} onClick={() => removeQuantity(e.id)} className="QuantityBtn">
                  -
                </button>
                <button className="cartItems-quantity">
                  {cartItems[e.id].quantity}
                </button>
                <button disabled={cartItems[e.id].quantity === 5} onClick={() => addQuantity(e.id)} className="QuantityBtn">
                  +
                </button>
                </div>
                <p>₹{e.newPrice * cartItems[e.id].quantity}</p>
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
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button
            onClick={() => {
              checkoutHandler(getTotalCartAmount());
            }}
          >
            PROCEED TO CHECKOUT
          </button>
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
