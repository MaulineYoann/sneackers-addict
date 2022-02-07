
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss'

const Footer = () => {
  
  return <footer>
    <h3>Sneakers Addict</h3>
    <div className="contact">
      <h5>Navigation</h5>
      <a target="_blank" href="https://www.linkedin.com/in/yoann-mauline/" rel="noopener noreferrer">Linkedin</a>
      <a href="https://github.com/MaulineYoann" target="_blank" rel="noopener noreferrer">Github</a>
    </div>
    <div className="navigation">
      <h5>Produit</h5>
    <Link to="/">Acceuil</Link>
    <Link to="/sneakers">Sneakers</Link>
    </div>
    </footer>;
};

export default Footer;
