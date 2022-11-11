import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Checkout = () => {
  const state = useSelector(state.handleCart)
  const total = 0
  const amount = 0
  const itemList = (product) => {
    total = total + product.price
    amount = product.quantity * product.price
    return (
      <li className='list-groug-item d-flex justify-content-betweenn 1h-sm'>
        <div>
          <h6 className='my-0'>{product.title}</h6>
          <span className='text-muted'>
            {product.quantity} x ${product.price}
          </span>
        </div>
        <span className='text-dark fst-normal'>${amount}</span>
      </li>
    )
  }
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-md-5 col-lg-4'>
          <br />
          <br />
          <h4 className='d-flex'>
            <span className='display-6'>order summary</span>
            <span className='badge bg-dark rounded-pill'>{state.length}</span>
          </h4>
          <ul className='list-group'>
            {state.map(itemList)}
            <li className='list-group-item d-flex justify-content-between'>
              <span>Total</span>${total}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Checkout
