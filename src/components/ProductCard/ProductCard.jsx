import React from 'react';
import PropTypes from 'prop-types';
import { MdAddShoppingCart } from 'react-icons/md';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';

function ProductsCard({ data }) {

  const { title, thumbnail, price } = data;

  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card__image"
      />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button type="button" className="button__add-card">
        <MdAddShoppingCart />
      </button>
    </section>
  );
}

ProductsCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default ProductsCard;
