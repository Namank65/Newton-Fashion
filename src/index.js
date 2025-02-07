import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

export const server = "https://nubifashon-backend.onrender.com/api/v1"

export const context = createContext({isAuthenticated: true, isAdmin: false});

const AppWrapper = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isAdmin, setIsAdmin] = useState("");
  const [userDetail, setUserDetail] = useState({});

  return (
    <context.Provider value={{isAuthenticated, setIsAuthenticated, userDetail, setUserDetail, isAdmin, setIsAdmin}}>
      <App/>
    </context.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
  <ShopContextProvider>
    <AppWrapper />
  </ShopContextProvider>
  </Provider>
);