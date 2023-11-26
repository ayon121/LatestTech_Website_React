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

import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import AddProduct from './Components/Pages/AddProduct/AddProduct';
// import MyProduct from './Components/Pages/MyProducts/MyProduct';
import MyProducts from './Components/Pages/MyProducts/MyProducts';
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import AllProducts from './Components/Pages/AllProducts/AllProducts';
import Authproviders from './Providers/Authproviders';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home> </Home>
      },
      {
        path: '/allproducts',
        element: <AllProducts></AllProducts>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addproduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/myproducts',
        element: <MyProducts></MyProducts>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authproviders>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>

    </Authproviders>


  </React.StrictMode>,
)
