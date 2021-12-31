import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { registerShipper } from "../../../action/auth";
import "./ShipperRegister.css";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import validator from "validator";

const required = (value) => {
  if (!value) {
    return <div className="invalid-mssg">Yêu cầu nhập thông tin!</div>;
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="invalid-mssg">
        Tên đăng nhập phải có từ 3 ký tự và không được quá 20
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length !== 8) {
    return <div className="invalid-mssg">Mật khẩu phải có 8 ký tự</div>;
  }
};

const vphoneNumber = (value) => {
  if (!validator.isMobilePhone(value)) {
    return <div className="invalid-mssg">SĐT không hợp lệ</div>;
  }
};

const Register = ({ userType, img }) => {
  const form = useRef();
  const checkBtn = useRef();

  const location = useLocation();
  const navigate = useNavigate();
  const [accountState, setAccountState] = useState({
    fullname: "",
    address: "",
    phone: "",
    cmnd: "",
    plate: "",
    vaccine: 0,
    registerDate: new Date(),
    longitude: 0,
    location: 0,
    accountType: userType,
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
    // form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(
        registerShipper(
          accountState.fullname,
          accountState.address,
          accountState.phone,
          accountState.cmnd,
          accountState.plate,
          accountState.vaccine,
          accountState.registerDate,
          accountState.longitude,
          accountState.location,
          accountState.username,
          accountState.password,
          accountState.accountType
        )
      )
        .then(() => {
          setSuccessful(true);
          alert("Đăng ký thành công");
          navigate("/");
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <>
      <div className="partner-shipper-container">
        <div className="form-container">
          <Form onSubmit={handleRegister}>
            {!successful && (
              <div className="form-wrapper">
                <div className="logo-container">
                  <p className="logo-text">
                    <span className="s-text">S</span>hopin
                    <span className="apostrophe">:)</span>
                  </p>
                </div>
                <div className="input-field">
                  <Input
                    className="input"
                    type="text"
                    name="fullname"
                    value={accountState.fullname}
                    onChange={onChanges}
                    validations={[required]}
                    placeholder="Họ và tên"
                  />
                </div>

                <div className="input-field">
                  <Input
                    className="input"
                    type="text"
                    name="address"
                    value={accountState.address}
                    onChange={onChanges}
                    validations={[required]}
                    placeholder="Địa chỉ"
                  />
                </div>

                <div className="input-field">
                  <Input
                    className="input"
                    type="text"
                    name="phone"
                    value={accountState.phone}
                    onChange={onChanges}
                    validations={([required], [vphoneNumber])}
                    placeholder="SĐT"
                  />
                </div>

                <div className="input-field">
                  <Input
                    className="input"
                    type="text"
                    name="cmnd"
                    value={accountState.cmnd}
                    onChange={onChanges}
                    validations={[required]}
                    placeholder="CMND/CCCD"
                  />
                </div>
                <div className="input-field">
                  <Input
                    className="input"
                    type="text"
                    name="plate"
                    value={accountState.plate}
                    onChange={onChanges}
                    validations={[required]}
                    placeholder="Biến số xe"
                  />
                </div>
                <div className="input-field">
                  <Input
                    className="input"
                    type="text"
                    name="vaccine"
                    value={accountState.vaccine}
                    onChange={onChanges}
                    validations={[required]}
                    placeholder="Mũi tiêm Vaccine"
                  />
                </div>

                <div className="input-field">
                  <Input
                    className="input"
                    type="text"
                    name="username"
                    value={accountState.username}
                    onChange={onChanges}
                    validations={[required, vusername]}
                    placeholder="Tên đăng nhập"
                  />
                </div>
                <div className="input-field">
                  <Input
                    className="input"
                    type="password"
                    name="password"
                    value={accountState.password}
                    onChange={onChanges}
                    validations={[required, vpassword]}
                    placeholder="Mật khẩu"
                  />
                </div>

                <div>
                  <button className="btn-signup">Đăng ký</button>
                </div>

                <Link className="link" to="/">
                  <p>Trang chủ</p>
                </Link>
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
                  <p>Thông tin tin tải khoản đã tồn tại trong hệ thống!</p>
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
          <div className="right-col-container">
            <p>Shipper</p>
            <img className="img-shopping" src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
