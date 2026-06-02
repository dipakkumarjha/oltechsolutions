// import React, { useEffect, useState } from "react";
// import "./Popup.css";
// import ContactForm from "./ContactForm";
 
// const Popup = () => {
//     const [showPopup, setShowPopup] = useState(false);

//       useEffect(() => {
//         const alreadyShown = localStorage.getItem("popupShown");

//         if (!alreadyShown) {
//           const timer = setTimeout(() => {
//             setShowPopup(true);
//             localStorage.setItem("popupShown", "true");
//             document.body.style.overflow = "hidden"; // scroll lock
//           }, 3000);

//           return () => clearTimeout(timer);
//         }
//       }, []);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setShowPopup(true);
//             document.body.style.overflow = "hidden"; 
//         }, 3000);

//         return () => clearTimeout(timer);
//     }, []);

//     const closePopup = () => {
//         setShowPopup(false);
//         document.body.style.overflow = "auto"; 
//     };

//     return (
//         <>
//             {showPopup && (
//                 <div className="popup-overlay">
//                     <div className="popup-box">

//                         <button className="close-btn" onClick={closePopup}>
//                             ✖
//                         </button>

//                         <h2>Get in Touch</h2>
//                         <p>Fill the form and our team will contact you.</p>

//                         👉 Yaha pe contact component call ho rha hai
//                         <ContactForm />

//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Popup;





import React from "react";
import "./Popup.css";
import ContactForm from "./ContactForm";

function Popup({ showPopup, setShowPopup }) {

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = "auto";
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div className="popup-overlay">

      <div className="popup-box">

        <button
          className="close-btn"
          onClick={closePopup}
        >
          ✖
        </button>

        <h2>Get in Touch</h2>

        <p>
          Fill the form and our team will contact you.
        </p>

        <ContactForm />

      </div>

    </div>
  );
}

export default Popup;