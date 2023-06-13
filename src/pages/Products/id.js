import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Loading from '../../Components/Loader/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../../store/cartSlice';


const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [productDetails, setProductDetails] = useState(null);
    useEffect(() => {
        const fetchProductById = async (productId) => {
            const res = await fetch(`https://dummyjson.com/products/${productId}`)
            const data = await res.json();
            setProductDetails(data);
        }
        fetchProductById(id)
    }, [id]);
  
    const productOncart = useSelector((state) => state.cart);
    const handleAdd = (product) => {
        dispatch(add(product));
    }
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    }
    if (productDetails === null) {
        return (<Loading />)
    }
    return (
        <section className='bg-white my-20 p-8 grid md:grid-cols-2 grid-cols-1 gap-10 h-fitss w-full rounded-2xl mb-20 '>
            <img className=' m-auto max-h-[300px] object-contain' src={productDetails?.thumbnail}></img>
            <div className=''>
                <h1 className='text-3xl font-semibold mb-5 font-serif'>{productDetails?.title}</h1>
                <p className='text-md font-serif mb-3'>{productDetails?.description}</p>
                <h3 className='text-lg font-serif mb-2'><strong>category:&nbsp;</strong>{productDetails?.category}</h3>
                <h5 className='text-lg font-serif mb-2'><strong>Price: &nbsp;</strong>
                    <span className='font-mono text-xl'>{productDetails?.price}$</span>
                </h5>
                <div className='grid grid-cols-2 gap-10 text-lg font-serif mb-5'>
                    <div><strong>Rating: &nbsp;</strong><span className='font-mono text-xl'>{productDetails?.rating}/5</span></div>
                    <div><strong>Available: &nbsp;</strong><span className='font-mono text-xl'>{productDetails?.stock}</span></div>
                </div>
                {productOncart?.find(cartItem => cartItem?.id === productDetails?.id) ?
                    <button onClick={() => handleRemove(productDetails?.id)} className='w-full  px-4 py-2 bg-red-500 text-sm font-mono text-white font-semibold'>Remove</button> :
                    <button onClick={() => handleAdd(productDetails)} className='px-4 py-2 w-full bg-yellow-300 text-sm font-mono'>Add To cart</button>
                }
            </div>
        </section>
    )
}

export default Product