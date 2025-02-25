import React from "react";
import "./LoginPage.css";
import { Assets } from "../../Components/Assets/Assets";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <video autoPlay muted loop className="authvideo">
        <source src={Assets.authBackground} type="video/mp4" />
      </video>
      <div className="login-page">
        <div className="login-content">
          <div className="login-head">
            <h1>
              Enter your
              <span>
                {" "}
                mobile <br /> number
              </span>{" "}
              for OTP
            </h1>
          </div>
          <form onSubmit={(e) => handleLoginSubmit(e)} className="login-form">
            <div className="input-group">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input type="number" id="mobileNumber" />
            </div>
            <button type="submit" className="login-submit-btn">
              Get OTP
            </button>
          </form>
          <p className="dont-have-account">Don’t You Have Account ?</p>
          <Link to="/registration" className="register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
