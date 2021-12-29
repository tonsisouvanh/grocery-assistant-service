import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducers } from "../reducers"; // look for index file in reducers folder
const middleware = [thunk];

export const store = createStore(
  reducers,

  composeWithDevTools(applyMiddleware(...middleware))
  // compose(
  //     applyMiddleware(thunk),
  //     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);
