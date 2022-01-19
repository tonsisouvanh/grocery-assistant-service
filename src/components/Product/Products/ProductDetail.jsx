import React, { useState, useContext } from "react";
import "./ProductDetail.css";
import { Link } from "react-router-dom";

function ProductDetail({ products, id }) {
  const product =
    products && products ? products.find((item) => item.id === id) : [];
  const images = product && product.assets ? product.assets : [];
  const [currImg, setCurrimg] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const imgPerPage = 4;
  const pageCount = Math.ceil(images.length / imgPerPage);
  const pageVisited = pageNumber * imgPerPage;
  const displayImg = images
    .slice(pageVisited, pageVisited + imgPerPage)
    .map((img, index) => (
      <img
        key={index}
        onClick={() => setCurrimg(index)}
        src={img.url}
        alt=""
      ></img>
    ));

  const prevImages = () => {
    setPageNumber(pageNumber === 0 ? pageCount - 1 : pageNumber - 1);
  };
  const nextImages = () => {
    setPageNumber(pageNumber === pageCount - 1 ? 0 : pageNumber + 1);
  };

  return (
    <>
      <div className="product-detail-container">
        <div className="grid-container">
          <div className="col img-col">
            <div className="mini-img-wrapper">
              <i onClick={prevImages} className="fas fa-chevron-up"></i>
              {displayImg}
              <i onClick={nextImages} className="fas fa-chevron-down"></i>
            </div>
            <div className="main-img">
              {displayImg.map(
                (item, index) => {
                  if (displayImg.length - 1 < currImg) setCurrimg(0);
                  return (
                    index === currImg && (
                      <img key={index} src={item.props.src} alt=""></img>
                    )
                  );
                }
                // index === {currImg} && (
                //   <img key={index} src={item.props.src} alt=""></img>
                // )
              )}
            </div>
          </div>
          <div className="col product-content-col">
            <Link to="#" className="link">
              <p className="props pagination">
                <span>ກັບໄປ:</span>
                ທັງໝົດ
              </p>
            </Link>
            <h3 className="props name">{product ? product.name : ""}</h3>
            <div className="props rating-container">
              <i id="none" className="fas fa-star"></i>
              <i id="none" className="fas fa-star"></i>
              <i id="none" className="fas fa-star"></i>
              <i id="none" className="fas fa-star"></i>
              <i id="none" className="fas fa-star"></i>
            </div>
            <p className="props price">
              {product
                ? product.price.formatted_with_code.replace(".00", "")
                : ""}
            </p>
            <p className="props description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              quos ea expedita velit voluptate, repellat incidunt mollitia
              beatae debitis fugiat ullam
            </p>
            <div className="props size">
              <p className="size-title">Size:</p>
              <div className="size-wrapper">
                <p>S</p>
                <p>M</p>
                <p>L</p>
                <p>XL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
