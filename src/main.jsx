import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Cart from './Pages/Cart'
import Error from './Pages/Error'
import Product from './pages/Product'
import MainLayout from './common/MainLayout'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/*' element={<Error/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
