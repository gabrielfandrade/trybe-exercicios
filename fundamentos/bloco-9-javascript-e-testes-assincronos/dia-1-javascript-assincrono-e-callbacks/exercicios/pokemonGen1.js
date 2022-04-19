// Exercício 8
const pokemon = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Chlorophyll',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Solar Power',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Rain Dish',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemon.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const poke = pokemon.find(filter);

    const { name, type, ability } = poke;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails(
  (pokemon) => pokemon.name === 'Bulbasaur',
  (error, message) => {
    if (error) {
      console.log(error);
    } else {
      console.log(message);
    }
  }
);

module.exports = {
  getPokemonDetails,
};