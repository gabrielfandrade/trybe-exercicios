//1 - Criar uma variável com valor fatorial
//2 - Criar uma variável para armazenar cada multiplicação e começando com valor da primeira variável
//3 - Criar um loop que percorre desde do valor fatorial até 1
//4 - Multiplicar o valor atual da segunda variável pelo valor do índice do Loop - 1
//5 - Imprimir o valor final da segunda variável

let n = 10;

let r = n;

for (let i = n; i > 1; i -= 1) {
    r = r * (i - 1);
}

console.log(r);