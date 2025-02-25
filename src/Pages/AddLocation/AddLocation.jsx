import React from "react";
import "./AddLocation.css";
import { Assets } from "../../components/Assets/Assets";

const AddLocation = () => {
  return (
    <div
      className="add-location"
      style={{
        backgroundImage: `url(${Assets.addLocationBgGif})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <img
        className="location-background"
        src={Assets.locationBg}
        alt="location"
      />

      <div className="add-location-content">
        <div className="add-location-head">
          <h1>
            Please Add Your <br />
          </h1>
          <h1>
            <span>LOCATION</span>
          </h1>
          <p className="add-location-text">
            Adding your location will help us find delivery options available in
            your area.
          </p>
        </div>
        <button className="current-location-btn">Add current location</button>
      </div>
    </div>
  );
};

export default AddLocation;
