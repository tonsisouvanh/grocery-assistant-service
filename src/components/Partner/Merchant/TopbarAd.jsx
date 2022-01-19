import React from "react";
import Style from "./TopbarAd.module.css";
import logo from "../../../images/facebook-circle.png";
import avatar from "../../../images/facebook-circle.png";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { logout } from "../../../action/auth";

function TopbarAd() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigator("/");
  };
  return (
    <>
      <div className={Style["container"]}>
        <div className={Style["logo_wrapper"]}>
          <img className={Style["logo"]} src={logo} alt="logo" />
        </div>
        <div className={Style["profile_wrapper"]}>
          <i id={Style["fa-envelope"]} className="far fa-envelope"></i>
          <i id={Style["fa-bell"]} className="far fa-bell"></i>
          <img className={Style["avatar"]} src={avatar} alt=""></img>
          <p id={Style["name"]}>James Coner</p>
          <i onClick={handleLogout} id={Style["fa-sign-out-alt"]} className="fas fa-sign-out-alt"></i>
        </div>
      </div>
    </>
  );
}

export default TopbarAd;
