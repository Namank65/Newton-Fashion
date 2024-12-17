import { useContext, useEffect } from 'react';
import { ShopContext } from './ShopContext';
import { server } from '..';
import CartItems from '../Components/CartItems/CartItems';

   function UseGetCart() {

    const {
        setCartItems,authToken,
      } = useContext(ShopContext);


  useEffect(() => {
      fetch(`${server}/upload/getCart`, {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: "",
      })
        .then((resp) => resp.json())
        .then((data) => setCartItems(data?.data))
        console.log(CartItems)

    }, []);

    return CartItems
}


export {UseGetCart}