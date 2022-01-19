import React, { useState } from "react";
import "./ProductRelate.css";
import ReactPaginate from "react-paginate";
function ProductRelate({products}) {
  // const [pageNumber, setPageNumber] = useState(0);
  // const imgPerPage = 5;
  // const pageCount = Math.ceil(images.length / imgPerPage);
  // const pageVisited = pageNumber * imgPerPage;
  // const displayImg = images
  //   .slice(pageVisited, pageVisited + imgPerPage)
  //   .map((img, index) => (
  //     <div key={index} className="card">
  //       <img src={img.url} alt="" />
  //       <h3>ເສື້ອກັນໜາວ</h3>
  //       <p>
  //         <span>200000</span>100000
  //       </p>
  //     </div>
  //   ));

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
      <div className="relate-product-container">
        {/* <h2>ເຄື່ອງທີ່ກ່ຽວຂ້ອງ</h2>
        <div className="grid-container">{displayImg}</div>
        <ReactPaginate
          previousLabel={"ກັບຄືນ"}
          nextLabel={"ໄປໜ້າ"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtns"}
          previousLinkClassName={"link prevBtn"}
          nextLinkClassName={"link nextBtn"}
          disabledClassNam={"paginationDisabled"}
          activeClassName={"paginationActive"}
        /> */}
      </div>
    </>
  );
}

export default ProductRelate;
