import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Home from '../../pages/Home';
import ProductList from '../../pages/productPage/ProductList';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';
import AddToCart from '../../pages/addtocart/AddToCart'
import './Header.css'
import { FaBeer } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [addToCart,setAddToCart] = useState(5);
  const cartCount = useSelector((state) => state.cart.cart);

  return (
    <Router>
      <div >
        <nav>
          <ul>
            <li>

              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/product" >Product</Link>
            </li>
            <div className='search_product'>
              <FaBeer />
              <input type="search" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} placeholder='please search product' />
            </div>
            <div className='search_product'>
            <li>
              <Link to="/addtocart" >  <FontAwesomeIcon icon={faCartShopping} />:   {cartCount}</Link>
            </li>
            </div>
            <li>
              <Link to="/login" >Login</Link>
            </li>
            <li>
              <Link to="/register" >Register</Link>
            </li>
           

          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addtocart" element={<AddToCart />} />
        </Routes>
      </div>
    </Router>
  );
}
