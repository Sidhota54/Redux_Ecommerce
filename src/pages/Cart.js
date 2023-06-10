import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';

const Cart = () => {
    const dispatch = useDispatch();
    const productsOnCart = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    }
    const totalPrice = productsOnCart?.reduce(
        (total, items) => total + items?.price,
        0
    );

    if (totalPrice === 0) {
        return (
            <div className='md:px-10 md:py-4 py-8 px-4 my-20 bg-white rounded-lg  shadow-sm w-full h-fit flex sm:flex-row flex-col sm:justify-between sm:gap-10 gap-5  items-center text-center'>
                <div><TiShoppingCart size={50} /> </div>
                <h2 className=' font-semibold md:text-xl text-md  font-serif '> Your Cart is empty</h2>
                <div><Link className='px-6 py-2  font-serif uppercase font-semibold bg-yellow-500 text-sm rounded-lg ' to="/"> Return To Shop</Link>
                </div>
            </div>
        )
    }

    return (
        <div className='mb-20'>
            <h3 className='my-10 font-semibold font-serif text-3xl'>Cart</h3>
            <ul className='w-full flex flex-col   gap-5 '>
                {productsOnCart?.map((product) => {
                    return (
                        <li key={product?.id} className='flex sm:flex-row  sm:justify-between gap-5 bg-white md:px-10  md:py-4 p-4 rounded-lg shadow-sm hover:shadow-xl transform transition duration-500 hover:scale-110'>
                            <Link to={`/product/${product?.id}`}><img className='w-[80px] h-[80px] my-auto object-contain ' src={product?.image} alt={product?.title} /></Link>
                            <div className='flex flex-col w-full my-auto text-md font-medium text-center'>
                                <h4 className='font-semibold md:text-xl text-md mb-5 font-serif md:line-clamp-2 line-clamp-3'>  <Link to={`/product/${product?.id}`}>{product?.title}</Link></h4>
                                <h5 className='md:text-lg text-sm font-serif mb-2'><strong>Price: &nbsp;</strong>
                                    <span className='font-mono md:text-xl text-md'>{product?.price}$</span>
                                </h5>
                                <div className='my-auto  sm:hidden block'><button onClick={() => handleRemove(product.id)} className='px-4 py-1 rounded-md text-md font-semibold bg-red-500 text-white'> Remove</button></div>
                            </div>
                            <div className='my-auto  sm:block hidden '><button onClick={() => handleRemove(product.id)} className='px-4 py-1 rounded-md text-md font-semibold bg-red-500 text-white'> Remove</button></div>
                        </li>
                    )
                })}
            </ul>
            <div className=' mt-10 md:px-10 md:py-4 py-8 px-4 bg-white rounded-lg justify-between  shadow-sm min-w-[100%] flex sm:flex-row  sm:gap-10 gap-5  items-center text-center'>
                <h2 className=' font-semibold md:text-xl text-md  font-serif '> Total Price:- </h2>
                <div><span className='font-mono md:text-xl text-md'>{totalPrice}$</span> </div>
            </div>
        </div>
    )
}

export default Cart