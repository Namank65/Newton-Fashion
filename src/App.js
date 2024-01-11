import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCatogery from './Pages/ShopCatogery';
import Product from './Pages/Product'
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCatogery />} catogery="men" />
          <Route path='/womens' element={<ShopCatogery />} catogery="women" />
          <Route path='/kids' element={<ShopCatogery />} catogery="kid" />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
