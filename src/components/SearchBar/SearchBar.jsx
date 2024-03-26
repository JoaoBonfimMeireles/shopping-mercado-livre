import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

import './SearchBar.css';

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');


  return (
    <form className="search-bar">
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
