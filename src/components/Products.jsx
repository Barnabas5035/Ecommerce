import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './cart_products'
import Footer from './Footer'

const Products = () => {
  const { cart } = useGlobalContext()

  return (
    <div>
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <div className='display-6 fw-bolder text-center'>
              Latest Products
              <hr />
            </div>
          </div>
          <div className='row d-flex justify-content-center mb-5 pb-5'>
            {cart.map((product) => {
              return (
                <>
                  <div className='col-md-3 mb-4'>
                    <div
                      className='card h-100 text-center p-4'
                      key={product.id}
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        height='250px'
                      />
                      <div className='card-body'>
                        <h5 className='card-title mb-0'>
                          {product.title.substring(0, 12)}
                        </h5>
                        <p className='card-text lead fw-blod'>
                          ${product.price}
                        </p>
                        <Link
                          to={`/Products/${Product.id}`}
                          className='btn btn-primary'
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Products
