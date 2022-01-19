import React, { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./EditProduct.css";
import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import validator from "validator";
import { editProduct } from "../../../action/product";
import ProductService from "../../../services/product.service";

import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const required = (value) => {
  if (!value) {
    return <div className="invalid-mssg">Yêu cầu nhập thông tin!</div>;
  }
};

function EditProduct({
  proId,
  proName,
  proDesc,
  proUnit,
  proPrice,
  proStorageQty,
  proTypeId,
  imgId,
  cloundinaryUrl,
}) {
  const checkBtn = useRef();
  console.log("d", cloundinaryUrl);
  const [imageSelected, setImageSelected] = useState("");
  const [productType, setProductType] = useState(proTypeId);
  const [productTypeList, setProductTypeList] = useState([]);
  // const [product, setProduct] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const updateProduct = () => {
    if (imageSelected !== "") {
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
              editProduct(
                proId,
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
                alert("Updated");
                window.location.reload();
              })
              .catch((error) => {
                alert("Update fail");
                setLoading(false);
              });
          } else {
            setLoading(false);
          }
        });
    } else {
      if (checkBtn.current.context._errors.length === 0) {
        dispatch(
          editProduct(
            proId,
            ProductState.productName,
            ProductState.description,
            ProductState.unit,
            ProductState.price,
            ProductState.storageQty,
            user.storeId,
            productType,
            imgId
          )
        )
          .then((res) => {
            alert("Updated");
            window.location.reload();
          })
          .catch((error) => {
            alert("Update fail");
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    }
  };

  const onChanges = (e) => {
    setProductState({
      ...ProductState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct();
  };

  const handleProductType = (e) => {
    setProductType(e.target.value);
  };

  const [ProductState, setProductState] = useState({
    productName: proName,
    description: proDesc,
    unit: proUnit,
    price: proPrice,
    storageQty: proStorageQty,
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

    // ProductService.getProductsOfMerchantStore(user.storeId).then((res) => {
    //   // console.log(res.data.find((d) => d.masp === parseInt(id, 10)));
    //   // console.log(res.data);
    //   if (mounted)
    //     setProduct(
    //       (res && res.data.find((d) => d.masp === parseInt(id, 10))) || ""
    //     );
    // });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <div className="edit-product-container">
        <Form onSubmit={handleSubmit}>
          <h1 className="header-text">Cập nhật thông tin sản phẩm</h1>
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
              <div className="input-field img-field">
                <Input
                  type="file"
                  onChange={(e) => setImageSelected(e.target.files[0])}
                />
                <img
                  className="product-img"
                  // src={`${cloundinaryUrl} + Products/sting_xmxtvb.jpg`}
                  src={cloundinaryUrl + imgId}
                  alt="No img found!"
                />
              </div>
              <button className="btn-signup">EDIT</button>
              {/* <Button variant="contained" endIcon={<AddIcon />}>
                THÊM error:
              </Button> */}
            </div>
          )}

          {/* {message && (
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
          )} */}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </>
  );
}

export default EditProduct;
