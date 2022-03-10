
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

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
    let pares = [];
    for (const list of vector) {
        for (const key in list) {
            if (list[key] % 2 === 0) {
                pares.push(list[key]);
            }
        }
    }
    return pares;
}

console.log(arrayOfNumbers(vector));