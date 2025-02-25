import React, { useState } from "react";
import "./AccessoriesCard.css";
import { Assets } from "../Assets/Assets";

const AccessoriesCard = ({
  name,
  sub_text,
  price,
  price_off,
  price_org,
  image,
}) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  return (
    <div className="accessories-card">
      <img className="product" src={image} alt="accessories" />
      <div className="card-content">
        <h1>{name}</h1>
        {sub_text && <p className="sub-text">{sub_text}</p>}
        <div className="card-price-section">
          <p className="price">{price} AED</p>
          <p className="price-org">
            <del>{price_org} AED</del>
          </p>
          <p className="price-off">{price_off}% off</p>
        </div>
        <button className="buy-now-btn">Buy Now</button>
      </div>
      <div className="add-to-cart">
        {isAddedToCart ? (
          <img
            onClick={() => setIsAddedToCart(!isAddedToCart)}
            src={Assets.shoppingCartSuccess}
            alt="shopping-cart"
          />
        ) : (
          <img
            onClick={() => setIsAddedToCart(!isAddedToCart)}
            src={Assets.shoppingCart}
            alt="shopping-cart"
          />
        )}
      </div>
    </div>
  );
};

export default AccessoriesCard;
