import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Spinner = () => {
  return (
    <div>
      <Spinner animation="border">
        <span>Loading...</span>
      </Spinner>
    </div>
  );
};

export default Spinner;
