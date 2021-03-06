import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./AddProduct.css";
import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import validator from "validator";
import { addProduct } from "../../../action/product";
import ProductService from "../../../services/product.service";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const required = (value) => {
  if (!value) {
    return <div className="invalid-mssg">Yêu cầu nhập thông tin!</div>;
  }
};
// const vemail = (value) => {
//   if (!validator.isEmail(value)) {
//     return <div className="invalid-mssg">Yêu cầu nhập thông tin!</div>;
//   }
// };

// const vusername = (value) => {
//   if (value.length < 3 || value.length > 20) {
//     return (
//       <div className="invalid-mssg">
//         Tên đăng nhập phải có từ 3 ký tự và không được quá 20
//       </div>
//     );
//   }
// };

// const vpassword = (value) => {
//   if (value.length !== 8) {
//     return <div className="invalid-mssg">Mật khẩu phải có 8 ký tự</div>;
//   }
// };

// const vphoneNumber = (value) => {
//   if (!validator.isMobilePhone(value)) {
//     return <div className="invalid-mssg">SĐT không hợp lệ</div>;
//   }
// };

function AddProduct() {
  const checkBtn = useRef();

  const [imageSelected, setImageSelected] = useState("");
  const [productType, setProductType] = useState(0);
  const [productTypeList, setProductTypeList] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const [successful, setSuccessful] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "ekvbfqtf");
    formData.append("folder", "Products");
    axios
      .post("https://api.cloudinary.com/v1_1/shoppin/image/upload", formData)
      .then((response) => response)
      .then((data) => {
        if (checkBtn.current.context._errors.length === 0) {
          dispatch(
            addProduct(
              ProductState.productName,
              ProductState.description,
              ProductState.unit,
              ProductState.price,
              ProductState.storageQty,
              user.storeId,
              productType,
              data.data.public_id
            )
          )
            .then((res) => {
              alert("Added");
              window.location.reload();
            })
            .catch((error) => {
              alert(error.message);
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
      });
  };

  const onChanges = (e) => {
    setProductState({
      ...ProductState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage();
  };

  const handleProductType = (e) => {
    setProductType(e.target.value);
  };

  const [ProductState, setProductState] = useState({
    productName: "",
    description: "",
    unit: "",
    price: 0.0,
    storageQty: 0,
  });

  const productInput = [
    {
      inp_Name: "productName",
      inp_Type: "text",
      inp_Value: ProductState.productName,
      inp_Validations: [required],
      inp_PlaceHolder: "Tên sản phẩm",
    },
    {
      inp_Name: "description",
      inp_Type: "text",
      inp_Value: ProductState.description,
      inp_Validations: [required],
      inp_PlaceHolder: "Mô tả về sản phẩm",
    },
    {
      inp_Name: "unit",
      inp_Type: "text",
      inp_Value: ProductState.unit,
      inp_Validations: [required],
      inp_PlaceHolder: "Đơn vị tính",
    },
    {
      inp_Name: "price",
      inp_Type: "number",
      inp_Value: ProductState.price,
      inp_Validations: [required],
      inp_PlaceHolder: "Đơn giá",
      min: "0.00",
      max: "1000000.00",
      step: "0.01",
    },
    {
      inp_Name: "storageQty",
      inp_Type: "number",
      inp_Value: ProductState.storageQty,
      inp_Validations: [required],
      inp_PlaceHolder: "Số lượng",
    },
  ];

  useEffect(() => {
    let mounted = true;

    ProductService.getAllProductType().then((res) => {
      if (mounted) {
        setProductTypeList(res && res.data);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <div className="add-product-container">
        <Form onSubmit={handleSubmit}>
          <h1 className="header-text">Nhập vào sản phẩm mới</h1>
          {!successful && (
            <div className="form-wrapper">
              {productInput.map((input, index) => {
                return (
                  <div className="input-field" key={index}>
                    {input.inp_Name === "price" ||
                    input.inp_Name === "storageQty" ? (
                      <Input
                        className="input"
                        type={input.inp_Type}
                        name={input.inp_Name}
                        value={input.inp_Value}
                        onChange={onChanges}
                        validations={input.inp_Validations}
                        placeholder={input.inp_PlaceHolder}
                        min={input.min}
                        max={input.max}
                        step={input.step}
                      />
                    ) : input.inp_Name === "description" ? (
                      <TextField
                        label="Mô tả"
                        variant="standard"
                        multiline
                        rows={4}
                        className="input"
                        type={input.inp_Type}
                        name={input.inp_Name}
                        value={input.inp_Value}
                        onChange={onChanges}
                        validations={input.inp_Validations}
                        placeholder={input.inp_PlaceHolder}
                      />
                    ) : (
                      <Input
                        className="input"
                        type={input.inp_Type}
                        name={input.inp_Name}
                        value={input.inp_Value}
                        onChange={onChanges}
                        validations={input.inp_Validations}
                        placeholder={input.inp_PlaceHolder}
                      />
                    )}
                  </div>
                );
              })}

              <div className="input-field">
                <InputLabel id="demo-simple-select-autowidth-label">
                  Loại sản phẩm
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={productType}
                  onChange={handleProductType}
                  autoWidth
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {productTypeList &&
                    productTypeList.map((i, index) => {
                      return (
                        <MenuItem key={index} value={i.maloai}>
                          {i.tenloai}
                        </MenuItem>
                      );
                    })}
                </Select>
              </div>
              <div className="input-field">
                <Input
                  type="file"
                  onChange={(e) => setImageSelected(e.target.files[0])}
                />
              </div>
              <button className="btn-signup">ADD</button>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </>
  );
}

export default AddProduct;
