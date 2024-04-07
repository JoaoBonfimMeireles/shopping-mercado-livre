import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import CartItem from '../CartItem/CartItem';

import './Cart.css';

function Cart() {
  const { cartItems } = useContext(AppContext);

  return (
    <section className="cart">
      <div className="cart-items">
        {cartItems.map((item) => <CartItem key={item.id} data={item} />)}
      </div>
      <div className="cart-resume"> resumo do carrinho</div>
    </section>
  );
}

export default Cart;
