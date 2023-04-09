import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import MainJhankar from './component/Layout/MainJhankar';
import OrderReview from './component/OrderReview/OrderReview';
import LoadDataFromApi from './component/Header/DataLoader/DataLoader';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainJhankar></MainJhankar>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: LoadDataFromApi
      },
      {
        path: '/orders',
        element:<OrderReview></OrderReview>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
