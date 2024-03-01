import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/Register.jsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from './pages/Error.jsx';
import ProductPage from './pages/products.jsx';

const router = createBrowserRouter([
    {
      path:"/login",
      element: <LoginPage/> 
    },
    {
      path:"/register",
      element:<RegisterPage/>
    },
    {
      path: "/",
      errorElement: <ErrorPage/>
    },
    {
      path: "/product",
      element: <ProductPage/>
    }
]); 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
