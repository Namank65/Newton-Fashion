import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollection from "../Components/NewCollection/NewCollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Shop = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
      <Footer/>
      <Toaster/>
    </div>
  );
};

export default Shop;
