import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterContextProvider, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import Login from './pages/authentication/Login.jsx'
import Signup from './pages/authentication/Signup.jsx'
import {Provider} from "react-redux"
import { store } from './store/store.js'

const router = createBrowserRouter([

  {
      path:"/",element:<Home/>
  },
    {
      path:"/login",element:<Login/>
  },
  {
      path:"/signup",element:<Signup/>
    }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    
       <App/>
  </Provider>


   

)
