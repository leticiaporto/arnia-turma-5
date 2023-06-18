let contraste = false

const carregarEstilo = () => {
    console.log('Body foi carregado!')
    const body = document.getElementById('body')
    // body.className = 'conteudo'
    body.classList.add('conteudo')
    body.classList.add('normal')

    const titulo = document.getElementById('title')
    titulo.classList.add('titulo')

    const section = document.getElementById('section')
    section.classList.add('secao')

    const paragrafos = document.getElementsByTagName('p')
    console.log(paragrafos)

    const paragrafosArray = Array.from(paragrafos)

    paragrafosArray.forEach((paragrafo) => {
        paragrafo.classList.add('paragrafo')
    })
}

const autoContraste = () => {
    const body = document.getElementById('body')

    if (contraste) {
        body.classList.remove('autoContraste')
        body.classList.add('normal')
        contraste = false
    } else {
        body.classList.remove('normal')
        body.classList.add('autoContraste')
        contraste = true
    }
}