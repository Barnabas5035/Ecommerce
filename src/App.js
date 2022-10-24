import React from 'react'

import Navbar from './components/Navbar'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Products from './components/Products'
import Product from './components/Product'
import About from './components/About'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/products/:id' element={<Product />} />
      </Routes>
    </>
  )
}

export default App
