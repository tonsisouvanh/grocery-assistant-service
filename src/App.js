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
import MerchantEditProductManagement from "./pages/Partner/Merchant/Dashboard/EditProductPage";

import Products from "./pages/Product/Products";
import OrdersManagementPage from "./pages/Partner/Merchant/Dashboard/OrdersManagementPage";

const cloundinaryUrl =
  "https://res.cloudinary.com/shoppin/image/upload/v1642118462/";

const customer_routes = [
  {
    path: "/pages/customer/login",
    component: <CustomerLogin />,
  },
  {
    path: "/pages/customer/register",
    component: <CustomerRegister />,
  },
  {
    path: "/pages/customer/profile",
    component: <CustomerProfile />,
  },
];

const merchant_routes = [
  {
    path: "/pages/partner/merchant/productManagement",
    component: <MerchantProductManagement />,
  },
  {
    path: "/pages/partner/merchant/addProduct",
    component: <MerchantAddProductManagement />,
  },
  {
    path: "/pages/partner/merchant/editProduct/:id",
    component: (
      <MerchantEditProductManagement cloundinaryUrl={cloundinaryUrl} />
    ),
  },
  {
    path: "/pages/partner/merchant/ordersManagement",
    component: <OrdersManagementPage />,
  },
];

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
          {customer_routes.map(({ path, component }, key) => (
            <Route key={key} path={path} element={component} />
          ))}

          {/* Merchant */}
          {merchant_routes.map(({ path, component }, key) => (
            <Route key={key} path={path} element={component} />
          ))}

          {/* Global */}
          <Route path="/pages/partner/register" element={<PartnerRegister />} />
          <Route
            path="/pages/products"
            element={<Products cloundinaryUrl={cloundinaryUrl} />}
          />
        </Routes>
        {/* Routing */}
      </Provider>
    </div>
  );
}

export default App;
