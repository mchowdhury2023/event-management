import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import AuthProvider from './authentication/AuthProvider.jsx';
import ServiceDetails from './component/ServiceDetails/ServiceDetails.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import 'react-toastify/dist/ReactToastify.css';
import About from './pages/About/About.jsx';
import JoinUs from './pages/JoinUs/JoinUs.jsx';
import Services from './pages/Services/Services.jsx';
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch('/services.json')
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/services/:id',
        element:<PrivateRoute>
              <ServiceDetails></ServiceDetails>,
        </PrivateRoute>
     
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/career',
        element: <PrivateRoute>
                    <JoinUs></JoinUs>
                </PrivateRoute>
      },
      {
        path:'/services',
        element: <PrivateRoute>
                    <Services></Services>
                </PrivateRoute>

      },
      {
        path: "*", 
        element: <PageNotFound></PageNotFound>
    }
      
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
