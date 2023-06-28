const formulario = document.getElementById('formulario')

const buscarAutor = async (id) => {
    const resposta = await fetch(`http://localhost:3000/autores/${id}`)
    const autor = await resposta.json()
    return autor
}

const buscarAutores = async () => {
    const resposta = await fetch('http://localhost:3000/autores')
    const autores = await resposta.json()
    return autores
}

const carregarSelect = async () => {
    const autores = await buscarAutores()
    const autorSelect = document.getElementById('autor')
    
    const opcaoVazia = new Option('Selecione um autor...')
    autorSelect.options.add(opcaoVazia)

    autores.forEach(autor => {
        const opcao = new Option(autor.nome, autor.id)
        autorSelect.options.add(opcao)
    })
}

const cadastrarLivro = async (livro) => {
    await fetch('http://localhost:3000/livros', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(livro)
    })
    window.location = '../../index.html'
}

formulario.addEventListener('submit', async (e) => {
    e.preventDefault()

    const titulo = formulario.elements['titulo'].value
    const autor = formulario.elements['autor'].value
    const ano = formulario.elements['ano'].value

    const autorObjeto = await buscarAutor(autor)
    const livro = {
        titulo,
        autor: {
            id: autorObjeto.id,
            nome: autorObjeto.nome
        },
        ano
    }


    cadastrarLivro(livro)
})

carregarSelect()