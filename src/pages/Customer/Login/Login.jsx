import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, Link, Redirect, Route } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../../../action/auth";

import "./Login.css";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState(0);

  const [loading, setLoading] = useState(false);
  // const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleAccountType = (e) => {
    setAccountType(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password, accountType))
        .then(() => {
          if (accountType === '1') naviagte("/admin");
          else if (accountType === '2')
            naviagte("/pages/partner/merchant/productManagement");
          else if (accountType === '3') naviagte("/shipper");
          else naviagte("/");

          // window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <Form onSubmit={handleLogin} ref={form}>
        <div className="login-wrapper">
          <div className="left-col-container">
            <div className="greet-text">
              <p>Xin chào</p>
              <p>Đăng nhập hoặc Tạo tài khoản</p>
            </div>
            <div className="form-wrapper">
              <div className="input-field select-account-container">
                <p>Chọn loại tài khoản đăng nhập</p>
                <select
                  className="form-select"
                  name=""
                  id=""
                  onChange={handleAccountType}
                >
                  <option value={0}></option>
                  <option value={1}>Admin</option>
                  <option value={4}>Normal customer</option>
                  <option value={2}>Merchant</option>
                  <option value={3}>Shipper</option>
                </select>
              </div>
              <div className="input-field">
                <label htmlFor="username">Username</label>
                <Input
                  type="text"
                  className="input"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required]}
                />
              </div>

              <div className="input-field">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="input"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]}
                />
              </div>

              <button className="login-btn" disabled={loading}>
                {loading && <span className=""></span>}
                <span>Đăng nhập</span>
              </button>
            </div>

            <Link className="link" to="/pages/customer/register">
              <p>Chưa có tài khoản?</p>
            </Link>
            <Link className="link" to="/">
              <p>Trang chủ</p>
            </Link>
          </div>
          <div className="right-col-container">
            <i className="fab fa-opencart"></i>
            <p>Mua sắm ưu đãi!</p>
          </div>
        </div>
        {message && (
          <div className="">
            <div className="" role="alert">
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </div>
  );
};

export default Login;
