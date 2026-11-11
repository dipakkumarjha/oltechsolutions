import React from "react";
import "./PrivSlider.css";

// 🔥 Images import
import Axis from "../Images/PrivLogo/Axisoltechsolutions.png";
import Byjus from "../Images/PrivLogo/Byjusoltechsolutions.png";
import Crestech from "../Images/PrivLogo/Crestecholtechsolutions.png";
import garage from "../Images/PrivLogo/garageoltechsolutions.png";
import mediamonks from "../Images/PrivLogo/mediamonksoltechsolutions.png";
import merchserve from "../Images/PrivLogo/merchserveoltechsolutions.jpg";
import Omax from "../Images/PrivLogo/Omaxoltechsolutions.png";
import optiemus from "../Images/PrivLogo/optiemusoltechsolutions.png";
import pathways from "../Images/PrivLogo/pathwaysoltechsolutions.jpg";
import sagacious from "../Images/PrivLogo/sagaciousoltechsolutions.png";
import shareit from "../Images/PrivLogo/shareitoltechsolutions.png";
import swift from "../Images/PrivLogo/swiftoltechsolutions.png";
import wework from "../Images/PrivLogo/weworkoltechsolutions.png";
 
const PrivSlider = () => {

  // ✅ Each image with custom size
  const govImages = [
    { src: Axis, w: 100, h: 70, mb: 0 },
    { src: Byjus, w: 130, h: 110, mb: 0 },
    { src: Crestech, w: 140, h: 80, mb: 0 },
    { src: garage, w: 110, h: 110, mb: 0 },
    { src: mediamonks, w: 150, h: 120, mb: 0 },
    { src: merchserve, w: 150, h: 110, mb: 0 },
    { src: Omax, w: 150, h: 110, mb: 0 },
    { src: optiemus, w: 150, h: 110, mb: 0 },
    { src: pathways, w: 130, h: 105, mb: 0 },
    { src: sagacious, w: 130, h: 75, mb: 0 },
    { src: shareit, w: 150, h: 110, mb: 0 },
    { src: swift, w: 140, h: 90, mb: 0 },
    { src: wework, w: 130, h: 100, mb: 0 }
  ];

  return (
    <section className="priv-slider-wrapper">
      <div className="priv-slider-track">

        {[...govImages, ...govImages].map((item, index) => (
          <div className="priv-slider-card" key={index}>
            <img
              src={item.src}
              alt="logo"
              style={{
                width: item.w + "px",
                height: item.h + "px",
                objectFit: "contain",
                justifyContent:"space-between",
                alignItems:"flex-end"
              }}
            />
          </div>
        ))}

      </div>
    </section>
  );
};

export default PrivSlider;
