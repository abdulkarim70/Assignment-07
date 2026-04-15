import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import Timeline from './Pages/Timeline'
import Stats from './Pages/Stats'
const router=createBrowserRouter([
  { path:'/',
   element: <RootLayout/>,
   children:[{index:true, element:<h2>Home</h2>},
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
