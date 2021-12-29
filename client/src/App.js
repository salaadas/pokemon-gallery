import './App.css';
import React, { useState } from 'react';
import Wrapper from './components/Wrapper';
import Page from './components/Page';
import SearchAndDisplay from './components/SearchAndDisplay';

function App() {
  const [state, setState] = useState({ loading: false, error: '', data: null });

  return (
    <Wrapper>
      <Page id="App">
        <SearchAndDisplay state={state} setState={setState} />
      </Page>
    </Wrapper>
  );
}

export default App;
