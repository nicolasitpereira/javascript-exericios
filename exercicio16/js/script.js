let salarioFixo = parseFloat(prompt("Salario Fixo: R$"))
let valorVendas = parseFloat(prompt("valor total de Suas vendas: R$"))

let comissao

if (valorVendas <= 1500){
    comissao = (valorVendas*3)/100
} else {
    comissao = (valorVendas*5)/100
}

let salarioFinal = (salarioFixo + comissao)

alert(`Salario Final: R$${salarioFinal.toFixed(2)}`)
