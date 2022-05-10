import './App.css';
import React from 'react';

class App extends React.Component{

  constructor() {
    super()
    this.bestSerie = this.bestSerie.bind(this)
  }

  bestSerie() {
    console.log('The Legend of Zelda');
  }

  bestSndSerie() {
    console.log('Pokémon');
  }

  bestTrdSerie() {
    console.log('Kingdom Hearts');
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.bestSerie}>Best Game Serie</button>
        <button onClick={this.bestSndSerie}>2nd Best Game Serie</button>
        <button onClick={this.bestTrdSerie}>3rd Best Game Serie</button>
      </div>
    );
  }
}

export default App;
