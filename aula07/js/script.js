// le uma temperatura em Fahrenheit e converte para celcius.

let temperaturafahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit : "))
let temperaturaCelcius = (temperaturafahrenheit - 32)*(5/9)

alert("A temperatura em graus Celius é : "+temperaturaCelcius+"°")

if (temperaturaCelcius<100) {
    alert("Não atingiu o poonto de ebulição")
} else {
    alert("Atingiu o poonto de ebulição")
} 