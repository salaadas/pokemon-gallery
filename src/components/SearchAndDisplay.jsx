import SearchBar from './SearchBar';
import DisplayPokemon from './DisplayPokemon';
import useWindowDimensions from '../hooks/useWindowDimensions';

const SearchAndDisplay = ({ state, setState }) => {
  const { width, height } = useWindowDimensions();

  return (
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
  );
};

export default SearchAndDisplay;
