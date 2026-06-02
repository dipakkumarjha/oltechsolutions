// import React from "react";
// import "./GovSlider.css";


// import agriculture from "../Images/GovLogo/agricultureoltechsolutions.png";
// import airforce from "../Images/GovLogo/airforceoltechsolutions.jpg";
// import beml from "../Images/GovLogo/bemloltechsolutions.png";
// import cpao from "../Images/GovLogo/cpaooltechsolutions.png"
// import delhiUniversity from "../Images/GovLogo/delhiUniversityoltechsolutions.jpg"
// import dosw from "../Images/GovLogo/doswoltechsolutions.png"
// import dsci from "../Images/GovLogo/dscioltechsolutions.jpg"
// import gurugramuniversity from "../Images/GovLogo/gurugramuniversityoltechsolutions.jpg"
// import hurl from "../Images/GovLogo/hurloltechsolutions.png"
// import icar from "../Images/GovLogo/icaroltechsolutions.png"
// import iih from "../Images/GovLogo/iiholtechsolutions.png"
// import jsbose from "../Images/GovLogo/jsboseoltechsolutions.png"
// import munitions from "../Images/GovLogo/munitionsoltechsolutions.jpg"
// import nbpgr from "../Images/GovLogo/nbpgroltechsolutions.png"
// import nic from "../Images/GovLogo/nicoltechsolutions.png"
// import sanskriti from "../Images/GovLogo/sanskritioltechsolutions.png"
// import Cdac from "../Images/SliderImg/Cdacoltechsolutions.jpg";
// import Defence from "../Images/SliderImg/Defenceoltechsolutions.jpg"
// import Ntpc from "../Images/SliderImg/Ntpcoltechsolutions.png";
// import Railway from "../Images/SliderImg/Railwayoltechsolutions.png"
// import Telecom from "../Images/SliderImg/Telecomoltechsolutions.png";
  
// const GovSlider = () => {
//   const govImages = [
//     agriculture, airforce, beml,
//     cpao, delhiUniversity, dosw, dsci,
//     gurugramuniversity, hurl, icar, iih,jsbose,
//     munitions, nbpgr, nic, sanskriti,Cdac, Defence, Ntpc, Railway, Telecom
//   ];

//   return ( 
//     <section className="gove-slider-wrapper">
      
//       <div className="gove-slider-track">

//         {[ ...govImages,...govImages].map((img, index) => (
//           <div className="gove-slider-card" key={index}>
//             <img src={img} alt="logo" />
//           </div>
//         ))}

//       </div>
//     </section>
//   );
// };

// export default GovSlider;



import React from "react";
import "./GovSlider.css";

// 🔥 Images import
import agriculture from "../Images/GovLogo/agricultureoltechsolutions.png";
import airforce from "../Images/GovLogo/airforceoltechsolutions.png";
import beml from "../Images/GovLogo/bemloltechsolutions.png";
import cpao from "../Images/GovLogo/cpaooltechsolutions.png";
import delhiUniversity from "../Images/GovLogo/delhiUniversityoltechsolutions.png";
import dosw from "../Images/GovLogo/doswoltechsolutions.png";
import dsci from "../Images/GovLogo/dscioltechsolutions.jpg";
import gurugramuniversity from "../Images/GovLogo/gurugramuniversityoltechsolutions.png";
import hurl from "../Images/GovLogo/hurloltechsolutions.png";
import icar from "../Images/GovLogo/icaroltechsolutions.png";
import iih from "../Images/GovLogo/iiholtechsolutions.png";
import jsbose from "../Images/GovLogo/jsboseoltechsolutions.png";
import munitions from "../Images/GovLogo/munitionsoltechsolutions.jpg";
import nbpgr from "../Images/GovLogo/nbpgroltechsolutions.png";
import nic from "../Images/GovLogo/nicoltechsolutions.png";
import sanskriti from "../Images/GovLogo/sanskritioltechsolutions.png";
import Cdac from "../Images/SliderImg/Cdacoltechsolutions.jpg";
import Defence from "../Images/SliderImg/Defenceoltechsolutions.jpg";
import Ntpc from "../Images/SliderImg/Ntpcoltechsolutions.png";
import Railway from "../Images/SliderImg/Railwayoltechsolutions.png";
import Telecom from "../Images/SliderImg/Telecomoltechsolutions.png";

const GovSlider = () => {

  // ✅ Each image with custom size
  const govImages = [
    { src: agriculture, w: 120, h: 105, mb: 0 },
    { src: airforce, w: 110, h: 90,mb: 0  },
    { src: beml, w: 140, h: 120,mb: 0 },
    { src: cpao, w: 130, h: 90,mb: 0 },
    { src: delhiUniversity, w: 150, h: 95,mb: 0 },
    { src: dosw, w: 135, h: 95 ,mb: 0},
    { src: dsci, w: 120, h: 129,mb: 0 }, 
    { src: gurugramuniversity, w: 130, h: 110,mb: 0 },
    { src: hurl, w: 130, h:90,mb: 0 },
    { src: icar, w: 130, h: 85,mb: 0 },
    { src: iih, w: 100, h: 90 ,mb: 0},
    { src: jsbose, w: 140, h: 80 ,mb: 0},
    { src: munitions, w: 120, h: 85 ,mb: 0},
    { src: nbpgr, w: 110, h: 85 ,mb: 0},
    { src: nic, w: 130, h: 135,mb: 0 },
    { src: sanskriti, w: 130, h: 85 ,mb: 0},
    { src: Cdac, w: 150, h: 95 ,mb: 0},
    { src: Defence, w: 140, h: 90 ,mb: 0},
    { src: Ntpc, w: 100, h: 120,mb: 0 },
    { src: Railway, w: 130, h: 85 ,mb: 0},
    { src: Telecom, w: 140, h: 90 ,mb: 0}
  ];

  return (
    <section className="gove-slider-wrapper">
      <div className="gove-slider-track">

        {[...govImages, ...govImages].map((item, index) => (
          <div className="gove-slider-card" key={index}>
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

export default GovSlider;