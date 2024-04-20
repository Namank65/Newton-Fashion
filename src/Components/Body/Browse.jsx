import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './Body'
import LoginSignup from '../../Pages/LoginSignup'
import ShopCatogery from '../../Pages/ShopCatogery'
import men_banner from '../Assets/banner_mens.png';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Cart from '../../Pages/Cart'

const Browse = () => {

  const AppLayout = () => {
    return <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  }

    const AppRoute = createBrowserRouter([
        // {
        //   path: "/",
        //   element: <LoginSignup/>
        // },
        {
          path: "/body",
          element: <AppLayout/>,
          children: [
            {
              path: "/cart",
              element: <Cart />
            }
          ]
        },
        // {
        //   path: "/mens",
        //   element: <ShopCatogery category="men" banner={men_banner} />
        // }
      ])

  return (
    <div>
        <RouterProvider router={AppRoute}/>
    </div>
  )
}

export default Browse;