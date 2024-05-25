import React, { useEffect, useState } from "react";
import "./Popular.css";
import Items from "../Items/Items";

const Popular = () => {
  const [popularProduct, setPopularProduct] = useState([]);

  useEffect(() => {
    fetch(
      "https://nubifashon-backend.onrender.com/api/v1/upload/popularInWomen"
    )
      .then((resp) => resp.json())
      .then((data) => setPopularProduct(data?.data));
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProduct.map((item, index) => {
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
        })}
      </div>
    </div>
  );
};

export default Popular;
