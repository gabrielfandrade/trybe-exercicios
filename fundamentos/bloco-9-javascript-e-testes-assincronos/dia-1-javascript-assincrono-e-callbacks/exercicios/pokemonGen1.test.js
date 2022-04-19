// Exercício 9
// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./pokemonGen1");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expected = new Error('Não temos esse pokémon para você :(');

    const callback = (error, result) => {
      expect(error).toEqual(expected);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Giratina', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expected = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade dele é Rain Dish'

    const callback = (error, result) => {
      expect(result).toBe(expected);
      done();
    };

    getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', callback);
  });
});