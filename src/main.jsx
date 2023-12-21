import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Components/Router/Router.jsx';
import { ThemeProvider } from '@material-tailwind/react';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
