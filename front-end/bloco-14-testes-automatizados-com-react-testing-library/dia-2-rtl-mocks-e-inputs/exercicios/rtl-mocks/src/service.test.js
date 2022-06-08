const service = require('./service.js');

describe('Parte 1 - Exercício 1', () => {

  test('testa se a função foi chamada, seu retorno e quantas vezes foi chamada', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    
  })

})