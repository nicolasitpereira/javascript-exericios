let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro:"));

let percentualDistribuidor = 28;
let percentualImpostos = 45;

let valorDistribuidor = (custoFabrica * percentualDistribuidor) / 100;
let valorImpostos = (custoFabrica * percentualImpostos) / 100;

let custoFinal = custoFabrica + valorDistribuidor + valorImpostos;

alert(`O custo final do carro ao consumidor é: R$ ${custoFinal.toFixed(2)}`);
