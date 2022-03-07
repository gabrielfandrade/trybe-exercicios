const salarioBruto = 3000;
let recebido;

if (salarioBruto <= 1556.94) {
    recebido = salarioBruto - (salarioBruto * 0.08)
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    recebido = salarioBruto - (salarioBruto * 0.09)
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    recebido = salarioBruto - (salarioBruto * 0.11)
} else if (salarioBruto > 5189.82) {
    recebido = salarioBruto - 570.88
}

if (recebido >= 1903.99 && recebido <= 2826.65) {
    recebido = recebido - ((recebido * 0.075) - 142.80)
} else if (recebido >= 2826.66 && recebido <= 3751.05) {
    recebido = recebido - ((recebido * 0.15) - 354.80)
} else if (recebido >= 3751.06 && recebido <= 4664.68) {
    recebido = recebido - ((recebido * 0.225) - 636.13)
} else if (recebido > 46664.68) {
    recebido = recebido - ((recebido * 0.275) - 869.36)
}

console.log(recebido);