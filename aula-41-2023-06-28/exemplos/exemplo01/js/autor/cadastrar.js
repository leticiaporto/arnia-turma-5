const formulario = document.getElementById('formulario')

const cadastrarAutor = async (autor) => {
    await fetch('http://localhost:3000/autores', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(autor)
    })
    window.location = 'index.html'
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = formulario.elements['nome'].value
    const editora = formulario.elements['editora'].value

    const autor = {
        nome,
        editora,
    }

    cadastrarAutor(autor)
})