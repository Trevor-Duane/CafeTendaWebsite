import React, { Children } from 'react'
import MyNavbar from '../../components/Navbar/MyNavbar'
import Footer from '../../components/Footer/Footer'

export default function Layout({children}) {
  return (
    <>
    <MyNavbar/>
    {
        children
    }
    <Footer/>
    </>
  )
}
