import React from 'react';
import { Link } from 'react-router-dom';
import './SneakersList.scss';

const SneakersList = ({ sneaker }) => {
  
  return (
    <section id="sneakerList">
      <Link to={`/sneakers/${sneaker.id}`}>   
        <img src={sneaker.media.imageUrl} alt={sneaker.brand} />
        <p className="shoe">{sneaker.shoe}</p>
        <p className="brand">{sneaker.brand}</p>
        {sneaker.retailPrice ? (
          <p> {sneaker.retailPrice} €</p>
        ) : (
          <p className="not-available">Produit en approvisionnement</p>
        )}
      </Link>
    </section>
  );
};

export default SneakersList;
