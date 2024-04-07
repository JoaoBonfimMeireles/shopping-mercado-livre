import React from 'react';
import PropTypes from 'prop-types';
import { BsCartX } from 'react-icons/bs';
// import formatCurrency from '../../utils/formatCurrency';

import './CartItem.css';

function CartItem({ data }) {

  const { thumbnail, title, price } = data;

  return (
    <section className="cart-item">
      <img src={thumbnail}
        alt="asd"
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{price}</h3>
        <button
          type="button"
          className="button__remove-item"
        ><BsCartX />
        </button>
      </div>
    </section>
  );
}

CartItem.propTypes = {
  data: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default CartItem;


