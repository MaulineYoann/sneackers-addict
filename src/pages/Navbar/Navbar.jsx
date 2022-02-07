import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';


const Navbar = () => {

  const [responsiveNav, setResponsiveNav] = useState(false);
  const handleNav = () => setResponsiveNav(!responsiveNav)
  
  return (
    <header>
      <Link to="/">
        <h3>Sneaker Addict</h3>
      </Link>
      <nav className='nav'>
        <Link className='desktop-link' to="/">Acceuil</Link>
        <Link className='desktop-link' to="/sneakers"> Sneakers</Link>
        <Link className='desktop-link' to="/no-match">Contact</Link>
      </nav>
      <div
      className="burger-contain"
      onClick={handleNav} >
        <div className="burger"
        ></div>
      </div>
      <nav className={responsiveNav 
      ? 'mobile-nav' : 'desktop-nav'} >
        <div className="nav-contain">
      <Link to="/" onClick={handleNav}>Acceuil</Link>
        <Link to="/no-match" onClick={handleNav}>Enfant</Link>
        <Link to="/sneakers" onClick={handleNav}> Sneakers</Link>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
