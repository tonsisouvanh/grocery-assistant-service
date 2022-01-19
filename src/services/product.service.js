// (Data service)
import axios from "axios";
import authHeader from "./auth-header";
import { SET_MESSAGE } from "../action/types";

const API_URL = "https://localhost:44370/api/";

const getProductsOfMerchantStore = (StoreId) => {
  return axios.get(
    API_URL + `sanphams/getProductsOfMerchantStore?StoreId=${StoreId}`
  );
};

const getAllProducts = () => {
  return axios.get(API_URL + `sanphams/`);
};

const getAllProductType = () => {
  return axios.get(API_URL + `loaisanphams/`);
};

const addProduct = (
  productName,
  description,
  unit,
  price,
  storageQty,
  storeId,
  productType,
  imageId
) => {
  return axios
    .post(API_URL + "sanphams/addProduct", {
      tensp: productName,
      mota: description,
      donvitinh: unit,
      dongia: price,
      slkho: storageQty,
      mach: storeId,
      maloai: productType,
      imgurl: imageId,
    })
    .then((response) => {
      return response.data;
    });
};

const editProduct = (
  productId,
  productName,
  description,
  unit,
  price,
  storageQty,
  storeId,
  productType,
  imageId
) => {
  return axios
    .put(API_URL + `sanphams/${productId}`, {
      masp: productId,
      tensp: productName,
      mota: description,
      donvitinh: unit,
      dongia: price,
      slkho: storageQty,
      mach: storeId,
      maloai: productType,
      imgurl: imageId,
    })
    .then((response) => {
      return response.data;
    });
};

const deleteProduct = (productId) => {
  return axios.delete(API_URL + `sanphams/${productId}`).then((response) => {
    return response.data;
  });
};
// const getCustomerBoard = (username, acctType) => {
//   return axios.get(API_URL + `KhachHangs/profile?username=${username}&acctType=${acctType}`, { headers: authHeader() });
// };
// const getCustomerBoard = (username, acctType) => {
//   return axios.get(API_URL + `KhachHangs/profile?username=${username}&acctType=${acctType}`, { headers: authHeader() });
// };

// const getModeratorBoard = () => {
//   return axios.get(API_URL + "mod", { headers: authHeader() });
// };

// const getAdminBoard = () => {
//   return axios.get(API_URL + "admin", { headers: authHeader() });
// };

export default {
  getProductsOfMerchantStore,
  addProduct,
  editProduct,
  getAllProductType,
  getAllProducts,
  deleteProduct,
  //   getCustomerBoard,
  //   getModeratorBoard,
  //   getAdminBoard,
};
