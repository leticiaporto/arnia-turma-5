let idEditar = null
const formulario = document.getElementById('formulario')

const recuperarId = () => {
    const parametros = window.location.search
    const parametrosObjeto = new URLSearchParams(parametros)
    const id = parametrosObjeto.get('id')

    return id
}

const buscarPessoa = async (id) => {
    const resultado = await fetch(`http://localhost:3000/pessoas/${id}`)
    const pessoa = await resultado.json()

    return pessoa
}

const carregarDadosFormulario = (pessoa) => {
    document.getElementById('nome').value = pessoa.nome
    document.getElementById('idade').value = pessoa.idade
}

const editarPessoa = async (id, pessoa) => {
    await fetch(`http://localhost:3000/pessoas/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pessoa)
    })
}

const carregarDadosEditar = async () => {
    //1º: recuperar o id da URL
    idEditar = recuperarId()

    //2º: buscar a pessoa na API
    const pessoa = await buscarPessoa(idEditar)

    //3º: povoar os campos do formulário para edição
    carregarDadosFormulario(pessoa)
}

formulario.addEventListener('submit', async (e) => {
    e.preventDefault()

    //1º recuperar os dados do formulário
    const nome = formulario.elements['nome'].value
    const idade = formulario.elements['idade'].value

    //2º montar o objeto pessoa
    const pessoa = {
        nome,
        idade
    }

    //3º enviar os dados para a API
    await editarPessoa(idEditar, pessoa)

    //4º redirecionar para a tela de listagem
    window.location = '../index.html'
})

carregarDadosEditar()