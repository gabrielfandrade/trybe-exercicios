let custo = 100;
const valor = 150;

if (custo < 0 || valor < 0) {
    console.log("ERRO!!!");
}

let lucroTotal;
let custoTotal = custo * 0.20;

lucroTotal = valor - custoTotal;

console.log("Lucro total ao vender 1000 produtos: " + lucroTotal * 1000);