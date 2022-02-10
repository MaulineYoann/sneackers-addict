import React, { useState, useRef } from 'react';
import Modal from '../Modal/Modal';
import './Contact.scss';

const Contact = ({ sizeValue, img, name, brand, price}) => {
  const [showModal, setShowModal] = useState(false);
  const [formName, setFormName] = useState('');
  const [formLastName, setFormLastName] = useState('');
  const [promo, setPromo] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const inputEl = useRef(null);
  let total;
  let succes;
  let joke;

  const handleShow = () => setShowModal(!showModal);
  const handleName = (e) => setFormName(e.target.value);
  const handleLastName = (e) => setFormLastName(e.target.value);
  const handlePromo = (e) => setPromo(e.target.value);
  const handlePromoSubmit = (e) => e.preventDefault();
  const handleRef = () => inputEl.current.focus();

  const handleSubmit = (e) => {
    if (formName === '' || formLastName === '') {
      e.preventDefault();
      setErrorMessage("Veuillez remplir les champs")
      handleRef()
    }  else if (sizeValue === '') {
      e.preventDefault();
      setErrorMessage(`veuillez selectionner une taille de chaussure`)
    } else {
      e.preventDefault();
      handleShow();
    }
  };


  if (price < 10) {
    price = 300;
  }

  if (promo === 'DEV-FRONT') {
    let reduction = (price / 100) * 30;
    total = price - reduction;
    succes = 'Code Accepté';
  } 
  price = price * quantity

  if(quantity > 5) joke = <small className='joke'>(ça commence à faire beaucoup)</small>

  
  
  
  return (
    <div className="contain" id="Form-contact">
      <h1 className="contact-title">Contacts</h1>

      <div className="form-contain">
        <form onSubmit={handleSubmit} className="contact">
          <input
            ref={inputEl}
            type="text"
            placeholder="prénom"
            value={formName}
            onChange={handleName}
            maxLength="15"
            // required
          />
          <input
            type="text"
            placeholder="nom"
            value={formLastName}
            onChange={handleLastName}
            maxLength="20"
            // required
          />
          <input type="submit" value="Commander" className="submit" />
          <small className="error">{errorMessage}</small>
        </form>
        <aside className="resume">
          <div className="resume-shoes">
            <img src={img} alt={name} />
            <div className="quantity-contain">
              <button className='math'
              onClick={() => setQuantity((prev) => prev - 1)}
              >-</button>
              <p className="quantity">
                qté <span 
                className='value'>{quantity >= 1 ? quantity : setQuantity(1)}</span>
              </p>
              <button  className='math' onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <div className="shoe">
              <h3>{brand}</h3>
              <h4>{name}</h4>
              <h5>taille: {sizeValue}</h5>
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
            <p className="succes-code">{succes}</p>
          </form>
          <div className="total">
            <p>total: </p>
            <p className="total-value">
              {total ? <span className="total-promo">{total}</span> : price} €
            {joke}
            </p>
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
