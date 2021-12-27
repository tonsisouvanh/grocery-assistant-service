import React from "react";
import "./Login.css";
import {Link} from 'react-router-dom';
const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-wrapper">
          <div className="left-col-container">
            <div className="greet-text">
              <p>Xin chào</p>
              <p>Đăng nhập hoặc Tạo tài khoản</p>
            </div>
            <form className="form-login">
              <div className="input-wrapper username">
                <label>SĐT/Email</label>
                <input type="text" placeholder=""></input>
              </div>

              <div className="input-wrapper password">
                <label>Password</label>
                <input type="password" placeholder=""></input>
              </div>

              <button className="submit-btn" type="submit">
                Đăng nhập
              </button>
              <Link className="register-link" to="#">
                <p>Chưa có tài khoản?</p>
              </Link>
            </form>
          </div>

          <div className="right-col-container">
            <i class="fab fa-opencart"></i>
            <p>Mua sắm ưu đãi!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
