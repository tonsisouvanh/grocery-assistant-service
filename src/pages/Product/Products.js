import React, { useState, useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProductList from "../../components/Product/Products/ProductList";

// CONTEXT
// import ProductContext from "../components/ContextApi/ProductContext";

function Products({ products, addProduct }) {
  return (
    <>
      <Navbar />
      <ProductList products={products} addProduct={addProduct} />
      <Footer />
    </>
  );
}

export default Products;
