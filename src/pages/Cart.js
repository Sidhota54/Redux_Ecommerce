import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const productsOnCart = useSelector((state) => state.cart);
    const handleRemove= (productId)=>{
        dispatch(remove(productId));
    }

    return (
        <div className='mb-20'>
            <h3 className='my-10 font-semibold text-3xl'>Cart</h3>
            <div className='w-full flex flex-col   gap-5 '>
                {productsOnCart?.map((product) => {
                    return (
                        <div key={product?.id} className='flex flex-row  justify-between gap-10 bg-white px-10 py-4 rounded-lg shadow-sm hover:shadow-xl transform transition duration-500 hover:scale-110'>
                            <img className='w-[80px] h-[80px] ' src={product?.image} alt={product?.title} />
                            <div className='flex flex-col my-auto text-md font-medium text-center'>
                                <h4>{product?.title}</h4>
                                <h5>{product?.price}</h5>
                            </div>
                            <div className='my-auto '><button onClick={() => handleRemove(product.id)} className='px-4 py-1 rounded-md text-md font-semibold bg-red-500 text-white'> Remove</button></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart