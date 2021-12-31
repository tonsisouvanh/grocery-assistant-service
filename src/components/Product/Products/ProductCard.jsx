import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
function ProductCard({ id, name, image, price, sale, addProduct }) {
  return (
    <>
      <div className="product-card">
        <div className="img-container">
          <img src={image} alt="" />
          <div className="card-hover card-hover-active"></div>
          <Link to={`/page/product-detail/${id}`} className="detail-btn">
            <button>ເບິ່ງເພີ່ມ</button>
          </Link>
        </div>
        <div className="content">
          <div className="title-wrapper">
            <div className="price-container">
              <Link to={`/page/product-detail/${id}`} className="link">
                <h3>{name}</h3>
              </Link>
              <div className="stars-wrapper">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <p className="price">
              <span className="sale">50,000 LAK</span>
              {price.replace(".00", "")}
            </p>
          </div>
          <div className="interact-btn">
            <i id="fas" class="fas fa-heart">
              <span>
                <i class="fas fa-plus-circle"></i>
              </span>
            </i>
            <i
              onClick={() => {
                addProduct(id, 1);
                alert("added");
              }}
              id="fas"
              class="fas fa-shopping-cart"
            >
              <span>
                <i class="fas fa-plus-circle"></i>
              </span>
            </i>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
