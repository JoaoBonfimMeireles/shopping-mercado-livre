import React, { useState, useContext } from 'react';
import { MdSearch } from 'react-icons/md';
import featchProducts from '../../api/featchProducts';
import AppContext from '../../context/AppContext';

import './SearchBar.css';

function SearchBar() {

  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const products = await featchProducts(searchValue);
    setProducts(products.results);
    setLoading(false);
    setSearchValue('');
  };


  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search-input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <button
        type="submit"
        className="search-button"
      >
        <MdSearch />
      </button>
    </form>
  );
}

export default SearchBar;
