import React from 'react';
import { Link } from 'react-router-dom';
import './Modal.scss';

const Modal = ({ handleShow, formName, formLastName, brand }) => {
  return (
    <section className="modal">
      <div className="modal-contain">
        <button onClick={handleShow}>X</button>
        <h1>
          félicitations <span>{formName}</span> <span>{formLastName}</span> la
          commande de votre <span>{brand}</span> est enregistée
        </h1>
        <Link to="/" className="modal-link">
          retour a l'acceuil
        </Link>
      </div>
    </section>
  );
};

export default Modal;
