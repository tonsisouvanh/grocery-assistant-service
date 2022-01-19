import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { registerMerchant } from "../../../action/auth";
import "./MerchantRegister.css";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import validator from "validator";

const required = (value) => {
  if (!value) {
    return <div className="invalid-mssg">Yêu cầu nhập thông tin!</div>;
  }
};
const vemail = (value) => {
  if (!validator.isEmail(value)) {
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
  const [MerchantState, setMerchantState] = useState({
    storeName: "",
    storeAddress: "",
    storePhone: "",
    fullname: "",
    email: "",
    phone: "",
    address: "",
    department: "",
    accountType: userType,
    username: "",
    password: "",
  });

  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChanges = (e) => {
    setMerchantState({
      ...MerchantState,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessful(false);
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(
        registerMerchant(
          MerchantState.storeName,
          MerchantState.storeAddress,
          MerchantState.storePhone,
          MerchantState.fullname,
          MerchantState.email,
          MerchantState.phone,
          MerchantState.address,
          MerchantState.department,
          MerchantState.accountType,
          MerchantState.username,
          MerchantState.password
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

  const merchantInput = [
    {
      inp_Name: "storeName",
      inp_Type: "text",
      inp_Value: MerchantState.storeName,
      inp_Validations: [required],
      inp_PlaceHolder: "Tên cửa hàng",
    },
    {
      inp_Name: "storeAddress",
      inp_Type: "text",
      inp_Value: MerchantState.storeAddress,
      inp_Validations: [required],
      inp_PlaceHolder: "Địa chỉ cừa hàng",
    },
    {
      inp_Name: "storePhone",
      inp_Type: "text",
      inp_Value: MerchantState.storePhone,
      inp_Validations: ([required], [vphoneNumber]),
      inp_PlaceHolder: "SĐT Cửa hàng",
    },
    {
      inp_Name: "fullname",
      inp_Type: "text",
      inp_Value: MerchantState.fullname,
      inp_Validations: [required],
      inp_PlaceHolder: "Họ và tên",
    },
    {
      inp_Name: "email",
      inp_Type: "text",
      inp_Value: MerchantState.email,
      inp_Validations: ([required], [vemail]),
      inp_PlaceHolder: "Địa chỉ email",
    },
    {
      inp_Name: "phone",
      inp_Type: "text",
      inp_Value: MerchantState.phone,
      inp_Validations: ([required], [vphoneNumber]),
      inp_PlaceHolder: "Số điện thoại cá nhân",
    },
    {
      inp_Name: "address",
      inp_Type: "text",
      inp_Value: MerchantState.address,
      inp_Validations: [required],
      inp_PlaceHolder: "Địa chỉ cá nhân",
    },
    {
      inp_Name: "department",
      inp_Type: "text",
      inp_Value: MerchantState.department,
      inp_Validations: [required],
      inp_PlaceHolder: "Bộ phận",
    },
    {
      inp_Name: "username",
      inp_Type: "text",
      inp_Value: MerchantState.username,
      inp_Validations: ([required], [vusername]),
      inp_PlaceHolder: "Tên đăng nhập",
    },
    {
      inp_Name: "password",
      inp_Type: "text",
      inp_Value: MerchantState.password,
      inp_Validations: ([required], [vpassword]),
      inp_PlaceHolder: "Mật khẩu",
    },
  ];

  return (
    <>
      <div className="partner-merchant-container">
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
                {merchantInput.map((input, index) => {
                  return (
                    <div className="input-field" key={index}>
                      <Input
                        className="input"
                        type={input.inp_Type}
                        name={input.inp_Name}
                        value={input.inp_Value}
                        onChange={onChanges}
                        validations={input.inp_Validations}
                        placeholder={input.inp_PlaceHolder}
                      />
                    </div>
                  );
                })}

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
            <p>Merchant</p>
            <img className="img-shopping" src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
