import React from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';

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

export const WrapperPage = ({ children }) => {
  const { width, height } = useWindowDimensions();

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: '#90aaf5',
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
