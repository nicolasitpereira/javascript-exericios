numeroUm = parseInt(prompt("Digite um numero: "))
numeroDois = parseInt(prompt("Digite outro numero: "))

if (numeroUm > numeroDois) {

    alert(`${numeroUm} é maior que ${numeroDois}!`)

} else if (numeroDois > numeroUm){

    alert(`${numeroDois} é maior que ${numeroUm}!`)
    
} else{
    alert("Os numeros digitados são iguais!")
}
