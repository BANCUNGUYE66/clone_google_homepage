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
        src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png" 
        alt="Google Logo"
        className="search__logo"
      />
      <form className="search__form" onSubmit={handleSearch}>
        <div className="search__input-container">
          <img src="https://img.icons8.com/material-rounded/24/9aa0a6/search.png" alt="Search Icon" className="search__icon"/>
          <input 
            type="text" 
            className="search__input" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className='search__icons'>
            <img src="https://img.icons8.com/material-rounded/24/9aa0a6/microphone.png" alt="Microphone Icon" className="microphone__icon"/>
            <img src="https://img.icons8.com/material-rounded/24/9aa0a6/camera.png" alt="Camera Icon" className="camera__icon"/>
          </div>
        </div>
        <div className="search__buttons">
          <button type="submit">Google Search</button>
          <button type="button">I'm Feeling Lucky</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
