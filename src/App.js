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

import PartnerRegister from "./pages/Partner/Register/Register";
import Products from "./pages/Product/Products";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Provider store={store}>
        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/customer/login" element={<CustomerLogin />} />
          <Route path="/pages/customer/register" element={<CustomerRegister />} />
          <Route path="/pages/partner/register" element={<PartnerRegister />} />
          <Route path="/pages/products" element={<Products />} />
          <Route path="/pages/customer/profile" element={<CustomerProfile />} />
        </Routes>
        {/* Routing */}
      </Provider>
    </div>
  );
  // return (
  //   <div className="App">
  //     <Provider store={store}>
  //       {location.pathname === "/pages/customer/login" ||
  //       location.pathname === "/pages/customer/register" ||
  //       location.pathname === "/pages/partner/register" ||
  //       location.pathname === "/pages/register" ? (
  //         ""
  //       ) : (
  //         <Navbar />
  //       )}

  //       {/* Routing */}
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/pages/customer/login" element={<CustomerLogin />} />
  //         <Route
  //           path="/pages/customer/register"
  //           element={<CustomerRegister />}
  //         />
  //         <Route path="/pages/partner/register" element={<PartnerRegister />} />
  //         <Route path="/pages/products" element={<Products />} />
  //         <Route path="/pages/customer/profile" element={<CustomerProfile />} />
  //       </Routes>
  //       {/* Routing */}

  //       {location.pathname === "/pages/customer/login" ||
  //       location.pathname === "/pages/customer/register" ||
  //       location.pathname === "/pages/partner/register" ||
  //       location.pathname === "/pages/register" ? (
  //         ""
  //       ) : (
  //         <Footer />
  //       )}
  //     </Provider>
  //   </div>
  // );
}

export default App;
