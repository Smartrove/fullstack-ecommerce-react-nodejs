import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
    </div>
  );
};

export default Home;
