import React from 'react';
import './Footer.css'; // Make sure to import the CSS file

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <div className="Footer-section">
          <div className="Footer-logo">Your Logo</div>
        </div>
        <div className="Footer-section">
          <h2 className="Footer-heading">Explore</h2>
          <ul className="Footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="Footer-section">
          <h2 className="Footer-heading">Connect</h2>
          <ul className="Footer-links">
            <li><a href="/social">Facebook</a></li>
            <li><a href="/social">Twitter</a></li>
            <li><a href="/social">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
