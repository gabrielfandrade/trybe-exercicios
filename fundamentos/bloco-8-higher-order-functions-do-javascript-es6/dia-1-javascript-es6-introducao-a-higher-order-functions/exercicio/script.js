//Exercício 1
const contratado = (nome) => {
  const email = nome.toLowerCase().split(' ').join('_');
  return {nomeCompleto: nome, email: `${email}@trybe.com`};
}

const newEmployees = (contrato) => {
  const employees = {
    id1: contrato('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: contrato('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: contrato('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(contratado));

//Exercício 2
const check = (numero, numeroSorteado) => numero === numeroSorteado;

const loteria = (numero, func) => {
  const sorteado = Math.floor((Math.random() * 5) + 1);
  return func(numero, sorteado) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(loteria(4 ,check));