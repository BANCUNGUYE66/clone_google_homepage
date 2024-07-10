// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <a href="#">About</a>
        <a href="#">Store</a>
      </div>
      <div className="header__right">
        <a href="#">Gmail</a>
        <a href="#">Images</a>
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" />
      </div>
    </header>
  );
}

export default Header;
