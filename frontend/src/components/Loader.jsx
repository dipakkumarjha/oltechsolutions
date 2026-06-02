import React from "react";
import "./Loader.css";
import Logooltechsolutions from "../Images/Logooltechsolutions.png";
import { PiSpinnerBallBold } from "react-icons/pi";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-content">

        {/* Logo */}
        <img src={Logooltechsolutions} alt="logo" className="loader-logo" />

        {/* Spinner */}
        <PiSpinnerBallBold className="loader-spinner" />

      </div>
    </div>
  );
};

export default Loader;