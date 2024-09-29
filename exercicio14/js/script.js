let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"))
let salarioPorHora = parseFloat(prompt("Digite o salário por hora:"))

const horasPorSemana = 40
const semanasPorMes = 4
const horasRegularesNoMes = horasPorSemana * semanasPorMes

let salarioTotal

if (horasTrabalhadas > horasRegularesNoMes) {
    let horasExtras = horasTrabalhadas - horasRegularesNoMes
    let salarioHorasExtras = (salarioPorHora * 1.5) * horasExtras
    salarioTotal = (salarioPorHora * horasRegularesNoMes) + salarioHorasExtras
} else {
    salarioTotal = salarioPorHora * horasTrabalhadas
}

alert(`O salário total do funcionário é: R$ ${salarioTotal.toFixed(2)}`)
