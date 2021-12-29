// (Authentication service)
import axios from "axios";

const API_URL = "https://localhost:44370/api/";

const register = (
  fullname,
  address,
  phone,
  email,
  username,
  password,
  accountType
) => {
  return axios.post(API_URL + "khachhangs", {
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

const login = (username, password) => {
  return axios
    .post(API_URL + "accounts", {
      username,
      password,
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
  login,
  logout,
};
