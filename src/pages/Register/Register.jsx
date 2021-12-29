import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { register } from "../../action/auth";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

const required = (value) => {
  if (!value) {
    return <div>Yêu cầu nhập thông tin!</div>;
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return <div>Địa chỉ email không hợp lệ</div>;
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return <div>Tên đăng nhập phải có từ 3 ký tự và không được quá 20</div>;
  }
};

const vpassword = (value) => {
  if (value.length !== 8) {
    return <div>Mật khẩu phải có 8 ký tự</div>;
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const location = useLocation();
  const navigate = useNavigate();
  const [accountState, setAccountState] = useState({
    fullname: "",
    address: "",
    phone: "",
    email: "",
    accountType: 4,
    username: "",
    password: "",
  });

  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChanges = (e) => {
    setAccountState({
      ...accountState,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessful(false);
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(
        register(
          accountState.fullname,
          accountState.address,
          accountState.phone,
          accountState.email,
          accountState.username,
          accountState.password,
          accountState.accountType
        )
      )
        .then(() => {
          setSuccessful(true);
          navigate("/");
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <div>
      <div>
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className=""
        />

        <Form onSubmit={handleRegister}>
          {!successful && (
            <div>
              <div>
                <label htmlFor="fullname">Họ và tên</label>
                <Input
                  type="text"
                  name="fullname"
                  value={accountState.fullname}
                  onChange={onChanges}
                  validations={[required, vusername]}
                />
              </div>

              <div>
                <label htmlFor="address">Địa chỉ</label>
                <Input
                  type="text"
                  name="address"
                  value={accountState.address}
                  onChange={onChanges}
                  validations={[required]}
                />
              </div>

              <div>
                <label htmlFor="phone">SĐT</label>
                <Input
                  type="text"
                  name="phone"
                  value={accountState.phone}
                  onChange={onChanges}
                  validations={[required]}
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  name="email"
                  value={accountState.email}
                  onChange={onChanges}
                  validations={[required, validEmail]}
                />
              </div>

              {location.pathname === "/pages/collaborators/register" ? (
                <div>
                  <label htmlFor="accountType">
                    Loại tài khoản bạn muốn đăng ký:
                    <select
                      name="accountType"
                      type="number"
                      value={accountState.accountType}
                      onChange={onChanges}
                    >
                      <option value={0}></option>
                      <option value={1}>Seller</option>
                      <option value={2}>Shipper</option>
                    </select>
                  </label>
                </div>
              ) : (
                ""
              )}

              <div>
                <label htmlFor="username">Username</label>
                <Input
                  type="text"
                  name="username"
                  value={accountState.username}
                  onChange={onChanges}
                  validations={[required, vusername]}
                />
              </div>
              <div>
                <label htmlFor="password">Mật khẩu</label>
                <Input
                  type="password"
                  name="password"
                  value={accountState.password}
                  onChange={onChanges}
                  validations={[required, vpassword]}
                />
              </div>

              <div>
                <button>Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {/* {message} */}
                <p>Thông tin tin tải khoản đã tồn tại trong hệ thống!</p>
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Register;
