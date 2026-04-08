import React from "react";
import "./WhatsappChat.css";
import Logo from "../Images/Logo.png";

const WhatsappChat = () => {
  const phoneNumber = "918130875594";
  const message = "Hi, I am interested in your IT & Cyber Security solutions.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    whatsappLink
  )}`;

  return (
    <div className="whatsapp-page">
      <div className="whatsapp-card">
        <img src={Logo} alt="Company Logo" className="company-logo" />

        <h1>Secure Your Business Today</h1>

        <p className="subtitle">
          Trusted IT Infrastructure & Cyber Security Solutions powered by
          industry-leading OEM partners.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          Chat on WhatsApp
        </a>

        {/* QR CODE SECTION */}
        <div className="qr-section">
          <p>Or Scan QR Code</p>
          <img src={qrCodeUrl} alt="WhatsApp QR Code" className="qr-code" />
        </div>

        <div className="trust-points">
          <span>✔ Fast Response</span>
          <span>✔ Expert Support</span>
          <span>✔ Genuine Products</span>
        </div>
      </div>
    </div>
  );
};

export default WhatsappChat;