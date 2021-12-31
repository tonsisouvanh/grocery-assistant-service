import React, { useState } from "react";
import "./Filter.css";
function Filter({ filter, setFilter, handleFilter }) {
  const options = [
    { value: "all", text: "All" },
    { value: "lowhigh", text: "Low to high" },
    { value: "highlow", text: "High to low" },
    { value: "az", text: "A-Z" },
    { value: "za", text: "Z-A" },
  ];
  return (
    <>
      <div className="sort">
        <div className="sort-feature">
          <p>
            SHOW:
            <span className="numbers">
              <select name="" id="" value="">
                <option value="0">12</option>
                <option value="1">16</option>
                <option value="2">20</option>
                <option value="3">24</option>
              </select>
            </span>
          </p>
          <p>
            SORT BY:
            <span className="Featured">
              <select
                onChange={(e) => {
                  setFilter(e.target.value);
                  handleFilter(e.target.value);
                }}
                value={filter}
                id="Featured"
              >
                {options.map((opt, index) => {
                  return <option key={index} value={opt.value}>{opt.text}</option>;
                })}
              </select>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Filter;
