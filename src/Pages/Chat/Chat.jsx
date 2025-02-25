import React from "react";
import "./Chat.css";
import { Assets } from "../../Components/Assets/Assets";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-head">
        <img src={Assets.leftArrow} alt="left-arrow" />
        <h1>Chat with Us</h1>
        <span></span>
      </div>
      <div className="chat-container">
        <img className="gif-image" src={Assets.chat} alt="chat-gif" />
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
    </div>
  );
};

export default Chat;
