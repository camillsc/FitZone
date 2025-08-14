function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const objetivo = document.getElementById('objetivo').value;

    const radiosRotina = document.getElementsByName('rotina');
    let rotinaSelecionada = false;
    for (let radio of radiosRotina) {
        if (radio.checked) {
            rotinaSelecionada = true;
            break;
        }
    }

    if (nome === '' || email === '' || mensagem === '') {
        alert("Preencha todos os campos obrigatórios.");
        return false;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("E-mail inválido.");
        return false;
    }

    if (!rotinaSelecionada) {
        alert("Informe se você já tentou seguir uma rotina saudável.");
        return false;
    }

    if (objetivo === "") {
        alert("Selecione seu objetivo principal.");
        return false;
    }

    return true;
}
