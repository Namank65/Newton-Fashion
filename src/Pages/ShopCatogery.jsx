import React, { useContext } from "react";
import "./CSS/ShopCatogery.css";
import { ShopContext } from "../Context/ShopContext";
import drop_down from "../Components/Assets/dropdown_icon.png";
import Items from "../Components/Items/Items";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const ShopCatogery = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <Navbar />
      <img className="shopCatogery-banner" src={props.banner} alt="banner" />
      <div className="shopCatogery-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 Products
        </p>
        <div className="shopCatogery-Sort">
          Sort By <img src={drop_down} alt="dropdown" />
        </div>
      </div>
      <div className="shopCatogery-products">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Items
                key={index}
                id={item.id}
                name={item.name}
                image={item.images}
                new_price={item.newPrice}
                old_price={item.oldPrice}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadMore">Explore More</div>
        <Footer />
    </div>
  );
};

export default ShopCatogery;
