import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './create-page/Hero';
import ServiceJZ from './create-page/ServiceJZ';
import ServiceEP from './create-page/ServiceEP';
import About from './create-page/About';
import Events from './create-page/Events';
import Welcome from './create-page/Welcome';
import MainLayout from './create-page/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Hero /> },
      { path: '/servicejz', element: <ServiceJZ /> },
      { path: '/serviceep', element: <ServiceEP /> },
      { path: '/acerca', element: <About /> },
      { path: '/eventos', element: <Events /> },
      { path: '/bienvenida', element: <Welcome /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
