import React, { useEffect, useContext } from 'react';

import './Products.css';
import featchProducts from '../../api/featchProducts';
import ProductsCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

function Products() {

  const { products, setProducts, loading, setLoading } = useContext(AppContext);

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
