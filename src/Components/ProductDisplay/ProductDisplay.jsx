import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { useDispatch, useSelector } from "react-redux";
import { productSize } from "../../utils/AiCompSlice";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, all_product, cartItems } = useContext(ShopContext);

  const dispatch = useDispatch();
  const handleAddSize = () => {
    dispatch(productSize("S"))
  }
  const handleAddSize2 = (id) => {
    // console.log(cartItems)

    all_product.map((i) => i.id === id ? dispatch(productSize("M")) : "" )
    
    // if(id){
    //   dispatch(productSize("M"))
    // }
  }

  return (
    <div className="ProductDisplay">
      <div className="ProductDisplay-left">
        <div className="ProductDisplay-img-list">
          <img src={product?.images} alt="" />
          <img src={product?.images} alt="" />
          <img src={product?.images} alt="" />
          <img src={product?.images} alt="" />
        </div>
        <div className="ProductDisplay-img">
          <img
            className="ProductDisplay-main-img"
            src={product?.images}
            alt="productMainImg"
          />
        </div>
      </div>
      <div className="ProductDisplay-right">
        <h1>{product?.name}</h1>
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
            ${product?.oldPrice}
          </div>
          <div className="ProductDisplay-right-price-new">
            ${product?.newPrice}
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
            <div onClick={() => handleAddSize()}>S</div>
             <div onClick={() => handleAddSize2(product?.id)}>M</div>
            {/*<div onClick={() => setProductSize("L")}>L</div>
            <div onClick={() => setProductSize("XL")}>XL</div>
            <div onClick={() => setProductSize("XXL")}>XXL</div> */}
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product?.id);
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
