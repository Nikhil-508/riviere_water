import React from "react";
import "./RegistrationPage.css";
import { Assets } from "../../Components/Assets/Assets";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="registration-page">
      <div className="registration-wrapper">
        <video autoPlay muted loop className="authvideo">
          <source src={Assets.authBackground} type="video/mp4" />
        </video>
        <div className="registration-head">
          <h1>Registration</h1>
          <p>Enter your details to get started.</p>
        </div>
        <div className="registration-form">
          <form
            onSubmit={(e) => handleRegisterSubmit(e)}
            className="registration-form"
          >
            <div className="input-group">
              <label htmlFor="name">Customer Name</label>
              <input type="text" id="name" />
            </div>

            <div className="input-group">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input type="number" id="mobileNumber" />
            </div>

            <div className="same-as-number">
              <input type="checkbox" id="sameasmoblienumber" />
              <label htmlFor="sameasmoblienumber">
                Same As WhatsApp Number
              </label>
            </div>

            <div className="input-group">
              <label htmlFor="whatsAppNumber">WhatsApp Number</label>
              <input type="number" id="whatsAppNumber" />
            </div>

            <div className="input-group">
              <label htmlFor="region">Region</label>
              <input type="text" id="region" />
            </div>

            <div className="input-group">
              <label htmlFor="buildingName">Building Name</label>
              <input type="text" id="buildingName" />
            </div>

            <div className="floor-and-room">
              <div className="input-group">
                <label htmlFor="floor">Floor</label>
                <input type="text" id="floor" />
              </div>

              <div className="input-group">
                <label htmlFor="roomNumber">Room Number</label>
                <input type="text" id="roomNumber" />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="referralcode">Referral Code</label>
              <input type="text" id="referralcode" />
            </div>

            <button className="register-btn" type="submit">
              Register
            </button>
            <div className="signin-section">
              <p className="bottom-info">Already have an account?</p>
              <Link to="/login" className="sign-in-link">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
