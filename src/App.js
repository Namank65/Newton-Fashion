// import Navbar from './Components/Navbar/Navbar';
// import Shop from './Pages/Shop';
// import ShopCatogery from './Pages/ShopCatogery';
// import Product from './Pages/Product'
// import Cart from './Pages/Cart';
// import LoginSignup from './Pages/LoginSignup';
import { BrowserRouter, Outlet, Route } from "react-router-dom";
// import Footer from './Components/Footer/Footer';
// import men_banner from './Components/Assets/banner_mens.png';
// import women_banner from './Components/Assets/banner_women.png';
// import kid_banner from './Components/Assets/banner_kids.png';
// import AiComp from './Components/AiComponent/AiComp';
// import { useSelector } from 'react-redux';
import toast from "react-hot-toast"
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { context, server } from '.';
import Body from './Components/Body/Body';
import LoginSignup from "./Pages/LoginSignup";
import Browse from "./Components/Body/Browse";


function App() {
  // const showAiSearch = useSelector((store) => store.ai.showAiSearch);
  const {setUser, setIsAuthenticated} = useContext(context);

  useEffect(() => {
    
    axios.get(`${server}/users/profile`,{
      withCredentials: true
    }).then(res => {
      console.log(res.data)
      setUser(res.data.user)
      setIsAuthenticated(true)
      toast.success("Welcome To Nubi Fashion")
      
    }).catch((error) => {
      toast.error("Login First")
      setUser({})
      setIsAuthenticated(false)
    })
  
  }, [])

  return (
    <div className="App">
      <Browse/>
      {/* <BrowserRouter>
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
          <Route path='/login' element={<LoginSignup />} />
        </Routes>)}
          <Toaster/>
        <Footer />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
