import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div
      id="wrapper"
      style={{
        overflow: 'hidden',
        position: 'relative',
        msUserSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
