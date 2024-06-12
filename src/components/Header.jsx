import React from 'react'
import Navbar from './Header/Navbar'
import Home from './Header/Home'
import Details from './Header/Details'

const Header = () => {
  return (
    <header>
      <Navbar/>
      <Home/>
      <Details/>
    </header>
  )
}

export default Header
