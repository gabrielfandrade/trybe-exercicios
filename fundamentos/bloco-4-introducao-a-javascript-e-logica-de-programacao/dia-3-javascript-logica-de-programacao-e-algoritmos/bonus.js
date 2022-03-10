let n = 5;

// Exercício 1
// let as = "";

// for (let i = 0; i < n; i += 1) {
//     as += "*";
// }

// for (let i = 1; i <= n; i += 1) {
//     console.log(as);
// }

// Exercício 2
// for (let i = 0; i <= n; i += 1) {
//     let as = "";
//     for (let x = 0; x < i; x += 1) {
//         as += "*";
//     }
//     console.log(as);
// }

// Exercício 3
// for (let i = 0; i <= n; i += 1) {
//     let as = "";
//     for (let z = n; z > i; z -= 1) {
//         as += " ";
//     }
//     for (let x = 0; x < i; x += 1) {
//         as += "*";
//     }
//     console.log(as);
// }


for (let i = n; i >= 1; i -= 2) {
    let esp = "";
    let as = "";
    for (let x = 1; x < i; x += 2) {
        esp += " ";
    }
    for (let y = n; y >= i; y -= 1) {
        as += "*";
    }
    console.log(esp + as + esp);
}