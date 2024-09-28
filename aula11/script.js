let contadora = 0
let somatoria = 0
let graos = 1

do {
    somatoria += graos
    console.log(`Quantidade de grãos : ${graos}. Quantidade total : ${somatoria}`)
    graos *= 2
    contadora += 1
} while (contadora < 65);
