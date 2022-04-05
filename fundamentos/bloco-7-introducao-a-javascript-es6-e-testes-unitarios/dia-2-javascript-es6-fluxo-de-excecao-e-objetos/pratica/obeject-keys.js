function addKeys(obj, nome, valor) {
  obj[nome] = valor;
  return obj;
}

const pessoa = {
  name: 'Gabriel',
  age: 24,
};

const local = {
  pais: 'Brasil',
  estado: 'São Paulo',
  cidade: 'São Paulo',
}

addKeys(pessoa, 'lastName', 'Andrade');

const nova = Object.assign({}, pessoa, local)

console.log(pessoa);

console.log(nova);