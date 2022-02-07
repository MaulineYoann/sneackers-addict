/* eslint-disable no-cond-assign */
import React, { useReducer } from 'react';
import './Sneakers.scss';
import SneakersList from '../SneakersList/SneakersList';

const Sneakers = ({ sneakers }) => {
  const initialeState = { filter: 'all' };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'Jordan':
        return (
          (state.filter = 'Jordan'),
          sneakers
            .filter((sneaker) => sneaker.brand.includes(state.filter))
            .map((sneaker) => (
              <div key={sneaker.id} className="sneaker-contain">
                <SneakersList sneaker={sneaker} />
              </div>
            ))
        );
      case 'Puma':
        return (
          (state.filter = 'Puma'),
          sneakers
            .filter((sneaker) => sneaker.brand.includes(state.filter))
            .map((sneaker) => (
              <div key={sneaker.id} className="sneaker-contain">
                <SneakersList sneaker={sneaker} />
              </div>
            ))
        );
      case 'Converse':
        return (
          (state.filter = 'Converse'),
          sneakers
            .filter((sneaker) => sneaker.brand.includes(state.filter))
            .map((sneaker) => (
              <div key={sneaker.id} className="sneaker-contain">
                <SneakersList sneaker={sneaker} />
              </div>
            ))
        );
      default:
        return sneakers.map((sneaker) => (
          <div key={sneaker.id} className="sneaker-contain">
            <SneakersList sneaker={sneaker} />
          </div>
        ));
    }
  };
  const [state, dispatch] = useReducer(reducer, initialeState);

  return (
    <section className="sneakers">
      <h3>Trouvez votre paire</h3>
      <ul className="filter-contain">
        <h3 className="filter-title">filtres:</h3>
        <li className="filter" onClick={() => dispatch({ type: 'all' })}>
          Tous
        </li>
        <li className="filter" onClick={() => dispatch({ type: 'Jordan' })}>
          Jordan
        </li>
        <li className="filter" onClick={() => dispatch({ type: 'Puma' })}>
          Puma
        </li>
        <li className="filter" onClick={() => dispatch({ type: 'Converse' })}>
          Converse
        </li>
      </ul>
      <div className="contain-sneakers">
        <div className="sneaker-contain">
          {state.filter !== 'all'
            ? state
            : sneakers.map((sneaker) => (
                <div key={sneaker.id} className="sneaker-contain">
                  <SneakersList sneaker={sneaker} />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Sneakers;
