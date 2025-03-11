import React from "react";
import "./Footer.css"; // Import the custom CSS file for the footer
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaSkype,
} from "react-icons/fa"; // Import Font Awesome icons

// Import your custom PNG images
// Update the import paths to point to the new location inside src/
import locationIcon from "../../assets/location.png"; // Adjust the path as needed
import phoneIcon from "../../assets/phone.png"; // Adjust the path as needed
import emailIcon from "../../assets/mail.png"; // Adjust the path as needed

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section company-info">
            <div className="logo"></div>
            <div className="company-list">
              <h4>Unival Company Limited</h4>
              <h4>Unival Pharmtech Company Limited</h4>
              <h4>Unitex Technology Holding Ltd.</h4>
              <h4>Unival Consultant & Engineering Co., Ltd.</h4>
              <h4>Unival International Limited</h4>
            </div>
            <div className="footer-bottom">
              <div className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-box"
                >
                  <FaFacebook className="social-icon" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-box"
                >
                  <FaInstagram className="social-icon" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-box"
                >
                  <FaLinkedin className="social-icon" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-box"
                >
                  <FaTwitter className="social-icon" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-box"
                >
                  <FaSkype className="social-icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-section information">
            <div className="contact-info">
              <h4 className="information-title">Information</h4>
              <p>
                <img
                  src={locationIcon}
                  alt="Location Icon"
                  className="footer-icon"
                />{" "}
                Queen Rania St 115, Amman, Jordan
              </p>
              <p>
                <img src={phoneIcon} alt="Phone Icon" className="footer-icon" />{" "}
                +962 797461628
              </p>
              <p>
                <img src={emailIcon} alt="Email Icon" className="footer-icon" />{" "}
                info@uni-jo.com
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-note">
        <p>Copyright © 2025 Unival. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
