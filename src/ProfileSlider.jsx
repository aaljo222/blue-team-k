import React from "react";
import Slider from "react-slick";
import LeeProfile from "./LeeProfile";
import JungProfile from "./JungProfile";
import HongProfile from "./HongProfile";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProfileSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <LeeProfile />
      </div>
      <div>
        <JungProfile />
      </div>
      <div>
        <HongProfile />
      </div>
    </Slider>
  );
}
