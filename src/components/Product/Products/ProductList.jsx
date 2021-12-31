// export default ProductList
import React, { useState, useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";
import { Link, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

import Filter from "./Filter";

function ProductList({ products, addProduct }) {
  // const [filter, setFilter] = useState("all");

  // //to store sorted product
  // const { type } = useParams();
  // const [current, setCurrent] = useState(0);

  // //product pagination
  // const [pageNumber, setPageNumber] = useState(0);
  // const productsPerPage = 5;
  // const pageCount = Math.ceil(products.length / productsPerPage);
  // const pageVisited = pageNumber * productsPerPage;

  // const handleFilter = (val) => {
  //   switch (val) {
  //     case "lowhigh":
  //       products.sort((a, b) => {
  //         if (a.price.raw < b.price.raw) return -1;
  //         if (a.price.raw > b.price.raw) return 1;
  //         return 0;
  //       });
  //       break;
  //     case "highlow":
  //       products.sort((a, b) => {
  //         if (a.price.raw > b.price.raw) return -1;
  //         if (a.price.raw < b.price.raw) return 1;
  //         return 0;
  //       });
  //       break;
  //     case "az":
  //       products.sort((a, b) => {
  //         if (a.name < b.name) return -1;
  //         if (a.name > b.name) return 1;
  //         return 0;
  //       });
  //       break;
  //     case "za":
  //       products.sort((a, b) => {
  //         if (a.name > b.name) return -1;
  //         if (a.name < b.name) return 1;
  //         return 0;
  //       });
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // var checkCateType = (cates) => {
  //   for (let i = 0, l = cates.length; i < l; i++) {
  //     if (cates[i].slug === type) {
  //       return 1;
  //     }
  //   }
  //   return 0;
  // };
  
  // const showAll =
  //   products &&
  //   products
  //     .slice(pageVisited, pageVisited + productsPerPage)
  //     .map((product, index) => {
  //       return (
  //         <ProductCard
  //           key={index}
  //           id={product.id}
  //           name={product.name}
  //           image={product.media.source}
  //           price={product.price.formatted_with_code}
  //           sale={"50,000 LAK"}
  //           addProduct={addProduct}
  //         />
  //       );
  //     });
  // const showType =
  //   products &&
  //   products
  //     .filter((item) => checkCateType(item.categories) > 0)
  //     .map((product, index) => {
  //       return (
  //         <ProductCard
  //           key={index}
  //           id={product.id}
  //           name={product.name}
  //           image={product.media.source}
  //           price={product.price.formatted_with_code}
  //           sale={"50,000 LAK"}
  //           addProduct={addProduct}
  //         />
  //       );
  //     });

  // const prevImages = () => {
  //   setPageNumber(pageNumber === 0 ? pageCount - 1 : pageNumber - 1);
  // };
  // const nextImages = () => {
  //   setPageNumber(pageNumber === pageCount - 1 ? 0 : pageNumber + 1);
  // };

  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };
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
        <div className="grid-container">
          <div className="filter">
            <div className="box category">
              <h3 className="category-title">Danh mục</h3>
              <ul className="cate-list">
                <Link to="#" className="cate-link">
                  <li>
                    Bán chạy<span>+</span>
                  </li>
                </Link>
                <Link to="#" className="cate-link">
                  <li>
                    Giảm giá<span>+</span>
                  </li>
                </Link>
                <Link to="#" className="cate-link">
                  <li>
                    Hàng mua có đồ tặng<span>+</span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          {/* <div className="cards-container">
            <Filter
              handleFilter={handleFilter}
              filter={filter}
              setFilter={setFilter}
            />
            <div className="items">{type !== "all" ? showType : showAll}</div>
            <ReactPaginate
              previousLabel={"Về"}
              nextLabel={"Tiếp"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBtns"}
              previousLinkClassName={"link prevBtn"}
              nextLinkClassName={"link nextBtn"}
              disabledClassNam={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ProductList;
