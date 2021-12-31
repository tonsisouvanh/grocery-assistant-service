// (Authentication service)
import axios from "axios";

const API_URL = "https://localhost:44370/api/";

const registerMerchant = (
  fullname,
  address,
  phone,
  cmnd,
  plateNumber,
  vaccine,
  registerDate,
  longitude,
  location,
  username,
  password,
  accountType
) => {
  return axios.post(API_URL + "NhanvienChes/register", {
    tenkh: fullname,
    diachi: address,
    sdt: phone,
    cmnd: cmnd,
    bsxe: plateNumber,
    ttvaccine: vaccine,
    ngaydk: registerDate,
    vtkinhdo: longitude,
    vtvitri: location,
    accounts: [
      {
        username: username,
        password: password,
        LoaiAct: accountType,
      },
    ],
  });
};

const registerShipper = (
  fullname,
  address,
  phone,
  cmnd,
  plateNumber,
  vaccine,
  registerDate,
  longitude,
  location,
  username,
  password,
  accountType
) => {
  return axios.post(API_URL + "shippers/register", {
    tenkh: fullname,
    diachi: address,
    sdt: phone,
    cmnd: cmnd,
    bsxe: plateNumber,
    ttvaccine: vaccine,
    ngaydk: registerDate,
    vtkinhdo: longitude,
    vtvitri: location,
    accounts: [
      {
        username: username,
        password: password,
        LoaiAct: accountType,
      },
    ],
  });
};

const register = (
  fullname,
  address,
  phone,
  email,
  username,
  password,
  accountType
) => {
  return axios.post(API_URL + "khachhangs/register", {
    tenkh: fullname,
    diachi: address,
    sdt: phone,
    email: email,
    accounts: [
      {
        username: username,
        password: password,
        LoaiAct: accountType,
      },
    ],
  });
};

const login = (username, password, accountType) => {
  return axios
    .post(API_URL + "accounts/login", {
      username,
      password,
      LoaiAct: accountType,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  registerShipper,
  registerMerchant,
  login,
  logout,
};
