import React from 'react'
import error404 from '../assets/images/error_image.gif'

const ErrorPage = () => {
  return (
    <>
    <section className='ErorPage'>
        <div className="w-full h-screen">
            <img className='w-full h-screen' src={error404} alt="show error image" />
        </div>
    </section>
    </>
  )
}

export default ErrorPage