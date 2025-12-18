import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import './index.css'
import AuthProvider from './Context/AuthPovider.jsx';

import App from './Router/App.jsx'
import { router } from './Router/routers.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>  
   <AuthProvider>
     <RouterProvider router={router} />,
   </AuthProvider>
  </StrictMode>,
)
