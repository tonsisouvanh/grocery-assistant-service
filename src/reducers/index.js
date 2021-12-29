import { combineReducers } from "redux";
import { Product } from "./Product";
import { Account } from "./Account";
import auth from "./auth";
import message from "./message";
export const reducers = combineReducers({
  Product,
  Account,
  auth,
  message,
});
