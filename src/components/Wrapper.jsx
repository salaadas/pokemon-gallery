import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div
      id="wrapper"
      style={{
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
