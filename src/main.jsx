import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import About from './components/About';
import Career from './components/Career';
import Login from './components/Login';
import Register from './components/Register';
import NewsDisplay from './components/NewsDisplay';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'career',
        element:<Career></Career>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'category/:id',
        element:<NewsDisplay></NewsDisplay>,
        loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
