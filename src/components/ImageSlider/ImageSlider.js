import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ImageSlider.css"; // Custom CSS for the slider

import Slide1 from "../../assets/slide1.jpg";
import Slide2 from "../../assets/slide2.jpg";
import Slide3 from "../../assets/slide4.jpg";

const ImageSlider = () => {
  // Array of images imported from assets
  const images = [Slide1, Slide2, Slide3];

  return (
    <div className="image-slider-container">
      <Swiper
        spaceBetween={0} // No space between slides
        centeredSlides={true} // Center the active slide
        autoplay={{
          delay: 3000, // Autoplay delay in milliseconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        pagination={{
          clickable: true, // Allow clicking on pagination bullets
        }}
        navigation={true} // Enable navigation arrows
        modules={[Autoplay, Pagination, Navigation]} // Add required modules
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
