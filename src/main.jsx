import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import Root from './layout/Root.Layout'
import RootLayout from './layout/Root.Layout'
const router=createBrowserRouter([
  { path:'/',
   element: <RootLayout/>,
   children:[{index:true, element:<h2>Home</h2>},
{path:'about', element:<h2 className='text-4xl bg-amber-600'>About</h2>},
{path:'contact', element:<h2 className='text'>Contact</h2>},
{path:'services', element:<h2>Services</h2>}

   ],

  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
