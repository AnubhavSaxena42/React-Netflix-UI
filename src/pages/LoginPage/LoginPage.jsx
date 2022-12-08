import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            alt="netflix-logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Enter Password" />
          <button className="login-btn">Sign In</button>
          <span>
            New to Netflix? <b>Sign Up Now!</b>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
