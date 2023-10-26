
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { fetchData } from '../../../Redux/slices/dataSlice';

import './ProductList.css';


export default function ProductList() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const [priceFilter, setPriceFilter] = useState(0);
  const { data, status, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    setProduct(data)

  }, [dispatch]);

  // dummy data fetch 

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }


  const addToCart = () => {

    navigate('/');

  }
  const buyNow = () => {

  }


  
  const sortByPrice = () => {
    const sortedProduct = [...product]; 
    sortedProduct.sort((a, b) => a.price - b.price); 

    setProduct(sortedProduct); 
}


  return (
    <>

<div class="sort-container">
  <span class="sort-text">Sort By</span>
  <div onClick={sortByPrice} class="sort-button">Price -- Low to High</div>
</div>
      <div className='product_wrapper'>
        <div className="product-container">

          {product.length === 0 ? (
            <p className="loading-message">Loading...</p>
          ) : (
            product?.map((productList) => {
              return (
                <div key={productList.id} className="product-card">
                  <p>{productList.category}</p>
                  <div>{productList.rating.rate}</div>
                  <img src={productList.image} alt="product" />
                  <div>{productList.price}</div>

                  <div className='Product_Btn'>
                    <button  >BUY NOW</button>
                    <button onClick={() => navigate("../addtocart")}>ADD TO CART</button>
                  </div>

                </div>
              )
            })
          )}
        </div>
      </div>
    </>
  )

}








