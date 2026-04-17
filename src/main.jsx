import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Timeline from './Pages/Timeline'
import Stats from './Pages/Stats'
import HomePage from './Pages/HomePage'
import FriendDetails from './Pages/FriendDetails'
const router=createBrowserRouter([
  { path:'/',
   element: <RootLayout/>,
loader:async()=>{
  const res = await fetch('/Data.json')
  return res.json()
},

   children:[{index:true, element:<HomePage/>},
    {path:'friend/:id', element:<FriendDetails/>},
{path:'timeline', element:<Timeline/>},
{path:'stats', element:<Stats/>},


   ],

  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
