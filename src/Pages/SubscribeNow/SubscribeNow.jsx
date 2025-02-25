import React, { useState } from "react";
import "./SubscribeNow.css";
import { Assets } from "../../components/Assets/Assets";
import { Link } from "react-router-dom";

const SubscribeNow = () => {
  const [count, setCount] = useState(2);
  const currentPrice = 6.5;

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };
  const handleSub = () =>
    setCount((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return 1;
    });
  return (
    <div className="subscribe-now">
      <div className="subscribe-now-head">
        <Link to="/subscription">
          <img className="left-arrow" src={Assets.leftArrow} alt="left arrow" />
        </Link>
        <h1>Subscribe Now</h1>
        <span></span>
      </div>
      <div className="subscribe-now-content">
        <div
          className="details"
          style={{
            backgroundImage: `url(${Assets.subscribeNowBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img src={Assets.riviereSubscribe} alt="rivere-logo" />
          <h1>
            5 Gallon
            <br />
            Bottles
          </h1>
          <div className="price-section">
            <p className="price">
              6.5 AED <span>7 AED</span>
            </p>
          </div>
          <p className="off">10% off</p>
        </div>
        <div className="subscription-bottom">
          <div className="subscription-option">
            <h1>Select Delivery Quantity For a Week</h1>
            <div className="count-section">
              <div className="count-left-side">
                <img
                  className="five-gallon-bottle"
                  src={Assets.fiveGallonBottle}
                  alt="five-gallon-bottle"
                />
                <div className="option-details">
                  <h1>5 Gallon Bottles</h1>
                  <div className="subscription-option-price-section">
                    <p className="price-org">7 AED</p>
                    <p className="price-off">10% off</p>
                  </div>
                  <p>6.5 AED</p>
                </div>
              </div>
              <div className="count-right-side">
                <h1>{currentPrice * count} AED</h1>
                <div className="right-side-counter">
                  <button onClick={handleSub}>
                    <img className="minus" src={Assets.minus} alt="sub" />
                  </button>
                  <p>{count}</p>
                  <button onClick={handleAdd}>
                    <img src={Assets.add} alt="add" />
                  </button>
                </div>
              </div>
            </div>
            <p>
              You May Charged Additional 20 AED as a Deposit it will be refunded
              when u return all Assets and acsesorries back
            </p>
          </div>
          <div className="button-container">
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNow;
