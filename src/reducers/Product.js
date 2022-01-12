import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../action/types";
const initialState = {
  list: [],
};

export const Product = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        list: [...action.payload],
      };

    case CREATE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case UPDATE:
      return {
        ...state,
        list: state.list.map((x) =>
          x.id === action.payload.id ? action.payload : x
        ),
      };

    case DELETE:
      return {
        ...state,
        list: state.list.filter((x) => x.id !== action.payload),
      };

    default:
      return state;
  }
};

// import {
//     FETCH_ALL,
//     CREATE,
//     UPDATE,
//     DELETE
//   } from "../action/types";

//   const user = JSON.parse(localStorage.getItem("user"));

//   const initialState = user
//     ? { isLoggedIn: true, user }
//     : { isLoggedIn: false, user: null };

// eslint-disable-next-line import/no-anonymous-default-export
//   export default function (state = initialState, action) {
//     const { type, payload } = action;

//     switch (type) {
//       case REGISTER_SUCCESS:
//         return {
//           ...state,
//           isLoggedIn: false,
//         };
//       case REGISTER_FAIL:
//         return {
//           ...state,
//           isLoggedIn: false,
//         };
//       case LOGIN_SUCCESS:
//         return {
//           ...state,
//           isLoggedIn: true,
//           user: payload.user,
//         };
//       case LOGIN_FAIL:
//         return {
//           ...state,
//           isLoggedIn: false,
//           user: null,
//         };
//       case LOGOUT:
//         return {
//           ...state,
//           isLoggedIn: false,
//           user: null,
//         };
//       default:
//         return state;
//     }
//   }
