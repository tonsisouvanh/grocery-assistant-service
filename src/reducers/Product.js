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
