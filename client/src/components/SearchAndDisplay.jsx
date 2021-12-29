import SearchBar from './SearchBar';
import DisplayPokemon from './DisplayPokemon';
import { WrapperPage } from './Wrapper';

const SearchAndDisplay = ({ state, setState }) => {
  return (
    <WrapperPage>
      <SearchBar loading={state.loading} setState={setState} />
      <DisplayPokemon state={state} />;
    </WrapperPage>
  );
};

export default SearchAndDisplay;
