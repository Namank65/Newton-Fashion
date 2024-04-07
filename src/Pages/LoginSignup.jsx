import React, { useState } from "react";
import "./CSS/LoginSignup.css";
import { server } from "../index";
import axios from "axios";
import toast from "react-hot-toast";

const LoginSignup = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${server}/users/register`,
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
      toast.success(data.message)
    } catch (error) {
      toast.error("Invalid UserName or Password")
      console.log(error)
    }
  };

  const RegisterHandelClick = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <div className="loginsignup">
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
    </div>
  );
};

export default LoginSignup;
