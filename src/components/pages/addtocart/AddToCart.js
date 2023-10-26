import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddToCart.css';
import { increment, decrement } from '../../../Redux/slices/cartSlice';

export default function AddToCart({ item }) {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.cart);

  useEffect(() => {
    singleProduct();
  }, [dispatch]);

  const singleProduct = () => {
    axios.get('https://fakestoreapi.com/products/1').then((data) => {
      setProduct(data.data);
    });
  }

  return (
    <div className='addtocart'>
      <div className='addtocart_Product'>
        <div className='addtocart_image'>
          <img src={product.image} alt="product" />
          <div className='addtocart_inc_decbtn'>
            <button className='incbtn' onClick={() => {
              dispatch(increment());
            }}>+</button>
            <div className='addtocart_conter'>{cartCount}</div>
            <button className='incbtn' onClick={() => {
              dispatch(decrement());
            }}>-</button>
          </div>
        </div>
        <div className='addtocart_description'>
          <p>{product.description}</p>
        </div>
        
      </div>
      <button>payment</button>
    </div>
  )
}
