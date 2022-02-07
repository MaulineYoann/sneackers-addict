import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './Contact.scss';

const Contact = ({ sizeValue, img, name, brand, price, inputEl }) => {
  const [showModal, setShowModal] = useState(false);
  const [formName, setFormName] = useState('');
  const [formLastName, setFormLastName] = useState('');
  const [promo, setPromo] = useState('');
  
  const handleShow = () => setShowModal(!showModal);
  const handleName = (e) => setFormName(e.target.value);
  const handleLastName = (e) => setFormLastName(e.target.value);
  const handlePromo = (e) => setPromo(e.target.value);
  let total;
  const handlePromoSubmit = (e) => e.preventDefault();

  if (promo === 'DEV-FRONT') {
    let reduction = (price / 100) * 30;
    total = price - reduction;
  } else {
  }

  const handleSubmit = (e) => {
    if (formName  === '' || formLastName === "") {

      e.preventDefault();
    } else {
      handleShow();
      e.preventDefault();
    }
  };

  return (
    <div className="contain">
      <h1 className="contact-title">Contacts</h1>

      <div className="form-contain">
        <form onSubmit={handleSubmit} className="contact">
          <input
            ref={inputEl}
            type="text"
            placeholder="prénom"
            value={formName}
            onChange={handleName}
            required
          />
          <input
            type="text"
            placeholder="nom"
            value={formLastName}
            onChange={handleLastName}
            required
          />
          <input type="submit" value="Commander" className="submit" />
          <small className="error"></small>
        </form>
        <aside className="resume">
          <div className="resume-shoes">
            <img src={img} alt={name} />
            <div className="shoe">
              <h3>{brand}</h3>
              <h4>{name}</h4>
            </div>
            <p className="price">prix : {price} €</p>
          </div>
          <form className="promo" onSubmit={handlePromoSubmit}>
            <input
              type="text"
              value={promo}
              onChange={handlePromo}
              className="code-promo"
            />
            <input className="promo-submit" type="submit" value="Code Promo" />
          </form>
          <div className="total">
            <p>total: </p>
            <p className="total-value">{total ? total : price} €</p>
          </div>
        </aside>
      </div>
      {showModal && (
        <Modal
          handleShow={handleShow}
          formName={formName}
          formLastName={formLastName}
          brand={brand}
        />
      )}
    </div>
  );
};

export default Contact;
