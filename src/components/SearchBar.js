import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() === '') return;
  
    setLoading(true);
    setResults([]);
  
    try {
      console.log(`Searching for: ${query}`);
      const response = await fetch(`http://localhost:5001/search?q=${query}`); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched data:', data);
      setResults(data.docs);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
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
          <img 
            src="https://img.icons8.com/material-rounded/24/9aa0a6/search.png" 
            alt="Search Icon" 
            className="search__icon" 
            onClick={handleSearch} 
          />
          <input 
            type="text" 
            className="search__input" 
            value={query} 
            onChange={(e) => {
              setQuery(e.target.value);
              if (e.target.value.trim() === '') setResults([]); 
            }}
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
      {query.trim() && (
        <div className="search__results">
          {loading ? (
            <p className="loading-message">Loading...</p>
          ) : (
            results.length > 0 && results.map((book, index) => (
              <div key={index} className="search__result-item">
                <h3>{book.title}</h3>
                <p>{book.author_name?.join(', ')}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
