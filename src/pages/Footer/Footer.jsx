import React from 'react';

const Footer = () => {
  const styleFooter = {
    height: '50px',
    padding: '10px',
    backgroundColor: '#00171f',
    color: '#fff',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return <footer style={styleFooter}>yoann @copyright</footer>;
};

export default Footer;
