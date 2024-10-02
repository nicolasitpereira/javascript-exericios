let sexo = prompt("SEXO: [M/F]").toUpperCase
let altura = prompt("ALTURA: ")

if (sexo = 'M'){
    pesoIdeal = (72.7 * altura) - 58
} else {
    pesoIdeal = (62.1 * altura) - 44.7
}
alert(`Peso ideal : ${pesoIdeal.toFixed(2)}`)
    