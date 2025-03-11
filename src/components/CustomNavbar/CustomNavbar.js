import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomNavbar.css"; // Import the custom CSS file

const CustomNavbar = () => {
  const [language, setLanguage] = useState("en"); // Default language is English

  // Function to handle language toggle
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    // document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr"; // Change direction
  };

  return (
    <Navbar bg="light" expand="lg" collapseOnSelect className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="custom-brand">
          <div className="logo"></div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto custom-nav-links">
            <Nav.Link
              href="#home"
              className="custom-nav-link"
              activeClassName="active"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="custom-nav-link"
              activeClassName="active"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="#service"
              className="custom-nav-link"
              activeClassName="active"
            >
              Service
            </Nav.Link>
            <Nav.Link
              href="#news"
              className="custom-nav-link"
              activeClassName="active"
            >
              News
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="custom-nav-link"
              activeClassName="active"
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav className="custom-language-links">
            <div className="language-switcher" onClick={toggleLanguage}>
              <span className="global-icon">🌐</span>
              <span className="language-text">
                {language === "en" ? "EN" : "ع"}
              </span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
