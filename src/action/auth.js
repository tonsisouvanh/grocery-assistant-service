import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

import AuthService from "../services/auth.services";

export const registerMerchant =
  (
    storeName,
    storeAddress,
    storePhone,
    fullname,
    email,
    phone,
    address,
    department,
    accountType,
    username,
    password
  ) =>
  (dispatch) => {
    return AuthService.registerMerchant(
      storeName,
      storeAddress,
      storePhone,
      fullname,
      email,
      phone,
      address,
      department,
      accountType,
      username,
      password
    ).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: REGISTER_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };
export const registerShipper =
  (
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
  ) =>
  (dispatch) => {
    return AuthService.registerShipper(
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
    ).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: REGISTER_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };

export const register =
  (fullname, address, phone, email, username, password, accountType) =>
  (dispatch) => {
    return AuthService.register(
      fullname,
      address,
      phone,
      email,
      username,
      password,
      accountType
    ).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: REGISTER_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };

export const login = (username, password, accountType) => (dispatch) => {
  return AuthService.login(username, password, accountType).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
