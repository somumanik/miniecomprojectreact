import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'


export default function MainLayout() {
  return (
    <div>
     <Header/>
            <Outlet/>
     <Footer/>
    </div>
  )
}
