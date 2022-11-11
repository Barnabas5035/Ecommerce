import React from 'react'

import Navbar from './components/Navbar'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Products from './components/Products'
import Product from './components/Product'
import About from './components/About'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/Checkout' element={<Checkout />} />

        <Route path='/Cart' element={<Cart />} />

        <Route path='/products/:id' element={<Product />} />
      </Routes>
    </>
  )
}

export default App
