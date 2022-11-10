import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Announcement />
      <NavbarComponent />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
