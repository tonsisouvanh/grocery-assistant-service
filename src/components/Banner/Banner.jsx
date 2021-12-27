import React, { useState, useRef } from "react";
import "./Banner.css";
import { slides } from "./slides";
import { Link } from "react-router-dom";

function Banner() {
  const [slidesImg, setSlideimg] = useState(slides);
  const [curr, setCurr] = useState(0);
  const length = slidesImg.length;
  const nextSlide = () => {
    setCurr(curr === length - 1 ? 0 : curr + 1);
  };

  const prevSlide = () => {
    setCurr(curr === 0 ? length - 1 : curr - 1);
  };

  return (
    <>
      <div className="banner-container">
        <i onClick={prevSlide} class="far fa-caret-square-left"></i>
        <i onClick={nextSlide} class="far fa-caret-square-right"></i>
        {slidesImg &&
          slidesImg.map((item, index) => {
            return (
              <div
                key={index}
                className={curr === index ? "slider slider-active" : "slider"}
              >
                {index === curr && (
                  <img src={curr === index ? item.url : ""} alt="" />
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Banner;
