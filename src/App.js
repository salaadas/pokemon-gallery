import './App.css';
import DisplayPokemon from './components/DisplayPokemon';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import useWindowDimensions from './hooks/useWindowDimensions';

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

function App() {
  const [state, setState] = useState({ loading: false, error: '', data: null });
  const { width, height } = useWindowDimensions();

  return (
    <Wrapper>
      <div
        style={{
          MozUserSelect: 'none',
          WebkitUserSelect: 'none',
          msUserSelect: 'none',
          userSelect: 'none',
          backgroundColor: '#90aaf5',
          width,
          height,
        }}
      >
        <SearchBar loading={state.loading} setState={setState} />
        <DisplayPokemon state={state} />;
      </div>
    </Wrapper>
  );
}

export default App;
