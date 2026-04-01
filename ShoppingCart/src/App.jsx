import { useState } from 'react'
import './App.css'
import React from 'react'
import Head from './Components/Head'
import InputBox from './Components/InputBox'
import Shopping from './Components/Shopping'
import CartItems from './Components/CartItems'


const App = () => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart(prev => [...prev, item]);
  };

  const removeItem = (idx) => {
    setCart(prev => prev.filter((_, index) => index !== idx));
  };

  const updateQuantity = (idx, newQuantity) => {
    setCart(prev => {
      const updated = [...prev];
      updated[idx].quantity = Math.max(0.5, Number(newQuantity));
      return updated;
    });
  };

  return (
    <>
      <div className='ipt-box'>
        <Head />
        <Shopping addItem={addItem} removeItem={removeItem} updateQuantity={updateQuantity} cart={cart} />
        
      </div>
    </>
  )
}

export default App