import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { createBrowserRouter } from 'react-router-dom'
// import { RouterProvider } from 'react-router'
// import CreateTrip from './create-trip'
// import Header from './components/custom/Header'
// import { Toaster } from './components/ui/sonner'
// import { GoogleOAuthProvider } from '@react-oauth/google'
// import ViewTrip from './view-trip'
// import MyTrips from './my-trips'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<App/>
//   },
//   {
//     path: 'create-trip',
//     element:<CreateTrip/>
//   },
//   {
//     path: '/view-trip/:tripID',
//     element: <ViewTrip />
//   },
//   {
//     path: '/my-trips',
//     element: <MyTrips />
//   }
// ])

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
//       <Header />
//       <Toaster />
//       <RouterProvider router={router} />
//     </GoogleOAuthProvider>
    
//   </StrictMode>,
// )
