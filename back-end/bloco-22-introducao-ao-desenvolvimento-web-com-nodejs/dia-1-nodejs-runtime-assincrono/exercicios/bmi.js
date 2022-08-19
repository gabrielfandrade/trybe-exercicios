const readline = require('readline-sync');

const bmi = (weight, height) => {
  const heightInMeters = height / 100;
  const heightSquare = heightInMeters ** 2;

  const result = weight / heightSquare;

  return result;
}

const weight = readline.questionFloat('What\'s your weight? (kg) ');
const height = readline.questionInt('What\'s your height? (cm) ');

console.log(bmi(weight, height));
