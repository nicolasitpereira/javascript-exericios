let timeUm = prompt("Primeiro time: ")
let golsTimeUm = parseInt(prompt(`Quantidade de Gols do ${timeUm}: `))
let timeDois = prompt("Segundo time: ")
let golsTimeDois = parseInt(prompt(`Quantidade de Gols do ${timeDois}: `))

let diferenca
let vencedor

if (golsTimeUm > golsTimeDois){

    diferenca = (golsTimeUm - golsTimeDois)

    vencedor = timeUm

    alert(`Vitória do ${vencedor} com ${diferenca} gols de Diferença`)

} else if (golsTimeDois > golsTimeUm){

    diferenca = (golsTimeDois - golsTimeUm)

    vencedor = timeDois

    alert(`Vitória do ${vencedor} com ${diferenca} gols de Diferença`)

} else {
    alert("EMPATE !")
}
