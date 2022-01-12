import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../action/auth";
import UserService from "../../../services/user.service";
import "./Profile.css";

import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import validator from "validator";

import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

import person from "../../../images/person.png";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [customer, setCustomer] = useState({});
  const location = useLocation();

  const [editToggle, setEditToggle] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigator("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
  };

  return (
    <>
      <div className="profile-containers">
        <div className="profile-content-wrapper">
          <div className="text-header-container">
            <p className="text-header">Thông tin tài khoản</p>
          </div>

          <div className="grid-container">
            <div className="left-col-container">
              <div className="avatar-container">
                <img className="avatar" src={person} alt="" />
                <p className="user-name">Truong Hoang Phuc</p>
              </div>
              <ul className="menu-container">
                <li className="li active">Account</li>
                <li className="li">Password</li>
                <li className="li">Security</li>
              </ul>
              <div className="btn-container">
                <Button
                  startIcon={<LogoutIcon />}
                  style={{ marginRight: "0.75rem" }}
                  variant="contained"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
                <Link to="/" className="link btn-home">
                  <Button startIcon={<HomeIcon />} variant="contained">
                    Trang chủ
                  </Button>
                </Link>
              </div>
            </div>
            <div className="right-col-container">
              <div className="form-text-header-container">
                <p className="form-text-header">Account setting</p>
              </div>
              <Form className="user-profile-form-container">
                <div className="user-form-wrapper">
                  <TextField
                    style={{ color: "black", width: "20rem", margin: "1rem" }}
                    id="outlined-read-only-input"
                    label="Họ và tên"
                    defaultValue={currentUser.fullname}
                    // value={}
                    InputProps={{
                      readOnly: editToggle ? false : true,
                    }}
                  />
                  <TextField
                    style={{ color: "black", width: "20rem", margin: "1rem" }}
                    id="outlined-read-only-input"
                    label="Tên đăng nhập"
                    defaultValue={currentUser.username}
                    // value={customer.accounts && customer.accounts[0].username}
                    InputProps={{
                      readOnly: editToggle ? false : true,
                    }}
                  />
                  <TextField
                    style={{ color: "black", width: "20rem", margin: "1rem" }}
                    id="outlined-read-only-input"
                    label="Số điện thoại"
                    defaultValue={currentUser.phone}
                    // value={customer.sdt}
                    InputProps={{
                      readOnly: editToggle ? false : true,
                    }}
                  />
                  <TextField
                    style={{ color: "black", width: "20rem", margin: "1rem" }}
                    id="outlined-read-only-input"
                    label="Địa chỉ"
                    defaultValue={currentUser.address}
                    // value={customer.diachi}
                    InputProps={{
                      readOnly: editToggle ? false : true,
                    }}
                  />
                  <TextField
                    style={{ color: "black", width: "20rem", margin: "1rem" }}
                    id="outlined-read-only-input"
                    label="Địa chỉ email"
                    defaultValue={currentUser.email}
                    // value={customer.email}
                    InputProps={{
                      readOnly: editToggle ? false : true,
                    }}
                  />
                </div>

                <div className="button-container">
                  <Button
                    onClick={() => setEditToggle(!editToggle)}
                    variant="outlined"
                    startIcon={<EditIcon />}
                  >
                    EDIT
                  </Button>
                  {editToggle ? (
                    <div>
                      <Button
                        style={{ margin: "0 1rem" }}
                        variant="outlined"
                        startIcon={<SaveIcon />}
                        type="submit"
                      >
                        OK
                      </Button>
                      <Button
                        onClick={() => setEditToggle(false)}
                        variant="outlined"
                        startIcon={<CancelIcon />}
                      >
                        CANCEL
                      </Button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
