import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const GetDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(GetDefaultCart());
  
  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1}))
  }

  const removefromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]:prev[itemId] - 1}))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo = all_product.find((product) => product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  }

  const getTotalCartItems = () => {
    let totalItem = 0;
    for(const item in cartItems) {
      if(cartItems[item] > 0){
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  const ContextValue = {getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removefromCart };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
