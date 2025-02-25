import React from "react";
import "./Subscription.css";
import { Assets } from "../../components/Assets/Assets";
import { Link } from "react-router-dom";

const Subscription = () => {
  const features = [
    "Unique Quality Of Minerals",
    "BPA Free Bottles",
    "Low Sodium",
    "BPA Free Bottles",
    "Free Home Delivery",
  ];

  return (
    <div className="subscription">
      <div className="head">
        <Link to="/">
          <img src={Assets.leftArrowWhite} alt="left-arrow" />
        </Link>
        <h1>Subscription</h1>
        <span></span>
      </div>
      <div className="subscription-content">
        <div className="subscription-offer">
          <h1>
            5 Gallon <br /> Bottles
          </h1>
          <h2>6.5 AED</h2>
          <h3>7 AED</h3>
          <p>10% off</p>
        </div>
        <div className="subscription-info">
          <ul className="subscription-features">
            {features.map((feature, index) => (
              <li key={index}>
                <img
                  className="yellow-dot"
                  src={Assets.yellowDot}
                  alt="yellow-dot"
                />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <Link to="/subscribe-now" className="subscribe-now-btn">
            Subscribe Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
