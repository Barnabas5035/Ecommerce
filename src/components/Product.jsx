import React from 'react'
import { useGlobalContext } from './cart_products'
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'

const Product = () => {
  const { id } = useParams()
  const { cart, toggleAmount } = useGlobalContext()

  const increase = () => {
    toggleAmount(id, 'inc')
  }
  const decrease = () => {
    toggleAmount(id, 'dec')
  }

  return (
    <div>
      <div className='container'>
        <div className='row py-4 md-4'>
          {cart.map((product) => {
            return (
              <div
                className='col d-flex justify-content-between md-4  p-5'
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  height='400px'
                  width='400px'
                />
                <div className='col-md-6'>
                  <h4 className='text-uppercase text-black-50'>
                    {product.category}
                  </h4>
                  <h1 className='display-5'>{product.title}</h1>
                  <p className='lead fw-bolder'>
                    Rating{product.rating && product.rating.rate}
                    <FaStar />
                  </p>
                  <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
                  <p className='lead'>{product.description}</p>
                  <button className='btn btn-dark ms-2 px-3 py-2'>
                    <FaPlus onClick={increase} />
                  </button>
                  <button className='btn btn-dark ms-2 px-3 py-2 '>
                    <FaMinus onClick={decrease} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Product
