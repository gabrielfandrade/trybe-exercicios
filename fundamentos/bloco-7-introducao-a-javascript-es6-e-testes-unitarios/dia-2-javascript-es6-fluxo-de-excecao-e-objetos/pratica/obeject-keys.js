function addKeys(obj, nome, valor) {
  obj[nome] = valor;
  return obj;
}

const pessoa = {
  name: 'Gabriel',
  age: 24,
};

console.log(addKeys(pessoa, 'lastName', 'Andrade'));