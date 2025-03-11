import React from "react";
import "./AboutUs.css"; // CSS for styling
import aboutImage from "../../assets/about.png"; // Import the image from assets

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2>ABOUT UNIVAL</h2>
        <p>
          Unival Group is engaged in manufacturing, importing, and exporting
          various chemical materials, active pharmaceutical ingredients, their
          intermediates & excipients, food additives, pharmaceutical & food
          machinery & equipment, pharmaceutical & food packaging materials,
          clean room etc. for chemical, pharmaceutical, and food industries. As
          strategic cooperation with major pharmaceutical manufacturers and
          chemical companies in China, the company has become a large-scale
          enterprise specialized in marketing above scopes.
        </p>
        <p>
          Unival has over 20 years of business experience in supplying complete
          sets of GMP design, installation, processing equipment, packaging
          equipment, and turnkey projects for the pharmaceutical industry. It
          has achieved outstanding achievements in the industries of equipment,
          chemical materials, and active pharmaceutical ingredients. Products
          are exported to Europe, America, Africa, the Middle East, and
          Southeast Asia, more than 40 countries and regions in the world. The
          trademark "UNIVAL" has appeared in the international market and won a
          little bit of favor.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="about-us-image">
        <img src={aboutImage} alt="About Unival" />
      </div>
    </div>
  );
};

export default AboutUs;
