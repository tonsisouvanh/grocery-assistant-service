import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

import { store } from "./action/store";
import { Provider } from "react-redux";
import Products from "./components/Product/Products";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/login" element={<Login />} />
            <Route path="/pages/products" element={<Products />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
