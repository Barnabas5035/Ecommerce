import React from 'react'

const Footer = () => {
  return (
    <footer className='footer   pb-2 d-flex justify-content-center text-center bg-info'>
      <h5 className='bg-info fw-400 text-transform flex-direction-row mt-4'>
        &copy; {new Date().getFullYear()}
        <span> Comfy Sloth</span>
      </h5>
      <h5 className='bg-info fw-400 flex-direction-row mt-4'>
        All rights reserved
      </h5>
    </footer>
  )
}

export default Footer
