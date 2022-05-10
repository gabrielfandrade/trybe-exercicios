import './App.css';
import React from 'react';

function bestSerie() {
  console.log('The Legend of Zelda');
}

function bestSndSerie() {
  console.log('Pokémon');
}

function bestTrdSerie() {
  console.log('Kingdom Hearts');
}

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <button onClick={bestSerie}>Best Game Serie</button>
        <button onClick={bestSndSerie}>2nd Best Game Serie</button>
        <button onClick={bestTrdSerie}>3rd Best Game Serie</button>
      </div>
    );
  }
}

export default App;
