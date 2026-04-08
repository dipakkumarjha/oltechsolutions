import React, { useEffect, useState } from "react";
import "./Popup.css";
import ContactForm from "./ContactForm";
 
const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);

    //   useEffect(() => {
    //     const alreadyShown = localStorage.getItem("popupShown");

    //     if (!alreadyShown) {
    //       const timer = setTimeout(() => {
    //         setShowPopup(true);
    //         localStorage.setItem("popupShown", "true");
    //         document.body.style.overflow = "hidden"; // scroll lock
    //       }, 3000);

    //       return () => clearTimeout(timer);
    //     }
    //   }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
            document.body.style.overflow = "hidden"; // scroll lock
        }, 3000); // har refresh ke baad 3 sec

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setShowPopup(false);
        document.body.style.overflow = "auto"; // scroll enable
    };

    return (
        <>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">

                        <button className="close-btn" onClick={closePopup}>
                            ✖
                        </button>

                        <h2>Get in Touch</h2>
                        <p>Fill the form and our team will contact you.</p>

                        {/* 👉 Yaha pe contact component call ho rha hai */}
                        <ContactForm />

                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;