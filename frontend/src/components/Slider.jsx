import React from 'react'
import GEM from "../Images/gov/GEM.png"
import iso2015 from "../Images/gov/iso2015.jpg"
import iso2022 from "../Images/gov/iso2022.png"
import msme from "../Images/gov/msme.png"
import makeinindia from "../Images/gov/makeinindia.jpg"
import "./Slider.css";
const Slider = () => {

  const govImages = [GEM, iso2015, iso2022, msme, makeinindia]
  return (

    <>
      <section className="gov-slider-wrapper" >
        <div className="gov-slider-track">
          {govImages.concat(govImages).map((img, index) => (
            <div className="slider-card" key={index}>
              <img src={img} alt="sllider" />
            </div>
          ))}

        </div>
      </section >
    </>
  )
}

export default Slider