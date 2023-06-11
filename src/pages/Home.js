import React from 'react'
import Products from '../Components/Products'
import SearchBar from '../Components/Tools/SearchBar'

const Home = () => {
  return (
    <div className='text-center font-serif'>
        <h1 className='font-bold text-3xl  my-5'>Welcome to the Redux toolkit Store</h1>
        <h2 className='text-gray-800 font-mono'><strong>source code is available on <a href="https://github1s.com/Sidhota54/Redux_Ecommerce/blob/HEAD/src/App.js"><span className='text-blue-700 underline hover:text-gray-500'>github</span></a></strong></h2>
        <section>
          <div className='flex  sm:flex-row flex-col gap-2  justify-between p-5'>
          <h3 className='font-semibold text-2xl mt-2 mb-5 '>Products</h3>
          <SearchBar />
          </div>
            <Products />
        </section>
    </div>
  )
}
export default Home