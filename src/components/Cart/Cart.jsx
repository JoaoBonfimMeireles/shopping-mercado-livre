import React from 'react';
import CartItem from '../CartItem/CartItem';

import './Cart.css';

function Cart() {
  return (
    <section className="cart">
      <div className="cart-items">
        <CartItem data={{thumbnail: '', title: '', price: '123'}} />
      </div>
      <div className="cart-resume"> resumo do carrinho</div>
    </section>
  );
}

export default Cart;
