function addKeys(obj, nome, valor) {
  obj[nome] = valor;
  return obj;
}

const pessoa = {
  name: 'Gabriel',
  age: 24,
};

addKeys(pessoa, 'lastName', 'Andrade');

console.log(Object.entries(pessoa));