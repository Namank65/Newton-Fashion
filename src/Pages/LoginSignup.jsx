import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {

  const [isRegistered, setIsRegistered] = useState(true);

  const RegisterHandelClick = () => {
    setIsRegistered(!isRegistered);
  }
  const SubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className="loginsignup">
      <form onSubmit={SubmitHandler} className="loginsignup-container">
        <h1>{isRegistered ? "Login" : "Register"}</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="User Name" />
          {!isRegistered && (<input type="email" placeholder="Email Address" />)}
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          {isRegistered ? "New To Nubi Fashion?" : "Already Have An Account?"} <span onClick={RegisterHandelClick}>{isRegistered ? "Register Here " : "Login Here"}</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing, I Agree To The Terms Of Use & Privacy Policy.</p>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
