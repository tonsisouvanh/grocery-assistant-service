import React, { useEffect, useState } from "react";
import { categories } from "./categories";
import "./Category.css";
import { Link } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import productService from "../../services/product.service";
const Category = () => {
  const [value, setValue] = useState("");
  const [productType, setProductType] = useState([]);
  const text = "hey";
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    productService.getAllProductType().then((res) => {
      setProductType((res && res.data) || []);
    });
  }, []);

  console.log(productType);
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
