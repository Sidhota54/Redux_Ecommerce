import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const SearchBar = ({ }) => {
  const [query, setQuery] = useState('');
  const [productData, setProductData] = useState([]);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products?limit=100`).then((response) => {
      setProductData(response?.data?.products);

    }).catch(error => {
      setError(error);
    });
  }, [])

  useEffect(() => {
    if (query) {
      if (productData) {
        const resultDetails = productData?.filter((product) => product?.title?.toLowerCase().includes(query.toLowerCase()));
        setResults(resultDetails);
      }
    }
    else {
      setResults([]);
    }
  }, [query]);
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className='my-auto relative'>
      <input type="text" placeholder="Search..." className=' text-sm w-full px-4 py-1 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40' value={query} onChange={handleInputChange} />
      {results.length !== 0 ?
        <ul className='absolute z-20 w-[300px] h-[300px] rounded-lg text-left right-[1%] text-sm bg-white py-4  shadow-lg  overflow-y-scroll '>
          {results?.map((result) => {
            return (
              <li key={result.id} className='px-4 my-2 hover:bg-slate-400 hover:text-white py-2  '><Link className='line-clamp-1' to={`/product/${result?.id}`}>{result.title}</Link></li>)
          })}
        </ul> : null
      }
    </div>
  )
}

export default SearchBar