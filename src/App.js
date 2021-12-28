import './App.css';
import DisplayPokemon from './components/DisplayPokemon';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import useWindowDimensions from './hooks/useWindowDimensions';
import Wrapper from './components/Wrapper';
import Page from './components/Page';

function App() {
  const [state, setState] = useState({ loading: false, error: '', data: null });
  const { width, height } = useWindowDimensions();

  return (
    <Wrapper>
      <Page id="App">
        <div
          style={{
            width,
            height,
            backgroundColor: '#90aaf5',
          }}
        >
          <SearchBar loading={state.loading} setState={setState} />
          <DisplayPokemon state={state} />;
        </div>
      </Page>
    </Wrapper>
  );
}

export default App;
