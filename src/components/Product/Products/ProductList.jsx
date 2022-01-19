// export default ProductList
import React, { useState, useContext, useEffect } from "react";
import ProductCard from "./ProCard";
import "./ProductList.css";
import { Link, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import ProductService from "../../../services/product.service";

import Filter from "./Filter";

function ProductList({cloundinaryUrl}) {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  const handleFilter = (val) => {
    switch (val) {
      case "lowhigh":
        products.sort((a, b) => {
          if (a.dongia < b.dongia) return -1;
          if (a.dongia > b.dongia) return 1;
          return 0;
        });
        break;
      case "highlow":
        products.sort((a, b) => {
          if (a.dongia > b.dongia) return -1;
          if (a.dongia < b.dongia) return 1;
          return 0;
        });
        break;
      case "az":
        products.sort((a, b) => {
          if (a.tensp < b.tensp) return -1;
          if (a.tensp > b.tensp) return 1;
          return 0;
        });
        break;
      case "za":
        products.sort((a, b) => {
          if (a.tensp > b.tensp) return -1;
          if (a.tensp < b.tensp) return 1;
          return 0;
        });
        break;
      default:
        break;
    }
  };
  const handleCateClick = () => {};
  useEffect(() => {
    ProductService.getAllProducts().then((res) => {
      setProducts((res && res.data) || "");
    });
  }, []);

  return (
    <>
      <div className="products-container">
        <div className="pagination">
          <div>
            <h1>Sản phẩm</h1>
            {/* <h1>{type.toUpperCase()}</h1> */}
            <span>
              <Link to="#" className="link" to="/">
                Trang chủ
              </Link>
            </span>
            <span className="span">/</span>
            <span>Sản phẩm</span>
          </div>
        </div>
        <Filter
          filter={filter}
          setFilter={setFilter}
          handleFilter={handleFilter}
        />

        <div className="grid-container">
          <div className="filter">
            <div className="box category">
              <h3 className="category-title">Danh mục</h3>
              <ul className="cate-list">
                <li onClick={handleCateClick}>Bán chạy</li>
              </ul>
            </div>
          </div>
          <div className="cards-container">
            {products &&
              products.map((i) => {
                return (
                  <ProductCard
                    key={i.masp}
                    name={i.tensp}
                    price={i.dongia}
                    img={i.imgUrl}
                    cloundinaryUrl={cloundinaryUrl}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
