import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './Body'
import LoginSignup from '../../Pages/LoginSignup'
import ShopCatogery from '../../Pages/ShopCatogery'
import men_banner from '../Assets/banner_mens.png';

const Browse = () => {

    const AppRoute = createBrowserRouter([
        {
          path: "/",
          element: <LoginSignup/>
        },
        {
          path: "/body",
          element: <Body/>,
          children: [
            {
              path: "/mens",
              element: <ShopCatogery category="men" banner={men_banner} />
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