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

    </div>
  )
}

export default CartItems;