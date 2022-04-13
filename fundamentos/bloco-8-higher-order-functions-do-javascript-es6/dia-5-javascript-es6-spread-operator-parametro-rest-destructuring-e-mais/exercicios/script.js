// Exercício 1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle) // altere a chamada da funcao rectangleArea
  console.log(rectangle[0] * rectangle[1]);
});

// Exercício 2
const sum = (...numeros) => numeros.reduce((soma, numero) => soma + numero, 0);

// Exercício 3


// Exercício 4


// Exercício 5


// Exercício 6


// Exercício 7


// Exercício 8


// Exercício 9

