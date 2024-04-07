import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

export const server = "https://nubifashon-backend.onrender.com/api/v1"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  </Provider>
);