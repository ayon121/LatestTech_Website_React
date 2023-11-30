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


import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import AllProducts from './Components/Pages/AllProducts/AllProducts';
import Authproviders from './Providers/Authproviders';
import Layout from './Components/Pages/Dashboard/Layout';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ManageUser from './Components/Pages/Dashboard/ManageUser';
import AddProduct from './Components/Pages/Dashboard/AddProduct';
import ReviewProducts from './Components/Pages/Dashboard/ReviewProducts';
import MyProducts from './Components/Pages/Dashboard/MyProducts/MyProducts';
import Payment from './Components/Pages/Dashboard/Payment/Payment';
import ProductDetails from './Components/Pages/ProductDetails/ProductDetails';
import AddReviews from './Components/Pages/Reviews/AddReviews';

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
        path : '/product/:id',
        element : <PrivateRoute> <ProductDetails></ProductDetails></PrivateRoute>
      },
      {
        path : '/addreview/:id',
        element : <PrivateRoute> <AddReviews></AddReviews></PrivateRoute>
      }
      
    ]
  },
  {
    path : '/dashboard' ,
    element : <Layout></Layout>,
    children  : [
      {
        path : '/dashboard' , 
        element : <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>
      },
      {
        path : '/dashboard/users' ,
        element : <ManageUser></ManageUser>
      },
      {
        path: '/dashboard/addproduct',
        element: <AddProduct></AddProduct>
      },
      {
        path :  '/dashboard/reviewproduct',
        element : <ReviewProducts></ReviewProducts>
      },
      {
        path: '/dashboard/myproducts',
        element: <MyProducts></MyProducts>
      },
      {
        path : '/dashboard/payment',
        element :<PrivateRoute> <Payment></Payment></PrivateRoute>
      }
    ]
  }
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
