let salarioAtual = parseFloat(prompt("Digite o salário mensal atual do funcionário:"));
let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste:"));

let valorReajuste = (salarioAtual * percentualReajuste) / 100;

let novoSalario = salarioAtual + valorReajuste;

alert(`O novo salário do funcionário é: R$ ${novoSalario.toFixed(2)}`);
