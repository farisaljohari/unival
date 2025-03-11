import React from "react";
import NavbarComponent from "./components/CustomNavbar/CustomNavbar";
import "./App.css";
import Footer from "./components/Footer/Footer";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <ImageSlider />
      <AboutUs />
      {/* <div style={{ marginTop: "1000px" }}></div> */}
      <Footer />
    </div>
  );
}

export default App;
