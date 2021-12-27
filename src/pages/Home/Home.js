import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Category></Category>
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
};

export default Home;
