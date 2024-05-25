import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="ProductDisplay">
      <div className="ProductDisplay-left">
        <div className="ProductDisplay-img-list">
          <img src={product.images} alt="" />
          <img src={product.images} alt="" />
          <img src={product.images} alt="" />
          <img src={product.images} alt="" />
        </div>
        <div className="ProductDisplay-img">
          <img
            className="ProductDisplay-main-img"
            src={product.images}
            alt="productMainImg"
          />
        </div>
      </div>
      <div className="ProductDisplay-right">
        <h1>{product.name}</h1>
        <div className="ProductDisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="ProductDisplay-right-prices">
          <div className="ProductDisplay-right-price-old">
            ${product.oldPrice}
          </div>
          <div className="ProductDisplay-right-price-new">
            ${product.newPrice}
          </div>
        </div>
        <div className="ProductDisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close fitting and well
          rounded neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="ProductDisplay-right-size">
          <h1>Select Size</h1>
          <div className="ProductDisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add To Cart
        </button>
        <p className="ProductDisplay-right-category">
          <span>Category :</span>Women, T-Shirt, Crop-top
        </p>
        <p className="ProductDisplay-right-category">
          <span>Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
