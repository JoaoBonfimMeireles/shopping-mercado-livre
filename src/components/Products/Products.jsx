import React, { useState, useEffect } from 'react';

import './Products.css';
import featchProducts from '../../api/featchProducts';
import ProductsCard from '../ProductCard/ProductCard';

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    featchProducts('iphone').then((response) => {
      setProducts(response.results);
    });
  }, []);

  return (
    <section className="products container">
      {
        products.map((product) => <ProductsCard key={product.id} data={product}/>)
      }
    </section>
  );
}

export default Products;
