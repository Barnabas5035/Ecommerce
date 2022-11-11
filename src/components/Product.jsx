import React from 'react'

import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AddCart } from '../redux/action'
const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const addProduct = (product) => {
    dispatch(AddCart(product))
  }

  useEffect(() => {
    const fetchSinleData = async () => {
      setLoading(true)
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      setProduct(await response.json())
      setLoading(false)
    }
    fetchSinleData()
  }, [])

  if (loading) {
    return <>loading...</>
  }

  return (
    <div>
      <div className='container'>
        <div className='row py-4 md-4'>
          <div className='col d-flex justify-content-between md-4  p-5'>
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
              <button
                className='btn btn-dark ms-2 px-4 py-2'
                onClick={() => addProduct(product)}
              >
                Add to cart
              </button>
              <Link to='/Cart' className='btn btn-dark ms-2 px-3 py-2 '>
                Go to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Product
