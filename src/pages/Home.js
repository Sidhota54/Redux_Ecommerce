import React from 'react'
import Products from '../Components/Products'

const Home = () => {
  return (
    <div className='text-center'>
        <h2 className='font-bold text-3xl my-10'>Wellcome to the Redux toolkit Store</h2>
        <section>
            <h3 className='font-semibold text-2xl mb-5'>Products</h3>
            <Products />
        </section>
    </div>
  )
}

export default Home