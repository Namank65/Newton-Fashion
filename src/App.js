import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCatogery from './Pages/ShopCatogery';
import Product from './Pages/Product'
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import AiComp from './Components/AiComponent/AiComp';
import { useSelector } from 'react-redux';
import {Toaster} from "react-hot-toast"
import { useContext } from 'react';
import { context } from '.';


function App() {
  const showAiSearch = useSelector((store) => store.ai.showAiSearch);
  const {isAuthenticated, setIsAuthenticated} = useContext(context);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {showAiSearch ? (<AiComp />) : (<Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCatogery category="men" banner={men_banner} />} />
          <Route path='/womens' element={<ShopCatogery category="women" banner={women_banner} />} />
          <Route path='/kids' element={<ShopCatogery category="kid" banner={kid_banner} />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          {/* {isAuthenticated ?  } */}
          <Route path='/login' element={<LoginSignup />} />
        </Routes>)}
          <Toaster/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
