import React, { createContext, useContext, useEffect, useState } from "react";
import { context, server } from "..";
import { getCookie } from "../utils/Cookie.utiles";
import axios from "axios";
import toast from "react-hot-toast";

export const ShopContext = createContext(null);

const GetDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < 100 + 1; i++) {
    cart[i] = {
      quantity: 0,
      productSize: "",
    };
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setall_product] = useState([]);
  const [cartItems, setCartItems] = useState(GetDefaultCart());
  const [authToken, setAuthToken] = useState("");
  const { isAuthenticated } = useContext(context);

  const getCart = () => {
    if (isAuthenticated) {
      fetch(`${server}/upload/getCart`, {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: "",
      })
        .then((resp) => resp.json())
        .then((data) => setCartItems(data?.data));
    }
    const token = getCookie("authToken");
    setAuthToken(token);
  };

  useEffect(() => {
    fetch(`${server}/upload/allProducts`)
      .then((resp) => resp.json())
      .then((data) => setall_product(data?.data));

    getCart();
  }, []);

  const addToCart = async (itemId, size) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (isAuthenticated) {
      await fetch(`${server}/upload/addToCart`, {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ itemId: itemId, size: size }),
      });
      getCart();
    }
  };

  const removefromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (isAuthenticated) {
      await fetch(`${server}/upload/removeFromCart`, {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ itemId: itemId }),
      });
      toast.success("Item Removed From Cart");
    }
    getCart();
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item].quantity > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.newPrice * cartItems[item].quantity;
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item].quantity > 0) {
        totalItem += cartItems[item].quantity;
      }
    }
    return totalItem;
  };

  const checkoutHandler = async (amount) => {
    if (amount === 0) return toast.error("Please Add Items To The Cart First");
    const {
      data: { key },
    } = await axios(`${server}/payment/getRazorKey`);

    const { data } = await axios.post(
      `${server}/payment/checkout`,
      { amount },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log(cartItems)
    // will continue from here

    const options = {
      key,
      amount,
      currency: "INR",
      name: "Souamya",
      description: "Test Transaction",
      image: "https://avatars.githubusercontent.com/u/127884520?v=4",
      order_id: data?.data?.id,
      callback_url: `${server}/payment/paymentVerification`,
      prefill: {
        name: "Souamya",
        email: "souamyadev@gmail.com",
        contact: "6203982931",
      },
      notes: {
        address: "Nubi Fashion Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  const ContextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    setCartItems,
    cartItems,
    addToCart,
    removefromCart,
    checkoutHandler,
    getCart
  };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
