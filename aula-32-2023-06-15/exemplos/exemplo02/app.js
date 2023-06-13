const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (event) => {
    event.preventDefault()

    const nome = formulario.elements['nome']
    const data = formulario.elements['data']

    // "parentNode" acessa o elemento pai
    const mensagemNome = nome.parentNode.querySelector('small')
    const mensagemData = data.parentNode.querySelector('small')

    if (nome.value.trim() === '') {
        mensagemNome.innerText = 'Campo obrigatório'
    } else {
        mensagemNome.innerText = ''
    }

    if (data.value.trim() === '') {
        mensagemData.innerText = 'Campo obrigatório'
    } else {
        mensagemData.innerText = ''
    }

    const resultado = document.getElementById('resultado')
    if (nome.value.trim() !== '' && data.value.trim() !== '') {
        resultado.innerHTML = `${nome.value} nasceu em ${new Date(data.value).toLocaleDateString()}`
    } else {
        resultado.innerHTML = `Dados inválidos!`
    }
})