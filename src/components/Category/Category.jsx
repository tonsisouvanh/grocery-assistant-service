import React from "react";
import { categories } from "./categories";
import "./Category.css";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <>
      <div className="category-container">
        <ul className="category-list-container">
          {categories.map((cate, index) => {
            return (
              <Link className="link" to="#" key={index}>
                <div className="cate-cards">
                  <img className="card-img" src={cate.image} alt="" />
                  <li className="cate-li">{cate.name}</li>
                </div>
              </Link>
            );
          })}
        </ul>
        <div className="btn-container">
          <Link to="/pages/products">
            <button className="btn-view-all">XEM TẤT CẢ</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Category;
