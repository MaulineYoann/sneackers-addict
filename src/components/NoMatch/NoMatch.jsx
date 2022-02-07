import React from 'react';

const NoMatch = () => {
  const styles = {
    heigth: '500px',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={styles}>
      <p>Pages not found</p>
    </div>
  );
};

export default NoMatch;
