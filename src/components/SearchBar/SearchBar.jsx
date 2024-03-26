import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import featchProducts from '../../api/featchProducts';

import './SearchBar.css';

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    const products = await featchProducts(searchValue);
    console.log(products.results);
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
