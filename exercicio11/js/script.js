let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));

if (valor1 > valor2) {
    alert(`O maior valor é: ${valor1}`);
} else if (valor2 > valor1) {
    alert(`O maior valor é: ${valor2}`);
} else {
    alert(`Os dois valores são iguais: ${valor1}`);
}
