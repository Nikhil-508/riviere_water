import React from "react";
import "./CustomerSupport.css";
import { Assets } from "../../components/Assets/Assets";
const CustomerSupport = () => {
  return (
    <div className="customer-support-page">
      <div className="head">
        <img className="left-arrow" src={Assets.leftArrow} alt="left-arrow" />
        <h1>Customer Support</h1>
        <span style={{ width: "10px" }}></span>
      </div>
      <div className="customer-support-content">
        <div
          className="number-card"
          style={{
            backgroundImage: `url(${Assets.blueBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-section">
            <p>
              If you can't find the information you're looking for, our customer
              support team is here to help.
            </p>
            <h1>
              Toll Free: <span>800 50005</span>
            </h1>
            <button className="call-now-btn">Call Now</button>
          </div>
          <div className="image-section">
            <img src={Assets.callnow} alt="call-now" />
          </div>
        </div>
        <div className="customer-support-bottom">
          <h1>What problem are you experiencing?</h1>
          <div className="customer-problem">
            <h1>I want manage my order</h1>
            <p>View, cancel or return an order</p>
          </div>
          <div className="customer-problem">
            <h1>I want help with returns & refunds</h1>
            <p>View, cancel or return an order</p>
          </div>
          <div className="customer-problem">
            <h1>I Want help with other issues</h1>
            <p>View, cancel or return an order</p>
          </div>
          <div className="customer-problem">
            <h1>I want to contact the seller</h1>
            <p>View, cancel or return an order</p>
          </div>
        </div>
      </div>
      <div>
        <p className="customer-support-footer">
          Thank you for choosing Riviere. We're here to ensure you have a
          seamless and enjoyable shopping experience.
        </p>
      </div>
    </div>
  );
};

export default CustomerSupport;
