import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

export const server = "https://nubifashon-backend.onrender.com/api/v1"

export const context = createContext({isAuthenticated: true});

const AppWrapper = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <context.Provider value={{isAuthenticated, setIsAuthenticated}}>
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