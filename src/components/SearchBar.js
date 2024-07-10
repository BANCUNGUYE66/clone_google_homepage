// src/components/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`You searched for: ${query}`);
  };

  return (
    <div className="search">
      <img 
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
        alt="Google Logo"
        className="search__logo"
      />
      <form className="search__form" onSubmit={handleSearch}>
        <input 
          type="text" 
          className="search__input" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="search__buttons">
          <button type="submit">Google Search</button>
          <button type="button">I'm Feeling Lucky</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
