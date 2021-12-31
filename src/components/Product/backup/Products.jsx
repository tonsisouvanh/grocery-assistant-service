import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../action/Product";

const Products = ({ classes, ...props }) => {
  const [currentId, setCurrentId] = useState(0);
  
  useEffect(() => {
    props.fetchAllProducts();
  }, []);

  return (
    <>
      <ul>
          {props.ProductList.map((record, index) => {
              return(
                  <li key={index}>{record.masp}</li>
              )
          })}
      </ul>
    </>
  );
};

const mapStateToProps = state => ({
    ProductList: state.Product.list
})

const mapActionToProps = {
    fetchAllProducts: actions.fetchAll,
    deleteProducts: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)((Products));
