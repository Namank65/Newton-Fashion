import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import toast, { Toaster } from "react-hot-toast";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [size, setSize] = useState("");
  const [SizeBtn, setSizeBtn] = useState(false);


  const SelectSize = (prop) => {
    if (prop === "S"){
      setSize(prop)
      setSizeBtn(true)
      toast.success("Product Size S Selected")
    }
    if(prop === "M"){
      setSize(prop)
      setSizeBtn(true)
      toast.success("Product Size M Selected")
    }
    if(prop === "L"){
      setSize(prop)
      toast.success("Product Size L Selected")
    }
    if(prop === "XL"){
      setSize(prop)
      toast.success("Product Size XL Selected")
    }
    if(prop === "XXL"){
      setSize(prop)
      toast.success("Product Size XXL Selected")
    }
  }
  const AddToCart = () => {
    if (size) {
      addToCart(product?.id, size);
      toast.success("Item Added To Cart")
    } else toast.error("Please Select Item Size First")
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
            <p style={{ background: SizeBtn ? "pink" : "white" }} onClick={() => SelectSize("S")}>S</p>
            <p style={{ background: SizeBtn ? "pink" : "none" }} onClick={() => SelectSize("M")}>M</p>
            <p onClick={() => SelectSize("L")}>L</p>
            <p onClick={() => SelectSize("XL")}>XL</p>
            <p onClick={() => SelectSize("XXL")}>XXL</p>
          </div>
        </div>
        <button
          onClick={() => {
            AddToCart()
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
      <Toaster/>
    </div>
  );
};

export default ProductDisplay;
