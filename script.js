function responderSim() {
    alert("Ótimo! Agora, para escolher o local...");

    // Adicione um dropdown para escolher o dia da semana
    var diasDaSemana = ['Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    var opcoesDia = diasDaSemana.map(function(dia, index) {
        return `${index + 1}. ${dia}`;
    });

    var escolhaDia = prompt(`Escolha o dia da semana para o nosso encontro:\n${opcoesDia.join('\n')}`);

    if (escolhaDia !== null) {
        // Armazena a resposta e o dia escolhido no localStorage
        localStorage.setItem('resposta', 'sim');
        localStorage.setItem('dia', diasDaSemana[parseInt(escolhaDia) - 1]);

        // Adiciona uma pergunta sobre a comida
        var escolhaComida = prompt("O que gostarias de fazer?");
        localStorage.setItem('comida', escolhaComida);

        alert("Estou ansioso para nosso encontro! 🥰");
        exibirRespostaArmazenada();
    }
}

function responderNao() {
    alert("Sem problemas! Se mudar de ideia, estarei te aguardando. 😊");
}

// Adicione uma função para exibir a resposta armazenada
function exibirRespostaArmazenada() {
    var respostaArmazenada = localStorage.getItem('resposta');
    var diaArmazenado = localStorage.getItem('dia');
    var comidaArmazenada = localStorage.getItem('comida');
    
    if (respostaArmazenada === 'sim' && diaArmazenado) {
        document.getElementById('resposta-container').innerHTML = `<p>Você escolheu sair. 🥰</p>`;
        document.getElementById('dia-container').innerHTML = `<p>Dia escolhido: ${diaArmazenado}</p>`;
        document.getElementById('comida-container').innerHTML = `<p>Preferência de local: ${comidaArmazenada}</p>`;
    }
}
