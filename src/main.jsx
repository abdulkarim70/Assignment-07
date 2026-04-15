import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import Timeline from './Pages/Timeline'
import Stats from './Pages/Stats'
import HomePage from './Pages/HomePage'
const router=createBrowserRouter([
  { path:'/',
   element: <RootLayout/>,
loader:async()=>{
  const res = await fetch('/Data.json')
  return res.json()
},

   children:[{index:true, element:<HomePage/>},
{path:'/timeline', element:<Timeline/>},
{path:'/stats', element:<Stats/>},


   ],

  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
