import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
  return (
    <div className="sticky-top">
      <nav className='navbar navbar-expand-lg navbar-light bg-info py-3'>
        <div className='container-fluid'>
          <Link className='navbar-brand fw-bold fs-4' to='/'>
            LA COLLECTION
          </Link>
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
              <Link to='Cart' className='btn btn-outline-dark ms-2'>
                <i className='fa fa-shopping-cart me-1'></i>
                cart({state.length})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

