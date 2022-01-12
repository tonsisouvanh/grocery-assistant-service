import "./App.css";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { store } from "./action/store";
import { Provider } from "react-redux";
import { clearMessage } from "./action/messeage";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Category from "./components/Category/Category";
import Banner from "./components/Banner/Banner";
import CustomerLogin from "./pages/Customer/Login/Login";
import CustomerRegister from "./pages/Customer/Register/Register";
import CustomerProfile from "./pages/Customer/Profile/Profile";

// PARTNER
import PartnerRegister from "./pages/Partner/Register/Register";
// MERCHANT
import MerchantProductManagement from "./pages/Partner/Merchant/Dashboard/ProductManagement";
import MerchantAddProductManagement from "./pages/Partner/Merchant/Dashboard/AddProductPage";

import Products from "./pages/Product/Products";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Provider store={store}>
        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Admin */}

          {/* customer */}
          <Route path="/pages/customer/login" element={<CustomerLogin />} />
          <Route
            path="/pages/customer/register"
            element={<CustomerRegister />}
          />
          <Route path="/pages/customer/profile" element={<CustomerProfile />} />

          {/* Merchant & Shipper */}
          <Route path="/pages/partner/register" element={<PartnerRegister />} />

          {/* Merchant */}
          <Route
            path="/pages/partner/merchant/dashboard"
            element={<MerchantProductManagement />}
          />
          <Route
            path="/pages/partner/merchant/addProduct"
            element={<MerchantAddProductManagement />}
          />

          {/* Global */}
          <Route path="/pages/products" element={<Products />} />
        </Routes>
        {/* Routing */}
      </Provider>
    </div>
  );
}

export default App;
