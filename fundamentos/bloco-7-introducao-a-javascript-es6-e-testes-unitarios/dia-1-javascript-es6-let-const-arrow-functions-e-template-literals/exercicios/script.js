// Parte 1 
// Exercicio 1
const scope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

scope(true);

// Exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const criarOddsAndEvens = lista => lista.sort(function (a, b) {
  return a - b;
});

console.log(`Os números ${criarOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente !`);

// Parte 2
// Exercicio 1
const fatorial = num => num > 1 ? num * fatorial(num - 1) : 1;
console.log(fatorial(5));

// Exercicio 2
const longestWord = frase => {
  let listaPalavras = frase.split(' ');
  let tamanho = 0;
  let maiorPalavra = '';
  for (const palavra of listaPalavras) {
    if (palavra.length > tamanho) {
      tamanho = palavra.length;
      maiorPalavra = palavra;
    }
  }
  return maiorPalavra;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));