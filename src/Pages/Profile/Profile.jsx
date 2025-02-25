import React from "react";
import "./Profile.css";
import { Assets } from "../../components/Assets/Assets";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="top-section">
        <div className="profile-head">
          <h1>Profile</h1>
        </div>

        <div className="profile-container">
          <img
            className="profile-picture"
            src={Assets.userProfile}
            alt="profile-picture"
          />
        </div>
        <div className="profile-content">
          <Link className="customer-support" to="/customer-support">
            {/* <div className="customer-support"> */}
            <div className="left">
              <h1>Customer Support</h1>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={Assets.support} alt="customer-support" />
                <p>Tap to any kind of customer support</p>
              </div>
            </div>
            <div className="right">
              <img
                className="right-arrow"
                src={Assets.rightArrow}
                alt="arrow"
              />
            </div>
            {/* </div> */}
          </Link>
          <div className="profile-footer">
            <div className="left">
              <img src={Assets.privacy} alt="privacy" />
              <p>Privacy Policy</p>
            </div>
            <img className="right-arrow" src={Assets.rightArrow} alt="arrow" />
          </div>
          <div className="profile-footer">
            <div className="left">
              <img src={Assets.terms} alt="terms" />
              <p>Term and Conditions</p>
            </div>
            <img className="right-arrow" src={Assets.rightArrow} alt="arrow" />
          </div>
          <div className="profile-footer">
            <div className="left">
              <img src={Assets.contact} alt="contact" />
              <p>Contact Us</p>
            </div>
            <img className="right-arrow" src={Assets.rightArrow} alt="arrow" />
          </div>
          <div className="profile-footer">
            <div className="left">
              <img src={Assets.about} alt="about" />
              <p>About Us</p>
            </div>
            <img className="right-arrow" src={Assets.rightArrow} alt="arrow" />
          </div>
          <div className="profile-footer">
            <div className="left">
              <img
                src={Assets.returncancellation}
                alt="return-and-cancellation"
              />
              <p>Return and Cancellation Policy</p>
            </div>
            <img className="right-arrow" src={Assets.rightArrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <h1>Don't Waste Your Time</h1>
        <h2>It will be delivered right your Door.</h2>
        <Link to="/registration" className="join-btn">
          Join with Us
        </Link>
      </div>
    </div>
  );
};

export default Profile;
