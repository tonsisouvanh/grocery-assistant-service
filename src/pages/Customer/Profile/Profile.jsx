import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../action/auth";
import UserService from "../../../services/user.service";
const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [customer, setCustomer] = useState({});

  const handleLogout = () => {
    dispatch(logout());
    navigator("/");
  };
  useEffect(() => {
    UserService.getUserBoard(currentUser.username, currentUser.acctType).then(
      (response) => {
        setCustomer(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setCustomer(_content);
      }
    );
  }, []);

  return (
    <>
      <div>
        <h1>{customer.email}</h1>
        <h1>{customer.tenkh}</h1>
        <h1>{customer.sdt}</h1>
        <h1>{customer.diachi}</h1>
        <button onClick={handleLogout}>logout</button>
        <Link to="/">
          <button>Trang chủ</button>
        </Link>
      </div>
    </>
  );
};

export default Profile;
