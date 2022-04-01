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

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const criarOddsAndEvens = lista => lista.sort(function (a, b) {
  return a - b;
});

console.log(`Os números ${criarOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente !`);