import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from "../store/cartSlice";
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';
import { Link } from 'react-router-dom';
import Loading from './Loader/Loading';
import SearchBar from './Tools/SearchBar';

const Products = () => {
    const dispatch = useDispatch();
    const productOncart = useSelector((state) => state.cart);
    const productData = useSelector((state) => state.product);
    const [products, setProducts] = useState([]);

    const handleAdd = (product) => {
        dispatch(add(product));
    }
    useEffect(() => {
        dispatch(fetchProducts());

    }, []);
    useEffect(() => {
        setProducts(productData?.data?.products);
    }, [productData])
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    }

    if (productData?.status === STATUSES.LOADING) {
        return (
            <Loading />
        )
    }
    else if (productData === STATUSES.ERROR) {
        return (
            <h2 className="text-red-500 text-md ">Something went wrong! </h2>
        )
    }
    const filterhandle = (filterValue) => {
        const filterProducts = [...products].sort((a, b) => {
            if (filterValue === "lowTohigh") {
                return a.price - b.price
            }
            else {
                return b.price - a.price
            }
        })
        setProducts(filterProducts)
    }


    return (
        <section>
            <div className='flex  sm:flex-row flex-col gap-2  justify-between p-5'>
                <h3 className='font-semibold text-2xl mt-2 mb-5 '>Products</h3>
                <div className='flex sm:flex-row  flex-col  gap-3'>
                    <div className='my-auto'>
                        <select name="filter" className=' text-sm w-full px-4 py-1  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 ' onChange={(e) => filterhandle(e.target.value)}>
                            <option defaultValue="0" >Select Filter</option>
                            <option className='px-2 py-2 ' value="lowTohigh">Price Low to High</option>
                            <option value="highTolow">Price High to Low</option>
                        </select>
                    </div>
                    <SearchBar />

                </div>
            </div>
            <div className='flex flex-wrap justify-center gap-5 mb-20 '>
                {products?.map((product) => {
                    return (
                        <div key={product?.id} className='bg-white rounded-2xl max-w-[280px] w-full h-auto p-4 space-y-4 flex flex-col justify-between transform transition duration-500 hover:scale-105'>
                            <Link to={`/Product/${product?.id}`}> <img className='object-contain w-full h-[200px]' src={product?.thumbnail} alt='' /></Link>
                            <h4 className='font-semibold line-clamp-2 '>{product?.title}</h4>
                            <h5 className='font-medium '>${product?.price}</h5>
                            {productOncart?.find(cartItem => cartItem?.id === product?.id) ?
                                <button onClick={() => handleRemove(product.id)} className='px-4 py-2 bg-red-500 text-sm font-mono text-white font-semibold'>Remove</button> :
                                <button onClick={() => handleAdd(product)} className='px-4 py-2 bg-yellow-300 text-sm font-mono'>Add To cart</button>
                            }
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Products