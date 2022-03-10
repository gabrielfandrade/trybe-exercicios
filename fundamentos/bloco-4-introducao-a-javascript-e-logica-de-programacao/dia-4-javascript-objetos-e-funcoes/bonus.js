
/** Source: https://stackoverflow.com/questions/49659711/roman-to-integer-in-js-why-it-only-convert-the-first-character */
// const roman = new Map([
//     ['I', 1],
//     ['V', 5],
//     ['X', 10],
//     ['L', 50],
//     ['C', 100],
//     ['D', 500],
//     ['M', 1000],
// ]);

// function romanToInt(string) {
//     let result = 0,
//         current, previous = 0;
//     for (const char of string.split("").reverse()) {
//         current = roman.get(char);
//         if (current >= previous) {
//             result += current;
//         } else {
//             result -= current;
//         }
//         previous = current;
//     }
//     return result;
// }

// console.log(romanToInt("CM"));

// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

// function arrayOfNumbers(vector) {
//     let pares = [];
//     for (const list of vector) {
//         for (const key in list) {
//             if (list[key] % 2 === 0) {
//                 pares.push(list[key]);
//             }
//         }
//     }
//     return pares;
// }

// console.log(arrayOfNumbers(vector));

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];

function cestaFrutas(basket) {
    let cesta = basket.sort();
    let frutas = {};
    for (const key in cesta) {
        frutas[cesta[key]] = (frutas[cesta[key]] || 0) + 1;  
    }
    return frutas;
}

console.log(cestaFrutas(basket));