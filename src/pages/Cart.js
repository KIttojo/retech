import React, {useState, useEffect} from 'react';
import {getUserProducts} from '../api/firebase';
import Header from '../components/Header/Header';
import { Products, BuyForm } from '../components/Cart/Cart';

const CartPage = () => {
  const [products, setProducts] = useState([]);

  const removeItem = (id) => {
    setProducts(prev => {
      const newProducts = prev.filter(item => item.id !== id);
      localStorage.setItem('card', JSON.stringify(newProducts));
      return newProducts;
    });
  }

  useEffect(async () => {
    const productIDs = JSON.parse(localStorage.getItem('card')) || [];
    const data = await getUserProducts(productIDs);
    setProducts(data);
  }, []);
  
  return (
    <div className="Container">
      <Header card={products}/>
      <Products items={products} removeItem={removeItem}/>
      <BuyForm products={products}/>
    </div>
  );
};

export default CartPage;

