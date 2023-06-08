import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BsHandbagFill } from 'react-icons/bs'
import Reactstorefrontlogo from '../Images/Logo/react-storefront-logo.svg'

const Navbar = () => {
  const items = useSelector((state) => state.cart); //get data from store => cart

  return (
    <nav className='flex justify-between py-2 box-padding bg-gray-600'>
      <Link to="/">
        <img className='w-[250px] py-2' src={Reactstorefrontlogo} alt="react-storefront-logo" />
      </Link>
      <div className='font-bold text-white flex flex-row'>
        <Link to="/" className='p-4'>Home </Link>
        <div className='py-2 px-4 relative'><Link to="/cart" ><BsHandbagFill size={28} /></Link> <span className='absolute top-0 right-0 px-[9px] py-[3px] rounded-full  bg-yellow-400 text-black text-[12px]'>{items.length}</span> </div>
      </div>
    </nav>
  )
}
export default Navbar