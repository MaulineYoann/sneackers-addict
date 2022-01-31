import React from 'react';

const NoMatch = () => {
  const styles = {
    heigth: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={styles}>
      <p>No Match Routes</p>
    </div>
  );
};

export default NoMatch;
