import React, { useState, useEffect } from "react";
import "./Banner.css";
import { slides } from "./slides";
import { Link } from "react-router-dom";
import axios from "axios";
import { Image } from "cloudinary-react";

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

  // useEffect(() => {
  //   axios
  //     .get("https://api.cloudinary.com/v1_1/shoppin/image/fetch")
  //     .then((res) => {
  //       console.log("hey", res);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <>
      <div className="banner-container">
        <i onClick={prevSlide} className="far fa-caret-square-left"></i>
        <i onClick={nextSlide} className="far fa-caret-square-right"></i>
        {slidesImg &&
          slidesImg.map((item, index) => {
            return (
              <div
                key={index}
                className={curr === index ? "slider slider-active" : "slider"}
              >
                {index === curr && (
                  <img
                    src={curr === index ? item.url : ""}
                    alt="Not available"
                  />
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Banner;
