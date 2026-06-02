import React from 'react'
import GEM from "../Images/gov/GEMoltechsolutions.png"
import iso2015 from "../Images/gov/iso2015oltechsolutions.jpg"
import iso2022 from "../Images/gov/iso2022oltechsolutions.png"
import msme from "../Images/gov/msmeoltechsolutions.png"
import makeinindia from "../Images/gov/makeinindiaoltechsolutions.jpg"
import "./Slider.css";
const Slider = () => {

  const govImages = [GEM, iso2015, iso2022, msme, makeinindia]
  return (
  
    <>
      <section className="gov-slider-wrapper" >
        <div className="gov-slider-track">
          {(govImages).map((img, index) => (
            <div className="gov-slider-card" key={index}>
              <img src={img} alt="slider" />
            </div>
          ))}

        </div>
      </section >
    </> 
  )
}

export default Slider