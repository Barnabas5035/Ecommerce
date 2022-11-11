import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearCart } from '../redux/action'
import { AddCart } from '../redux/action'
import { Link } from 'react-router-dom'

const Cart = () => {
  const state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch()

  const delProduct = (product) => {
    dispatch(clearCart(product))
  }
  const addProduct = (product) => {
    dispatch(AddCart(product))
  }
  const product = (product) => {
    return (
      <div className='px-4 my-5 bg-white rounded-3' key={product.id}>
        <div className='container py-4'>
          <div className='row'>
            <div className='col-md-2'>
              <img
                src={product.image}
                alt={product.title}
                height='60%'
                width='60%'
              />
            </div>
            <div className='col-md-6'>
              <h6 className='display-6'>{product.title}</h6>
              <p className='lead'>
                {product.quanlity}x${product.price}=$
                {product.quanlity * product.price}
              </p>
              <button
                className='btn btn-outline-dark me-4'
                onClick={() => delProduct(product)}
              >
                <FaMinus />
              </button>
              <button
                className='btn btn-outline-dark me-4'
                onClick={() => addProduct(product)}
              >
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    )
  }
  const emptyCart = () => {
    return (
      <div className='px-4 my-5 bg-white rounded-3 py-5'>
        <div className='container py-4'>
          <div className='row justify-content-center'>
            <h3 className='text-center'>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    )
  }
  const Button = () => {
    return (
      <div className='container'>
        <div className='row'>
          <Link to='/Checkout' className='btn btn-dark mb-5 w-25 mx-auto'>
            proceed to Checkout
          </Link>
        </div>
      </div>
    )
  }
  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(product)}
      {state.length !== 0 && Button()}
    </>
  )
}

export default Cart
