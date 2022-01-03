import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <>
      <div className="nav-container">
        <div className="logo-container">
          <p className="logo-text">
            <span className="s-text">S</span>hopin
            <span className="apostrophe">:)</span>
          </p>
        </div>

        <form className="search-form" action="">
          <input
            className="text-box"
            type="text"
            placeholder="Search for product"
            name="search"
          />
          <button className="submit-btn" type="submit">
            Search
          </button>
        </form>

        <div className="profile-cart-wrapper">
          <div className="profile-container">
            <i class="far fa-user"></i>
            {isLoggedIn ? (
              <Link className="link" to="/pages/customer/profile">
                <p>Xem thông tin</p>
              </Link>
            ) : (
              <Link className="link" to="/pages/customer/login">
                <p>Đăng ký/Đăng nhập</p>
              </Link>
            )}
          </div>

          <div className="cart-container">
            <div className="cart-wrapper">
              <Link to="#" className="link cart-link">
                <i class="fas fa-shopping-cart"></i>
                <p>Giỏ hàng</p>
              </Link>
            </div>
            <div className="partner-register-wrapper">
              <Link to="/pages/partner/register" className="link">
                <p>Trở thành người bán/Shipper?</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
