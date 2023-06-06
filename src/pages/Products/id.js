import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Loading from '../../Components/Loader/Loading';
// import { useDispatch, useSelector } from 'react-redux';
// import { productById } from '../../store/productSlice';

const Product = () => {
    const { id } = useParams();
    // const dispatch = useDispatch();
    // const productDetails = dispatch(productById(id));
    const [productDetails, setProductDetails] = useState(null);
    useEffect(() => {
        const fetchProductById = async (productId) => {
            const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
            const data = await res.json();
            setProductDetails(data);
        }
        fetchProductById(id)
    }, [id])
    if (productDetails === null) {
        return (<Loading/>)
    }
    return (
        <section className='bg-white p-8 flex flex-row h-full w-full rounded-2xl '>
            <img className='w-1/2 max-h-[300px] object-contain' src={productDetails?.image}></img>
            <div className='w-1/2'>
                <h1 className='text-3xl font-semibold'>{productDetails?.title}</h1>
                <h3 className='text-xl '>{productDetails?.category}</h3>
                <h5>
                    {productDetails?.price}
                </h5>
                <span>{productDetails?.rating?.rate}/{productDetails?.rating?.count}</span>
                <span></span>
                <p className='text-md'>{productDetails?.description}</p>
            </div>
        </section>
    )
}

export default Product