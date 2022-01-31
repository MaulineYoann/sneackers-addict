import React, { useContext } from 'react';
import { MyContext } from '../../context/IdContext';

const Order = () => {
    const resume = useContext(MyContext)
  return <div>
      <h2>Panier {resume.resume}</h2>
  </div>;
};

export default Order;
