import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './Provider/AuthProvider';
import PrivetRoute from './components/PrivetRoute';
import Order from './components/Order';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Abrar from './components/Abrar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "/login",
        element: <Login></Login>
      },

      {
        path: "/register",
        element: <Register></Register>
      },

      {
        path: "/order",
        element: <PrivetRoute><Order></Order></PrivetRoute>
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/abrar",
        element: <Abrar></Abrar>
      },
      
    ]
    
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
