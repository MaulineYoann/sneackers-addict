import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = ({ sneakers }) => {


  return (
    <main id="main">
      <div className="landing">
        <div className="landing-contain">
          <div className="landing-info">
            <h1 className="landing-title">Sneakers Addict</h1>
            <div className="landing-sneakers">
              <p>(Nouveautée)</p>
              <h3>Jordan</h3>
              <h3>Childhood</h3>
            </div>
          </div>
          <div className="landing-image">
            <img
              className="image"
              src="https://images.stockx.com/images/Air-Jordan-Why-Not-Zer05-Childhood.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1641400959"
              alt="Jordan"
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
