import React, { useEffect, useState } from "react";
import "./NewCollection.css";
import Item from "../Items/Items";

const NewCollection = () => {
  const [new_collection, setNew_collection] = useState([]);

  useEffect(() => {
    fetch("https://nubifashon-backend.onrender.com/api/v1/upload/newCollection")
      .then((resp) => resp.json())
      .then((data) => setNew_collection(data?.data));
  }, []);

  return (
    <div className="NewCollection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, index) => {
          return (
            <Item
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

export default NewCollection;
