// (Data service)
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://localhost:44370/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "accounts");
};

const getUserBoard = (username, acctType) => {
  return axios.get(API_URL + `KhachHangs/profile?username=${username}&acctType=${acctType}`, { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};