import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
import Contact from './components/Contact/Contact.jsx'
import AboutUs from './components/About/AboutUs.jsx'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './components/Users/Users.jsx'

const router =  createBrowserRouter([

  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element:<AboutUs></AboutUs>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },

      {
path: '/users',
loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
element: <Users></Users>
      }

    ]
  },
  {
    path: '/about',
    element: <div>I am in the about page</div>
  },
  {
    path: '/contact',
    element: <div>I am in the contact page</div>
  },
{
  path: 'header',
  element: <Header></Header>
}


])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />

    </StrictMode>,
)
