import React, { useState, useEffect } from 'react';

import './Products.css';
import featchProducts from '../../api/featchProducts';
import ProductsCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';

function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    featchProducts('iphone').then((response) => {
      setProducts(response.results);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading />) || (
      <section className="products container">
        {products.map((product) => <ProductsCard key={product.id} data={product} />)}
      </section>
    )
  );
}

export default Products;
