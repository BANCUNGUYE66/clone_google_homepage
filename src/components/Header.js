import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="options">
      <a href="#">Gmail</a>
      <a href="#">Images</a>
      <div className="options__icons">
        <img src="https://img.icons8.com/material-rounded/24/ffffff/test-tube.png" alt="Lab Measurement Icon"/>
        <img src="https://img.icons8.com/?size=48&id=PyTwzzQVz0MQ&format=png" alt="Menu Icon" className="menu-icon"/>
        <img src="https://img.icons8.com/material-rounded/24/ffffff/user.png" alt="User Icon"/>
      </div>
    </div>
  );
}

export default Header;
