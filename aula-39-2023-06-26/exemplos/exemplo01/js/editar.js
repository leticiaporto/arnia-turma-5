const formulario = document.getElementById('formulario')
let livroId = null // variável global para armazena o livro em edição

const getIdUrl = () => {
    const paramsString = window.location.search
    const params = new URLSearchParams(paramsString)
    livroId = params.get('id')
}

const buscarLivro = async () => {
    const response = await fetch(`http://localhost:3000/livros/${livroId}`)
    const livro = await response.json()
    return livro
}

const editarLivro = async (livro) => {
    await fetch(`http://localhost:3000/livros/${livroId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(livro)
    })
    
    window.location = 'index.html'
}

const carregarDadosFormulario = async (livro) => {
    document.getElementById('titulo').value = livro.titulo
    document.getElementById('autor').value = livro.autor
    document.getElementById('ano').value = livro.ano
}

const carregarDados = async () => {    
    getIdUrl()    
    const livro = await buscarLivro()
    carregarDadosFormulario(livro)
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const titulo = formulario.elements['titulo'].value
    const autor = formulario.elements['autor'].value
    const ano = formulario.elements['ano'].value

    const livro = {
        titulo,
        autor,
        ano
    }

    editarLivro(livro)
})

carregarDados()