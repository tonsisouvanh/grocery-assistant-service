import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="" />
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
            <Link className="link" to="/pages/login">
              <p>Login/Register</p>
            </Link>
          </div>

          <div className="cart-container">
            <div className="cart-wrapper">
              <Link to="#" className="link cart-link">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart</p>
              </Link>
            </div>

            <div className="sell-register-wrapper">
              <Link to="/pages/collaborators/register" className="link">
                <p>Collaborate with us</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
