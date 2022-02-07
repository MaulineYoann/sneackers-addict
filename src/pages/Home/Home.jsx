import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = ({ sneakers }) => {
  return (
    <main id="main">
      <div className="landing">
        <div className="landing-contain">
          <div className="landing-info">
            <h1 className="landing-title">Sneackers Addict</h1>
            <div className="landing-sneakers">
              <p>(Nouveautée)</p>
              <h3>{sneakers[4].brand}</h3>
              <h3>{sneakers[4].name}</h3>
            </div>
          </div>
          <div className="landing-image">
            <img
              className="image"
              src={sneakers[4].media.smallImageUrl}
              alt={sneakers[4].brand}
            />
          </div>
        </div>
        <h1 className="title-bottom">Découvrez nos modèles</h1>
        <div className="button-contain">
          <Link to="sneakers">
            <button className="landing-button">Découvrir</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
