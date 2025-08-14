function validarFormulario() {
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');
    const objetivo = document.getElementById('objetivo').value;
    const radiosRotina = document.getElementsByName('rotina');

    // Reset de estilos
    nomeInput.classList.remove('erro');
    emailInput.classList.remove('erro');
    mensagemInput.classList.remove('erro');

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const mensagem = mensagemInput.value.trim();

    if (nome === '' || email === '' || mensagem === '') {
        alert('Preencha todos os campos obrigatórios.');
        if (nome === '') nomeInput.classList.add('erro');
        if (email === '') emailInput.classList.add('erro');
        if (mensagem === '') mensagemInput.classList.add('erro');
        return false;
    }

    if (objetivo === '') {
        alert('Selecione seu objetivo principal.');
        return false;
    }

    let rotinaSelecionada = false;
    for (let radio of radiosRotina) {
        if (radio.checked) {
            rotinaSelecionada = true;
            break;
        }
    }

    if (!rotinaSelecionada) {
        alert('Informe se já tentou seguir uma rotina saudável.');
        return false;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('E-mail inválido.');
        emailInput.classList.add('erro');
        return false;
    }

    alert('Formulário enviado com sucesso!');
    return true;
}
