import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./RegisterPage.scss";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            alt="netflix-logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          />
          <button className="log-in-btn">Sign in</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies,TV shows and more.</h1>
        <h2>Watch anywhere, Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>
        {!email ? (
          <div className="input">
            <input ref={emailRef} type="email" placeholder="Email address" />
            <button className="register-btn" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              ref={passwordRef}
              type="password"
              placeholder="Enter Password"
            />
            <button className="register-btn" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
