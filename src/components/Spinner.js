import React from 'react'

const Spinner = () => {
  return (
    <div className='d-flex my-4 justify-content-center'>
      <div class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner