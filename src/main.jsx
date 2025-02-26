import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import ServiceJZ from './create-page/ServiceJZ'
import ServiceEP from './create-page/ServiceEP'
import About from './create-page/About'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/servicejz',
    element:<ServiceJZ />
  },
  {
    path:'/serviceep',
    element: <ServiceEP />
  },
  {
    path:'/acerca',
    element: <About />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
