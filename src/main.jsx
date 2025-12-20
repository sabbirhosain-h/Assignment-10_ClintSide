import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import './index.css'
import AuthProvider from './Context/AuthPovider.jsx';

import App from './Router/App.jsx'
import { router } from './Router/routers.jsx';
import ThemeProvider from './Context/ThemeProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>  
   <AuthProvider>
     <ThemeProvider>
      <RouterProvider router={router} />
     </ThemeProvider>
   </AuthProvider>
  </StrictMode>,
)
