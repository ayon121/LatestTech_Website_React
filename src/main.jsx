import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Layout/Root';
import Home from './Components/Pages/Home/Home';
import Error from './Components/Pages/Error/Error';
import Products from './Components/Pages/Products/Products';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement : <Error></Error>,
    children : [
      {
        path : '/',
        element : <Home> </Home>
      },
      {
        path : '/allproducts',
        element : <Products></Products>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
