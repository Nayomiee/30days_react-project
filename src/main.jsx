import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import CounterApp from './Pages/CounterApp/CounterApp'
import Error from './Pages/Error/Error'
import Contact from './Pages/Contact/Contact'
import Projects from './Pages/Projects/Projects'

const router = createBrowserRouter([
  {path:'/', element:<Home/>,errorElement:<Error/>},
  {path:'/counterapp', element:<CounterApp/>},
  {path:'/contact', element:<Contact/>},
  {path:'/projects', element:<Projects/>}
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

