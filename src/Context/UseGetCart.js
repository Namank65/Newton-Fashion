import { useContext, useEffect } from 'react';
import { ShopContext } from './ShopContext';
import { server } from '..';

   function UseGetCart() {

    const {
        setCartItems,authToken, cartItmes
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
    }, []);

    return cartItmes

}


export {UseGetCart}