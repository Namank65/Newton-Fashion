import React from 'react';
import ShopCatogery from '../../Pages/ShopCatogery';
import Navbar from '../Navbar/Navbar';
import AiComp from '../AiComponent/AiComp';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Product from '../../Pages/Product';
import Cart from '../../Pages/Cart';
import LoginSignup from '../../Pages/LoginSignup';
import { Toaster } from 'react-hot-toast';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';
import Shop from '../../Pages/Shop';
import men_banner from '../Assets/banner_mens.png';
import women_banner from '../Assets/banner_women.png';
import kid_banner from '../Assets/banner_kids.png';


const Body = () => {
    const showAiSearch = useSelector((store) => store.ai.showAiSearch);

  return (
    <div>
        
        {showAiSearch ? (<AiComp />) : (<Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCatogery category="men" banner={men_banner} />} />
          <Route path='/womens' element={<ShopCatogery category="women" banner={women_banner} />} />
          <Route path='/kids' element={<ShopCatogery category="kid" banner={kid_banner} />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>)}
          <Toaster />
        
    </div>
  )
}

export default Body