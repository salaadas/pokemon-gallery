import './App.css';
import DisplayPokemon from './components/DisplayPokemon';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';

function App() {
  const [state, setState] = useState({ loading: false, error: '', data: null });

  return (
    <div>
      <SearchBar loading={state.loading} setState={setState} />
      <DisplayPokemon state={state} />;
    </div>
  );
}

export default App;
