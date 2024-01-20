import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';

const CartItems = () => {
    const {all_product, cartItems, removefromCart} = useContext(ShopContext);
  return (
    <div className='CartItems'>
        <div className="cartItems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        <div>
            <div className="cartItems-Formate">
                <img src="" alt="" className='cartIcon-product-icon' />
                <p></p>
                <p></p>
                <button className='cartItems-quantity'></button>
                <p></p>
            </div>
        </div>

    </div>
  )
}

export default CartItems;