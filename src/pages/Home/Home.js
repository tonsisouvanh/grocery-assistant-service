import React, { useState, useEffect } from "react";

import "./Home.css";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import UserService from "../../services/user.service";

const Home = () => {
  const [accounts, setAccounts] = useState([]);

  // useEffect(() => {
  //   UserService.getPublicContent().then(
  //     (response) => {
  //       console.log(response.data);
  //       setAccounts(response.data);
  //     },
  //     (error) => {
  //       const _account =
  //         (error.response && error.response.data) ||
  //         error.message ||
  //         error.toString();

  //         setAccounts(_account);
  //     }
  //   );
  // }, []);

  return (
    <>
      <Category></Category>
      <Banner></Banner>
    </>
  );
};

export default Home;
