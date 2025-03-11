import React, { useState, useEffect } from "react";
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
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const images = [Slide1, Slide2, Slide3];

  useEffect(() => {
    // Create a promise for each image to ensure it's loaded
    const imagePromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    // Wait for all images to load
    Promise.all(imagePromises)
      .then(() => {
        setIsLoading(false); // Set loading to false once all images are loaded
      })
      .catch((error) => {
        console.error("Error loading images:", error);
      });
  }, [images]);

  return (
    <div className="image-slider-container">
      {isLoading ? (
        // Display a loading spinner while images are loading
        <div className="loading-spinner">
          <div className="spinner"></div>{" "}
          {/* Add your spinner styling in CSS */}
        </div>
      ) : (
        // Display the Swiper once images are loaded
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
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
      )}
    </div>
  );
};

export default ImageSlider;
