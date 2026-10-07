import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import router from './router.jsx'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <>
   <RouterProvider router={router} />
   <ToastContainer autoClose={1000}/>
  </>
)
