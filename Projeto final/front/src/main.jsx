import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import{createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routers/Home.jsx'
import Agenda from './routers/Agenda.jsx'
import ErrorPage from './routers/ErrorPage.jsx'
/* const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "contact",
    element: <Contact/>
  },
 ]) */
  const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/agenda",
        element: <Agenda/>
      },
    ],
  },
  
 ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
