import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './cart_products'
import Products from './Products'
const Navbar = () => {
  const {  cart } = useGlobalContext()

  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-info shadow-sm py-3'>
        <div className='container'>
          <a className='navbar-brand fw-bold fs-4' href='#'>
            LA COLLECTION
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/products'>
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
              </li>
            </ul>
            <div className='button'>
              <Link to='/login' className='btn btn-outline-dark'>
                <i className='fa fa-sign-in me-1'></i>
                Login
              </Link>
              <Link to='/registr' className='btn btn-outline-dark ms-2'>
                <i className='fa fa-user-plus me-1'></i>
                Register
              </Link>
              <Link
                to={`/Products/${Products.id}`}
                className='btn btn-outline-dark ms-2'
              >
                <i className='fa fa-shopping-cart me-1'>{cart.length}</i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
