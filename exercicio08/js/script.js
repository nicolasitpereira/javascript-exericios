let numeroMacas = parseInt(prompt("Digite o número de maçãs compradas:"));

let precoPorMaca;

if (numeroMacas >= 12) {
    precoPorMaca = 1.00;
} else {
    precoPorMaca = 1.30;
}

let custoTotal = numeroMacas * precoPorMaca;

alert("O custo total da compra é R$ " + custoTotal.toFixed(2));
