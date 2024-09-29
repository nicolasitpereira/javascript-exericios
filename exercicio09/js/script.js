let nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação:"));
let nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação:"));

let media = (nota1 + nota2) / 2;

if (media >= 6) {
    alert("Aprovado! Sua média foi: " + media.toFixed(2));
} else {
    alert("Reprovado! Sua média foi: " + media.toFixed(2));
}
