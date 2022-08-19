const weight = 50;
const height = 173;

const bmi = (weight, height) => {
  const heightInMeters = height / 100;
  const heightSquare = heightInMeters ** 2;

  const result = weight / heightSquare;

  return result;
}

console.log(bmi(weight, height));
