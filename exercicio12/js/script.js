let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));

if (valor1 < valor2) {
    alert(`Os valores em ordem crescente são: ${valor1} e ${valor2}`);
} else if (valor2 < valor1) {
    alert(`Os valores em ordem crescente são: ${valor2} e ${valor1}`);
} else {
    alert(`Os dois valores são iguais: ${valor1}`);
}
