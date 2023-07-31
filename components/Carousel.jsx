// components/Carousel.js

import React from "react";
import Slider from "react-slick";

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Sample carousel content
  const carouselItems = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" },
    // Add more slides here
  ];

  return (
    <div>
      <h2>Carousel</h2>
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <div key={item.id}>
            <h3>{item.content}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
