import './App.css';
import data from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="pokedex-title">Pokédex</h1>
      </header>
      <div className='pokedex-list'>
        { data.map(pokemon => 
          <Pokedex 
            key={pokemon.id} name={pokemon.name} type={pokemon.type} type2={pokemon.type2} image={pokemon.image}
            value={pokemon.averageWeight.value} measurementUnit={pokemon.averageWeight.measurementUnit} />) }
      </div>
    </div>
  );
}

export default App;
