let anoAtual = parseInt(prompt("Digite o ano atual:"));
let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));

let idade = anoAtual - anoNascimento;

if (idade < 16) {
    alert("Você não pode votar este ano.");
} else if (idade >= 16 && idade <= 17) {
    alert("Seu voto é opcional este ano.");
} else if (idade >= 18) {
    alert("Seu voto é obrigatório este ano.");
}
