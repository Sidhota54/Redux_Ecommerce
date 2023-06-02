import React from 'react'
import Products from '../Components/Products'

const Home = () => {
  return (
    <div className='text-center'>
        <h1 className='font-bold text-3xl my-10'>Wellcome to the Redux toolkit Store</h1>
        <h2 className='text-gray-800 font-mono'><strong>source code is available on <a href="https://github.com/Sidhota54/React_Redux"><span className='text-blue-700 underline hover:text-gray-500'>github</span></a></strong></h2>
        <section>
            <h3 className='font-semibold text-2xl mb-5'>Products</h3>
            <Products />
        </section>
    </div>
  )
}

export default Home