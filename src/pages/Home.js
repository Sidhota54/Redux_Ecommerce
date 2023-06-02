import React from 'react'
import Products from '../Components/Products'

const Home = () => {
  return (
    <div className='text-center'>
        <h1 className='font-bold text-3xl my-5'>Wellcome to the Redux toolkit Store</h1>
        <h2 className='text-gray-800 font-mono'><strong>source code is available on <a href="https://github1s.com/Sidhota54/Redux_Ecommerce/blob/HEAD/src/App.js"><span className='text-blue-700 underline hover:text-gray-500'>github</span></a></strong></h2>
        <section>
            <h3 className='font-semibold text-2xl mb-5'>Products</h3>
            <Products />
        </section>
    </div>
  )
}
export default Home