import React from 'react';
import ReactDOM from 'react-dom';
import { UseProvider } from './context/IdContext';
import App from './App';


ReactDOM.render(
  <UseProvider>
    <App />
  </UseProvider>,
  document.getElementById('root')
);

