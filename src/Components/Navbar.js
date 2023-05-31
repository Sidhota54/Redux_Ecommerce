import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BsHandbagFill } from 'react-icons/bs'

const Navbar = () => {
  const items = useSelector((state) => state.cart); //get data from store => cart

  return (
    <div className='flex justify-between my-5 '>
      <Link to="/">
        <div >
        <img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" />
        <h1 className=''>React Redux</h1>
        </div>
      </Link>
      <div className='font-bold flex flex-row'>
        <Link to="/" className='p-4'>Home </Link>
        <div className='py-2 px-4 relative'><Link to="/cart" ><BsHandbagFill size={28} /></Link> <span className='absolute top-0 right-0 px-[9px] py-[3px] rounded-full  bg-yellow-400 text-black text-[12px]'>{items.length}</span> </div>
      </div>
    </div>
  )
}
export default Navbar