import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { store } from "./action/store";
import { Provider } from "react-redux";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Provider store={store}>
        {location.pathname !== "/pages/login" ? <Navbar /> : ""}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/login" element={<Login />} />
          <Route path="/pages/register" element={<Register />} />
          <Route path="/pages/collaborators/register" element={<Register />} />

          {/* <Route path="/pages/products" element={<Products />} /> */}
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
