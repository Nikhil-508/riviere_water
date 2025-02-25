import React from "react";
import "./Payment.css";
import { Assets } from "../../components/Assets/Assets";

const Payment = () => {
  return (
    <div className="payment">
      <div className="payment-head">
        <img src={Assets.leftArrow} alt="left-arrow" />
        <h1>Payment</h1>
        <span></span>
      </div>
      <div className="payment-container">
        <h1>Payment Method</h1>
        <div className="payment-methods">
          <label>
            <div className="payment-info">
              <img src={Assets.applePay} alt="apple-pay" />
              <p>Apple Pay</p>
            </div>
            <input type="radio" name="payment" value="apple-pay" />
            <span></span>
          </label>

          <label>
            <div className="payment-info">
              <img src={Assets.samsungPay} alt="samsung-pay" />
              <p>Samsung Pay</p>
            </div>
            <input type="radio" name="payment" value="samsung-pay" />
            <span></span>
          </label>

          <label>
            <div className="payment-info">
              <img src={Assets.masterCard} alt="master-card" />
              <p>MasterCard</p>
            </div>
            <input type="radio" name="payment" value="mastercard" />
            <span></span>
          </label>

          <label>
            <div className="payment-info">
              <img src={Assets.visa} alt="visa" />
              <p>Visa</p>
            </div>
            <input type="radio" name="payment" value="visa" />
            <span></span>
          </label>

          <label>
            <div className="payment-info">
              <img src={Assets.debitCard} alt="master-card" />
              <p>Debit Card</p>
            </div>
            <input type="radio" name="payment" value="debit-card" />
            <span></span>
          </label>

          <label>
            <div className="payment-info">
              <img src={Assets.creditCard} alt="credit-card" />
              <p>Credit Card</p>
            </div>
            <input type="radio" name="payment" value="credit-card" />
            <span></span>
          </label>
        </div>
        <div className="current-pay">
          <h1>Payment details</h1>
          <div className="payment-details">
            <div className="row">
              <p>Price</p>
              <p className="price">11 AED</p>
            </div>
            <div className="row">
              <p>Discount</p>
              <p className="green-text">-10% AED</p>
            </div>
            <div className="row">
              <p>Delivery charge</p>
              <p className="green-text">Free</p>
            </div>
          </div>
          <div className="last-row">
            <h1>Total amount</h1>
            <h1>10 AED</h1>
          </div>
        </div>
      </div>
      <div className="proceed-btn-container">
        <button>Proceed</button>
      </div>
    </div>
  );
};

export default Payment;
