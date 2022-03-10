// function palindromo(string) {
//     if (string.split("").reverse().join("")==string) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(palindromo('arara'));

// function maiorNumero(numList) {
//     let maior = numList[0];
//     for (let number of numList) {
//         if (number > maior) {
//             maior = number;
//         }
//     }
//     return maior;
// }

// console.log(maiorNumero([2, 3, 6, 7, 10, 1]));

// function menorNumero(numList) {
//     let menor = numList[0];
//     for (let number of numList) {
//         if (number < menor) {
//             menor = number;
//         }
//     }
//     return menor;
// }

// console.log(menorNumero([2, 4, 6, 7, 10, 0, -3]));

// function maiorNome(strList) {
//     let str = '';
//     for (let nome of strList) {
//         if (nome.length > str.length) {
//             str = nome;
//         }
//     }
//     return str;
// }

// console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// function maisRepete(numList) {
//     let numListSort = numList.sort();
//     let vezes = {};
//     let repeat = 0;
//     let num;
//     for (const key in numListSort) {
//         vezes[numListSort[key]] = (vezes[numListSort[key]] || 0) + 1;
//         if (vezes[numListSort[key]] > repeat) {
//             repeat = vezes[numListSort[key]];
//             num = numListSort[key];
//         }
//     }
//     return num;
// }

// console.log(maisRepete([2, 3, 2, 5, 8, 3, 3]));

// function somatorio(num) {
//     let soma = 0;
//     for (let i = num; i > 0; i -= 1) {
//         soma += i;      
//     }
//     return soma;
// }

// console.log(somatorio(5));

function finalPalavra(word, ending) {
    return word.endsWith(ending);
}

console.log(finalPalavra('trybe', 'be'));