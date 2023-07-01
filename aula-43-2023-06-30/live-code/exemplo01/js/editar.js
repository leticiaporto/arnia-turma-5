const formulario = document.getElementById('formulario')
let id = null

//função que efetua a edição dos dados na API através do método PUT
const editarPessoa = async (pessoa) => {
    await fetch(`http://localhost:3000/pessoas/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pessoa)
    })
    //redireciona para a página de listagem
    window.location = "../index.html"
}

//função que busca e retorna os dados da pessoa pelo id
const buscarPessoa = async (id) => {
    const resultado = await fetch(`http://localhost:3000/pessoas/${id}`)
    const pessoa = await resultado.json()
    return pessoa
}

const carregarDadosEditar = async () => {
    //recupera o id da URL e salva em uma variável global
    const parametros = window.location.search
    const parametrosObjeto = new URLSearchParams(parametros)
    id = parametrosObjeto.get('id')

    //chama a função que busca e retorna os dados da pessoa pelo id
    const pessoa = await buscarPessoa(id)

    //atribui o nome da pessoa ao input
    document.getElementById('nome').value = pessoa.nome
}

//escuta a submissão do formulário
formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    //recupera os dodos do formulário
    const nomeFormulario = formulario.elements['nome'].value

    //monta o objeto
    const pessoa = {
        nome: nomeFormulario
    }

    //chama a função que irá efetuar a edição dos dados passado o bjeto como parâmetro
    editarPessoa(pessoa)
})

carregarDadosEditar()