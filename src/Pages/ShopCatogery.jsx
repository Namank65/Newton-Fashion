import React, { useContext } from 'react';
import './CSS/ShopCatogery.css';
import { ShopContext } from '../Context/ShopContext';
import drop_down from '../Components/Assets/dropdown_icon.png';
import Items from '../Components/Items/Items';

const ShopCatogery = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
        <img src={props.banner} alt="banner" />
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
            if (props.catogery === item.catogery) {
              <Items key={index}/>
            }
          } )}
        </div>
    </div>
  )
}

export default ShopCatogery;