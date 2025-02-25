import React from "react";
import "./Splash.css";
import { Assets } from "../../Components/Assets/Assets";

const Splash = () => {
  return (
    <div className="splash-screen">
      <img className="splash-gif" src={Assets.splash} alt="splash-screen" />
    </div>
  );
};

export default Splash;
