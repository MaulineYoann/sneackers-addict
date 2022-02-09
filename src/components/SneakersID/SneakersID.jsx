import React, { useState } from 'react';
import { useParams, Link} from 'react-router-dom';
import Contact from '../Contact/Contact';
import './SneakersID.scss';

const SneakersID = ({ sneakers }) => {

  const params = useParams();
  const sneakerId = params.sneakerId - 1;
  const [sizeValue, setSiszeValue] = useState('');
  const handleValue = (e) => setSiszeValue(e.target.value);
  const handleSize = e => e.preventDefault();
  

  return (
    <section className="sneakersId" >
      <aside className="detail-contain">
        <img
          src={sneakers[sneakerId].media.smallImageUrl}
          alt={sneakers[sneakerId].name}
        />
        <div className="detail-info">
          <div className="name-shoe">
            <p className="brand">{sneakers[sneakerId].brand}</p>
            <p className="shoe">{sneakers[sneakerId].shoe}</p>
          </div>
          {sneakers[sneakerId].retailPrice > 1 ? (
            <p className="price">
              prix: {sneakers[sneakerId].retailPrice}€ ou réglez en
              <span className="price-add-1">x2</span>
              <span className="price-add-2">x3</span>
              <span className="price-add-3">x4</span>
            </p>
          ) : (
            <p className="not-available">Produit en approvisionnement</p>
          )}
          <div className="size-contain">
            <form 
            onSubmit={handleSize}
            className="form-size" 
            >
              <select
                required
                className="size-select"
                value={sizeValue}
                onChange={handleValue}
              >
                <option>Selctionner une taille</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">44</option>
                <option value="44">45</option>
                <option value="45">46</option>
              </select>
              <a href='/#Form-contact'>
                <input
                  type="submit"
                  value="Choisir une taille"
                  className="submit"
                />
              </a>
            </form> 
          </div>
          <p className="promo">
            30% de Reduction avec le code{' '}
            <span className="code">DEV-FRONT</span>
          </p>
          <Link clasname="back" to="/sneakers" className="back">choisir un autre modèle</Link>
        </div>
      </aside>
      <Contact id='Contact'
      sneakers={sneakers}
      sizeValue={sizeValue} 
      img={sneakers[sneakerId].media.smallImageUrl}
      name={sneakers[sneakerId].name}
      brand={sneakers[sneakerId].brand}
      price={sneakers[sneakerId].retailPrice}
      />
    </section>
  );
};

export default SneakersID;
