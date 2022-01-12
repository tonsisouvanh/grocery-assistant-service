import { FETCH_ALL, SET_MESSAGE } from "./types";

import ProductService from "../services/product.service";

export const getAllProducts = () => (dispatch) => {
  return ProductService.getAllProducts().then(
    (response) => {
      dispatch({
        type: FETCH_ALL,
        payload: response.data,
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
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
//   export const registerShipper =
//     (
//       fullname,
//       address,
//       phone,
//       cmnd,
//       plateNumber,
//       vaccine,
//       registerDate,
//       longitude,
//       location,
//       username,
//       password,
//       accountType
//     ) =>
//     (dispatch) => {
//       return AuthService.registerShipper(
//         fullname,
//         address,
//         phone,
//         cmnd,
//         plateNumber,
//         vaccine,
//         registerDate,
//         longitude,
//         location,
//         username,
//         password,
//         accountType
//       ).then(
//         (response) => {
//           dispatch({
//             type: REGISTER_SUCCESS,
//           });

//           dispatch({
//             type: SET_MESSAGE,
//             payload: response.data.message,
//           });

//           return Promise.resolve();
//         },
//         (error) => {
//           const message =
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString();

//           dispatch({
//             type: REGISTER_FAIL,
//           });

//           dispatch({
//             type: SET_MESSAGE,
//             payload: message,
//           });

//           return Promise.reject();
//         }
//       );
//     };

//   export const register =
//     (fullname, address, phone, email, username, password, accountType) =>
//     (dispatch) => {
//       return AuthService.register(
//         fullname,
//         address,
//         phone,
//         email,
//         username,
//         password,
//         accountType
//       ).then(
//         (response) => {
//           dispatch({
//             type: REGISTER_SUCCESS,
//           });

//           dispatch({
//             type: SET_MESSAGE,
//             payload: response.data.message,
//           });

//           return Promise.resolve();
//         },
//         (error) => {
//           const message =
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString();

//           dispatch({
//             type: REGISTER_FAIL,
//           });

//           dispatch({
//             type: SET_MESSAGE,
//             payload: message,
//           });

//           return Promise.reject();
//         }
//       );
//     };

//   export const login = (username, password, accountType) => (dispatch) => {
//     return AuthService.login(username, password, accountType).then(
//       (data) => {
//         dispatch({
//           type: LOGIN_SUCCESS,
//           payload: { user: data },
//         });

//         return Promise.resolve();
//       },
//       (error) => {
//         const message =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();

//         dispatch({
//           type: LOGIN_FAIL,
//         });

//         dispatch({
//           type: SET_MESSAGE,
//           payload: message,
//         });

//         return Promise.reject();
//       }
//     );
//   };

//   export const logout = () => (dispatch) => {
//     AuthService.logout();

//     dispatch({
//       type: LOGOUT,
//     });
//   };
