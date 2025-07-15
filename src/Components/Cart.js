// src/components/Cart.js
import React from 'react';

function Cart({ cart }) {
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Cart;
