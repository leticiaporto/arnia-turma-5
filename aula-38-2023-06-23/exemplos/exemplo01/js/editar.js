const formulario = document.getElementById('formulario')
const paramsString = window.location.search
const params = new URLSearchParams(paramsString)
const livroId = params.get('id')

const cadastrarLivro = async (livro) => {
    await fetch('http://localhost:3000/livros', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(livro)
    })
    window.location = 'index.html'
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

    cadastrarLivro(livro)
})