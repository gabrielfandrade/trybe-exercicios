const readline = require('readline-sync');

const bmi = (weight, height) => {
  const heightInMeters = height / 100;
  const heightSquare = heightInMeters ** 2;

  const result = weight / heightSquare;

  if (result < 18.5) console.log('Abaixo do peso (magreza)');
  if (result >= 18.5 && result <= 24.9) console.log('Peso normal');
  if (result >= 25.0 && result <= 29.9) console.log('Acima do peso (sobrepeso)');
  if (result >= 30.0 && result <= 34.9) console.log('Obesidade grau I');
  if (result >= 35.0 && result <= 39.9) console.log('Obesidade grau II');
  if (result >= 40.0) console.log('Obesidade graus III e IV');
}

const weight = readline.questionFloat('What\'s your weight? (kg) ');
const height = readline.questionInt('What\'s your height? (cm) ');

bmi(weight, height);
