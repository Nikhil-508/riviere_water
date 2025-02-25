import React from "react";
import "./Accessories.css";
import { Assets } from "../../Components/Assets/Assets";
import { Link } from "react-router-dom";
import AccessoriesCard from "../../Components/AccessoriesCard/AccessoriesCard";

const Accessories = () => {
  const accessoriesData = [
    {
      image: `${Assets.accessories1}`,
      name: "Mini Water Dispenser",
      price: 30,
      price_org: 35,
      price_off: 16,
    },
    {
      image: `${Assets.accessories2}`,
      name: "Riviere Manual Pump",
      price: 15,
      price_org: 20,
      price_off: 20,
    },
    {
      image: `${Assets.accessories3}`,
      name: "Hot & Cool Dispenser",
      price: 350,
      price_org: 380,
      price_off: 25,
    },
    {
      image: `${Assets.accessories4}`,
      name: "Riviere Tissue",
      sub_text: "Tissue 1*5 150 double ply",
      price: 9,
      price_org: 11,
      price_off: 16,
    },
    {
      image: `${Assets.accessories5}`,
      name: "4 Bottle Rak",
      price: 350,
      price_org: 380,
      price_off: 25,
    },
    {
      image: `${Assets.accessories6}`,
      name: "6 Bottle Rak",
      price: 350,
      price_org: 380,
      price_off: 25,
    },
  ];

  return (
    <div className="accessories-page">
      <div className="accessories-head">
        <Link to="/">
          <img className="left-arrow" src={Assets.leftArrow} alt="left-arrow" />
        </Link>
        <h1>Accessories</h1>
        <span style={{ width: "10px" }}></span>
      </div>
      <div className="accessories-container">
        {accessoriesData.map((item) => {
          return (
            // <div key={item.name} className="accessories-card">
            //   <img className="product" src={item.image} alt="accessories" />
            //   <div>
            //     <h1>{item.name}</h1>
            //     {item.sub_text && <p>{item.sub_text}</p>}
            //     <div className="card-price-section">
            //       <p className="price">{item.price} AED</p>
            //       <p className="price-org">
            //         <del>{item.price_org} AED</del>
            //       </p>
            //       <p className="price-off">{item.price_off}% off</p>
            //     </div>
            //     <button className="buy-now-btn">Buy Now</button>
            //   </div>
            //   <div className="add-to-cart">
            //     {isAddedToCart ? (
            //       <img
            //         onClick={() => setIsAddedToCart(!isAddedToCart)}
            //         src={Assets.shoppingCartSuccess}
            //         alt="shopping-cart"
            //       />
            //     ) : (
            //       <img
            //         onClick={() => setIsAddedToCart(!isAddedToCart)}
            //         src={Assets.shoppingCart}
            //         alt="shopping-cart"
            //       />
            //     )}
            //   </div>
            // </div>

            //component
            <AccessoriesCard
              key={item.name}
              name={item.name}
              price_off={item.price_off}
              price_org={item.price_org}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Accessories;
