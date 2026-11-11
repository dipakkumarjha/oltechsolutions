import React from "react";
import "./PrivacyPolicy.css";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import AIChatBot from "../components/AIChatBot/AIChatBot";

const PrivacyPolicy = () => {
  return (
    <>
    <div className="privacy-wrapper">
        {/* <Slider/> */}
      <div className="privacy-container">
        <h1>Privacy Policy – OL Tech Solutions</h1>
        <p className="effective-date">Effective Date: 19 Sep 2017</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            OL Tech Solutions (“OL Tech”, “we”, “our”, or “us”) is an Information Technology
            services company providing IT Infrastructure, IT consulting, cloud solutions,
            managed services, and related technology offerings.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, store, disclose, and protect
            personal data when you interact with our website, services, applications, or
            communicate with us. We comply with applicable laws including India’s Digital
            Personal Data Protection Act, GDPR, and CCPA where applicable.
          </p>
        </section>

        <section>
          <h2>2. Scope of This Policy</h2>
          <ul>
            <li>Visit or use our website or applications</li>
            <li>Contact us for inquiries or support</li>
            <li>Engage our IT or consulting services</li>
            <li>Enter into business agreements</li>
            <li>Apply for jobs or internships</li>
            <li>Communicate via email, phone, or social media</li>
          </ul>
        </section>

        <section>
          <h2>3. Definitions</h2>
          <p><strong>Personal Data:</strong> Any information identifying an individual such as name, email, phone, IP, etc.</p>
          <p><strong>Sensitive Data:</strong> Includes financial details, credentials, or legally protected data.</p>
        </section>

        <section>
          <h2>4. Personal Data We Collect</h2>
          <h3>A. Direct Data</h3>
          <ul>
            <li>Name, email, phone number</li>
            <li>Company details & designation</li>
            <li>Billing/payment information</li>
            <li>Resume & job-related data</li>
          </ul>

          <h3>B. Automatic Data</h3>
          <ul>
            <li>IP address, browser, device info</li>
            <li>Usage behavior, session time</li>
            <li>Cookies & tracking data</li>
          </ul>

          <h3>C. Third-party Data</h3>
          <ul>
            <li>Partners, recruitment agencies</li>
            <li>Payment processors</li>
            <li>Analytics & marketing tools</li>
          </ul>
        </section>

        <section>
          <h2>5. Purpose of Data Processing</h2>
          <ul>
            <li>Provide IT services & solutions</li>
            <li>Customer support & communication</li>
            <li>Contract execution & billing</li>
            <li>Improve services & user experience</li>
            <li>Marketing (with consent)</li>
            <li>Legal compliance & security</li>
          </ul>
        </section>

        <section>
          <h2>6. Marketing Communications</h2>
          <p>
            We may contact you via email, phone, SMS, or WhatsApp for service updates
            or promotions. You can unsubscribe anytime by contacting us.
          </p>
        </section>

        <section>
          <h2>7. Sharing of Personal Data</h2>
          <p>We do not sell or rent your data.</p>
          <ul>
            <li>Shared with authorities if required by law</li>
            <li>Shared during business transfers (merger/acquisition)</li>
          </ul>
        </section>

        <section>
          <h2>8. Data Security</h2>
          <ul>
            <li>Encrypted data & secure servers</li>
            <li>Access control systems</li>
            <li>Regular security updates</li>
          </ul>
          <p>No system is 100% secure, but we follow best practices.</p>
        </section>

        <section>
          <h2>9. Data Retention</h2>
          <p>
            We retain data only as long as necessary and securely delete or anonymize
            it afterward.
          </p>
        </section>

        <section>
          <h2>10. Children’s Privacy</h2>
          <p>
            Our services are not intended for individuals under 18 years. Any such data
            will be deleted.
          </p>
        </section>

        <section>
          <h2>11. Your Rights</h2>
          <ul>
            <li>Access your data</li>
            <li>Correct or delete data</li>
            <li>Withdraw consent</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section>
          <h2>12. International Transfers</h2>
          <p>
            Data may be processed outside your country with proper safeguards in place.
          </p>
        </section>

        <section>
          <h2>13. Contact Information</h2>
          <div className="contact-box">
            <p><strong>Email:</strong> corporatesales@oltechsolutions.co.in</p>
            <p><strong>Mobile:</strong> +91-9015183068</p>
            <p><strong>Tel:</strong> 0120-4319296</p>
          </div>
        </section>

        <section>
          <h2>14. Updates</h2>
          <p>
            We may update this policy from time to time. Changes will be posted here.
          </p>
        </section>

      </div>
    
    </div>

      <AIChatBot/>
      <Footer/>
    </>
    
  );
};

export default PrivacyPolicy;