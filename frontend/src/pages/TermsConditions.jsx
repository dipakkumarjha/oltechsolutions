import React from "react";
import "./TermsConditions.css";
import Slider from "../components/Slider";
import AIChatBot from "../components/AIChatBot/AIChatBot";
import Footer from "../components/Footer";

const TermsConditions = () => {
  return (
    <>
    <div className="terms-wrapper">
        {/* <Slider/> */}
      <div className="terms-container">
        <h1>Terms & Conditions</h1>
        <p className="updated">Last updated: 19 December 2025</p>

        <p>
          These Terms & Conditions (“Terms”) govern your use of the website
          <strong> oltechsolutions.co.in </strong> operated by OL Tech Solutions (“we”, “us”, “our”).
          By accessing or using this website, you agree to be bound by these Terms.
          If you do not agree, please do not use the site.
        </p>

        <section>
          <h2>1. Use of the Website</h2>
          <p>
            You agree to use this website only for lawful purposes and in a way that does not
            infringe the rights of others or restrict their use. You must not attempt to gain
            unauthorized access to our systems or servers.
          </p>
        </section>

        <section>
          <h2>2. Information on this Site</h2>
          <p>
            The content on this website is for general information about our IT infrastructure,
            networking, security, cloud, and related services. We do not guarantee that all
            information is accurate or up to date and may change content at any time.
          </p>
        </section>

        <section>
          <h2>3. No Service Commitment</h2>
          <p>
            Nothing on this website is a binding offer. All services, pricing, and features are
            subject to separate agreements and may change without prior notice.
          </p>
        </section>

        <section>
          <h2>4. Intellectual Property</h2>
          <p>
            All content including text, graphics, logos, and images are owned by OL Tech Solutions
            and protected by law. You may not copy, reproduce, or use content without permission.
          </p>
        </section>

        <section>
          <h2>5. Third-Party Links</h2>
          <p>
            Our website may include links to third-party websites. We are not responsible for
            their content, availability, or security practices.
          </p>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>
            OL Tech Solutions will not be liable for any damages arising from the use or inability
            to use this website, including loss of data, business, or profits.
          </p>
        </section>

        <section>
          <h2>7. Indemnity</h2>
          <p>
            You agree to indemnify and hold harmless OL Tech Solutions and its team from any
            claims or damages arising from misuse of the website.
          </p>
        </section>

        <section>
          <h2>8. Privacy</h2>
          <p>
            Your use of this website is also governed by our Privacy Policy. By using this site,
            you agree to the collection and use of your data.
          </p>
        </section>

        <section>
          <h2>9. Changes to Terms</h2>
          <p>
            We may update these Terms at any time. Continued use of the website means you accept
            the updated Terms.
          </p>
        </section>

        <section>
          <h2>10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes will be subject to the
            jurisdiction of courts in Noida, Uttar Pradesh.
          </p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <div className="contact-box">
            <p><strong>OL Tech Solutions</strong></p>
            <p>616, Ithum Tower-C, Sector-62, Noida, Uttar Pradesh 201301, India</p>
            <p><strong>Email:</strong> corporatesales@oltechsolutions.co.in</p>
            <p><strong>Mobile:</strong> +91-9015183068</p>
            <p><strong>Tel:</strong> 0120-4319296</p>
          </div>
        </section>

      </div>
    </div>

    <AIChatBot/>
    <Footer/>
    </>
  );
};

export default TermsConditions;