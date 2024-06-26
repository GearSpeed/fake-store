import ReactDOM from 'react-dom/client'
import {Toaster} from 'sonner'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from  './pages/loginPage';
import HomePage from './pages/homePage';
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/productDetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: < HomePage />,
  },
  {
    path: '/login',
    element: < LoginPage />,
  },
  {
    path: '/productos',
    element: < ProductsPage />,
  },
  {
    path: '/producto/:id',
    element: < ProductDetailPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <>
    <Toaster />
    <RouterProvider router={router}/>
  </>

)
