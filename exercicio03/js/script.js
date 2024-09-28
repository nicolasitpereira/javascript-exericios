let anos = parseInt(prompt("Digite a sua idade em anos:"));
let mesesAdicionais = parseInt(prompt("Digite os meses adicionais:"));
let diasAdicionais = parseInt(prompt("Digite os dias adicionais:"));

let totalDiasVividos = (anos * 365) + (mesesAdicionais * 30) + diasAdicionais;

alert(`Sua idade expressa em dias é : ${totalDiasVividos}`);
