import React from 'react'
import Products from '../Components/Products'

const Home = () => {
  return (
    <div className='text-center font-serif'>
        <h1 className='font-bold text-3xl  my-5'>Welcome to the Redux toolkit Store</h1>
        <h2 className='text-gray-800 font-mono'><strong>source code is available on <a href="https://github1s.com/Sidhota54/Redux_Ecommerce/blob/HEAD/src/App.js"><span className='text-blue-700 underline hover:text-gray-500'>github</span></a></strong></h2>
        <section>
            <Products />
        </section>
    </div>
  )
}
export default Home