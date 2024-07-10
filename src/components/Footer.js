import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__section--left">
        <span>Rwanda</span>
      </div>
      <div className='footer__section--right'>
       <div className="footer__section">
         <a href="#">About</a>
         <a href="#">Advertising</a>
         <a href="#">Business</a>
         <a href="#">How Search works</a>
       </div>
       <div className="footer__section">
         <a href="#">Privacy</a>
         <a href="#">Terms</a>
         <a href="#">Settings</a>
       </div>
      </div>
    </div>
  );
}

export default Footer;
