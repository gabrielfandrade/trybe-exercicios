// function palindromo(string) {
//     if (string.split("").reverse().join("")==string) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(palindromo('arara'));

function maiorNumero(numList) {
    let maior = numList[0];

    for (let number of numList) {
        if (number > maior) {
            maior = number;
        }
    }

    return maior;
    
}

console.log(maiorNumero([2, 3, 6, 7, 10, 1]));