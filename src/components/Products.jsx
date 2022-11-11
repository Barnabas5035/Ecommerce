import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Footer from './Footer'

const Products = () => {
  const [data, setData] = useState([])
  const [filter, setfilter] = useState(data)
  const [loading, setLoading] = useState(false)
  let componentMounted = true

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch('https://fakestoreapi.com/products')
      if (componentMounted) {
        setData(await response.clone().json())
        setfilter(await response.json())
        setLoading(false)
        console.log(filter)
      }
      return () => {
        componentMounted = false
      }
    }
    fetchData()
  }, [])
  if (loading) {
    return <>loading....</>
  }
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
            {filter.map((product) => {
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
                          to={`/Products/${product.id}`}
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
