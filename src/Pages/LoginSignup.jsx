import React, { useContext, useState } from "react";
import "./CSS/LoginSignup.css";
import { context, server } from "../index.js";
import { Navigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { ShopContext } from "../Context/ShopContext.jsx";

const LoginSignup = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const { isAuthenticated, setIsAuthenticated, setIsAdmin } = useContext(context);
  const { getCart } = useContext(ShopContext);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${server}/users/${isRegistered ? "login" : "register"}`,
        {
          userName,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      getCart();
      setIsAuthenticated(true);

      axios
        .get(`${server}/users/profile`, {
          withCredentials: true,
        })
        .then(
          (res) => (
            setIsAdmin(res?.data?.data?.user?.role),
            setIsAuthenticated(true),
            toast.success(
              `Welcome To Nubi Fashion ${res?.data?.data?.user?.userName}`
            )
          )
        )
        .catch((error) => {
          toast.error("Login First");
          setIsAdmin("");
          setIsAuthenticated(false);
        });
    } catch (error) {
      toast.error("Invalid User Credintials");
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) return <Navigate to={"/home"} />;

  const RegisterHandelClick = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <div className="loginsignup">
      <h1 className="loginHeading"> Welcome to Nubî Fashîon</h1>
      <form onSubmit={SubmitHandler} className="loginsignup-container">
        <h1>{isRegistered ? "Login" : "Register"}</h1>

        <div className="loginsignup-fields">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="User Name"
          />
          {!isRegistered && (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          )}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          {isRegistered ? "New To Nubi Fashion? " : "Already Have An Account? "}
          <span onClick={RegisterHandelClick}>
            {isRegistered ? "Register Here " : "Login Here"}
          </span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing, I Agree To The Terms Of Use & Privacy Policy.</p>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default LoginSignup;
