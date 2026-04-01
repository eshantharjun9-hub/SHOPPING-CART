import React, { useState } from 'react';
const Shopping = ({ addItem, removeItem, updateQuantity, cart }) => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const handleAdd = () => {
    if (!product || !quantity || !price) {
      alert("Add item first...")
      return
    };
    addItem({ product, quantity: Number(quantity), price: Number(price) });
    setProduct('');
    setQuantity('');
    setPrice('');
  };
  return (
    <>
      <div className='cart-content'>
        <div>
          <h2>Add Products</h2>
          <div className='input-group'>
            <input
              type="text"
              placeholder='Product Name'
              value={product}
              onChange={e => setProduct(e.target.value)} />
            <input
              type="number"
              placeholder='Enter Quantity'
              min={0}
              step={0.5}
              value={quantity}
              onChange={e => setQuantity(e.target.value)} />
            <input
              type="number"
              placeholder='Enter Price'
              min={0}
              step={0.01}
              value={price}
              onChange={e => setPrice(e.target.value)} />
            <button className='btn' onClick={handleAdd}>Add Items</button>
          </div>
        </div>
      </div>
      <br />
      <h2>Your Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, idx) => (
            <tr key={idx}>
              <td>{item.product}</td>
              <td>{item.price}</td>
              <td>
                <div className='quantity-controls'>
                  <button className='qty-btn' onClick={() => updateQuantity(idx, item.quantity - 0.5)}>-</button>
                  <span className='qty-display'>{item.quantity}</span>
                  <button className='qty-btn' onClick={() => updateQuantity(idx, item.quantity + 0.5)}>+</button>
                </div>
              </td>
              <td>{(item.price * item.quantity).toFixed(2)}</td>
              <td><button onClick={() => removeItem(idx)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='cart-total'>
        <h3>Cart Total: ₹{cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</h3>
      </div>
    </>
  );
};

export default Shopping;