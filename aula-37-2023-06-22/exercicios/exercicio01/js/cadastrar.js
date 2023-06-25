const formulario = document.getElementById('formulario')

const cadastrarNoticia = async (noticia) => {
    await fetch('http://localhost:3000/noticias', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(noticia)
    })
    window.location = 'index.html'
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const titulo = formulario.elements['titulo'].value
    const autor = formulario.elements['autor'].value
    const imagem = formulario.elements['imagem'].value
    const texto = formulario.elements['texto'].value

    const noticia = {
        titulo,
        autor,
        imagem,
        texto,
    }

    cadastrarNoticia(noticia)
})