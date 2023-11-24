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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement : <Error></Error>,
    children : [
      {
        path : '/',
        element : <Home> </Home>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
