import React, { useContext } from "react";
import "./CSS/ShopCatogery.css";
import { ShopContext } from "../Context/ShopContext";
import drop_down from "../Components/Assets/dropdown_icon.png";
import Items from "../Components/Items/Items";

const ShopCatogery = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
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
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadMore">Explore More</div>
    </div>
  );
};

export default ShopCatogery;
