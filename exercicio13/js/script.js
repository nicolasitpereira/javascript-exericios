let horaInicio = parseInt(prompt("Digite a hora de início do jogo (0 a 23):"));
let horaFim = parseInt(prompt("Digite a hora de fim do jogo (0 a 23):"));

if (horaInicio < 0 || horaInicio > 23 || horaFim < 0 || horaFim > 23) {
    alert("Por favor, insira horas válidas entre 0 e 23.");
} else {
    let duracao;
    
    if (horaFim >= horaInicio) {
        duracao = horaFim - horaInicio
    } else {
        duracao = (24 - horaInicio) + horaFim
    }

    alert(`A duração do jogo é: ${duracao} horas`)
}
