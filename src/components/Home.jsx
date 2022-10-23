import React from 'react'

import Products from './Products'
const Home = () => {
  return (
    <div className='hero'>
      <div className='card text-white border-0'>
        <img
          src='https://sewguide.com/wp-content/uploads/2019/05/accessories-in-fashion4.jpg'
          className='card-img'
          alt='Background'
          height='550px'
        />
        <div className='card-img-overlay d-flex flex-column justify-content-center'>
          <div className='container'>
            <h5 className='card-title display-3 fw-bolder mb-0 text-black'>
              NEW SEASON ARRIVALS
            </h5>
            <p className='card-text lead fs-2 text-light text-black'>
              CHECKOUT THE NEW TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  )
}

export default Home
