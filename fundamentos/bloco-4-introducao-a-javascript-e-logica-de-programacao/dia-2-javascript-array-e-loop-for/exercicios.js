let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// console.log(numbers);

// let soma = 0;

// for (const number of numbers) {
//     soma += number;
// }

// console.log(soma);

// console.log(soma / numbers.length);

// if (soma > 20) {
//     console.log("valor maior que 20");
// } else {
//     console.log("valor menor ou igual a 20");
// }

let maiorNumero = 0;

for (let number of numbers) {
    if (number > maiorNumero) {
        maiorNumero = number;
    }
}

console.log(maiorNumero);