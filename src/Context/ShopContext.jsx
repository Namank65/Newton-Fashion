import React, { createContext, useContext, useEffect, useState } from "react";
import { context } from "..";
import { getCookie } from "../utils/Cookie.utiles";

export const ShopContext = createContext(null);

const GetDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setall_product] = useState([]);
  const [cartItems, setCartItems] = useState(GetDefaultCart());
  const { isAuthenticated } = useContext(context);
  const [authToken, setAuthToken] = useState('');

  useEffect(() => {
    fetch("https://nubifashon-backend.onrender.com/api/v1/upload/allProducts")
      .then((resp) => resp.json())
      .then((data) => setall_product(data?.data));
    
      if (isAuthenticated) {
        fetch("https://nubifashon-backend.onrender.com/api/v1/upload/getCart", {
         method: "POST",
         headers: {
           Accept: "application/form-data",
           "Authorization": `Bearer ${authToken}`, 
           "Content-Type": "application/json"
         },
         credentials: "include",
         body: "",
       })
         .then((resp) => resp.json())
         .then((data) => setCartItems(data?.data));
     }

  }, []);

  useEffect(() => {
    const token = getCookie('authToken');
    setAuthToken(token);
}, []);

  const addToCart = async(itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (isAuthenticated) {
       await fetch("https://nubifashon-backend.onrender.com/api/v1/upload/addToCart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Authorization": `Bearer ${authToken}`, 
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((resp) => resp.json())
        .then((data) => console.log(data));
    }
  };

  const removefromCart = async(itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (isAuthenticated) {
      await fetch("https://nubifashon-backend.onrender.com/api/v1/upload/removeFromCart", {
       method: "POST",
       headers: {
         Accept: "application/form-data",
         "Authorization": `Bearer ${authToken}`, 
         "Content-Type": "application/json"
       },
       credentials: "include",
       body: JSON.stringify({ itemId: itemId }),
     })
       .then((resp) => resp.json())
       .then((data) => console.log(data));
   }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.newPrice * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const ContextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removefromCart,
  };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
